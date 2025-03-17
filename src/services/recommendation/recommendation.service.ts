import { Employee, BusinessUnitKnowledge, TeamFormationAttribute } from '../../models/employee.model';
import { Task, ProjectContext, TeamDynamicsRequirement, BusinessUnitRelevance } from '../../models/task.model';
import { MockDataService } from '../data/mock-data.service';
import { OllamaService } from '../ollama/ollama.service';
import { Skill } from '../../models/skill.model';
import { Experience } from '../../models/experience.model';

export class RecommendationService {
  private dataService: MockDataService;
  private ollamaService: OllamaService;

  constructor() {
    this.dataService = new MockDataService();
    this.ollamaService = new OllamaService();
  }

  /**
   * Process a natural language request to find matching employees for tasks
   * @param request The natural language request from HR or manager
   * @returns Object containing matching employees, tasks, and the reasoning
   */
  async processRequest(request: string): Promise<{
    matchingEmployees: Employee[];
    tasks: Task[];
    reasoning: string;
    projectContext?: ProjectContext;
    teamRecommendation?: {
      teamMembers: Employee[];
      roles: { [employeeId: string]: string };
      teamDynamics: string;
      businessUnitInsights: string;
    };
  }> {
    try {
      // Use the LLM to extract key task requirements from the natural language request
      const extractionPrompt = `
        Extract the key task requirements and project context from the following request:
        "${request}"
        
        Return a JSON object with the following structure:
        {
          "taskDescription": "extracted task description",
          "taskPurpose": "extracted purpose",
          "requiredHardSkills": ["skill1", "skill2", ...],
          "requiredSoftSkills": ["skill1", "skill2", ...],
          "location": "extracted location",
          "complexity": "low/medium/high" (if mentioned),
          "variability": "low/medium/high" (if mentioned),
          "projectContext": {
            "projectPhase": "inception/development/mature/maintenance",
            "projectType": "prototype/product/service/internal/research",
            "projectGoals": ["goal1", "goal2", ...],
            "targetDeliveryDate": "YYYY-MM-DD" (if mentioned)
          },
          "teamDynamics": {
            "preferredAttributes": ["collaborative", "innovative", ...],
            "formationSpeed": "quick/gradual"
          },
          "businessUnitRelevance": {
            "relevantUnits": ["Sales", "Marketing", ...],
            "knowledgeRequired": true/false
          }
        }
        
        IMPORTANT: Your response must contain ONLY the JSON object, with no additional text before or after. 
        Do not include any explanations, introductions, or conclusions.
        Do not wrap the JSON in markdown code blocks, quotes, or any other formatting.
        Simply return the raw JSON object.
      `;
      
      console.log(`[Recommendation Service] Processing user request: "${this.truncateForLogging(request)}"`);
      console.log(`[Recommendation Service] Sending extraction prompt to Ollama service`);
      
      const extractionResponse = await this.ollamaService.generateResponse(extractionPrompt);
      
      console.log(`[Recommendation Service] Received extraction response from Ollama service`);

      // Parse the JSON response
      let extractedRequirements;
      try {
        // Try to extract JSON from the response in case the LLM added text around it
        const jsonString = this.extractJsonFromText(extractionResponse);
        extractedRequirements = JSON.parse(jsonString);
        
        console.log(`[Recommendation Service] Successfully parsed extraction response as JSON`);
        console.log(`[Recommendation Service] Extracted requirements:`, JSON.stringify(extractedRequirements, null, 2));
      } catch (error) {
        console.error('[Recommendation Service] Failed to parse LLM response as JSON:', error);
        console.error('[Recommendation Service] Raw response:', extractionResponse);
        // Return some default employees and tasks to avoid empty results
        const defaultEmployees = this.dataService.getEmployees().slice(0, 3);
        const defaultTasks = this.dataService.getTasks().slice(0, 2);
        return {
          matchingEmployees: defaultEmployees,
          tasks: defaultTasks,
          reasoning: 'Failed to extract task requirements from the request, but here are some potential matches.'
        };
      }

      // Create project context
      const projectContext: ProjectContext = {
        projectPhase: extractedRequirements.projectContext?.projectPhase || 'inception',
        projectType: extractedRequirements.projectContext?.projectType || 'prototype',
        projectGoals: extractedRequirements.projectContext?.projectGoals || [],
        targetDeliveryDate: extractedRequirements.projectContext?.targetDeliveryDate ? 
          new Date(extractedRequirements.projectContext.targetDeliveryDate) : undefined
      };

      // Create team dynamics requirements
      const teamDynamicsRequirements: TeamDynamicsRequirement[] = 
        (extractedRequirements.teamDynamics?.preferredAttributes || []).map((attr: string) => ({
          attributeName: attr,
          preferredValues: ['collaborative', 'adaptive', 'innovative'], // Default values
          importance: extractedRequirements.teamDynamics?.formationSpeed === 'quick' ? 5 : 3
        }));

      // Create business unit relevance
      const businessUnitRelevance: BusinessUnitRelevance[] = 
        (extractedRequirements.businessUnitRelevance?.relevantUnits || []).map((unit: string) => ({
          businessUnitId: `bu_${unit.toLowerCase().replace(/\s+/g, '_')}`,
          businessUnitName: unit,
          relevanceLevel: 4, // Default high relevance
          knowledgeRequired: extractedRequirements.businessUnitRelevance?.knowledgeRequired || false
        }));

      // Find or create tasks based on the extracted requirements
      let tasks: Task[] = [];
      
      // If we have hard skills mentioned, try to find matching tasks
      if (extractedRequirements.requiredHardSkills && extractedRequirements.requiredHardSkills.length > 0) {
        tasks = this.dataService.findTasksBySkills(extractedRequirements.requiredHardSkills);
        
        // Enhance tasks with extracted context
        tasks = tasks.map(task => ({
          ...task,
          projectContext,
          teamDynamicsRequirements,
          businessUnitRelevance
        }));
      } 
      
      // If no specific tasks match, get all tasks
      if (tasks.length === 0) {
        tasks = this.dataService.getTasks();
      }
      
      // Find matching employees for these tasks
      let matchingEmployees: Employee[] = [];
      
      if (tasks.length > 0) {
        // For each task, find matching employees
        const employeeMatches = tasks.flatMap(task => {
          return this.dataService.findEmployeesForTask(task.id);
        });
        
        // Extract just the employee objects and deduplicate
        matchingEmployees = Array.from(
          new Set(
            employeeMatches.map(match => match.employee.id)
          )
        ).map(id => 
          employeeMatches.find(match => match.employee.id === id)!.employee
        );
        
        // Apply additional filters based on extracted requirements
        if (extractedRequirements.location) {
          matchingEmployees = matchingEmployees.filter(emp => 
            emp.location.toLowerCase().includes(extractedRequirements.location.toLowerCase())
          );
        }
        
        // Filter by project phase if relevant
        if (extractedRequirements.projectContext?.projectPhase === 'mature') {
          matchingEmployees = matchingEmployees.filter(emp => 
            !emp.currentProjectPhase || emp.currentProjectPhase === 'mature'
          );
        }
      }
      
      // If we still don't have any matching employees, return some default employees
      if (matchingEmployees.length === 0) {
        matchingEmployees = this.dataService.getEmployees().slice(0, 3);
      }

      // Generate team recommendation
      const teamRecommendation = await this.generateTeamRecommendation(
        matchingEmployees, 
        extractedRequirements.teamComposition?.roles || [],
        projectContext,
        businessUnitRelevance
      );

      // Generate reasoning using the LLM
      const reasoningPrompt = `
        I need to match employees to the following project requirements:
        ${JSON.stringify(extractedRequirements, null, 2)}
        
        Here are the identified tasks:
        ${JSON.stringify(tasks.map(t => ({
          id: t.id,
          description: t.description,
          purpose: t.purpose,
          requiredHardSkills: t.requiredHardSkills,
          requiredSoftSkills: t.requiredSoftSkills,
          projectContext: t.projectContext
        })), null, 2)}
        
        Here are the potential matching employees:
        ${JSON.stringify(matchingEmployees.map(e => ({
          id: e.id,
          name: e.name,
          hardSkills: e.hardSkills,
          softSkills: e.softSkills,
          pastExperience: e.pastExperience.map(exp => exp.description),
          careerAspirations: e.careerAspirations,
          capacity: e.capacity,
          location: e.location,
          currentProjectPhase: e.currentProjectPhase,
          businessUnitKnowledge: e.businessUnitKnowledge
        })), null, 2)}
        
        Here's the recommended team:
        ${JSON.stringify(teamRecommendation, null, 2)}
        
        Provide a detailed explanation of why these employees match the project requirements.
        Focus on:
        1. Their hard skills and soft skills in relation to the task requirements
        2. Their experience and how it relates to the project context
        3. Business unit knowledge that might be beneficial
        4. Team dynamics and how the recommended team would work together
        5. Availability and location considerations
        
        FORMAT YOUR RESPONSE USING MARKDOWN:
        - Use ## headings for main sections
        - Use ### for subsections
        - Use **bold** for employee names and important skills
        - Use *italics* for emphasis
        - Use bullet points for lists of skills or qualifications
        - Use numbered lists for priority or sequential information
        - Use tables where appropriate to compare employees
        - Use code blocks for any technical details or requirements
        
        Format your response as if you are speaking directly to the manager who made the request.
        Be conversational but professional. Highlight 2-3 key employees that are particularly good matches.
        If there are employees from mature projects who could be reallocated, specifically mention this.
        If there are employees with relevant certifications or recent training, highlight this.
      `;

      console.log(`[Recommendation Service] Sending reasoning prompt to Ollama service`);
      
      const reasoning = await this.ollamaService.generateResponse(reasoningPrompt);
      
      console.log(`[Recommendation Service] Received reasoning response from Ollama service`);
      console.log(`[Recommendation Service] Reasoning preview: "${this.truncateForLogging(reasoning)}"`);

      return {
        matchingEmployees,
        tasks,
        reasoning,
        projectContext,
        teamRecommendation
      };
    } catch (error) {
      console.error('Error in recommendation service:', error);
      // Return some default employees and tasks to avoid empty results
      const defaultEmployees = this.dataService.getEmployees().slice(0, 3);
      const defaultTasks = this.dataService.getTasks().slice(0, 2);
      return {
        matchingEmployees: defaultEmployees,
        tasks: defaultTasks,
        reasoning: 'An error occurred while processing your request, but here are some potential matches.'
      };
    }
  }

  /**
   * Generate a team recommendation based on a natural language request
   * @param request The natural language request
   * @returns Object containing the team recommendation
   */
  public async generateTeamRecommendation(request: string): Promise<{
    teamMembers: Employee[];
    roles: { [employeeId: string]: string };
    teamDynamics: string;
    businessUnitInsights: string;
  }>;

  /**
   * Generate a team recommendation based on matching employees and required roles
   */
  public async generateTeamRecommendation(
    matchingEmployees: Employee[],
    requiredRoles: string[],
    projectContext: ProjectContext,
    businessUnitRelevance: BusinessUnitRelevance[]
  ): Promise<{
    teamMembers: Employee[];
    roles: { [employeeId: string]: string };
    teamDynamics: string;
    businessUnitInsights: string;
  }>;

  /**
   * Implementation of generateTeamRecommendation
   */
  public async generateTeamRecommendation(
    requestOrEmployees: string | Employee[],
    requiredRoles?: string[],
    projectContext?: ProjectContext,
    businessUnitRelevance?: BusinessUnitRelevance[]
  ): Promise<{
    teamMembers: Employee[];
    roles: { [employeeId: string]: string };
    teamDynamics: string;
    businessUnitInsights: string;
  }> {
    // If the first parameter is a string, process it as a natural language request
    if (typeof requestOrEmployees === 'string') {
      // Process the request to extract requirements and find matching employees
      const processedRequest = await this.processRequest(requestOrEmployees);
      
      // If we have a team recommendation from the processed request, return it
      if (processedRequest.teamRecommendation) {
        return processedRequest.teamRecommendation;
      }
      
      // Otherwise, generate a team recommendation using the matching employees
      const defaultRoles = ['Developer', 'Analyst', 'Project Manager'];
      const defaultProjectContext: ProjectContext = {
        projectPhase: 'inception',
        projectType: 'product',
        projectGoals: ['Deliver high-quality solution'],
        targetDeliveryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) // 90 days from now
      };
      const defaultBusinessUnitRelevance: BusinessUnitRelevance[] = [];
      
      return this.generateTeamRecommendation(
        processedRequest.matchingEmployees,
        defaultRoles,
        processedRequest.projectContext || defaultProjectContext,
        defaultBusinessUnitRelevance
      );
    }
    
    // Otherwise, process it as a direct team recommendation request
    try {
      const matchingEmployees = requestOrEmployees;
      const actualBusinessUnitRelevance = businessUnitRelevance || [];
      
      // If no matching employees, return some default employees
      if (matchingEmployees.length === 0) {
        const defaultEmployees = this.dataService.getEmployees().slice(0, 3);
        const defaultRoleAssignments: { [employeeId: string]: string } = {};
        defaultEmployees.forEach((emp, index) => {
          defaultRoleAssignments[emp.id] = ['Team Lead', 'Developer', 'Analyst'][index] || 'Team Member';
        });
        
        return {
          teamMembers: defaultEmployees,
          roles: defaultRoleAssignments,
          teamDynamics: "This is a default team as no specific requirements were provided.",
          businessUnitInsights: "No specific business unit insights available for this default team."
        };
      }
      
      if (!requiredRoles || !projectContext) {
        throw new Error('Required roles and project context must be provided');
      }
      
      // If no specific roles are required, use default roles based on project type
      if (requiredRoles.length === 0) {
        if (projectContext.projectType === 'prototype') {
          requiredRoles = ['developer', 'designer', 'business analyst'];
        } else if (projectContext.projectType === 'product') {
          requiredRoles = ['product manager', 'developer', 'designer', 'qa engineer'];
        } else {
          requiredRoles = ['project manager', 'developer', 'business analyst'];
        }
      }
      
      // Create a map to assign employees to roles
      const roleAssignments: { [employeeId: string]: string } = {};
      const teamMembers: Employee[] = [];
      
      // For each role, find the best matching employee
      for (const role of requiredRoles) {
        let bestMatch: Employee | null = null;
        let bestMatchScore = 0;
        
        for (const employee of matchingEmployees) {
          // Skip employees already assigned to a role
          if (roleAssignments[employee.id]) continue;
          
          // Calculate match score based on skills, experience, and other factors
          let matchScore = 0;
          
          // Check if position or past experience matches the role
          if (employee.position.toLowerCase().includes(role.toLowerCase())) {
            matchScore += 10;
          }
          
          // Check past experience
          for (const exp of employee.pastExperience) {
            if (exp.role.toLowerCase().includes(role.toLowerCase())) {
              matchScore += 5;
            }
          }
          
          // Check career aspirations
          for (const aspiration of employee.careerAspirations) {
            if (aspiration.toLowerCase().includes(role.toLowerCase())) {
              matchScore += 3;
            }
          }
          
          // Check business unit knowledge if relevant
          if (actualBusinessUnitRelevance.length > 0 && employee.businessUnitKnowledge) {
            for (const buKnowledge of employee.businessUnitKnowledge) {
              for (const buRelevance of actualBusinessUnitRelevance) {
                if (buKnowledge.businessUnitName === buRelevance.businessUnitName) {
                  matchScore += buKnowledge.knowledgeLevel * buRelevance.relevanceLevel;
                }
              }
            }
          }
          
          // Check capacity
          if (employee.capacity >= 50) {
            matchScore += employee.capacity / 10;
          }
          
          // Update best match if this employee has a higher score
          if (matchScore > bestMatchScore) {
            bestMatchScore = matchScore;
            bestMatch = employee;
          }
        }
        
        // Assign the best matching employee to this role
        if (bestMatch) {
          roleAssignments[bestMatch.id] = role;
          teamMembers.push(bestMatch);
        }
      }
      
      // If we still don't have enough team members, add more from the matching employees
      if (teamMembers.length < Math.min(3, matchingEmployees.length)) {
        for (const employee of matchingEmployees) {
          if (!roleAssignments[employee.id]) {
            roleAssignments[employee.id] = 'Team Member';
            teamMembers.push(employee);
            
            if (teamMembers.length >= Math.min(3, matchingEmployees.length)) {
              break;
            }
          }
        }
      }
      
      // Generate team dynamics insights
      const teamDynamicsPrompt = `
        Analyze the team dynamics for the following team members:
        ${JSON.stringify(teamMembers.map(e => ({
          name: e.name,
          role: roleAssignments[e.id],
          softSkills: e.softSkills,
          teamFormationAttributes: this.extractTeamFormationAttributes(e),
          preferredWorkStyle: e.preferredWorkStyle
        })), null, 2)}
        
        Provide insights on how this team would work together, considering:
        1. Communication styles
        2. Leadership dynamics
        3. Potential challenges and how to address them
        4. Recommendations for team formation activities
        
        Keep your response concise and actionable.
      `;

      console.log(`[Recommendation Service] Sending team dynamics prompt to Ollama service`);
      
      const teamDynamics = await this.ollamaService.generateResponse(teamDynamicsPrompt);
      
      console.log(`[Recommendation Service] Received team dynamics response from Ollama service`);
      console.log(`[Recommendation Service] Team dynamics preview: "${this.truncateForLogging(teamDynamics)}"`);

      // Generate business unit insights
      const businessUnitInsightsPrompt = `
        Analyze the business unit knowledge for the following team members:
        ${JSON.stringify(teamMembers.map(e => ({
          name: e.name,
          role: roleAssignments[e.id],
          businessUnitKnowledge: this.extractBusinessUnitKnowledge(e)
        })), null, 2)}
        
        In relation to these relevant business units:
        ${JSON.stringify(actualBusinessUnitRelevance, null, 2)}
        
        Provide insights on how the team's business knowledge can benefit the project.
        Identify any knowledge gaps and suggest ways to address them.
        
        Keep your response concise and actionable.
      `;
      
      console.log(`[Recommendation Service] Sending business unit insights prompt to Ollama service`);
      
      const businessUnitInsights = await this.ollamaService.generateResponse(businessUnitInsightsPrompt);
      
      console.log(`[Recommendation Service] Received business unit insights response from Ollama service`);
      console.log(`[Recommendation Service] Business unit insights preview: "${this.truncateForLogging(businessUnitInsights)}"`);

      return {
        teamMembers,
        roles: roleAssignments,
        teamDynamics,
        businessUnitInsights
      };
    } catch (error) {
      console.error('Error generating team recommendation:', error);
      // Return a default team recommendation instead of throwing an error
      const defaultEmployees = this.dataService.getEmployees().slice(0, 3);
      const defaultRoleAssignments: { [employeeId: string]: string } = {};
      defaultEmployees.forEach((emp, index) => {
        defaultRoleAssignments[emp.id] = ['Team Lead', 'Developer', 'Analyst'][index] || 'Team Member';
      });
      
      return {
        teamMembers: defaultEmployees,
        roles: defaultRoleAssignments,
        teamDynamics: "This is a default team as an error occurred during team formation.",
        businessUnitInsights: "No specific business unit insights available for this default team."
      };
    }
  }

  /**
   * Extract team formation attributes from an employee
   * @param employee The employee to extract attributes from
   * @returns An object containing team formation attributes
   */
  private extractTeamFormationAttributes(employee: Employee): any {
    // Extract relevant attributes from soft skills and other properties
    const attributes: any = {
      collaboration: 'medium',
      communication: 'medium',
      leadership: 'low',
      adaptability: 'medium',
      problemSolving: 'medium'
    };
    
    // Map soft skills to team formation attributes
    for (const skill of employee.softSkills) {
      const skillName = skill.name.toLowerCase();
      
      if (skillName.includes('collaborat')) {
        attributes.collaboration = this.mapSkillLevelToAttribute(skill.proficiency);
      }
      
      if (skillName.includes('communicat')) {
        attributes.communication = this.mapSkillLevelToAttribute(skill.proficiency);
      }
      
      if (skillName.includes('lead') || skillName.includes('manage')) {
        attributes.leadership = this.mapSkillLevelToAttribute(skill.proficiency);
      }
      
      if (skillName.includes('adapt') || skillName.includes('flexib')) {
        attributes.adaptability = this.mapSkillLevelToAttribute(skill.proficiency);
      }
      
      if (skillName.includes('problem') || skillName.includes('solv')) {
        attributes.problemSolving = this.mapSkillLevelToAttribute(skill.proficiency);
      }
    }
    
    // Check if the employee has a preferred work style
    if (employee.preferredWorkStyle) {
      attributes.workStyle = employee.preferredWorkStyle;
    } else {
      attributes.workStyle = 'balanced';
    }
    
    return attributes;
  }
  
  /**
   * Map skill proficiency level to attribute value
   * @param level The proficiency level (1-5)
   * @returns A string representation of the attribute level
   */
  private mapSkillLevelToAttribute(level: number): string {
    if (level >= 4) return 'high';
    if (level >= 2) return 'medium';
    return 'low';
  }
  
  /**
   * Extract business unit knowledge from an employee
   * @param employee The employee to extract business unit knowledge from
   * @returns An array of business unit knowledge objects
   */
  private extractBusinessUnitKnowledge(employee: Employee): any[] {
    if (!employee.businessUnitKnowledge) {
      return [];
    }
    
    return employee.businessUnitKnowledge.map(buk => ({
      businessUnit: buk.businessUnitName,
      knowledgeLevel: buk.knowledgeLevel,
      experience: buk.yearsOfExperience
    }));
  }

  /**
   * Process a request to analyze a task
   * @param request The natural language request
   * @returns Object containing the task analysis
   */
  private async processTaskAnalysisRequest(request: string): Promise<{
    response: string;
    analysis?: {
      complexity: {
        score: number;
        factors: string[];
      };
      variability: {
        score: number;
        factors: string[];
      };
      recommendations: string[];
    };
    error?: string;
  }> {
    try {
      // Extract task ID from request
      const taskId = this.extractTaskIdFromMessage(request);
      
      if (!taskId) {
        return {
          response: "I couldn't identify a task to analyze. Could you please specify a task ID or provide more details about the task?",
          error: "No task ID found in request",
          analysis: {
            complexity: { score: 0, factors: [] },
            variability: { score: 0, factors: [] },
            recommendations: ["Please provide a valid task ID"]
          }
        };
      }
      
      // Analyze task
      const analysis = this.analyzeTask(taskId);
      
      return {
        response: `I've analyzed the task with ID ${taskId}. Here are the results:`,
        analysis: analysis
      };
    } catch (error: unknown) {
      console.error('Error processing task analysis request:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return {
        response: "Sorry, I encountered an error while analyzing the task.",
        error: errorMessage,
        analysis: {
          complexity: { score: 0, factors: [] },
          variability: { score: 0, factors: [] },
          recommendations: ["An error occurred during analysis"]
        }
      };
    }
  }

  /**
   * Extract task ID from a natural language message
   * @param message The natural language message
   * @returns The extracted task ID, or null if not found
   */
  private extractTaskIdFromMessage(message: string): string | null {
    // Simple regex to find task IDs (assuming they're in the format "TASK-123" or similar)
    const taskIdRegex = /\b(TASK|task)-\d+\b/i;
    const match = message.match(taskIdRegex);
    
    if (match) {
      return match[0];
    }
    
    // If no task ID found, check if there's a task name mentioned
    const tasks = this.getAvailableTasks();
    for (const task of tasks) {
      if (message.toLowerCase().includes(task.description.toLowerCase())) {
        return task.id;
      }
    }
    
    return null;
  }

  /**
   * Extract employee ID from a natural language message
   * @param message The natural language message
   * @returns The extracted employee ID, or null if not found
   */
  private extractEmployeeIdFromMessage(message: string): string | null {
    // Simple regex to find employee IDs (assuming they're in the format "EMP-123" or similar)
    const employeeIdRegex = /\b(EMP|emp)-\d+\b/i;
    const match = message.match(employeeIdRegex);
    
    if (match) {
      return match[0];
    }
    
    // If no employee ID found, check if there's an employee name mentioned
    const employees = this.getAllEmployees();
    for (const employee of employees) {
      if (message.toLowerCase().includes(employee.name.toLowerCase())) {
        return employee.id;
      }
    }
    
    return null;
  }

  /**
   * Assign a role to an employee based on their skills and the requirements
   * @param employee The employee to assign a role to
   * @param requirements The requirements for the team
   * @returns The assigned role
   */
  private assignRoleBasedOnSkills(employee: Employee, requirements: {
    hardSkills: string[];
    softSkills: string[];
    businessUnits: string[];
    projectPhase?: string;
  }): string {
    // Simple role assignment logic for demo
    if (employee.position.toLowerCase().includes('manager') || 
        employee.position.toLowerCase().includes('lead')) {
      return 'Team Lead';
    }
    
    if (employee.hardSkills && employee.hardSkills.some(skill => 
      skill.name.toLowerCase().includes('architect') && skill.proficiency >= 4)) {
      return 'Architect';
    }
    
    if (employee.hardSkills && employee.hardSkills.some(skill => 
      skill.name.toLowerCase().includes('frontend') || 
      skill.name.toLowerCase().includes('ui') || 
      skill.name.toLowerCase().includes('ux'))) {
      return 'Frontend Developer';
    }
    
    if (employee.hardSkills && employee.hardSkills.some(skill => 
      skill.name.toLowerCase().includes('backend') || 
      skill.name.toLowerCase().includes('server') || 
      skill.name.toLowerCase().includes('database'))) {
      return 'Backend Developer';
    }
    
    if (employee.hardSkills && employee.hardSkills.some(skill => 
      skill.name.toLowerCase().includes('test') || 
      skill.name.toLowerCase().includes('qa'))) {
      return 'QA Engineer';
    }
    
    return 'Developer';
  }

  /**
   * Evaluate team dynamics based on team members
   * @param teamMembers The team members to evaluate
   * @returns A string describing the team dynamics
   */
  private evaluateTeamDynamics(teamMembers: Employee[]): string {
    // Simple team dynamics evaluation for demo
    const hasLeader = teamMembers.some(member => 
      member.position.toLowerCase().includes('manager') || 
      member.position.toLowerCase().includes('lead'));
    
    const hasArchitect = teamMembers.some(member => 
      member.hardSkills && member.hardSkills.some(skill => 
        skill.name.toLowerCase().includes('architect') && skill.proficiency >= 4));
    
    const hasFrontend = teamMembers.some(member => 
      member.hardSkills && member.hardSkills.some(skill => 
        skill.name.toLowerCase().includes('frontend') || 
        skill.name.toLowerCase().includes('ui') || 
        skill.name.toLowerCase().includes('ux')));
    
    const hasBackend = teamMembers.some(member => 
      member.hardSkills && member.hardSkills.some(skill => 
        skill.name.toLowerCase().includes('backend') || 
        skill.name.toLowerCase().includes('server') || 
        skill.name.toLowerCase().includes('database')));
    
    const hasQA = teamMembers.some(member => 
      member.hardSkills && member.hardSkills.some(skill => 
        skill.name.toLowerCase().includes('test') || 
        skill.name.toLowerCase().includes('qa')));
    
    let dynamics = 'Team has ';
    const roles: string[] = [];
    
    if (hasLeader) roles.push('leadership');
    if (hasArchitect) roles.push('architecture expertise');
    if (hasFrontend) roles.push('frontend development');
    if (hasBackend) roles.push('backend development');
    if (hasQA) roles.push('quality assurance');
    
    dynamics += roles.join(', ');
    
    if (roles.length >= 4) {
      dynamics += '. This is a well-rounded team.';
    } else if (roles.length >= 2) {
      dynamics += '. This team covers some key areas but may need additional expertise.';
    } else {
      dynamics += '. This team lacks diversity in roles and may struggle with complex projects.';
    }
    
    return dynamics;
  }

  /**
   * Evaluate business unit coverage based on team members
   * @param teamMembers The team members to evaluate
   * @returns An array of business units covered by the team
   */
  private evaluateBusinessUnitCoverage(teamMembers: Employee[]): string[] {
    // Simple business unit coverage evaluation for demo
    const businessUnits = new Set<string>();
    
    teamMembers.forEach(member => {
      if (member.businessUnitKnowledge) {
        member.businessUnitKnowledge.forEach(knowledge => {
          if (knowledge.knowledgeLevel >= 3) {
            businessUnits.add(knowledge.businessUnitName);
          }
        });
      }
    });
    
    return Array.from(businessUnits);
  }

  /**
   * Get all available tasks
   * @returns Array of tasks
   */
  getAvailableTasks(): Task[] {
    return this.dataService.getTasks();
  }

  /**
   * Get all employees
   * @returns Array of employees
   */
  getAllEmployees(): Employee[] {
    return this.dataService.getEmployees();
  }

  /**
   * Find tasks suitable for a specific employee
   * @param employeeId The ID of the employee
   * @returns Array of suitable tasks
   */
  findTasksForEmployee(employeeId: string): Task[] {
    const taskMatches = this.dataService.findTasksForEmployee(employeeId);
    return taskMatches.map(match => match.task);
  }

  /**
   * Find employees suitable for a specific task
   * @param taskId The ID of the task
   * @returns Array of suitable employees
   */
  findEmployeesForTask(taskId: string): Employee[] {
    const employeeMatches = this.dataService.findEmployeesForTask(taskId);
    return employeeMatches.map(match => match.employee);
  }

  /**
   * Analyze task complexity and variability
   * @param taskId The ID of the task to analyze
   * @returns Analysis object with complexity and variability metrics
   */
  analyzeTask(taskId: string): {
    complexity: {
      score: number;
      factors: string[];
    };
    variability: {
      score: number;
      factors: string[];
    };
    recommendations: string[];
  } {
    return this.dataService.analyzeTask(taskId);
  }

  /**
   * Get employee skill assessment history
   * @param employeeId The ID of the employee
   * @returns Array of assessments for the employee
   */
  getEmployeeAssessments(employeeId: string) {
    return this.dataService.getAssessmentsByEmployee(employeeId);
  }

  /**
   * Get employee experience history
   * @param employeeId The ID of the employee
   * @returns Array of experiences for the employee
   */
  getEmployeeExperiences(employeeId: string) {
    return this.dataService.getExperiencesByEmployee(employeeId);
  }

  /**
   * Get employees by project phase
   * @param phase The project phase to filter by
   * @returns Array of employees in the specified project phase
   */
  getEmployeesByProjectPhase(phase: string): Employee[] {
    return this.dataService.getEmployees().filter(emp => 
      emp.currentProjectPhase === phase
    );
  }

  /**
   * Get employees with specific business unit knowledge
   * @param businessUnitName The name of the business unit
   * @returns Array of employees with knowledge of the specified business unit
   */
  getEmployeesByBusinessUnitKnowledge(businessUnitName: string): Employee[] {
    return this.dataService.getEmployees().filter(emp => 
      emp.businessUnitKnowledge?.some(bu => 
        bu.businessUnitName.toLowerCase() === businessUnitName.toLowerCase()
      )
    );
  }

  /**
   * Get employee profile by ID
   * @param employeeId The ID of the employee
   * @returns The employee profile
   */
  public async getEmployeeProfile(employeeId: string): Promise<{
    id: string;
    name: string;
    position: string;
    department: string;
    hardSkills: Skill[];
    softSkills: Skill[];
    pastExperience: Experience[];
    careerAspirations: string[];
    location: string;
    currentProjectPhase?: string;
    businessUnitKnowledge?: BusinessUnitKnowledge[];
    availabilityDate?: Date;
  }> {
    try {
      const employee = await this.dataService.getEmployeeById(employeeId);
      
      if (!employee) {
        throw new Error(`Employee with ID ${employeeId} not found`);
      }
      
      return {
        id: employee.id,
        name: employee.name,
        position: employee.position,
        department: employee.department,
        hardSkills: employee.hardSkills || [],
        softSkills: employee.softSkills || [],
        pastExperience: employee.pastExperience || [],
        careerAspirations: employee.careerAspirations || [],
        location: employee.location,
        currentProjectPhase: employee.currentProjectPhase,
        businessUnitKnowledge: employee.businessUnitKnowledge,
        availabilityDate: employee.availabilityDate
      };
    } catch (error) {
      console.error(`Error fetching employee profile for ID ${employeeId}:`, error);
      throw new Error('Failed to fetch employee profile');
    }
  }

  /**
   * Extract hard skills from an employee
   * @param employee The employee to extract hard skills from
   * @returns Array of hard skills
   */
  private extractHardSkills(employee: Employee): string[] {
    if (!employee.hardSkills) return [];
    
    return employee.hardSkills.map((attr: Skill) => {
      return `${attr.name} (${attr.proficiency})`;
    });
  }

  /**
   * Extract soft skills from an employee
   * @param employee The employee to extract soft skills from
   * @returns Array of soft skills
   */
  private extractSoftSkills(employee: Employee): string[] {
    if (!employee.softSkills) return [];
    
    return employee.softSkills.map((attr: Skill) => {
      return `${attr.name} (${attr.proficiency})`;
    });
  }

  /**
   * Extract business unit names from an employee
   * @param employee The employee to extract business unit names from
   * @returns Array of business unit names
   */
  private extractBusinessUnitNames(employee: Employee): string[] {
    if (!employee.businessUnitKnowledge) return [];
    
    return employee.businessUnitKnowledge.map((unit: BusinessUnitKnowledge) => {
      return `${unit.businessUnitName} (${unit.knowledgeLevel})`;
    });
  }

  /**
   * Extract attributes from skills
   * @param skills Array of skills
   * @returns Array of attributes
   */
  private extractAttributesFromSkills(skills: Skill[]): { attributeName: string; attributeValue: string }[] {
    const attributes: { attributeName: string; attributeValue: string }[] = [];
    
    skills.forEach((skill: Skill) => {
      if (skill.proficiency > 3) {
        attributes.push({
          attributeName: skill.name,
          attributeValue: `${skill.proficiency}/5`
        });
      }
    });
    
    return attributes;
  }

  /**
   * Helper method to extract JSON from text that might contain additional content
   * @param text Text that might contain JSON
   * @returns Extracted JSON string
   */
  private extractJsonFromText(text: string): string {
    // Try to find JSON object in the text
    const jsonRegex = /{[\s\S]*}/;
    const match = text.match(jsonRegex);
    
    if (match && match[0]) {
      console.log('[Recommendation Service] Extracted JSON from text response');
      return match[0];
    }
    
    // If no JSON object found, return the original text
    // This will likely fail JSON.parse but we'll handle that in the calling code
    console.log('[Recommendation Service] No JSON object found in text, returning original');
    return text;
  }

  /**
   * Helper method to truncate text for logging
   */
  private truncateForLogging(text: string, maxLength: number = 100): string {
    if (!text) return '';
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }
}

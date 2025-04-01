import { Employee } from '../../models/employee.model';
import { Task } from '../../models/task.model';
import { Skill } from '../../models/skill.model';
import { Experience } from '../../models/experience.model';
import { License } from '../../models/license.model';
import { Assessment } from '../../models/assessment.model';
import { mockEmployees } from '../../data/mock-employees';
import { additionalMockEmployees } from '../../data/additional-mock-employees';
import { mockTasks } from '../../data/mock-tasks';
import { mockLicenses } from '../../data/mock-licenses';
import { mockExperiences } from '../../data/mock-experiences';
import { mockAssessments } from '../../data/mock-assessments';

/**
 * Service for providing mock data for the application
 * Simulates fetching data from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export class MockDataService {
  private employees: Employee[] = [...mockEmployees, ...additionalMockEmployees];
  private tasks: Task[] = mockTasks;
  private licenses: License[] = mockLicenses;
  private experiences: Experience[] = mockExperiences;
  private assessments: Assessment[] = mockAssessments;

  constructor() { }

  /**
   * Get all employees
   */
  getEmployees(): Employee[] {
    return this.employees;
  }

  /**
   * Get a specific employee by ID
   */
  getEmployeeById(id: string): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  /**
   * Get all tasks
   */
  getTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Get a specific task by ID
   */
  getTaskById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  /**
   * Get all licenses
   */
  getLicenses(): License[] {
    return this.licenses;
  }

  /**
   * Get all experiences
   */
  getExperiences(): Experience[] {
    return this.experiences;
  }

  /**
   * Get all assessments
   */
  getAssessments(): Assessment[] {
    return this.assessments;
  }

  /**
   * Find employees that match the required skills for a task
   * @param taskId The ID of the task to match employees for
   * @param threshold The minimum match percentage required (0-100)
   * @returns Employees with match scores
   */
  findEmployeesForTask(taskId: string, threshold: number = 50): {employee: Employee, matchScore: number, matchDetails: any}[] {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) {
      return [];
    }

    const matches = this.employees.map(employee => {
      const matchDetails = this.calculateTaskMatch(employee, task);
      return {
        employee,
        matchScore: matchDetails.overallScore,
        matchDetails
      };
    }).filter(match => match.matchScore >= threshold)
      .sort((a, b) => b.matchScore - a.matchScore);

    // If no matches found with the given threshold, return at least the top 3 matches
    if (matches.length === 0) {
      const topMatches = this.employees.map(employee => {
        const matchDetails = this.calculateTaskMatch(employee, task);
        return {
          employee,
          matchScore: matchDetails.overallScore,
          matchDetails
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);
      
      return topMatches;
    }

    return matches;
  }

  /**
   * Find tasks that match an employee's skills and preferences
   * @param employeeId The ID of the employee to match tasks for
   * @param threshold The minimum match percentage required (0-100)
   * @returns Tasks with match scores
   */
  findTasksForEmployee(employeeId: string, threshold: number = 70): {task: Task, matchScore: number, matchDetails: any}[] {
    const employee = this.employees.find(emp => emp.id === employeeId);
    if (!employee) {
      return [];
    }

    const matches = this.tasks.map(task => {
      const matchDetails = this.calculateTaskMatch(employee, task);
      return {
        task,
        matchScore: matchDetails.overallScore,
        matchDetails
      };
    }).filter(match => match.matchScore >= threshold)
      .sort((a, b) => b.matchScore - a.matchScore);

    return matches;
  }

  /**
   * Find tasks that match specific skills
   * @param skills Array of skill names to match
   * @returns Array of matching tasks
   */
  findTasksBySkills(skills: string[]): Task[] {
    if (!skills || skills.length === 0) {
      return this.tasks;
    }

    // Convert skill names to lowercase for case-insensitive matching
    const normalizedSkills = skills.map(s => s.toLowerCase());

    // Find tasks that match any of the skills
    const matchingTasks = this.tasks.filter(task => {
      // Check if any of the task's required hard skills match the search skills
      const hardSkillMatches = task.requiredHardSkills.some(
        s => normalizedSkills.some(skill => 
          s.skillName.toLowerCase().includes(skill) || 
          skill.includes(s.skillName.toLowerCase())
        )
      );

      // Check if any of the task's required soft skills match the search skills
      const softSkillMatches = task.requiredSoftSkills.some(
        s => normalizedSkills.some(skill => 
          s.skillName.toLowerCase().includes(skill) || 
          skill.includes(s.skillName.toLowerCase())
        )
      );

      return hardSkillMatches || softSkillMatches;
    });

    // If no matching tasks found, return some default tasks
    if (matchingTasks.length === 0) {
      return this.tasks.slice(0, 3); // Return the first 3 tasks as default
    }

    return matchingTasks;
  }

  /**
   * Get assessments for a specific employee
   * @param employeeId The ID of the employee
   * @returns Array of assessments for the employee
   */
  getAssessmentsByEmployee(employeeId: string): Assessment[] {
    return this.assessments.filter(a => a.employeeId === employeeId);
  }

  /**
   * Get experiences for a specific employee
   * @param employeeId The ID of the employee
   * @returns Array of experiences for the employee
   */
  getExperiencesByEmployee(employeeId: string): Experience[] {
    return this.experiences.filter(e => e.employeeId === employeeId);
  }

  /**
   * Calculate how well an employee matches a task
   * @param employee The employee to evaluate
   * @param task The task to match against
   * @returns Match details with scores for different categories
   */
  private calculateTaskMatch(employee: Employee, task: Task): any {
    // Calculate hard skills match
    const hardSkillsScore = this.calculateSkillsMatch(
      employee.hardSkills,
      task.requiredHardSkills
    );

    // Calculate soft skills match
    const softSkillsScore = this.calculateSkillsMatch(
      employee.softSkills,
      task.requiredSoftSkills
    );

    // Calculate license match
    const licenseScore = this.calculateLicenseMatch(
      employee.licenses,
      task.licenseRequirements || []
    );

    // Calculate location match
    const locationScore = this.calculateLocationMatch(
      employee.location,
      task.locationRequirements || []
    );

    // Calculate capacity match
    const capacityScore = this.calculateCapacityMatch(
      employee.capacity,
      task.capacityRequired || 0
    );

    // Calculate overall match score with weighted components
    const weights = {
      hardSkills: 0.4,
      softSkills: 0.3,
      licenses: 0.1,
      location: 0.1,
      capacity: 0.1
    };

    const overallScore = Math.round(
      hardSkillsScore * weights.hardSkills +
      softSkillsScore * weights.softSkills +
      licenseScore * weights.licenses +
      locationScore * weights.location +
      capacityScore * weights.capacity
    );

    return {
      overallScore,
      hardSkillsScore,
      softSkillsScore,
      licenseScore,
      locationScore,
      capacityScore,
      hardSkillsDetails: this.getSkillMatchDetails(employee.hardSkills, task.requiredHardSkills),
      softSkillsDetails: this.getSkillMatchDetails(employee.softSkills, task.requiredSoftSkills)
    };
  }

  /**
   * Calculate the match score for skills
   * @param employeeSkills The employee's skills
   * @param requiredSkills The skills required for the task
   * @returns Match score (0-100)
   */
  private calculateSkillsMatch(
    employeeSkills: {id: string, name: string, proficiency: number}[],
    requiredSkills: {skillId: string, skillName: string, minimumProficiency: number, importance?: number}[]
  ): number {
    if (!requiredSkills || requiredSkills.length === 0) {
      return 100; // No skills required, perfect match
    }

    let totalImportance = 0;
    let totalScore = 0;

    for (const requiredSkill of requiredSkills) {
      const importance = requiredSkill.importance || 1;
      totalImportance += importance;
      
      // Match by skill name (case-insensitive) instead of ID
      const employeeSkill = employeeSkills.find(s => 
        s.name.toLowerCase().includes(requiredSkill.skillName.toLowerCase()) || 
        requiredSkill.skillName.toLowerCase().includes(s.name.toLowerCase())
      );
      
      if (!employeeSkill) {
        // Skill not found
        continue;
      }
      
      if (employeeSkill.proficiency >= requiredSkill.minimumProficiency) {
        // Full points if proficiency meets or exceeds minimum
        totalScore += importance;
      } else {
        // Partial points based on how close they are to minimum
        const ratio = employeeSkill.proficiency / requiredSkill.minimumProficiency;
        totalScore += importance * ratio;
      }
    }

    return totalImportance > 0 ? Math.round((totalScore / totalImportance) * 100) : 0;
  }

  /**
   * Get detailed information about skill matches
   * @param employeeSkills The employee's skills
   * @param requiredSkills The skills required for the task
   * @returns Detailed match information for each skill
   */
  private getSkillMatchDetails(
    employeeSkills: {id: string, name: string, proficiency: number}[],
    requiredSkills: {skillId: string, skillName: string, minimumProficiency: number, importance?: number}[]
  ): any[] {
    if (!requiredSkills || requiredSkills.length === 0) {
      return [];
    }

    return requiredSkills.map(requiredSkill => {
      const employeeSkill = employeeSkills.find(s => 
        s.name.toLowerCase().includes(requiredSkill.skillName.toLowerCase()) || 
        requiredSkill.skillName.toLowerCase().includes(s.name.toLowerCase())
      );
      
      return {
        skillName: requiredSkill.skillName,
        required: requiredSkill.minimumProficiency,
        actual: employeeSkill ? employeeSkill.proficiency : 0,
        gap: employeeSkill ? 
          Math.max(0, requiredSkill.minimumProficiency - employeeSkill.proficiency) : 
          requiredSkill.minimumProficiency,
        match: employeeSkill ? 
          (employeeSkill.proficiency >= requiredSkill.minimumProficiency ? 100 : 
            Math.round((employeeSkill.proficiency / requiredSkill.minimumProficiency) * 100)) : 
          0
      };
    });
  }

  /**
   * Calculate the match score for licenses
   * @param employeeLicenses The employee's licenses
   * @param requiredLicenses The licenses required for the task
   * @returns Match score (0-100)
   */
  private calculateLicenseMatch(
    employeeLicenses: License[],
    requiredLicenses: string[]
  ): number {
    if (!requiredLicenses || requiredLicenses.length === 0) {
      return 100; // No licenses required, perfect match
    }

    let matchCount = 0;

    for (const licenseId of requiredLicenses) {
      const hasLicense = employeeLicenses.some(
        license => license.id === licenseId && license.validationStatus === true
      );
      
      if (hasLicense) {
        matchCount++;
      }
    }

    return Math.round((matchCount / requiredLicenses.length) * 100);
  }

  /**
   * Calculate the match score for location
   * @param employeeLocation The employee's location
   * @param taskLocations The locations acceptable for the task
   * @returns Match score (0-100)
   */
  private calculateLocationMatch(
    employeeLocation: string,
    taskLocations: string[]
  ): number {
    if (!taskLocations || taskLocations.length === 0) {
      return 100; // No location requirements, perfect match
    }

    // Check if employee's location matches any of the task locations
    // or if remote work is an option
    const locationMatch = taskLocations.some(
      location => location.toLowerCase() === employeeLocation.toLowerCase() || 
                 location.toLowerCase() === 'remote'
    );

    return locationMatch ? 100 : 0;
  }

  /**
   * Calculate the match score for capacity
   * @param employeeCapacity The employee's available capacity (0-100)
   * @param taskCapacity The capacity required for the task (0-100)
   * @returns Match score (0-100)
   */
  private calculateCapacityMatch(
    employeeCapacity: number,
    taskCapacity: number
  ): number {
    if (taskCapacity === 0) {
      return 100; // No capacity requirement, perfect match
    }

    if (employeeCapacity >= taskCapacity) {
      return 100; // Employee has sufficient capacity
    } else {
      // Partial match based on how close they are to required capacity
      return Math.round((employeeCapacity / taskCapacity) * 100);
    }
  }

  /**
   * Analyze a task to determine its complexity and variability
   * @param taskId The ID of the task to analyze
   * @returns Task analysis results
   */
  analyzeTask(taskId: string): any {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) {
      return null;
    }

    // Extract task analysis data
    const analysis = {
      taskId: task.id,
      description: task.description,
      purpose: task.purpose,
      outcomes: task.outcomes,
      
      // Complexity analysis
      complexity: task.complexity,
      complexityLevel: this.getComplexityLevel(task.complexity.overall),
      
      // Variability analysis
      variability: task.variability,
      variabilityLevel: this.getVariabilityLevel(task.variability.overall),
      
      // Skill requirements
      skillRequirements: {
        hardSkills: task.requiredHardSkills,
        softSkills: task.requiredSoftSkills,
        totalSkillsRequired: task.requiredHardSkills.length + task.requiredSoftSkills.length
      },
      
      // Resource requirements
      resourceRequirements: {
        estimatedDuration: task.estimatedDuration,
        estimatedEffort: task.estimatedEffort,
        capacityRequired: task.capacityRequired,
        locationRequirements: task.locationRequirements || [],
        licenseRequirements: task.licenseRequirements || []
      },
      
      // Dependencies
      dependencies: task.dependencies || [],
      
      // Recommendations
      recommendations: this.generateTaskRecommendations(task)
    };

    return analysis;
  }

  /**
   * Get a descriptive complexity level based on numeric value
   * @param complexityValue Numeric complexity value (1-5)
   * @returns Descriptive complexity level
   */
  private getComplexityLevel(complexityValue: number): string {
    const levels = [
      'Very Low',
      'Low',
      'Moderate',
      'High',
      'Very High'
    ];
    
    return levels[Math.min(Math.max(Math.floor(complexityValue) - 1, 0), 4)];
  }

  /**
   * Get a descriptive variability level based on numeric value
   * @param variabilityValue Numeric variability value (1-5)
   * @returns Descriptive variability level
   */
  private getVariabilityLevel(variabilityValue: number): string {
    const levels = [
      'Very Predictable',
      'Predictable',
      'Moderate Variability',
      'Variable',
      'Highly Variable'
    ];
    
    return levels[Math.min(Math.max(Math.floor(variabilityValue) - 1, 0), 4)];
  }

  /**
   * Generate recommendations based on task analysis
   * @param task The task to generate recommendations for
   * @returns Task recommendations
   */
  private generateTaskRecommendations(task: Task): any {
    // Generate recommendations based on task characteristics
    const recommendations = {
      teamStructure: this.recommendTeamStructure(task),
      skillDevelopment: this.recommendSkillDevelopment(task),
      riskMitigation: this.recommendRiskMitigation(task)
    };
    
    return recommendations;
  }

  /**
   * Recommend team structure based on task complexity and variability
   * @param task The task to analyze
   * @returns Team structure recommendations
   */
  private recommendTeamStructure(task: Task): string {
    const complexity = task.complexity.overall;
    const variability = task.variability.overall;
    
    if (complexity >= 4 && variability >= 4) {
      return "Adaptive team with diverse skills and senior leadership. Consider cross-functional composition with regular coordination.";
    } else if (complexity >= 4) {
      return "Specialized team with deep technical expertise. Consider including subject matter experts.";
    } else if (variability >= 4) {
      return "Flexible team with strong problem-solving skills. Consider agile methodology with frequent checkpoints.";
    } else {
      return "Standard team structure with clear roles and responsibilities. Consider established processes and workflows.";
    }
  }

  /**
   * Recommend skill development based on task requirements
   * @param task The task to analyze
   * @returns Skill development recommendations
   */
  private recommendSkillDevelopment(task: Task): string[] {
    const recommendations: string[] = [];
    
    // Check for high-proficiency requirements
    const highProficiencySkills = [
      ...task.requiredHardSkills.filter(s => s.minimumProficiency >= 4),
      ...task.requiredSoftSkills.filter(s => s.minimumProficiency >= 4)
    ];
    
    if (highProficiencySkills.length > 0) {
      recommendations.push(
        `Consider skill development programs for ${highProficiencySkills.map(s => s.skillName).join(', ')}`
      );
    }
    
    // Check for complexity factors
    if (task.complexity.factors.technicalDifficulty >= 4) {
      recommendations.push(
        "Technical training programs may be beneficial for team members"
      );
    }
    
    if (task.complexity.factors.stakeholderManagement >= 4) {
      recommendations.push(
        "Stakeholder management and communication training recommended"
      );
    }
    
    return recommendations;
  }

  /**
   * Recommend risk mitigation strategies based on task characteristics
   * @param task The task to analyze
   * @returns Risk mitigation recommendations
   */
  private recommendRiskMitigation(task: Task): string[] {
    const recommendations: string[] = [];
    
    // Variability risks
    if (task.variability.factors.requirementsStability <= 2) {
      recommendations.push(
        "Establish clear requirements documentation and change management process"
      );
    }
    
    if (task.variability.factors.externalDependencies >= 4) {
      recommendations.push(
        "Create contingency plans for external dependencies and establish regular coordination"
      );
    }
    
    // Complexity risks
    if (task.complexity.factors.technicalDifficulty >= 4) {
      recommendations.push(
        "Consider technical proof of concept or prototype before full implementation"
      );
    }
    
    return recommendations;
  }

  /**
   * Validate an employee's skills through assessment
   * @param employeeId The ID of the employee to validate
   * @param skillId The ID of the skill to validate
   * @param assessorId The ID of the person performing the assessment
   * @param newRating The new skill rating (1-5)
   * @param comments Assessment comments
   * @returns The updated assessment
   */
  validateSkill(
    employeeId: string,
    skillId: string,
    assessorId: string,
    newRating: number,
    comments: string
  ): Assessment {
    const employee = this.employees.find(emp => emp.id === employeeId);
    if (!employee) {
      throw new Error('Employee not found');
    }
    
    // Find the skill to validate
    const skill = [
      ...employee.hardSkills,
      ...employee.softSkills
    ].find(s => s.id === skillId);
    
    if (!skill) {
      throw new Error('Skill not found for employee');
    }
    
    // Determine assessment type
    let assessmentType: 'self' | 'manager' | 'peer' = 'peer';
    if (employeeId === assessorId) {
      assessmentType = 'self';
    } else {
      // Check if assessor is a manager (simplified logic for mock)
      const isManager = ['emp005', 'emp007', 'emp008'].includes(assessorId);
      if (isManager) {
        assessmentType = 'manager';
      }
    }
    
    // Create new assessment
    const newAssessment: Assessment = {
      id: `assess${this.assessments.length + 1}`.padStart(9, '0'),
      date: new Date(),
      type: assessmentType,
      assessorId,
      employeeId,
      quarter: Math.floor((new Date().getMonth() / 3) + 1),
      year: new Date().getFullYear(),
      skillsAssessed: [
        {
          skillId,
          previousRating: skill.proficiency,
          newRating,
          comments
        }
      ],
      overallComments: `Assessment for ${skill.name}`,
      developmentSuggestions: []
    };
    
    // Add to assessments collection
    this.assessments.push(newAssessment);
    
    // Update skill proficiency if it's a manager assessment or if multiple validations align
    const recentAssessments = this.assessments
      .filter(a => a.employeeId === employeeId && 
                  a.skillsAssessed.some(s => s.skillId === skillId) &&
                  new Date().getTime() - new Date(a.date).getTime() < 90 * 24 * 60 * 60 * 1000); // Last 90 days
    
    const shouldUpdateProficiency = 
      assessmentType === 'manager' || 
      (recentAssessments.length >= 2 && 
       recentAssessments.every(a => 
         a.skillsAssessed.find(s => s.skillId === skillId)?.newRating === newRating
       ));
    
    if (shouldUpdateProficiency) {
      // Update the skill proficiency
      skill.proficiency = newRating;
      skill.lastValidated = new Date();
      
      // Add validator if not already present
      if (!skill.validatedBy.includes(assessorId)) {
        skill.validatedBy.push(assessorId);
      }
    }
    
    return newAssessment;
  }
}

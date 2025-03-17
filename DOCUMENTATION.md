# Talent Matching System - Technical Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Data Models](#data-models)
4. [Core Services](#core-services)
5. [API Endpoints](#api-endpoints)
6. [Recommendation Engine](#recommendation-engine)
7. [Integration Points](#integration-points)
8. [Known Issues and Solutions](#known-issues-and-solutions)
9. [Extension Guide](#extension-guide)

## System Overview

The Talent Matching System is an AI-powered solution designed to help HR representatives and managers identify internal talent for new positions or projects. The system provides a natural language interface where users can describe their requirements, and the system will recommend suitable employees based on their skills, experience, and preferences.

### Key Features

- **Natural Language Processing**: Users can describe their requirements in plain English
- **Skill-Based Matching**: Matches employees to tasks based on hard and soft skills
- **Team Formation**: Recommends optimal team compositions based on skills and team dynamics
- **Business Unit Knowledge**: Considers employees' familiarity with specific business units
- **Project Context Analysis**: Analyzes project requirements to determine the best fit

### Primary Use Cases

- Resource re-allocation
- Talent fungibility
- Site strategy planning
- Re-organization efforts

## Architecture

The application follows a modular architecture with clear separation of concerns:

```
User Interface → Chat Bot → Local LLM → Data Integration Layer → Data Sources → Context Manager → LLM → Recommendation Engine → User Interface
```

### Components

1. **User Interface**: Entry point for user input and display of recommendations
2. **Chat Bot**: Processes user input requirements
3. **Local LLM**: Processes input and generates responses
4. **Data Integration Layer**: Fetches, cleans, and formats data from various sources
5. **Data Sources**: Multiple systems including:
   - Workday
   - Fuel50
   - LinkedIn
   - SumTotal
   - Degreed
   - Recognition Central
6. **Context Manager**: Embeds data for the LLM
7. **Recommendation Engine**: Generates profiles and suggestions

### Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML, CSS, JavaScript
- **Language Model**: Local LLM (currently using Ollama with llama3.2)
- **Data Storage**: Currently using mock data, designed to be replaced with a real database

## Data Models

The system uses several interconnected data models to represent employees, skills, tasks, and other entities.

### Employee Model

The `Employee` model represents an individual employee with their skills, experience, and preferences:

```typescript
export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  
  // Skills and qualifications
  hardSkills: DetailedSkill[];
  softSkills: DetailedSkill[];
  pastExperience: Experience[];
  
  // Career information
  careerAspirations: string[];
  interests: string[];
  developmentGoals: string[];
  
  // Availability and location
  capacity: number; // 0-100%
  location: string;
  availabilityDate?: Date;
  
  // Enhanced matching attributes
  currentProjectPhase?: 'inception' | 'development' | 'mature' | 'maintenance' | 'none';
  businessUnitKnowledge?: BusinessUnitKnowledge[];
  teamFormationAttributes?: TeamFormationAttribute[];
}
```

### Skill Model

The `Skill` model represents a specific skill that an employee possesses:

```typescript
export interface Skill {
  id: string;
  name: string;
  category: 'hard' | 'soft';
  proficiency: number;         // 1-5 scale
  validatedBy: string[];       // Who validated this skill (employee IDs)
  lastValidated: Date;
  derivedFrom?: string;        // If derived, what source
}
```

### Task Model

The `Task` model represents work that needs to be accomplished:

```typescript
export interface Task {
  id: string;
  description: string;
  purpose: string;
  outcomes: string[];
  
  // Skill requirements
  requiredHardSkills: {
    skillId: string;
    skillName: string;
    minimumProficiency: number;
    importance: number;
  }[];
  
  requiredSoftSkills: {
    skillId: string;
    skillName: string;
    minimumProficiency: number;
    importance: number;
  }[];
  
  // Complexity metrics
  complexity: {
    overall: number;
    factors: {
      technicalDifficulty: number;
      stakeholderManagement: number;
      decisionMaking: number;
      problemSolving: number;
      crossFunctionalCoordination: number;
    };
  };
  
  // Other attributes
  estimatedDuration: number;
  estimatedEffort: number;
  capacityRequired: number;
  locationRequirements?: string[];
  licenseRequirements?: string[];
}
```

## Core Services

### MockDataService

The `MockDataService` simulates data retrieval from various HR systems. It provides methods for:

- Finding employees that match specific tasks
- Finding tasks that match specific skills
- Calculating match scores between employees and tasks

Key methods:

```typescript
findEmployeesForTask(taskId: string, threshold: number = 50): {employee: Employee, matchScore: number, matchDetails: any}[]
findTasksBySkills(skills: string[]): Task[]
calculateTaskMatch(employee: Employee, task: Task): any
calculateSkillsMatch(employeeSkills: Skill[], requiredSkills: any[]): number
```

### OllamaService

The `OllamaService` handles communication with the local LLM (Ollama). It's responsible for:

- Generating responses based on user input
- Analyzing team dynamics
- Providing business unit insights

Key methods:

```typescript
generateResponse(prompt: string): Promise<string>
generateTeamDynamicsAnalysis(teamMembers: any[]): Promise<string>
generateBusinessUnitInsights(teamMembers: any[], businessUnit: string): Promise<string>
```

### RecommendationService

The `RecommendationService` is the core of the system, orchestrating the recommendation process:

- Processing user requests
- Extracting requirements from natural language input
- Generating team recommendations
- Analyzing project context

Key methods:

```typescript
processRequest(message: string): Promise<any>
generateTeamRecommendation(matchingEmployees: any[], projectContext: any): any
extractTeamFormationAttributes(employees: any[]): any
extractBusinessUnitKnowledge(employees: any[], businessUnit: string): any
```

## API Endpoints

The system exposes several REST API endpoints:

### `/api/chat/process`

- **Method**: POST
- **Purpose**: Process a natural language request and return recommendations
- **Request Body**: `{ message: string }`
- **Response**: JSON object containing matching employees, tasks, and recommendations

### `/api/chat/tasks`

- **Method**: GET
- **Purpose**: Retrieve all available tasks
- **Response**: Array of Task objects

### `/api/chat/employees`

- **Method**: GET
- **Purpose**: Retrieve all available employees
- **Response**: Array of Employee objects

## Recommendation Engine

The recommendation engine is the heart of the system, responsible for matching employees to tasks based on various criteria.

### Matching Algorithm

The matching algorithm works as follows:

1. **Parse User Input**: Extract requirements from natural language input
2. **Identify Required Skills**: Determine hard and soft skills needed
3. **Match Employees to Skills**: Find employees with matching skills
4. **Calculate Match Scores**: Determine how well each employee matches the requirements
5. **Generate Team Recommendation**: Create an optimal team composition

### Skill Matching

The skill matching algorithm uses a flexible approach:

- Case-insensitive matching of skill names
- Partial matching (e.g., "JavaScript" will match "JavaScript Development")
- Proficiency level comparison
- Weighted importance of different skills

```typescript
private calculateSkillsMatch(
  employeeSkills: {id: string, name: string, proficiency: number}[],
  requiredSkills: {skillId: string, skillName: string, minimumProficiency: number, importance?: number}[]
): number {
  // Implementation details
  // ...
}
```

### Team Formation

The team formation logic considers:

- Required skills for the project
- Team dynamics and communication styles
- Business unit knowledge
- Availability and location constraints

## Integration Points

The system is designed to be extended with real data sources and a production-grade LLM. Here are the key integration points:

### Database Integration

The `MockDataService` should be replaced with a real database service. Integration points:

- `src/services/data/mock-data.service.ts` → Replace with a real database service
- `src/data/mock-employees.ts` and `src/data/mock-tasks.ts` → Replace with database queries

### LLM Integration

The `OllamaService` can be replaced with a different LLM service. Integration points:

- `src/services/ollama/ollama.service.ts` → Replace with a different LLM service
- Environment variables in `.env` file → Update with new LLM configuration

### UI Integration

The current UI is basic and can be replaced or enhanced. Integration points:

- `src/public/index.html` → Main UI entry point
- `src/public/js/main.js` → Client-side JavaScript
- `src/routes/chat.ts` → API endpoints that the UI interacts with

## User Interface

The user interface is built with HTML, CSS, and vanilla JavaScript. It provides a clean, intuitive experience for HR representatives and managers to interact with the system.

### Chat Interface

The chat interface allows users to describe their requirements in natural language. The system processes these requests and provides recommendations based on the available employee data.

#### Key Features

- **Conversational UI**: Simple chat-based interface for describing requirements
- **Markdown Formatting**: Rich text formatting for system responses including:
  - Headings for different sections
  - Bold and italic text for emphasis
  - Bulleted and numbered lists for organized information
  - Code blocks with syntax highlighting for technical details
  - Tables for comparing employee attributes
- **Staged Loading Indicator**: Provides real-time feedback during processing with:
  - Sequential progress updates that explain each stage of the workflow
  - Visual progress bar that fills up as the system progresses
  - Subtle animation to indicate active processing
  - Clear messaging that reflects the actual steps in the application architecture

#### Loading Stages

The staged loading indicator shows the following progression:
1. Analyzing requirements
2. Extracting skills and qualifications
3. Searching the employee database
4. Evaluating skills and experience
5. Analyzing team dynamics
6. Considering business unit knowledge
7. Evaluating availability and location
8. Forming team recommendations
9. Preparing detailed reasoning

### Results Display

The results are displayed in a clean, organized format that makes it easy to understand the recommendations:

- **Reasoning Section**: Detailed explanation of the matching logic in markdown format
- **Employee Cards**: Visual representation of matching employees with their skills and attributes
- **Match Scores**: Visual indicators of how well each employee matches the requirements

### Navigation

The application provides simple navigation between different views:

- **Dashboard**: The main chat interface
- **Open Positions**: List of available positions
- **Employee Directory**: Browse all employees in the system

## Known Issues and Solutions

### Issue 1: Skill Matching Based on IDs

**Problem**: The original implementation matched skills based on IDs, which was too strict and resulted in no matches.

**Solution**: Updated the `calculateSkillsMatch` method to match skills based on names (case-insensitive) instead of IDs:

```typescript
// Before
const employeeSkill = employeeSkills.find(s => s.id === requiredSkill.skillId);

// After
const employeeSkill = employeeSkills.find(s => 
  s.name.toLowerCase().includes(requiredSkill.skillName.toLowerCase()) || 
  requiredSkill.skillName.toLowerCase().includes(s.name.toLowerCase())
);
```

### Issue 2: High Match Threshold

**Problem**: The default threshold for matching employees to tasks was too high (70%), resulting in no matches.

**Solution**: Lowered the default threshold to 50% and added fallback logic to return the top 3 matches even if no employees meet the threshold:

```typescript
// Before
findEmployeesForTask(taskId: string, threshold: number = 70): {employee: Employee, matchScore: number, matchDetails: any}[] {
  // Implementation
}

// After
findEmployeesForTask(taskId: string, threshold: number = 50): {employee: Employee, matchScore: number, matchDetails: any}[] {
  // Implementation with fallback logic
  if (matches.length === 0) {
    const topMatches = this.employees.map(employee => {
      // Get top 3 matches regardless of threshold
    });
    return topMatches;
  }
}
```

### Issue 3: Strict Task Matching

**Problem**: The `findTasksBySkills` method used exact matching for skills, resulting in no task matches.

**Solution**: Implemented more flexible skill matching and added fallback logic:

```typescript
// Before
const hardSkillMatches = task.requiredHardSkills.some(
  s => normalizedSkills.includes(s.skillName.toLowerCase())
);

// After
const hardSkillMatches = task.requiredHardSkills.some(
  s => normalizedSkills.some(skill => 
    s.skillName.toLowerCase().includes(skill) || 
    skill.includes(s.skillName.toLowerCase())
  )
);

// Added fallback logic
if (matchingTasks.length === 0) {
  return this.tasks.slice(0, 3); // Return the first 3 tasks as default
}
```

### Issue 4: Missing Positions API Endpoint

**Problem**: The frontend UI has components for displaying "Open Positions" (visible in the sidebar and UI containers), but there is no corresponding backend API endpoint. This results in a console error: `Error fetching positions: {}`.

**Status**: This feature is not fully implemented in the current version. The application still functions correctly because the positions feature is secondary to the main talent matching functionality.

**Potential Solution for Hackathon Team**: 
1. Create a Position model in `src/models/position.model.ts`
2. Add mock position data in `src/data/mock-positions.ts`
3. Implement a positions endpoint in `src/routes/positions.ts`
4. Update the MockDataService to provide position data

Example Position model:
```typescript
export interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  requiredHardSkills: Skill[];
  requiredSoftSkills: Skill[];
  businessUnit: string;
  postingDate: Date;
  closingDate?: Date;
  isRemote: boolean;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
}
```

### Issue 5: LLM Response Parsing

**Problem**: The Ollama LLM sometimes returns responses with explanatory text around JSON objects, causing JSON parsing errors.

**Solution**: Implemented a JSON extraction function that uses regular expressions to find and extract JSON objects from text responses:

```typescript
private extractJsonFromText(text: string): string {
  const jsonRegex = /{[\s\S]*}/;
  const match = text.match(jsonRegex);
  
  if (match && match[0]) {
    return match[0];
  }
  
  return text;
}
```

Also updated the extraction prompt to be more explicit about returning only JSON:

```typescript
IMPORTANT: Your response must contain ONLY the JSON object, with no additional text before or after.
Do not include any explanations, introductions, or conclusions.
Do not wrap the JSON in markdown code blocks, quotes, or any other formatting.
Simply return the raw JSON object.
```

## Logging System

The application includes a comprehensive logging system to track interactions with the Ollama LLM. This logging system is designed to help developers understand how the application communicates with the LLM, track performance, and diagnose issues.

### Logging Features

1. **Request Logging**:
   - Each request to the Ollama LLM is assigned a unique ID
   - Logs include the model being used, prompt length, and a preview of the prompt
   - Example: `[Ollama Request 4wjpyy] Sending request to model: llama3.2:latest`

2. **Response Logging**:
   - Response time is tracked and reported in seconds
   - Response length and a preview of the content are logged
   - Example: `[Ollama Response 4wjpyy] Received after 65.90s`

3. **Service-Level Logging**:
   - The Recommendation Service logs each step of the recommendation process
   - JSON parsing results are logged, including successful parsing and errors
   - Previews of extracted requirements and reasoning are provided

### Using the Logging System

The logging system outputs to the standard console and can be observed when running the application. To make the most of the logging system:

1. **Debugging LLM Interactions**:
   - Monitor the logs to see exactly what prompts are being sent to the LLM
   - Check response times to identify performance bottlenecks
   - Review JSON parsing logs to ensure the LLM is returning expected data structures

2. **Optimizing Prompts**:
   - Use the prompt previews to understand how the application communicates with the LLM
   - Adjust prompts in the code to improve the quality of responses
   - Check if the LLM is following instructions correctly

3. **Monitoring Performance**:
   - Track response times for different types of requests
   - Identify which operations take the longest
   - Use this information to optimize the application

### Implementation Details

The logging system is implemented in two main components:

1. **OllamaService** (`src/services/ollama/ollama.service.ts`):
   - Logs initialization parameters
   - Tracks and logs all requests to the Ollama API
   - Logs responses and errors
   - Includes helper methods for generating request IDs and truncating long text

2. **RecommendationService** (`src/services/recommendation/recommendation.service.ts`):
   - Logs the processing of user requests
   - Tracks JSON parsing of LLM responses
   - Logs when different types of prompts are sent (extraction, reasoning, team dynamics)

### Extending the Logging System

The Hackathon team can extend the logging system in several ways:

1. **Persistent Logging**:
   - Implement file-based logging to persist logs across application restarts
   - Add log rotation to manage log file size

2. **Structured Logging**:
   - Convert logs to a structured format (e.g., JSON)
   - Add additional metadata such as timestamp, log level, and component

3. **Monitoring Dashboard**:
   - Create a web-based dashboard to visualize log data
   - Track metrics such as average response time, error rate, and request volume

4. **Log Filtering**:
   - Implement log levels (DEBUG, INFO, WARNING, ERROR)
   - Add the ability to filter logs by component or operation

## Extension Guide

### Connecting to a Real Database

To replace the mock data with a real database:

1. **Choose a Database**: Select a database system (e.g., PostgreSQL, MongoDB)
2. **Create a Database Service**: Implement a new service that connects to your database
3. **Update Data Models**: Ensure your database schema matches the data models
4. **Replace MockDataService**: Update service references to use your new database service

Example implementation with MongoDB:

```typescript
// src/services/data/mongo-data.service.ts
import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { Employee } from '../../models/employee.model';
import { Task } from '../../models/task.model';

@Injectable()
export class MongoDataService {
  private client: MongoClient;
  private db: any;

  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI);
    this.connect();
  }

  private async connect() {
    await this.client.connect();
    this.db = this.client.db(process.env.MONGODB_DB);
  }

  async findEmployeesForTask(taskId: string, threshold: number = 50): Promise<any[]> {
    const task = await this.db.collection('tasks').findOne({ id: taskId });
    if (!task) {
      return [];
    }

    // Implement matching logic
    // ...
  }

  // Implement other methods
  // ...
}
```

### Connecting to a Remote LLM

To replace Ollama with a remote LLM service:

1. **Choose an LLM Provider**: Select a provider (e.g., OpenAI, Anthropic, Cohere)
2. **Create an LLM Service**: Implement a new service that connects to your LLM provider
3. **Update Environment Variables**: Add configuration for your LLM provider
4. **Replace OllamaService**: Update service references to use your new LLM service

Example implementation with OpenAI:

```typescript
// src/services/llm/openai.service.ts
import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  }

  // Implement other methods
  // ...
}
```

### Updating or Connecting to a Different UI

To enhance the UI or connect to a different UI application:

1. **Frontend Framework**: Consider using a modern framework (React, Vue, Angular)
2. **API Integration**: Ensure the new UI calls the existing API endpoints
3. **Authentication**: Add authentication if needed
4. **Responsive Design**: Ensure the UI works well on different devices

Example Angular component for the chat interface:

```typescript
// talent-matching-chat.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
}

interface MatchResult {
  employee: Employee;
  matchScore: number;
}

interface RecommendationResponse {
  matchingEmployees: MatchResult[];
  projectContext: any;
  teamRecommendation: {
    teamDynamics: string;
    teamMembers: any[];
  };
}

@Component({
  selector: 'app-talent-matching-chat',
  template: `
    <div class="chat-container">
      <form (ngSubmit)="processRequest()">
        <textarea
          [(ngModel)]="message"
          name="message"
          placeholder="Describe the team you need..."
          rows="4"
        ></textarea>
        <button type="submit" [disabled]="loading">
          {{ loading ? 'Processing...' : 'Find Talent' }}
        </button>
      </form>
      
      <div *ngIf="response" class="response-container">
        <h2>Recommended Team</h2>
        <div *ngIf="response.matchingEmployees.length > 0" class="employees-list">
          <div *ngFor="let match of response.matchingEmployees" class="employee-card">
            <h3>{{ match.employee.name }}</h3>
            <p>Match Score: {{ match.matchScore }}%</p>
            <p>Position: {{ match.employee.position }}</p>
            <p>Department: {{ match.employee.department }}</p>
          </div>
        </div>
        <p *ngIf="response.matchingEmployees.length === 0">No matching employees found.</p>
        
        <h2>Project Context</h2>
        <pre>{{ response.projectContext | json }}</pre>
        
        <h2>Team Dynamics</h2>
        <div [innerHTML]="response.teamRecommendation.teamDynamics"></div>
      </div>
    </div>
  `,
  styles: [`
    .chat-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
    }
    
    button {
      padding: 10px 20px;
      background-color: #4285f4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:disabled {
      background-color: #cccccc;
    }
    
    .employee-card {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
      margin-bottom: 10px;
    }
  `]
})
export class TalentMatchingChatComponent {
  message = '';
  response: RecommendationResponse | null = null;
  loading = false;

  constructor(private http: HttpClient) {}

  processRequest() {
    this.loading = true;
    
    this.http.post<RecommendationResponse>('/api/chat/process', { message: this.message })
      .subscribe({
        next: (result) => {
          this.response = result;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error processing request:', error);
          this.loading = false;
        }
      });
  }
}
```

And the corresponding module:

```typescript
// talent-matching.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TalentMatchingChatComponent } from './talent-matching-chat.component';

@NgModule({
  declarations: [
    TalentMatchingChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TalentMatchingChatComponent
  ]
})
export class TalentMatchingModule { }
```

## Conclusion

This documentation provides a comprehensive overview of the Talent Matching System, its architecture, components, and extension points. By following the guidelines in this document, developers should be able to quickly understand the system and extend it with real data sources, improved LLM capabilities, and enhanced UI.

The system is designed to be modular and extensible, making it an ideal starting point for a hackathon project. The core recommendation logic is already implemented, allowing developers to focus on integration with real data sources and improving the user experience.

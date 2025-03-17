export interface Task {
  id: string;
  description: string;
  purpose: string;
  outcomes: string[];          // Expected measurable results
  
  // Skill requirements
  requiredHardSkills: {
    skillId: string;
    skillName: string;
    minimumProficiency: number; // 1-5 scale
    importance: number;         // 1-5 scale (how critical is this skill)
  }[];
  
  requiredSoftSkills: {
    skillId: string;
    skillName: string;
    minimumProficiency: number; // 1-5 scale
    importance: number;         // 1-5 scale
  }[];
  
  // Complexity and variability metrics
  complexity: {
    overall: number;           // 1-5 scale
    factors: {
      technicalDifficulty: number;
      stakeholderManagement: number;
      decisionMaking: number;
      problemSolving: number;
      crossFunctionalCoordination: number;
    };
  };
  
  variability: {
    overall: number;           // 1-5 scale
    factors: {
      requirementsStability: number;
      processDefinition: number;
      externalDependencies: number;
      timelinePredictability: number;
    };
  };
  
  // Time and resource requirements
  estimatedDuration: number;   // In days
  estimatedEffort: number;     // In person-days
  capacityRequired: number;    // Percentage of full-time (0-100%)
  
  // Dependencies and constraints
  dependencies: string[];      // IDs of dependent tasks
  locationRequirements?: string[]; // Required locations, if any
  licenseRequirements?: string[]; // Required licenses, if any
  
  // Additional context
  businessContext: string;
  createdBy: string;           // User ID
  createdAt: Date;
  lastModified: Date;
  
  // New fields for enhanced matching
  projectContext?: ProjectContext;
  teamDynamicsRequirements?: TeamDynamicsRequirement[];
  businessUnitRelevance?: BusinessUnitRelevance[];
  certificationRequirements?: string[]; // IDs of required certifications
  preferredWorkStyles?: string[]; // e.g., 'collaborative', 'independent', 'hybrid'
}

export interface ProjectContext {
  projectPhase: 'inception' | 'development' | 'mature' | 'maintenance';
  projectType: 'prototype' | 'product' | 'service' | 'internal' | 'research';
  projectGoals: string[];
  targetDeliveryDate?: Date;
  stakeholders?: string[];
}

export interface TeamDynamicsRequirement {
  attributeName: string; // e.g., 'communication style', 'conflict resolution', 'leadership style'
  preferredValues: string[]; // e.g., ['direct', 'collaborative'], ['servant leader']
  importance: number; // 1-5 scale
}

export interface BusinessUnitRelevance {
  businessUnitId: string;
  businessUnitName: string;
  relevanceLevel: number; // 1-5 scale
  knowledgeRequired: boolean;
}

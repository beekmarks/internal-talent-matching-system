import { Skill as DetailedSkill } from './skill.model';
import { Experience } from './experience.model';
import { License } from './license.model';
import { Assessment } from './assessment.model';

// Keeping the original Skill interface for backward compatibility
export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface Certification {
  name: string;
  issuer: string;
  dateAcquired: Date;
  expirationDate?: Date;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationDate: Date;
}

export interface JobPreference {
  jobType: string[];
  location: string[];
  remote: boolean;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  willingToRelocate: boolean;
}

export interface BusinessUnitKnowledge {
  businessUnitId: string;
  businessUnitName: string;
  knowledgeLevel: number; // 1-5 scale
  yearsOfExperience: number;
  relevantProjects: string[]; // IDs of relevant projects
}

export interface TeamFormationAttribute {
  attributeName: string; // e.g., 'communication style', 'conflict resolution', 'leadership style'
  attributeValue: string; // e.g., 'direct', 'collaborative', 'servant leader'
  assessmentSource: string; // e.g., 'self', 'manager', 'peer'
  lastAssessed: Date;
}

export interface CertificationDetailed {
  id: string;
  name: string;
  issuer: string;
  dateAcquired: Date;
  expirationDate?: Date;
  relevantSkills: string[]; // IDs of skills related to this certification
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  
  // Original fields for backward compatibility
  skills: Skill[];
  certifications: Certification[];
  education: Education[];
  jobHistory: {
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    responsibilities: string[];
  }[];
  preferences: JobPreference;
  availableForTransfer: boolean;
  lastUpdated: Date;
  
  // New fields based on updated requirements
  hardSkills: DetailedSkill[];
  softSkills: DetailedSkill[];
  pastExperience: Experience[];
  careerAspirations: string[];
  interests: string[];
  developmentGoals: string[];
  capacity: number; // 0-100%
  location: string;
  licenses: License[];
  assessments: Assessment[];
  
  // New fields for enhanced matching
  currentProjectPhase?: 'inception' | 'development' | 'mature' | 'maintenance' | 'none';
  businessUnitKnowledge?: BusinessUnitKnowledge[];
  teamFormationAttributes?: TeamFormationAttribute[];
  availabilityDate?: Date; // When the employee would be available for a new project
  preferredWorkStyle?: string[]; // e.g., 'collaborative', 'independent', 'hybrid'
  certificationsDetailed?: CertificationDetailed[]; // More detailed certification information
  
  // Data source tracking
  dataSources: {
    workday?: boolean;
    fuel50?: boolean;
    linkedin?: boolean;
    sumTotal?: boolean;
    degreed?: boolean;
    recognitionCentral?: boolean;
  };
}

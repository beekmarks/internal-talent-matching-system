export interface SkillRequirement {
  name: string;
  required: boolean;
  minimumLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  minimumYearsExperience?: number;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  description: string;
  requiredSkills: SkillRequirement[];
  preferredSkills: SkillRequirement[];
  requiredCertifications: string[];
  requiredEducation: {
    minimumDegree: string;
    preferredFieldsOfStudy: string[];
  };
  location: string;
  remote: boolean;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  datePosted: Date;
  hiringManager: string;
}

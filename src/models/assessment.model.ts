export interface Assessment {
  id: string;
  date: Date;
  type: 'self' | 'manager' | 'peer';
  assessorId: string;
  employeeId: string;
  quarter: number;  // 1-4
  year: number;
  skillsAssessed: {
    skillId: string;
    previousRating: number;
    newRating: number;
    comments: string;
  }[];
  overallComments?: string;
  developmentSuggestions?: string[];
}

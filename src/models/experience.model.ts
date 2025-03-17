export interface Experience {
  id: string;
  employeeId: string;  // Added employeeId field
  projectName: string;
  role: string;
  duration: {
    start: Date;
    end?: Date;
  };
  skillsUtilized: string[];  // Skill IDs
  outcomes: string[];
  department: string;
  teamSize: number;
  description: string;
}

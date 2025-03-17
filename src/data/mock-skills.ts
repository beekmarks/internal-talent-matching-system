import { Skill } from '../models/skill.model';

/**
 * Mock skills data representing both hard (technical) and soft skills
 * with proficiency levels and validation information
 */
export const mockSkills: Skill[] = [
  // Technical/Hard Skills
  {
    id: 'skill001',
    name: 'JavaScript',
    category: 'hard',
    proficiency: 5, // Expert
    validatedBy: ['emp002', 'emp003'],
    lastValidated: new Date('2023-10-15')
  },
  {
    id: 'skill002',
    name: 'TypeScript',
    category: 'hard',
    proficiency: 4, // Advanced
    validatedBy: ['emp001'],
    lastValidated: new Date('2023-09-20')
  },
  {
    id: 'skill003',
    name: 'React',
    category: 'hard',
    proficiency: 5, // Expert
    validatedBy: ['emp002', 'emp005'],
    lastValidated: new Date('2023-11-05')
  },
  {
    id: 'skill004',
    name: 'Node.js',
    category: 'hard',
    proficiency: 4, // Advanced
    validatedBy: ['emp001', 'emp003'],
    lastValidated: new Date('2023-08-10')
  },
  {
    id: 'skill005',
    name: 'Python',
    category: 'hard',
    proficiency: 5, // Expert
    validatedBy: ['emp004', 'emp006'],
    lastValidated: new Date('2023-10-22')
  },
  {
    id: 'skill006',
    name: 'Machine Learning',
    category: 'hard',
    proficiency: 4, // Advanced
    validatedBy: ['emp007'],
    lastValidated: new Date('2023-09-15'),
    derivedFrom: 'project: Customer Segmentation Analysis'
  },
  {
    id: 'skill007',
    name: 'SQL',
    category: 'hard',
    proficiency: 4, // Advanced
    validatedBy: ['emp001', 'emp004'],
    lastValidated: new Date('2023-07-30')
  },
  {
    id: 'skill008',
    name: 'Data Analysis',
    category: 'hard',
    proficiency: 3, // Intermediate
    validatedBy: ['emp002'],
    lastValidated: new Date('2023-08-05')
  },
  {
    id: 'skill009',
    name: 'AWS',
    category: 'hard',
    proficiency: 3, // Intermediate
    validatedBy: ['emp005'],
    lastValidated: new Date('2023-06-18')
  },
  {
    id: 'skill010',
    name: 'Docker',
    category: 'hard',
    proficiency: 3, // Intermediate
    validatedBy: ['emp003'],
    lastValidated: new Date('2023-05-12')
  },
  
  // Soft Skills
  {
    id: 'skill011',
    name: 'Communication',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp001', 'emp002', 'emp005'],
    lastValidated: new Date('2023-09-10')
  },
  {
    id: 'skill012',
    name: 'Leadership',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp003', 'emp006'],
    lastValidated: new Date('2023-10-05')
  },
  {
    id: 'skill013',
    name: 'Problem Solving',
    category: 'soft',
    proficiency: 5, // Expert
    validatedBy: ['emp001', 'emp004'],
    lastValidated: new Date('2023-08-22')
  },
  {
    id: 'skill014',
    name: 'Teamwork',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp002', 'emp005', 'emp007'],
    lastValidated: new Date('2023-07-15')
  },
  {
    id: 'skill015',
    name: 'Time Management',
    category: 'soft',
    proficiency: 3, // Intermediate
    validatedBy: ['emp003'],
    lastValidated: new Date('2023-06-30')
  },
  {
    id: 'skill016',
    name: 'Adaptability',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp001', 'emp006'],
    lastValidated: new Date('2023-09-25')
  },
  {
    id: 'skill017',
    name: 'Critical Thinking',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp004', 'emp007'],
    lastValidated: new Date('2023-08-18')
  },
  {
    id: 'skill018',
    name: 'Project Management',
    category: 'soft',
    proficiency: 3, // Intermediate
    validatedBy: ['emp002'],
    lastValidated: new Date('2023-07-20')
  },
  {
    id: 'skill019',
    name: 'Creativity',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp005'],
    lastValidated: new Date('2023-10-12'),
    derivedFrom: 'project: Marketing Campaign Redesign'
  },
  {
    id: 'skill020',
    name: 'Emotional Intelligence',
    category: 'soft',
    proficiency: 4, // Advanced
    validatedBy: ['emp003', 'emp006'],
    lastValidated: new Date('2023-09-05')
  }
];

import { Experience } from '../models/experience.model';

/**
 * Mock experiences data representing past projects and roles within the company
 * This data helps derive additional skills and provides context for employee capabilities
 */
export const mockExperiences: Experience[] = [
  {
    id: 'exp001',
    employeeId: 'emp001',
    projectName: 'Customer Portal Redesign',
    role: 'Frontend Lead',
    duration: {
      start: new Date('2022-01-15'),
      end: new Date('2022-06-30')
    },
    skillsUtilized: ['skill001', 'skill002', 'skill003', 'skill011', 'skill014'],
    outcomes: [
      'Increased customer satisfaction by 25%',
      'Reduced page load time by 40%',
      'Implemented responsive design for mobile users'
    ],
    department: 'Engineering',
    teamSize: 6,
    description: 'Led the frontend development team in redesigning the customer portal using React and TypeScript. Implemented new UI/UX designs and improved performance.'
  },
  {
    id: 'exp002',
    employeeId: 'emp002',
    projectName: 'Data Analytics Platform',
    role: 'Data Engineer',
    duration: {
      start: new Date('2021-08-10'),
      end: new Date('2022-03-15')
    },
    skillsUtilized: ['skill005', 'skill007', 'skill008', 'skill013', 'skill017'],
    outcomes: [
      'Built ETL pipelines processing 500GB of daily data',
      'Created dashboards for executive decision making',
      'Reduced reporting time from days to minutes'
    ],
    department: 'Data Science',
    teamSize: 4,
    description: 'Designed and implemented data pipelines using Python and SQL. Created analytics dashboards and reporting tools for business intelligence.'
  },
  {
    id: 'exp003',
    employeeId: 'emp003',
    projectName: 'Mobile App Development',
    role: 'Full Stack Developer',
    duration: {
      start: new Date('2022-04-01'),
      end: new Date('2022-09-30')
    },
    skillsUtilized: ['skill001', 'skill004', 'skill009', 'skill013', 'skill016'],
    outcomes: [
      'Launched iOS and Android apps with 4.8 star ratings',
      'Implemented secure authentication system',
      'Integrated with existing backend services'
    ],
    department: 'Engineering',
    teamSize: 5,
    description: 'Developed cross-platform mobile application using React Native. Implemented backend APIs and integrated with AWS services.'
  },
  {
    id: 'exp004',
    employeeId: 'emp002',
    projectName: 'Customer Segmentation Analysis',
    role: 'Data Scientist',
    duration: {
      start: new Date('2021-11-15'),
      end: new Date('2022-02-28')
    },
    skillsUtilized: ['skill005', 'skill006', 'skill007', 'skill008', 'skill017'],
    outcomes: [
      'Identified 5 key customer segments for targeted marketing',
      'Increased conversion rates by 15%',
      'Created predictive models for customer behavior'
    ],
    department: 'Data Science',
    teamSize: 3,
    description: 'Applied machine learning techniques to segment customers based on behavior patterns. Created predictive models for marketing optimization.'
  },
  {
    id: 'exp005',
    employeeId: 'emp001',
    projectName: 'DevOps Pipeline Modernization',
    role: 'DevOps Engineer',
    duration: {
      start: new Date('2022-07-01'),
      end: new Date('2022-10-15')
    },
    skillsUtilized: ['skill009', 'skill010', 'skill013', 'skill015', 'skill016'],
    outcomes: [
      'Reduced deployment time by 70%',
      'Implemented CI/CD pipelines',
      'Improved system reliability and monitoring'
    ],
    department: 'Engineering',
    teamSize: 4,
    description: 'Modernized deployment pipelines using Docker and AWS. Implemented automated testing and continuous integration practices.'
  },
  {
    id: 'exp006',
    employeeId: 'emp004',
    projectName: 'Marketing Campaign Redesign',
    role: 'Marketing Analyst',
    duration: {
      start: new Date('2021-09-01'),
      end: new Date('2021-12-15')
    },
    skillsUtilized: ['skill008', 'skill011', 'skill014', 'skill019', 'skill020'],
    outcomes: [
      'Increased campaign ROI by 30%',
      'Developed new creative direction for brand',
      'Implemented A/B testing framework'
    ],
    department: 'Marketing',
    teamSize: 7,
    description: 'Analyzed marketing performance data and redesigned campaign strategies. Created new creative assets and implemented testing methodologies.'
  },
  {
    id: 'exp007',
    employeeId: 'emp005',
    projectName: 'Enterprise Resource Planning Implementation',
    role: 'Project Manager',
    duration: {
      start: new Date('2021-06-15'),
      end: new Date('2022-05-30')
    },
    skillsUtilized: ['skill011', 'skill012', 'skill014', 'skill015', 'skill018'],
    outcomes: [
      'Successfully migrated from legacy systems',
      'Trained 200+ employees on new platform',
      'Completed project under budget and on schedule'
    ],
    department: 'Operations',
    teamSize: 12,
    description: 'Led cross-functional team in implementing new ERP system. Managed stakeholder expectations and coordinated training programs.'
  },
  {
    id: 'exp008',
    employeeId: 'emp006',
    projectName: 'Security Compliance Initiative',
    role: 'Security Specialist',
    duration: {
      start: new Date('2022-02-01'),
      end: new Date('2022-06-30')
    },
    skillsUtilized: ['skill010', 'skill013', 'skill017', 'skill018'],
    outcomes: [
      'Achieved ISO 27001 certification',
      'Implemented security best practices',
      'Reduced security incidents by 40%'
    ],
    department: 'IT',
    teamSize: 5,
    description: 'Led initiative to improve security compliance and achieve industry certifications. Implemented security policies and conducted training.'
  },
  {
    id: 'exp009',
    employeeId: 'emp007',
    projectName: 'Product Strategy Development',
    role: 'Product Strategist',
    duration: {
      start: new Date('2021-10-01'),
      end: new Date('2022-01-31')
    },
    skillsUtilized: ['skill011', 'skill012', 'skill013', 'skill017', 'skill019'],
    outcomes: [
      'Defined 3-year product roadmap',
      'Identified new market opportunities',
      'Aligned product strategy with business goals'
    ],
    department: 'Product',
    teamSize: 6,
    description: 'Developed comprehensive product strategy and roadmap. Conducted market research and competitive analysis to inform product decisions.'
  },
  {
    id: 'exp010',
    employeeId: 'emp008',
    projectName: 'Customer Success Program',
    role: 'Customer Success Manager',
    duration: {
      start: new Date('2022-03-15'),
      end: new Date('2022-08-31')
    },
    skillsUtilized: ['skill011', 'skill014', 'skill016', 'skill020'],
    outcomes: [
      'Improved customer retention by 20%',
      'Established customer success metrics',
      'Created onboarding program for new customers'
    ],
    department: 'Customer Success',
    teamSize: 8,
    description: 'Developed and implemented customer success program to improve retention and satisfaction. Created metrics and processes for measuring success.'
  }
];

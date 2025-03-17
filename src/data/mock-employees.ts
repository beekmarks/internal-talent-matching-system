import { Employee } from '../models/employee.model';
import { Skill } from '../models/skill.model';

/**
 * Mock employees data with enhanced profiles
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const mockEmployees: Employee[] = [
  {
    id: 'emp001',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'JavaScript', level: 'expert', yearsOfExperience: 7 },
      { name: 'TypeScript', level: 'advanced', yearsOfExperience: 4 },
      { name: 'React', level: 'expert', yearsOfExperience: 5 },
      { name: 'Node.js', level: 'advanced', yearsOfExperience: 4 },
      { name: 'AWS', level: 'intermediate', yearsOfExperience: 3 },
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        dateAcquired: new Date('2021-06-15'),
      },
    ],
    education: [
      {
        institution: 'University of Washington',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        graduationDate: new Date('2015-05-20'),
      },
    ],
    jobHistory: [
      {
        company: 'Tech Innovations Inc.',
        position: 'Software Engineer',
        startDate: new Date('2015-06-01'),
        endDate: new Date('2018-12-31'),
        responsibilities: ['Frontend development', 'API integration'],
      },
      {
        company: 'Current Company',
        position: 'Senior Software Engineer',
        startDate: new Date('2019-01-15'),
        responsibilities: ['Lead frontend team', 'Architecture design'],
      },
    ],
    preferences: {
      jobType: ['Engineering Manager', 'Technical Lead'],
      location: ['Seattle', 'Remote'],
      remote: true,
      willingToRelocate: false,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-11-10'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill001', name: 'JavaScript', category: 'hard', proficiency: 5, validatedBy: ['emp002', 'emp003'], lastValidated: new Date('2023-10-15') },
      { id: 'skill002', name: 'TypeScript', category: 'hard', proficiency: 4, validatedBy: ['emp001'], lastValidated: new Date('2023-09-20') },
      { id: 'skill003', name: 'React', category: 'hard', proficiency: 5, validatedBy: ['emp002', 'emp005'], lastValidated: new Date('2023-11-05') },
      { id: 'skill004', name: 'Node.js', category: 'hard', proficiency: 4, validatedBy: ['emp001', 'emp003'], lastValidated: new Date('2023-08-10') },
      { id: 'skill009', name: 'AWS', category: 'hard', proficiency: 3, validatedBy: ['emp005'], lastValidated: new Date('2023-06-18') }
    ],
    softSkills: [
      { id: 'skill011', name: 'Communication', category: 'soft', proficiency: 4, validatedBy: ['emp001', 'emp002', 'emp005'], lastValidated: new Date('2023-09-10') },
      { id: 'skill013', name: 'Problem Solving', category: 'soft', proficiency: 5, validatedBy: ['emp001', 'emp004'], lastValidated: new Date('2023-08-22') },
      { id: 'skill014', name: 'Teamwork', category: 'soft', proficiency: 4, validatedBy: ['emp002', 'emp005', 'emp007'], lastValidated: new Date('2023-07-15') },
      { id: 'skill016', name: 'Adaptability', category: 'soft', proficiency: 4, validatedBy: ['emp001', 'emp006'], lastValidated: new Date('2023-09-25') }
    ],
    pastExperience: [
      { 
        id: 'exp001', 
        employeeId: 'emp001', 
        projectName: 'Customer Portal Redesign', 
        role: 'Frontend Lead',
        duration: { start: new Date('2022-01-15'), end: new Date('2022-06-30') },
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
        id: 'exp005',
        employeeId: 'emp001', 
        projectName: 'DevOps Pipeline Modernization',
        role: 'DevOps Engineer',
        duration: { start: new Date('2022-07-01'), end: new Date('2022-10-15') },
        skillsUtilized: ['skill009', 'skill010', 'skill013', 'skill015', 'skill016'],
        outcomes: [
          'Reduced deployment time by 70%',
          'Implemented CI/CD pipelines',
          'Improved system reliability and monitoring'
        ],
        department: 'Engineering',
        teamSize: 4,
        description: 'Modernized deployment pipelines using Docker and AWS. Implemented automated testing and continuous integration practices.'
      }
    ],
    careerAspirations: [
      'Become a Technical Lead within 1-2 years',
      'Develop expertise in cloud architecture',
      'Eventually move into an Engineering Manager role'
    ],
    interests: [
      'Frontend performance optimization',
      'Serverless architecture',
      'Developer experience improvements',
      'Open source contribution'
    ],
    developmentGoals: [
      'Improve cloud architecture skills',
      'Develop leadership capabilities',
      'Learn more about system design patterns'
    ],
    capacity: 85, // 85% available capacity
    location: 'Seattle',
    licenses: [
      {
        id: 'lic001',
        name: 'AWS Certified Developer - Associate',
        issuer: 'Amazon Web Services',
        dateObtained: new Date('2021-06-15'),
        expiryDate: new Date('2024-06-15'),
        validationStatus: true,
        category: 'Technical',
        description: 'Validates technical expertise in developing and maintaining AWS-based applications'
      }
    ],
    assessments: [
      {
        id: 'assess001',
        date: new Date('2023-03-15'),
        type: 'self',
        assessorId: 'emp001',
        employeeId: 'emp001',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill001', // JavaScript
            previousRating: 4,
            newRating: 5,
            comments: 'Completed advanced JavaScript course and implemented complex features'
          },
          {
            skillId: 'skill002', // TypeScript
            previousRating: 3,
            newRating: 4,
            comments: 'Gained more experience with TypeScript in recent projects'
          },
          {
            skillId: 'skill011', // Communication
            previousRating: 3,
            newRating: 4,
            comments: 'Improved communication skills through team leadership'
          }
        ],
        overallComments: 'I feel I have grown significantly in technical skills and communication this quarter',
        developmentSuggestions: [
          'Continue to develop AWS expertise',
          'Take on more mentoring opportunities'
        ]
      },
      {
        id: 'assess002',
        date: new Date('2023-03-20'),
        type: 'manager',
        assessorId: 'emp005', // Manager
        employeeId: 'emp001',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill001', // JavaScript
            previousRating: 4,
            newRating: 5,
            comments: 'Demonstrated expert-level JavaScript skills in the portal redesign project'
          },
          {
            skillId: 'skill002', // TypeScript
            previousRating: 3,
            newRating: 4,
            comments: 'Shows strong TypeScript knowledge and applies best practices'
          },
          {
            skillId: 'skill011', // Communication
            previousRating: 3,
            newRating: 3,
            comments: 'Communication is good but could be more proactive in status updates'
          }
        ],
        overallComments: 'Strong technical performer who continues to grow. Communication could still be improved.',
        developmentSuggestions: [
          'Work on proactive communication',
          'Consider taking on a mentoring role for junior developers',
          'Explore architecture design patterns'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: true,
      recognitionCentral: true
    }
  },
  
  {
    id: 'emp002',
    name: 'Michael Johnson',
    email: 'michael.johnson@company.com',
    department: 'Data Science',
    position: 'Data Scientist',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Python', level: 'expert', yearsOfExperience: 6 },
      { name: 'Machine Learning', level: 'advanced', yearsOfExperience: 4 },
      { name: 'SQL', level: 'advanced', yearsOfExperience: 5 },
      { name: 'TensorFlow', level: 'intermediate', yearsOfExperience: 3 },
      { name: 'Data Visualization', level: 'advanced', yearsOfExperience: 4 },
    ],
    certifications: [
      {
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        dateAcquired: new Date('2022-03-10'),
      },
    ],
    education: [
      {
        institution: 'Stanford University',
        degree: 'Master of Science',
        fieldOfStudy: 'Data Science',
        graduationDate: new Date('2017-06-15'),
      },
      {
        institution: 'UCLA',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Statistics',
        graduationDate: new Date('2015-05-20'),
      },
    ],
    jobHistory: [
      {
        company: 'Data Insights Corp',
        position: 'Junior Data Analyst',
        startDate: new Date('2017-07-01'),
        endDate: new Date('2019-08-31'),
        responsibilities: ['Data analysis', 'Reporting'],
      },
      {
        company: 'Current Company',
        position: 'Data Scientist',
        startDate: new Date('2019-09-15'),
        responsibilities: ['Machine learning models', 'Data pipeline development'],
      },
    ],
    preferences: {
      jobType: ['Senior Data Scientist', 'ML Engineer'],
      location: ['San Francisco', 'Los Angeles', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-10-05'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill005', name: 'Python', category: 'hard', proficiency: 5, validatedBy: ['emp004', 'emp006'], lastValidated: new Date('2023-10-22') },
      { id: 'skill006', name: 'Machine Learning', category: 'hard', proficiency: 4, validatedBy: ['emp007'], lastValidated: new Date('2023-09-15'), derivedFrom: 'project: Customer Segmentation Analysis' },
      { id: 'skill007', name: 'SQL', category: 'hard', proficiency: 4, validatedBy: ['emp001', 'emp004'], lastValidated: new Date('2023-07-30') },
      { id: 'skill008', name: 'Data Analysis', category: 'hard', proficiency: 4, validatedBy: ['emp002'], lastValidated: new Date('2023-08-05') }
    ],
    softSkills: [
      { id: 'skill013', name: 'Problem Solving', category: 'soft', proficiency: 4, validatedBy: ['emp001', 'emp004'], lastValidated: new Date('2023-08-22') },
      { id: 'skill017', name: 'Critical Thinking', category: 'soft', proficiency: 4, validatedBy: ['emp004', 'emp007'], lastValidated: new Date('2023-08-18') },
      { id: 'skill011', name: 'Communication', category: 'soft', proficiency: 3, validatedBy: ['emp001', 'emp002', 'emp005'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp002', 
        employeeId: 'emp002', 
        projectName: 'Data Analytics Platform', 
        role: 'Data Engineer',
        duration: { start: new Date('2021-08-10'), end: new Date('2022-03-15') },
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
        id: 'exp004',
        employeeId: 'emp002', 
        projectName: 'Customer Segmentation Analysis',
        role: 'Data Scientist',
        duration: { start: new Date('2021-11-15'), end: new Date('2022-02-28') },
        skillsUtilized: ['skill005', 'skill006', 'skill007', 'skill008', 'skill017'],
        outcomes: [
          'Identified 5 key customer segments for targeted marketing',
          'Increased conversion rates by 15%',
          'Created predictive models for customer behavior'
        ],
        department: 'Data Science',
        teamSize: 3,
        description: 'Applied machine learning techniques to segment customers based on behavior patterns. Created predictive models for marketing optimization.'
      }
    ],
    careerAspirations: [
      'Lead data science initiatives',
      'Specialize in deep learning applications',
      'Publish research papers in ML conferences'
    ],
    interests: [
      'Natural language processing',
      'Computer vision',
      'Ethical AI development',
      'Big data technologies'
    ],
    developmentGoals: [
      'Deepen expertise in deep learning',
      'Improve data visualization skills',
      'Learn cloud-based ML platforms'
    ],
    capacity: 70, // 70% available capacity
    location: 'San Francisco',
    licenses: [
      {
        id: 'lic009',
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        dateObtained: new Date('2022-03-10'),
        validationStatus: true,
        category: 'Technical',
        description: 'Validates skills in using TensorFlow to solve deep learning and ML problems'
      }
    ],
    assessments: [
      {
        id: 'assess004',
        date: new Date('2023-03-10'),
        type: 'self',
        assessorId: 'emp002',
        employeeId: 'emp002',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill005', // Python
            previousRating: 4,
            newRating: 5,
            comments: 'Completed advanced Python training and implemented ML models'
          },
          {
            skillId: 'skill006', // Machine Learning
            previousRating: 3,
            newRating: 4,
            comments: 'Applied ML techniques in customer segmentation project'
          }
        ],
        overallComments: 'I have focused on deepening my ML expertise this quarter',
        developmentSuggestions: [
          'Learn more about deep learning frameworks',
          'Explore cloud-based ML services'
        ]
      },
      {
        id: 'assess005',
        date: new Date('2023-03-22'),
        type: 'manager',
        assessorId: 'emp007', // Manager
        employeeId: 'emp002',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill005', // Python
            previousRating: 4,
            newRating: 5,
            comments: 'Demonstrates expert-level Python skills'
          },
          {
            skillId: 'skill006', // Machine Learning
            previousRating: 3,
            newRating: 4,
            comments: 'Shows strong growth in ML capabilities'
          },
          {
            skillId: 'skill017', // Critical Thinking
            previousRating: 3,
            newRating: 4,
            comments: 'Excellent problem analysis and solution development'
          }
        ],
        overallComments: 'Outstanding technical growth this quarter. Ready for more challenging projects.',
        developmentSuggestions: [
          'Consider leading a small team on next project',
          'Develop presentation skills to share findings more effectively'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: true,
      recognitionCentral: false
    }
  },
  
  {
    id: 'emp003',
    name: 'Sarah Williams',
    email: 'sarah.williams@company.com',
    department: 'Product Management',
    position: 'Product Manager',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Product Strategy', level: 'expert', yearsOfExperience: 8 },
      { name: 'Agile Methodologies', level: 'expert', yearsOfExperience: 6 },
      { name: 'User Research', level: 'advanced', yearsOfExperience: 5 },
      { name: 'Data Analysis', level: 'intermediate', yearsOfExperience: 4 },
      { name: 'Project Management', level: 'advanced', yearsOfExperience: 7 },
    ],
    certifications: [
      {
        name: 'Certified Scrum Product Owner',
        issuer: 'Scrum Alliance',
        dateAcquired: new Date('2020-02-20'),
      },
    ],
    education: [
      {
        institution: 'University of Michigan',
        degree: 'Master of Business Administration',
        fieldOfStudy: 'Business Administration',
        graduationDate: new Date('2015-05-15'),
      },
      {
        institution: 'Ohio State University',
        degree: 'Bachelor of Arts',
        fieldOfStudy: 'Marketing',
        graduationDate: new Date('2012-05-20'),
      },
    ],
    jobHistory: [
      {
        company: 'Consumer Products Inc.',
        position: 'Associate Product Manager',
        startDate: new Date('2015-06-15'),
        endDate: new Date('2018-07-31'),
        responsibilities: ['Feature prioritization', 'User research'],
      },
      {
        company: 'Current Company',
        position: 'Product Manager',
        startDate: new Date('2018-08-15'),
        responsibilities: ['Product roadmap', 'Cross-functional leadership'],
      },
    ],
    preferences: {
      jobType: ['Senior Product Manager', 'Director of Product'],
      location: ['Chicago', 'New York', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-09-20'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill008', name: 'Data Analysis', category: 'hard', proficiency: 3, validatedBy: ['emp002'], lastValidated: new Date('2023-08-05') }
    ],
    softSkills: [
      { id: 'skill012', name: 'Leadership', category: 'soft', proficiency: 4, validatedBy: ['emp003', 'emp006'], lastValidated: new Date('2023-10-05') },
      { id: 'skill018', name: 'Project Management', category: 'soft', proficiency: 4, validatedBy: ['emp002'], lastValidated: new Date('2023-07-20') },
      { id: 'skill019', name: 'Creativity', category: 'soft', proficiency: 4, validatedBy: ['emp005'], lastValidated: new Date('2023-10-12'), derivedFrom: 'project: Marketing Campaign Redesign' },
      { id: 'skill020', name: 'Emotional Intelligence', category: 'soft', proficiency: 4, validatedBy: ['emp003', 'emp006'], lastValidated: new Date('2023-09-05') }
    ],
    pastExperience: [
      { 
        id: 'exp007', 
        employeeId: 'emp003', 
        projectName: 'Enterprise Resource Planning Implementation', 
        role: 'Project Manager',
        duration: { start: new Date('2021-06-15'), end: new Date('2022-05-30') },
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
        id: 'exp009',
        employeeId: 'emp003', 
        projectName: 'Product Strategy Development',
        role: 'Product Strategist',
        duration: { start: new Date('2021-10-01'), end: new Date('2022-01-31') },
        skillsUtilized: ['skill011', 'skill012', 'skill013', 'skill017', 'skill019'],
        outcomes: [
          'Defined 3-year product roadmap',
          'Identified new market opportunities',
          'Aligned product strategy with business goals'
        ],
        department: 'Product',
        teamSize: 6,
        description: 'Developed comprehensive product strategy and roadmap. Conducted market research and competitive analysis to inform product decisions.'
      }
    ],
    careerAspirations: [
      'Become Director of Product',
      'Lead product strategy for enterprise solutions',
      'Develop expertise in product-led growth'
    ],
    interests: [
      'User experience design',
      'Market research methodologies',
      'Product analytics',
      'Customer journey mapping'
    ],
    developmentGoals: [
      'Improve data analysis skills',
      'Develop strategic thinking capabilities',
      'Learn more about enterprise sales processes'
    ],
    capacity: 60, // 60% available capacity
    location: 'Chicago',
    licenses: [
      {
        id: 'lic006',
        name: 'Certified ScrumProduct Owner (CSPO)',
        issuer: 'Scrum Alliance',
        dateObtained: new Date('2020-02-20'),
        expiryDate: new Date('2022-02-20'),
        validationStatus: false, // Expired
        category: 'Professional',
        description: 'Validates knowledge of the Product Owner role in Scrum framework'
      }
    ],
    assessments: [
      {
        id: 'assess008',
        date: new Date('2023-03-25'),
        type: 'self',
        assessorId: 'emp003',
        employeeId: 'emp003',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill012', // Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Led cross-functional team successfully on ERP implementation'
          },
          {
            skillId: 'skill018', // Project Management
            previousRating: 3,
            newRating: 4,
            comments: 'Improved project management skills through formal training and practice'
          }
        ],
        overallComments: 'I have focused on leadership and project management growth this quarter',
        developmentSuggestions: [
          'Pursue PMP certification',
          'Develop more strategic thinking skills'
        ]
      },
      {
        id: 'assess009',
        date: new Date('2023-03-28'),
        type: 'manager',
        assessorId: 'emp008', // Manager
        employeeId: 'emp003',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill012', // Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Demonstrated strong leadership in challenging project situations'
          },
          {
            skillId: 'skill018', // Project Management
            previousRating: 3,
            newRating: 3,
            comments: 'Project management is improving but still needs more structure'
          }
        ],
        overallComments: 'Strong growth in leadership capabilities. Continue developing formal project management skills.',
        developmentSuggestions: [
          'Implement more formal project tracking methods',
          'Work on stakeholder management techniques'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: false,
      sumTotal: true,
      degreed: true,
      recognitionCentral: true
    }
  }
];

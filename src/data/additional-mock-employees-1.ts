import { Employee } from '../models/employee.model';
import { Skill } from '../models/skill.model';

/**
 * Additional mock employees data with diverse profiles
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const additionalMockEmployees1: Employee[] = [
  {
    id: 'emp004',
    name: 'David Chen',
    email: 'david.chen@company.com',
    department: 'UX/UI Design',
    position: 'Senior UX Designer',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'User Interface Design', level: 'expert', yearsOfExperience: 8 },
      { name: 'User Research', level: 'expert', yearsOfExperience: 7 },
      { name: 'Figma', level: 'expert', yearsOfExperience: 5 },
      { name: 'Adobe Creative Suite', level: 'advanced', yearsOfExperience: 9 },
      { name: 'Prototyping', level: 'expert', yearsOfExperience: 6 },
    ],
    certifications: [
      {
        name: 'Certified User Experience Professional',
        issuer: 'Nielsen Norman Group',
        dateAcquired: new Date('2019-04-10'),
      },
    ],
    education: [
      {
        institution: 'Rhode Island School of Design',
        degree: 'Bachelor of Fine Arts',
        fieldOfStudy: 'Graphic Design',
        graduationDate: new Date('2014-05-15'),
      },
      {
        institution: 'Stanford University',
        degree: 'Master of Human-Computer Interaction',
        fieldOfStudy: 'HCI',
        graduationDate: new Date('2016-06-10'),
      }
    ],
    jobHistory: [
      {
        company: 'Design Innovations LLC',
        position: 'UX Designer',
        startDate: new Date('2016-07-01'),
        endDate: new Date('2019-03-31'),
        responsibilities: ['User research', 'Wireframing', 'Usability testing'],
      },
      {
        company: 'Current Company',
        position: 'Senior UX Designer',
        startDate: new Date('2019-04-15'),
        responsibilities: ['Lead design team', 'Design system creation', 'User experience strategy'],
      },
    ],
    preferences: {
      jobType: ['Design Director', 'UX Manager'],
      location: ['San Francisco', 'Remote'],
      remote: true,
      willingToRelocate: false,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-10-05'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill101', name: 'User Interface Design', category: 'hard', proficiency: 5, validatedBy: ['emp001', 'emp006'], lastValidated: new Date('2023-09-12') },
      { id: 'skill102', name: 'Figma', category: 'hard', proficiency: 5, validatedBy: ['emp006', 'emp008'], lastValidated: new Date('2023-08-20') },
      { id: 'skill103', name: 'Adobe Creative Suite', category: 'hard', proficiency: 4, validatedBy: ['emp008'], lastValidated: new Date('2023-07-15') },
      { id: 'skill104', name: 'Prototyping', category: 'hard', proficiency: 5, validatedBy: ['emp001', 'emp006'], lastValidated: new Date('2023-09-05') },
      { id: 'skill105', name: 'Design Systems', category: 'hard', proficiency: 4, validatedBy: ['emp006'], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill106', name: 'Creativity', category: 'soft', proficiency: 5, validatedBy: ['emp001', 'emp006', 'emp008'], lastValidated: new Date('2023-09-15') },
      { id: 'skill107', name: 'Empathy', category: 'soft', proficiency: 5, validatedBy: ['emp003', 'emp008'], lastValidated: new Date('2023-08-25') },
      { id: 'skill108', name: 'Communication', category: 'soft', proficiency: 4, validatedBy: ['emp001', 'emp003'], lastValidated: new Date('2023-07-20') },
      { id: 'skill109', name: 'Collaboration', category: 'soft', proficiency: 4, validatedBy: ['emp006', 'emp008'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp101', 
        employeeId: 'emp004', 
        projectName: 'Mobile App Redesign',
        role: 'Lead UX Designer',
        duration: { start: new Date('2021-02-10'), end: new Date('2021-08-15') },
        skillsUtilized: ['skill101', 'skill102', 'skill104', 'skill106', 'skill108'],
        outcomes: [
          'Increased user engagement by 35%',
          'Reduced user errors by 40%',
          'Implemented accessible design patterns'
        ],
        department: 'UX/UI Design',
        teamSize: 5,
        description: 'Led the redesign of our flagship mobile application with a focus on accessibility and user engagement. Created a new design system that was adopted company-wide.'
      },
      {
        id: 'exp102',
        employeeId: 'emp004', 
        projectName: 'Enterprise Dashboard',
        role: 'UX Designer',
        duration: { start: new Date('2021-09-01'), end: new Date('2022-01-20') },
        skillsUtilized: ['skill101', 'skill102', 'skill103', 'skill105', 'skill109'],
        outcomes: [
          'Simplified complex data visualization',
          'Reduced training time for new users by 50%',
          'Created modular, reusable components'
        ],
        department: 'UX/UI Design',
        teamSize: 7,
        description: 'Designed an enterprise dashboard for data analysts that simplified complex data visualization and reporting. Focused on information architecture and cognitive load reduction.'
      }
    ],
    careerAspirations: [
      'Become a Design Director within 2-3 years',
      'Build and lead larger design teams',
      'Establish design thinking across the organization'
    ],
    interests: [
      'Accessibility in design',
      'Design ethics',
      'Emerging UI technologies',
      'Design education and mentorship'
    ],
    developmentGoals: [
      'Improve leadership skills',
      'Learn more about design operations',
      'Develop expertise in service design'
    ],
    capacity: 70, // 70% available capacity
    location: 'San Francisco',
    licenses: [
      {
        id: 'lic101',
        name: 'Certified Professional in Accessibility Core Competencies',
        issuer: 'International Association of Accessibility Professionals',
        dateObtained: new Date('2022-03-10'),
        expiryDate: new Date('2025-03-10'),
        validationStatus: true,
        category: 'Professional',
        description: 'Validates knowledge of accessibility principles and practices in digital design'
      }
    ],
    assessments: [
      {
        id: 'assess101',
        date: new Date('2023-02-10'),
        type: 'self',
        assessorId: 'emp004',
        employeeId: 'emp004',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill102', // Figma
            previousRating: 4,
            newRating: 5,
            comments: 'Mastered advanced Figma techniques including variables and auto-layout'
          },
          {
            skillId: 'skill105', // Design Systems
            previousRating: 3,
            newRating: 4,
            comments: 'Created and implemented a comprehensive design system for the company'
          }
        ],
        overallComments: 'I have grown significantly in my design system skills and Figma expertise',
        developmentSuggestions: [
          'Focus more on leadership skills',
          'Learn more about design operations'
        ]
      },
      {
        id: 'assess102',
        date: new Date('2023-02-15'),
        type: 'manager',
        assessorId: 'emp006', // Manager
        employeeId: 'emp004',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill102', // Figma
            previousRating: 4,
            newRating: 5,
            comments: 'David has become our go-to Figma expert and has improved team workflows'
          },
          {
            skillId: 'skill106', // Creativity
            previousRating: 4,
            newRating: 5,
            comments: 'Consistently brings innovative solutions to design challenges'
          }
        ],
        overallComments: 'David continues to excel in technical design skills and is growing as a leader',
        developmentSuggestions: [
          'Consider taking on more mentoring responsibilities',
          'Work on strategic thinking for design leadership'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: false,
      recognitionCentral: true
    }
  },
  
  {
    id: 'emp005',
    name: 'Priya Patel',
    email: 'priya.patel@company.com',
    department: 'Data Engineering',
    position: 'Lead Data Engineer',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Apache Spark', level: 'expert', yearsOfExperience: 6 },
      { name: 'Python', level: 'expert', yearsOfExperience: 8 },
      { name: 'SQL', level: 'expert', yearsOfExperience: 9 },
      { name: 'Data Modeling', level: 'advanced', yearsOfExperience: 7 },
      { name: 'Airflow', level: 'advanced', yearsOfExperience: 5 },
    ],
    certifications: [
      {
        name: 'Google Professional Data Engineer',
        issuer: 'Google Cloud',
        dateAcquired: new Date('2020-08-15'),
      },
      {
        name: 'Databricks Certified Developer',
        issuer: 'Databricks',
        dateAcquired: new Date('2021-03-20'),
      }
    ],
    education: [
      {
        institution: 'Carnegie Mellon University',
        degree: 'Master of Information Systems Management',
        fieldOfStudy: 'Information Systems',
        graduationDate: new Date('2014-05-20'),
      },
      {
        institution: 'University of Mumbai',
        degree: 'Bachelor of Engineering',
        fieldOfStudy: 'Computer Science',
        graduationDate: new Date('2012-06-15'),
      }
    ],
    jobHistory: [
      {
        company: 'DataTech Solutions',
        position: 'Data Engineer',
        startDate: new Date('2014-07-01'),
        endDate: new Date('2018-02-28'),
        responsibilities: ['ETL pipeline development', 'Data warehouse design'],
      },
      {
        company: 'Analytics Innovations',
        position: 'Senior Data Engineer',
        startDate: new Date('2018-03-15'),
        endDate: new Date('2021-01-31'),
        responsibilities: ['Big data architecture', 'Team leadership'],
      },
      {
        company: 'Current Company',
        position: 'Lead Data Engineer',
        startDate: new Date('2021-02-15'),
        responsibilities: ['Data platform architecture', 'Cross-team collaboration', 'Mentoring'],
      }
    ],
    preferences: {
      jobType: ['Data Architect', 'Engineering Manager'],
      location: ['New York', 'Boston', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-09-20'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill201', name: 'Apache Spark', category: 'hard', proficiency: 5, validatedBy: ['emp002', 'emp008'], lastValidated: new Date('2023-08-15') },
      { id: 'skill202', name: 'Python', category: 'hard', proficiency: 5, validatedBy: ['emp002', 'emp008', 'emp012'], lastValidated: new Date('2023-09-10') },
      { id: 'skill203', name: 'SQL', category: 'hard', proficiency: 5, validatedBy: ['emp002', 'emp008'], lastValidated: new Date('2023-07-20') },
      { id: 'skill204', name: 'Data Modeling', category: 'hard', proficiency: 4, validatedBy: ['emp002', 'emp012'], lastValidated: new Date('2023-08-05') },
      { id: 'skill205', name: 'Airflow', category: 'hard', proficiency: 4, validatedBy: ['emp008'], lastValidated: new Date('2023-09-05') },
      { id: 'skill206', name: 'Kubernetes', category: 'hard', proficiency: 3, validatedBy: ['emp008'], lastValidated: new Date('2023-07-10') }
    ],
    softSkills: [
      { id: 'skill207', name: 'Problem Solving', category: 'soft', proficiency: 5, validatedBy: ['emp002', 'emp008', 'emp012'], lastValidated: new Date('2023-08-20') },
      { id: 'skill208', name: 'Technical Leadership', category: 'soft', proficiency: 4, validatedBy: ['emp008'], lastValidated: new Date('2023-09-15') },
      { id: 'skill209', name: 'Communication', category: 'soft', proficiency: 4, validatedBy: ['emp002', 'emp003'], lastValidated: new Date('2023-07-25') },
      { id: 'skill210', name: 'Mentoring', category: 'soft', proficiency: 4, validatedBy: ['emp008', 'emp012'], lastValidated: new Date('2023-08-10') }
    ],
    pastExperience: [
      { 
        id: 'exp201', 
        employeeId: 'emp005', 
        projectName: 'Data Lake Migration',
        role: 'Technical Lead',
        duration: { start: new Date('2021-05-10'), end: new Date('2021-11-30') },
        skillsUtilized: ['skill201', 'skill202', 'skill203', 'skill206', 'skill208'],
        outcomes: [
          'Reduced data processing costs by 40%',
          'Improved data availability by implementing real-time processing',
          'Successfully migrated 5PB of data with zero downtime'
        ],
        department: 'Data Engineering',
        teamSize: 8,
        description: 'Led the migration of our legacy data warehouse to a modern data lake architecture using cloud technologies. Implemented streaming data pipelines and improved data governance.'
      },
      {
        id: 'exp202',
        employeeId: 'emp005', 
        projectName: 'ML Feature Store',
        role: 'Data Engineering Lead',
        duration: { start: new Date('2022-02-01'), end: new Date('2022-07-15') },
        skillsUtilized: ['skill201', 'skill202', 'skill204', 'skill205', 'skill207'],
        outcomes: [
          'Reduced ML feature development time by 60%',
          'Implemented feature reuse across 15+ ML models',
          'Established data quality monitoring framework'
        ],
        department: 'Data Engineering',
        teamSize: 6,
        description: 'Designed and implemented a feature store for machine learning that enabled feature reuse across multiple ML models and teams. Focused on data quality, governance, and performance.'
      }
    ],
    careerAspirations: [
      'Become a Data Architect within 1-2 years',
      'Eventually move into a technical leadership role for the entire data organization',
      'Contribute to open-source data engineering tools'
    ],
    interests: [
      'Real-time data processing',
      'Data mesh architecture',
      'ML Ops and feature engineering',
      'Data governance and quality'
    ],
    developmentGoals: [
      'Improve cloud architecture skills',
      'Develop expertise in data governance',
      'Enhance leadership and strategic thinking'
    ],
    capacity: 65, // 65% available capacity
    location: 'New York',
    licenses: [
      {
        id: 'lic201',
        name: 'Google Professional Data Engineer',
        issuer: 'Google Cloud',
        dateObtained: new Date('2020-08-15'),
        expiryDate: new Date('2023-08-15'),
        validationStatus: true,
        category: 'Technical',
        description: 'Validates expertise in designing and building data processing systems on Google Cloud'
      },
      {
        id: 'lic202',
        name: 'Databricks Certified Developer - Apache Spark',
        issuer: 'Databricks',
        dateObtained: new Date('2021-03-20'),
        expiryDate: new Date('2024-03-20'),
        validationStatus: true,
        category: 'Technical',
        description: 'Validates expertise in developing applications with Apache Spark and Databricks platform'
      }
    ],
    assessments: [
      {
        id: 'assess201',
        date: new Date('2023-03-05'),
        type: 'self',
        assessorId: 'emp005',
        employeeId: 'emp005',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill206', // Kubernetes
            previousRating: 2,
            newRating: 3,
            comments: 'Improved Kubernetes skills through recent project work and online courses'
          },
          {
            skillId: 'skill208', // Technical Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Developed leadership skills by leading cross-functional data initiatives'
          }
        ],
        overallComments: 'I have made good progress in technical leadership and container orchestration',
        developmentSuggestions: [
          'Continue to develop cloud architecture skills',
          'Take more opportunities to present to senior leadership'
        ]
      },
      {
        id: 'assess202',
        date: new Date('2023-03-10'),
        type: 'manager',
        assessorId: 'emp008', // Manager
        employeeId: 'emp005',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill201', // Apache Spark
            previousRating: 4,
            newRating: 5,
            comments: 'Priya has demonstrated expert-level Spark knowledge in optimizing our data pipelines'
          },
          {
            skillId: 'skill208', // Technical Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Has shown significant growth in leading technical initiatives and mentoring team members'
          }
        ],
        overallComments: 'Priya continues to excel technically and is growing well as a technical leader',
        developmentSuggestions: [
          'Consider taking on more architectural responsibilities',
          'Work on communicating technical concepts to non-technical stakeholders'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: false,
      recognitionCentral: true
    }
  },
  
  {
    id: 'emp006',
    name: 'Marcus Washington',
    email: 'marcus.washington@company.com',
    department: 'UX/UI Design',
    position: 'Design Director',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Design Leadership', level: 'expert', yearsOfExperience: 10 },
      { name: 'Design Systems', level: 'expert', yearsOfExperience: 8 },
      { name: 'User Research', level: 'expert', yearsOfExperience: 12 },
      { name: 'Design Thinking', level: 'expert', yearsOfExperience: 9 },
      { name: 'Team Management', level: 'expert', yearsOfExperience: 7 },
    ],
    certifications: [
      {
        name: 'Certified UX Manager',
        issuer: 'User Experience Professionals Association',
        dateAcquired: new Date('2018-05-10'),
      }
    ],
    education: [
      {
        institution: 'Parsons School of Design',
        degree: 'Master of Fine Arts',
        fieldOfStudy: 'Design and Technology',
        graduationDate: new Date('2010-05-15'),
      },
      {
        institution: 'Howard University',
        degree: 'Bachelor of Arts',
        fieldOfStudy: 'Visual Communications',
        graduationDate: new Date('2008-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Creative Digital Agency',
        position: 'Senior Designer',
        startDate: new Date('2010-06-15'),
        endDate: new Date('2014-03-31'),
        responsibilities: ['Brand identity', 'User experience design'],
      },
      {
        company: 'Tech Innovations Inc.',
        position: 'UX Manager',
        startDate: new Date('2014-04-15'),
        endDate: new Date('2018-12-31'),
        responsibilities: ['Design team leadership', 'UX strategy'],
      },
      {
        company: 'Current Company',
        position: 'Design Director',
        startDate: new Date('2019-01-15'),
        responsibilities: ['Design organization leadership', 'Design operations', 'Strategic direction'],
      }
    ],
    preferences: {
      jobType: ['VP of Design', 'Chief Design Officer'],
      location: ['Atlanta', 'Remote'],
      remote: true,
      willingToRelocate: false,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-10-15'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill301', name: 'Design Leadership', category: 'hard', proficiency: 5, validatedBy: ['emp001', 'emp004'], lastValidated: new Date('2023-09-20') },
      { id: 'skill302', name: 'Design Systems', category: 'hard', proficiency: 5, validatedBy: ['emp004'], lastValidated: new Date('2023-08-15') },
      { id: 'skill303', name: 'User Research', category: 'hard', proficiency: 5, validatedBy: ['emp003', 'emp004'], lastValidated: new Date('2023-07-10') },
      { id: 'skill304', name: 'Design Thinking', category: 'hard', proficiency: 5, validatedBy: ['emp001', 'emp003', 'emp004'], lastValidated: new Date('2023-09-05') },
      { id: 'skill305', name: 'Design Operations', category: 'hard', proficiency: 4, validatedBy: ['emp001'], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill306', name: 'Leadership', category: 'soft', proficiency: 5, validatedBy: ['emp001', 'emp003', 'emp004'], lastValidated: new Date('2023-09-15') },
      { id: 'skill307', name: 'Strategic Thinking', category: 'soft', proficiency: 5, validatedBy: ['emp001', 'emp003'], lastValidated: new Date('2023-08-20') },
      { id: 'skill308', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: ['emp003', 'emp004'], lastValidated: new Date('2023-07-25') },
      { id: 'skill309', name: 'Mentoring', category: 'soft', proficiency: 5, validatedBy: ['emp004'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp301', 
        employeeId: 'emp006', 
        projectName: 'Design Organization Restructuring',
        role: 'Design Director',
        duration: { start: new Date('2020-01-15'), end: new Date('2020-06-30') },
        skillsUtilized: ['skill301', 'skill305', 'skill306', 'skill307', 'skill308'],
        outcomes: [
          'Increased design team efficiency by 35%',
          'Reduced time-to-market for design deliverables by 40%',
          'Improved cross-functional collaboration'
        ],
        department: 'UX/UI Design',
        teamSize: 18,
        description: 'Led a comprehensive restructuring of the design organization to align with product teams and improve collaboration. Implemented design operations practices and established clear career paths.'
      },
      {
        id: 'exp302',
        employeeId: 'emp006', 
        projectName: 'Enterprise Design System',
        role: 'Executive Sponsor',
        duration: { start: new Date('2021-03-01'), end: new Date('2022-02-28') },
        skillsUtilized: ['skill301', 'skill302', 'skill304', 'skill307', 'skill308'],
        outcomes: [
          'Reduced design inconsistencies by 80%',
          'Decreased development time for new features by 50%',
          'Established governance model for design system maintenance'
        ],
        department: 'UX/UI Design',
        teamSize: 12,
        description: 'Executive sponsor for the creation of an enterprise-wide design system that standardized UI components and patterns across all products. Established governance model and secured executive buy-in.'
      }
    ],
    careerAspirations: [
      'Become VP of Design within 2-3 years',
      'Eventually move into a Chief Design Officer role',
      'Establish design as a strategic function within the organization'
    ],
    interests: [
      'Design leadership',
      'Organizational design',
      'Design ethics and inclusion',
      'Mentoring design leaders'
    ],
    developmentGoals: [
      'Enhance business and financial acumen',
      'Develop stronger executive presence',
      'Improve strategic influence skills'
    ],
    capacity: 40, // 40% available capacity
    location: 'Atlanta',
    licenses: [
      {
        id: 'lic301',
        name: 'Certified UX Manager',
        issuer: 'User Experience Professionals Association',
        dateObtained: new Date('2018-05-10'),
        expiryDate: new Date('2024-05-10'),
        validationStatus: true,
        category: 'Professional',
        description: 'Validates expertise in managing UX teams and processes'
      }
    ],
    assessments: [
      {
        id: 'assess301',
        date: new Date('2023-02-20'),
        type: 'self',
        assessorId: 'emp006',
        employeeId: 'emp006',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill305', // Design Operations
            previousRating: 3,
            newRating: 4,
            comments: 'Improved design operations skills through implementing new processes and tools'
          },
          {
            skillId: 'skill307', // Strategic Thinking
            previousRating: 4,
            newRating: 5,
            comments: 'Developed strategic thinking through executive leadership program'
          }
        ],
        overallComments: 'I have made significant progress in strategic thinking and design operations',
        developmentSuggestions: [
          'Continue to develop business and financial acumen',
          'Seek opportunities to influence at the executive level'
        ]
      },
      {
        id: 'assess302',
        date: new Date('2023-02-25'),
        type: 'manager',
        assessorId: 'emp015', // Executive
        employeeId: 'emp006',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill306', // Leadership
            previousRating: 4,
            newRating: 5,
            comments: 'Marcus has demonstrated exceptional leadership in transforming our design organization'
          },
          {
            skillId: 'skill307', // Strategic Thinking
            previousRating: 4,
            newRating: 5,
            comments: 'Has shown remarkable growth in strategic thinking and aligning design with business goals'
          }
        ],
        overallComments: 'Marcus continues to excel as a design leader and is increasingly influential at the executive level',
        developmentSuggestions: [
          'Consider taking on more cross-functional strategic initiatives',
          'Continue developing business acumen to strengthen executive presence'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: false,
      recognitionCentral: true
    }
  }
];

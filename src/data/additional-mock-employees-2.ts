import { Employee } from '../models/employee.model';
import { Skill } from '../models/skill.model';

/**
 * Additional mock employees data with diverse profiles (part 2)
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const additionalMockEmployees2: Employee[] = [
  {
    id: 'emp007',
    name: 'Elena Rodriguez',
    email: 'elena.rodriguez@company.com',
    department: 'Marketing',
    position: 'Digital Marketing Manager',
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: true,
      recognitionCentral: true
    },
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Digital Marketing Strategy', level: 'expert', yearsOfExperience: 8 },
      { name: 'SEO/SEM', level: 'expert', yearsOfExperience: 7 },
      { name: 'Content Marketing', level: 'advanced', yearsOfExperience: 6 },
      { name: 'Marketing Analytics', level: 'advanced', yearsOfExperience: 5 },
      { name: 'Social Media Marketing', level: 'expert', yearsOfExperience: 9 },
    ],
    certifications: [
      {
        name: 'Google Analytics Certification',
        issuer: 'Google',
        dateAcquired: new Date('2019-07-15'),
      },
      {
        name: 'HubSpot Inbound Marketing Certification',
        issuer: 'HubSpot',
        dateAcquired: new Date('2020-03-10'),
      }
    ],
    education: [
      {
        institution: 'University of Texas at Austin',
        degree: 'Bachelor of Business Administration',
        fieldOfStudy: 'Marketing',
        graduationDate: new Date('2013-05-15'),
      },
      {
        institution: 'Northwestern University',
        degree: 'Master of Science',
        fieldOfStudy: 'Integrated Marketing Communications',
        graduationDate: new Date('2015-06-10'),
      }
    ],
    jobHistory: [
      {
        company: 'Digital Marketing Agency',
        position: 'Marketing Specialist',
        startDate: new Date('2015-07-01'),
        endDate: new Date('2018-03-31'),
        responsibilities: ['SEO/SEM campaigns', 'Social media management'],
      },
      {
        company: 'E-commerce Retailer',
        position: 'Senior Digital Marketing Specialist',
        startDate: new Date('2018-04-15'),
        endDate: new Date('2020-12-31'),
        responsibilities: ['Marketing strategy', 'Performance analysis'],
      },
      {
        company: 'Current Company',
        position: 'Digital Marketing Manager',
        startDate: new Date('2021-01-15'),
        responsibilities: ['Team leadership', 'Marketing strategy', 'Budget management'],
      }
    ],
    preferences: {
      jobType: ['Marketing Director', 'Head of Digital'],
      location: ['Austin', 'Miami', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-09-05'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill401', name: 'Digital Marketing Strategy', category: 'hard', proficiency: 5, validatedBy: ['emp003'], lastValidated: new Date('2023-08-15') },
      { id: 'skill402', name: 'SEO/SEM', category: 'hard', proficiency: 5, validatedBy: ['emp003', 'emp010'], lastValidated: new Date('2023-07-20') },
      { id: 'skill403', name: 'Content Marketing', category: 'hard', proficiency: 4, validatedBy: ['emp003', 'emp010'], lastValidated: new Date('2023-08-05') },
      { id: 'skill404', name: 'Marketing Analytics', category: 'hard', proficiency: 4, validatedBy: ['emp002', 'emp010'], lastValidated: new Date('2023-07-10') },
      { id: 'skill405', name: 'Social Media Marketing', category: 'hard', proficiency: 5, validatedBy: ['emp003', 'emp010'], lastValidated: new Date('2023-08-20') }
    ],
    softSkills: [
      { id: 'skill406', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: ['emp003', 'emp010'], lastValidated: new Date('2023-08-25') },
      { id: 'skill407', name: 'Creativity', category: 'soft', proficiency: 4, validatedBy: ['emp003', 'emp004', 'emp010'], lastValidated: new Date('2023-07-15') },
      { id: 'skill408', name: 'Leadership', category: 'soft', proficiency: 4, validatedBy: ['emp010'], lastValidated: new Date('2023-08-10') },
      { id: 'skill409', name: 'Strategic Thinking', category: 'soft', proficiency: 4, validatedBy: ['emp003', 'emp010'], lastValidated: new Date('2023-07-25') }
    ],
    pastExperience: [
      { 
        id: 'exp401', 
        employeeId: 'emp007', 
        projectName: 'Product Launch Campaign',
        role: 'Campaign Manager',
        duration: { start: new Date('2021-05-01'), end: new Date('2021-08-15') },
        skillsUtilized: ['skill401', 'skill402', 'skill403', 'skill405', 'skill407'],
        outcomes: [
          'Exceeded lead generation targets by 45%',
          'Achieved 200% ROI on marketing spend',
          'Increased social media engagement by 80%'
        ],
        department: 'Marketing',
        teamSize: 6,
        description: 'Led a comprehensive digital marketing campaign for a major product launch, including content strategy, paid advertising, and social media campaigns. Coordinated with product and sales teams for integrated messaging.'
      },
      {
        id: 'exp402',
        employeeId: 'emp007', 
        projectName: 'Marketing Analytics Platform Implementation',
        role: 'Project Lead',
        duration: { start: new Date('2022-01-10'), end: new Date('2022-04-30') },
        skillsUtilized: ['skill401', 'skill404', 'skill406', 'skill408', 'skill409'],
        outcomes: [
          'Improved marketing attribution accuracy by 60%',
          'Reduced reporting time by 75%',
          'Enabled data-driven decision making across marketing channels'
        ],
        department: 'Marketing',
        teamSize: 4,
        description: 'Led the implementation of a comprehensive marketing analytics platform that integrated data from multiple channels and provided actionable insights for campaign optimization.'
      }
    ],
    careerAspirations: [
      'Become a Marketing Director within 2-3 years',
      'Lead digital transformation initiatives',
      'Develop expertise in emerging marketing technologies'
    ],
    interests: [
      'Marketing technology',
      'Consumer behavior psychology',
      'Digital transformation',
      'Personalization strategies'
    ],
    developmentGoals: [
      'Enhance leadership and team management skills',
      'Develop stronger data science capabilities',
      'Improve strategic business acumen'
    ],
    capacity: 75, // 75% available capacity
    location: 'Austin',
    licenses: [
      {
        id: 'lic401',
        name: 'Google Analytics Individual Qualification',
        issuer: 'Google',
        dateObtained: new Date('2019-07-15'),
        expiryDate: new Date('2023-07-15'),
        validationStatus: true,
        category: 'Technical',
        description: 'Validates proficiency in Google Analytics'
      },
      {
        id: 'lic402',
        name: 'HubSpot Inbound Marketing Certification',
        issuer: 'HubSpot',
        dateObtained: new Date('2020-03-10'),
        expiryDate: new Date('2024-03-10'),
        validationStatus: true,
        category: 'Professional',
        description: 'Validates expertise in inbound marketing methodologies'
      }
    ],
    assessments: [
      {
        id: 'assess401',
        date: new Date('2023-03-10'),
        type: 'self',
        assessorId: 'emp007',
        employeeId: 'emp007',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill404', // Marketing Analytics
            previousRating: 3,
            newRating: 4,
            comments: 'Improved analytics skills through the analytics platform implementation project'
          },
          {
            skillId: 'skill408', // Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Developed leadership skills by managing cross-functional teams'
          }
        ],
        overallComments: 'I have made significant progress in analytics and leadership capabilities',
        developmentSuggestions: [
          'Continue developing data science skills',
          'Seek opportunities to lead larger strategic initiatives'
        ]
      },
      {
        id: 'assess402',
        date: new Date('2023-03-15'),
        type: 'manager',
        assessorId: 'emp010', // Manager
        employeeId: 'emp007',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill401', // Digital Marketing Strategy
            previousRating: 4,
            newRating: 5,
            comments: 'Elena has demonstrated exceptional strategic thinking in campaign development'
          },
          {
            skillId: 'skill408', // Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Has shown significant growth in leading teams and managing complex projects'
          }
        ],
        overallComments: 'Elena continues to excel in strategic marketing and is developing well as a leader',
        developmentSuggestions: [
          'Consider taking on more cross-functional strategic initiatives',
          'Continue developing business acumen to prepare for director-level roles'
        ]
      }
    ]
  },
  
  {
    id: 'emp008',
    name: 'Raj Kumar',
    email: 'raj.kumar@company.com',
    department: 'Engineering',
    position: 'Engineering Manager',
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: true,
      recognitionCentral: true
    },
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Software Architecture', level: 'expert', yearsOfExperience: 12 },
      { name: 'Java', level: 'expert', yearsOfExperience: 15 },
      { name: 'Microservices', level: 'expert', yearsOfExperience: 8 },
      { name: 'Team Leadership', level: 'expert', yearsOfExperience: 7 },
      { name: 'Agile Methodologies', level: 'expert', yearsOfExperience: 10 },
    ],
    certifications: [
      {
        name: 'AWS Solutions Architect Professional',
        issuer: 'Amazon Web Services',
        dateAcquired: new Date('2019-11-20'),
      },
      {
        name: 'Certified Scrum Master',
        issuer: 'Scrum Alliance',
        dateAcquired: new Date('2017-05-15'),
      }
    ],
    education: [
      {
        institution: 'Indian Institute of Technology, Delhi',
        degree: 'Bachelor of Technology',
        fieldOfStudy: 'Computer Science',
        graduationDate: new Date('2006-05-30'),
      },
      {
        institution: 'Stanford University',
        degree: 'Master of Science',
        fieldOfStudy: 'Computer Science',
        graduationDate: new Date('2008-06-15'),
      }
    ],
    jobHistory: [
      {
        company: 'Global Tech Solutions',
        position: 'Software Engineer',
        startDate: new Date('2008-07-01'),
        endDate: new Date('2012-03-31'),
        responsibilities: ['Backend development', 'System design'],
      },
      {
        company: 'Enterprise Software Inc.',
        position: 'Senior Software Engineer',
        startDate: new Date('2012-04-15'),
        endDate: new Date('2016-12-31'),
        responsibilities: ['Technical leadership', 'Architecture design'],
      },
      {
        company: 'Current Company',
        position: 'Engineering Manager',
        startDate: new Date('2017-01-15'),
        responsibilities: ['Team leadership', 'Technical strategy', 'Performance management'],
      }
    ],
    preferences: {
      jobType: ['Director of Engineering', 'VP of Engineering'],
      location: ['San Francisco', 'Seattle', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-10-10'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill501', name: 'Software Architecture', category: 'hard', proficiency: 5, validatedBy: ['emp001', 'emp002'], lastValidated: new Date('2023-09-15') },
      { id: 'skill502', name: 'Java', category: 'hard', proficiency: 5, validatedBy: ['emp001'], lastValidated: new Date('2023-08-20') },
      { id: 'skill503', name: 'Microservices', category: 'hard', proficiency: 5, validatedBy: ['emp001', 'emp002'], lastValidated: new Date('2023-07-25') },
      { id: 'skill504', name: 'Cloud Architecture', category: 'hard', proficiency: 4, validatedBy: ['emp001', 'emp002'], lastValidated: new Date('2023-09-05') },
      { id: 'skill505', name: 'DevOps Practices', category: 'hard', proficiency: 4, validatedBy: ['emp001'], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill506', name: 'Leadership', category: 'soft', proficiency: 5, validatedBy: ['emp001', 'emp002', 'emp015'], lastValidated: new Date('2023-09-20') },
      { id: 'skill507', name: 'Mentoring', category: 'soft', proficiency: 5, validatedBy: ['emp001', 'emp002'], lastValidated: new Date('2023-08-25') },
      { id: 'skill508', name: 'Strategic Thinking', category: 'soft', proficiency: 4, validatedBy: ['emp015'], lastValidated: new Date('2023-07-15') },
      { id: 'skill509', name: 'Communication', category: 'soft', proficiency: 4, validatedBy: ['emp001', 'emp002', 'emp015'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp501', 
        employeeId: 'emp008', 
        projectName: 'Microservices Migration',
        role: 'Technical Lead',
        duration: { start: new Date('2019-03-01'), end: new Date('2020-02-28') },
        skillsUtilized: ['skill501', 'skill503', 'skill504', 'skill506', 'skill509'],
        outcomes: [
          'Successfully migrated 80% of monolithic application to microservices',
          'Reduced deployment time from days to hours',
          'Improved system reliability by 40%'
        ],
        department: 'Engineering',
        teamSize: 15,
        description: 'Led a team in migrating a critical monolithic application to a microservices architecture. Designed the architecture, established DevOps practices, and mentored team members on microservices best practices.'
      },
      {
        id: 'exp502',
        employeeId: 'emp008', 
        projectName: 'Engineering Excellence Program',
        role: 'Program Lead',
        duration: { start: new Date('2021-01-10'), end: new Date('2021-09-30') },
        skillsUtilized: ['skill505', 'skill506', 'skill507', 'skill508', 'skill509'],
        outcomes: [
          'Reduced technical debt by 35%',
          'Improved code quality metrics across all teams',
          'Established engineering best practices and standards'
        ],
        department: 'Engineering',
        teamSize: 8,
        description: 'Established and led an engineering excellence program focused on improving code quality, reducing technical debt, and establishing engineering best practices across the organization.'
      }
    ],
    careerAspirations: [
      'Become a Director of Engineering within 1-2 years',
      'Eventually move into a VP of Engineering role',
      'Lead technical transformation initiatives'
    ],
    interests: [
      'Distributed systems',
      'Engineering leadership',
      'Technical strategy',
      'Mentoring and talent development'
    ],
    developmentGoals: [
      'Enhance executive communication skills',
      'Develop stronger business acumen',
      'Improve strategic planning capabilities'
    ],
    capacity: 30, // 30% available capacity
    location: 'San Francisco',
    licenses: [
      {
        id: 'lic501',
        name: 'AWS Solutions Architect Professional',
        issuer: 'Amazon Web Services',
        dateObtained: new Date('2019-11-20'),
        expiryDate: new Date('2022-11-20'),
        validationStatus: true,
        category: 'Technical',
        description: 'Validates expertise in designing distributed systems on AWS'
      },
      {
        id: 'lic502',
        name: 'Certified Scrum Master',
        issuer: 'Scrum Alliance',
        dateObtained: new Date('2017-05-15'),
        expiryDate: new Date('2023-05-15'),
        validationStatus: true,
        category: 'Professional',
        description: 'Validates knowledge of Scrum framework and ability to facilitate Scrum processes'
      }
    ],
    assessments: [
      {
        id: 'assess501',
        date: new Date('2023-02-15'),
        type: 'self',
        assessorId: 'emp008',
        employeeId: 'emp008',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill504', // Cloud Architecture
            previousRating: 3,
            newRating: 4,
            comments: 'Improved cloud architecture skills through recent cloud migration projects'
          },
          {
            skillId: 'skill508', // Strategic Thinking
            previousRating: 3,
            newRating: 4,
            comments: 'Developed strategic thinking through executive leadership program'
          }
        ],
        overallComments: 'I have made good progress in cloud architecture and strategic thinking',
        developmentSuggestions: [
          'Continue to develop business acumen',
          'Seek opportunities to lead cross-organizational initiatives'
        ]
      },
      {
        id: 'assess502',
        date: new Date('2023-02-20'),
        type: 'manager',
        assessorId: 'emp015', // Executive
        employeeId: 'emp008',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill506', // Leadership
            previousRating: 4,
            newRating: 5,
            comments: 'Raj has demonstrated exceptional leadership in managing engineering teams and initiatives'
          },
          {
            skillId: 'skill508', // Strategic Thinking
            previousRating: 3,
            newRating: 4,
            comments: 'Has shown significant growth in strategic thinking and aligning technical initiatives with business goals'
          }
        ],
        overallComments: 'Raj continues to excel as an engineering leader and is developing well in strategic areas',
        developmentSuggestions: [
          'Consider taking on more cross-functional strategic initiatives',
          'Continue developing executive communication skills'
        ]
      }
    ]
  },
  
  {
    id: 'emp009',
    name: 'Olivia Kim',
    email: 'olivia.kim@company.com',
    department: 'Finance',
    position: 'Financial Analyst',
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: true,
      recognitionCentral: true
    },
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Financial Analysis', level: 'advanced', yearsOfExperience: 4 },
      { name: 'Excel', level: 'expert', yearsOfExperience: 6 },
      { name: 'SQL', level: 'intermediate', yearsOfExperience: 3 },
      { name: 'Financial Modeling', level: 'advanced', yearsOfExperience: 4 },
      { name: 'Data Visualization', level: 'intermediate', yearsOfExperience: 2 },
    ],
    certifications: [
      {
        name: 'Chartered Financial Analyst (CFA) Level 1',
        issuer: 'CFA Institute',
        dateAcquired: new Date('2021-06-15'),
      }
    ],
    education: [
      {
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Business Administration',
        graduationDate: new Date('2018-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Investment Firm',
        position: 'Junior Analyst',
        startDate: new Date('2018-06-15'),
        endDate: new Date('2020-08-31'),
        responsibilities: ['Financial research', 'Data analysis'],
      },
      {
        company: 'Current Company',
        position: 'Financial Analyst',
        startDate: new Date('2020-09-15'),
        responsibilities: ['Financial reporting', 'Budget analysis', 'Forecasting'],
      }
    ],
    preferences: {
      jobType: ['Senior Financial Analyst', 'Finance Manager'],
      location: ['San Francisco', 'Los Angeles', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-09-25'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill601', name: 'Financial Analysis', category: 'hard', proficiency: 4, validatedBy: ['emp012'], lastValidated: new Date('2023-08-15') },
      { id: 'skill602', name: 'Excel', category: 'hard', proficiency: 5, validatedBy: ['emp012'], lastValidated: new Date('2023-09-10') },
      { id: 'skill603', name: 'SQL', category: 'hard', proficiency: 3, validatedBy: ['emp002', 'emp012'], lastValidated: new Date('2023-07-20') },
      { id: 'skill604', name: 'Financial Modeling', category: 'hard', proficiency: 4, validatedBy: ['emp012'], lastValidated: new Date('2023-08-05') },
      { id: 'skill605', name: 'Data Visualization', category: 'hard', proficiency: 3, validatedBy: ['emp002', 'emp012'], lastValidated: new Date('2023-09-05') }
    ],
    softSkills: [
      { id: 'skill606', name: 'Analytical Thinking', category: 'soft', proficiency: 5, validatedBy: ['emp012'], lastValidated: new Date('2023-08-20') },
      { id: 'skill607', name: 'Attention to Detail', category: 'soft', proficiency: 5, validatedBy: ['emp012'], lastValidated: new Date('2023-09-15') },
      { id: 'skill608', name: 'Communication', category: 'soft', proficiency: 3, validatedBy: ['emp012'], lastValidated: new Date('2023-07-25') },
      { id: 'skill609', name: 'Problem Solving', category: 'soft', proficiency: 4, validatedBy: ['emp012'], lastValidated: new Date('2023-08-10') }
    ],
    pastExperience: [
      { 
        id: 'exp601', 
        employeeId: 'emp009', 
        projectName: 'Annual Budget Planning',
        role: 'Financial Analyst',
        duration: { start: new Date('2021-09-01'), end: new Date('2021-12-15') },
        skillsUtilized: ['skill601', 'skill602', 'skill604', 'skill606', 'skill607'],
        outcomes: [
          'Developed comprehensive budget models for 5 departments',
          'Identified cost-saving opportunities of $1.2M',
          'Improved budget accuracy by 15%'
        ],
        department: 'Finance',
        teamSize: 4,
        description: 'Supported the annual budget planning process by developing financial models, analyzing historical data, and working with department heads to forecast future needs.'
      },
      {
        id: 'exp602',
        employeeId: 'emp009', 
        projectName: 'Financial Reporting Automation',
        role: 'Project Lead',
        duration: { start: new Date('2022-03-01'), end: new Date('2022-05-30') },
        skillsUtilized: ['skill602', 'skill603', 'skill605', 'skill606', 'skill609'],
        outcomes: [
          'Reduced monthly reporting time by 60%',
          'Eliminated manual errors in financial reports',
          'Improved data consistency across reports'
        ],
        department: 'Finance',
        teamSize: 3,
        description: 'Led a project to automate financial reporting processes using SQL and Excel macros, significantly reducing manual effort and improving accuracy.'
      }
    ],
    careerAspirations: [
      'Become a Senior Financial Analyst within 1-2 years',
      'Eventually move into a Finance Manager role',
      'Complete all CFA levels'
    ],
    interests: [
      'Financial technology',
      'Data analytics in finance',
      'Investment analysis',
      'Corporate financial planning'
    ],
    developmentGoals: [
      'Improve SQL and data analysis skills',
      'Develop presentation and communication skills',
      'Complete CFA Level 2'
    ],
    capacity: 90, // 90% available capacity
    location: 'San Francisco',
    licenses: [
      {
        id: 'lic601',
        name: 'Chartered Financial Analyst (CFA) Level 1',
        issuer: 'CFA Institute',
        dateObtained: new Date('2021-06-15'),
        expiryDate: undefined,
        validationStatus: true,
        category: 'Professional',
        description: 'First level of the CFA program, covering investment tools, ethics, and professional standards'
      }
    ],
    assessments: [
      {
        id: 'assess601',
        date: new Date('2023-03-05'),
        type: 'self',
        assessorId: 'emp009',
        employeeId: 'emp009',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill603', // SQL
            previousRating: 2,
            newRating: 3,
            comments: 'Improved SQL skills through online courses and reporting automation project'
          },
          {
            skillId: 'skill608', // Communication
            previousRating: 2,
            newRating: 3,
            comments: 'Worked on communication skills by presenting financial analyses to stakeholders'
          }
        ],
        overallComments: 'I have made progress in technical and communication skills',
        developmentSuggestions: [
          'Continue developing SQL and data analysis skills',
          'Seek more opportunities to present to senior leadership'
        ]
      },
      {
        id: 'assess602',
        date: new Date('2023-03-10'),
        type: 'manager',
        assessorId: 'emp012', // Manager
        employeeId: 'emp009',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill601', // Financial Analysis
            previousRating: 3,
            newRating: 4,
            comments: 'Olivia has demonstrated strong growth in financial analysis capabilities'
          },
          {
            skillId: 'skill608', // Communication
            previousRating: 2,
            newRating: 3,
            comments: 'Has shown improvement in communicating financial insights to non-financial stakeholders'
          }
        ],
        overallComments: 'Olivia continues to develop well in both technical and soft skills',
        developmentSuggestions: [
          'Consider taking on more complex financial modeling projects',
          'Continue developing communication skills for senior leadership presentations'
        ]
      }
    ]
  }
];

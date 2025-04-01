import { Employee } from '../models/employee.model';
import { Skill } from '../models/skill.model';

/**
 * Additional mock employees data with diverse profiles (part 4)
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const additionalMockEmployees4: Employee[] = [
  {
    id: 'emp012',
    name: 'Sophia Chen',
    email: 'sophia.chen@company.com',
    department: 'Finance',
    position: 'Finance Manager',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Financial Planning', level: 'expert', yearsOfExperience: 9 },
      { name: 'Financial Analysis', level: 'expert', yearsOfExperience: 10 },
      { name: 'Team Leadership', level: 'advanced', yearsOfExperience: 5 },
      { name: 'Budgeting', level: 'expert', yearsOfExperience: 8 },
      { name: 'Financial Reporting', level: 'expert', yearsOfExperience: 7 },
    ],
    certifications: [
      {
        name: 'Certified Public Accountant (CPA)',
        issuer: 'American Institute of CPAs',
        dateAcquired: new Date('2015-11-10'),
      },
      {
        name: 'Chartered Financial Analyst (CFA) Level 2',
        issuer: 'CFA Institute',
        dateAcquired: new Date('2018-06-15'),
      }
    ],
    education: [
      {
        institution: 'University of Pennsylvania',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Finance',
        graduationDate: new Date('2011-05-15'),
      },
      {
        institution: 'New York University',
        degree: 'Master of Business Administration',
        fieldOfStudy: 'Finance',
        graduationDate: new Date('2014-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Financial Services Firm',
        position: 'Financial Analyst',
        startDate: new Date('2014-06-15'),
        endDate: new Date('2017-08-31'),
        responsibilities: ['Financial analysis', 'Reporting'],
      },
      {
        company: 'Tech Corporation',
        position: 'Senior Financial Analyst',
        startDate: new Date('2017-09-15'),
        endDate: new Date('2020-02-28'),
        responsibilities: ['Financial planning', 'Budget management'],
      },
      {
        company: 'Current Company',
        position: 'Finance Manager',
        startDate: new Date('2020-03-15'),
        responsibilities: ['Team leadership', 'Financial strategy', 'Reporting'],
      }
    ],
    preferences: {
      jobType: ['Finance Director', 'Controller'],
      location: ['New York', 'Boston', 'Remote'],
      remote: true,
      willingToRelocate: false,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-10-20'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill901', name: 'Financial Planning', category: 'hard', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-09-15') },
      { id: 'skill902', name: 'Financial Analysis', category: 'hard', proficiency: 5, validatedBy: ['emp009', 'emp015'], lastValidated: new Date('2023-08-20') },
      { id: 'skill903', name: 'Budgeting', category: 'hard', proficiency: 5, validatedBy: ['emp009', 'emp015'], lastValidated: new Date('2023-07-25') },
      { id: 'skill904', name: 'Financial Reporting', category: 'hard', proficiency: 5, validatedBy: ['emp009'], lastValidated: new Date('2023-09-05') },
      { id: 'skill905', name: 'Financial Modeling', category: 'hard', proficiency: 4, validatedBy: ['emp009'], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill906', name: 'Leadership', category: 'soft', proficiency: 4, validatedBy: ['emp009', 'emp015'], lastValidated: new Date('2023-09-20') },
      { id: 'skill907', name: 'Analytical Thinking', category: 'soft', proficiency: 5, validatedBy: ['emp009', 'emp015'], lastValidated: new Date('2023-08-25') },
      { id: 'skill908', name: 'Communication', category: 'soft', proficiency: 4, validatedBy: ['emp009'], lastValidated: new Date('2023-07-15') },
      { id: 'skill909', name: 'Attention to Detail', category: 'soft', proficiency: 5, validatedBy: ['emp009', 'emp015'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp901', 
        employeeId: 'emp012', 
        projectName: 'Financial Planning Process Redesign',
        role: 'Project Lead',
        duration: { start: new Date('2020-06-01'), end: new Date('2020-12-15') },
        skillsUtilized: ['skill901', 'skill903', 'skill906', 'skill907', 'skill908'],
        outcomes: [
          'Reduced financial planning cycle time by 40%',
          'Improved forecast accuracy by 25%',
          'Implemented rolling forecast methodology'
        ],
        department: 'Finance',
        teamSize: 5,
        description: 'Led a project to redesign the company\'s financial planning process, implementing a rolling forecast methodology and improving integration with business units.'
      },
      {
        id: 'exp902',
        employeeId: 'emp012', 
        projectName: 'Finance Team Development',
        role: 'Finance Manager',
        duration: { start: new Date('2021-02-01'), end: new Date('2021-08-30') },
        skillsUtilized: ['skill902', 'skill904', 'skill906', 'skill908', 'skill909'],
        outcomes: [
          'Improved team productivity by 30%',
          'Developed standardized reporting templates',
          'Implemented cross-training program for finance team'
        ],
        department: 'Finance',
        teamSize: 8,
        description: 'Developed and implemented a comprehensive training and development program for the finance team, focusing on analytical skills, reporting standards, and cross-functional knowledge.'
      }
    ],
    careerAspirations: [
      'Become a Finance Director within 2-3 years',
      'Eventually move into a CFO role',
      'Lead financial transformation initiatives'
    ],
    interests: [
      'Financial technology',
      'Data-driven financial planning',
      'Financial leadership',
      'Process optimization'
    ],
    developmentGoals: [
      'Enhance strategic thinking capabilities',
      'Develop stronger leadership skills',
      'Complete CFA Level 3'
    ],
    capacity: 35, // 35% available capacity
    location: 'New York',
    licenses: [
      {
        id: 'lic901',
        name: 'Certified Public Accountant (CPA)',
        issuer: 'American Institute of CPAs',
        dateObtained: new Date('2015-11-10'),
        expiryDate: undefined,
        validationStatus: true,
        category: 'Professional',
        description: 'Professional designation for accountants'
      },
      {
        id: 'lic902',
        name: 'Chartered Financial Analyst (CFA) Level 2',
        issuer: 'CFA Institute',
        dateObtained: new Date('2018-06-15'),
        expiryDate: undefined,
        validationStatus: true,
        category: 'Professional',
        description: 'Second level of the CFA program, covering asset valuation and portfolio management'
      }
    ],
    assessments: [
      {
        id: 'assess901',
        date: new Date('2023-02-20'),
        type: 'self',
        assessorId: 'emp012',
        employeeId: 'emp012',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill905', // Financial Modeling
            previousRating: 3,
            newRating: 4,
            comments: 'Improved financial modeling skills through advanced Excel and financial modeling courses'
          },
          {
            skillId: 'skill906', // Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Developed leadership skills through managing larger team and projects'
          }
        ],
        overallComments: 'I have made good progress in financial modeling and leadership',
        developmentSuggestions: [
          'Continue to develop strategic thinking capabilities',
          'Seek opportunities to lead cross-functional initiatives'
        ]
      },
      {
        id: 'assess902',
        date: new Date('2023-02-25'),
        type: 'manager',
        assessorId: 'emp015', // Executive
        employeeId: 'emp012',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill901', // Financial Planning
            previousRating: 4,
            newRating: 5,
            comments: 'Sophia has demonstrated exceptional financial planning capabilities'
          },
          {
            skillId: 'skill906', // Leadership
            previousRating: 3,
            newRating: 4,
            comments: 'Has shown significant growth in leading the finance team'
          }
        ],
        overallComments: 'Sophia continues to excel in technical finance areas and is developing well as a leader',
        developmentSuggestions: [
          'Consider taking on more strategic finance initiatives',
          'Continue developing leadership capabilities'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: true,
      degreed: false,
      recognitionCentral: false
    }
  },
  
  {
    id: 'emp013',
    name: 'Robert Martinez',
    email: 'robert.martinez@company.com',
    department: 'Sales',
    position: 'Sales Director',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Sales Leadership', level: 'expert', yearsOfExperience: 10 },
      { name: 'Strategic Planning', level: 'expert', yearsOfExperience: 8 },
      { name: 'Team Management', level: 'expert', yearsOfExperience: 9 },
      { name: 'Client Relationship Management', level: 'expert', yearsOfExperience: 12 },
      { name: 'Sales Operations', level: 'advanced', yearsOfExperience: 7 },
    ],
    certifications: [
      {
        name: 'Strategic Selling Certification',
        issuer: 'Miller Heiman Group',
        dateAcquired: new Date('2017-04-15'),
      }
    ],
    education: [
      {
        institution: 'University of Texas at Austin',
        degree: 'Bachelor of Business Administration',
        fieldOfStudy: 'Marketing',
        graduationDate: new Date('2008-05-15'),
      },
      {
        institution: 'Southern Methodist University',
        degree: 'Master of Business Administration',
        fieldOfStudy: 'Business Administration',
        graduationDate: new Date('2012-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Technology Solutions Inc.',
        position: 'Sales Manager',
        startDate: new Date('2012-06-15'),
        endDate: new Date('2016-09-30'),
        responsibilities: ['Team leadership', 'Sales strategy'],
      },
      {
        company: 'Enterprise Software Co.',
        position: 'Regional Sales Manager',
        startDate: new Date('2016-10-15'),
        endDate: new Date('2019-12-31'),
        responsibilities: ['Regional strategy', 'Team development'],
      },
      {
        company: 'Current Company',
        position: 'Sales Director',
        startDate: new Date('2020-01-15'),
        responsibilities: ['Sales organization leadership', 'Strategic planning', 'Revenue growth'],
      }
    ],
    preferences: {
      jobType: ['VP of Sales', 'Chief Revenue Officer'],
      location: ['Dallas', 'Austin', 'Remote'],
      remote: true,
      willingToRelocate: false,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-09-30'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill1001', name: 'Sales Leadership', category: 'hard', proficiency: 5, validatedBy: ['emp011', 'emp015'], lastValidated: new Date('2023-09-15') },
      { id: 'skill1002', name: 'Strategic Planning', category: 'hard', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-08-20') },
      { id: 'skill1003', name: 'Team Management', category: 'hard', proficiency: 5, validatedBy: ['emp011', 'emp015'], lastValidated: new Date('2023-07-25') },
      { id: 'skill1004', name: 'Client Relationship Management', category: 'hard', proficiency: 5, validatedBy: ['emp011'], lastValidated: new Date('2023-09-05') },
      { id: 'skill1005', name: 'Sales Operations', category: 'hard', proficiency: 4, validatedBy: ['emp011'], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill1006', name: 'Leadership', category: 'soft', proficiency: 5, validatedBy: ['emp011', 'emp015'], lastValidated: new Date('2023-09-20') },
      { id: 'skill1007', name: 'Strategic Thinking', category: 'soft', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-08-25') },
      { id: 'skill1008', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: ['emp011', 'emp015'], lastValidated: new Date('2023-07-15') },
      { id: 'skill1009', name: 'Coaching', category: 'soft', proficiency: 5, validatedBy: ['emp011'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp1001', 
        employeeId: 'emp013', 
        projectName: 'Sales Organization Restructuring',
        role: 'Executive Lead',
        duration: { start: new Date('2020-04-01'), end: new Date('2020-09-30') },
        skillsUtilized: ['skill1001', 'skill1002', 'skill1003', 'skill1006', 'skill1007'],
        outcomes: [
          'Increased sales productivity by 35%',
          'Reduced sales cycle by 20%',
          'Improved win rates by 15%'
        ],
        department: 'Sales',
        teamSize: 12,
        description: 'Led a comprehensive restructuring of the sales organization to align with market segments and improve efficiency. Implemented new sales methodologies and performance metrics.'
      },
      {
        id: 'exp1002',
        employeeId: 'emp013', 
        projectName: 'Sales Enablement Program',
        role: 'Program Sponsor',
        duration: { start: new Date('2021-02-01'), end: new Date('2021-07-31') },
        skillsUtilized: ['skill1001', 'skill1003', 'skill1005', 'skill1006', 'skill1009'],
        outcomes: [
          'Improved sales onboarding time by 50%',
          'Increased average deal size by 25%',
          'Established consistent sales methodology across teams'
        ],
        department: 'Sales',
        teamSize: 8,
        description: 'Sponsored and guided the development of a comprehensive sales enablement program that included training, tools, and content to improve sales effectiveness.'
      }
    ],
    careerAspirations: [
      'Become a VP of Sales within 1-2 years',
      'Eventually move into a Chief Revenue Officer role',
      'Lead sales transformation initiatives'
    ],
    interests: [
      'Sales leadership',
      'Sales technology and automation',
      'Revenue operations',
      'Sales methodology innovation'
    ],
    developmentGoals: [
      'Enhance understanding of marketing and customer success',
      'Develop stronger financial acumen',
      'Improve executive presence'
    ],
    capacity: 20, // 20% available capacity
    location: 'Dallas',
    licenses: [
      {
        id: 'lic1001',
        name: 'Strategic Selling Certification',
        issuer: 'Miller Heiman Group',
        dateObtained: new Date('2017-04-15'),
        expiryDate: undefined,
        validationStatus: true,
        category: 'Professional',
        description: 'Validates expertise in strategic selling methodologies'
      }
    ],
    assessments: [
      {
        id: 'assess1001',
        date: new Date('2023-02-05'),
        type: 'self',
        assessorId: 'emp013',
        employeeId: 'emp013',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill1005', // Sales Operations
            previousRating: 3,
            newRating: 4,
            comments: 'Improved sales operations knowledge through implementing new CRM and sales analytics tools'
          },
          {
            skillId: 'skill1007', // Strategic Thinking
            previousRating: 4,
            newRating: 5,
            comments: 'Developed strategic thinking through executive leadership program'
          }
        ],
        overallComments: 'I have made significant progress in sales operations and strategic thinking',
        developmentSuggestions: [
          'Continue developing financial acumen',
          'Seek opportunities to collaborate with marketing and customer success'
        ]
      },
      {
        id: 'assess1002',
        date: new Date('2023-02-10'),
        type: 'manager',
        assessorId: 'emp015', // Executive
        employeeId: 'emp013',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill1001', // Sales Leadership
            previousRating: 4,
            newRating: 5,
            comments: 'Robert has demonstrated exceptional sales leadership capabilities'
          },
          {
            skillId: 'skill1006', // Leadership
            previousRating: 4,
            newRating: 5,
            comments: 'Has shown remarkable leadership in managing the sales organization'
          }
        ],
        overallComments: 'Robert continues to excel as a sales leader and is increasingly influential at the executive level',
        developmentSuggestions: [
          'Consider taking on more cross-functional strategic initiatives',
          'Continue developing financial acumen to strengthen executive presence'
        ]
      }
    ],
    dataSources: {
      workday: true,
      fuel50: true,
      linkedin: true,
      sumTotal: false,
      degreed: false,
      recognitionCentral: true
    }
  }
];

import { Employee } from '../models/employee.model';
import { Skill } from '../models/skill.model';

/**
 * Additional mock employees data with diverse profiles (part 3)
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const additionalMockEmployees3: Employee[] = [
  {
    id: 'emp010',
    name: 'Thomas Wilson',
    email: 'thomas.wilson@company.com',
    department: 'Marketing',
    position: 'Marketing Director',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Marketing Strategy', level: 'expert', yearsOfExperience: 12 },
      { name: 'Brand Management', level: 'expert', yearsOfExperience: 10 },
      { name: 'Team Leadership', level: 'expert', yearsOfExperience: 8 },
      { name: 'Budget Management', level: 'expert', yearsOfExperience: 9 },
      { name: 'Market Research', level: 'advanced', yearsOfExperience: 7 },
    ],
    certifications: [
      {
        name: 'Professional Certified Marketer',
        issuer: 'American Marketing Association',
        dateAcquired: new Date('2018-09-15'),
      }
    ],
    education: [
      {
        institution: 'Duke University',
        degree: 'Bachelor of Arts',
        fieldOfStudy: 'Marketing',
        graduationDate: new Date('2008-05-15'),
      },
      {
        institution: 'Wharton School of Business',
        degree: 'Master of Business Administration',
        fieldOfStudy: 'Marketing',
        graduationDate: new Date('2011-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Consumer Goods Inc.',
        position: 'Marketing Manager',
        startDate: new Date('2011-06-15'),
        endDate: new Date('2016-07-31'),
        responsibilities: ['Brand strategy', 'Team leadership'],
      },
      {
        company: 'Retail Innovations',
        position: 'Senior Marketing Manager',
        startDate: new Date('2016-08-15'),
        endDate: new Date('2019-12-31'),
        responsibilities: ['Marketing strategy', 'Budget management'],
      },
      {
        company: 'Current Company',
        position: 'Marketing Director',
        startDate: new Date('2020-01-15'),
        responsibilities: ['Department leadership', 'Strategic planning', 'Executive reporting'],
      }
    ],
    preferences: {
      jobType: ['VP of Marketing', 'Chief Marketing Officer'],
      location: ['Chicago', 'New York', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-10-05'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill701', name: 'Marketing Strategy', category: 'hard', proficiency: 5, validatedBy: ['emp003', 'emp007', 'emp015'], lastValidated: new Date('2023-09-15') },
      { id: 'skill702', name: 'Brand Management', category: 'hard', proficiency: 5, validatedBy: ['emp003', 'emp007'], lastValidated: new Date('2023-08-20') },
      { id: 'skill703', name: 'Budget Management', category: 'hard', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-07-25') },
      { id: 'skill704', name: 'Market Research', category: 'hard', proficiency: 4, validatedBy: ['emp003', 'emp007'], lastValidated: new Date('2023-09-05') },
      { id: 'skill705', name: 'Marketing Analytics', category: 'hard', proficiency: 4, validatedBy: ['emp002', 'emp007'], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill706', name: 'Leadership', category: 'soft', proficiency: 5, validatedBy: ['emp003', 'emp007', 'emp015'], lastValidated: new Date('2023-09-20') },
      { id: 'skill707', name: 'Strategic Thinking', category: 'soft', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-08-25') },
      { id: 'skill708', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: ['emp003', 'emp007', 'emp015'], lastValidated: new Date('2023-07-15') },
      { id: 'skill709', name: 'Negotiation', category: 'soft', proficiency: 4, validatedBy: ['emp015'], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp701', 
        employeeId: 'emp010', 
        projectName: 'Brand Repositioning',
        role: 'Project Lead',
        duration: { start: new Date('2020-05-01'), end: new Date('2021-01-30') },
        skillsUtilized: ['skill701', 'skill702', 'skill704', 'skill707', 'skill708'],
        outcomes: [
          'Increased brand awareness by 35%',
          'Improved customer perception scores by 28%',
          'Successfully repositioned brand in premium market segment'
        ],
        department: 'Marketing',
        teamSize: 12,
        description: 'Led a comprehensive brand repositioning initiative that included market research, brand strategy development, and implementation across all channels. Coordinated with product, sales, and executive teams.'
      },
      {
        id: 'exp702',
        employeeId: 'emp010', 
        projectName: 'Marketing Department Restructuring',
        role: 'Executive Lead',
        duration: { start: new Date('2021-06-01'), end: new Date('2021-10-15') },
        skillsUtilized: ['skill701', 'skill703', 'skill706', 'skill707', 'skill709'],
        outcomes: [
          'Improved marketing team efficiency by 40%',
          'Reduced marketing operational costs by 25%',
          'Established specialized teams aligned with business objectives'
        ],
        department: 'Marketing',
        teamSize: 8,
        description: 'Restructured the marketing department to align with evolving business needs, creating specialized teams for digital, brand, and product marketing. Developed new processes and governance models.'
      }
    ],
    careerAspirations: [
      'Become a VP of Marketing within 1-2 years',
      'Eventually move into a Chief Marketing Officer role',
      'Lead marketing transformation initiatives'
    ],
    interests: [
      'Digital transformation in marketing',
      'Brand strategy',
      'Marketing leadership',
      'Customer experience innovation'
    ],
    developmentGoals: [
      'Enhance digital marketing expertise',
      'Develop stronger financial acumen',
      'Improve executive presence'
    ],
    capacity: 25, // 25% available capacity
    location: 'Chicago',
    licenses: [
      {
        id: 'lic701',
        name: 'Professional Certified Marketer',
        issuer: 'American Marketing Association',
        dateObtained: new Date('2018-09-15'),
        expiryDate: new Date('2024-09-15'),
        validationStatus: true,
        category: 'Professional',
        description: 'Validates expertise in marketing strategy, tactics, and implementation'
      }
    ],
    assessments: [
      {
        id: 'assess701',
        date: new Date('2023-02-10'),
        type: 'self',
        assessorId: 'emp010',
        employeeId: 'emp010',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill705', // Marketing Analytics
            previousRating: 3,
            newRating: 4,
            comments: 'Improved analytics skills through executive analytics program'
          },
          {
            skillId: 'skill707', // Strategic Thinking
            previousRating: 4,
            newRating: 5,
            comments: 'Developed strategic thinking through executive leadership program'
          }
        ],
        overallComments: 'I have made significant progress in analytics and strategic thinking',
        developmentSuggestions: [
          'Continue developing digital marketing expertise',
          'Seek opportunities to enhance financial acumen'
        ]
      },
      {
        id: 'assess702',
        date: new Date('2023-02-15'),
        type: 'manager',
        assessorId: 'emp015', // Executive
        employeeId: 'emp010',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill701', // Marketing Strategy
            previousRating: 4,
            newRating: 5,
            comments: 'Thomas has demonstrated exceptional strategic thinking in marketing initiatives'
          },
          {
            skillId: 'skill706', // Leadership
            previousRating: 4,
            newRating: 5,
            comments: 'Has shown remarkable leadership in managing the marketing organization'
          }
        ],
        overallComments: 'Thomas continues to excel as a marketing leader and is increasingly influential at the executive level',
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
      sumTotal: true,
      degreed: false,
      recognitionCentral: true
    }
  },
  
  {
    id: 'emp011',
    name: 'Jamal Brown',
    email: 'jamal.brown@company.com',
    department: 'Sales',
    position: 'Senior Account Executive',
    
    // Original fields for backward compatibility
    skills: [
      { name: 'Enterprise Sales', level: 'expert', yearsOfExperience: 7 },
      { name: 'Relationship Management', level: 'expert', yearsOfExperience: 9 },
      { name: 'Negotiation', level: 'advanced', yearsOfExperience: 6 },
      { name: 'Solution Selling', level: 'expert', yearsOfExperience: 7 },
      { name: 'CRM Systems', level: 'advanced', yearsOfExperience: 5 },
    ],
    certifications: [
      {
        name: 'Certified Sales Professional',
        issuer: 'National Association of Sales Professionals',
        dateAcquired: new Date('2019-03-15'),
      }
    ],
    education: [
      {
        institution: 'University of Maryland',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Business Administration',
        graduationDate: new Date('2013-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Tech Solutions Inc.',
        position: 'Sales Representative',
        startDate: new Date('2013-06-15'),
        endDate: new Date('2016-08-31'),
        responsibilities: ['Lead generation', 'Product demonstrations'],
      },
      {
        company: 'Enterprise Software Co.',
        position: 'Account Executive',
        startDate: new Date('2016-09-15'),
        endDate: new Date('2020-03-31'),
        responsibilities: ['Client relationship management', 'Solution selling'],
      },
      {
        company: 'Current Company',
        position: 'Senior Account Executive',
        startDate: new Date('2020-04-15'),
        responsibilities: ['Enterprise client management', 'Strategic account planning', 'Team mentoring'],
      }
    ],
    preferences: {
      jobType: ['Sales Manager', 'Key Account Manager'],
      location: ['Washington DC', 'Philadelphia', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-09-10'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill801', name: 'Enterprise Sales', category: 'hard', proficiency: 5, validatedBy: ['emp013'], lastValidated: new Date('2023-08-15') },
      { id: 'skill802', name: 'Relationship Management', category: 'hard', proficiency: 5, validatedBy: ['emp013'], lastValidated: new Date('2023-09-10') },
      { id: 'skill803', name: 'Negotiation', category: 'hard', proficiency: 4, validatedBy: ['emp013'], lastValidated: new Date('2023-07-20') },
      { id: 'skill804', name: 'Solution Selling', category: 'hard', proficiency: 5, validatedBy: ['emp013'], lastValidated: new Date('2023-08-05') },
      { id: 'skill805', name: 'CRM Systems', category: 'hard', proficiency: 4, validatedBy: ['emp013'], lastValidated: new Date('2023-09-05') }
    ],
    softSkills: [
      { id: 'skill806', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: ['emp013'], lastValidated: new Date('2023-08-20') },
      { id: 'skill807', name: 'Persuasion', category: 'soft', proficiency: 5, validatedBy: ['emp013'], lastValidated: new Date('2023-09-15') },
      { id: 'skill808', name: 'Adaptability', category: 'soft', proficiency: 4, validatedBy: ['emp013'], lastValidated: new Date('2023-07-25') },
      { id: 'skill809', name: 'Problem Solving', category: 'soft', proficiency: 4, validatedBy: ['emp013'], lastValidated: new Date('2023-08-10') }
    ],
    pastExperience: [
      { 
        id: 'exp801', 
        employeeId: 'emp011', 
        projectName: 'Enterprise Client Acquisition',
        role: 'Lead Account Executive',
        duration: { start: new Date('2020-06-01'), end: new Date('2020-12-15') },
        skillsUtilized: ['skill801', 'skill802', 'skill803', 'skill804', 'skill807'],
        outcomes: [
          'Secured 3 new enterprise clients with total contract value of $4.2M',
          'Reduced sales cycle by 25%',
          'Developed new approach for enterprise client acquisition'
        ],
        department: 'Sales',
        teamSize: 4,
        description: 'Led a strategic initiative to acquire new enterprise clients in the financial services sector. Developed and implemented a new approach to enterprise sales that reduced the sales cycle and increased win rates.'
      },
      {
        id: 'exp802',
        employeeId: 'emp011', 
        projectName: 'Key Account Growth Strategy',
        role: 'Account Strategist',
        duration: { start: new Date('2021-03-01'), end: new Date('2021-09-30') },
        skillsUtilized: ['skill801', 'skill802', 'skill804', 'skill806', 'skill809'],
        outcomes: [
          'Increased account revenue by 45%',
          'Expanded product adoption across client organization',
          'Developed account growth playbook adopted by sales team'
        ],
        department: 'Sales',
        teamSize: 3,
        description: 'Developed and implemented a strategic account growth plan for key enterprise clients. Focused on expanding product adoption, identifying new opportunities, and strengthening relationships with decision-makers.'
      }
    ],
    careerAspirations: [
      'Become a Sales Manager within 1-2 years',
      'Eventually move into a Sales Director role',
      'Develop expertise in sales leadership'
    ],
    interests: [
      'Enterprise sales strategies',
      'Sales leadership',
      'Sales technology and automation',
      'Consultative selling approaches'
    ],
    developmentGoals: [
      'Enhance leadership and coaching skills',
      'Develop stronger understanding of financial aspects of sales',
      'Improve strategic account planning capabilities'
    ],
    capacity: 60, // 60% available capacity
    location: 'Washington DC',
    licenses: [
      {
        id: 'lic801',
        name: 'Certified Sales Professional',
        issuer: 'National Association of Sales Professionals',
        dateObtained: new Date('2019-03-15'),
        expiryDate: new Date('2023-03-15'),
        validationStatus: true,
        category: 'Professional',
        description: 'Validates expertise in professional selling methodologies and practices'
      }
    ],
    assessments: [
      {
        id: 'assess801',
        date: new Date('2023-03-05'),
        type: 'self',
        assessorId: 'emp011',
        employeeId: 'emp011',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill803', // Negotiation
            previousRating: 3,
            newRating: 4,
            comments: 'Improved negotiation skills through advanced training and practice'
          },
          {
            skillId: 'skill808', // Adaptability
            previousRating: 3,
            newRating: 4,
            comments: 'Developed adaptability by managing diverse client situations'
          }
        ],
        overallComments: 'I have made good progress in negotiation and adaptability',
        developmentSuggestions: [
          'Continue to develop leadership skills',
          'Seek opportunities to mentor junior sales staff'
        ]
      },
      {
        id: 'assess802',
        date: new Date('2023-03-10'),
        type: 'manager',
        assessorId: 'emp013', // Manager
        employeeId: 'emp011',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill801', // Enterprise Sales
            previousRating: 4,
            newRating: 5,
            comments: 'Jamal has demonstrated exceptional enterprise sales capabilities'
          },
          {
            skillId: 'skill802', // Relationship Management
            previousRating: 4,
            newRating: 5,
            comments: 'Has built and maintained strong relationships with key decision-makers'
          }
        ],
        overallComments: 'Jamal continues to excel in enterprise sales and is ready for more leadership responsibilities',
        developmentSuggestions: [
          'Consider taking on team leadership responsibilities',
          'Develop strategic account planning capabilities further'
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

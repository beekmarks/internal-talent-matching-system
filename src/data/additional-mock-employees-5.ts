import { Employee } from '../models/employee.model';
import { Skill } from '../models/skill.model';

/**
 * Additional mock employees data with diverse profiles (part 5)
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const additionalMockEmployees5: Employee[] = [
  {
    id: 'emp014',
    name: 'Aisha Johnson',
    email: 'aisha.johnson@company.com',
    department: 'Human Resources',
    position: 'HR Business Partner',
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
      { name: 'Employee Relations', level: 'expert', yearsOfExperience: 7 },
      { name: 'Talent Management', level: 'advanced', yearsOfExperience: 5 },
      { name: 'Performance Management', level: 'advanced', yearsOfExperience: 6 },
      { name: 'HR Policies', level: 'expert', yearsOfExperience: 7 },
      { name: 'Conflict Resolution', level: 'expert', yearsOfExperience: 8 },
    ],
    certifications: [
      {
        name: 'SHRM Senior Certified Professional',
        issuer: 'Society for Human Resource Management',
        dateAcquired: new Date('2019-05-15'),
      }
    ],
    education: [
      {
        institution: 'Howard University',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Human Resource Management',
        graduationDate: new Date('2013-05-20'),
      },
      {
        institution: 'Georgetown University',
        degree: 'Master of Science',
        fieldOfStudy: 'Human Capital Management',
        graduationDate: new Date('2016-05-15'),
      }
    ],
    jobHistory: [
      {
        company: 'Retail Corporation',
        position: 'HR Specialist',
        startDate: new Date('2016-06-15'),
        endDate: new Date('2019-03-31'),
        responsibilities: ['Employee relations', 'Policy implementation'],
      },
      {
        company: 'Healthcare Organization',
        position: 'HR Generalist',
        startDate: new Date('2019-04-15'),
        endDate: new Date('2021-02-28'),
        responsibilities: ['Talent management', 'Performance management'],
      },
      {
        company: 'Current Company',
        position: 'HR Business Partner',
        startDate: new Date('2021-03-15'),
        responsibilities: ['Strategic HR support', 'Employee development', 'Organizational design'],
      }
    ],
    preferences: {
      jobType: ['Senior HR Business Partner', 'HR Director'],
      location: ['Washington DC', 'Atlanta', 'Remote'],
      remote: true,
      willingToRelocate: true,
    },
    availableForTransfer: true,
    lastUpdated: new Date('2023-09-15'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill1101', name: 'Employee Relations', category: 'hard', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-08-15') },
      { id: 'skill1102', name: 'Talent Management', category: 'hard', proficiency: 4, validatedBy: ['emp015'], lastValidated: new Date('2023-09-10') },
      { id: 'skill1103', name: 'Performance Management', category: 'hard', proficiency: 4, validatedBy: ['emp015'], lastValidated: new Date('2023-07-20') },
      { id: 'skill1104', name: 'HR Policies', category: 'hard', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-08-05') },
      { id: 'skill1105', name: 'Conflict Resolution', category: 'hard', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-09-05') }
    ],
    softSkills: [
      { id: 'skill1106', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-08-20') },
      { id: 'skill1107', name: 'Empathy', category: 'soft', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-09-15') },
      { id: 'skill1108', name: 'Discretion', category: 'soft', proficiency: 5, validatedBy: ['emp015'], lastValidated: new Date('2023-07-25') },
      { id: 'skill1109', name: 'Problem Solving', category: 'soft', proficiency: 4, validatedBy: ['emp015'], lastValidated: new Date('2023-08-10') }
    ],
    pastExperience: [
      { 
        id: 'exp1101', 
        employeeId: 'emp014', 
        projectName: 'Performance Management Redesign',
        role: 'Project Lead',
        duration: { start: new Date('2021-05-01'), end: new Date('2021-09-30') },
        skillsUtilized: ['skill1102', 'skill1103', 'skill1106', 'skill1107', 'skill1109'],
        outcomes: [
          'Implemented new performance management system',
          'Increased employee satisfaction with performance process by 40%',
          'Improved manager capability in performance discussions'
        ],
        department: 'Human Resources',
        teamSize: 5,
        description: 'Led a project to redesign the company\'s performance management approach, moving from annual reviews to continuous feedback and development conversations.'
      },
      {
        id: 'exp1102',
        employeeId: 'emp014', 
        projectName: 'Employee Relations Program',
        role: 'Program Manager',
        duration: { start: new Date('2022-01-15'), end: new Date('2022-06-30') },
        skillsUtilized: ['skill1101', 'skill1104', 'skill1105', 'skill1106', 'skill1108'],
        outcomes: [
          'Reduced employee relations cases by 30%',
          'Improved manager capability in handling conflicts',
          'Established clear escalation processes'
        ],
        department: 'Human Resources',
        teamSize: 3,
        description: 'Developed and implemented a comprehensive employee relations program that included manager training, clear policies, and support resources for addressing workplace conflicts.'
      }
    ],
    careerAspirations: [
      'Become a Senior HR Business Partner within 1-2 years',
      'Eventually move into an HR Director role',
      'Specialize in organizational development'
    ],
    interests: [
      'Organizational development',
      'Employee experience',
      'Diversity and inclusion',
      'HR analytics'
    ],
    developmentGoals: [
      'Enhance understanding of business strategy',
      'Develop stronger data analysis skills',
      'Improve change management capabilities'
    ],
    capacity: 75, // 75% available capacity
    location: 'Washington DC',
    licenses: [
      {
        id: 'lic1101',
        name: 'SHRM Senior Certified Professional',
        issuer: 'Society for Human Resource Management',
        dateObtained: new Date('2019-05-15'),
        expiryDate: undefined,
        validationStatus: true,
        category: 'Professional',
        description: 'Validates strategic HR expertise and competencies'
      }
    ],
    assessments: [
      {
        id: 'assess1101',
        date: new Date('2023-03-10'),
        type: 'self',
        assessorId: 'emp014',
        employeeId: 'emp014',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill1102', // Talent Management
            previousRating: 3,
            newRating: 4,
            comments: 'Improved talent management skills through leading talent review process'
          },
          {
            skillId: 'skill1109', // Problem Solving
            previousRating: 3,
            newRating: 4,
            comments: 'Developed problem solving skills through handling complex employee relations cases'
          }
        ],
        overallComments: 'I have made good progress in talent management and problem solving',
        developmentSuggestions: [
          'Continue to develop business acumen',
          'Seek opportunities to lead organizational development initiatives'
        ]
      },
      {
        id: 'assess1102',
        date: new Date('2023-03-15'),
        type: 'manager',
        assessorId: 'emp015', // Executive
        employeeId: 'emp014',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill1101', // Employee Relations
            previousRating: 4,
            newRating: 5,
            comments: 'Aisha has demonstrated exceptional employee relations capabilities'
          },
          {
            skillId: 'skill1106', // Communication
            previousRating: 4,
            newRating: 5,
            comments: 'Has shown remarkable communication skills in handling sensitive situations'
          }
        ],
        overallComments: 'Aisha continues to excel as an HR professional and is ready for more strategic responsibilities',
        developmentSuggestions: [
          'Consider taking on more strategic HR initiatives',
          'Develop deeper understanding of business operations'
        ]
      }
    ]
  },
  
  {
    id: 'emp015',
    name: 'James Williams',
    email: 'james.williams@company.com',
    department: 'Executive',
    position: 'Chief Operating Officer',
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
      { name: 'Strategic Leadership', level: 'expert', yearsOfExperience: 15 },
      { name: 'Operations Management', level: 'expert', yearsOfExperience: 18 },
      { name: 'Business Strategy', level: 'expert', yearsOfExperience: 14 },
      { name: 'Change Management', level: 'expert', yearsOfExperience: 12 },
      { name: 'Financial Management', level: 'expert', yearsOfExperience: 10 },
    ],
    certifications: [
      {
        name: 'Executive Leadership Program',
        issuer: 'Harvard Business School',
        dateAcquired: new Date('2015-06-15'),
      }
    ],
    education: [
      {
        institution: 'University of Chicago',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Business Administration',
        graduationDate: new Date('1998-05-15'),
      },
      {
        institution: 'Northwestern University',
        degree: 'Master of Business Administration',
        fieldOfStudy: 'Business Administration',
        graduationDate: new Date('2003-05-20'),
      }
    ],
    jobHistory: [
      {
        company: 'Manufacturing Corporation',
        position: 'Operations Director',
        startDate: new Date('2003-06-15'),
        endDate: new Date('2009-08-31'),
        responsibilities: ['Operations management', 'Process improvement'],
      },
      {
        company: 'Global Enterprises',
        position: 'VP of Operations',
        startDate: new Date('2009-09-15'),
        endDate: new Date('2015-12-31'),
        responsibilities: ['Strategic planning', 'Operational excellence'],
      },
      {
        company: 'Current Company',
        position: 'Chief Operating Officer',
        startDate: new Date('2016-01-15'),
        responsibilities: ['Executive leadership', 'Organizational strategy', 'Operational excellence'],
      }
    ],
    preferences: {
      jobType: ['Chief Executive Officer', 'Board Member'],
      location: ['Chicago', 'New York', 'Remote'],
      remote: true,
      willingToRelocate: false,
    },
    availableForTransfer: false,
    lastUpdated: new Date('2023-10-15'),
    
    // Enhanced fields based on new requirements
    hardSkills: [
      { id: 'skill1201', name: 'Strategic Leadership', category: 'hard', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-09-15') },
      { id: 'skill1202', name: 'Operations Management', category: 'hard', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-08-20') },
      { id: 'skill1203', name: 'Business Strategy', category: 'hard', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-07-25') },
      { id: 'skill1204', name: 'Change Management', category: 'hard', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-09-05') },
      { id: 'skill1205', name: 'Financial Management', category: 'hard', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-08-10') }
    ],
    softSkills: [
      { id: 'skill1206', name: 'Leadership', category: 'soft', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-09-20') },
      { id: 'skill1207', name: 'Strategic Thinking', category: 'soft', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-08-25') },
      { id: 'skill1208', name: 'Communication', category: 'soft', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-07-15') },
      { id: 'skill1209', name: 'Decision Making', category: 'soft', proficiency: 5, validatedBy: [], lastValidated: new Date('2023-09-10') }
    ],
    pastExperience: [
      { 
        id: 'exp1201', 
        employeeId: 'emp015', 
        projectName: 'Operational Transformation',
        role: 'Executive Sponsor',
        duration: { start: new Date('2017-03-01'), end: new Date('2018-09-30') },
        skillsUtilized: ['skill1201', 'skill1202', 'skill1204', 'skill1206', 'skill1207'],
        outcomes: [
          'Reduced operational costs by 25%',
          'Improved operational efficiency by 30%',
          'Successfully transformed operational model'
        ],
        department: 'Executive',
        teamSize: 25,
        description: 'Led a comprehensive operational transformation initiative that redesigned core business processes, implemented new technologies, and established a culture of continuous improvement.'
      },
      {
        id: 'exp1202',
        employeeId: 'emp015', 
        projectName: 'Strategic Growth Initiative',
        role: 'Executive Leader',
        duration: { start: new Date('2019-01-15'), end: new Date('2020-06-30') },
        skillsUtilized: ['skill1201', 'skill1203', 'skill1205', 'skill1207', 'skill1209'],
        outcomes: [
          'Achieved 40% revenue growth',
          'Successfully entered 3 new markets',
          'Established strategic partnerships with key industry players'
        ],
        department: 'Executive',
        teamSize: 15,
        description: 'Developed and executed a strategic growth initiative that included market expansion, product development, and strategic partnerships. Led cross-functional teams in implementing the strategy.'
      }
    ],
    careerAspirations: [
      'Become a Chief Executive Officer within 2-3 years',
      'Serve on corporate boards',
      'Mentor the next generation of executive leaders'
    ],
    interests: [
      'Organizational transformation',
      'Strategic leadership',
      'Operational excellence',
      'Corporate governance'
    ],
    developmentGoals: [
      'Enhance understanding of emerging technologies',
      'Develop stronger global business perspective',
      'Improve board-level communication skills'
    ],
    capacity: 15, // 15% available capacity
    location: 'Chicago',
    licenses: [
      {
        id: 'lic1201',
        name: 'Executive Leadership Program Certificate',
        issuer: 'Harvard Business School',
        dateObtained: new Date('2015-06-15'),
        expiryDate: undefined,
        validationStatus: true,
        category: 'Professional',
        description: 'Advanced executive leadership program focusing on strategic leadership and organizational transformation'
      }
    ],
    assessments: [
      {
        id: 'assess1201',
        date: new Date('2023-02-15'),
        type: 'self',
        assessorId: 'emp015',
        employeeId: 'emp015',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill1203', // Business Strategy
            previousRating: 5,
            newRating: 5,
            comments: 'Maintained strong business strategy capabilities through leading strategic initiatives'
          },
          {
            skillId: 'skill1207', // Strategic Thinking
            previousRating: 5,
            newRating: 5,
            comments: 'Continued to apply strategic thinking to complex business challenges'
          }
        ],
        overallComments: 'I continue to leverage my strategic capabilities effectively',
        developmentSuggestions: [
          'Focus on understanding emerging technologies and their business implications',
          'Develop stronger global business perspective'
        ]
      },
      {
        id: 'assess1202',
        date: new Date('2023-02-20'),
        type: 'manager',
        assessorId: 'emp016', // CEO
        employeeId: 'emp015',
        quarter: 1,
        year: 2023,
        skillsAssessed: [
          {
            skillId: 'skill1201', // Strategic Leadership
            previousRating: 5,
            newRating: 5,
            comments: 'James continues to demonstrate exceptional strategic leadership capabilities'
          },
          {
            skillId: 'skill1206', // Leadership
            previousRating: 5,
            newRating: 5,
            comments: 'Consistently shows strong leadership in guiding the organization'
          }
        ],
        overallComments: 'James continues to be a highly effective executive leader',
        developmentSuggestions: [
          'Consider expanding experience through board service',
          'Continue developing understanding of emerging technologies'
        ]
      }
    ]
  }
];

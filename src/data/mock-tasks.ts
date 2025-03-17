import { Task } from '../models/task.model';

/**
 * Mock tasks data representing work that needs to be accomplished
 * These tasks will be analyzed and matched with employees based on skills and other factors
 */
export const mockTasks: Task[] = [
  {
    id: 'task001',
    description: 'Develop a new customer dashboard with real-time analytics',
    purpose: 'Provide customers with self-service analytics capabilities to reduce support requests and improve customer satisfaction',
    outcomes: [
      'Interactive dashboard with key performance metrics',
      'Real-time data visualization',
      'Customizable reports and alerts',
      'Mobile-responsive design'
    ],
    
    // Skill requirements
    requiredHardSkills: [
      {
        skillId: 'skill001',
        skillName: 'JavaScript',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill003',
        skillName: 'React',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill007',
        skillName: 'SQL',
        minimumProficiency: 3,
        importance: 4
      },
      {
        skillId: 'skill008',
        skillName: 'Data Analysis',
        minimumProficiency: 3,
        importance: 4
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill013',
        skillName: 'Problem Solving',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill014',
        skillName: 'Teamwork',
        minimumProficiency: 3,
        importance: 3
      }
    ],
    
    // Complexity and variability metrics
    complexity: {
      overall: 4,
      factors: {
        technicalDifficulty: 4,
        stakeholderManagement: 3,
        decisionMaking: 4,
        problemSolving: 4,
        crossFunctionalCoordination: 3
      }
    },
    
    variability: {
      overall: 3,
      factors: {
        requirementsStability: 3,
        processDefinition: 4,
        externalDependencies: 3,
        timelinePredictability: 2
      }
    },
    
    // Time and resource requirements
    estimatedDuration: 45, // days
    estimatedEffort: 90, // person-days
    capacityRequired: 80, // percentage of full-time
    
    // Dependencies and constraints
    dependencies: ['task005'], // Data API enhancements
    locationRequirements: ['Remote', 'Seattle'],
    
    // Additional context
    businessContext: 'Part of the customer experience enhancement initiative for Q2',
    createdBy: 'emp005',
    createdAt: new Date('2023-03-01'),
    lastModified: new Date('2023-03-10')
  },
  
  {
    id: 'task002',
    description: 'Implement machine learning model for customer churn prediction',
    purpose: 'Identify at-risk customers before they churn to enable proactive retention strategies',
    outcomes: [
      'Predictive model with >85% accuracy',
      'Integration with CRM system',
      'Automated alerts for high-risk customers',
      'Dashboard for customer success team'
    ],
    
    requiredHardSkills: [
      {
        skillId: 'skill005',
        skillName: 'Python',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill006',
        skillName: 'Machine Learning',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill007',
        skillName: 'SQL',
        minimumProficiency: 3,
        importance: 4
      },
      {
        skillId: 'skill008',
        skillName: 'Data Analysis',
        minimumProficiency: 4,
        importance: 4
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill013',
        skillName: 'Problem Solving',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill017',
        skillName: 'Critical Thinking',
        minimumProficiency: 4,
        importance: 4
      }
    ],
    
    complexity: {
      overall: 5,
      factors: {
        technicalDifficulty: 5,
        stakeholderManagement: 3,
        decisionMaking: 4,
        problemSolving: 5,
        crossFunctionalCoordination: 3
      }
    },
    
    variability: {
      overall: 3,
      factors: {
        requirementsStability: 3,
        processDefinition: 3,
        externalDependencies: 4,
        timelinePredictability: 2
      }
    },
    
    estimatedDuration: 60, // days
    estimatedEffort: 120, // person-days
    capacityRequired: 70, // percentage of full-time
    
    dependencies: [],
    licenseRequirements: ['lic009'], // TensorFlow Developer Certificate
    
    businessContext: 'Strategic initiative to reduce customer churn rate by 15% this year',
    createdBy: 'emp007',
    createdAt: new Date('2023-02-15'),
    lastModified: new Date('2023-03-05')
  },
  
  {
    id: 'task003',
    description: 'Lead cross-functional team for ERP system migration',
    purpose: 'Transition from legacy systems to modern ERP solution to improve operational efficiency',
    outcomes: [
      'Successful data migration with <0.1% error rate',
      'User training program for 200+ employees',
      'Integration with existing systems',
      'Minimal business disruption during transition'
    ],
    
    requiredHardSkills: [
      {
        skillId: 'skill007',
        skillName: 'SQL',
        minimumProficiency: 3,
        importance: 3
      },
      {
        skillId: 'skill018',
        skillName: 'Project Management',
        minimumProficiency: 4,
        importance: 5
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill011',
        skillName: 'Communication',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill012',
        skillName: 'Leadership',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill014',
        skillName: 'Teamwork',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill020',
        skillName: 'Emotional Intelligence',
        minimumProficiency: 4,
        importance: 4
      }
    ],
    
    complexity: {
      overall: 4,
      factors: {
        technicalDifficulty: 3,
        stakeholderManagement: 5,
        decisionMaking: 4,
        problemSolving: 4,
        crossFunctionalCoordination: 5
      }
    },
    
    variability: {
      overall: 4,
      factors: {
        requirementsStability: 3,
        processDefinition: 3,
        externalDependencies: 5,
        timelinePredictability: 3
      }
    },
    
    estimatedDuration: 180, // days
    estimatedEffort: 900, // person-days
    capacityRequired: 90, // percentage of full-time
    
    dependencies: [],
    licenseRequirements: ['lic003'], // PMP Certification
    locationRequirements: ['Chicago', 'New York'],
    
    businessContext: 'Critical infrastructure modernization initiative with board-level visibility',
    createdBy: 'emp008',
    createdAt: new Date('2023-01-10'),
    lastModified: new Date('2023-02-28')
  },
  
  {
    id: 'task004',
    description: 'Develop security compliance framework for cloud infrastructure',
    purpose: 'Ensure all cloud systems meet industry security standards and regulatory requirements',
    outcomes: [
      'Comprehensive security policies and procedures',
      'Automated compliance checking tools',
      'Security training program for development teams',
      'Successful ISO 27001 certification'
    ],
    
    requiredHardSkills: [
      {
        skillId: 'skill009',
        skillName: 'AWS',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill010',
        skillName: 'Docker',
        minimumProficiency: 3,
        importance: 3
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill011',
        skillName: 'Communication',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill013',
        skillName: 'Problem Solving',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill017',
        skillName: 'Critical Thinking',
        minimumProficiency: 4,
        importance: 4
      }
    ],
    
    complexity: {
      overall: 4,
      factors: {
        technicalDifficulty: 4,
        stakeholderManagement: 4,
        decisionMaking: 4,
        problemSolving: 4,
        crossFunctionalCoordination: 4
      }
    },
    
    variability: {
      overall: 2,
      factors: {
        requirementsStability: 2,
        processDefinition: 2,
        externalDependencies: 3,
        timelinePredictability: 3
      }
    },
    
    estimatedDuration: 90, // days
    estimatedEffort: 180, // person-days
    capacityRequired: 70, // percentage of full-time
    
    dependencies: [],
    licenseRequirements: ['lic005', 'lic010'], // CISSP, CEH
    
    businessContext: 'Response to recent security audit findings and preparation for upcoming compliance requirements',
    createdBy: 'emp006',
    createdAt: new Date('2023-02-01'),
    lastModified: new Date('2023-02-20')
  },
  
  {
    id: 'task005',
    description: 'Enhance data API layer for improved performance and scalability',
    purpose: 'Optimize backend data services to support growing user base and new feature development',
    outcomes: [
      'Reduced API response time by 50%',
      'Increased throughput capacity by 300%',
      'Improved error handling and logging',
      'API documentation and developer guides'
    ],
    
    requiredHardSkills: [
      {
        skillId: 'skill004',
        skillName: 'Node.js',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill007',
        skillName: 'SQL',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill009',
        skillName: 'AWS',
        minimumProficiency: 3,
        importance: 3
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill013',
        skillName: 'Problem Solving',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill017',
        skillName: 'Critical Thinking',
        minimumProficiency: 3,
        importance: 4
      }
    ],
    
    complexity: {
      overall: 4,
      factors: {
        technicalDifficulty: 4,
        stakeholderManagement: 2,
        decisionMaking: 4,
        problemSolving: 5,
        crossFunctionalCoordination: 3
      }
    },
    
    variability: {
      overall: 2,
      factors: {
        requirementsStability: 2,
        processDefinition: 2,
        externalDependencies: 2,
        timelinePredictability: 3
      }
    },
    
    estimatedDuration: 30, // days
    estimatedEffort: 60, // person-days
    capacityRequired: 80, // percentage of full-time
    
    dependencies: [],
    
    businessContext: 'Foundation for multiple product initiatives requiring improved data access',
    createdBy: 'emp001',
    createdAt: new Date('2023-02-10'),
    lastModified: new Date('2023-02-15')
  },
  
  {
    id: 'task006',
    description: 'Develop product strategy for new market segment',
    purpose: 'Identify opportunities and create roadmap for entering the healthcare vertical',
    outcomes: [
      'Market analysis report',
      'Competitive landscape assessment',
      'Product requirements document',
      '3-year roadmap and go-to-market strategy'
    ],
    
    requiredHardSkills: [
      {
        skillId: 'skill008',
        skillName: 'Data Analysis',
        minimumProficiency: 3,
        importance: 4
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill011',
        skillName: 'Communication',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill012',
        skillName: 'Leadership',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill017',
        skillName: 'Critical Thinking',
        minimumProficiency: 5,
        importance: 5
      },
      {
        skillId: 'skill019',
        skillName: 'Creativity',
        minimumProficiency: 4,
        importance: 4
      }
    ],
    
    complexity: {
      overall: 4,
      factors: {
        technicalDifficulty: 2,
        stakeholderManagement: 5,
        decisionMaking: 5,
        problemSolving: 4,
        crossFunctionalCoordination: 4
      }
    },
    
    variability: {
      overall: 4,
      factors: {
        requirementsStability: 4,
        processDefinition: 3,
        externalDependencies: 4,
        timelinePredictability: 3
      }
    },
    
    estimatedDuration: 60, // days
    estimatedEffort: 120, // person-days
    capacityRequired: 60, // percentage of full-time
    
    dependencies: [],
    
    businessContext: 'Strategic growth initiative identified in annual planning',
    createdBy: 'emp008',
    createdAt: new Date('2023-01-20'),
    lastModified: new Date('2023-02-05')
  },
  
  {
    id: 'task007',
    description: 'Implement DevOps pipeline automation',
    purpose: 'Streamline development workflow and improve deployment reliability',
    outcomes: [
      'Continuous integration/continuous deployment pipeline',
      'Automated testing framework',
      'Infrastructure as code implementation',
      'Deployment time reduced by 70%'
    ],
    
    requiredHardSkills: [
      {
        skillId: 'skill009',
        skillName: 'AWS',
        minimumProficiency: 4,
        importance: 5
      },
      {
        skillId: 'skill010',
        skillName: 'Docker',
        minimumProficiency: 4,
        importance: 5
      }
    ],
    
    requiredSoftSkills: [
      {
        skillId: 'skill013',
        skillName: 'Problem Solving',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill014',
        skillName: 'Teamwork',
        minimumProficiency: 3,
        importance: 3
      }
    ],
    
    complexity: {
      overall: 4,
      factors: {
        technicalDifficulty: 4,
        stakeholderManagement: 3,
        decisionMaking: 3,
        problemSolving: 4,
        crossFunctionalCoordination: 4
      }
    },
    
    variability: {
      overall: 2,
      factors: {
        requirementsStability: 2,
        processDefinition: 2,
        externalDependencies: 3,
        timelinePredictability: 3
      }
    },
    
    estimatedDuration: 45, // days
    estimatedEffort: 90, // person-days
    capacityRequired: 80, // percentage of full-time
    
    dependencies: [],
    licenseRequirements: ['lic001', 'lic007'], // AWS Certified Developer, Azure Solutions Architect
    
    businessContext: 'Part of engineering excellence initiative to improve development velocity',
    createdBy: 'emp005',
    createdAt: new Date('2023-02-25'),
    lastModified: new Date('2023-03-05')
  },
  
  {
    id: 'task008',
    description: 'Design and implement customer onboarding program',
    purpose: 'Improve new customer experience and reduce time-to-value',
    outcomes: [
      'Structured onboarding process',
      'Training materials and documentation',
      'Success metrics and reporting dashboard',
      'Reduced onboarding time by 50%'
    ],
    
    requiredHardSkills: [],
    
    requiredSoftSkills: [
      {
        skillId: 'skill011',
        skillName: 'Communication',
        minimumProficiency: 5,
        importance: 5
      },
      {
        skillId: 'skill018',
        skillName: 'Project Management',
        minimumProficiency: 4,
        importance: 4
      },
      {
        skillId: 'skill019',
        skillName: 'Creativity',
        minimumProficiency: 3,
        importance: 3
      },
      {
        skillId: 'skill020',
        skillName: 'Emotional Intelligence',
        minimumProficiency: 4,
        importance: 4
      }
    ],
    
    complexity: {
      overall: 3,
      factors: {
        technicalDifficulty: 2,
        stakeholderManagement: 4,
        decisionMaking: 3,
        problemSolving: 3,
        crossFunctionalCoordination: 4
      }
    },
    
    variability: {
      overall: 3,
      factors: {
        requirementsStability: 3,
        processDefinition: 2,
        externalDependencies: 3,
        timelinePredictability: 3
      }
    },
    
    estimatedDuration: 60, // days
    estimatedEffort: 120, // person-days
    capacityRequired: 50, // percentage of full-time
    
    dependencies: [],
    
    businessContext: 'Customer success initiative to improve retention and satisfaction',
    createdBy: 'emp003',
    createdAt: new Date('2023-03-01'),
    lastModified: new Date('2023-03-10')
  }
];

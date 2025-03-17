import { Assessment } from '../models/assessment.model';

/**
 * Mock assessments data representing quarterly skill validations
 * Includes self-assessments, manager assessments, and peer assessments
 */
export const mockAssessments: Assessment[] = [
  // Self Assessments
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
  
  // Manager Assessments
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
  },
  
  // Peer Assessments
  {
    id: 'assess003',
    date: new Date('2023-03-18'),
    type: 'peer',
    assessorId: 'emp002', // Peer
    employeeId: 'emp001',
    quarter: 1,
    year: 2023,
    skillsAssessed: [
      {
        skillId: 'skill001', // JavaScript
        previousRating: 4,
        newRating: 5,
        comments: 'Helped me solve complex JavaScript issues multiple times'
      },
      {
        skillId: 'skill014', // Teamwork
        previousRating: 4,
        newRating: 4,
        comments: 'Great team player who always helps others'
      }
    ],
    overallComments: 'Excellent teammate who shares knowledge and supports the team',
    developmentSuggestions: [
      'Could share knowledge more broadly through tech talks or documentation'
    ]
  },
  
  // More assessments for other employees
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
  },
  
  // Previous quarter assessments
  {
    id: 'assess006',
    date: new Date('2022-12-10'),
    type: 'self',
    assessorId: 'emp001',
    employeeId: 'emp001',
    quarter: 4,
    year: 2022,
    skillsAssessed: [
      {
        skillId: 'skill001', // JavaScript
        previousRating: 4,
        newRating: 4,
        comments: 'Maintained strong JavaScript skills'
      },
      {
        skillId: 'skill002', // TypeScript
        previousRating: 3,
        newRating: 3,
        comments: 'Using TypeScript regularly in projects'
      }
    ],
    overallComments: 'Steady performance this quarter while focusing on project delivery',
    developmentSuggestions: [
      'Deepen TypeScript knowledge',
      'Learn more about performance optimization'
    ]
  },
  
  {
    id: 'assess007',
    date: new Date('2022-12-15'),
    type: 'manager',
    assessorId: 'emp005', // Manager
    employeeId: 'emp001',
    quarter: 4,
    year: 2022,
    skillsAssessed: [
      {
        skillId: 'skill001', // JavaScript
        previousRating: 4,
        newRating: 4,
        comments: 'Consistently strong JavaScript skills'
      },
      {
        skillId: 'skill011', // Communication
        previousRating: 2,
        newRating: 3,
        comments: 'Showing improvement in communication'
      }
    ],
    overallComments: 'Good technical performance. Communication is improving but needs continued focus.',
    developmentSuggestions: [
      'Continue working on communication skills',
      'Consider taking more initiative in architectural decisions'
    ]
  },
  
  // Assessments for different skills
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
  },
  
  {
    id: 'assess010',
    date: new Date('2023-03-26'),
    type: 'peer',
    assessorId: 'emp004', // Peer
    employeeId: 'emp003',
    quarter: 1,
    year: 2023,
    skillsAssessed: [
      {
        skillId: 'skill012', // Leadership
        previousRating: 3,
        newRating: 4,
        comments: 'Provided clear direction and support throughout the project'
      },
      {
        skillId: 'skill020', // Emotional Intelligence
        previousRating: 3,
        newRating: 4,
        comments: 'Handled team conflicts effectively and maintained positive environment'
      }
    ],
    overallComments: 'Great team leader who cares about team members and project success',
    developmentSuggestions: [
      'Could delegate more effectively to develop team members'
    ]
  }
];

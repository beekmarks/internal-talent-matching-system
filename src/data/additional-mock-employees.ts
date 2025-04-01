import { Employee } from '../models/employee.model';
import { additionalMockEmployees1 } from './additional-mock-employees-1';
import { additionalMockEmployees2 } from './additional-mock-employees-2';
import { additionalMockEmployees3 } from './additional-mock-employees-3';
import { additionalMockEmployees4 } from './additional-mock-employees-4';
import { additionalMockEmployees5 } from './additional-mock-employees-5';

/**
 * Combined additional mock employees data with diverse profiles
 * This data simulates information from various HR systems:
 * - Workday: Basic employee info, location, capacity
 * - Fuel50: Career aspirations, development goals
 * - LinkedIn: Professional experience, connections
 * - SumTotal: Training history, certifications
 * - Degreed: Learning pathways, skills development
 * - Recognition Central: Peer validations, achievements
 */
export const additionalMockEmployees: Employee[] = [
  ...additionalMockEmployees1,
  ...additionalMockEmployees2,
  ...additionalMockEmployees3,
  ...additionalMockEmployees4,
  ...additionalMockEmployees5
];

import { License } from '../models/license.model';

/**
 * Mock licenses and certifications data
 * Represents professional qualifications, certifications, and licenses
 * that employees have obtained
 */
export const mockLicenses: License[] = [
  {
    id: 'lic001',
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    dateObtained: new Date('2021-06-15'),
    expiryDate: new Date('2024-06-15'),
    validationStatus: true,
    category: 'Technical',
    description: 'Validates technical expertise in developing and maintaining AWS-based applications'
  },
  {
    id: 'lic002',
    name: 'Certified Scrum Master (CSM)',
    issuer: 'Scrum Alliance',
    dateObtained: new Date('2022-03-10'),
    expiryDate: new Date('2024-03-10'),
    validationStatus: true,
    category: 'Professional',
    description: 'Demonstrates knowledge of Scrum framework and ability to apply it in team settings'
  },
  {
    id: 'lic003',
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    dateObtained: new Date('2020-09-22'),
    expiryDate: new Date('2023-09-22'),
    validationStatus: false, // Needs renewal
    category: 'Professional',
    description: 'Globally recognized certification for project management knowledge and experience'
  },
  {
    id: 'lic004',
    name: 'Google Professional Data Engineer',
    issuer: 'Google Cloud',
    dateObtained: new Date('2022-05-18'),
    expiryDate: new Date('2024-05-18'),
    validationStatus: true,
    category: 'Technical',
    description: 'Certifies ability to design and build data processing systems on Google Cloud'
  },
  {
    id: 'lic005',
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC²',
    dateObtained: new Date('2021-11-30'),
    expiryDate: new Date('2024-11-30'),
    validationStatus: true,
    category: 'Technical',
    description: 'Demonstrates expertise in information security'
  },
  {
    id: 'lic006',
    name: 'Certified ScrumProduct Owner (CSPO)',
    issuer: 'Scrum Alliance',
    dateObtained: new Date('2020-02-20'),
    expiryDate: new Date('2022-02-20'),
    validationStatus: false, // Expired
    category: 'Professional',
    description: 'Validates knowledge of the Product Owner role in Scrum framework'
  },
  {
    id: 'lic007',
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    dateObtained: new Date('2022-01-15'),
    expiryDate: new Date('2025-01-15'),
    validationStatus: true,
    category: 'Technical',
    description: 'Validates expertise in designing solutions that run on Microsoft Azure'
  },
  {
    id: 'lic008',
    name: 'Certified Business Analysis Professional (CBAP)',
    issuer: 'International Institute of Business Analysis',
    dateObtained: new Date('2021-08-05'),
    expiryDate: new Date('2024-08-05'),
    validationStatus: true,
    category: 'Professional',
    description: 'Recognizes expertise in business analysis'
  },
  {
    id: 'lic009',
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    dateObtained: new Date('2022-03-10'),
    validationStatus: true,
    category: 'Technical',
    description: 'Validates skills in using TensorFlow to solve deep learning and ML problems'
  },
  {
    id: 'lic010',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    dateObtained: new Date('2021-04-12'),
    expiryDate: new Date('2024-04-12'),
    validationStatus: true,
    category: 'Technical',
    description: 'Certifies individuals in the specific network security discipline of ethical hacking'
  }
];

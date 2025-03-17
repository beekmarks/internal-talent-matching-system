export interface Skill {
  id: string;
  name: string;
  category: 'hard' | 'soft';
  proficiency: number;         // 1-5 scale
  validatedBy: string[];       // Who validated this skill (employee IDs)
  lastValidated: Date;
  derivedFrom?: string;        // If derived, what source (e.g., "project: CRM Migration")
}

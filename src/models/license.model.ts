export interface License {
  id: string;
  name: string;
  issuer: string;
  dateObtained: Date;
  expiryDate?: Date;
  validationStatus: boolean;
  category: string;  // e.g., "Technical", "Professional", "Industry-specific"
  description?: string;
}

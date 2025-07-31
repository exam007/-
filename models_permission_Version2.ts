export interface Permission {
  _id?: string;
  userEmail: string;
  examId: string;
  allowedAttempts: number;
  usedAttempts: number;
}
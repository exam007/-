export interface Result {
  _id?: string;
  userEmail: string;
  examId: string;
  score: number;
  correct: number;
  total: number;
  answers: number[];
  timeSpent: number;
  createdAt: Date;
}
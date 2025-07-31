export interface Question {
  _id?: string;
  examId: string;
  question: string;
  options: string[];
  answer: number; // index ของตัวเลือกที่ถูกต้อง
  explanation?: string;
}
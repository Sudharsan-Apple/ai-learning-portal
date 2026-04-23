import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ExamQuestion = {
  id: number;
  domain: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export function getExamQuestions(): ExamQuestion[] {
  const examPath = path.join(process.cwd(), "content/exam/question-bank.mdx");
  const raw = fs.readFileSync(examPath, "utf8");
  const { data } = matter(raw);
  return data.questions as ExamQuestion[];
}

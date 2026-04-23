import { ExamClient } from "@/components/exam-client";
import { getExamQuestions } from "@/lib/exam";

export default function ExamPage() {
  const questions = getExamQuestions();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">AB-900 Exam Simulator</h1>
      <p className="text-slate-300">55 practice questions aligned to AB-900 domains with explanations.</p>
      <ExamClient questions={questions} />
    </div>
  );
}

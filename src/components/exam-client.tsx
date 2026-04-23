"use client";

import { useMemo, useState } from "react";
import type { ExamQuestion } from "@/lib/exam";

export function ExamClient({ questions }: { questions: ExamQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((sum, q) => sum + (selected[q.id] === q.answer ? 1 : 0), 0);
  }, [questions, selected]);

  const q = questions[index];
  const answered = selected[q.id];

  return (
    <div className="space-y-6">
      <div className="card p-4">
        <p className="text-sm text-slate-400">Question {index + 1} / {questions.length} • {q.domain}</p>
        <h2 className="mt-2 text-lg font-semibold">{q.question}</h2>
        <div className="mt-4 space-y-2">
          {q.options.map((opt, i) => {
            const show = submitted;
            const correct = q.answer === i;
            const picked = answered === i;
            const cls = show
              ? correct
                ? "border-emerald-500 bg-emerald-950/40"
                : picked
                ? "border-rose-500 bg-rose-950/40"
                : "border-slate-700"
              : picked
              ? "border-sky-400 bg-sky-950/30"
              : "border-slate-700";

            return (
              <button
                key={opt}
                onClick={() => !submitted && setSelected((s) => ({ ...s, [q.id]: i }))}
                className={`w-full rounded-lg border p-3 text-left transition ${cls}`}
              >
                <span className="font-medium">{String.fromCharCode(65 + i)}.</span> {opt}
              </button>
            );
          })}
        </div>
        {submitted && <p className="mt-3 text-sm text-slate-300">{q.explanation}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => setIndex((i) => Math.max(0, i - 1))} className="rounded-lg border border-slate-700 px-3 py-2">Previous</button>
        <button onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))} className="rounded-lg border border-slate-700 px-3 py-2">Next</button>
        <button onClick={() => setSubmitted((s) => !s)} className="rounded-lg bg-sky-600 px-3 py-2 font-medium text-white">{submitted ? "Hide Answers" : "Check Answers"}</button>
        <p className="ml-auto text-sm text-slate-300">Current Score: {score}/{questions.length}</p>
      </div>
    </div>
  );
}

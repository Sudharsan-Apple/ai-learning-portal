import Link from "next/link";
import { BookOpen, BrainCircuit, CircleCheckBig, Library, MessageSquareText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const plan = [
  "Week 1: AI workloads, responsible AI, and AB-900 foundations",
  "Week 2: Computer vision + NLP services in Azure AI",
  "Week 3: Generative AI, prompt engineering, Copilot patterns",
  "Week 4: Full mock exams, weak-area revision, and exam-day checklist",
];

const modules: Array<{ label: string; href: string; Icon: LucideIcon }> = [
  { label: "Knowledge Vault", href: "/knowledge", Icon: BookOpen },
  { label: "Exam Simulator", href: "/exam", Icon: CircleCheckBig },
  { label: "Resource Library", href: "/resources", Icon: Library },
  { label: "Study Buddy", href: "/study-buddy", Icon: MessageSquareText },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="card p-6">
        <p className="text-sm uppercase tracking-wide text-sky-300">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold">AI Agents & AB-900 Self-Learning Platform</h1>
        <p className="mt-2 max-w-3xl text-slate-300">Concrete, lightweight, and reliable study system using MDX as file-based database.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-700 p-4"><p className="text-sm text-slate-400">Progress</p><p className="text-2xl font-semibold">25%</p></div>
          <div className="rounded-lg border border-slate-700 p-4"><p className="text-sm text-slate-400">Questions</p><p className="text-2xl font-semibold">55</p></div>
          <div className="rounded-lg border border-slate-700 p-4"><p className="text-sm text-slate-400">Daily Task</p><p className="text-lg font-semibold">Review Responsible AI + 15 Qs</p></div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <div className="mb-2 flex items-center gap-2 text-sky-300"><BrainCircuit className="h-5 w-5" /> 4-Week AB-900 Plan</div>
          <ul className="space-y-2 text-sm text-slate-300">{plan.map((p) => <li key={p}>• {p}</li>)}</ul>
        </div>
        <div className="card p-5">
          <h2 className="mb-3 text-lg font-semibold">Quick Links</h2>
          <div className="grid gap-2">
            {modules.map(({ label, href, Icon }) => (
              <Link key={label} href={href} className="flex items-center justify-between rounded-lg border border-slate-700 px-4 py-3 hover:border-sky-500">
                <span>{label}</span>
                <Icon className="h-4 w-4 text-sky-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { getDocs } from "@/lib/content";

export default function KnowledgePage() {
  const docs = getDocs("knowledge");
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Knowledge Vault</h1>
      <p className="text-slate-300">Structured, reliable notes based on the AI Agents roadmap and AB-900 domains.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Link key={doc.slug} href={`/knowledge/${doc.slug}`} className="card p-5 hover:border-sky-500">
            <p className="text-xs uppercase tracking-wide text-sky-300">{doc.category}</p>
            <h2 className="mt-2 text-xl font-semibold">{doc.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{doc.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

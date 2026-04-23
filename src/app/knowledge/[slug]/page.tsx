import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getDocBySlug, getDocs } from "@/lib/content";

const folders = ["knowledge", "admin-center", "security-principles", "exam-guide"];

export async function generateStaticParams() {
  const allDocs = folders.flatMap(folder => getDocs(folder));
  return allDocs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function KnowledgeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let doc = null;
  for (const folder of folders) {
    doc = getDocBySlug(folder, slug);
    if (doc) break;
  }
  
  if (!doc) return notFound();

  const mdx = await compileMDX({ source: doc.body, options: { mdxOptions: { remarkPlugins: [remarkGfm] } } });

  return (
    <article className="card p-6 prose prose-invert max-w-none">
      <p className="text-xs uppercase tracking-wide text-sky-300">{doc.category}</p>
      <h1>{doc.title}</h1>
      <p>{doc.summary}</p>
      {mdx.content}
    </article>
  );
}

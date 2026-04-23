import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getDocBySlug } from "@/lib/content";

export default async function KnowledgeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug("knowledge", slug);
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

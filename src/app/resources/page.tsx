import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getDocs } from "@/lib/content";

export default async function ResourcePage() {
  const [doc] = getDocs("resources");
  const mdx = await compileMDX({ source: doc.body, options: { mdxOptions: { remarkPlugins: [remarkGfm] } } });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Resource Library</h1>
      <article className="card prose prose-invert max-w-none p-6">{mdx.content}</article>
    </div>
  );
}

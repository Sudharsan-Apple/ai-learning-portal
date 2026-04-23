import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type MdxDoc = {
  slug: string;
  title: string;
  summary: string;
  category?: string;
  tags?: string[];
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

export function getDocs(folder: string): MdxDoc[] {
  const dir = path.join(contentRoot, folder);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title ?? file,
      summary: data.summary ?? "",
      category: data.category,
      tags: data.tags ?? [],
      body: content,
    };
  });
}

export function getDocBySlug(folder: string, slug: string): MdxDoc | null {
  const file = path.join(contentRoot, folder, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? "",
    category: data.category,
    tags: data.tags ?? [],
    body: content,
  };
}

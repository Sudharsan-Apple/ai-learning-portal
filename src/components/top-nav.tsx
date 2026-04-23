import Link from "next/link";

const links = [
  ["/", "Dashboard"],
  ["/knowledge", "Knowledge Vault"],
  ["/exam", "Exam Simulator"],
  ["/resources", "Resource Library"],
  ["/study-buddy", "Study Buddy"],
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide text-sky-300">AI Learning Portal</Link>
        <nav className="flex flex-wrap gap-2 text-sm">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-sky-500 hover:text-sky-200">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

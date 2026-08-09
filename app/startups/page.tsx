import Link from "next/link";

export default function StartupsDirectory() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 py-24 px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary/10 text-4xl text-brand-primary">
        🚀
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
        Startup Directory
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
        We are currently compiling the full database of all 70+ startups incubated across R-ABI and I3F. The complete, searchable directory will be available here soon!
      </p>
      <Link
        href="/#portfolio"
        className="inline-block border border-brand-primary bg-brand-primary px-8 py-4 font-bold text-white transition hover:bg-brand-secondary shadow-lg uppercase tracking-wider text-sm rounded-lg"
      >
        &larr; Back to Portfolio Highlights
      </Link>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type HelpedBy = "I3F" | "RKVY-RAFTAAR";
type Startup = { name: string; domain: string; focus: string; mark: string; helpedBy: HelpedBy; logo?: string };

const startups: Startup[] = [
  { name: "Aryo Green Tech", domain: "Deep Tech", focus: "Superconducting magnetic engine", mark: "AG", helpedBy: "I3F", logo: "/images/startups/aryo-green-tech.png" },
  { name: "Titlis Engineering", domain: "Clean Tech", focus: "Smart solar tree and air-water generator", mark: "TE", helpedBy: "RKVY-RAFTAAR", logo: "/images/startups/titlis-logo.png" },
  { name: "Sikhar Vaidik Krishi", domain: "Agri Tech", focus: "Circular agri-ecosystem for regenerative farming", mark: "SK", helpedBy: "RKVY-RAFTAAR", logo: "/images/startups/sikhar-vaidik-krishi.png" },
  { name: "Divavi Enterprises", domain: "Supply Chain", focus: "Rural-to-urban market access for producers", mark: "DE", helpedBy: "RKVY-RAFTAAR", logo: "/images/startups/divavi.png" },
  { name: "ExFlair Trade", domain: "Fisheries", focus: "High-density sustainable fish farming systems", mark: "EX", helpedBy: "RKVY-RAFTAAR", logo: "/images/startups/exflair.png" },
  { name: "Manwani's Pearl Culture", domain: "Agri Tech", focus: "India's first organic freshwater pearl farming model", mark: "MP", helpedBy: "RKVY-RAFTAAR", logo: "/images/startups/manwani.png" },
  { name: "Heal Venture Biosciences", domain: "Biotechnology", focus: "Insect-protein aquafeed, bio-fertilizers and bio-pesticides", mark: "HV", helpedBy: "RKVY-RAFTAAR", logo: "/images/startups/heal-venture.png" },
  { name: "Delbrone Innovation", domain: "Deep Tech", focus: "Anti-drone systems for a safer future", mark: "DI", helpedBy: "I3F" },
  { name: "Triphan Healthcare", domain: "Healthcare", focus: "Nanotechnology antimicrobial products", mark: "TH", helpedBy: "I3F", logo: "/images/startups/triphan.png" },
  { name: "BondU Labs", domain: "ICT", focus: "AI matchmaking and lead capture for trade shows", mark: "BL", helpedBy: "I3F", logo: "/images/startups/bondu.png" },
];

const helpedByOptions: Array<"All" | HelpedBy> = ["All", "I3F", "RKVY-RAFTAAR"];

export default function StartupsDirectory() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [helpedByFilter, setHelpedByFilter] = useState<"All" | HelpedBy>("All");
  const categories = ["All", ...Array.from(new Set(startups.map((startup) => startup.domain)))];
  const visibleStartups = useMemo(() => startups.filter((startup) =>
    (filter === "All" || startup.domain === filter) &&
    (helpedByFilter === "All" || startup.helpedBy === helpedByFilter) &&
    `${startup.name} ${startup.focus}`.toLowerCase().includes(query.toLowerCase())
  ), [filter, helpedByFilter, query]);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="bg-slate-50 border-b border-slate-200 py-24 pt-32">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          
          <div className="mb-12">
            <Link href="/" className="text-brand-primary font-bold hover:underline mb-6 inline-block">
              &larr; Back to Home
            </Link>
          </div>

          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-brand-accent"></div>
                <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Startups we&apos;ve built with</h2>
              <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                From agritech to advanced engineering, each venture is a new possibility made practical.
              </p>
            </div>
            
            <label className="relative block w-full md:w-80">
              <span className="sr-only">Search startups</span>
              <svg className="absolute left-4 top-4 h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a startup" className="w-full border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-slate-800 outline-none transition focus:border-brand-primary focus:ring-1 focus:ring-brand-primary shadow-sm" />
            </label>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
            <aside aria-label="Filter startups by sector" className="self-start border border-slate-200 bg-white p-3 shadow-sm">
              <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Filter by sector</p>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                {categories.map((category) => (
                  <button key={category} onClick={() => setFilter(category)} className={`shrink-0 px-4 py-3 text-left text-sm font-semibold transition border ${filter === category ? "bg-brand-primary border-brand-primary text-white" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}>
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            <div className="min-w-0 space-y-6">
              <div aria-label="Filter startups by program" className="border border-slate-200 bg-white p-3 shadow-sm">
                <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Helped by</p>
                <div className="flex flex-wrap gap-2">
                  {helpedByOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setHelpedByFilter(option)}
                      className={`shrink-0 px-4 py-2.5 text-sm font-semibold transition border ${helpedByFilter === option ? "bg-brand-primary border-brand-primary text-white" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {visibleStartups.map((startup) => (
                  <article key={startup.name} className="group relative min-h-[280px] flex flex-col border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-primary hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-transparent opacity-50 group-hover:from-brand-primary/10 transition-colors pointer-events-none"></div>
                    <div className="flex-1 z-10">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center bg-white border border-slate-200 rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-110 overflow-hidden relative">
                        {startup.logo ? (
                          <Image src={startup.logo} alt={startup.name} fill className="object-contain p-1" sizes="56px" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-brand-primary text-sm font-bold text-white">
                            {startup.mark}
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] font-bold tracking-widest text-brand-accent uppercase mb-2">{startup.domain}</p>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight mb-3">{startup.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{startup.focus}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{startup.helpedBy}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          
          {visibleStartups.length === 0 && (
            <p className="py-16 text-center text-slate-500 font-medium">No startups match that search yet.</p>
          )}
          
        </div>
      </section>
    </div>
  );
}

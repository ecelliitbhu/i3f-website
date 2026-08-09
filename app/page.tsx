import PortfolioEcosystem from "../components/PortfolioEcosystem";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 font-sans">
      
      {/* HERO SECTION - Modern Government/Authority Style */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-brand-primary overflow-hidden">
        {/* Abstract Geometric Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-1 bg-brand-accent"></div>
              <span className="uppercase tracking-[0.2em] text-white/90 font-bold text-sm">
                IIT (BHU) Varanasi
              </span>
            </div>

            {/* Massive Trustworthy Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Innovation Incubation Ideation Foundation
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
              Providing end-to-end support for entrepreneurs. From inception to market maturity, we provide the ecosystem to scale your vision.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#apply" className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold text-lg text-center transition-colors shadow-lg">
                Apply for Incubation
              </Link>
              <Link href="#about" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg text-center transition-all">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS - Below Hero */}
      <section className="relative z-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { number: "50+", label: "Startups Incubated" },
              { number: "₹10Cr+", label: "Funding Raised" },
              { number: "100+", label: "Expert Mentors" },
              { number: "15k+", label: "Sq.ft Workspace" },
            ].map((stat, i) => (
              <div key={i} className="py-10 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT I-3F (The 3 Pillars) - Split Layout with Image */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text & Pillars */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">About I-3F</h2>
                <div className="w-16 h-1.5 bg-brand-accent mb-6"></div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Ideation Innovation & Incubation (I-3) Foundation operates as a significant Section 8 company functioning as an umbrella organization within IIT (BHU). Our primary mission revolves around cultivating an entrepreneurial ecosystem on campus and beyond.
                </p>
              </div>

              {/* The 3 Pillars (from Vercel site) */}
              <div className="grid sm:grid-cols-3 gap-6">
                
                {/* Pillar 1 */}
                <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Training</h3>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Incubation</h3>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">Financial Support</h3>
                </div>
                
              </div>
            </div>

            {/* Right: Abstract Geometric Element */}
            <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center p-8">
              {/* Offset decorative box */}
              <div className="absolute top-8 -right-8 w-full h-full border-2 border-slate-200 z-0"></div>
              {/* Abstract Art Piece */}
              <div className="relative w-full h-full bg-white border border-slate-200 shadow-sm z-10 overflow-hidden flex flex-col">
                <div className="flex-1 bg-slate-50 flex items-center justify-center p-12">
                  <div className="relative w-full h-full">
                    {/* Concentric circles and lines for a tech/network feel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-primary/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-primary/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/5 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-brand-primary text-white rounded flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                    </div>
                    {/* Connecting lines */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-brand-primary/10"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-brand-primary/10"></div>
                  </div>
                </div>
                <div className="h-32 bg-brand-primary border-t border-brand-secondary p-8 flex flex-col justify-center">
                   <div className="text-white/70 font-mono text-sm tracking-widest uppercase mb-2">Network Hub</div>
                   <div className="text-white font-bold text-xl">Connecting Ideation to Incubation</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Teammate's Component - Refactored for Gov Aesthetic */}
      <PortfolioEcosystem />

    </div>
  );
}

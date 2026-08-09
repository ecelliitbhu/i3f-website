import PortfolioEcosystem from "../components/PortfolioEcosystem";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section className="relative w-full pt-20 pb-40 lg:pt-24 lg:pb-48 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary">
        
        {/* Decorative background shapes */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        
        {/* Distinct Floating Circles (Inspired by E-Cell main site) */}
        <div className="absolute top-32 left-1/4 w-24 h-24 rounded-full bg-white/10 pointer-events-none"></div>
        <div className="absolute bottom-40 right-1/4 w-32 h-32 rounded-full bg-white/10 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
            <svg className="w-4 h-4 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
            Innovation Ecosystem
          </div>

          {/* Huge Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 drop-shadow-sm">
            I3F <span className="text-brand-accent">Incubation</span> Process
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            Discover our comprehensive ecosystem fostering innovation, entrepreneurship, and technological advancement at IIT BHU.
          </p>

          {/* Feature Tags (Below subtitle) */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90 text-sm md:text-base font-medium mt-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              Nurturing Ideas Into Reality
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Empowering Entrepreneurs
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP (Inspired by main site overlapping cards) */}
      <section className="relative z-20 -mt-20 mb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "50+", label: "Startups Incubated" },
              { number: "₹10Cr+", label: "Funding Raised" },
              { number: "100+", label: "Expert Mentors" },
              { number: "15k+", label: "Sq.ft Workspace" },
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none dark:border dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-3">{stat.number}</div>
                <div className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-brand-primary">I3F</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Discover our comprehensive ecosystem fostering innovation, entrepreneurship, and technological advancement at IIT BHU.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Ideation Innovation & Incubation (I-3) Foundation
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
              The I-3 Foundation is a dedicated incubator located at the Indian Institute of Technology (BHU), Varanasi. Our mission is to foster a culture of innovation and entrepreneurship among students, faculty, and the wider community. We provide an ecosystem that supports startups from their inception to market maturity, offering mentorship, funding, workspace, and a vast network of industry experts.
            </p>
          </div>
        </div>
      </section>

      <PortfolioEcosystem />

    </div>
  );
}

import PortfolioEcosystem from "../components/PortfolioEcosystem";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* HERO SECTION - Sleek, Enterprise SaaS Style */}
      <section className="relative w-full pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden flex flex-col items-center justify-center bg-white border-b border-slate-200">
        
        {/* Very subtle architectural grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          
          {/* Top Badge - Minimalist */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-slate-200 bg-slate-50 text-brand-primary text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
            Innovation Ecosystem
          </div>

          {/* Headline - Clean & Structured */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Empowering <span className="text-brand-primary">Innovators</span> <br className="hidden md:block" />
            to Build the Future
          </h1>

          {/* Subtitle - Professional */}
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            The I3F Incubation Process provides end-to-end support for entrepreneurs at IIT (BHU) Varanasi. From raw idea to market maturity, we help you scale.
          </p>

          {/* Actions - Flat & Bordered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <button className="px-8 py-3.5 rounded bg-brand-primary hover:bg-brand-secondary text-white text-base font-semibold transition-colors shadow-sm">
              Start Your Journey
            </button>
            <button className="px-8 py-3.5 rounded bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 text-base font-semibold transition-colors shadow-sm">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP - Minimalist Border Grid */}
      <section className="relative w-full border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200 border-x border-slate-200">
            {[
              { number: "50+", label: "Startups Incubated" },
              { number: "₹10Cr+", label: "Funding Raised" },
              { number: "100+", label: "Expert Mentors" },
              { number: "15k+", label: "Sq.ft Workspace" },
            ].map((stat, i) => (
              <div key={i} className="p-8 text-center bg-white">
                <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-brand-primary uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Clean Corporate Layout */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4">About I3F</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Ideation Innovation & Incubation Foundation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The I-3 Foundation is a dedicated incubator located at the Indian Institute of Technology (BHU), Varanasi. Our mission is to foster a culture of innovation and entrepreneurship among students, faculty, and the wider community.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive ecosystem for startups",
                  "Mentorship from industry leaders",
                  "Access to funding and vast networks",
                  "State-of-the-art workspace"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Structured Visual Element (instead of playful cards) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Innovation Hub</h3>
                <p className="text-sm text-slate-600">Core umbrella organization nurturing startups to market maturity.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mt-8">
                <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Domain Focus</h3>
                <p className="text-sm text-slate-600">Specialized incubation units like R-ABI and Cisco thingQbator.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teammate's Component - Styled internally for cohesion */}
      <PortfolioEcosystem />

    </div>
  );
}

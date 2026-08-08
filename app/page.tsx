export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section className="relative w-full pb-32 pt-20 lg:pt-32 overflow-hidden flex items-center justify-center">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-primary/10 blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/10 blur-[80px] -ml-40 -mb-40 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Empowering <span className="text-brand-primary">Innovators</span> to <br className="hidden md:block" />
            Build the Future
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            The I3F Incubation Process provides end-to-end support for entrepreneurs at IIT (BHU) Varanasi. From idea to maturity, we help you scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-secondary text-white text-lg font-medium transition-all shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-1">
              Start Your Journey
            </button>
            <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-brand-primary dark:hover:border-brand-primary text-slate-900 dark:text-white text-lg font-medium transition-all hover:-translate-y-1">
              Explore Programs
            </button>
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

    </div>
  );
}

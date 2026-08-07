export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">

      {/* HERO SECTION */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center justify-center flex-grow">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-secondary/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Empowering <span className="text-brand-primary">Innovators</span> to <br className="hidden md:block" />
            Build the Future
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
            The I3F Incubation Process provides end-to-end support for entrepreneurs at IIT (BHU) Varanasi. From idea to maturity, we help you scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-md bg-brand-primary hover:bg-brand-secondary text-white font-medium transition-colors shadow-lg">
              Start Your Journey
            </button>
            <button className="px-8 py-3 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium transition-colors">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

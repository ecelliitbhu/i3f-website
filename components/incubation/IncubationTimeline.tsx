const stages = [
  {
    number: "01",
    title: "Idea",
    description:
      "Validating the concept and problem-solution fit.",
  },
  {
    number: "02",
    title: "Startup",
    description:
      "Formal incubation, product development, and mentoring.",
  },
  {
    number: "03",
    title: "Expansion",
    description:
      "Market entry, scaling operations, and funding support.",
  },
  {
    number: "04",
    title: "Maturity",
    description:
      "Sustained growth and revenue stability.",
  },
  {
    number: "05",
    title: "Accelerator",
    description:
      "Fast-tracked growth and national/global scale-up.",
  },
];

export default function IncubationTimeline() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-brand-primary mb-3">
            Our Incubation Model
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            From Idea to Scale
          </h1>

          <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mt-6" />

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A structured incubation journey designed to support ventures
            through every stage of their growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-1 bg-brand-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-5">

            {stages.map((stage) => (
              <div
                key={stage.number}
                className="relative flex flex-col items-center text-center"
              >

                {/* Number */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {stage.number}
                </div>

                {/* Stage */}
                <h2 className="mt-6 text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {stage.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {stage.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
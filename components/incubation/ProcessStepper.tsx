const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your idea or startup profile through the open call for applications.",
  },
  {
    number: "02",
    title: "Screening",
    description:
      "Initial screening of applications for eligibility and domain fit.",
  },
  {
    number: "03",
    title: "Incubation Committee Review (RIC)",
    description:
      "The RABI Incubation Committee reviews and shortlists applicants based on their potential and domain fit.",
  },
  {
    number: "04",
    title: "Training & Mentoring",
    description:
      "Shortlisted founders undergo structured training and mentoring, including programs such as ANKURAN.",
  },
  {
    number: "05",
    title: "Selection & Investment Committee (SIC) Review",
    description:
      "A second-level committee evaluates startups for funding.",
  },
  {
    number: "06",
    title: "Grant-in-Aid Disbursement",
    description:
      "Approved startups receive grant-in-aid to build or scale their product.",
  },
  {
    number: "07",
    title: "Incubation Support",
    description:
      "Startups receive facilities, mentoring, legal and IP support, funding linkages, and networking.",
  },
  {
    number: "08",
    title: "Graduation / Scale-up",
    description:
      "Startups graduate into the expansion and maturity stage with continued market and investor support.",
  },
];

export default function ProcessStepper() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-brand-primary mb-3">
            Entry & Selection Process
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            How the Incubation Process Works
          </h1>

          <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mt-6" />

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Follow a structured journey from submitting your idea to
            building, scaling, and growing your startup.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Vertical connecting line */}
          <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-brand-primary/20 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-5 md:gap-8 items-start"
              >

                {/* Number */}
                <div className="relative z-10 shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h2>

                  <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
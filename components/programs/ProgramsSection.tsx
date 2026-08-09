const programs = [
  {
    name: "ANKURAN",
    stage: "Pre-Seed Stage",
    funding: "Up to ₹5 Lakhs",
    description:
      "A 1-month training program for farmers, students, and youth with innovative ideas.",
    features: [
      "Incubation support for product development",
      "Platform to launch products",
      "Grant-in-aid up to ₹5 Lakhs",
    ],
  },
  {
    name: "PRASFUTAN",
    stage: "Seed Stage",
    funding: "Up to ₹25 Lakhs",
    description:
      "A 1-month residency for startups with a Minimum Viable Product (MVP).",
    features: [
      "Incubation support to scale operations",
      "Market and investor linkages",
      "Grant-in-aid up to ₹25 Lakhs",
    ],
  },
  {
    name: "SRIJAN",
    stage: "Student Entrepreneurship Programme",
    funding: "Up to ₹4 Lakhs",
    description:
      "A student-focused program supporting innovative ideas and helping convert them into real businesses, products, or technologies.",
    features: [
      "For students with innovative ideas",
      "Support to convert ideas into businesses",
      "Support for products and technologies",
    ],
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-brand-primary mb-3">
            Programs & Funding
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Programs Built for Every Stage
          </h1>

          <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mt-6" />

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Structured programs and funding opportunities designed to help
            innovators turn ideas into scalable ventures.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {programs.map((program) => (
            <div
              key={program.name}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Stage */}
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                {program.stage}
              </p>

              {/* Program Name */}
              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                {program.name}
              </h2>

              {/* Funding */}
              <div className="mt-6 inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-2">
                <span className="text-sm font-bold text-brand-primary">
                  {program.funding}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-0.5 text-brand-primary font-bold">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
        {/* Additional Funding & Support */}
<section className="mt-20">
  <div className="text-center mb-12">
    <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-brand-primary mb-3">
      Additional Support
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
      More Funding Opportunities
    </h2>

    <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mt-5" />

    <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
      Additional funding avenues and support mechanisms available to
      eligible startups and innovators.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "RKVY-RAFTAAR",
        amount: "Up to ₹25 Lakhs",
        description:
          "Seed and pre-seed funding support for eligible agri-innovation startups.",
      },
      {
        title: "JIC with Union Bank of India",
        amount: "₹2–10 Lakhs",
        description:
          "Funding support for prototyping and early-stage product development.",
      },
      {
        title: "CISCO–NASSCOM thingQbator",
        amount: "Makerspace Grants",
        description:
          "Support for AI and IoT-focused innovation and makerspace activities.",
      },
      {
        title: "IIT (BHU) Foundation, USA",
        amount: "$30,000",
        description:
          "Seed funding opportunity for selected startups.",
      },
      {
        title: "Faculty / Student Startup Fund",
        amount: "Up to ₹5 Lakhs",
        description:
          "Support from the startup fund created through the ₹5 Crore endowment.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="shrink-0 px-4 py-2 rounded-full bg-brand-primary/10">
            <span className="text-sm font-bold text-brand-primary whitespace-nowrap">
              {item.amount}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      </div>
    </section>
    
  );
}
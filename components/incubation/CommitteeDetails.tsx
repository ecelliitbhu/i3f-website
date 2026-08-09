"use client";

import { useState } from "react";

const committees = [
  {
    title: "RIC — R-ABI Incubation Committee",
    members: [
      "Institute Head / Nominee",
      "Representative from Bank / Venture Capital",
      "Industry Experts",
      "Academic Domain Experts",
      "Knowledge Partner PI",
      "R-ABI Project PI",
    ],
  },
  {
    title: "SIC — Selection & Investment Committee",
    members: [
      "Startup / Academic Leadership",
      "Agri-industry Experts",
      "Academic Experts",
      "Venture Capital / AIF / Bank Representatives",
      "Government Nominees",
      "Knowledge Partner PI",
    ],
  },
];

export default function CommitteeDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3">
            Evaluation & Selection
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Committee Details
          </h2>

          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mt-5" />

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Learn about the committees involved in reviewing and selecting
            startups during the incubation process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {committees.map((committee, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={committee.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                    {committee.title}
                  </span>

                  <span className="text-2xl text-brand-primary">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-5">
                      <ul className="space-y-3">
                        {committee.members.map((member) => (
                          <li
                            key={member}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                          >
                            <span className="text-brand-primary font-bold">
                              ✓
                            </span>

                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
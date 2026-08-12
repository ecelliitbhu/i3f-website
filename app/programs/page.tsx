import React from "react";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <Link href="/#programs" className="text-brand-primary font-bold hover:underline mb-6 inline-block">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Programs & Funding Details
            </h1>
            <div className="w-24 h-1.5 bg-brand-primary rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              From early-stage ideas to startups ready to scale, I3F provides structured programs and funding support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "ANKURAN",
                stage: "Pre-Seed Stage",
                funding: "Up to ₹5 Lakhs",
                description:
                  "1-month training program for farmers, students and youth with innovative ideas.",
                points: [
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
                  "1-month residency for startups with a Minimum Viable Product (MVP).",
                points: [
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
                  "A student-focused program supporting innovative ideas and entrepreneurship.",
                points: [
                  "For students with innovative ideas",
                  "Convert ideas into real businesses",
                  "Support for products and technologies",
                ],
              },
            ].map((program) => (
              <div
                key={program.name}
                className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                      {program.stage}
                    </p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 font-heading">
                      {program.name}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-xl bg-brand-primary/10 px-3 py-2">
                    <span className="text-sm font-bold text-brand-primary">
                      {program.funding}
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Funding & Support Avenues */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Additional Funding & Support Avenues
            </h2>
            <div className="w-16 h-1.5 bg-brand-accent mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "RKVY-RAFTAAR Seed & Pre-Seed",
                  desc: "Up to ₹25 lakhs (seed) and ₹5 lakhs (pre-seed), funded by the Ministry of Agriculture & Farmers' Welfare.",
                },
                {
                  title: "Joint Incubation Centre (JIC)",
                  desc: "With Union Bank of India: ₹2–10 lakhs funding for prototyping in software, quantum computing, cybersecurity, IoT, and data analytics.",
                },
                {
                  title: "CISCO–NASSCOM thingQbator",
                  desc: "AI/IoT-focused makerspace grants — top 10 cohort students receive ₹5 lakhs to build a prototype.",
                },
                {
                  title: "IIT (BHU) Foundation, USA",
                  desc: "Seed funding of $30,000 for selected startups from the US-based alumni organization.",
                },
                {
                  title: "Faculty/Student Startup Fund",
                  desc: "Disbursed from a ₹5 Crore endowment corpus (up to ₹5 lakhs per venture).",
                }
              ].map((fund, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{fund.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{fund.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Focus Areas */}
          <div className="mt-24 mb-10 bg-brand-primary/5 rounded-3xl p-8 md:p-12 border border-brand-primary/10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 font-heading">
              Sector Focus Areas
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              We provide start-to-end incubation, funding, and acceleration support to startups innovating across these key domains.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Agri Tech", "Bio Tech", "AI & IoT", "Clean Tech", "Farm Mechanization", "Food Tech", "E-Commerce"].map((sector, i) => (
                <span key={i} className="px-6 py-3 bg-white text-slate-700 font-bold rounded-full shadow-sm border border-slate-200">
                  {sector}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

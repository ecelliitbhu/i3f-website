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
              <Link href="#apply" className="px-8 py-4 bg-white hover:bg-slate-100 text-brand-primary font-bold text-lg text-center transition-colors shadow-lg">
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
      

{/* PROGRAMS & FUNDING */}

<section id="programs" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
  <div className="container mx-auto px-4 max-w-7xl">

    <div className="text-center mb-16">
      <p className="text-brand-primary font-semibold uppercase tracking-wider mb-3">
        Programs & Funding
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
        Programs Built for Every Stage
      </h2>

      <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>

      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
        From early-stage ideas to startups ready to scale, I3F provides
        structured programs and funding support.
      </p>
    </div>

    {/* Main Programs */}
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
          className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
        >

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                {program.stage}
              </p>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
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

  </div>
</section>

    {/* 5. SERVICES & FACILITIES */}
    <section id="services" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-accent"></div>
            <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Beyond Funding</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">End-to-End Support & Infrastructure</h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We provide state-of-the-art infrastructure and dedicated support systems to ensure your idea scales seamlessly from prototype to enterprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
          {[
            { title: "Technical Due Diligence", icon: "🔍", desc: "Assessing technical feasibility and evaluating early prototypes for investor readiness." },
            { title: "Training Programs", icon: "📚", desc: "Access to IIT (BHU)'s deep bench of industry and academic experts." },
            { title: "Mentoring", icon: "🤝", desc: "One-on-one guidance from experienced mentors across domains." },
            { title: "Funding Support", icon: "💰", desc: "Assistance in accessing funds from DST, MSME, various Ministries, and CSR sources." },
            { title: "Legal Advice", icon: "⚖️", desc: "Connections to legal firms for compliance and structuring." },
            { title: "IP Creation", icon: "🛡️", desc: "Support via IIT (BHU)'s own IP creation and protection policy." },
            { title: "Networking Support", icon: "🌐", desc: "Access to IIT (BHU)'s extensive alumni and industry network." },
          ].map((service, i) => (
            <div key={i} className="group p-6 border border-slate-200 hover:border-brand-primary hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Facilities Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Infrastructure Built for Builders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-brand-primary mb-3 uppercase tracking-wider text-sm">Lab & Equipment</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cold Room, Fermenters, Chemical Workstation, Hot Air Oven, PCR, Gel Doc Systems, Gel Electrophoresis, Deep Freezer, Cell Sonicator, Polarizing Microscope.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-brand-primary mb-3 uppercase tracking-wider text-sm">Workspace & Utilities</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Office Space, Computer Systems, Printers, Internet/Wi-Fi, Photocopier, Conference Hall, Training Hall, Prototype & Testing Area, Utility Area, Backup Power.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-brand-primary mb-3 uppercase tracking-wider text-sm">Institute-Level Facilities</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                HR-TEM, HR-SEM, SEM, SPM, 500MHz NMR, Magnetic Property Measurement System, HR-XRD, BT-XRD, PCB Prototyping Machine, Ion Chromatography, Makers Space, Designer Space, Tool Room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 8. ACHIEVEMENTS */}
    <section id="achievements" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Overall Impact & Track Record</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Driving real economic change and empowering entrepreneurs.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6 text-center">
          {[
            { stat: "195", label: "Startups Trained" },
            { stat: "62", label: "Startups Incubated" },
            { stat: "₹500L+", label: "Grant Disbursed" },
            { stat: "14", label: "Patents Granted" },
            { stat: "₹30Cr+", label: "Revenue Generated" },
            { stat: "290+", label: "Direct Jobs Created" },
          ].map((ach, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">{ach.stat}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/80">{ach.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 9. VISION & FUTURE */}
    <section id="vision" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-accent"></div>
            <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Where We're Headed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Vision for the Future</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            As I3F completes its third year, it is entering a new phase — moving from an agriculture-focused Business Incubation Centre toward a diversified, holistically funded innovation ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Key Pillars</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><strong className="text-slate-900">Diversified Funding:</strong> Eligibility for foreign grants, CSR funds, and additional government grants.</li>
              <li><strong className="text-slate-900">Holistic Ecosystem:</strong> Financial backing combined with mentorship and state-of-the-art facilities.</li>
              <li><strong className="text-slate-900">Innovation & Impact:</strong> Priority on Agriculture, Clean Energy, Health, AI/ML, and Women Empowerment.</li>
              <li><strong className="text-slate-900">Sustainable Growth:</strong> Aligning with CSR and sustainable development goals.</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-brand-primary mb-4">$1 Trillion UP Economy</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>Driving agripreneurship to boost rural income.</li>
              <li>Enabling deep-tech startups in AI, IoT, renewable energy, and healthcare.</li>
              <li>Building export-ready startups in sustainable fabrics and green tech.</li>
              <li>Enhancing youth employment and human capital development.</li>
            </ul>
          </div>

          <div className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-slate-50">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Roadmap Ahead</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>Expand startup cohorts in green energy, circular economy, and rural development.</li>
              <li>Establish Regional Innovation & Startup Hubs across Eastern UP.</li>
              <li>Scale mentorship and funding networks with global partners.</li>
              <li>Support Atmanirbhar Bharat by nurturing 1,000+ startups over the next 5 years.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* 10. CONTACT SECTION */}
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to scale your idea?</h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Link href="/incubation/how-to-join" className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold transition-colors shadow-lg w-full sm:w-auto">
            Apply for Incubation
          </Link>
          <Link href="mailto:i3f@iitbhu.ac.in" className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold transition-colors shadow-lg w-full sm:w-auto">
            Partner With Us
          </Link>
          <Link href="mailto:i3f@iitbhu.ac.in" className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white transition-colors w-full sm:w-auto font-bold text-slate-300 hover:text-white">
            Contact Our Team
          </Link>
        </div>

        <div className="max-w-2xl mx-auto border-t border-slate-800 pt-12">
          <div className="mb-4 text-brand-accent font-bold uppercase tracking-widest text-sm">Visit Us</div>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Ideation Innovation & Incubation (I-3) Foundation<br/>
            Opposite IIT (BHU) Proctor Office,<br/>
            Indian Institute of Technology (BHU), Varanasi - 221005 (UP)
          </p>
          <p className="text-lg font-bold text-white">
            <a href="mailto:i3f@iitbhu.ac.in" className="hover:text-brand-accent transition-colors">i3f@iitbhu.ac.in</a>
          </p>
        </div>
      </div>
    </section>

    </div>
  );
}

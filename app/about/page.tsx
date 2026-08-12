"use client";

import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Sprout, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-slate-50 font-sans min-h-screen pt-20">
      
      {/* Header */}
      <section className="bg-brand-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-heading"
          >
            About I-3F
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Cultivating an entrepreneurial ecosystem on campus and beyond, empowering visionaries to build sustainable and impactful startups.
          </motion.p>
        </div>
      </section>

      {/* CORE PILLARS (Training, Incubation, Financial Support) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          >
            
            {/* Training */}
            <div className="flex flex-col items-center group">
              <div className="w-48 h-48 mb-8 relative flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-brand-primary/5 transition-colors">
                <Image src="/images/brain.webp" alt="Training" fill className="object-contain p-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Training</h3>
            </div>

            {/* Incubation */}
            <div className="flex flex-col items-center group">
              <div className="w-48 h-48 mb-8 relative flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-brand-primary/5 transition-colors">
                <Image src="/images/hands.webp" alt="Incubation" fill className="object-contain p-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Incubation</h3>
            </div>

            {/* Financial Support */}
            <div className="flex flex-col items-center group">
              <div className="w-48 h-48 mb-8 relative flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-brand-primary/5 transition-colors">
                <Image src="/images/money.webp" alt="Financial support" fill className="object-contain p-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Financial support</h3>
            </div>

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 max-w-4xl mx-auto text-center md:text-left text-lg text-slate-600 leading-relaxed"
          >
            <p className="mb-6">
              The Ideation Innovation & Incubation (I-3) Foundation, known as I-3F, operates as a significant Section 8 company functioning as an umbrella organization within IIT (BHU) in Varanasi. Its primary mission revolves around cultivating an entrepreneurial ecosystem and nurturing fledgling startups.
            </p>
            <p>
              I-3F serves as a comprehensive support system, offering what it terms as 'Start to Scale' assistance for budding entrepreneurs. From ideation to scaling operations, the foundation provides an extensive array of resources and guidance crucial for entrepreneurial success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section id="leadership" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-brand-accent"></div>
              <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Governance & Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Guided by Visionaries</h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A seven-member Managing Committee, comprising the Director and senior faculty, monitors innovation and entrepreneurship activity across I3F on an ongoing basis.
            </p>
          </div>

          {/* Organizational Flow Diagram */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto mb-20 bg-slate-50 p-8 rounded-2xl border border-slate-200"
          >
            <h3 className="text-center font-bold text-brand-primary mb-8 uppercase tracking-widest text-sm">Organizational Structure</h3>
            <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
              <div className="flex-1 bg-white p-4 border border-slate-200 shadow-sm rounded-lg w-full">
                <div className="font-bold text-slate-900">Chairman</div>
                <div className="text-xs text-slate-500 mt-1">Director, IIT (BHU)</div>
              </div>
              <div className="hidden md:block text-brand-accent text-2xl">&rarr;</div>
              <div className="md:hidden text-brand-accent text-2xl">&darr;</div>
              <div className="flex-1 bg-white p-4 border border-slate-200 shadow-sm rounded-lg w-full">
                <div className="font-bold text-slate-900">Board of Directors</div>
                <div className="text-xs text-slate-500 mt-1">Founding Directors, I3F</div>
              </div>
              <div className="hidden md:block text-brand-accent text-2xl">&rarr;</div>
              <div className="md:hidden text-brand-accent text-2xl">&darr;</div>
              <div className="flex-1 bg-white p-4 border border-slate-200 shadow-sm rounded-lg w-full">
                <div className="font-bold text-slate-900">Mentors & Experts</div>
                <div className="text-xs text-slate-500 mt-1">Domain Specialists</div>
              </div>
              <div className="hidden md:block text-brand-accent text-2xl">&rarr;</div>
              <div className="md:hidden text-brand-accent text-2xl">&darr;</div>
              <div className="flex-1 bg-brand-primary p-4 border border-brand-primary shadow-sm rounded-lg w-full text-white">
                <div className="font-bold">Incubatees</div>
                <div className="text-xs text-white/70 mt-1">Startup Founders</div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Profiles */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {[
              { name: "Prof. Amit Patra", role: "Director, IIT (BHU) Varanasi & Chairman, I3F", img: "/images/leadership/amit_patra.png" },
              { name: "Prof. Vikas Kumar Dubey", role: "DORD & Member, Managing Committee", img: "/images/leadership/vikas_dubey.jpg" },
              { name: "Prof. Rajnesh Tyagi", role: "Registrar & Member, Managing Committee", img: "/images/leadership/rajnesh_tyagi.jpg" },
              { name: "Prof. R.S. Singh", role: "Coordinator, I-DAPT Hub & Member, Managing Committee", img: "/images/leadership/rs_singh.jpg" },
              { name: "Prof. Rajesh Kumar Upadhyay", role: "Member, Managing Committee (Dept. of Chemical Eng.)", img: "/images/leadership/rajesh_upadhyay.jpg" },
              { name: "Prof. Manoj Kumar Meshram", role: "Member, Managing Committee (Dept. of Electronics Eng.)", img: "/images/leadership/manoj_meshram.jpg" },
            ].map((leader, i) => (
              <div key={i} className="text-center group w-full sm:w-72">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/0 transition-colors z-10 pointer-events-none"></div>
                  {leader.img ? (
                    <Image src={leader.img} alt={leader.name} fill className="object-cover" sizes="128px" />
                  ) : (
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{leader.name}</h3>
                <p className="text-sm text-slate-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIDER ECOSYSTEM */}
      <section id="ecosystem" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-brand-accent"></div>
              <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Wider Network</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Wider Entrepreneurial Ecosystem at IIT (BHU)</h2>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mx-auto md:mx-0">
              I3F works in close coordination with the broader ecosystem at IIT (BHU) to provide startups with unparalleled access to research, alumni networks, and cross-disciplinary expertise.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* I-DAPT Hub */}
            <div className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">I-DAPT Hub Foundation</h3>
              <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                A Section 8 company under the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS), DST. Operating alongside I3F, it specializes in Data Analytics and Predictive Technologies, offering startups access to cutting-edge research in Telecommunications, Power, Defense, and Healthcare.
              </p>
            </div>
            
            {/* IIT (BHU) Foundation */}
            <div className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">IIT (BHU) Foundation, USA</h3>
              <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                A US-based alumni organization actively supporting I3F by mentoring founders, facilitating international market access, and providing seed funding grants (up to $30,000) for high-potential startups.
              </p>
            </div>

            {/* Campus Ecosystem */}
            <div className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Campus Ecosystem</h3>
              <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                Incubatees benefit from the dense concentration of technical talent (students and faculty) at IIT (BHU), multiple Centers of Excellence, and specialized laboratories across 15+ engineering and science departments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & FUTURE */}
      <section id="vision" className="py-24 bg-white border-b border-slate-200">
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="bg-slate-50 p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Key Pillars</h3>
              <ul className="space-y-4 text-sm text-slate-600 list-disc pl-5">
                <li><strong className="text-slate-900">Diversified Funding:</strong> Eligibility for foreign grants, CSR funds, and additional government grants.</li>
                <li><strong className="text-slate-900">Holistic Ecosystem:</strong> Financial backing combined with mentorship and state-of-the-art facilities.</li>
                <li><strong className="text-slate-900">Innovation & Impact:</strong> Priority on Agriculture, Clean Energy, Health, AI/ML, and Women Empowerment.</li>
                <li><strong className="text-slate-900">Sustainable Growth:</strong> Aligning with CSR and sustainable development goals.</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brand-primary mb-4">$1 Trillion UP Economy</h3>
              <ul className="space-y-4 text-sm text-slate-600 list-disc pl-5">
                <li>Driving agripreneurship to boost rural income.</li>
                <li>Enabling deep-tech startups in AI, IoT, renewable energy, and healthcare.</li>
                <li>Building export-ready startups in sustainable fabrics and green tech.</li>
                <li>Enhancing youth employment and human capital development.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Roadmap Ahead</h3>
              <ul className="space-y-4 text-sm text-slate-600 list-disc pl-5">
                <li>Expand startup cohorts in green energy, circular economy, and rural development.</li>
                <li>Establish Regional Innovation & Startup Hubs across Eastern UP.</li>
                <li>Scale mentorship and funding networks with global partners.</li>
                <li>Support Atmanirbhar Bharat by nurturing 1,000+ startups over the next 5 years.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

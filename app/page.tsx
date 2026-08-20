"use client";

import { useState } from "react";
import PortfolioEcosystem from "../components/PortfolioEcosystem";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Training",
      icon: (
        <Image src="/images/brain.webp" alt="Training" width={24} height={24} className="object-contain" />
      ),
      content: "We provide comprehensive training programs for entrepreneurs to build foundational business skills and technical acumen.",
    },
    {
      title: "Incubation",
      icon: (
        <Image src="/images/hands.webp" alt="Incubation" width={24} height={24} className="object-contain" />
      ),
      content: "Our incubation programs offer dedicated workspace, mentoring, and end-to-end support for startups from inception to market maturity.",
    },
    {
      title: "Financial Support",
      icon: (
        <Image src="/images/money.webp" alt="Financial Support" width={24} height={24} className="object-contain" />
      ),
      content: "We facilitate seed funding, grants, and connect founders with a network of investors to ensure sustainable scaling.",
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 font-sans">
      
      {/* HERO SECTION - Modern Government/Authority Style */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-brand-dark overflow-hidden">
        {/* Real Photo Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_collage_bg.png" 
            alt="I-3F Incubator Activities" 
            fill 
            className="object-cover mix-blend-luminosity opacity-40"
            priority 
          />
          {/* Deep I3F plum overlay keeps the hero readable over the photo. */}
          <div className="absolute inset-0 bg-brand-dark/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/20"></div>
        </div>

        {/* Abstract Geometric Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-1 bg-brand-accent"></div>
              <span className="uppercase tracking-[0.2em] text-white/90 font-bold text-sm">
                IIT (BHU) Varanasi
              </span>
            </div>

            {/* Massive Trustworthy Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-heading">
              Ideation Innovation &amp; Incubation Foundation
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
              Providing end-to-end support for entrepreneurs. From inception to market maturity, we provide the ecosystem to scale your vision.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#apply" className="px-8 py-4 bg-white hover:bg-slate-100 text-brand-primary font-bold text-lg text-center transition-colors shadow-lg rounded-full">
                Apply for Incubation
              </Link>
              <Link href="/programs" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg text-center transition-all rounded-full">
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UNIFIED STATS - Below Hero */}
      <section className="relative z-20 bg-white py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-x-0 lg:divide-x divide-slate-100">
            {[
              { number: "195+", label: "Startups Trained" },
              { number: "62+", label: "Startups Incubated" },
              { number: "₹10Cr+", label: "Funding Raised" },
              { number: "14", label: "Patents Granted" },
              { number: "₹30Cr+", label: "Revenue Generated" },
              { number: "290+", label: "Direct Jobs Created" },
            ].map((stat, i) => (
              <div key={i} className="py-4">
                <div className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT I-3F (Interactive Tabs) */}
      <section id="about" className="py-24 bg-[#f5f0f4]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-brand-accent"></div>
              <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Our Core Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 font-heading">About I-3F</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              The Ideation Innovation & Incubation (I-3) Foundation operates as a significant Section 8 company functioning as an umbrella organization within IIT (BHU). Our primary mission revolves around cultivating an entrepreneurial ecosystem on campus and beyond.
            </p>
          </div>

          {/* Interactive Pillars Tabs */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex border-b border-slate-100">
              {pillars.map((pillar, i) => (
                <button
                  key={i}
                  onClick={() => setActivePillar(i)}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-4 font-bold text-sm md:text-base transition-colors ${activePillar === i ? 'bg-brand-primary text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-brand-primary'}`}
                >
                  <span className={`p-1.5 rounded-full ${activePillar === i ? 'bg-white/20' : 'bg-slate-200'}`}>
                    {pillar.icon}
                  </span>
                  {pillar.title}
                </button>
              ))}
            </div>
            <div className="p-8 md:p-12 text-left min-h-[200px] flex items-center bg-white relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillars[activePillar].title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {pillars[activePillar].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-brand-primary bg-white border border-brand-primary/20 rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-md">
              Learn More About Our Team & Vision &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Teammate's Component */}
      <PortfolioEcosystem />
      
      {/* COMBINED CTA: PROGRAMS & FACILITIES */}
      <section className="py-24 bg-[#f5f0f4]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programs Card */}
            <div className="bg-white rounded-2xl p-10 border border-slate-200 flex flex-col items-start justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Programs & Funding</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  From early-stage ideas to startups ready to scale, I3F provides structured programs (ANKURAN, PRASFUTAN, SRIJAN) and funding support up to ₹25 Lakhs.
                </p>
              </div>
              <Link href="/programs" className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center gap-2">
                Explore All Programs <span>&rarr;</span>
              </Link>
            </div>
            
            {/* Facilities Card */}
            <div className="bg-white rounded-2xl p-10 border border-slate-200 flex flex-col items-start justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">End-to-End Infrastructure</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We provide state-of-the-art infrastructure, from Cold Rooms and 500MHz NMRs to PCB Prototyping and dedicated workspace, alongside mentoring and legal advice.
                </p>
              </div>
              <Link href="/facilities" className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center gap-2">
                View Incubator Gallery <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
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

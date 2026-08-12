"use client";

import Link from "next/link";
import { Trophy, Medal, Award, Star, Crown, ShieldCheck, TrendingUp, Leaf, Zap } from "lucide-react";

const awards = [
  { company: "Titlis Engg. & Projects", award: "Gujarat Leadership Award", detail: "Best Product of the Year", icon: <Trophy className="w-6 h-6" /> },
  { company: "JVKS Agrotech", award: "RAFTAAR Agri-startup Award", detail: "Received by Hon'ble Ag. Minister", icon: <Leaf className="w-6 h-6" /> },
  { company: "Manwani's Pearl Culture", award: "Top 50 Innovative Startups", detail: "StartIn UP", icon: <Star className="w-6 h-6" /> },
  { company: "Rosehub Edutech", award: "National Winner", detail: "Ministry of Education Innovation Cell", icon: <Crown className="w-6 h-6" /> },
  { company: "Frenzy Farm LLP", award: "Best Emerging Startup", detail: "Agri-Tech Expo 2022", icon: <TrendingUp className="w-6 h-6" /> },
  { company: "Rudranjali Innovative Agritech", award: "Sustainability Innovator", detail: "Green India Awards", icon: <ShieldCheck className="w-6 h-6" /> },
  { company: "Healventure Biosciences", award: "Bio-Innovation Excellence", detail: "Biotech Startup Expo", icon: <Zap className="w-6 h-6" /> },
  { company: "Sedax Data Solution", award: "Top Tech Pioneer", detail: "NASSCOM DeepTech Club", icon: <Award className="w-6 h-6" /> },
  { company: "Agrifeeder Pvt. Ltd.", award: "Social Impact Award", detail: "Rural Development Ministry", icon: <Medal className="w-6 h-6" /> }
];

const units = [
  { code: "R-ABI", name: "RKVY-RAFTAAR Agri Business Incubator", text: "Operational since Jan 2019 under the Ministry of Agriculture & Farmers' Welfare's scheme, promoting agripreneurship through extensive financial support and incubation.", colorClass: "border-t-emerald-500", image: "/images/logos/rkvy_logo.png" },
  { code: "JIC", name: "Joint Incubation Centre", text: "Established in 2023 with Union Bank of India. Enables innovation in software, quantum computing, cybersecurity, IoT, and data analytics with a focus on social impact and women entrepreneurs.", colorClass: "border-t-blue-500", image: "/images/logos/jic_logo.png" },
  { code: "CISCO", name: "Cisco thingQbator", text: "An AI/IoT-focused makerspace launched in 2018 via Cisco's CSR with NASSCOM Foundation. Runs hackathons, workshops, and internship tracks (Learning, Project, Startup).", colorClass: "border-t-violet-500", image: "/images/logos/cisco_logo.png" },
  { code: "E-CELL", name: "Entrepreneurship Cell", text: "A student-run Entrepreneurship Cell that actively builds entrepreneurial awareness on campus through specialized workshops, ideation sessions, and capacity-building programs.", colorClass: "border-t-brand-accent", image: "/images/logos/ecell_logo.webp" },
];

const partners = ["IARI, New Delhi", "NIAM, Jaipur", "MANAGE, Hyderabad", "UAS, Dharwad", "AAU, Jorhat", "25+ Incubators Nationwide"];

const caseStudies = [
  { company: "Sikhar Vaidik Krishi Kendra Pvt. Ltd.", eyebrow: "Climate-resilient natural farming", headline: "Reviving India's farmland - one cow, one compost bed, one empowered woman at a time.", revenue: "Rs. 11+ Cr", metric: "500+ hectares", metricLabel: "converted to organic farming", evidence: ["Engaged 700+ rural stakeholders", "Winner, Kabeer Kohinoor Award for climate-resilient natural farming"] },
  { company: "Divavi Enterprises", eyebrow: "Gaon Ka Bazaar", headline: "Connecting rural producers to urban markets.", revenue: "Rs. 4.5+ Cr", metric: "200+ farmers", metricLabel: "directly benefitted", evidence: ["Backed by NAFED, NABARD and APEDA", "Recognised by Startup India and Startup Odisha"] },
  { company: "ExFlair Trade Private Limited", eyebrow: "Sustainable aquaculture", headline: "A sustainable way to grow fish at high density.", revenue: "Rs. 3+ Cr", metric: "G20 selected", metricLabel: "among 30 agri startups", evidence: ["Selected for the G20 Meet, Hyderabad", "Multiple national fish-farming awards"] },
  { company: "Heal Venture Biosciences LLP", eyebrow: "Sustainable fisheries", headline: "Insect-protein aquafeed for a stronger, more sustainable fisheries sector.", revenue: "Rs. 44+ Lakhs", metric: "Patent granted", metricLabel: "for its innovation", evidence: ["Winner, Fisheries Grand Challenge 2022", "Grants secured from IIT-BHU, DST and Ministry of Fisheries"] },
];

const moreStories = [
  { name: "Manwani's Innovative Pearl Culture", text: "India's first organic freshwater pearl farming model.", tag: "Secondary agriculture" },
  { name: "Delbrone Innovation Pvt. Ltd.", text: "Anti-drone systems designed for a safer future.", tag: "Deep Tech" },
  { name: "Triphan Healthcare Pvt. Ltd.", text: "Nanotechnology-based antimicrobial products.", tag: "Healthcare" },
  { name: "BondU Labs Pvt. Ltd.", text: "AI-driven matchmaking and lead capture for trade shows.", tag: "Event Tech" },
];

export default function PortfolioEcosystem() {
  return <>

    <section id="units" className="py-24 bg-white border-t border-slate-200"><div className="container mx-auto max-w-7xl px-4 lg:px-8"><div className="mx-auto mb-16 max-w-2xl text-center"><div className="inline-flex justify-center items-center gap-2 mb-4"><div className="w-8 h-1 bg-brand-accent"></div><span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Support system</span></div><h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">One ecosystem, multiple engines</h2><p className="mt-6 text-lg text-slate-600 leading-relaxed">Specialised units that meet founders wherever their idea begins.</p></div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">{units.map((unit) => <article key={unit.code} className={`group relative border border-slate-200 bg-white p-8 transition-all duration-200 hover:shadow-md border-t-4 ${unit.colorClass}`}><div className="flex justify-between items-start mb-4"><div className="text-sm font-black text-brand-accent uppercase tracking-widest">{unit.code}</div>{unit.image ? <div className="w-16 h-16 bg-white flex items-center justify-center p-1"><img src={unit.image} alt={`${unit.code} Logo`} className="w-full h-full object-contain drop-shadow-sm" /></div> : <div className="w-10 h-10 rounded border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer group-hover:border-brand-primary transition-colors" title={`Upload ${unit.code} Logo`}><span className="text-[7px] text-slate-400 group-hover:text-brand-primary font-bold">LOGO</span></div>}</div><h3 className="text-xl font-bold text-slate-900 leading-tight">{unit.name}</h3><p className="mt-4 text-sm leading-relaxed text-slate-600">{unit.text}</p></article>)}</div></div></section>

    <section id="network" className="bg-brand-primary py-24 text-white"><div className="container mx-auto max-w-7xl px-4 lg:px-8"><div className="grid items-center gap-16 lg:grid-cols-[1fr_1.35fr]"><div><div className="inline-flex items-center gap-2 mb-6"><div className="w-8 h-1 bg-brand-accent"></div><span className="uppercase tracking-[0.2em] text-white/80 font-bold text-sm">National network</span></div><h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Connected across India&apos;s innovation landscape.</h2><p className="mt-6 text-lg leading-relaxed text-white/80">I3F/R-ABI is part of a nationwide network of RKVY-RAFTAAR knowledge partners, agricultural universities and incubators.</p><div className="mt-10 flex items-center gap-6"><div className="text-5xl font-black text-brand-accent">25+</div><div className="text-sm text-white/70 max-w-[200px] leading-relaxed font-medium">associated incubators across IITs, agricultural universities and ICAR institutes</div></div></div><div className="grid grid-cols-2 gap-4">{partners.map((partner) => <div key={partner} className="flex min-h-24 items-end border border-white/20 bg-white/5 p-6 text-base font-bold text-white backdrop-blur-sm">{partner}</div>)}</div></div></div></section>

    <section id="stories" className="bg-slate-50 py-24 border-t border-slate-200"><div className="container mx-auto max-w-7xl px-4 lg:px-8"><div className="mx-auto mb-16 max-w-3xl text-center"><div className="inline-flex justify-center items-center gap-2 mb-4"><div className="w-8 h-1 bg-brand-accent"></div><span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Success stories</span></div><h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Stories of impact</h2><p className="mt-6 text-lg text-slate-600 leading-relaxed">Four founders, four different challenges, and a shared commitment to building measurable change.</p></div><div className="grid gap-8 md:grid-cols-2">{caseStudies.map((study, index) => <article key={study.company} className="group border border-slate-200 bg-white transition-all duration-200 hover:border-brand-primary hover:shadow-lg"><div className="border-b border-slate-100 bg-slate-50 p-8 lg:p-10"><p className="mb-4 text-[10px] font-bold tracking-widest text-brand-accent uppercase">Case study 0{index + 1} &mdash; {study.eyebrow}</p><h3 className="text-2xl md:text-3xl font-bold leading-tight text-slate-900">{study.headline}</h3><p className="mt-6 text-sm font-bold text-brand-primary uppercase tracking-wide">{study.company}</p></div><div className="p-8 lg:p-10"><div className="grid grid-cols-2 gap-6 border-b border-slate-100 pb-8"><div><p className="text-3xl font-black text-slate-900">{study.revenue}</p><p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">revenue to date</p></div><div><p className="text-3xl font-black text-slate-900">{study.metric}</p><p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">{study.metricLabel}</p></div></div><ul className="mt-8 space-y-4">{study.evidence.map((item) => <li key={item} className="flex items-start gap-4 text-sm text-slate-700 font-medium"><svg className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>{item}</li>)}</ul></div></article>)}</div><div className="mt-20 border-t border-slate-200 pt-16"><div className="mb-10 flex items-baseline justify-between gap-5"><h3 className="text-2xl font-bold text-slate-900">More ventures creating impact</h3><span className="hidden text-sm font-bold text-slate-400 uppercase tracking-wider sm:block">Across deep tech, healthcare, fisheries and agriculture</span></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{moreStories.map((item) => <article key={item.name} className="border border-slate-200 bg-white p-8 transition duration-200 hover:border-brand-primary hover:shadow-md"><p className="text-[10px] font-bold tracking-widest text-brand-accent uppercase mb-3">{item.tag}</p><h4 className="font-bold text-slate-900 text-lg leading-tight">{item.name}</h4><p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.text}</p></article>)}</div></div></div></section>

    <section id="awards" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-accent"></div>
            <span className="uppercase tracking-[0.2em] text-brand-primary font-bold text-sm">Awards & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Recognized Nationally</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">Our incubated startups are consistently recognized across major national platforms for their innovative impact.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col justify-center p-8 bg-white border border-slate-200 hover:border-brand-primary hover:shadow-xl transition-all duration-300 rounded-2xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white group-hover:-translate-y-1 transition-all shadow-sm">
                  {award.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2 group-hover:text-brand-primary transition-colors">{award.company}</h3>
                  <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">{award.award}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{award.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>;
}

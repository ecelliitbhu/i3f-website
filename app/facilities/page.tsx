"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, BookOpen, Users, Coins, Scale, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/#services" className="text-brand-primary font-bold hover:underline mb-6 inline-block">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Incubator Gallery & Facilities
            </h1>
            <div className="w-24 h-1.5 bg-brand-primary rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              We provide state-of-the-art infrastructure and dedicated support systems to ensure your idea scales seamlessly from prototype to enterprise.
            </p>
          </motion.div>

          {/* Incubator Gallery Placeholders */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Incubator Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Collaborative Workspace", id: "workspace.jpg" },
                { title: "Hardware & Electronics Lab", id: "hardware_lab.jpg" },
                { title: "Incubator Building", id: "bio_lab.jpg" },
              ].map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="block bg-white rounded-xl overflow-hidden group shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-video w-full overflow-hidden block bg-slate-100">
                    <Image 
                      src={`/images/gallery/${item.id}`} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-4 md:p-5 border-t border-slate-100 bg-white">
                    <h3 className="text-slate-900 font-bold text-lg">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20"
          >
            {[
              { title: "Technical Due Diligence", icon: <Search className="w-8 h-8 text-brand-primary" />, desc: "Assessing technical feasibility and evaluating early prototypes for investor readiness." },
              { title: "Training Programs", icon: <BookOpen className="w-8 h-8 text-brand-primary" />, desc: "Access to IIT (BHU)'s deep bench of industry and academic experts." },
              { title: "Mentoring", icon: <Users className="w-8 h-8 text-brand-primary" />, desc: "One-on-one guidance from experienced mentors across domains." },
              { title: "Funding Support", icon: <Coins className="w-8 h-8 text-brand-primary" />, desc: "Assistance in accessing funds from DST, MSME, various Ministries, and CSR sources." },
              { title: "Legal Advice", icon: <Scale className="w-8 h-8 text-brand-primary" />, desc: "Connections to legal firms for compliance and structuring." },
              { title: "IP Creation", icon: <Shield className="w-8 h-8 text-brand-primary" />, desc: "Support via IIT (BHU)'s own IP creation and protection policy." },
              { title: "Networking Support", icon: <Globe className="w-8 h-8 text-brand-primary" />, desc: "Access to IIT (BHU)'s extensive alumni and industry network." },
            ].map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={i} 
                className="group p-6 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:border-brand-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Facilities Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center font-heading">Infrastructure Built for Builders</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-brand-primary mb-3 uppercase tracking-wider text-sm">Lab & Equipment</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cold Room, Fermenters, Chemical Workstation, Hot Air Oven, PCR, Gel Doc Systems, Gel Electrophoresis, Deep Freezer, Cell Sonicator, Polarizing Microscope.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-3 uppercase tracking-wider text-sm">Workspace & Utilities</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Office Space, Computer Systems, Printers, Internet/Wi-Fi, Photocopier, Conference Hall, Training Hall, Prototype & Testing Area, Utility Area, Backup Power (3 Online UPS + 15 KVA DG Set).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-3 uppercase tracking-wider text-sm">Institute-Level Facilities</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                  <span className="font-semibold block mb-1">Central Instrumentation Facility:</span>
                  HR-TEM, HR-SEM, SEM, SPM, 500MHz NMR, Magnetic Property Measurement System, HR-XRD, BT-XRD, Particle Image Velocimetry, PCB Prototyping Machine, Ion Chromatography, Multi Function Tribometer, FTIR, TGA, DSC, BET Surface Area Analysis, ICP-MS, XPS, Confocal Laser Scanning Microscopy.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-semibold block mb-1">Precision Engineering Hub:</span>
                  Makers Space, Designer Space, Tool Room, and Product Design & Development Space.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

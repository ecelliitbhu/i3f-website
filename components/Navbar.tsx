import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <img 
            src="https://www.google.com/s2/favicons?domain=iitbhu.ac.in&sz=128" 
            alt="IIT BHU Logo" 
            className="w-12 h-12 object-contain drop-shadow-sm"
          />

          <Link
            href="/"
            className="font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white ml-2"
          >
            Ideation Innovation &amp; Incubation Foundation
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">

          <Link
            href="/about"
            className="hover:text-brand-primary transition-colors"
          >
            About I3F
          </Link>

          <Link
            href="/incubation/incubation-model"
            className="hover:text-brand-primary transition-colors"
          >
            Incubation Model
          </Link>

          <Link
            href="/incubation/how-to-join"
            className="hover:text-brand-primary transition-colors"
          >
            How to Join
          </Link>

          <Link
            href="/programs-and-funding"
            className="hover:text-brand-primary transition-colors"
          >
            Programs
          </Link>

          <Link
            href="/startups"
            className="hover:text-brand-primary transition-colors"
          >
            Portfolio
          </Link>

          <Link
            href="/facilities"
            className="hover:text-brand-primary transition-colors"
          >
            Services
          </Link>

          <Link
            href="/#contact"
            className="hover:text-brand-primary transition-colors"
          >
            Contact
          </Link>

        </nav>
        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/incubation/how-to-join"
            className="px-4 py-2 rounded-md bg-brand-primary hover:bg-brand-secondary text-white text-sm font-medium transition-colors shadow-sm"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </header>
  );
}

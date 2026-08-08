import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="md:col-span-2">
                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 rounded bg-brand-primary flex items-center justify-center text-xs text-white">I3F</span>
                            I3F Incubation Process
                        </h3>
                        <p className="text-sm max-w-sm">
                            Empowering innovators and entrepreneurs at IIT (BHU) Varanasi. We provide end-to-end support to scale your ideas into successful startups.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                            <li><Link href="#programs" className="hover:text-brand-primary transition-colors">Programs</Link></li>
                            <li><Link href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} I3F IIT (BHU). All rights reserved.</p>
                    <p className="mt-2 md:mt-0 text-slate-500">Designed with ❤️ for Innovators</p>
                </div>
            </div>
        </footer>
    );
}

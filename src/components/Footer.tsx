import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Navayuva Bharati Infotech Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="font-semibold tracking-wider text-lg text-white">
              NAVAYUVA BHARATI INFOTECH
            </span>
          </Link>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Redefining enterprise consulting and software engineering through modern architecture, cybersecurity-first infrastructure, and intelligent automation.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/nybinfotech" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Twitter X">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/navayuvabharat-infotech/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link href="/services" className="hover:text-white transition-colors">Digital Process Automation</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Salesforce Ecosystem</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity Services</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Mortgage Services</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Data & Analytics</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Events</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Get In Touch</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <span>Megrish Tower, Patrika Nagar, Madhapur, HITEC City, Hyderabad, India</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
              <a href="mailto:info@nybinfotech.com" className="hover:text-white transition-colors">info@nybinfotech.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-500">
          &copy; {currentYear} Navayuva Bharati Infotech. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-zinc-500">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

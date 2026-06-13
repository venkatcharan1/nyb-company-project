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
            <a href="https://www.facebook.com/people/Navayuvabharat-Infotech/61565124359497/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/nyb_infotech?igsh=MTA5eXoxc3Z0YWhxdA%3D%3D" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

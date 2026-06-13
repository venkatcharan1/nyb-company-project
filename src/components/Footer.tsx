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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/nyb_infotech?igsh=MTA5eXoxc3Z0YWhxdA%3D%3D" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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

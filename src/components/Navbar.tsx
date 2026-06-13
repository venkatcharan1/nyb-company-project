"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technologies", href: "/technologies" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-zinc-200 ${
        isScrolled
          ? "py-3 shadow-sm md:bg-white/95 md:backdrop-blur-md md:border-b-zinc-200/80"
          : "py-4 md:bg-white/70 md:backdrop-blur-sm md:border-b-zinc-200/30 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Navayuva Bharati Infotech Logo"
              width={36}
              height={36}
              className="object-contain animate-fade-in"
              priority
            />
          </div>
          <span className="font-bold tracking-wider text-lg bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
            NYB
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold relative py-1 transition-colors ${
                  isActive ? "text-indigo-600" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-zinc-950 text-white hover:bg-zinc-800 transition-all gap-1.5 shadow-sm"
          >
            Start Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-600 hover:text-zinc-950 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-[69px] bg-white z-40 border-t border-zinc-200 flex flex-col p-6 shadow-xl overflow-y-auto">
          <div className="flex flex-col gap-6 mb-8 text-left">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold transition-colors ${
                    isActive ? "text-indigo-600" : "text-zinc-800 hover:text-zinc-950"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Start Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
}

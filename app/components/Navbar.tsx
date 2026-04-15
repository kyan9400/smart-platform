"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Equipment", href: "#equipment" },
  { label: "Categories", href: "#categories" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1a3a6b] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-[#1a3a6b] font-bold text-xs">SP</div>
          <span className="font-bold text-lg tracking-wide">Smart Platform</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-yellow-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+1234567890" className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
            <Phone size={14} />
            <span>+1 234 567 890</span>
          </a>
          <a href="#" className="border border-white/40 px-4 py-1.5 rounded text-sm hover:bg-white/10 transition-colors">Login</a>
          <a href="#" className="bg-yellow-400 text-[#1a3a6b] px-4 py-1.5 rounded text-sm font-semibold hover:bg-yellow-300 transition-colors">Get Started</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#152d56] px-4 pb-4 flex flex-col gap-3 text-sm">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="py-1.5 border-b border-white/10 hover:text-yellow-400 transition-colors" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="#" className="border border-white/40 px-4 py-2 rounded text-sm flex-1 text-center hover:bg-white/10 transition-colors">Login</a>
            <a href="#" className="bg-yellow-400 text-[#1a3a6b] px-4 py-2 rounded text-sm font-semibold flex-1 text-center hover:bg-yellow-300 transition-colors">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}

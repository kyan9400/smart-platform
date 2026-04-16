"use client";

import { SITE } from "@/app/lib/site";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import LanguageToggle from "./LanguageToggle";

type NavItem = { key: string; label: string; href: string };

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks: NavItem[] = useMemo(
    () => [
      { key: "home", label: t.nav.home, href: "/" },
      { key: "equipment", label: t.nav.equipment, href: "/#equipment" },
      { key: "categories", label: t.nav.categories, href: "/#categories" },
      { key: "offers", label: t.nav.offers, href: "/#offers" },
      { key: "about", label: t.nav.about, href: "/#why" },
      { key: "contact", label: t.nav.contact, href: "/contact" },
    ],
    [t.nav],
  );

  const linkClass = (href: string) => {
    const active =
      (href === "/contact" && pathname === "/contact") ||
      (href === "/" && pathname === "/");
    return `hover:text-yellow-400 transition-colors whitespace-nowrap ${
      active ? "text-yellow-400" : ""
    }`;
  };

  return (
    <header className="bg-[#1a3a6b] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0">
          <Image
            src="/kingdom logo.png"
            alt={SITE.companyShort}
            width={160}
            height={32}
            className="h-8 w-auto max-w-[120px] sm:max-w-[140px] object-contain object-start shrink-0"
            priority
          />
          <span className="font-bold text-sm sm:text-lg tracking-wide truncate">
            {SITE.companyFull}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium">
          {navLinks.map((l) => (
            <Link key={l.key} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          <LanguageToggle />
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 transition-colors whitespace-nowrap"
          >
            <Phone size={14} className="shrink-0" />
            <span className="hidden lg:inline">{SITE.phoneDisplay}</span>
          </a>
          <Link
            href="/#footer"
            className="border border-white/40 px-3 py-1.5 rounded text-sm hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {t.nav.login}
          </Link>
          <a
            href={SITE.mailto}
            className="bg-yellow-400 text-[#1a3a6b] px-3 py-1.5 rounded text-sm font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            {t.nav.getStarted}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2 shrink-0">
          <LanguageToggle />
          <button
            type="button"
            className="p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#152d56] px-4 pb-4 flex flex-col gap-3 text-sm border-t border-white/10">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`py-1.5 border-b border-white/10 hover:text-yellow-400 transition-colors ${linkClass(l.href)}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 py-1 text-yellow-400"
            onClick={() => setOpen(false)}
          >
            <Phone size={14} /> {SITE.phoneDisplay}
          </a>
          <div className="flex gap-2 pt-2">
            <Link
              href="/#footer"
              className="border border-white/40 px-4 py-2 rounded text-sm flex-1 text-center hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              {t.nav.login}
            </Link>
            <a
              href={SITE.mailto}
              className="bg-yellow-400 text-[#1a3a6b] px-4 py-2 rounded text-sm font-semibold flex-1 text-center hover:bg-yellow-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {t.nav.getStarted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

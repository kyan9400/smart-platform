"use client";

import { SITE } from "@/app/lib/site";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { ExternalLink, Globe, Link as LinkIcon, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

const socialIcons = [Globe, Share2, LinkIcon, ExternalLink] as const;

export default function Footer() {
  const { t } = useLanguage();

  const columns = [
    t.footer.columns.equipment,
    t.footer.columns.company,
    t.footer.columns.support,
  ];

  return (
    <footer id="footer" className="bg-[#0a1628] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 text-start">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Image
                src="/kingdom logo.png"
                alt={SITE.companyShort}
                width={160}
                height={32}
                className="h-8 w-auto max-w-[140px] object-contain object-start shrink-0"
              />
              <span className="text-white font-bold text-lg">{SITE.companyFull}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-md">{t.footer.about}</p>
            <p className="text-sm leading-relaxed mb-5 max-w-md text-gray-500">
              {t.footer.brandTagline}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={13} className="text-yellow-400 shrink-0" /> {SITE.phoneDisplay}
              </a>
              <a
                href={SITE.mailto}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail size={13} className="text-yellow-400 shrink-0" /> {SITE.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-yellow-400 mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a1628] transition-all text-gray-400"
                  aria-label="Social"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="text-start">
              <h4 className="text-white font-bold text-sm mb-4">{col.heading}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    {link === t.nav.contact ? (
                      <NextLink
                        href="/contact"
                        className="text-sm hover:text-yellow-400 transition-colors"
                      >
                        {link}
                      </NextLink>
                    ) : (
                      <a href="#footer" className="text-sm hover:text-yellow-400 transition-colors">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-center sm:text-start">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

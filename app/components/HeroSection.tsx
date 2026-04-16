"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { ArrowRight, Award, Clock, Package, Phone, Star, Users } from "lucide-react";

const statIcons = [Package, Users, Award, Clock] as const;

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0f2348] text-white overflow-hidden min-h-[580px] flex items-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a6b]/80 via-[#0f2348]/60 to-[#0a1a3a]" />

      <div className="absolute -top-20 end-0 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 start-0 w-64 h-64 rounded-full bg-yellow-400/10 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-start">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1 mb-5 text-yellow-300 text-sm font-medium">
              <Star size={13} fill="currentColor" className="shrink-0" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
              <span className="text-white">{t.hero.titleMain}</span>
              <br />
              <span className="text-yellow-400">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-3 max-w-lg">
              {t.hero.subtitle}
            </p>
            <p className="text-blue-200/90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {t.hero.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#equipment"
                className="inline-flex items-center gap-2 bg-yellow-400 text-[#0f2348] px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95"
              >
                {t.hero.browse}{" "}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all active:scale-95"
              >
                <Phone size={14} className="shrink-0" /> {t.hero.contact}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end rtl:lg:justify-start">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4 text-start">
                {t.hero.visionOverview}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {t.hero.stats.map(({ label, value }, i) => {
                  const Icon = statIcons[i] ?? Package;
                  return (
                    <div
                      key={label}
                      className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors text-start"
                    >
                      <Icon size={20} className="text-yellow-400 mb-2" />
                      <p className="text-2xl font-extrabold text-white">{value}</p>
                      <p className="text-blue-200 text-xs mt-0.5">{label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-[#0f2348] font-bold text-xs shrink-0">
                  ✓
                </div>
                <p className="text-yellow-200 text-xs text-start leading-relaxed">
                  {t.hero.trustNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

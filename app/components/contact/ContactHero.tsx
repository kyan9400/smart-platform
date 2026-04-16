"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { Clock, HeadphonesIcon, MapPinned } from "lucide-react";

const statIcons = [HeadphonesIcon, Clock, MapPinned] as const;

export default function ContactHero() {
  const { t } = useLanguage();
  const c = t.contactPage.hero;

  return (
    <section className="relative bg-[#0f2348] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a6b]/90 via-[#0f2348]/85 to-[#0a1a3a]" />
      <div className="absolute -top-16 end-0 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl text-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-4 py-1.5 text-sm font-medium text-yellow-200 mb-5">
            <Clock size={14} className="shrink-0" />
            {c.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {c.title}
          </h1>
          <p className="text-blue-100/95 text-base sm:text-lg leading-relaxed mb-10">
            {c.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
          {c.stats.map((stat, i) => {
            const Icon = statIcons[i] ?? HeadphonesIcon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-300">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-semibold text-white leading-snug">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

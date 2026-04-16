"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { CheckCircle, Globe, TrendingUp, Users } from "lucide-react";

const statIcons = [TrendingUp, Users, Globe, CheckCircle] as const;

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-16 bg-[#1a3a6b] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 end-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-start">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">
              {t.why.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.why.title}</h2>
            <p className="text-blue-200 text-base leading-relaxed mb-7">{t.why.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.why.reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-blue-100">
                  <CheckCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.why.stats.map(({ value, label }, i) => {
              const Icon = statIcons[i] ?? TrendingUp;
              return (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={24} className="text-yellow-400 mx-auto mb-3" />
                  <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                  <p className="text-blue-200 text-sm">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

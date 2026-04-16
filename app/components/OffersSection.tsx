"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { ArrowRight, Clock, Tag, Zap } from "lucide-react";

const offerIcons = [Clock, Tag, Zap, Tag] as const;

const offerVisual = [
  {
    accent: "from-yellow-400 to-yellow-500",
    textColor: "text-yellow-900",
    bg: "bg-yellow-50 border-yellow-200",
  },
  {
    accent: "from-green-400 to-green-500",
    textColor: "text-green-900",
    bg: "bg-green-50 border-green-200",
  },
  {
    accent: "from-emerald-400 to-teal-600",
    textColor: "text-teal-900",
    bg: "bg-emerald-50 border-emerald-200",
  },
  {
    accent: "from-purple-400 to-purple-500",
    textColor: "text-purple-900",
    bg: "bg-purple-50 border-purple-200",
  },
] as const;

export default function OffersSection() {
  const { t } = useLanguage();

  return (
    <section
      id="offers"
      className="py-16 bg-gradient-to-br from-saudi-600 via-saudi-700 to-saudi-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-emerald-200 font-semibold text-sm uppercase tracking-widest mb-2">
            {t.offers.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.offers.title}</h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">{t.offers.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.offers.cards.map((offer, index) => {
            const Icon = offerIcons[index] ?? Tag;
            const visual = offerVisual[index] ?? offerVisual[0];
            return (
              <div
                key={offer.title}
                className={`${visual.bg} border rounded-2xl p-5 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all text-start`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${visual.accent} flex items-center justify-center mb-4 shadow-sm`}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div
                  className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${visual.accent} text-white mb-3 self-start`}
                >
                  {offer.discount}
                </div>
                <h3 className={`font-bold ${visual.textColor} text-base mb-2`}>{offer.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">{offer.description}</p>
                <div className="flex items-center justify-between gap-2 mt-auto">
                  <span className="text-xs text-gray-400 font-medium">{offer.tag}</span>
                  <a
                    href="/contact"
                    className={`flex items-center gap-1 text-xs font-semibold ${visual.textColor} hover:underline shrink-0`}
                  >
                    {t.offers.claim} <ArrowRight size={11} className="rtl:rotate-180" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-start">
            <h3 className="text-white font-bold text-lg mb-1">{t.offers.customTitle}</h3>
            <p className="text-emerald-100 text-sm">{t.offers.customSubtitle}</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-saudi-800 px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors whitespace-nowrap shrink-0"
          >
            {t.offers.customCta} <ArrowRight size={14} className="rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { MapPin } from "lucide-react";

export default function ContactRegions() {
  const { t } = useLanguage();
  const r = t.contactPage.regions;

  return (
    <section className="py-14 sm:py-16 bg-saudi-800 text-white relative overflow-hidden border-y border-emerald-600/20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-2">
            {r.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{r.title}</h2>
          <p className="text-emerald-100/95 text-base leading-relaxed">{r.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {r.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/10 p-6 text-start backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-300">
                <MapPin size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

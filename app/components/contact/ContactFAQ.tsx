"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactFAQ() {
  const { t } = useLanguage();
  const f = t.contactPage.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-16 bg-emerald-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">
            {f.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{f.title}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {f.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-start text-sm font-semibold text-gray-900 hover:bg-gray-50/80 transition-colors"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-4 py-3 text-sm text-gray-600 leading-relaxed text-start">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

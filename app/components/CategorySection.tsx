"use client";

import { CATEGORY_STYLES } from "@/app/lib/category-styles";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { ArrowRight } from "lucide-react";

export default function CategorySection() {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-16 bg-white/95 border-y border-emerald-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">
            {t.categories.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {t.categories.title}
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {t.categories.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.categories.list.map((cat) => {
            const style = CATEGORY_STYLES[cat.id];
            if (!style) return null;
            return (
              <a
                key={cat.id}
                href="#equipment"
                className={`border rounded-xl p-4 flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all group ${style.color}`}
              >
                <div className="text-3xl mb-1">{style.emoji}</div>
                <h3 className="font-bold text-gray-800 text-sm group-hover:text-saudi-700 transition-colors text-start">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 text-start">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2 gap-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${style.badge}`}
                  >
                    {style.count} {t.categories.items}
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-gray-400 shrink-0 group-hover:text-saudi-600 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all"
                  />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a
            href="#equipment"
            className="inline-flex items-center gap-2 border border-saudi-700 text-saudi-800 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-saudi-800 hover:text-white transition-all"
          >
            {t.categories.viewAll}{" "}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}

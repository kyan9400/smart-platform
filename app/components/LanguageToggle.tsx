"use client";

import type { Locale } from "@/app/lib/i18n/types";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const pill = (code: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`px-2.5 py-1 text-xs font-bold rounded transition-colors ${
        locale === code
          ? "bg-yellow-400 text-saudi-900"
          : "text-white/80 hover:text-white hover:bg-white/10"
      }`}
      aria-pressed={locale === code}
      aria-label={code === "en" ? "English" : "العربية"}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`flex items-center rounded-md border border-white/30 bg-white/5 p-0.5 gap-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {pill("en", "EN")}
      {pill("ar", "AR")}
    </div>
  );
}

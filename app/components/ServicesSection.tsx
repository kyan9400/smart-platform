"use client";

import { useLanguage } from "@/app/providers/LanguageProvider";
import {
  Clock,
  CreditCard,
  HeadphonesIcon,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";

const serviceIcons = [Truck, Shield, Wrench, HeadphonesIcon, CreditCard, Clock] as const;

const serviceColors = [
  "bg-emerald-100 text-emerald-800",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-purple-100 text-purple-700",
  "bg-red-100 text-red-700",
  "bg-teal-100 text-teal-700",
] as const;

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">
            {t.services.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{t.services.title}</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i] ?? Truck;
            const color = serviceColors[i] ?? serviceColors[0];
            return (
              <div
                key={service.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group text-start"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

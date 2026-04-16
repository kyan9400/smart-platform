"use client";

import { SITE } from "@/app/lib/site";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactInfoSection() {
  const { t } = useLanguage();
  const c = t.contactPage.info;

  const cards = [
    {
      title: c.phone,
      content: SITE.phoneDisplay,
      href: SITE.phoneTel,
      icon: Phone,
      external: false,
    },
    {
      title: c.whatsapp,
      content: SITE.phoneDisplay,
      href: SITE.whatsappHref,
      icon: MessageCircle,
      external: true,
    },
    {
      title: c.email,
      content: SITE.email,
      href: SITE.mailto,
      icon: Mail,
      external: false,
    },
    {
      title: c.location,
      content: SITE.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
      icon: MapPin,
      external: true,
    },
    {
      title: c.hours,
      content: c.hoursLines.join("\n"),
      href: null as string | null,
      icon: Clock,
      external: false,
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">
            {c.sectionEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{c.sectionTitle}</h2>
          <p className="text-gray-600 text-base">{c.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const inner = (
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a3a6b]/10 text-[#1a3a6b]">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-blue-700 hover:text-blue-900 hover:underline whitespace-pre-line text-start flex-1"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600 whitespace-pre-line text-start flex-1 leading-relaxed">
                    {card.content}
                  </p>
                )}
              </div>
            );
            return <div key={`${card.title}-${index}`}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

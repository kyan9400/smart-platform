"use client";

import {
  RENTAL_PRODUCTS,
  type ProductBadgeKey,
  type RentalProduct,
} from "@/app/data/rental-products";
import { equipmentCategoryLabel } from "@/app/lib/equipment-category-label";
import { SITE } from "@/app/lib/site";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { ArrowRight, Heart, MapPin, Star } from "lucide-react";

function ProductCard({ product }: { product: RentalProduct }) {
  const { t } = useLanguage();
  const categoryLabel = equipmentCategoryLabel(t, product.categoryId);
  const badgeText =
    product.badgeKey != null
      ? t.equipment.badges[product.badgeKey as ProductBadgeKey]
      : null;

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group">
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-44 flex items-center justify-center overflow-hidden">
        <span className="text-6xl">{product.emoji}</span>
        {badgeText && (
          <span
            className={`absolute top-2 start-2 text-white text-xs font-bold px-2 py-0.5 rounded ${product.badgeColor}`}
          >
            {badgeText}
          </span>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {t.equipment.unavailable}
            </span>
          </div>
        )}
        <button
          type="button"
          className="absolute top-2 end-2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Save"
        >
          <Heart size={13} />
        </button>
      </div>

      <div className="p-4 text-start">
        <p className="text-xs text-blue-600 font-semibold mb-1">{categoryLabel}</p>
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center gap-1 mb-2 flex-wrap">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200 fill-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ms-1">
            {product.rating} ({product.reviews} {t.equipment.reviews})
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
          <MapPin size={11} className="shrink-0" />
          <span>{t.equipment.location}</span>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-base font-extrabold text-gray-900">
              ${product.priceDay}
              <span className="text-xs font-normal text-gray-400">{t.equipment.perDay}</span>
            </p>
            <p className="text-xs text-gray-400">
              ${product.priceWeek}
              {t.equipment.perWeek}
            </p>
          </div>
          <button
            type="button"
            disabled={!product.available}
            className="bg-[#1a3a6b] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            {t.equipment.rentNow}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PopularItemsSection() {
  const { t } = useLanguage();

  return (
    <section id="equipment" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">
            {t.equipment.kicker}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {t.equipment.title}
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">{t.equipment.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {RENTAL_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#equipment"
            className="inline-flex items-center gap-2 bg-[#1a3a6b] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
          >
            {t.equipment.viewAll} <ArrowRight size={14} className="rtl:rotate-180" />
          </a>
          <a
            href={SITE.mailto}
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors"
          >
            {t.equipment.requestQuote}
          </a>
        </div>
      </div>
    </section>
  );
}

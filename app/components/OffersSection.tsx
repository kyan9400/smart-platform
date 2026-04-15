import { ArrowRight, Tag, Clock, Zap } from "lucide-react";

const offers = [
  {
    title: "Weekend Special",
    description: "Rent any excavator this weekend and get 20% off the standard daily rate.",
    discount: "20% OFF",
    tag: "Limited Time",
    icon: Clock,
    accent: "from-yellow-400 to-yellow-500",
    textColor: "text-yellow-900",
    bg: "bg-yellow-50 border-yellow-200",
  },
  {
    title: "Weekly Bundle Deal",
    description: "Book equipment for a full week and save up to 30% compared to daily rental.",
    discount: "30% OFF",
    tag: "Best Value",
    icon: Tag,
    accent: "from-green-400 to-green-500",
    textColor: "text-green-900",
    bg: "bg-green-50 border-green-200",
  },
  {
    title: "New Customer Offer",
    description: "First-time renters get 15% off their first rental order — no minimum spend.",
    discount: "15% OFF",
    tag: "New Users",
    icon: Zap,
    accent: "from-blue-400 to-blue-500",
    textColor: "text-blue-900",
    bg: "bg-blue-50 border-blue-200",
  },
  {
    title: "Fleet Package",
    description: "Rent 3 or more pieces of equipment simultaneously and unlock fleet pricing.",
    discount: "25% OFF",
    tag: "Fleet",
    icon: Tag,
    accent: "from-purple-400 to-purple-500",
    textColor: "text-purple-900",
    bg: "bg-purple-50 border-purple-200",
  },
];

export default function OffersSection() {
  return (
    <section id="offers" className="py-16 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-green-200 font-semibold text-sm uppercase tracking-widest mb-2">Save More</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Special Offers &amp; Promotions</h2>
          <p className="text-green-100 text-base max-w-xl mx-auto">
            Take advantage of our limited-time deals and save on your equipment rental today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className={`${offer.bg} border rounded-2xl p-5 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${offer.accent} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${offer.accent} text-white mb-3 self-start`}>
                  {offer.discount}
                </div>
                <h3 className={`font-bold ${offer.textColor} text-base mb-2`}>{offer.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">{offer.tag}</span>
                  <a href="#" className={`flex items-center gap-1 text-xs font-semibold ${offer.textColor} hover:underline`}>
                    Claim <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Need a Custom Quote?</h3>
            <p className="text-green-100 text-sm">Tell us your project details and we&apos;ll put together the best pricing for you.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-50 transition-colors whitespace-nowrap shrink-0">
            Get Custom Quote <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

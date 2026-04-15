import { CheckCircle, TrendingUp, Users, Globe } from "lucide-react";

const stats = [
  { value: "200+", label: "Equipment Types", icon: TrendingUp },
  { value: "10,000+", label: "Happy Clients", icon: Users },
  { value: "20+", label: "Years Experience", icon: Globe },
  { value: "99.8%", label: "Satisfaction Rate", icon: CheckCircle },
];

const reasons = [
  "Largest equipment fleet in the region",
  "ISO-certified maintenance standards",
  "Same-day and scheduled delivery",
  "Transparent pricing — no hidden fees",
  "Certified operators available on request",
  "Nationwide coverage across 50+ cities",
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 bg-[#1a3a6b] text-white relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Choose Smart Equipment?
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-7">
              We are committed to delivering reliable, well-maintained equipment with exceptional service — making every project a success from start to finish.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-blue-100">
                  <CheckCircle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <Icon size={24} className="text-yellow-400 mx-auto mb-3" />
                <p className="text-3xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-blue-200 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

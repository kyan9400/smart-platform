import { ArrowRight, Play, Star, Users, Package, Clock, Award } from "lucide-react";

const stats = [
  { icon: Package, label: "Equipment Types", value: "200+" },
  { icon: Users, label: "Happy Clients", value: "10k+" },
  { icon: Award, label: "Years Experience", value: "20+" },
  { icon: Clock, label: "Support", value: "24/7" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#0f2348] text-white overflow-hidden min-h-[580px] flex items-center">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a6b]/80 via-[#0f2348]/60 to-[#0a1a3a]" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-yellow-400/10 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1 mb-5 text-yellow-300 text-sm font-medium">
              <Star size={13} fill="currentColor" />
              #1 Equipment Rental Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
              <span className="text-white">SMART</span>
              <br />
              <span className="text-yellow-400">PLATFORM</span>
            </h1>
            <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Your trusted partner for heavy and light equipment rental. Access a wide range of machinery for construction, agriculture, and industrial projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#equipment"
                className="inline-flex items-center gap-2 bg-yellow-400 text-[#0f2348] px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95"
              >
                Browse Equipment <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all active:scale-95"
              >
                <Play size={14} fill="currentColor" /> Watch Demo
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">Platform Overview</p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <Icon size={20} className="text-yellow-400 mb-2" />
                    <p className="text-2xl font-extrabold text-white">{value}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-[#0f2348] font-bold text-xs shrink-0">✓</div>
                <p className="text-yellow-200 text-xs">Free delivery on orders over $500. Same day availability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

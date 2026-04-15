import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0f2348] to-[#1a3a6b] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl" />
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-2xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-blue-200 text-base leading-relaxed max-w-xl mx-auto mb-8">
          Join thousands of professionals who trust Smart Platform for their equipment needs. Get a quote in minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#equipment"
            className="inline-flex items-center gap-2 bg-yellow-400 text-[#0f2348] px-7 py-3 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95"
          >
            Browse Equipment <ArrowRight size={15} />
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-7 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all active:scale-95"
          >
            <Phone size={14} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

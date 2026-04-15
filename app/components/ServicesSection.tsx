import { Truck, Shield, Wrench, HeadphonesIcon, CreditCard, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "On-time delivery directly to your job site, anywhere in the region.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All equipment covered with comprehensive insurance during your rental period.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Wrench,
    title: "Maintenance Included",
    description: "Every machine is regularly serviced and maintained to the highest standards.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our expert team is available around the clock to assist you on-site or remotely.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options including monthly billing for long-term projects.",
    color: "bg-red-100 text-red-700",
  },
  {
    icon: Clock,
    title: "Same Day Rental",
    description: "Need it urgently? We offer same-day equipment availability for most items.",
    color: "bg-teal-100 text-teal-700",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Comprehensive equipment rental solutions
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We go beyond just renting equipment — we deliver complete solutions to keep your project on track.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${service.color} group-hover:scale-110 transition-transform`}>
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

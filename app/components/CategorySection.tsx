import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Excavators",
    description: "Mini to large excavators for digging, trenching, and earthmoving",
    count: 24,
    emoji: "🚜",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    name: "Bulldozers",
    description: "Powerful bulldozers for land clearing and grading projects",
    count: 12,
    emoji: "🏗️",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "Cranes",
    description: "Tower, mobile and crawler cranes for lifting heavy loads",
    count: 18,
    emoji: "🏚️",
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    name: "Forklifts",
    description: "Electric and diesel forklifts for warehouse and industrial use",
    count: 31,
    emoji: "🔧",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  {
    name: "Compactors",
    description: "Vibratory rollers and plate compactors for soil and asphalt",
    count: 9,
    emoji: "⚙️",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Aerial Lifts",
    description: "Boom lifts, scissor lifts for working at height",
    count: 15,
    emoji: "🪜",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
  },
  {
    name: "Concrete Mixers",
    description: "Drum mixers and transit mixers for concrete works",
    count: 7,
    emoji: "🛞",
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    name: "Light Equipment",
    description: "Generators, compressors, and small tools for any job site",
    count: 45,
    emoji: "💡",
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
];

export default function CategorySection() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">Categories</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Wide range of heavy and light equipment
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            For all your project needs — from excavation to finishing, we have the right machine.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#equipment"
              className={`border rounded-xl p-4 flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all group ${cat.color}`}
            >
              <div className="text-3xl mb-1">{cat.emoji}</div>
              <h3 className="font-bold text-gray-800 text-sm group-hover:text-blue-700 transition-colors">{cat.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{cat.description}</p>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat.badge}`}>{cat.count} items</span>
                <ArrowRight size={13} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#equipment" className="inline-flex items-center gap-2 border border-[#1a3a6b] text-[#1a3a6b] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a3a6b] hover:text-white transition-all">
            View All Categories <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

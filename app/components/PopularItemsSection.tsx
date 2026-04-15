import { Star, MapPin, ArrowRight, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "CAT 320 Hydraulic Excavator",
    category: "Excavators",
    priceDay: 450,
    priceWeek: 2800,
    rating: 4.8,
    reviews: 124,
    location: "New York, NY",
    badge: "Popular",
    badgeColor: "bg-blue-600",
    available: true,
    emoji: "🚜",
  },
  {
    id: 2,
    name: "Komatsu D65 Bulldozer",
    category: "Bulldozers",
    priceDay: 380,
    priceWeek: 2200,
    rating: 4.7,
    reviews: 89,
    location: "Los Angeles, CA",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
    available: true,
    emoji: "🏗️",
  },
  {
    id: 3,
    name: "Liebherr LTM Mobile Crane",
    category: "Cranes",
    priceDay: 850,
    priceWeek: 5200,
    rating: 4.9,
    reviews: 56,
    location: "Chicago, IL",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    available: true,
    emoji: "🏚️",
  },
  {
    id: 4,
    name: "Toyota 8FBE Forklift 2.5T",
    category: "Forklifts",
    priceDay: 180,
    priceWeek: 1050,
    rating: 4.6,
    reviews: 201,
    location: "Houston, TX",
    badge: "Best Value",
    badgeColor: "bg-green-600",
    available: true,
    emoji: "🔧",
  },
  {
    id: 5,
    name: "Dynapac CA3500 Roller",
    category: "Compactors",
    priceDay: 290,
    priceWeek: 1750,
    rating: 4.5,
    reviews: 67,
    location: "Phoenix, AZ",
    badge: null,
    badgeColor: "",
    available: true,
    emoji: "⚙️",
  },
  {
    id: 6,
    name: "JLG 600S Boom Lift",
    category: "Aerial Lifts",
    priceDay: 320,
    priceWeek: 1900,
    rating: 4.7,
    reviews: 93,
    location: "Dallas, TX",
    badge: "New",
    badgeColor: "bg-teal-500",
    available: true,
    emoji: "🪜",
  },
  {
    id: 7,
    name: "Schwing S 36 X Pump",
    category: "Concrete",
    priceDay: 520,
    priceWeek: 3100,
    rating: 4.6,
    reviews: 44,
    location: "Miami, FL",
    badge: null,
    badgeColor: "",
    available: false,
    emoji: "🛞",
  },
  {
    id: 8,
    name: "Atlas Copco XA120 Compressor",
    category: "Light Equipment",
    priceDay: 95,
    priceWeek: 550,
    rating: 4.8,
    reviews: 178,
    location: "Seattle, WA",
    badge: "Popular",
    badgeColor: "bg-blue-600",
    available: true,
    emoji: "💡",
  },
  {
    id: 9,
    name: "Volvo EC140 Excavator",
    category: "Excavators",
    priceDay: 390,
    priceWeek: 2400,
    rating: 4.7,
    reviews: 112,
    location: "Boston, MA",
    badge: null,
    badgeColor: "",
    available: true,
    emoji: "🚜",
  },
  {
    id: 10,
    name: "Manitou MT 625 Telehandler",
    category: "Telehandlers",
    priceDay: 340,
    priceWeek: 2050,
    rating: 4.5,
    reviews: 78,
    location: "Denver, CO",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
    available: true,
    emoji: "🏗️",
  },
  {
    id: 11,
    name: "Wacker Neuson BS50 Rammer",
    category: "Light Equipment",
    priceDay: 55,
    priceWeek: 300,
    rating: 4.4,
    reviews: 234,
    location: "Atlanta, GA",
    badge: null,
    badgeColor: "",
    available: true,
    emoji: "⚙️",
  },
  {
    id: 12,
    name: "Skyjack SJ9250 Scissor Lift",
    category: "Aerial Lifts",
    priceDay: 210,
    priceWeek: 1250,
    rating: 4.6,
    reviews: 155,
    location: "Portland, OR",
    badge: "Best Value",
    badgeColor: "bg-green-600",
    available: true,
    emoji: "🪜",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group">
      {/* Image area */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-44 flex items-center justify-center overflow-hidden">
        <span className="text-6xl">{product.emoji}</span>
        {product.badge && (
          <span className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-0.5 rounded ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
        {!product.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Unavailable</span>
          </div>
        )}
        <button className="absolute top-2 right-2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
          <Heart size={13} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-blue-600 font-semibold mb-1">{product.category}</p>
        <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-1">{product.name}</h3>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{product.rating} ({product.reviews})</span>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
          <MapPin size={11} />
          <span>{product.location}</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-base font-extrabold text-gray-900">${product.priceDay}<span className="text-xs font-normal text-gray-400">/day</span></p>
            <p className="text-xs text-gray-400">${product.priceWeek}/week</p>
          </div>
          <button
            disabled={!product.available}
            className="bg-[#1a3a6b] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PopularItemsSection() {
  return (
    <section id="equipment" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">Equipment</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our most popular equipment for rent
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Browse our top-rented machines — quality-checked, well-maintained, and ready for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 bg-[#1a3a6b] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors">
            View All Equipment <ArrowRight size={14} />
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

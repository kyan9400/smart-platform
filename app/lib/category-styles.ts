/** Visual meta for category cards — copy stays in locale files */
export const CATEGORY_STYLES: Record<
  string,
  {
    emoji: string;
    count: number;
    color: string;
    badge: string;
  }
> = {
  excavators: {
    emoji: "🚜",
    count: 24,
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
  bulldozers: {
    emoji: "🏗️",
    count: 12,
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  cranes: {
    emoji: "🏗️",
    count: 18,
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  forklifts: {
    emoji: "🔧",
    count: 31,
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
  },
  compactors: {
    emoji: "⚙️",
    count: 9,
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
  },
  aerial: {
    emoji: "🪜",
    count: 15,
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
  },
  generators: {
    emoji: "⚡",
    count: 14,
    color: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-700",
  },
  trucks: {
    emoji: "🚛",
    count: 22,
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
};

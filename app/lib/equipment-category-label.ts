import type { Messages } from "@/app/lib/i18n/messages";

export function equipmentCategoryLabel(
  t: Messages,
  categoryId: string,
): string {
  const fromGrid = t.categories.list.find((c) => c.id === categoryId);
  if (fromGrid) return fromGrid.name;
  const extra = t.equipment.productCategories as Record<string, string>;
  return extra[categoryId] ?? categoryId;
}

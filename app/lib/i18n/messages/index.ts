import { ar } from "./ar";
import { en, type Messages } from "./en";
import type { Locale } from "../types";

export type { Messages };

export const messages: Record<Locale, Messages> = {
  en,
  ar,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

import { en } from "@/app/lib/i18n/messages/en";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: en.contactPage.meta.title,
  description: en.contactPage.meta.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

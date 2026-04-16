import ContactFAQ from "@/app/components/contact/ContactFAQ";
import ContactHero from "@/app/components/contact/ContactHero";
import ContactInfoSection from "@/app/components/contact/ContactInfoSection";
import ContactRegions from "@/app/components/contact/ContactRegions";
import InquiryForm from "@/app/components/contact/InquiryForm";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactInfoSection />
        <InquiryForm />
        <ContactRegions />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
}

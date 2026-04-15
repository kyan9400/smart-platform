import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import PopularItemsSection from "./components/PopularItemsSection";
import OffersSection from "./components/OffersSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <PopularItemsSection />
        <OffersSection />
        <ServicesSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

import AboutSection from "@/components/AboutSection";
import BackToTopButton from "@/components/BackToTopButton";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import Preloader from "@/components/Preloader";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Preloader/>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection/>
      <BackToTopButton/>
      <Footer/>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Defer below-the-fold sections to shrink initial JS bundle
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const MentorshipSection = lazy(() => import("@/components/MentorshipSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <MentorshipSection />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;

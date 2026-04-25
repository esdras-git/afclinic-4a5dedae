import heroVideo from "@/assets/af-hero.mp4";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Background video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="animate-fade-up">
            <span className="eyebrow">Arquitetura Facial Clinic</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mt-6 mb-8 animate-fade-up-delay-1">
            A beleza é uma <em className="italic font-normal bronze-text">Construção</em>.
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto animate-fade-up-delay-2">
            Método exclusivo da Dra. Emanuele Melo para harmonia, equilíbrio e naturalidade —
            construído sob medida para cada rosto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <a
              href={whatsappUrl("Olá! Vim pelo site e gostaria de agendar minha avaliação de Arquitetura Facial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ink"
            >
              Agendar Avaliação
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#servicos" className="btn-outline-ink">
              Ver Tratamentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

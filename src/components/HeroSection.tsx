import heroImage from "@/assets/hero-clinic.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior luxuoso da Lumina Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-up">
          <span className="inline-block text-sm font-body tracking-[0.3em] uppercase text-primary mb-6">
            Fortaleza · Ceará
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 animate-fade-up-delay-1">
          Onde a ciência encontra a sua{" "}
          <span className="gold-text italic">melhor versão</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          Estética avançada, harmonização facial e saúde feminina com atendimento exclusivo no Complexo São Mateus.
        </p>

        <div className="animate-fade-up-delay-3">
          <a
            href="https://wa.me/5585999999999?text=Olá! Gostaria de agendar uma consulta na Lumina Clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 gold-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsla(40,50%,55%,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Consulta via WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

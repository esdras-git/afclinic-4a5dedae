import heroImg from "@/assets/af-hero.jpg";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="relative z-10 max-w-xl">
          <div className="animate-fade-up">
            <span className="eyebrow">Arquitetura Facial Clinic</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mt-6 mb-8 animate-fade-up-delay-1">
            A beleza é uma <em className="italic font-normal bronze-text">Construção</em>.
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md animate-fade-up-delay-2">
            Método exclusivo da Dra. Emanuele Melo para harmonia, equilíbrio e naturalidade —
            construído sob medida para cada rosto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
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

        {/* Image */}
        <div className="relative animate-fade-up-delay-2">
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-bronze/40" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-bronze/40" />
          <img
            src={heroImg}
            alt="Ambiente luxuoso da Arquitetura Facial Clinic"
            className="w-full h-[520px] md:h-[620px] object-cover relative"
            width={1536}
            height={1152}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

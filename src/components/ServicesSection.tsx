import {
  Droplet,
  Sparkles,
  Syringe,
  Activity,
  Layers,
  Ear,
  Smile,
  Aperture,
  Cpu,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { whatsappUrl } from "@/lib/contact";

const services = [
  { icon: Droplet, name: "Limpeza de Pele" },
  { icon: Sparkles, name: "Hydragloss" },
  { icon: Activity, name: "Microagulhamento" },
  { icon: Syringe, name: "Botox" },
  { icon: Layers, name: "Bioestimulador de Colágeno" },
  { icon: Ear, name: "Otomodelação" },
  { icon: Smile, name: "Preenchimentos Faciais" },
  { icon: Aperture, name: "Perfiloplastia" },
  { icon: Cpu, name: "Tecnologias" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-cream-deep">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="eyebrow">Tratamentos</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-5 mb-6 leading-tight">
              Cada procedimento, <em className="italic bronze-text font-normal">um traço</em> da sua arquitetura.
            </h2>
            <div className="bronze-divider mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 60}>
              <div className="editorial-card !rounded-none !border-0 group bg-background h-full p-8 md:p-10 flex flex-col items-start gap-5 cursor-default">
                <div className="w-12 h-12 flex items-center justify-center border border-foreground/15 group-hover:border-bronze group-hover:bg-bronze/5 transition-all">
                  <s.icon className="w-5 h-5 text-foreground group-hover:text-bronze transition-colors" strokeWidth={1.4} />
                </div>
                <h3 className="font-heading text-lg md:text-xl text-foreground leading-snug">
                  {s.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center mt-16">
            <a
              href={whatsappUrl("Olá! Quero agendar minha Avaliação de Arquitetura Facial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ink"
            >
              Quero Agendar Minha Avaliação de Arquitetura Facial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;

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
import imgLimpeza from "@/assets/svc-limpeza.jpg";
import imgHydra from "@/assets/svc-hydragloss.jpg";
import imgMicro from "@/assets/svc-microagulhamento.jpg";
import imgBotox from "@/assets/svc-botox.jpg";
import imgBio from "@/assets/svc-bioestimulador.jpg";
import imgOto from "@/assets/svc-otomodelacao.jpg";
import imgPreench from "@/assets/svc-preenchimento.jpg";
import imgPerfilo from "@/assets/svc-perfiloplastia.jpg";
import imgTec from "@/assets/svc-tecnologias.jpg";

const services = [
  { icon: Droplet, name: "Limpeza de Pele", image: imgLimpeza },
  { icon: Sparkles, name: "Hydragloss", image: imgHydra },
  { icon: Activity, name: "Microagulhamento", image: imgMicro },
  { icon: Syringe, name: "Botox", image: imgBotox },
  { icon: Layers, name: "Bioestimulador de Colágeno", image: imgBio },
  { icon: Ear, name: "Otomodelação", image: imgOto },
  { icon: Smile, name: "Preenchimentos Faciais", image: imgPreench },
  { icon: Aperture, name: "Perfiloplastia", image: imgPerfilo },
  { icon: Cpu, name: "Tecnologias", image: imgTec },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 60}>
              <div className="group bg-background h-full flex flex-col cursor-default overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 md:p-10 flex flex-col items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-foreground/15 group-hover:border-bronze group-hover:bg-bronze/5 transition-all">
                    <s.icon className="w-5 h-5 text-foreground group-hover:text-bronze transition-colors" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl text-foreground leading-snug">
                    {s.name}
                  </h3>
                </div>
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

import { ArrowRight } from "lucide-react";
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
  { name: "Limpeza de Pele", image: imgLimpeza, desc: "Higienização profunda e renovação celular." },
  { name: "Hydragloss", image: imgHydra, desc: "Hidratação intensa com efeito glow imediato." },
  { name: "Microagulhamento", image: imgMicro, desc: "Estímulo ao colágeno e renovação da pele." },
  { name: "Botox", image: imgBotox, desc: "Suavização de linhas com naturalidade." },
  { name: "Bioestimulador de Colágeno", image: imgBio, desc: "Firmeza e qualidade da pele a longo prazo." },
  { name: "Otomodelação", image: imgOto, desc: "Correção sutil e harmônica das orelhas." },
  { name: "Preenchimentos Faciais", image: imgPreench, desc: "Volume e contorno restaurados com precisão." },
  { name: "Perfiloplastia", image: imgPerfilo, desc: "Equilíbrio do perfil facial em harmonia." },
  { name: "Tecnologias", image: imgTec, desc: "Protocolos avançados para resultados refinados." },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 60}>
              <article
                className="group h-full flex flex-col bg-background border transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: "rgba(197, 160, 89, 0.3)" }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <h3 className="font-heading text-xl text-foreground leading-snug">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <a
                    href={whatsappUrl(`Olá! Tenho interesse no procedimento: ${s.name}. Gostaria de agendar minha avaliação.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-ink w-full mt-2"
                  >
                    Agendar este procedimento
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
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

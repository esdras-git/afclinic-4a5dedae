import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import draImg from "@/assets/dra-emanuele.webp";
import { whatsappUrl } from "@/lib/contact";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — assimétrica */}
          <ScrollReveal className="lg:col-span-5 lg:col-start-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-bronze/50" />
              <img
                src={draImg}
                alt="Dra. Emanuele Melo"
                className="relative w-full h-[560px] md:h-[640px] object-cover"
                loading="lazy"
                width={896}
                height={1152}
              />
              <div className="absolute -bottom-6 left-6 bg-background border border-border px-6 py-4">
                <p className="font-heading text-sm">Dra. Emanuele Melo</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  CRM · Arquitetura Facial
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Texto */}
          <ScrollReveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <span className="eyebrow">Quem é</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-5 mb-8 leading-[1.1]">
              Dra. Emanuele <em className="italic bronze-text font-normal">Melo</em>
            </h2>
            <div className="bronze-divider mb-8" />

            <div className="space-y-5 text-foreground/80 font-body leading-[1.85] text-[15px] md:text-base">
              <p>
                A <strong className="font-medium text-foreground">Arquitetura Facial</strong> é o meu método
                exclusivo de avaliação e tratamento, onde cada detalhe do seu rosto é analisado de forma
                personalizada para criar harmonia, equilíbrio e naturalidade.
              </p>
              <p>
                Assim como na arquitetura, não se trata apenas de partes isoladas, mas da construção de um
                conjunto que valoriza sua identidade e realça sua beleza sem exageros.
              </p>
              <p>
                Através de técnicas avançadas e um olhar estratégico, desenvolvo um plano individualizado
                para suavizar sinais do tempo, melhorar proporções e destacar seus traços mais bonitos —
                sempre respeitando quem você é.
              </p>
              <p className="text-foreground italic font-heading text-lg pt-2">
                O resultado? Um rosto mais equilibrado, elegante e confiante, sem perder a sua essência.
              </p>
            </div>

            <div className="mt-10">
              <a
                href={whatsappUrl("Olá! Quero agendar minha avaliação e descobrir como a Arquitetura Facial pode me transformar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-ink"
              >
                Agende sua Avaliação
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

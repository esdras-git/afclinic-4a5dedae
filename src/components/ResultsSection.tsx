import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import imgLimpeza from "@/assets/case-limpeza.jpg";
import imgHydra from "@/assets/case-hydragloss.jpg";
import imgMicro from "@/assets/case-microagulhamento.jpg";
import imgBotox from "@/assets/case-botox.jpg";
import imgBio from "@/assets/case-bioestimulador.jpg";
import imgOto from "@/assets/case-otomodelacao.jpg";
import imgPreench from "@/assets/case-preenchimento.jpg";
import imgPerfil from "@/assets/case-perfiloplastia.jpg";
import imgTec from "@/assets/svc-tecnologias.webp";

const results = [
  { image: imgLimpeza, label: "Limpeza de Pele", title: "Pele Renovada", desc: "Higienização profunda que devolve viço, maciez e luminosidade à pele." },
  { image: imgHydra, label: "Hydragloss", title: "Brilho & Hidratação", desc: "Tratamento de hidratação intensa para um efeito glow natural e duradouro." },
  { image: imgMicro, label: "Microagulhamento", title: "Textura Refinada", desc: "Estímulo de colágeno que suaviza marcas, poros e melhora a qualidade da pele." },
  { image: imgBotox, label: "Botox", title: "Expressão Suave", desc: "Atenuação de linhas dinâmicas preservando a naturalidade dos traços." },
  { image: imgBio, label: "Bioestimulador de Colágeno", title: "Firmeza & Sustentação", desc: "Reposição de colágeno para devolver densidade e suporte ao rosto." },
  { image: imgOto, label: "Otomodelação", title: "Harmonia das Orelhas", desc: "Reposicionamento sutil para equilibrar proporção e contorno facial." },
  { image: imgPreench, label: "Preenchimentos Faciais", title: "Volume Estratégico", desc: "Restauração de volumes perdidos com naturalidade e proporção áurea." },
  { image: imgPerfil, label: "Perfiloplastia", title: "Perfil Equilibrado", desc: "Refinamento de mento, nariz e mandíbula para um perfil em harmonia." },
  { image: imgTec, label: "Tecnologias", title: "Alta Performance", desc: "Protocolos com tecnologia avançada para resultados precisos e duradouros." },
];

const ResultsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", duration: 38 });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="eyebrow">Casos & Resultados</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-5 leading-tight">
                Naturalidade que <em className="italic bronze-text font-normal">se vê</em>.
              </h2>
              <div className="bronze-divider mt-6" />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Anterior"
                className="w-12 h-12 border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Próximo"
                className="w-12 h-12 border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {results.map((r, i) => (
                <div key={i} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_33%] min-w-0 pr-6">
                  <article className="group bg-background rounded-sm overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.22)] transition-shadow duration-500 border border-border/40">
                    <div className="overflow-hidden bg-cream-deep">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] uppercase tracking-[0.3em] bronze-text mb-2">
                        {r.label}
                      </p>
                      <h3 className="font-heading text-xl text-foreground mb-2">{r.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-10">
            {results.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-px transition-all duration-500 ${
                  selected === i ? "w-12 bg-foreground" : "w-6 bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;

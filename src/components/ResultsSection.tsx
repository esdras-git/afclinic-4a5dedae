import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import img1 from "@/assets/clinic-room.jpg";
import img2 from "@/assets/clinic-detail.jpg";
import img3 from "@/assets/clinic-reception.jpg";
import img4 from "@/assets/af-hero.jpg";

const results = [
  { image: img1, title: "Restauração de Volume", desc: "Reposição estratégica para devolver suporte e juventude ao terço médio." },
  { image: img2, title: "Definição de Contorno", desc: "Realce do ângulo mandibular com naturalidade e equilíbrio." },
  { image: img3, title: "Harmonização Global", desc: "Ajustes sutis que valorizam a identidade e renovam a expressão." },
  { image: img4, title: "Rejuvenescimento Sutil", desc: "Suavização dos sinais do tempo sem alterar os traços naturais." },
];

const ResultsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", duration: 38 });
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Antes & Depois</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-5 leading-tight">
              Naturalidade que <em className="italic bronze-text font-normal">se vê</em>.
            </h2>
            <div className="bronze-divider mt-6 mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-5xl mx-auto">
            {/* Setas laterais minimalistas */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 backdrop-blur border border-foreground/15 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 backdrop-blur border border-foreground/15 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="overflow-hidden rounded-md" ref={emblaRef}>
              <div className="flex">
                {results.map((r, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <article>
                      <div className="overflow-hidden bg-cream-deep rounded-md aspect-[4/3]">
                        <img
                          src={r.image}
                          alt={r.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-6 text-center">
                        <p className="text-[10px] uppercase tracking-[0.3em] bronze-text mb-2">
                          Caso 0{i + 1}
                        </p>
                        <h3 className="font-heading text-2xl text-foreground mb-2">{r.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">{r.desc}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-10">
            {results.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir para caso ${i + 1}`}
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

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { track } from "@/lib/analytics";
import imgLimpeza from "@/assets/case-limpeza.jpg";
import imgHydra from "@/assets/case-hydragloss.jpg";
import imgMicro from "@/assets/case-microagulhamento.jpg";
import imgBotox from "@/assets/case-botox.jpg";
import imgBio from "@/assets/case-bioestimulador.jpg";
import imgOto from "@/assets/case-otomodelacao.jpg";
import imgPreench from "@/assets/case-preenchimento.jpg";
import imgPerfil from "@/assets/case-perfiloplastia.jpg";
import imgTec from "@/assets/svc-tecnologias.webp";

const treatments = [
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

const buildWhats = (treatment: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, vim pelo site e quero agendar ${treatment}!`)}`;

const isMobileViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

const ServicesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", duration: 38 });
  const [selected, setSelected] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (zoomIndex === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomIndex(null); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [zoomIndex]);

  const handleImageClick = (i: number, label: string) => {
    if (isMobileViewport()) {
      setZoomIndex(i);
      track("image_zoom", { location: "services_card", label, source: "mobile_tap" });
    } else {
      setZoomIndex(i);
      track("image_zoom", { location: "services_card", label, source: "desktop_click" });
    }
  };

  const handleCardToggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="servicos" className="py-24 md:py-32 bg-cream-deep">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <span className="eyebrow">Tratamentos</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-5 leading-tight">
                Cada procedimento, <em className="italic bronze-text font-normal">um traço</em> da sua arquitetura.
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
              {treatments.map((t, i) => {
                const isActive = activeIndex === i;
                return (
                  <div key={i} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_33%] min-w-0 pr-6">
                    <article
                      onClick={() => handleCardToggle(i)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleCardToggle(i);
                        }
                      }}
                      className="group bg-background rounded-sm overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.22)] transition-shadow duration-500 border border-border/40 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    >
                      <div className="relative block w-full h-[460px] overflow-hidden bg-cream-deep">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(i, t.label);
                          }}
                          aria-label={`Ampliar imagem de ${t.title}`}
                          className="absolute inset-0 w-full h-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                        >
                          <img
                            src={t.image}
                            alt={t.title}
                            loading="lazy"
                            decoding="async"
                            width="800"
                            height="920"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 45vw, 85vw"
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              isActive ? "scale-105 blur-[2px]" : "group-hover:scale-105 group-hover:brightness-105"
                            }`}
                          />
                        </button>

                        {/* Overlay with description + CTA — opens via card click, sits above image */}
                        <div
                          className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-foreground/95 via-foreground/85 to-foreground/40 transition-all duration-500 ease-out ${
                            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                          onClick={(e) => {
                            // clicking the overlay (not CTA) closes it
                            e.stopPropagation();
                            setActiveIndex(null);
                          }}
                        >
                          <div
                            className={`transform transition-all duration-500 ease-out ${
                              isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                          >
                            <p className="text-[10px] uppercase tracking-[0.3em] bronze-text mb-2">
                              {t.label}
                            </p>
                            <h3 className="font-heading text-2xl text-background mb-3 leading-snug">
                              {t.title}
                            </h3>
                            <p className="text-sm text-background/85 leading-relaxed mb-6">
                              {t.desc}
                            </p>
                            <a
                              href={buildWhats(t.label)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.stopPropagation();
                                track("cta_click", { location: "services_card", label: t.label, channel: "whatsapp" });
                              }}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-bronze text-foreground text-sm font-medium tracking-wide hover:bg-bronze/90 transition-colors"
                            >
                              Agendar agora
                              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] bronze-text mb-2">
                          {t.label}
                        </p>
                        <h3 className="font-heading text-xl text-foreground mb-2">{t.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isActive ? "Toque novamente para fechar." : "Toque no card para ver detalhes."}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-10">
            {treatments.map((_, i) => (
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

      {/* Zoom Lightbox */}
      {zoomIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setZoomIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada — ${treatments[zoomIndex].title}`}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setZoomIndex(null); }}
            aria-label="Fechar"
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-background hover:bg-background/10 transition-colors rounded-full"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <img
            src={treatments[zoomIndex].image}
            alt={treatments[zoomIndex].title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain cursor-zoom-out animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default ServicesSection;

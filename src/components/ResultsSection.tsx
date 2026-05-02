import { useEffect, useState, useCallback, useRef, MouseEvent as ReactMouseEvent } from "react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false); // controls enter/exit animation
  const [zoom, setZoom] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const openLightbox = useCallback((i: number) => {
    lastTriggerRef.current = (document.activeElement as HTMLElement) ?? triggerRefs.current[i] ?? null;
    setLightboxIndex(i);
    setZoom(false);
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => {
      setLightboxIndex(null);
      setZoom(false);
      const el = lastTriggerRef.current;
      if (el && typeof el.focus === "function") el.focus();
    }, 260);
  }, []);

  // Keyboard handling (Esc only) + focus trap + scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [lightboxIndex, closeLightbox]);

  const updateOrigin = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
  };

  const handleImageClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    updateOrigin(e);
    setZoom((z) => !z);
  };

  const handleImageMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!zoom) return;
    updateOrigin(e);
  };

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
                    <button
                      type="button"
                      ref={(el) => { triggerRefs.current[i] = el; }}
                      onClick={() => openLightbox(i)}
                      aria-label={`Ampliar imagem: ${r.title}`}
                      aria-haspopup="dialog"
                      className="block w-full overflow-hidden bg-cream-deep cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="920"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 45vw, 85vw"
                        className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                      />
                    </button>
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

      {/* Lightbox / Modal — single image, click to zoom */}
      {lightboxIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${results[lightboxIndex].title}`}
          onClick={closeLightbox}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Close */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Fechar"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center text-white/90 hover:text-white border border-white/30 hover:border-white/70 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Image container — click toggles zoom; native pinch-zoom on mobile */}
          <div
            onClick={handleImageClick}
            onMouseMove={handleImageMove}
            onMouseLeave={() => setZoom(false)}
            className={`relative max-w-[92vw] max-h-[88vh] overflow-hidden touch-pinch-zoom transition-all duration-300 ease-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              touchAction: "pinch-zoom",
              cursor: zoom ? "zoom-out" : "zoom-in",
            }}
          >
            <img
              src={results[lightboxIndex].image}
              alt={results[lightboxIndex].title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="92vw"
              className="block max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain select-none transition-transform duration-500 ease-out will-change-transform"
              draggable={false}
              style={{
                transform: zoom ? "scale(2)" : "scale(1)",
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultsSection;

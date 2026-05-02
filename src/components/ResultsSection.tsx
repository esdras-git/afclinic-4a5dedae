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
    // next frame -> trigger enter transition
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    // wait for exit animation before unmounting
    window.setTimeout(() => {
      setLightboxIndex(null);
      setZoom(false);
      // restore focus to the element that opened the modal
      const el = lastTriggerRef.current;
      if (el && typeof el.focus === "function") el.focus();
    }, 260);
  }, []);

  const prevLightbox = useCallback(() => {
    setZoom(false);
    setLightboxIndex((i) => (i === null ? i : (i - 1 + results.length) % results.length));
  }, []);
  const nextLightbox = useCallback(() => {
    setZoom(false);
    setLightboxIndex((i) => (i === null ? i : (i + 1) % results.length));
  }, []);

  // Keyboard handling + focus trap + scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (e.key === "ArrowLeft") { e.preventDefault(); prevLightbox(); return; }
      if (e.key === "ArrowRight") { e.preventDefault(); nextLightbox(); return; }
      if (e.key === "Tab") {
        // Focus trap inside dialog
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

    // Move focus into the modal once mounted
    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  const handleZoomMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!zoom) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
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

      {/* Lightbox / Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${results[lightboxIndex].title}`}
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Fechar"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center text-white/90 hover:text-white border border-white/30 hover:border-white/70 rounded-full transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            aria-label="Imagem anterior"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white/90 hover:text-white border border-white/30 hover:border-white/70 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            aria-label="Próxima imagem"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white/90 hover:text-white border border-white/30 hover:border-white/70 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Image container — touch-pinch-zoom enabled */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[92vw] max-h-[88vh] overflow-auto touch-pinch-zoom"
            style={{ touchAction: "pinch-zoom" }}
          >
            <img
              src={results[lightboxIndex].image}
              alt={results[lightboxIndex].title}
              className="block max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white px-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bronze mb-1">
              {results[lightboxIndex].label}
            </p>
            <p className="font-heading text-lg">{results[lightboxIndex].title}</p>
            <p className="text-xs text-white/60 mt-1">
              {lightboxIndex + 1} / {results.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultsSection;

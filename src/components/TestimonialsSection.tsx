import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { whatsappUrl } from "@/lib/contact";

const testimonials = [
  {
    name: "Mariana Albuquerque",
    initials: "MA",
    treatment: "Botox & Skinbooster",
    rating: 5,
    text: "A Dra. Emanuele transformou minha autoestima. O método de Arquitetura Facial entrega um resultado natural, elegante e fiel à minha essência.",
  },
  {
    name: "Carolina Vasconcelos",
    initials: "CV",
    treatment: "Bioestimulador de Colágeno",
    rating: 5,
    text: "Ambiente impecável e atendimento que me fez sentir cuidada em cada detalhe. Saí com a sensação de que cada traço foi pensado com estratégia.",
  },
  {
    name: "Beatriz Mendonça",
    initials: "BM",
    treatment: "Microagulhamento",
    rating: 5,
    text: "Profissionalismo e elegância em cada visita. A pele nunca esteve tão luminosa. Recomendo de olhos fechados a quem busca excelência.",
  },
  {
    name: "Renata Cavalcante",
    initials: "RC",
    treatment: "Preenchimento Labial",
    rating: 5,
    text: "Discrição, cuidado e um resultado tão natural que parece sempre ter sido assim. Encontrei aqui muito mais do que esperava.",
  },
  {
    name: "Larissa Studart",
    initials: "LS",
    treatment: "Perfiloplastia",
    rating: 5,
    text: "Cada detalhe da clínica respira luxo e bem-estar. Resultado lindíssimo, harmônico e muito fiel a quem eu sou.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative py-24 md:py-32 bg-cream-deep overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="font-heading text-4xl md:text-5xl mt-5 mb-6 leading-tight">
            Histórias de <em className="italic bronze-text font-normal">transformação</em>
          </h2>
          <div className="bronze-divider mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((t, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 px-2 md:px-6">
                    <article className="bg-background border border-border p-8 md:p-12 lg:p-14 relative">
                      <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 text-bronze/20" strokeWidth={1} />

                      <div className="flex items-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-bronze text-bronze" strokeWidth={1.5} />
                        ))}
                      </div>

                      <blockquote className="font-heading text-xl md:text-2xl leading-relaxed text-foreground/90 italic mb-10">
                        "{t.text}"
                      </blockquote>

                      <div className="flex items-center gap-4 pt-6 border-t border-border">
                        <Avatar className="h-12 w-12 ring-1 ring-bronze/40">
                          <AvatarFallback className="bg-cream-deep text-foreground font-heading text-sm">
                            {t.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-heading text-base text-foreground">{t.name}</p>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                            {t.treatment}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="hidden md:flex absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-foreground/30 bg-background hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              className="hidden md:flex absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-foreground/30 bg-background hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-px transition-all duration-500 ${
                    selected === i ? "w-12 bg-foreground" : "w-6 bg-foreground/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA WhatsApp abaixo do carrossel */}
        <ScrollReveal delay={250}>
          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground mb-6 italic font-heading">
              Pronta para começar a sua história?
            </p>
            <a
              href={whatsappUrl("Olá! Vim pelo site e gostaria de agendar minha avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ink"
            >
              Agendar pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;

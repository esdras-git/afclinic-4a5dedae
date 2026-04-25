import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Mariana Albuquerque",
    initials: "MA",
    treatment: "Botox & Skinbooster",
    rating: 5,
    text: "A Lumina transformou minha autoestima. O atendimento é impecável, sofisticado, e os resultados naturais superaram todas as minhas expectativas. Me sinto radiante.",
  },
  {
    name: "Carolina Vasconcelos",
    initials: "CV",
    treatment: "Ultraformer III",
    rating: 5,
    text: "Ambiente luxuoso e equipe extremamente preparada. Saí da clínica me sentindo cuidada em cada detalhe. O resultado do Ultraformer foi simplesmente incrível.",
  },
  {
    name: "Beatriz Mendonça",
    initials: "BM",
    treatment: "Microagulhamento",
    rating: 5,
    text: "Profissionalismo e elegância em cada visita. Minha pele nunca esteve tão luminosa. Recomendo a Lumina de olhos fechados para quem busca excelência.",
  },
  {
    name: "Renata Cavalcante",
    initials: "RC",
    treatment: "Preenchimento Labial",
    rating: 5,
    text: "Procurei a Lumina por indicação e encontrei muito mais do que esperava. Discrição, cuidado e um resultado natural que me deixou encantada.",
  },
  {
    name: "Larissa Studart",
    initials: "LS",
    treatment: "Bioestimulador",
    rating: 5,
    text: "Cada detalhe da clínica respira luxo e bem-estar. Me senti acolhida desde o primeiro instante e o resultado do tratamento foi maravilhoso.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5500, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-forest-deep to-background">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-xs mb-4">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Histórias de <span className="gold-text italic">transformação</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A confiança e o brilho de quem viveu a experiência Lumina.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((t, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 px-2 md:px-6">
                    <article className="glass-card p-8 md:p-12 lg:p-14 relative">
                      <Quote
                        className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-primary/15"
                        strokeWidth={1}
                      />

                      <div className="flex items-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-5 h-5 fill-primary text-primary"
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>

                      <blockquote className="text-base md:text-xl leading-relaxed text-foreground/90 font-light italic mb-10">
                        "{t.text}"
                      </blockquote>

                      <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full gold-gradient blur-md opacity-40" />
                          <Avatar className="relative h-14 w-14 ring-2 ring-primary/40">
                            <AvatarFallback className="bg-gradient-to-br from-accent to-secondary text-primary font-heading text-lg">
                              {t.initials}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="font-heading text-lg text-foreground">{t.name}</p>
                          <p className="text-sm text-primary/80 tracking-wide">{t.treatment}</p>
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
              aria-label="Depoimento anterior"
              className="hidden md:flex absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full glass-card hover:bg-primary/20 transition-colors text-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo depoimento"
              className="hidden md:flex absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full glass-card hover:bg-primary/20 transition-colors text-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    selected === i ? "w-10 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;

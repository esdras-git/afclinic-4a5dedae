import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import mentoriaImg from "@/assets/mentoria-dra.jpg";
import { mentorshipUrl as buildMentorshipUrl } from "@/lib/contact";

const mentorshipUrl = buildMentorshipUrl();


const MentorshipSection = () => {
  return (
    <section
      id="mentoria"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{ backgroundColor: "#1A1A1A", color: "#FDFCFB" }}
    >
      {/* Subtle texture / vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(var(--bronze) / 0.08), transparent 60%)",
        }}
      />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — asymmetric editorial */}
          <ScrollReveal className="lg:col-span-5 lg:-ml-4">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={mentoriaImg}
                  alt="Dra. Emanuele Melo conduzindo atendimento técnico de avaliação facial"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.78) contrast(1.05) saturate(0.9)" }}
                />
                {/* Dark tonal overlay to harmonize with section */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26,26,26,0.35) 0%, rgba(26,26,26,0.55) 100%)",
                  }}
                />
                {/* Bronze accent edge */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px hsl(var(--bronze) / 0.25)" }}
                />
              </div>
              {/* Floating bronze frame */}
              <div
                className="hidden lg:block absolute -bottom-6 -right-6 w-2/3 h-2/3 -z-0"
                style={{ border: "1px solid hsl(var(--bronze) / 0.4)" }}
              />
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal className="lg:col-span-7 lg:pl-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p
              className="text-[11px] uppercase tracking-[0.35em] mb-6"
              style={{ color: "hsl(var(--bronze))" }}
            >
              Para Profissionais
            </p>

            <h2
              className="font-heading text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6"
              style={{ color: "#FDFCFB" }}
            >
              Harmonização facial sem planejamento gera excesso.{" "}
              <span className="italic" style={{ color: "hsl(var(--bronze))" }}>
                Arquitetura
              </span>{" "}
              gera elegância.
            </h2>

            <div
              className="w-16 h-px my-8 mx-auto lg:mx-0"
              style={{ backgroundColor: "hsl(var(--bronze))" }}
            />

            <p
              className="font-heading italic text-xl md:text-2xl mb-8 leading-snug"
              style={{ color: "#FDFCFB" }}
            >
              Aprenda a planejar faces, não apenas aplicar técnicas.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-12"
              style={{ color: "rgba(253,252,251,0.75)" }}
            >
              Indicado para profissionais que desejam ingressar no mundo da estética
              facial, saindo do básico e atuar com visão estratégica, segurança e
              diferenciação no mercado.
            </p>

            <a
              href={mentorshipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center text-center gap-3 px-10 py-5 text-xs font-medium uppercase rounded-sm transition-all duration-300"
              style={{
                letterSpacing: "0.18em",
                backgroundColor: "#FDFCFB",
                color: "#1A1A1A",
                boxShadow: "inset 0 0 0 1px hsl(var(--bronze) / 0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(var(--bronze))";
                e.currentTarget.style.color = "#1A1A1A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FDFCFB";
                e.currentTarget.style.color = "#1A1A1A";
              }}
            >
              Quero minha mentoria estratégica
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;

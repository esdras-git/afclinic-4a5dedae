import heroVideoMp4 from "@/assets/af-hero.mp4";
import heroVideoWebm from "@/assets/af-hero.webm";
import heroPoster from "@/assets/af-hero.jpg";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";

// Inject high-priority preload for the hero poster (LCP candidate) as soon
// as this module is evaluated, so the browser fetches it in parallel with JS.
if (typeof document !== "undefined" && !document.getElementById("hero-poster-preload")) {
  const link = document.createElement("link");
  link.id = "hero-poster-preload";
  link.rel = "preload";
  link.as = "image";
  link.href = heroPoster;
  link.setAttribute("fetchpriority", "high");
  document.head.appendChild(link);
}

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Defer video loading until the browser is idle, so it doesn't
    // compete with critical resources during TTI.
    const schedule = (cb: () => void) => {
      const w = window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(cb, { timeout: 3000 });
      } else {
        window.setTimeout(cb, 2000);
      }
    };
    schedule(() => setLoadVideo(true));
  }, []);

  useEffect(() => {
    if (loadVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [loadVideo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Background video — multi-format with poster fallback. Sources are
          attached after the page is interactive to avoid blocking TTI. */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {loadVideo && <source src={heroVideoWebm} type="video/webm" />}
        {loadVideo && <source src={heroVideoMp4} type="video/mp4" />}
      </video>
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="animate-fade-up">
            <span className="eyebrow">Arquitetura Facial Clinic</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mt-6 mb-8 animate-fade-up-delay-1">
            A beleza é uma <em className="italic font-normal bronze-text">Construção</em>.
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto animate-fade-up-delay-2">
            Método exclusivo da Dra. Emanuele Melo para harmonia, equilíbrio e naturalidade —
            construído sob medida para cada rosto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <a
            href={whatsappUrl("Olá, vim pelo site e quero agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-ink"
            onClick={() => track("cta_click", { location: "hero", label: "Agendar Avaliação", channel: "whatsapp" })}
            >
              Agendar Avaliação
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="btn-outline-ink"
              onClick={() => track("cta_click", { location: "hero", label: "Ver Tratamentos" })}
            >
              Ver Tratamentos
            </a>
          </div>
          <div className="mt-6 animate-fade-up-delay-3">
            <a
              href="#mentoria"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-bronze hover:text-foreground transition-colors"
              onClick={() => track("cta_click", { location: "hero", label: "Mentorias", channel: "navigate" })}
            >
              Sou profissional — quero a mentoria
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

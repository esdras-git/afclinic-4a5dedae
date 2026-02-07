import { MapPin, Navigation } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
              Localização
            </span>
            <h2 className="font-heading text-3xl md:text-5xl mt-4 mb-4">
              Venha nos visitar
            </h2>
            <div className="section-divider mt-6" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="glass-card overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.49!3d-3.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDQnMjQuMCJTIDM4wrAyOSc0Mi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Lumina Clinic"
                className="w-full h-full"
              />
            </div>
            <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-lg">Complexo São Mateus — Torre Saúde</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Av. Santos Dumont, 5753, 8º andar, sala 803
                    <br />
                    Fortaleza – CE
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Avenida+Santos+Dumont+5753+Fortaleza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gold-gradient text-primary-foreground font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsla(40,50%,55%,0.25)] shrink-0"
              >
                <Navigation className="w-4 h-4" />
                Como Chegar
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationSection;

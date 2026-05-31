import { Instagram, MapPin, Phone } from "lucide-react";
import afLogo from "@/assets/af-logo.png";
import { track } from "@/lib/analytics";

const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border">
      {/* Contato e info */}
      <div>
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left items-start justify-items-center md:justify-items-start">
            {/* Marca */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-5">
                <img src={afLogo} alt="" className="w-9 h-9 object-contain" />
                <div className="leading-tight">
                  <p className="font-heading text-base text-foreground">Arquitetura Facial</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Clinic</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O método exclusivo da Dra. Emanuele Melo para a construção da sua melhor versão.
              </p>
            </div>

            {/* Contato */}
            <div>
              <p className="eyebrow mb-5">Contato</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="https://wa.me/5585920001729" target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", { location: "footer", label: "WhatsApp", channel: "whatsapp" })} className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                    +55 85 92000-1729
                  </a>
                </li>
              </ul>
            </div>

            {/* Endereço */}
            <div>
              <p className="eyebrow mb-5">Endereço</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Complexo+S%C3%A3o+Mateus+Av.+Santos+Dumont+5753+Fortaleza+CE"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("map_click", { location: "footer", destination: "google_maps" })}
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  Complexo São Mateus<br />
                  Av. Santos Dumont, 5753<br />
                  Fortaleza – CE
                </span>
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="eyebrow mb-5">Siga</p>
              <a
                href="https://instagram.com/af.clinic"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("social_click", { location: "footer", network: "instagram" })}
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                @af.clinic
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Arquitetura Facial Clinic. Todos os direitos reservados.</p>
            <p className="tracking-[0.2em] uppercase">Dra. Emanuele Melo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

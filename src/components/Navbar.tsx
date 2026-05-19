import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import afLogo from "@/assets/af-logo.png";
import { whatsappUrl } from "@/lib/contact";
import { track } from "@/lib/analytics";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={afLogo} alt="Arquitetura Facial Clinic" width={56} height={56} loading="eager" decoding="async" fetchPriority="high" className="w-14 h-14 object-contain" />
          <div className="leading-tight">
            <p className="font-heading text-base md:text-lg text-foreground tracking-wide">
              Arquitetura Facial
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Dra. Emanuele Melo
            </p>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => track("nav_click", { location: "navbar_desktop", label: l.label, href: l.href })}
              className="text-xs font-body uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_click", { location: "navbar", label: "Agendar", channel: "whatsapp" })}
            className="btn-primary-ink !py-3 !px-6"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => {
                setMenuOpen(false);
                track("nav_click", { location: "navbar_mobile", label: l.label, href: l.href });
              }}
              className="block text-sm font-body uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_click", { location: "navbar_mobile", label: "Agendar", channel: "whatsapp" })}
            className="btn-primary-ink w-full"
          >
            Agendar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

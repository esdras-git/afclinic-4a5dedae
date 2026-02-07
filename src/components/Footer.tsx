import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl gold-text">Lumina Clinic</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Estética Avançada & Saúde Feminina
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/lumina.cliinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@lumina.cliinic</span>
            </a>
          </div>
        </div>

        <div className="section-divider my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lumina Clinic. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

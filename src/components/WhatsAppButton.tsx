import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5585987144701?text=Olá! Gostaria de agendar uma consulta na Lumina Clinic."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsla(40,50%,55%,0.4)]"
      aria-label="Contato via WhatsApp"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;

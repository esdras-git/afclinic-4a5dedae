import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:bg-bronze"
      aria-label="Contato via WhatsApp"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
    </a>
  );
};

export default WhatsAppButton;

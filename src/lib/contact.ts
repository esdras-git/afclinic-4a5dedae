export const WHATSAPP_NUMBER = "5585920001729";
export const WHATSAPP_SHORT_LINK = "https://wa.me/5585920001729";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar minha avaliação.";

export const whatsappUrl = (msg: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

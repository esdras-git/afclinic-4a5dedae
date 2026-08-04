export const REDIRECT_URL = "https://wa.me/5585920001729";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar minha avaliação.";

export const whatsappUrl = (msg: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `${REDIRECT_URL}?text=${encodeURIComponent(msg)}`;

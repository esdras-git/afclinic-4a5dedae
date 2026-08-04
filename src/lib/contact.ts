export const REDIRECT_URL = "https://wa.me/message/26GHY4K6S7BWA1";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar minha avaliação.";

export const whatsappUrl = (msg: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `${REDIRECT_URL}?text=${encodeURIComponent(msg)}`;

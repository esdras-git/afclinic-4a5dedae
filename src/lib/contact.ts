export const REDIRECT_URL = "https://api.cqc.onpromedia.com.br/t/63533A0A";
export const WHATSAPP_NUMBER = "5585920001729";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar minha avaliação.";

export const whatsappUrl = (msg: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `${REDIRECT_URL}?text=${encodeURIComponent(msg)}`;

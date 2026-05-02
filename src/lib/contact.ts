export const WHATSAPP_NUMBER = "5585987144701";
export const WHATSAPP_SHORT_LINK = "https://wa.me/message/SCUHZPUXERDXM1";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar minha avaliação.";
// Always returns the official short link (it carries a preset message on WhatsApp's side).
// The `msg` argument is kept for backwards compatibility but is ignored.
export const whatsappUrl = (_msg: string = WHATSAPP_DEFAULT_MESSAGE) =>
  WHATSAPP_SHORT_LINK;

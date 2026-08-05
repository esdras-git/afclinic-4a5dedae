// Links de rastreamento (API cqc/onpromedia). Eles registram o clique e
// redirecionam para o WhatsApp já com a mensagem pré-configurada no painel,
// por isso o parâmetro ?text= não é enviado (o redirecionador o ignora).
export const REDIRECT_URL = "https://api.cqc.onpromedia.com.br/t/4C91016B";
export const MENTORSHIP_REDIRECT_URL =
  "https://api.cqc.onpromedia.com.br/t/28E94B00";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar minha avaliação.";

// O parâmetro msg é mantido apenas para compatibilidade/documentação da
// intenção de cada CTA — o destino final define a mensagem.
export const whatsappUrl = (_msg: string = WHATSAPP_DEFAULT_MESSAGE) =>
  REDIRECT_URL;

export const mentorshipUrl = () => MENTORSHIP_REDIRECT_URL;

# Restaurar rastreamento dos CTAs

## Objetivo
Voltar a usar os links de rastreamento da API (cqc/onpromedia) em todos os CTAs, mantendo a mensagem já preenchida ao abrir o WhatsApp.

## O que os links fazem hoje (verificado)
Testei os dois links. Ambos registram o clique e depois redirecionam para o WhatsApp **já com uma mensagem pronta**:

- `.../t/4C91016B` → WhatsApp com: "Olá! Gostaria de mais informações sobre os procedimentos com a Dra. Emanuele Melo."
- `.../t/28E94B00` → WhatsApp com: "Olá! Tenho interesse na Mentoria de Arquitetura Facial e gostaria de mais informações."

Ponto importante: o link de rastreamento **ignora** qualquer `?text=` que a gente mande do site — ele sempre usa a mensagem configurada no painel da API. Ou seja, o preenchimento automático continua existindo, mas passa a ser **uma mensagem única por link**, e não uma mensagem diferente por botão (hoje cada tratamento manda "quero agendar Botox", "quero agendar Hydragloss" etc.).

Outro detalhe: os links apontam para o número **+55 85 99815-9271**, diferente do +55 85 92000-1729 usado hoje no site. Vale confirmar se é o número correto.

## Plano de implementação

1. **Centralizar os dois links** em `src/lib/contact.ts`:
   - `TRACKING_URL_GERAL` = `https://api.cqc.onpromedia.com.br/t/4C91016B`
   - `TRACKING_URL_MENTORIA` = `https://api.cqc.onpromedia.com.br/t/28E94B00`
   - A função `whatsappUrl()` passa a retornar o link geral (sem `?text=`, já que é ignorado), e uma nova `mentoriaUrl()` retorna o link da mentoria.

2. **Aplicar o link geral** em todos os CTAs de agendamento/tratamentos:
   - Navbar (desktop e mobile) — botão "Agendar"
   - Hero — "Agendar avaliação" e "Saiba mais sobre os tratamentos"
   - Seção de Tratamentos — botão "Agendar agora" de cada card
   - Sobre a Dra. e Depoimentos
   - Botão flutuante de WhatsApp
   - Contato (rodapé) — link do número

3. **Aplicar o link da mentoria** apenas no CTA "Quero minha mentoria estratégica" da seção Mentoria.

4. **Manter o rastreamento interno** (GA/GTM): os eventos `cta_click` continuam disparando com o rótulo de cada botão, então mesmo com mensagem única continua sendo possível saber **qual botão** gerou o clique.

5. **Exibir o número correto no rodapé**: o texto visível do telefone é ajustado para o número de destino dos links, para não haver divergência (confirmar antes qual número exibir).

## Recomendação opcional
Se quiser manter as mensagens específicas por tratamento (Botox, Hydragloss, etc.), o caminho é o cliente criar **um link de rastreamento por CTA** no painel da API, cada um com sua mensagem. Aí ganhamos rastreamento e mensagem personalizada ao mesmo tempo. Basta enviar os links e eu mapeio.

## Detalhes técnicos
- Arquivos alterados: `src/lib/contact.ts` (fonte única dos links), `src/components/MentorshipSection.tsx` (link dedicado), `src/components/Footer.tsx` (link e número exibido). Os demais componentes já consomem `whatsappUrl()`, então herdam a mudança automaticamente.
- Nenhuma alteração de layout ou design.

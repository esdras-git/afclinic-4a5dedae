import ScrollReveal from "./ScrollReveal";
import imgLimpeza from "@/assets/svc-limpeza.jpg";
import imgHydragloss from "@/assets/svc-hydragloss.jpg";
import imgMicroagulhamento from "@/assets/svc-microagulhamento.jpg";
import imgBotox from "@/assets/svc-botox.jpg";
import imgBioestimulador from "@/assets/svc-bioestimulador.jpg";
import imgOtomodelacao from "@/assets/svc-otomodelacao.jpg";
import imgPreenchimento from "@/assets/svc-preenchimento.jpg";
import imgPerfiloplastia from "@/assets/svc-perfiloplastia.jpg";
import imgTecnologias from "@/assets/svc-tecnologias.jpg";

const results = [
  {
    image: imgLimpeza,
    eyebrow: "LIMPEZA DE PELE",
    title: "Pele Purificada e Preparada",
    desc: "Remoção profunda de impurezas, devolvendo o viço e a textura ideal para realçar a sua beleza natural.",
  },
  {
    image: imgHydragloss,
    eyebrow: "HYDRAGLOSS",
    title: "Revitalização Labial",
    desc: "Hidratação intensa que restaura o brilho, a maciez e o contorno natural dos lábios.",
  },
  {
    image: imgMicroagulhamento,
    eyebrow: "MICROAGULHAMENTO",
    title: "Renovação Celular",
    desc: "Estímulo natural de colágeno para atenuar marcas, fechar poros e uniformizar o tom da pele.",
  },
  {
    image: imgBotox,
    eyebrow: "BOTOX",
    title: "Prevenção e Suavidade",
    desc: "Relaxamento muscular estratégico para suavizar linhas de expressão preservando a naturalidade dos seus movimentos.",
  },
  {
    image: imgBioestimulador,
    eyebrow: "BIOESTIMULADOR DE COLÁGENO",
    title: "Firmeza e Sustentação",
    desc: "Tratamento que age de dentro para fora, restaurando a elasticidade e combatendo a flacidez facial a longo prazo.",
  },
  {
    image: imgOtomodelacao,
    eyebrow: "OTOMODELAÇÃO",
    title: "Harmonia e Proporção",
    desc: "Ajuste sutil e não cirúrgico do formato das orelhas, promovendo equilíbrio facial e resgatando a autoconfiança.",
  },
  {
    image: imgPreenchimento,
    eyebrow: "PREENCHIMENTOS FACIAIS",
    title: "Restauração de Volume",
    desc: "Reposição estratégica de ácido hialurônico para devolver suporte, contorno e juventude ao rosto.",
  },
  {
    image: imgPerfiloplastia,
    eyebrow: "PERFILOPLASTIA",
    title: "Alinhamento de Perfil",
    desc: "Análise e preenchimento combinado de nariz, lábios e mento para criar um perfil perfeitamente equilibrado.",
  },
  {
    image: imgTecnologias,
    eyebrow: "TECNOLOGIAS",
    title: "Alta Performance",
    desc: "Protocolos avançados com equipamentos de ponta para potencializar e manter os resultados da sua arquitetura facial.",
  },
];

const spaceLetters = (s: string) => s.split("").join(" ");

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <span className="eyebrow">Casos & Resultados</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-5 leading-tight">
              Naturalidade que <em className="italic bronze-text font-normal">se vê</em>.
            </h2>
            <div className="bronze-divider mt-6" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((r, i) => (
              <article key={i} className="group">
                <div className="overflow-hidden bg-cream-deep aspect-[4/5]">
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] bronze-text mb-2">
                    {spaceLetters(r.eyebrow)}
                  </p>
                  <h3 className="font-heading text-xl text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;

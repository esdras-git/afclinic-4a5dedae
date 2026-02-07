import { Sparkles, Syringe, Heart, Apple, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import facialImg from "@/assets/facial-treatment.jpg";
import harmonizationImg from "@/assets/harmonization.jpg";

interface ServiceCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  services: string[];
  image?: string;
}

const categories: ServiceCategory[] = [
  {
    icon: Sparkles,
    title: "Estética Facial",
    description: "Protocolos personalizados para uma pele radiante e saudável.",
    services: ["Limpeza de Pele", "Microagulhamento", "Peelings", "Peeling Coreano", "Hidratação Facial", "Nutrição Facial", "Skinbooster"],
    image: facialImg,
  },
  {
    icon: Syringe,
    title: "Harmonização Facial",
    description: "Tecnologia de ponta para realçar sua beleza natural.",
    services: ["Botox", "Bioestimuladores de Colágeno", "Fios de PDO", "Ultraformer MPT", "Preenchedores", "Rinomodelação"],
    image: harmonizationImg,
  },
  {
    icon: Heart,
    title: "Saúde da Mulher",
    description: "Ginecologia e obstetrícia com cuidado integral.",
    services: ["Consultas Pré-concepcionais", "Suplementação na Gestação", "Menopausa", "Terapias Injetáveis"],
  },
  {
    icon: Apple,
    title: "Nutrição Materno Fetal",
    description: "Acompanhamento nutricional especializado em todas as fases.",
    services: ["Acompanhamento por Trimestres", "Pós-parto", "Nutrição para Endometriose", "SOP"],
  },
  {
    icon: Star,
    title: "Estética Íntima",
    description: "Procedimentos delicados com máxima discrição e tecnologia.",
    services: ["Laser Íntimo", "Harmonização Íntima", "Clareamento"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
              Nossos Serviços
            </span>
            <h2 className="font-heading text-3xl md:text-5xl mt-4 mb-4">
              Especialidades
            </h2>
            <div className="section-divider mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100}>
              <div className="glass-card p-0 overflow-hidden group h-full flex flex-col">
                {cat.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center gold-gradient">
                      <cat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl">{cat.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cat.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-body px-3 py-1 rounded-full bg-accent text-accent-foreground border border-primary/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

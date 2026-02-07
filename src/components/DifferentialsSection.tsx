import { Building2, Shield, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import doctorImg from "@/assets/doctor.jpg";

const differentials = [
  {
    icon: Building2,
    title: "Complexo São Mateus",
    desc: "Ambiente de luxo com infraestrutura hospitalar de ponta, no coração de Fortaleza.",
  },
  {
    icon: Shield,
    title: "Atendimento Exclusivo",
    desc: "Protocolos personalizados com total privacidade e conforto para cada paciente.",
  },
  {
    icon: Zap,
    title: "Tecnologia Avançada",
    desc: "Equipamentos de última geração como Ultraformer MPT e lasers de alta performance.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-sm font-body tracking-[0.3em] uppercase text-primary">
                Por que nos escolher
              </span>
              <h2 className="font-heading text-3xl md:text-5xl mt-4 mb-8">
                Excelência em cada{" "}
                <span className="gold-text italic">detalhe</span>
              </h2>

              <div className="space-y-6">
                {differentials.map((d, i) => (
                  <ScrollReveal key={d.title} delay={i * 150}>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center gold-gradient shrink-0">
                        <d.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg mb-1">{d.title}</h3>
                        <p className="text-muted-foreground text-sm">{d.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-primary/10">
                <img
                  src={doctorImg}
                  alt="Equipe Lumina Clinic"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl gold-gradient opacity-20 blur-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

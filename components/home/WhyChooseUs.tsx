import {
  Award,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    title: "Travail minutieux",
    description:
      "Chaque fenêtre est nettoyée avec soin afin d'obtenir un résultat impeccable.",
    icon: Sparkles,
  },
  {
    title: "Ponctualité",
    description:
      "Nous respectons les horaires convenus et intervenons rapidement.",
    icon: Clock3,
  },
  {
    title: "Professionnalisme",
    description:
      "Notre équipe travaille avec rigueur et respecte votre propriété.",
    icon: ShieldCheck,
  },
  {
    title: "Satisfaction garantie",
    description:
      "Notre objectif est de dépasser les attentes de chaque client.",
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Pourquoi nous choisir"
          title="Une qualité de service qui fait la différence"
          description="Nous mettons tout en œuvre pour offrir un service fiable, professionnel et à la hauteur de vos attentes."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card key={reason.title}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={28} />
                </div>
                
                    <h3 className="text-xl font-black text-slate-900">
                    {reason.title}
                    </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
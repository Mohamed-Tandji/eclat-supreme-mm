import { Building2, Home, House, Sparkles, Trees, Wrench } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const services = [
  {
    title: "Résidentiel",
    description: "Lavage de vitres pour maisons, condos et appartements.",
    icon: Home,
  },
  {
    title: "Commercial",
    description: "Entretien de vitres pour bureaux, commerces et entreprises.",
    icon: Building2,
  },
  {
    title: "Chalets",
    description: "Service adapté aux chalets et maisons de prestige.",
    icon: House,
  },
  {
    title: "Vitres intérieures et extérieures",
    description: "Nettoyage complet pour un résultat clair et impeccable.",
    icon: Sparkles,
  },
  {
    title: "Nettoyage extérieur",
    description: "Lavage de surfaces, entrées, murs, soffites et façades.",
    icon: Trees,
  },
  {
    title: "Après construction",
    description: "Nettoyage de vitres après travaux, rénovations ou chantier.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 text-slate-950">
      <Container>
        <SectionTitle
          badge="Nos services"
          title="Des services adaptés à vos besoins"
          description="Éclat Suprême MM accompagne les particuliers, les commerces et les propriétaires de chalets avec un service fiable, soigné et professionnel."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
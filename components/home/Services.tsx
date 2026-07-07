import { Building2, Home, House, Sparkles, Trees, Wrench } from "lucide-react";

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
    <section id="services" className="bg-white px-6 py-24 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
            Nos services
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Des services adaptés à vos besoins
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Éclat Suprême MM accompagne les particuliers, les commerces et les
            propriétaires de chalets avec un service fiable, soigné et
            professionnel.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
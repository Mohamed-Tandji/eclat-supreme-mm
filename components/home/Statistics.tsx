import Container from "@/components/ui/Container";

const stats = [
  {
    number: "500+",
    label: "Vitres nettoyées",
  },
  {
    number: "100%",
    label: "Clients satisfaits",
  },
  {
    number: "7j/7",
    label: "Disponibilité",
  },
  {
    number: "24h",
    label: "Réponse moyenne",
  },
];

export default function Statistics() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-5xl font-black">{item.number}</h2>

              <p className="mt-3 text-lg text-blue-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
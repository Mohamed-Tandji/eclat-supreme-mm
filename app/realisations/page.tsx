import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const realisations = [
  "/images/gallery/realisation-1.jpg",
  "/images/gallery/realisation-2.jpg",
  "/images/gallery/realisation-3.jpg",
  "/images/gallery/realisation-4.jpg",
  "/images/gallery/realisation-5.jpg",
  "/images/gallery/realisation-6.jpg",
];

export default function RealisationsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 text-slate-950">
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
              Réalisations
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
              Des résultats visibles, propres et professionnels.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Découvrez quelques réalisations effectuées pour des résidences,
              chalets et propriétés extérieures.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((image, index) => (
              <div
                key={image}
                className="group relative h-80 overflow-hidden rounded-3xl bg-slate-200 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`Réalisation Éclat Suprême MM ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
                Estimation gratuite
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
                Votre propriété mérite le même niveau de soin.
              </h2>
            </div>

            <Link
              href="/estimation"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Demander une estimation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
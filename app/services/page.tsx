import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/home/Services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-32 text-slate-950">
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
              Services
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
              Des services de nettoyage adaptés à chaque propriété.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Éclat Suprême MM offre des services professionnels pour les
              maisons, chalets, commerces et propriétés nécessitant un entretien
              soigné.
            </p>

            <div className="mt-8">
              <Link
                href="/estimation"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Demander une estimation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Services />
      </main>

      <Footer />
    </>
  );
}
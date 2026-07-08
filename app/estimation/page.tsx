import {
  CheckCircle2,
  Home,
  Building2,
  Mountain,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EstimationPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
              Estimation gratuite
            </p>

            <h1 className="mt-5 text-5xl font-black text-white">
              Obtenez votre estimation
              <span className="text-blue-500"> gratuitement.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Chaque propriété est différente. Nous évaluons gratuitement votre
              projet afin de vous proposer un prix juste, transparent et sans
              engagement.
            </p>
          </div>
        </section>

        {/* Types de services */}
        <section className="bg-white py-24 text-slate-900">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <Home className="text-blue-600" size={34} />
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Résidentiel
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Maisons, condos, appartements, fenêtres intérieures et
                extérieures.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <Building2 className="text-blue-600" size={34} />
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Commercial
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Bureaux, commerces, immeubles et vitrines.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <Mountain className="text-blue-600" size={34} />
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                Chalets
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Service spécialisé pour les chalets et maisons de prestige.
              </p>
            </div>
          </div>
        </section>

        {/* Étapes */}
        <section className="bg-slate-50 py-24 text-slate-900">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-4xl font-black text-slate-900">
              Comment ça fonctionne ?
            </h2>

            <div className="mt-16 space-y-8">
              <div className="flex gap-5">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-600"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    1. Contactez-nous
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Appelez-nous ou envoyez votre demande.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-600"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    2. Évaluation
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Nous analysons votre propriété et vos besoins.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-600"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    3. Soumission gratuite
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Vous recevez un prix clair, sans engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col justify-center gap-5 sm:flex-row">
              <a
                href="tel:6136762099"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-black text-white transition hover:bg-blue-700"
              >
                Appeler maintenant
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-8 py-4 font-black text-slate-900 transition hover:bg-slate-100"
              >
                Nous contacter
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
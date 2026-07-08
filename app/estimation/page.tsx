import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  Mountain,
  Phone,
  Send,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EstimationPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
                Estimation gratuite
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight text-white">
                Obtenez votre estimation
                <span className="text-blue-500"> gratuitement.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Remplissez ce formulaire et notre équipe vous contactera
                rapidement pour vous proposer une estimation claire, juste et
                sans engagement.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-blue-100">
                  Résidentiel
                </span>
                <span className="rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-blue-100">
                  Commercial
                </span>
                <span className="rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-blue-100">
                  Chalets
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h2 className="text-2xl font-black text-white">
                Réponse rapide
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Cette version est statique pour la démonstration. Après
                validation, le formulaire sera connecté pour envoyer les
                demandes directement par courriel.
              </p>

              <a
                href="tel:6136762099"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-700"
              >
                <Phone size={20} />
                613-676-2099
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 text-slate-900">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-3">
            {[
              {
                title: "Résidentiel",
                text: "Maisons, condos, appartements, fenêtres intérieures et extérieures.",
                icon: Home,
              },
              {
                title: "Commercial",
                text: "Bureaux, commerces, immeubles et vitrines.",
                icon: Building2,
              },
              {
                title: "Chalets",
                text: "Service spécialisé pour les chalets et maisons de prestige.",
                icon: Mountain,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Icon size={34} />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-50 py-24 text-slate-900">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
                Demande d’estimation
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900">
                Donnez-nous quelques détails sur votre projet.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Ces informations permettent à l’équipe de comprendre vos besoins
                avant de vous rappeler.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Estimation gratuite",
                  "Prix clair et transparent",
                  "Réponse rapide",
                  "Aucun engagement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600" size={22} />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="mt-2 h-14 w-full rounded-2xl border border-slate-200 px-4 text-slate-900 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="613-000-0000"
                    className="mt-2 h-14 w-full rounded-2xl border border-slate-200 px-4 text-slate-900 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Courriel
                  </label>
                  <input
                    type="email"
                    placeholder="exemple@email.com"
                    className="mt-2 h-14 w-full rounded-2xl border border-slate-200 px-4 text-slate-900 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Ville
                  </label>
                  <input
                    type="text"
                    placeholder="Gatineau, Ottawa..."
                    className="mt-2 h-14 w-full rounded-2xl border border-slate-200 px-4 text-slate-900 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-bold text-slate-700">
                  Type de propriété
                </label>
                <select className="mt-2 h-14 w-full rounded-2xl border border-slate-200 px-4 text-slate-900 outline-none focus:border-blue-600">
                  <option>Résidentiel</option>
                  <option>Commercial</option>
                  <option>Chalet</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="text-sm font-bold text-slate-700">
                  Service souhaité
                </label>

                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {[
                    "Vitres extérieures",
                    "Vitres intérieures",
                    "Moustiquaires",
                    "Après construction",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 text-slate-700"
                    >
                      <input type="checkbox" />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  placeholder="Décrivez rapidement votre besoin..."
                  className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 p-4 text-slate-900 outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-black text-white transition hover:bg-blue-700"
              >
                Envoyer ma demande
                <Send size={18} />
              </button>

              <p className="mt-4 text-center text-sm text-slate-500">
                Formulaire statique pour la démonstration. Connexion courriel à
                venir.
              </p>
            </form>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
                Besoin d’une réponse rapide ?
              </p>

              <h2 className="mt-4 text-4xl font-black text-white">
                Appelez directement notre équipe.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-black text-white transition hover:bg-blue-700"
            >
              Aller au contact
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
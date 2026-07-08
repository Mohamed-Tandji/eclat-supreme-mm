import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h1 className="mt-5 text-5xl font-black text-white">
              Parlons de votre projet.
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-300">
              Nous répondons rapidement à toutes vos demandes. L'estimation est
              entièrement gratuite.
            </p>
          </div>
        </section>

        <section className="bg-white py-24 text-slate-950">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex gap-5">
                <Phone className="text-blue-600" />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Téléphone
                  </h3>

                  <p className="mt-2 text-slate-600">613-676-2099</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="text-blue-600" />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Courriel
                  </h3>

                  <p className="mt-2 text-slate-600">
                    contact@eclatsuprememm.ca
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="text-blue-600" />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Secteurs desservis
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Ottawa • Gatineau • Outaouais
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock3 className="text-blue-600" />

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Disponibilité
                  </h3>

                  <p className="mt-2 text-slate-600">7 jours sur 7</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
              <h2 className="text-3xl font-black text-slate-900">
                Demande de contact
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Le formulaire interactif sera ajouté dans la prochaine version
                du site.
              </p>

              <div className="mt-10 space-y-4">
                <div className="h-14 rounded-xl border border-slate-200 bg-white" />
                <div className="h-14 rounded-xl border border-slate-200 bg-white" />
                <div className="h-14 rounded-xl border border-slate-200 bg-white" />
                <div className="h-40 rounded-xl border border-slate-200 bg-white" />

                <button className="w-full rounded-2xl bg-blue-600 py-4 font-black text-white">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
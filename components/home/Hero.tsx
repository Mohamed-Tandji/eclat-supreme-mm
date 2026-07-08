import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white"
    >
      <Image
        src="/images/hero/hero-1.jpg"
        alt="Lavage de vitres professionnel Éclat Suprême MM"
        fill
        priority
        className="object-cover object-[75%_center] brightness-90"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-12">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300 backdrop-blur">
            <Sparkles size={15} />
            Lavage de vitres professionnel
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Redonnez
            <br />
            <span className="text-blue-500">tout leur éclat</span>
            <br />à vos vitres.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
            Éclat Suprême MM offre un service professionnel de lavage de vitres
            pour les résidences, les commerces et les chalets. Estimation
            gratuite, travail minutieux et résultat impeccable.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/estimation"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Obtenir une estimation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/realisations"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
            >
              Voir nos réalisations
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Sparkles className="mb-2 text-blue-400" size={22} />
              <p className="text-sm font-bold">Estimation gratuite</p>
              <p className="mt-1 text-xs text-slate-300">Réponse rapide</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <ShieldCheck className="mb-2 text-blue-400" size={22} />
              <p className="text-sm font-bold">Service professionnel</p>
              <p className="mt-1 text-xs text-slate-300">Travail minutieux</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <CalendarCheck className="mb-2 text-blue-400" size={22} />
              <p className="text-sm font-bold">Réservation simple</p>
              <p className="mt-1 text-xs text-slate-300">Contact direct</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            <div>
              <p className="text-xl font-black text-blue-400 md:text-2xl">
                500+
              </p>
              <p className="mt-1 text-xs text-slate-300">Projets réalisés</p>
            </div>

            <div>
              <p className="text-xl font-black text-blue-400 md:text-2xl">
                100%
              </p>
              <p className="mt-1 text-xs text-slate-300">Satisfaction visée</p>
            </div>

            <div>
              <p className="text-xl font-black text-blue-400 md:text-2xl">
                7j/7
              </p>
              <p className="mt-1 text-xs text-slate-300">Disponibilité</p>
            </div>

            <div>
              <div className="flex gap-1 text-blue-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Service professionnel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
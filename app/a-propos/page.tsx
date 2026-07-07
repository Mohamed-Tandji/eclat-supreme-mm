
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 pt-32">
        <div className="mx-auto max-w-6xl px-6">

          <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
            À propos
          </span>

          <h1 className="mt-4 text-5xl font-black text-slate-950 md:text-6xl">
            Qui sommes-nous ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Éclat Suprême MM est une entreprise spécialisée dans le lavage de
            vitres offrant un service fiable, professionnel et minutieux.
          </p>

        </div>
      </main>
        <Footer />
    </>
  );
}
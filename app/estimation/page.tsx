import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EstimationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32">
        <div className="mx-auto max-w-4xl px-6">

          <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
            Estimation
          </span>

          <h1 className="mt-4 text-5xl font-black text-slate-950 md:text-6xl">
            Obtenir une estimation gratuite
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Remplissez le formulaire afin de recevoir une estimation rapide et
            sans engagement.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
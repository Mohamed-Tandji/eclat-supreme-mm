import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32">
        <div className="mx-auto max-w-5xl px-6">

          <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
            Contact
          </span>

          <h1 className="mt-4 text-5xl font-black text-slate-950 md:text-6xl">
            Contactez-nous
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Une question ? Un projet ? Nous sommes disponibles pour vous
            répondre rapidement.
          </p>

        </div>
      </main>
        <Footer />
    </>
  );
}
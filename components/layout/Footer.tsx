import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo/logo.png"
            alt="Éclat Suprême MM"
            width={160}
            height={160}
            className="h-20 w-auto"
          />
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Lavage de vitres résidentiel, commercial et chalets. Service
            professionnel, fiable et minutieux.
          </p>
        </div>

        <div>
          <h3 className="font-black">Navigation</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/estimation">Estimation</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black">Services</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <span>Résidentiel</span>
            <span>Commercial</span>
            <span>Chalets</span>
            <span>Vitres intérieures/extérieures</span>
            <span>Nettoyage extérieur</span>
          </div>
        </div>

        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 flex flex-col gap-4 text-sm text-slate-300">
            <a href="tel:6136762099" className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              613-676-2099
            </a>
            <a href="tel:8199838541" className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              819-983-8541
            </a>
            <a
              href="mailto:info@eclatsuprememm.com"
              className="flex items-center gap-3"
            >
              <Mail size={18} className="text-blue-400" />
              info@eclatsuprememm.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-400" />
              Québec, Canada
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © 2026 Éclat Suprême MM. Tous droits réservés.
      </div>
    </footer>
  );
}
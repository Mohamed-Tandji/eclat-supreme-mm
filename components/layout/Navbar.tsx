import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Estimation", href: "/estimation" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Éclat Suprême MM"
            width={180}
            height={180}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-blue-400">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/estimation"
          className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 lg:flex"
        >
          <CalendarCheck size={18} />
          Estimation gratuite
        </Link>
      </div>
    </header>
  );
}
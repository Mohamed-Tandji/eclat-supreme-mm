import Image from "next/image";
import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { company } from "@/data/company";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo/logo.png"
              alt={company.name}
              width={180}
              height={180}
              className="h-20 w-auto"
            />

            <p className="mt-6 leading-7 text-slate-300">
              {company.description}
            </p>

            <div className="mt-8 flex gap-4">
              {company.facebook && (
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
              )}

              {company.instagram && (
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black">Navigation</h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-blue-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black">Nos services</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Résidentiel</li>
              <li>Commercial</li>
              <li>Chalets</li>
              <li>Vitres intérieures</li>
              <li>Vitres extérieures</li>
              <li>Après construction</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black">Contact</h3>

            <div className="mt-6 space-y-5">
              <a
                href={`tel:${company.phone1}`}
                className="flex items-center gap-3 text-slate-300 transition hover:text-blue-400"
              >
                <Phone size={18} className="text-blue-500" />
                <span>{company.phone1}</span>
              </a>

              <a
                href={`tel:${company.phone2}`}
                className="flex items-center gap-3 text-slate-300 transition hover:text-blue-400"
              >
                <Phone size={18} className="text-blue-500" />
                <span>{company.phone2}</span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-slate-300 transition hover:text-blue-400"
              >
                <Mail size={18} className="text-blue-500" />
                <span>{company.email}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-blue-500" />
                <span>{company.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {company.name}. Tous droits réservés.
            </p>

            <p className="text-sm text-slate-400">
              Conçu et développé par{" "}
              <a
                href="https://mahamadou.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition hover:text-blue-400"
              >
                MT Origins
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
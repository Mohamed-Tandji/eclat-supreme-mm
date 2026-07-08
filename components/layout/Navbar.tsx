"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/data/navigation";
import { company } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-lg">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt={company.name}
            width={170}
            height={170}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white transition hover:text-blue-400"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <Link
          href="/estimation"
          className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          <CalendarCheck size={18} />
          Estimation gratuite
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-slate-950">
          <nav className="flex flex-col px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-white transition hover:text-blue-400"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/estimation"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Obtenir une estimation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
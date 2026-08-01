"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Results", href: "#results" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-slate-200/70"
            : "bg-white/80 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo.jpg"
              alt="AdsLyve Media"
              width={190}
              height={0}
              priority
              className="h-20 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative rounded-full px-5 py-2.5 text-[15px] font-medium text-slate-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-fuchsia-50 hover:via-violet-50 hover:to-blue-50 hover:text-fuchsia-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="relative z-10">Free Consultation</span>

              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-600 to-fuchsia-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-fuchsia-300 hover:text-fuchsia-600 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          mobileMenu
            ? "visible bg-black/40 backdrop-blur-sm"
            : "invisible bg-transparent"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => setMobileMenu(false)}
        />

        <div
          className={`absolute right-0 top-0 flex h-dvh w-[320px] max-w-[88%] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 shrink-0">
            <Image
              src="/logo.jpg"
              alt="AdsLyve Media"
              width={150}
              height={50}
              className="h-24 w-auto object-contain"
              priority
            />

            <button
              onClick={() => setMobileMenu(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition hover:bg-slate-100"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center rounded-xl px-4 py-4 text-base font-medium text-slate-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-fuchsia-50 hover:to-blue-50 hover:text-fuchsia-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

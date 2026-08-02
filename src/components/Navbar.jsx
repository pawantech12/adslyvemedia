"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  UserRound,
  BriefcaseBusiness,
  Workflow,
  Building2,
  BarChart3,
  HelpCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    name: "Services",
    href: "#services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Process",
    href: "#process",
    icon: Workflow,
  },
  {
    name: "Industries",
    href: "#industries",
    icon: Building2,
  },
  {
    name: "Results",
    href: "#results",
    icon: BarChart3,
  },
  {
    name: "FAQ",
    href: "#faq",
    icon: HelpCircle,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Phone,
  },
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

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/60 bg-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-3xl"
            : "bg-white/60 backdrop-blur-2xl"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 via-violet-500 to-emerald-500" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-50/40 via-transparent to-fuchsia-50/40" />

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group relative flex items-center transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/20 via-fuchsia-300/20 to-emerald-300/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <Image
              src="/logo.png"
              alt="AdsLyve Media"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="relative h-32 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/70 bg-white/75 p-2 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative overflow-hidden rounded-full px-5 py-2.5 text-[15px] font-semibold text-slate-700 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-50 via-blue-50 via-violet-50 to-fuchsia-50 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                <span className="absolute bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-600 transition-all duration-300 group-hover:w-8" />

                <span className="relative transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:via-violet-600 group-hover:to-fuchsia-600 group-hover:bg-clip-text group-hover:text-transparent">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(99,102,241,0.25)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_22px_55px_rgba(6,182,212,0.30)]"
            >
              <span className="relative z-10">Free Consultation</span>

              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <span className="absolute -left-20 top-0 h-full w-16 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu(true)}
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 text-slate-700 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-[0_18px_40px_rgba(6,182,212,0.18)] lg:hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-fuchsia-50 opacity-0 transition duration-300 group-hover:opacity-100" />

            <Menu size={24} className="relative z-10" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          mobileMenu
            ? "visible bg-slate-900/40 backdrop-blur-md"
            : "invisible bg-transparent"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => setMobileMenu(false)}
        />

        <div
          className={`absolute right-0 top-0 z-[110] flex h-[100dvh] w-[340px] max-w-[90%] flex-col overflow-hidden border-l border-white/60 bg-white/90 shadow-[0_25px_80px_rgba(15,23,42,0.15)] backdrop-blur-3xl transition-transform duration-500 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 via-violet-500 to-emerald-500" />

          <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-6 py-5">
            <Image
              src="/logo.png"
              alt="AdsLyve Media"
              width={150}
              height={50}
              priority
              className="h-24 w-auto object-contain"
            />

            <button
              onClick={() => setMobileMenu(false)}
              className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-fuchsia-50 hover:text-cyan-600"
            >
              <X
                size={22}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-7">
            <nav className="space-y-2 pb-6">
              {navLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:via-blue-50 hover:to-fuchsia-50 hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)]"
                  >
                    {/* Animated Left Gradient Line */}
                    <span
                      className="
      absolute left-0 top-0 h-full w-1 
      bg-gradient-to-b from-cyan-500 via-violet-500 to-fuchsia-500
      opacity-0 transition-all duration-500
      group-hover:opacity-100
      "
                    />

                    <div className="flex items-center gap-4">
                      {/* icon Badge */}
                      <span
                        className="
        flex h-9 w-9 items-center justify-center rounded-xl
        bg-gradient-to-br from-slate-100 to-white
        text-xs font-bold text-slate-500
        shadow-sm transition-all duration-500
        group-hover:bg-gradient-to-r
        group-hover:from-cyan-500
        group-hover:via-violet-500
        group-hover:to-fuchsia-500
        group-hover:text-white
        "
                      >
                        <Icon size={18} />
                      </span>

                      {/* Link Text */}
                      <span
                        className="
        text-base font-semibold text-slate-700
        transition-all duration-500
        group-hover:translate-x-1
        group-hover:bg-gradient-to-r
        group-hover:from-cyan-600
        group-hover:via-violet-600
        group-hover:to-fuchsia-600
        group-hover:bg-clip-text
        group-hover:text-transparent
        "
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <span
                      className="
      flex h-10 w-10 items-center justify-center rounded-full
      bg-slate-100 text-slate-400
      transition-all duration-500
      group-hover:bg-gradient-to-r
      group-hover:from-cyan-500
      group-hover:via-blue-500
      group-hover:to-fuchsia-500
      group-hover:text-white
      group-hover:rotate-[-45deg]
      "
                    >
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-500 group-hover:translate-x-0.5"
                      />
                    </span>

                    {/* Hover Glow */}
                    <span
                      className="
      pointer-events-none absolute -right-10 -top-10 
      h-24 w-24 rounded-full 
      bg-cyan-400/20 blur-3xl
      opacity-0 transition-opacity duration-500
      group-hover:opacity-100
      "
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 mb-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-fuchsia-50 p-6">
              <p className="text-sm font-medium text-slate-500">
                Ready to grow your business?
              </p>

              <h4 className="mt-2 text-xl font-bold text-slate-900">
                Let's Build Something Amazing
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Book a free consultation and discover how AdsLyve Media can help
                your business generate more leads and maximize ROI.
              </p>

              <Link
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="group relative mt-6 flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(99,102,241,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(6,182,212,0.30)]"
              >
                <span className="relative z-10">Free Consultation</span>

                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute -left-20 top-0 h-full w-16 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

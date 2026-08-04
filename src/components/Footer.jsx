"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "SEO",
  "Performance Marketing",
  "Google Ads",
  "Meta Ads",
  "Digital Marketing",
  "Web & App Development",
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
    color:
      "hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white",
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
    color:
      "hover:bg-gradient-to-r hover:from-pink-500 hover:via-fuchsia-500 hover:to-orange-400 hover:text-white",
  },
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    color:
      "hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:text-white",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="group relative flex w-fit rounded-md bg-white p-2 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/20 via-fuchsia-300/20 to-emerald-300/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

              <Image
                src="/logo-dark.png"
                alt="AdsLyve Media"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="relative h-16 w-auto object-contain sm:h-18 lg:h-20"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Helping businesses grow through data-driven digital marketing,
              SEO, paid advertising, and measurable performance strategies.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>

            <div className="space-y-2.5">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2.5 text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>

            <div className="space-y-2.5">
              {services.map((service) => (
                <div
                  key={service}
                  className="group flex cursor-pointer items-center gap-2.5 text-sm text-slate-400 transition hover:text-fuchsia-400"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition group-hover:scale-125" />

                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className={`group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${item.color}`}
                  >
                    <Icon
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}

        <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} ADSLYVE MEDIA. All rights reserved.
            </p>

            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

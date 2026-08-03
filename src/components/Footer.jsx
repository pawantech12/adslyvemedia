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
      {/* Background Effects */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-0 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="group bg-white w-fit rounded-md p-2 relative flex items-center transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/20 via-fuchsia-300/20 to-emerald-300/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <Image
                src="/logo-dark.png"
                alt="AdsLyve Media"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="relative h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
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
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>

            <div className="space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
                >
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
            <h3 className="mb-6 text-lg font-bold text-white">Services</h3>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="group flex cursor-pointer items-center gap-3 text-slate-400 transition hover:text-fuchsia-400"
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
            <h3 className="mb-6 text-lg font-bold text-white">Follow Us</h3>

            <div className="space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 ${item.color}`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Icon size={20} />
                    </div>

                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} ADSLYVE MEDIA. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
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

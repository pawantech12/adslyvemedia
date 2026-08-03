"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@adslyvemedia.com",
    href: "mailto:info@adslyvemedia.com",
    gradient: "from-cyan-500 via-blue-500 to-violet-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Gurugram, India",
    href: "#",
    gradient: "from-fuchsia-600 via-violet-600 to-indigo-600",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 max-sm:py-10"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.15, 1, 1.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-0 top-10 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-[0_12px_30px_rgba(6,182,212,.18)] backdrop-blur-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Sparkles size={14} />
            </span>
            Contact Us
          </motion.span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Whether you're looking to increase traffic, generate more leads, or
            improve your digital presence, we're here to help.
          </p>
        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_30px_80px_rgba(15,23,42,.08)] backdrop-blur-2xl sm:mt-14 sm:rounded-[32px] sm:p-6 lg:mt-16 lg:rounded-[36px] lg:p-10"
        >
          {/* Top Gradient */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500" />

          {/* Background Glow */}

          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-fuchsia-400/15 blur-[100px]" />

          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-cyan-400/15 blur-[100px]" />

          {/* Contact Cards */}

          <div className="relative grid gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`group relative overflow-hidden rounded-[22px] border ${item.border} bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-xl sm:rounded-[24px] sm:p-6 lg:rounded-[28px] lg:p-7`}
                >
                  {/* Left Gradient */}

                  <div
                    className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.gradient}`}
                  />

                  {/* Hover Glow */}

                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${item.bg} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                  />

                  {/* Icon */}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-16 sm:w-16`}
                  >
                    <Icon size={26} className="sm:h-7 sm:w-7" />
                  </div>

                  {/* Title */}

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:mt-6 sm:text-sm">
                    {item.title}
                  </p>

                  {/* Value */}

                  <h3 className="mt-2 break-words text-lg font-bold leading-7 text-slate-900 sm:mt-3 sm:text-xl sm:leading-8">
                    {item.value}
                  </h3>

                  {/* Bottom */}

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-slate-400 transition duration-300 group-hover:translate-x-2 group-hover:text-cyan-600" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Bottom CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-8 overflow-hidden rounded-[24px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:mt-10 sm:rounded-[28px] sm:p-8"
          >
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-8">
              {/* Left */}

              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Ready to Grow Faster?
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Schedule a free consultation and discover how AdsLyve Media
                  can help your business generate more leads, increase revenue,
                  and build a stronger digital presence.
                </p>
              </div>

              {/* Button */}

              <Link
                href="#"
                className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-7 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(99,102,241,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] sm:h-14 sm:w-auto sm:px-8 sm:text-base"
              >
                Get In Touch
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

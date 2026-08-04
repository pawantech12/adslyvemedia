"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { Handshake } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-12 sm:py-14 lg:py-16"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[90px] lg:h-96 lg:w-96"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 70, 0],
            scale: [1.15, 1, 1.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -right-20 top-8 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px] lg:h-[420px] lg:w-[420px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[90px] lg:h-80 lg:w-80"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl sm:p-7 lg:rounded-[34px] lg:p-10"
        >
          {/* Top Border */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500" />

          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Badge */}

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
                <Handshake size={13} />
              </span>
              Let's Grow Together
            </motion.div>

            {/* Heading */}

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Grow Your Business?
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Let's build a digital marketing strategy that generates qualified
              leads, improves visibility, and helps your business scale with
              confidence.
            </p>

            {/* Features */}

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {[
                "Free Strategy Session",
                "No Long-Term Contracts",
                "ROI Focused Campaigns",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl sm:px-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                    <CheckCircle2 size={12} />
                  </div>

                  <span className="text-xs font-medium text-slate-200 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(79,70,229,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] sm:h-14 sm:px-8 sm:text-base"
              >
                <span className="relative z-10 flex items-center">
                  Book Free Consultation
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white shadow-lg">
                  <TrendingUp size={18} />
                </div>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    Business Growth
                  </p>

                  <h4 className="text-sm font-bold text-white">
                    ROI-Driven Marketing
                  </h4>
                </div>
              </motion.div>
            </div>

            {/* Bottom */}

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="mx-auto max-w-3xl text-xs leading-6 text-slate-400 sm:text-sm">
                Trusted by startups, growing businesses, and established brands
                to increase leads, improve visibility, and achieve measurable
                digital growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

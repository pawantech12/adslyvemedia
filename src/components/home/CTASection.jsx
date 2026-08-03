"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 max-sm:py-10"
    >
      {/* Background Effects */}

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
          className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/20 blur-[120px]"
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
          className="absolute -right-24 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl sm:p-10 lg:p-16"
        >
          {/* Decorative */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500" />

          <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Badge */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
                <Sparkles size={14} />
              </span>
              Let's Grow Together
            </motion.div>

            {/* Heading */}

            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Grow Your Business?
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Let's build a digital marketing strategy that delivers measurable
              results, generates qualified leads, and helps your business scale
              with confidence.
            </p>

            {/* Features */}

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {[
                "Free Strategy Session",
                "No Long-Term Contracts",
                "ROI Focused Campaigns",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                    <CheckCircle2 size={14} />
                  </div>

                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="#contact"
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-10 text-lg font-semibold text-white shadow-[0_25px_60px_rgba(79,70,229,.35)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Free Consultation
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white shadow-lg">
                  <TrendingUp size={22} />
                </div>

                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest text-cyan-300">
                    Business Growth
                  </p>

                  <h4 className="font-bold text-white">ROI-Driven Marketing</h4>
                </div>
              </motion.div>
            </div>

            {/* Bottom Trust Text */}

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm leading-7 text-slate-400">
                Trusted by startups, growing businesses, and established brands
                looking to increase leads, improve online visibility, and
                achieve measurable digital growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

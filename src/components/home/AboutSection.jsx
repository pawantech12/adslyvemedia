"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Users,
  Rocket,
  BarChart3,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 max-sm:gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.span
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-lg backdrop-blur-xl"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
                <Sparkles size={14} />
              </span>
              About AdsLyve Media
            </motion.span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We Don't Just Run Ads.
              <span className="block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
                We Build Growth Engines.
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
              AdsLyve Media is a performance-driven digital marketing agency
              committed to helping businesses grow online.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
              Our expertise lies in combining creativity with data to build
              marketing campaigns that increase traffic, improve conversions,
              and maximize return on investment.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
              We partner with businesses across industries to create customized
              digital strategies that generate real business results.
            </p>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-fuchsia-300/40"
            >
              Let's Grow Together
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-4"
          >
            {/* Mission */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white/90 p-4 sm:p-5 shadow-[0_12px_35px_rgba(15,23,42,.06)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-600 to-blue-500" />

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
                  <Target size={22} />
                </div>

                <div className="flex-1">
                  <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-[11px] font-semibold text-fuchsia-700">
                    Mission
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Our Mission
                  </h3>

                  <p className="mt-2 text-[15px] leading-6 text-slate-600">
                    To help brands grow faster through innovative, measurable
                    and performance-driven digital marketing solutions that
                    create lasting business impact.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white/90 p-4 sm:p-5 shadow-[0_12px_35px_rgba(15,23,42,.06)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500" />

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-lg">
                  <Eye size={22} />
                </div>

                <div className="flex-1">
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-semibold text-blue-700">
                    Vision
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Our Vision
                  </h3>

                  <p className="mt-2 text-[15px] leading-6 text-slate-600">
                    To become one of India's most trusted digital growth
                    partners by delivering exceptional results, meaningful
                    relationships and sustainable long-term value.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

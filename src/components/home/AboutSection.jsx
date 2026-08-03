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
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 max-sm:py-10"
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
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-[0_12px_30px_rgba(6,182,212,.18)] backdrop-blur-xl"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
                <Sparkles size={14} />
              </span>
              About AdsLyve Media
            </motion.span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-5xl ">
              We Don't Just Run Ads.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
                We Build Growth Engines.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              AdsLyve Media is a performance-driven digital marketing agency
              committed to helping businesses grow online.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our expertise lies in combining creativity with data to build
              marketing campaigns that increase traffic, improve conversions,
              and maximize return on investment.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We partner with businesses across industries to create customized
              digital strategies that generate real business results.
            </p>

            <Link
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-7 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-fuchsia-300/40"
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
            className="relative"
          >
            <div className="relative rounded-[35px] overflow-hidden border border-white/70 bg-white/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,.15)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500" />

              {/* Mission */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="
    group relative overflow-hidden rounded-[24px] sm:rounded-[28px]
    border border-slate-200 
    bg-white 
    p-5 sm:p-6 lg:p-7
    shadow-sm 
    transition-all duration-500 
    hover:shadow-xl
  "
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-600 to-blue-500" />

                <div className="flex flex-col gap-5 sm:flex-row sm:gap-5">
                  <div
                    className="
        flex h-14 w-14 shrink-0
        sm:h-16 sm:w-16
        items-center justify-center
        rounded-2xl
        bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500
        text-white shadow-lg
      "
                  >
                    <Target size={26} className="sm:h-[30px] sm:w-[30px]" />
                  </div>

                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-600">
                      Mission
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-slate-900 sm:mt-4 sm:text-2xl">
                      Our Mission
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                      To help brands grow faster through innovative, measurable,
                      and performance-driven digital marketing solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="
    group relative mt-5 overflow-hidden rounded-[24px] sm:mt-6 sm:rounded-[28px]
    border border-slate-200 
    bg-white 
    p-5 sm:p-6 lg:p-7
    shadow-sm 
    transition-all duration-500 
    hover:shadow-xl
  "
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500" />

                <div className="flex flex-col gap-5 sm:flex-row sm:gap-5">
                  <div
                    className="
        flex h-14 w-14 shrink-0
        sm:h-16 sm:w-16
        items-center justify-center
        rounded-2xl
        bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600
        text-white shadow-lg
      "
                  >
                    <Eye size={26} className="sm:h-[30px] sm:w-[30px]" />
                  </div>

                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                      Vision
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-slate-900 sm:mt-4 sm:text-2xl">
                      Our Vision
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                      To become one of India's most trusted digital growth
                      partners by delivering exceptional results and long-term
                      value.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

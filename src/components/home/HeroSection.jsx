"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-36 pb-20 lg:pb-28"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f915_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f915_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-[0_12px_30px_rgba(6,182,212,0.18)] backdrop-blur-xl"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Sparkles size={14} />
            </div>
            Digital Marketing Agency
          </motion.span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Data-Driven
            </span>{" "}
            Digital Marketing
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            We help businesses attract more customers, generate qualified leads,
            and maximize ROI through strategic digital marketing solutions.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            From SEO and Performance Marketing to Google Ads and Meta
            Advertising, our team creates campaigns that deliver measurable
            business growth—not just clicks.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-8 text-base font-semibold text-white shadow-[0_18px_45px_rgba(79,70,229,0.30)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_22px_55px_rgba(14,165,233,0.35)]"
            >
              <span className="relative z-10 flex items-center">
                Book a Free Consultation
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>

              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white/90 px-8 text-base font-semibold text-slate-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:via-blue-50 hover:to-violet-50 hover:text-cyan-700 hover:shadow-[0_15px_40px_rgba(6,182,212,0.18)]"
            >
              <span className="flex items-center gap-2">
                Get a Marketing Audit
                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                >
                  <ArrowRight size={14} />
                </motion.div>
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full justify-center"
        >
          {/* Floating Growth Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="pointer-events-none absolute -left-5 top-10 z-20 hidden xl:block"
          >
            <div className="rounded-2xl border border-emerald-100 bg-white/90 px-5 py-4 shadow-[0_20px_50px_rgba(16,185,129,0.12)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg">
                  <Zap className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Campaign Growth
                  </p>

                  <h4 className="mt-1 text-xl font-bold text-slate-900">
                    +142%
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating ROI Card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="pointer-events-none absolute -right-5 bottom-10 z-20 hidden xl:block"
          >
            <div className="rounded-2xl border border-orange-100 bg-white/90 px-5 py-4 shadow-[0_20px_50px_rgba(249,115,22,0.12)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white shadow-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Average ROI
                  </p>

                  <h4 className="mt-1 text-xl font-bold text-slate-900">
                    320%
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Dashboard */}
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-fuchsia-400/15 via-cyan-300/20 to-emerald-400/15 blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-2 sm:inset-3 rounded-[40px] border border-dashed border-fuchsia-200"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 sm:inset-10 rounded-[34px] border border-dashed border-cyan-200"
            />

            <div
              className="
      relative overflow-hidden rounded-[30px] sm:rounded-[36px]
      border border-white/60
      bg-white/85
      p-4 sm:p-6 lg:p-8
      shadow-[0_35px_90px_rgba(15,23,42,0.14)]
      backdrop-blur-2xl
      "
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500" />

              {/* Floating Icon */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
        absolute right-4 top-4 sm:right-6 sm:top-6
        flex h-14 w-14 sm:h-16 sm:w-16
        items-center justify-center
        rounded-3xl
        bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500
        text-white shadow-2xl
        "
              >
                <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />
              </motion.div>

              <div className="space-y-4 sm:space-y-5 pt-8 sm:pt-10">
                {/* Marketing Card */}

                <motion.div
                  whileHover={{ y: -5 }}
                  className="
          rounded-3xl
          border border-slate-200
          bg-gradient-to-r from-white to-cyan-50
          p-4 sm:p-5
          "
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white shadow-lg">
                      <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Performance Marketing
                        </h4>

                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          +58%
                        </span>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-slate-500">
                        ROI-focused campaigns generating qualified leads.
                      </p>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "88%" }}
                          transition={{ duration: 2 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* SEO Card */}

                <motion.div
                  whileHover={{ y: -5 }}
                  className="
          rounded-3xl
          border border-slate-200
          bg-gradient-to-r from-white to-indigo-50
          p-4 sm:p-5
          "
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white shadow-lg">
                      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          SEO & Google Ads
                        </h4>

                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                          +74%
                        </span>
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-slate-500">
                        Drive quality traffic and maximize conversions.
                      </p>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 2.4 }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Growth Card */}

                <motion.div
                  whileHover={{ y: -5 }}
                  className="
          relative overflow-hidden rounded-[30px]
          bg-gradient-to-br from-fuchsia-600 via-violet-600 to-indigo-700
          p-5 sm:p-7
          text-white shadow-[0_30px_70px_rgba(109,40,217,0.35)]
          "
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

                  <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />

                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80">
                        Business Growth
                      </p>

                      <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold">
                        +320%
                      </h2>

                      <p className="mt-3 max-w-xs text-sm text-white/90">
                        Average increase in qualified leads through strategic
                        digital marketing campaigns.
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="
              hidden xs:flex
              h-16 w-16 sm:h-20 sm:w-20
              items-center justify-center
              rounded-3xl
              border border-white/20
              bg-white/10
              backdrop-blur-xl
              "
                    >
                      <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-300" />
                    </motion.div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 sm:w-20 overflow-hidden rounded-full bg-white/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-yellow-300"
                        />
                      </div>

                      <span className="text-xs sm:text-sm text-white/90">
                        Trusted Businesses
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

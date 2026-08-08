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
} from "lucide-react";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-36 pb-10"
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
          {/* Badge */}

          <motion.span
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-4 py-1.5 text-xs font-semibold text-cyan-700 shadow-[0_10px_25px_rgba(6,182,212,.15)] backdrop-blur-xl"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Sparkles size={12} />
            </div>
            Digital Marketing Agency
          </motion.span>

          {/* Heading */}

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Data-Driven
            </span>{" "}
            Digital Marketing
          </h1>

          {/* Description */}

          <p className="mt-5 max-w-xl text-base lg:text-lg leading-7 text-slate-600 lg:text-base">
            We help businesses attract more customers, generate qualified leads,
            and maximize ROI through strategic digital marketing solutions.
          </p>

          <p className="mt-3 max-w-xl text-base lg:text-lg leading-7 text-slate-600 lg:text-base">
            From SEO and Performance Marketing to Google Ads and Meta
            Advertising, our team creates campaigns that deliver measurable
            business growth—not just clicks.
          </p>

          {/* Buttons */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-6 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(79,70,229,.28)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(14,165,233,.35)]"
            >
              <span className="relative z-10 flex items-center">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>

              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 px-6 text-sm font-semibold text-slate-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:via-blue-50 hover:to-violet-50 hover:text-cyan-700 hover:shadow-[0_14px_35px_rgba(6,182,212,.15)]"
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
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                >
                  <ArrowRight size={12} />
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
          {/* Floating Card Left */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-3 -top-4 z-20 hidden xl:block"
          >
            <div className="rounded-xl border border-emerald-100 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                  <Zap className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] text-slate-500">Growth Strategy</p>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Business Scaling
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card Right */}

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-3 bottom-8 z-20 hidden xl:block"
          >
            <div className="rounded-xl border border-orange-100 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] text-slate-500">Performance</p>
                  <h4 className="text-sm font-semibold text-slate-900">
                    ROI Focused
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard */}

          <div className="relative w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-fuchsia-400/10 via-cyan-300/15 to-emerald-400/10 blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-2 rounded-[32px] border border-dashed border-fuchsia-200"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-7 rounded-[28px] border border-dashed border-cyan-200"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/90 p-4 sm:p-5 shadow-[0_30px_70px_rgba(15,23,42,.10)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500" />

              {/* Floating Icon */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-xl"
              >
                <TrendingUp className="h-6 w-6" />
              </motion.div>

              <div className="space-y-3 pt-8">
                {/* Card 1 */}

                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-cyan-50 p-3.5"
                >
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      <BarChart3 className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-slate-900">
                          Performance Marketing
                        </h4>

                        <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-[10px] font-semibold text-cyan-700">
                          Strategy
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Targeted campaigns that help businesses grow
                        consistently.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 */}

                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-indigo-50 p-3.5"
                >
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-slate-900">
                          SEO & Google Ads
                        </h4>

                        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
                          Visibility
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Improve rankings, traffic and lead generation.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Card */}

                <motion.div
                  whileHover={{ y: -3 }}
                  className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-fuchsia-600 via-violet-600 to-indigo-700 p-4 text-white shadow-xl"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

                  <div className="relative flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                        Digital Growth
                      </p>

                      <h3 className="mt-2 text-xl font-bold">
                        Smart Marketing Solutions
                      </h3>

                      <p className="mt-2 max-w-xs text-xs leading-5 text-white/90">
                        Customized digital marketing strategies designed to
                        strengthen your online presence and generate sustainable
                        business growth.
                      </p>
                    </div>

                    <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                      <Rocket className="h-7 w-7 text-cyan-300" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-white/15 pt-4">
                    {["SEO", "Branding", "Analytics", "Leads"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium backdrop-blur-xl"
                      >
                        {item}
                      </span>
                    ))}
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

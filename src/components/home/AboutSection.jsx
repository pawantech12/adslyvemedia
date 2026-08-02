"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-600">
              <Sparkles size={16} />
              About Us
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
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
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-7 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-fuchsia-300/40"
            >
              Let's Grow Together
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl lg:block" />
            <div className="absolute -right-8 bottom-8 hidden h-36 w-36 rounded-full bg-blue-500/10 blur-3xl lg:block" />

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-600 via-violet-600 to-blue-500" />

                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-100 to-blue-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Target size={30} />
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-600">
                      Mission
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      Our Mission
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      To help brands grow faster through innovative, measurable,
                      and performance-driven digital marketing solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-600 via-violet-600 to-blue-500" />

                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-fuchsia-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Eye size={30} />
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Vision
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      Our Vision
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      To become one of India's most trusted digital growth
                      partners by delivering exceptional results and long-term
                      value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

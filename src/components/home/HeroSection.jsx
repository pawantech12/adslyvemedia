"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-fuchsia-50/40 to-blue-50/60 pt-36 pb-20 lg:pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-fuchsia-200 bg-white px-4 py-2 text-sm font-semibold text-fuchsia-600 shadow-sm">
            Digital Marketing Agency
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
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
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-8 text-base font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-fuchsia-300/40"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-base font-semibold text-slate-800 transition duration-300 hover:border-fuchsia-500 hover:text-fuchsia-600 hover:shadow-lg"
            >
              Get a Marketing Audit
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-xl rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="absolute -right-5 -top-5 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 p-4 text-white shadow-xl">
              <TrendingUp className="h-7 w-7" />
            </div>

            <div className="grid gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-fuchsia-100 p-3">
                    <BarChart3 className="h-6 w-6 text-fuchsia-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Performance Marketing
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Increase leads with ROI-focused campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100 p-3">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      SEO & Google Ads
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      Drive quality traffic and maximize conversions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 p-6 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-white/80">
                  Business Growth
                </p>

                <h3 className="mt-3 text-3xl font-bold">+320%</h3>

                <p className="mt-2 text-white/90">
                  Average increase in qualified leads through strategic digital
                  marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

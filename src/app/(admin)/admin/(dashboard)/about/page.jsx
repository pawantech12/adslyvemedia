"use client";

import { motion } from "framer-motion";
import { Save, Building2, Target, Eye, Sparkles } from "lucide-react";

export default function AboutManagement() {
  return (
    <section className="space-y-6 lg:space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            About Management
          </h1>

          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Update your company overview, mission and vision anytime.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* ================= Company Overview ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white sm:h-12 sm:w-12">
              <Building2 size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Company Overview
              </h2>

              <p className="text-sm text-slate-500">
                Content displayed in About section.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                About Badge
              </label>

              <input
                defaultValue="About AdsLyve Media"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Main Heading
              </label>

              <input
                defaultValue="We Don't Just Run Ads."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Gradient Heading
              </label>

              <input
                defaultValue="We Build Growth Engines."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description 1
              </label>

              <textarea
                rows={4}
                defaultValue="AdsLyve Media is a performance-driven digital marketing agency committed to helping businesses grow online."
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description 2
              </label>

              <textarea
                rows={4}
                defaultValue="Our expertise lies in combining creativity with data to build marketing campaigns that increase traffic, improve conversions, and maximize return on investment."
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description 3
              </label>

              <textarea
                rows={4}
                defaultValue="We partner with businesses across industries to create customized digital strategies that generate real business results."
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= Mission ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white sm:h-12 sm:w-12">
              <Target size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Mission
              </h2>

              <p className="text-sm text-slate-500">Update company mission.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mission Title
              </label>

              <input
                defaultValue="Our Mission"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mission Description
              </label>

              <textarea
                rows={5}
                defaultValue="To help brands grow faster through innovative, measurable and performance-driven digital marketing solutions that create lasting business impact."
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= Vision ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white sm:h-12 sm:w-12">
              <Eye size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Vision
              </h2>

              <p className="text-sm text-slate-500">Update company vision.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Vision Title
              </label>

              <input
                defaultValue="Our Vision"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Vision Description
              </label>

              <textarea
                rows={5}
                defaultValue="To become one of India's most trusted digital growth partners by delivering exceptional results, meaningful relationships and sustainable long-term value."
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-blue-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Save Button */}

        <div className="flex justify-end">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] sm:w-auto sm:px-8">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}

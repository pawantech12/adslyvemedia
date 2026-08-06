"use client";

import { motion } from "framer-motion";
import { Save, Search, FileText, Copyright } from "lucide-react";

export default function WebsiteSettings() {
  return (
    <section className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Website Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Update your website SEO information and footer copyright anytime.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* ================= SEO Settings ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white sm:h-12 sm:w-12">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                SEO Settings
              </h2>

              <p className="text-sm text-slate-500">
                Configure your website SEO metadata.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Meta Title */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                SEO Meta Title
              </label>

              <input
                type="text"
                defaultValue="AdsLyve Media | Digital Marketing Agency"
                placeholder="Enter SEO Meta Title"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Recommended length: 50–60 characters.
              </p>
            </div>

            {/* Meta Description */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                SEO Meta Description
              </label>

              <textarea
                rows={5}
                defaultValue="AdsLyve Media is a performance-driven digital marketing agency offering SEO, Google Ads, Meta Ads, Social Media Marketing, Performance Marketing and Website Development services."
                placeholder="Enter SEO Meta Description"
                className="w-full rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Recommended length: 140–160 characters.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= Footer ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white sm:h-12 sm:w-12">
              <Copyright className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Footer Settings
              </h2>

              <p className="text-sm text-slate-500">
                Update footer copyright text displayed on the website.
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Footer Copyright Text
            </label>

            <textarea
              rows={3}
              defaultValue="© 2026 AdsLyve Media. All Rights Reserved."
              placeholder="Enter Footer Copyright Text"
              className="w-full rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-slate-500">
              This text will appear in the footer of your website.
            </p>
          </div>
        </motion.div>

        {/* ================= Save Button ================= */}

        <div className="flex justify-stretch sm:justify-end">
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto sm:px-8">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import {
  Save,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export default function ContactManagement() {
  return (
    <section className="space-y-6 lg:space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Contact Management
          </h1>

          <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
            Update your business contact details and social media links anytime.
          </p>
        </div>
      </div>

      <div className="space-y-6 lg:space-y-8">
        {/* ================= Contact Information ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 lg:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white sm:h-12 sm:w-12 sm:rounded-2xl">
              <Phone size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Contact Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage phone number, email address and office location.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {/* Phone */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Phone size={16} />
                Phone Number
              </label>

              <input
                type="text"
                defaultValue="+91 XXXXX XXXXX"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Mail size={16} />
                Email Address
              </label>

              <input
                type="email"
                defaultValue="info@adslyvemedia.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>

            {/* Address */}

            <div className="lg:col-span-2">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <MapPin size={16} />
                Office Address
              </label>

              <textarea
                rows={4}
                defaultValue="Gurugram, India"
                className="w-full rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= Social Media ================= */}

        <motion.div
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
        >
          <div className="mb-6 flex items-start gap-3 lg:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white sm:h-12 sm:w-12 sm:rounded-2xl">
              <Share2 size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Social Media Links
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Update all your social media profiles.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {/* LinkedIn */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                LinkedIn URL
              </label>

              <input
                type="url"
                defaultValue="https://linkedin.com/company/adslyvemedia"
                placeholder="https://linkedin.com/company/..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Instagram */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Instagram URL
              </label>

              <input
                type="url"
                defaultValue="https://instagram.com/adslyvemedia"
                placeholder="https://instagram.com/..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
              />
            </div>

            {/* Facebook */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Facebook URL
              </label>

              <input
                type="url"
                defaultValue="https://facebook.com/adslyvemedia"
                placeholder="https://facebook.com/..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500"
              />
            </div>

            {/* WhatsApp */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                WhatsApp Link
              </label>

              <input
                type="url"
                placeholder="https://wa.me/91XXXXXXXXXX"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Save Button */}

        <div className="flex justify-end pt-1">
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto sm:px-8">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}

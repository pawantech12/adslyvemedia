"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-8 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-[90px] sm:h-80 sm:w-80 sm:blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-sm sm:max-w-md"
      >
        <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white/90 p-5 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-2xl sm:rounded-[28px] sm:p-7">
          {/* Top Border */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500" />

          {/* Logo */}
          <div className="flex justify-center">
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Link
                href="/"
                className="group relative flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/25 via-fuchsia-300/25 to-blue-300/25 blur-2xl opacity-70 transition duration-500 group-hover:opacity-100" />

                <Image
                  src="/logo-dark.png"
                  alt="AdsLyve Media"
                  width={160}
                  height={60}
                  priority
                  className="relative h-auto w-28 object-contain sm:w-32"
                />
              </Link>
            </motion.div>
          </div>

          {/* Heading */}
          <div className="mt-4 text-center sm:mt-5">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700 sm:text-xs">
              Secure Admin Access
            </span>

            <h1 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Admin Login
            </h1>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
              Sign in to access your AdsLyve Media dashboard.
            </p>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="flex h-11 items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-cyan-500 focus-within:bg-white sm:h-12 sm:px-4">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type="email"
                  placeholder="admin@adslyve.com"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-[15px]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="flex h-11 items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-cyan-500 focus-within:bg-white sm:h-12 sm:px-4">
                <Lock className="mr-3 h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-[15px]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 shrink-0 text-slate-400 transition hover:text-cyan-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="#"
                className="text-sm font-medium text-cyan-600 transition hover:text-fuchsia-600"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(99,102,241,.30)] transition sm:h-12 sm:text-[15px]"
            >
              Login to Dashboard
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

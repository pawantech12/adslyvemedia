"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { motion } from "framer-motion";

import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/auth/login", data);

      toast.success(response.data.message);

      reset();

      router.replace("/admin/dashboard");

      router.refresh();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
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
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
          >
            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div
                className={`flex h-11 items-center rounded-xl border bg-slate-50 px-3.5 transition sm:h-12 sm:px-4 ${
                  errors.email
                    ? "border-red-400"
                    : "border-slate-200 focus-within:border-cyan-500 focus-within:bg-white"
                }`}
              >
                <Mail className="mr-3 h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type="email"
                  placeholder="admin@adslyve.com"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-[15px]"
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div
                className={`flex h-11 items-center rounded-xl border bg-slate-50 px-3.5 transition sm:h-12 sm:px-4 ${
                  errors.password
                    ? "border-red-400"
                    : "border-slate-200 focus-within:border-cyan-500 focus-within:bg-white"
                }`}
              >
                <Lock className="mr-3 h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long.",
                    },
                  })}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-[15px]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="ml-2 shrink-0 text-slate-400 transition hover:text-cyan-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.password.message}
                </p>
              )}
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
              whileHover={{
                scale: isSubmitting ? 1 : 1.015,
              }}
              whileTap={{
                scale: isSubmitting ? 1 : 0.98,
              }}
              type="submit"
              disabled={isSubmitting}
              className="group flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(99,102,241,.30)] transition disabled:cursor-not-allowed disabled:opacity-70 sm:h-12 sm:text-[15px]"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="mr-2 h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-20"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-90"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Logging in...
                </>
              ) : (
                <>
                  Login to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

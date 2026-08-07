"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Save,
  Search,
  Copyright,
  UserCog,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

export default function WebsiteSettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loadingProfile, setLoadingProfile] = useState(false);

  const [settings, setSettings] = useState({
    metaTitle: "AdsLyve Media | Digital Marketing Agency",
    metaDescription:
      "AdsLyve Media is a performance-driven digital marketing agency offering SEO, Google Ads, Meta Ads, Social Media Marketing, Performance Marketing and Website Development services.",
    footerCopyright: "© 2026 AdsLyve Media. All Rights Reserved.",
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  // ==========================================
  // Load Current Admin Profile
  // ==========================================

  useEffect(() => {
    const loadAdminProfile = async () => {
      try {
        const response = await axios.get("/api/auth/me");

        if (response.data?.success && response.data?.user) {
          reset({
            name: response.data.user.name || "",
            email: response.data.user.email || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("Failed to load admin profile:", error);
      }
    };

    loadAdminProfile();
  }, [reset]);

  // ==========================================
  // Website Settings
  // ==========================================

  const handleWebsiteSettings = (e) => {
    e.preventDefault();

    // Keep your API implementation here later
    // for SEO and footer settings.

    toast.success("Website settings saved successfully.");
  };

  // ==========================================
  // Admin Profile Update
  // ==========================================

  const handleAdminProfileUpdate = async (data) => {
    try {
      setLoadingProfile(true);

      const passwordFieldsFilled =
        data.currentPassword || data.newPassword || data.confirmPassword;

      if (passwordFieldsFilled) {
        if (
          !data.currentPassword ||
          !data.newPassword ||
          !data.confirmPassword
        ) {
          toast.error(
            "Please fill all password fields to change your password.",
          );

          setLoadingProfile(false);
          return;
        }
      }

      const response = await axios.put("/api/admin/profile", {
        name: data.name,
        email: data.email,
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      });

      if (response.data?.success) {
        toast.success(
          response.data.message || "Admin profile updated successfully.",
        );

        reset({
          name: response.data.admin?.name || data.name,
          email: response.data.admin?.email || data.email,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to update admin profile.";

      toast.error(message);
    } finally {
      setLoadingProfile(false);
    }
  };

  return (
    <section className="space-y-6">
      {/* ==========================================
          Header
      ========================================== */}

      <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Website Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Update your website SEO information, footer and admin account
            settings.
          </p>
        </div>
      </div>

      {/* ==========================================
          SEO Settings
      ========================================== */}

      <motion.div
        whileHover={{
          y: -2,
        }}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
      >
        <div className="mb-6 flex items-start gap-3 sm:mb-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white sm:h-12 sm:w-12">
            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <div className="min-w-0">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              SEO Settings
            </h2>

            <p className="text-sm leading-6 text-slate-500">
              Configure your website SEO metadata.
            </p>
          </div>
        </div>

        <form onSubmit={handleWebsiteSettings}>
          <div className="space-y-5">
            {/* Meta Title */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                SEO Meta Title
              </label>

              <input
                type="text"
                value={settings.metaTitle}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    metaTitle: e.target.value,
                  })
                }
                placeholder="Enter SEO Meta Title"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
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
                value={settings.metaDescription}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    metaDescription: e.target.value,
                  })
                }
                placeholder="Enter SEO Meta Description"
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
              />

              <p className="mt-2 text-xs text-slate-500">
                Recommended length: 140–160 characters.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-stretch sm:justify-end">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto sm:px-8"
            >
              <Save size={18} />
              Save SEO Settings
            </button>
          </div>
        </form>
      </motion.div>

      {/* ==========================================
          Footer Settings
      ========================================== */}

      <motion.div
        whileHover={{
          y: -2,
        }}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
      >
        <div className="mb-6 flex items-start gap-3 sm:mb-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white sm:h-12 sm:w-12">
            <Copyright className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <div className="min-w-0">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Footer Settings
            </h2>

            <p className="text-sm leading-6 text-slate-500">
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
            value={settings.footerCopyright}
            onChange={(e) =>
              setSettings({
                ...settings,
                footerCopyright: e.target.value,
              })
            }
            placeholder="Enter Footer Copyright Text"
            className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
          />

          <p className="mt-2 text-xs text-slate-500">
            This text will appear in the footer of your website.
          </p>
        </div>

        <div className="mt-6 flex justify-stretch sm:justify-end">
          <button
            type="button"
            onClick={() => {
              toast.success("Footer settings saved successfully.");
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto sm:px-8"
          >
            <Save size={18} />
            Save Footer Settings
          </button>
        </div>
      </motion.div>

      {/* ==========================================
          Admin Account Settings
      ========================================== */}

      <motion.div
        whileHover={{
          y: -2,
        }}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
      >
        {/* Header */}

        <div className="mb-6 flex items-start gap-3 sm:mb-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white sm:h-12 sm:w-12">
            <UserCog className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <div className="min-w-0">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Admin Account Settings
            </h2>

            <p className="text-sm leading-6 text-slate-500">
              Update your admin name, email address and password.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handleAdminProfileUpdate)}
          className="space-y-6"
        >
          {/* ==========================================
              Name + Email
          ========================================== */}

          <div className="grid gap-5 md:grid-cols-2">
            {/* Name */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Admin Name
              </label>

              <input
                type="text"
                placeholder="Enter admin name"
                {...register("name", {
                  required: "Admin name is required.",
                  minLength: {
                    value: 2,
                    message: "Name must contain at least 2 characters.",
                  },
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                  errors.name
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-300 focus:border-fuchsia-500"
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Admin Email
              </label>

              <input
                type="email"
                placeholder="admin@adslyve.com"
                {...register("email", {
                  required: "Admin email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                  errors.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-300 focus:border-fuchsia-500"
                }`}
              />

              {errors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* ==========================================
              Password Section
          ========================================== */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                <Lock size={19} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Change Password
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Leave all password fields empty if you do not want to change
                  your password.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {/* Current Password */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Current Password
                </label>

                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Current password"
                    {...register("currentPassword")}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showCurrentPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  New Password
                </label>

                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New password"
                    {...register("newPassword", {
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters.",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                      errors.newPassword
                        ? "border-red-300 focus:border-red-500"
                        : "border-slate-300 focus:border-fuchsia-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.newPassword && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm New Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    {...register("confirmPassword", {
                      validate: (value) => {
                        if (!value && !newPassword) return true;

                        return (
                          value === newPassword || "Passwords do not match."
                        );
                      },
                    })}
                    className={`w-full rounded-xl border bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                      errors.confirmPassword
                        ? "border-red-300 focus:border-red-500"
                        : "border-slate-300 focus:border-fuchsia-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ==========================================
              Save Account Button
          ========================================== */}

          <div className="flex justify-stretch sm:justify-end">
            <button
              type="submit"
              disabled={loadingProfile}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
            >
              <Save size={18} />

              {loadingProfile ? "Saving Changes..." : "Save Account Changes"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

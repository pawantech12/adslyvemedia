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
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSeo, setSavingSeo] = useState(false);
  const [savingFooter, setSavingFooter] = useState(false);

  const [settings, setSettings] = useState({
    metaTitle: "",
    metaDescription: "",
    footerCopyright: "",
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

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoadingSettings(true);

        const [settingsResponse, profileResponse] = await Promise.all([
          axios.get("/api/admin/settings"),
          axios.get("/api/auth/me"),
        ]);

        if (settingsResponse.data?.success && settingsResponse.data?.settings) {
          const data = settingsResponse.data.settings;

          setSettings({
            metaTitle: data.metaTitle || "",
            metaDescription: data.metaDescription || "",
            footerCopyright: data.footerCopyright || "",
          });
        }

        if (profileResponse.data?.success && profileResponse.data?.user) {
          const user = profileResponse.data.user;

          reset({
            name: user.name || "",
            email: user.email || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("FAILED TO LOAD SETTINGS:", error);

        toast.error(
          error.response?.data?.message || "Failed to load website settings.",
        );
      } finally {
        setLoadingSettings(false);
      }
    };

    loadData();
  }, [reset]);

  const handleSeoSettings = async (e) => {
    e.preventDefault();

    if (!settings.metaTitle.trim()) {
      toast.error("SEO meta title is required.");
      return;
    }

    if (!settings.metaDescription.trim()) {
      toast.error("SEO meta description is required.");
      return;
    }

    if (settings.metaTitle.length > 70) {
      toast.error("SEO meta title cannot exceed 70 characters.");
      return;
    }

    if (settings.metaDescription.length > 180) {
      toast.error("SEO meta description cannot exceed 180 characters.");
      return;
    }

    try {
      setSavingSeo(true);

      const response = await axios.put("/api/admin/settings", {
        metaTitle: settings.metaTitle,
        metaDescription: settings.metaDescription,
        footerCopyright: settings.footerCopyright,
      });

      if (response.data?.success) {
        const updatedSettings = response.data.settings;

        setSettings({
          metaTitle: updatedSettings.metaTitle || "",
          metaDescription: updatedSettings.metaDescription || "",
          footerCopyright: updatedSettings.footerCopyright || "",
        });

        toast.success(
          response.data.message || "SEO settings saved successfully.",
        );
      }
    } catch (error) {
      console.error("SAVE SEO SETTINGS ERROR:", error);

      toast.error(
        error.response?.data?.message || "Failed to save SEO settings.",
      );
    } finally {
      setSavingSeo(false);
    }
  };

  const handleFooterSettings = async () => {
    if (!settings.footerCopyright.trim()) {
      toast.error("Footer copyright text is required.");
      return;
    }

    try {
      setSavingFooter(true);

      const response = await axios.put("/api/admin/settings", {
        metaTitle: settings.metaTitle,
        metaDescription: settings.metaDescription,
        footerCopyright: settings.footerCopyright,
      });

      if (response.data?.success) {
        const updatedSettings = response.data.settings;

        setSettings({
          metaTitle: updatedSettings.metaTitle || "",
          metaDescription: updatedSettings.metaDescription || "",
          footerCopyright: updatedSettings.footerCopyright || "",
        });

        toast.success(
          response.data.message || "Footer settings saved successfully.",
        );
      }
    } catch (error) {
      console.error("SAVE FOOTER SETTINGS ERROR:", error);

      toast.error(
        error.response?.data?.message || "Failed to save footer settings.",
      );
    } finally {
      setSavingFooter(false);
    }
  };

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

      <motion.div
        whileHover={{ y: -2 }}
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

        <form onSubmit={handleSeoSettings}>
          <div className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  SEO Meta Title
                </label>

                <span className="text-xs text-slate-400">
                  {settings.metaTitle.length}/70
                </span>
              </div>

              <input
                type="text"
                value={settings.metaTitle}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    metaTitle: e.target.value,
                  }))
                }
                placeholder="Enter SEO Meta Title"
                maxLength={70}
                disabled={loadingSettings || savingSeo}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10 disabled:cursor-not-allowed disabled:bg-slate-50"
              />

              <p className="mt-2 text-xs text-slate-500">
                Recommended length: 50–60 characters.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                  SEO Meta Description
                </label>

                <span className="text-xs text-slate-400">
                  {settings.metaDescription.length}/180
                </span>
              </div>

              <textarea
                rows={5}
                value={settings.metaDescription}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    metaDescription: e.target.value,
                  }))
                }
                placeholder="Enter SEO Meta Description"
                maxLength={180}
                disabled={loadingSettings || savingSeo}
                className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10 disabled:cursor-not-allowed disabled:bg-slate-50"
              />

              <p className="mt-2 text-xs text-slate-500">
                Recommended length: 140–160 characters.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-stretch sm:justify-end">
            <button
              type="submit"
              disabled={loadingSettings || savingSeo}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
            >
              <Save size={18} />
              {savingSeo ? "Saving..." : "Save SEO Settings"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        whileHover={{ y: -2 }}
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
              setSettings((prev) => ({
                ...prev,
                footerCopyright: e.target.value,
              }))
            }
            placeholder="Enter Footer Copyright Text"
            maxLength={200}
            disabled={loadingSettings || savingFooter}
            className="w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50"
          />

          <p className="mt-2 text-xs text-slate-500">
            {settings.footerCopyright.length}/200 characters
          </p>
        </div>

        <div className="mt-6 flex justify-stretch sm:justify-end">
          <button
            type="button"
            onClick={handleFooterSettings}
            disabled={loadingSettings || savingFooter}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
          >
            <Save size={18} />
            {savingFooter ? "Saving..." : "Save Footer Settings"}
          </button>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -2 }}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
      >
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
          <div className="grid gap-5 md:grid-cols-2">
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

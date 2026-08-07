"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Save, Building2, Target, Eye, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

const defaultValues = {
  badge: "About AdsLyve Media",

  mainHeading: "We Don't Just Run Ads.",

  gradientHeading: "We Build Growth Engines.",

  description1:
    "AdsLyve Media is a performance-driven digital marketing agency committed to helping businesses grow online.",

  description2:
    "Our expertise lies in combining creativity with data to build marketing campaigns that increase traffic, improve conversions, and maximize return on investment.",

  description3:
    "We partner with businesses across industries to create customized digital strategies that generate real business results.",

  missionTitle: "Our Mission",

  missionDescription:
    "To help brands grow faster through innovative, measurable and performance-driven digital marketing solutions that create lasting business impact.",

  visionTitle: "Our Vision",

  visionDescription:
    "To become one of India's most trusted digital growth partners by delivering exceptional results, meaningful relationships and sustainable long-term value.",
};

export default function AboutManagement() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  // ==========================================
  // Load About Content
  // ==========================================

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setLoading(true);

        const response = await axios.get("/api/admin/about");

        if (response.data?.success && response.data?.about) {
          const about = response.data.about;

          reset({
            badge: about.badge || "",
            mainHeading: about.mainHeading || "",
            gradientHeading: about.gradientHeading || "",

            description1: about.description1 || "",
            description2: about.description2 || "",
            description3: about.description3 || "",

            missionTitle: about.missionTitle || "",
            missionDescription: about.missionDescription || "",

            visionTitle: about.visionTitle || "",
            visionDescription: about.visionDescription || "",
          });
        }
      } catch (error) {
        console.error("FETCH ABOUT ERROR:", error);

        toast.error(
          error.response?.data?.message || "Failed to load About content.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, [reset]);

  // ==========================================
  // Update About Content
  // ==========================================

  const handleUpdate = async (data) => {
    try {
      setSaving(true);

      const response = await axios.put("/api/admin/about", data);

      if (response.data?.success) {
        toast.success(
          response.data.message || "About content updated successfully.",
        );

        if (response.data.about) {
          reset({
            badge: response.data.about.badge || "",
            mainHeading: response.data.about.mainHeading || "",
            gradientHeading: response.data.about.gradientHeading || "",

            description1: response.data.about.description1 || "",
            description2: response.data.about.description2 || "",
            description3: response.data.about.description3 || "",

            missionTitle: response.data.about.missionTitle || "",
            missionDescription: response.data.about.missionDescription || "",

            visionTitle: response.data.about.visionTitle || "",
            visionDescription: response.data.about.visionDescription || "",
          });
        }
      }
    } catch (error) {
      console.error("UPDATE ABOUT ERROR:", error);

      toast.error(
        error.response?.data?.message || "Failed to update About content.",
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // Loading State
  // ==========================================

  if (loading) {
    return (
      <section className="space-y-6">
        {/* Header */}

        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            About Management
          </h1>

          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Update your company overview, mission and vision anytime.
          </p>
        </div>

        {/* Loading Card */}

        <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm lg:rounded-3xl">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-violet-600" />

            <p className="text-sm font-medium text-slate-500">
              Loading About content...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      {/* ==========================================
          Header
      ========================================== */}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            About Management
          </h1>

          <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
            Update your company overview, mission and vision anytime.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="space-y-6">
          {/* ==========================================
              Company Overview
          ========================================== */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
          >
            {/* Section Header */}

            <div className="mb-6 flex items-start gap-3 sm:mb-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white sm:h-12 sm:w-12">
                <Building2 size={22} />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Company Overview
                </h2>

                <p className="text-sm leading-6 text-slate-500">
                  Content displayed in About section.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
              {/* Badge */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  About Badge
                </label>

                <input
                  type="text"
                  {...register("badge", {
                    required: "About badge is required.",
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.badge
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.badge && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.badge.message}
                  </p>
                )}
              </div>

              {/* Main Heading */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Main Heading
                </label>

                <input
                  type="text"
                  {...register("mainHeading", {
                    required: "Main heading is required.",
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.mainHeading
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.mainHeading && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.mainHeading.message}
                  </p>
                )}
              </div>

              {/* Gradient Heading */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Gradient Heading
                </label>

                <input
                  type="text"
                  {...register("gradientHeading", {
                    required: "Gradient heading is required.",
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.gradientHeading
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.gradientHeading && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.gradientHeading.message}
                  </p>
                )}
              </div>

              {/* Description 1 */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description 1
                </label>

                <textarea
                  rows={4}
                  {...register("description1", {
                    required: "Description 1 is required.",
                  })}
                  className={`w-full resize-none rounded-xl border p-4 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.description1
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.description1 && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.description1.message}
                  </p>
                )}
              </div>

              {/* Description 2 */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description 2
                </label>

                <textarea
                  rows={4}
                  {...register("description2", {
                    required: "Description 2 is required.",
                  })}
                  className={`w-full resize-none rounded-xl border p-4 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.description2
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.description2 && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.description2.message}
                  </p>
                )}
              </div>

              {/* Description 3 */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description 3
                </label>

                <textarea
                  rows={4}
                  {...register("description3", {
                    required: "Description 3 is required.",
                  })}
                  className={`w-full resize-none rounded-xl border p-4 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.description3
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.description3 && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.description3.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              Mission
          ========================================== */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
          >
            <div className="mb-6 flex items-start gap-3 sm:mb-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white sm:h-12 sm:w-12">
                <Target size={22} />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Mission
                </h2>

                <p className="text-sm leading-6 text-slate-500">
                  Update company mission.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Mission Title */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mission Title
                </label>

                <input
                  type="text"
                  {...register("missionTitle", {
                    required: "Mission title is required.",
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.missionTitle
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.missionTitle && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.missionTitle.message}
                  </p>
                )}
              </div>

              {/* Mission Description */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mission Description
                </label>

                <textarea
                  rows={5}
                  {...register("missionDescription", {
                    required: "Mission description is required.",
                  })}
                  className={`w-full resize-none rounded-xl border p-4 text-sm outline-none transition focus:ring-2 focus:ring-fuchsia-500/10 ${
                    errors.missionDescription
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.missionDescription && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.missionDescription.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              Vision
          ========================================== */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:rounded-3xl lg:p-8"
          >
            <div className="mb-6 flex items-start gap-3 sm:mb-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white sm:h-12 sm:w-12">
                <Eye size={22} />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Vision
                </h2>

                <p className="text-sm leading-6 text-slate-500">
                  Update company vision.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Vision Title */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Vision Title
                </label>

                <input
                  type="text"
                  {...register("visionTitle", {
                    required: "Vision title is required.",
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-500/10 ${
                    errors.visionTitle
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-500"
                  }`}
                />

                {errors.visionTitle && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.visionTitle.message}
                  </p>
                )}
              </div>

              {/* Vision Description */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Vision Description
                </label>

                <textarea
                  rows={5}
                  {...register("visionDescription", {
                    required: "Vision description is required.",
                  })}
                  className={`w-full resize-none rounded-xl border p-4 text-sm outline-none transition focus:ring-2 focus:ring-blue-500/10 ${
                    errors.visionDescription
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-500"
                  }`}
                />

                {errors.visionDescription && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.visionDescription.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              Save Button
          ========================================== */}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {saving ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

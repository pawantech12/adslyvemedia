"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Share2,
  Save,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Loader2,
} from "lucide-react";

export default function ContactManagement() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      email: "",
      address: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      whatsapp: "",
    },
  });

  /* =========================
     FETCH CONTACT
  ========================= */

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);

        const response = await axios.get("/api/admin/contact");

        if (response.data.success) {
          reset({
            phone: response.data.contact.phone || "",
            email: response.data.contact.email || "",
            address: response.data.contact.address || "",
            linkedin: response.data.contact.linkedin || "",
            instagram: response.data.contact.instagram || "",
            facebook: response.data.contact.facebook || "",
            whatsapp: response.data.contact.whatsapp || "",
          });
        }
      } catch (error) {
        console.error("FETCH CONTACT ERROR:", error);

        toast.error(
          error.response?.data?.message ||
            "Failed to load contact information.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [reset]);

  /* =========================
     SAVE CONTACT
  ========================= */

  const onSubmit = async (data) => {
    try {
      setSaving(true);

      const response = await axios.put("/api/admin/contact", data);

      if (response.data.success) {
        reset({
          phone: response.data.contact.phone || "",
          email: response.data.contact.email || "",
          address: response.data.contact.address || "",
          linkedin: response.data.contact.linkedin || "",
          instagram: response.data.contact.instagram || "",
          facebook: response.data.contact.facebook || "",
          whatsapp: response.data.contact.whatsapp || "",
        });

        toast.success(
          response.data.message || "Contact information updated successfully.",
        );
      }
    } catch (error) {
      console.error("UPDATE CONTACT ERROR:", error);

      if (error.response?.status === 401) {
        toast.error("Your session has expired. Please login again.");
        return;
      }

      toast.error(
        error.response?.data?.message ||
          "Failed to update contact information.",
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================
     LOADING STATE
  ========================= */

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Contact Management
          </h1>

          <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
            Update your business contact details and social media links anytime.
          </p>
        </div>

        <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-violet-600" />

            <p className="text-sm font-medium text-slate-500">
              Loading contact information...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* ================= HEADER ================= */}

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 lg:space-y-8">
          {/* ================= CONTACT INFORMATION ================= */}

          <motion.div
            whileHover={{
              y: -2,
            }}
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
              {/* PHONE */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Phone size={16} />
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  {...register("phone", {
                    required: "Phone number is required.",
                    minLength: {
                      value: 7,
                      message: "Please enter a valid phone number.",
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Mail size={16} />
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="info@adslyvemedia.com"
                  {...register("email", {
                    required: "Email address is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* ADDRESS */}

              <div className="lg:col-span-2">
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin size={16} />
                  Office Address
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter your complete office address"
                  {...register("address", {
                    required: "Office address is required.",
                    minLength: {
                      value: 5,
                      message: "Please enter a valid address.",
                    },
                  })}
                  className={`w-full rounded-xl border p-4 text-sm outline-none transition ${
                    errors.address
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-fuchsia-500"
                  }`}
                />

                {errors.address && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ================= SOCIAL MEDIA ================= */}

          <motion.div
            whileHover={{
              y: -2,
            }}
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
              {/* LINKEDIN */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Linkedin size={16} />
                  LinkedIn URL
                </label>

                <input
                  type="url"
                  placeholder="https://linkedin.com/company/..."
                  {...register("linkedin", {
                    validate: (value) => {
                      if (!value) return true;

                      try {
                        new URL(value);
                        return true;
                      } catch {
                        return "Please enter a valid URL.";
                      }
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    errors.linkedin
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-500"
                  }`}
                />

                {errors.linkedin && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.linkedin.message}
                  </p>
                )}
              </div>

              {/* INSTAGRAM */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Instagram size={16} />
                  Instagram URL
                </label>

                <input
                  type="url"
                  placeholder="https://instagram.com/..."
                  {...register("instagram", {
                    validate: (value) => {
                      if (!value) return true;

                      try {
                        new URL(value);
                        return true;
                      } catch {
                        return "Please enter a valid URL.";
                      }
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    errors.instagram
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-pink-500"
                  }`}
                />

                {errors.instagram && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.instagram.message}
                  </p>
                )}
              </div>

              {/* FACEBOOK */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Facebook size={16} />
                  Facebook URL
                </label>

                <input
                  type="url"
                  placeholder="https://facebook.com/..."
                  {...register("facebook", {
                    validate: (value) => {
                      if (!value) return true;

                      try {
                        new URL(value);
                        return true;
                      } catch {
                        return "Please enter a valid URL.";
                      }
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    errors.facebook
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-indigo-500"
                  }`}
                />

                {errors.facebook && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.facebook.message}
                  </p>
                )}
              </div>

              {/* WHATSAPP */}

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MessageCircle size={16} />
                  WhatsApp Link
                </label>

                <input
                  type="url"
                  placeholder="https://wa.me/91XXXXXXXXXX"
                  {...register("whatsapp", {
                    validate: (value) => {
                      if (!value) return true;

                      try {
                        new URL(value);
                        return true;
                      } catch {
                        return "Please enter a valid URL.";
                      }
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    errors.whatsapp
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-300 focus:border-emerald-500"
                  }`}
                />

                {errors.whatsapp && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.whatsapp.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ================= SAVE BUTTON ================= */}

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
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
    </div>
  );
}

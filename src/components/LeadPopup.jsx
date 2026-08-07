"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

import {
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  /* =========================
     OPEN POPUP AFTER 3 SECONDS
  ========================= */

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("adslyve-popup");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("adslyve-popup", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  /* =========================
     BODY SCROLL LOCK
  ========================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================
     ESCAPE KEY
  ========================= */

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  /* =========================
     SUBMIT LEAD
  ========================= */

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/admin/leads", {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        message: data.message.trim(),
      });

      if (response.data?.success) {
        toast.success("Enquiry submitted successfully!", {
          description: "Our team will contact you shortly.",
        });

        reset();

        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          setOpen(false);
        }, 2200);
      } else {
        toast.error(response.data?.message || "Failed to submit your enquiry.");
      }
    } catch (error) {
      console.error("LEAD SUBMISSION ERROR:", error);

      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";

      toast.error(message);
    }
  };

  /* =========================
     CLOSE POPUP
  ========================= */

  const handleClose = () => {
    if (isSubmitting) return;

    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-lg"
        >
          {/* =========================
              BACKDROP
          ========================= */}

          <div onClick={handleClose} className="absolute inset-0" />

          {/* =========================
              MAIN MODAL
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
            }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-[0_45px_120px_rgba(15,23,42,.25)] lg:block"
          >
            {/* =========================
                BACKGROUND
            ========================= */}

            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 80, 0],
                  y: [0, 60, 0],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                }}
                className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]"
              />

              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, 80, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f915_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f915_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>

            {/* =========================
                CLOSE BUTTON
            ========================= */}

            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <X size={20} />
            </button>

            <div className="relative grid lg:grid-cols-2">
              {/* =========================
                  LEFT PANEL
              ========================= */}

              <div className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white lg:block lg:p-12">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />

                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[120px]" />

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl"
                >
                  <Sparkles size={15} />
                  AdsLyve Media
                </motion.div>

                <h2 className="mt-8 text-4xl font-extrabold leading-tight">
                  Let's Grow
                  <br />
                  Your Business.
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Tell us what you're looking for and our digital marketing
                  experts will connect with you to build the right growth
                  strategy.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    {
                      icon: TrendingUp,
                      text: "Performance Marketing",
                    },
                    {
                      icon: BarChart3,
                      text: "SEO & Google Ads",
                    },
                    {
                      icon: CheckCircle2,
                      text: "Free Strategy Consultation",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.text} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500">
                          <Icon size={22} />
                        </div>

                        <span className="font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* =========================
                  RIGHT PANEL
              ========================= */}

              <div
                className="
                  max-h-[92vh]
                  overflow-y-auto
                  p-6
                  lg:max-h-[92vh]
                  lg:p-12
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                <motion.span
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700"
                >
                  <Sparkles size={15} />
                  Free Consultation
                </motion.span>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  What are you looking for?
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Fill in your details below and we'll get back to you with a
                  customized digital marketing strategy.
                </p>

                {/* =========================
                    FORM
                ========================= */}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-8 space-y-5"
                >
                  {/* =========================
                      NAME
                  ========================= */}

                  <div>
                    <label
                      htmlFor="lead-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="lead-name"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      className={`h-14 w-full rounded-2xl border bg-white px-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-4 ${
                        errors.name
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                          : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
                      }`}
                      {...register("name", {
                        required: "Full name is required.",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters.",
                        },
                        maxLength: {
                          value: 100,
                          message: "Name cannot exceed 100 characters.",
                        },
                        validate: (value) =>
                          value.trim().length >= 2 ||
                          "Please enter a valid name.",
                      })}
                    />

                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* =========================
                      EMAIL
                  ========================= */}

                  <div>
                    <label
                      htmlFor="lead-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="lead-email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      className={`h-14 w-full rounded-2xl border bg-white px-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-4 ${
                        errors.email
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                          : "border-slate-200 focus:border-fuchsia-400 focus:ring-fuchsia-100"
                      }`}
                      {...register("email", {
                        required: "Email address is required.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                    />

                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* =========================
                      PHONE
                  ========================= */}

                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Contact Number
                    </label>

                    <input
                      id="lead-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      className={`h-14 w-full rounded-2xl border bg-white px-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-4 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                          : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                      }`}
                      {...register("phone", {
                        required: "Contact number is required.",
                        minLength: {
                          value: 10,
                          message:
                            "Contact number must contain at least 10 characters.",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "Contact number cannot exceed 20 characters.",
                        },
                        validate: (value) =>
                          /^[+0-9\s()-]+$/.test(value.trim()) ||
                          "Please enter a valid contact number.",
                      })}
                    />

                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* =========================
                      MESSAGE
                  ========================= */}

                  <div>
                    <label
                      htmlFor="lead-message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      What are you looking for?
                    </label>

                    <textarea
                      id="lead-message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className={`w-full resize-none rounded-2xl border bg-white px-5 py-4 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-4 ${
                        errors.message
                          ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                          : "border-slate-200 focus:border-violet-400 focus:ring-violet-100"
                      }`}
                      {...register("message", {
                        required: "Please tell us what you're looking for.",
                        minLength: {
                          value: 10,
                          message: "Please provide at least 10 characters.",
                        },
                        maxLength: {
                          value: 2000,
                          message: "Message cannot exceed 2000 characters.",
                        },
                        validate: (value) =>
                          value.trim().length >= 10 ||
                          "Please provide more details.",
                      })}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* =========================
                      SUBMIT
                  ========================= */}

                  <motion.button
                    whileHover={
                      !isSubmitting
                        ? {
                            y: -3,
                            scale: 1.01,
                          }
                        : undefined
                    }
                    whileTap={
                      !isSubmitting
                        ? {
                            scale: 0.98,
                          }
                        : undefined
                    }
                    disabled={isSubmitting}
                    type="submit"
                    className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 font-semibold text-white shadow-[0_18px_40px_rgba(79,70,229,.30)] transition disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-600 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <span className="relative flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Book Free Consultation
                          <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* =========================
                      SUCCESS MESSAGE
                  ========================= */}

                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                          <CheckCircle2 size={22} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-emerald-700">
                            Thank you!
                          </h4>

                          <p className="text-sm text-emerald-600">
                            Our team will contact you shortly.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

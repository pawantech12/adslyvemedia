"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Sparkles, Loader2 } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get("/api/admin/about");

        if (response.data.success) {
          setAbout(response.data.about);
        }
      } catch (error) {
        console.error("Failed to fetch About content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-20"
    >
      {/* ================= Background Effects ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= Loading State ================= */}

        {loading ? (
          <div className="flex min-h-[450px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-violet-600" />

              <p className="text-sm font-medium text-slate-500">
                Loading About content...
              </p>
            </div>
          </div>
        ) : !about ? (
          /* ================= Error / Empty State ================= */

          <div className="flex min-h-[450px] items-center justify-center">
            <p className="text-sm font-medium text-slate-500">
              Unable to load About content.
            </p>
          </div>
        ) : (
          /* ================= About Content ================= */

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* ================= LEFT CONTENT ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* Badge */}

              <motion.span
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-lg backdrop-blur-xl"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
                  <Sparkles size={13} />
                </span>

                {about.badge}
              </motion.span>

              {/* Heading */}

              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-slate-900 sm:text-4xl lg:text-[2.9rem]">
                {about.mainHeading}

                <span className="mt-1.5 block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
                  {about.gradientHeading}
                </span>
              </h2>

              {/* Description 1 */}

              <p className="mt-4 text-base leading-7 text-slate-600 lg:text-[17px]">
                {about.description1}
              </p>

              {/* Description 2 */}

              <p className="mt-2 text-base leading-7 text-slate-600 lg:text-[17px]">
                {about.description2}
              </p>

              {/* Description 3 */}

              <p className="mt-2 text-base leading-7 text-slate-600 lg:text-[17px]">
                {about.description3}
              </p>

              {/* CTA */}

              <Link
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-fuchsia-300/40"
              >
                Let's Grow Together
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>

            {/* ================= RIGHT SIDE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
            >
              {/* ================= Mission ================= */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white/90 p-4 shadow-[0_12px_35px_rgba(15,23,42,.06)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-600 to-blue-500" />

                <div className="flex flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
                    <Target size={20} />
                  </div>

                  <span className="mt-3 inline-flex w-fit rounded-full bg-fuchsia-100 px-3 py-1 text-[10px] font-semibold text-fuchsia-700">
                    Mission
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {about.missionTitle}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-slate-600">
                    {about.missionDescription}
                  </p>
                </div>
              </motion.div>

              {/* ================= Vision ================= */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white/90 p-4 shadow-[0_12px_35px_rgba(15,23,42,.06)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500" />

                <div className="flex flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-lg">
                    <Eye size={20} />
                  </div>

                  <span className="mt-3 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold text-blue-700">
                    Vision
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {about.visionTitle}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-slate-600">
                    {about.visionDescription}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

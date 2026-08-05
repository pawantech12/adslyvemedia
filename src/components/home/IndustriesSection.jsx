"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingCart,
  Landmark,
  Cpu,
  Hotel,
  Store,
  Factory,
  BriefcaseBusiness,
  Rocket,
  Building,
} from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    color: "from-rose-500 via-pink-500 to-fuchsia-500",
    bg: "from-rose-50 to-pink-50",
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "from-blue-600 via-cyan-500 to-sky-500",
    bg: "from-blue-50 to-cyan-50",
  },
  {
    title: "Real Estate",
    icon: Building2,
    color: "from-amber-500 via-orange-500 to-red-500",
    bg: "from-amber-50 to-orange-50",
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    color: "from-violet-600 via-fuchsia-600 to-pink-500",
    bg: "from-violet-50 to-fuchsia-50",
  },
  {
    title: "Finance",
    icon: Landmark,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    bg: "from-emerald-50 to-teal-50",
  },
  {
    title: "Technology",
    icon: Cpu,
    color: "from-indigo-600 via-blue-600 to-cyan-500",
    bg: "from-indigo-50 to-blue-50",
  },
  {
    title: "Hospitality",
    icon: Hotel,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    bg: "from-orange-50 to-amber-50",
  },
  {
    title: "Retail",
    icon: Store,
    color: "from-fuchsia-600 via-violet-600 to-indigo-600",
    bg: "from-fuchsia-50 to-violet-50",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    color: "from-slate-600 via-slate-700 to-slate-900",
    bg: "from-slate-50 to-slate-100",
  },
  {
    title: "Professional Services",
    icon: BriefcaseBusiness,
    color: "from-cyan-500 via-sky-500 to-blue-600",
    bg: "from-cyan-50 to-sky-50",
  },
  {
    title: "Startups",
    icon: Rocket,
    color: "from-purple-600 via-violet-600 to-blue-600",
    bg: "from-purple-50 to-violet-50",
  },
  {
    title: "B2B Companies",
    icon: Building,
    color: "from-green-500 via-emerald-500 to-teal-500",
    bg: "from-green-50 to-emerald-50",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
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
          className="absolute -left-28 top-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-0 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-lg backdrop-blur-xl"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Building2 size={14} />
            </div>
            Industries We Serve
          </motion.div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.9rem]">
            Helping Businesses Across
            <span className="mt-1.5 block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              Every Industry Grow Faster
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            We create customized digital marketing strategies tailored to the
            unique goals, audience, and challenges of every industry.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-4 sm:p-5 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_18px_45px_rgba(6,182,212,.15)]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.bg} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${industry.color}`}
                />

                <div className="relative">
                  <div
                    className={`mx-auto flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r ${industry.color} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                  </div>

                  <h3 className="mt-4 text-center text-sm font-semibold leading-6 text-slate-900 sm:text-base lg:text-[15px]">
                    {industry.title}
                  </h3>

                  <div className="mt-3 flex justify-center">
                    <div
                      className={`h-1 w-10 rounded-full bg-gradient-to-r ${industry.color} transition-all duration-500 group-hover:w-16`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

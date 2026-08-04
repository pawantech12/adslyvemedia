"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import {
  Sparkles,
  Users,
  Globe,
  Search,
  BadgeDollarSign,
  TrendingUp,
  ShoppingBag,
  Megaphone,
} from "lucide-react";

const results = [
  {
    icon: Users,
    title: "More Qualified Leads",
    description:
      "Generate high-intent leads that are more likely to convert into customers.",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    bg: "from-emerald-50 to-cyan-50",
    badge: "+ Leads",
  },
  {
    icon: Globe,
    title: "Increased Website Traffic",
    description:
      "Drive consistent, targeted visitors through SEO and performance marketing.",
    color: "from-blue-600 via-cyan-500 to-sky-500",
    bg: "from-blue-50 to-cyan-50",
    badge: "Traffic",
  },
  {
    icon: Search,
    title: "Better Search Rankings",
    description:
      "Improve your visibility on Google with sustainable SEO strategies.",
    color: "from-violet-600 via-fuchsia-600 to-pink-500",
    bg: "from-violet-50 to-fuchsia-50",
    badge: "SEO",
  },
  {
    icon: BadgeDollarSign,
    title: "Lower Cost Per Lead",
    description:
      "Optimize campaigns to reduce acquisition costs while improving quality.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    bg: "from-orange-50 to-yellow-50",
    badge: "CPL",
  },
  {
    icon: TrendingUp,
    title: "Higher Return on Ad Spend",
    description:
      "Maximize every advertising dollar with ROI-focused optimization.",
    color: "from-indigo-600 via-blue-600 to-cyan-500",
    bg: "from-indigo-50 to-blue-50",
    badge: "ROAS",
  },
  {
    icon: ShoppingBag,
    title: "Increased Sales",
    description:
      "Convert more visitors into paying customers with data-driven campaigns.",
    color: "from-fuchsia-600 via-violet-600 to-indigo-600",
    bg: "from-fuchsia-50 to-violet-50",
    badge: "Sales",
  },
  {
    icon: Megaphone,
    title: "Better Brand Visibility",
    description:
      "Build awareness and strengthen your brand presence across digital channels.",
    color: "from-rose-500 via-pink-500 to-fuchsia-500",
    bg: "from-rose-50 to-pink-50",
    badge: "Brand",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 max-sm:py-10"
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
          className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-[120px]"
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
          className="absolute right-0 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
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
              <Trophy size={14} />
            </div>
            Results That Matter
          </motion.div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            We Focus On
            <span className="block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              Business Growth, Not Vanity Metrics
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            Every campaign is optimized around measurable outcomes that help
            your business attract customers, increase revenue, and maximize
            return on investment.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_18px_45px_rgba(6,182,212,.15)]"
              >
                {/* Hover Background */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                {/* Top Border */}

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
                />

                {/* Number */}

                <div className="absolute right-4 top-3 text-4xl font-black text-slate-100 transition group-hover:text-slate-200">
                  0{index + 1}
                </div>

                <div className="relative">
                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Badge */}

                  <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    {item.badge}
                  </span>

                  {/* Title */}

                  <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
                    </div>

                    <div
                      className={`h-[3px] w-10 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-16`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:mt-16 sm:p-6 lg:mt-20 lg:rounded-[36px] lg:p-8"
        >
          {/* Top Gradient */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500" />

          {/* Background Glow */}

          <div className="absolute -left-24 -top-20 h-60 w-60 rounded-full bg-fuchsia-400/15 blur-[110px]" />

          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-cyan-400/15 blur-[110px]" />

          <div className="relative">
            {/* Header */}

            <div className="flex flex-col items-center text-center">
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700 sm:px-4 sm:py-2 sm:text-sm">
                Proven Performance
              </span>

              <h3 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl lg:mt-5 lg:text-4xl">
                Numbers That{" "}
                <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  Build Trust
                </span>
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                We don't chase vanity metrics. Every campaign is optimized
                around measurable business growth, higher conversions, and
                long-term ROI.
              </p>
            </div>

            {/* Metric Cards */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5 xl:grid-cols-4">
              {[
                {
                  value: "320%",
                  label: "Average ROI",
                  color: "from-fuchsia-500 via-violet-500 to-indigo-600",
                  progress: "92%",
                },
                {
                  value: "95%",
                  label: "Client Satisfaction",
                  color: "from-emerald-500 via-teal-500 to-cyan-500",
                  progress: "95%",
                },
                {
                  value: "24/7",
                  label: "Campaign Monitoring",
                  color: "from-orange-500 via-amber-500 to-yellow-500",
                  progress: "100%",
                },
                {
                  value: "100%",
                  label: "Transparent Reporting",
                  color: "from-cyan-500 via-blue-500 to-indigo-600",
                  progress: "98%",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
                  />

                  <div
                    className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
                  />

                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-r ${item.color} px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg`}
                  >
                    Performance
                  </div>

                  <h3
                    className={`mt-4 bg-gradient-to-r ${item.color} bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl`}
                  >
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-600">
                    {item.label}
                  </p>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span>Growth Score</span>

                      <span>{item.progress}</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.progress }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6 }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Trust Bar */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-5 py-5 text-white sm:px-6 sm:py-6 lg:mt-10 lg:flex-row lg:items-center lg:px-8"
            >
              {/* Left */}

              <div className="w-full lg:max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                  Trusted Growth Partner
                </p>

                <h4 className="mt-2 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                  Focused on Business Outcomes
                </h4>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                  Every marketing decision is backed by strategy, analytics and
                  continuous optimization to maximize business growth.
                </p>
              </div>

              {/* Right */}

              <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center lg:w-auto">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-sm font-bold text-white shadow-lg"
                    >
                      ✓
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="text-base font-bold sm:text-lg">
                    Growth-Driven Strategy
                  </h5>

                  <p className="mt-1 text-sm text-slate-300">
                    Performance • Analytics • ROI
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

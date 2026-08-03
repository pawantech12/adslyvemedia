"use client";

import { motion } from "framer-motion";
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
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28"
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
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Sparkles size={14} />
            </span>
            Results That Matter
          </motion.div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            We Focus On
            <span className="block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              Business Growth, Not Vanity Metrics
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every campaign is optimized around measurable outcomes that help
            your business attract customers, increase revenue, and maximize
            return on investment.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-7 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_28px_70px_rgba(6,182,212,.15)]"
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

                <div className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition group-hover:text-slate-200">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon size={30} />
                  </div>

                  <span className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {item.badge}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
                    </div>

                    <div
                      className={`h-[3px] w-14 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-24`}
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
          className="relative mt-20 overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:p-8 lg:p-10"
        >
          {/* Top Gradient */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500" />

          {/* Background Glow */}

          <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-[120px]" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />

          <div className="relative">
            {/* Header */}

            <div className="flex flex-col items-center text-center">
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                Proven Performance
              </span>

              <h3 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Numbers That{" "}
                <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  Build Trust
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-slate-600 leading-7">
                We don't chase vanity metrics. Every campaign is optimized
                around measurable business growth, higher conversions, and
                long-term ROI.
              </p>
            </div>

            {/* Metric Cards */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
                  />

                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`}
                  />

                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} px-4 py-2 text-xs font-semibold text-white shadow-lg`}
                  >
                    Performance
                  </div>

                  <h3
                    className={`mt-6 bg-gradient-to-r ${item.color} bg-clip-text text-5xl font-extrabold text-transparent`}
                  >
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-600">{item.label}</p>

                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-500">
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
              className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-6 text-white lg:flex-row"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Trusted Growth Partner
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  Focused on Business Outcomes
                </h4>

                <p className="mt-2 max-w-xl text-slate-300">
                  Every marketing decision is backed by strategy, analytics, and
                  continuous optimization to maximize your business growth.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-900 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-sm font-bold text-white"
                    >
                      ✓
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="text-lg font-bold">Growth-Driven Strategy</h5>

                  <p className="text-sm text-slate-300">
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

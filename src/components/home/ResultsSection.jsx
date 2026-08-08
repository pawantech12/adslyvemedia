"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import {
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

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.9rem]">
            We Focus On
            <span className="mt-1.5 block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
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

        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-4 backdrop-blur-xl shadow-[0_12px_35px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_18px_45px_rgba(6,182,212,.15)]"
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

                  <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    {item.badge}
                  </span>

                  {/* Title */}

                  <h3 className="mt-2 text-lg font-bold leading-7 text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
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
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  ChartSpline,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "ROI-Focused Marketing",
    description:
      "Every campaign is designed to maximize qualified leads, conversions, and measurable business growth.",
    color: "from-cyan-500 via-sky-500 to-blue-600",
    light: "from-cyan-50 to-blue-50",
    border: "group-hover:border-cyan-200",
  },
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    description:
      "Our Google & Meta certified specialists create high-performing campaigns using industry best practices.",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    light: "from-emerald-50 to-cyan-50",
    border: "group-hover:border-emerald-200",
  },
  {
    icon: ChartSpline,
    title: "Transparent Reporting",
    description:
      "Track campaign performance with clear reports, actionable insights, and complete visibility.",
    color: "from-indigo-600 via-blue-600 to-violet-600",
    light: "from-indigo-50 to-violet-50",
    border: "group-hover:border-indigo-200",
  },
  {
    icon: BriefcaseBusiness,
    title: "Customized Marketing Plans",
    description:
      "No one-size-fits-all approach. Every strategy is tailored to your business goals and audience.",
    color: "from-orange-500 via-amber-500 to-yellow-400",
    light: "from-orange-50 to-amber-50",
    border: "group-hover:border-orange-200",
  },
  {
    icon: Users,
    title: "Dedicated Account Managers",
    description:
      "Work with a dedicated expert who understands your business and ensures smooth communication.",
    color: "from-fuchsia-600 via-violet-600 to-pink-500",
    light: "from-fuchsia-50 to-pink-50",
    border: "group-hover:border-fuchsia-200",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Campaign Optimization",
    description:
      "We continuously monitor, analyze, and optimize campaigns for higher ROI and sustainable growth.",
    color: "from-rose-500 via-red-500 to-orange-500",
    light: "from-rose-50 to-orange-50",
    border: "group-hover:border-rose-200",
  },
];

export default function TrustedGrowthPartner() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28"
    >
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
          className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[130px]"
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-[0_12px_30px_rgba(6,182,212,0.18)] backdrop-blur-xl"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Handshake size={14} />
            </div>
            Trusted Growth Partner
          </motion.span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            Your Partner in
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Sustainable Business Growth
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            At AdsLyve Media, we don't believe in guesswork. Every campaign is
            backed by research, analytics, and optimization to help your
            business achieve sustainable growth. Whether you're a startup
            looking for visibility or an established brand aiming to scale, we
            build marketing strategies tailored to your goals.
          </p>

          <motion.div
            whileHover={{ y: -4 }}
            className="relative mt-10 overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500" />

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-fuchsia-400/15 blur-3xl" />

            <h3 className="text-2xl font-bold text-slate-900">
              Why Choose AdsLyve?
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We combine data, creativity, and proven marketing strategies to
              deliver consistent business growth while keeping complete
              transparency throughout every campaign.
            </p>
          </motion.div>
        </motion.div>
        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/85 p-7 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] ${item.border}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
                />

                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.light} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100`}
                />

                <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-slate-100/70 blur-3xl transition-all duration-500 group-hover:bg-white" />

                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-xl`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-bold text-slate-400 transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700">
                    0{index + 1}
                  </div>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 transition-transform duration-300 group-hover:scale-125" />

                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 transition-transform duration-300 delay-75 group-hover:scale-125" />

                    <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 transition-transform duration-300 delay-150 group-hover:scale-125" />
                  </div>

                  <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: index * 0.12,
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
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

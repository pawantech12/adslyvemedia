"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { Rocket } from "lucide-react";
import { Sparkles, TrendingUp, Users, Award, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    badge: "Analytics",
    description:
      "Every campaign is powered by real-time analytics, insights, and measurable performance.",
    color: "from-cyan-500 via-sky-500 to-blue-600",
    badgeColor: "bg-cyan-100 text-cyan-700",
    line: "from-cyan-500 to-blue-600",
  },
  {
    icon: Target,
    title: "Customized Strategies",
    badge: "Strategy",
    description:
      "Every business is unique, so we build personalized marketing strategies that align with your goals.",
    color: "from-fuchsia-600 via-violet-600 to-indigo-600",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700",
    line: "from-fuchsia-600 to-violet-600",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    badge: "Experts",
    description:
      "Our experienced marketers combine creativity, technology, and strategy to accelerate your growth.",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    badgeColor: "bg-emerald-100 text-emerald-700",
    line: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Transparent Communication",
    badge: "Reports",
    description:
      "Stay informed with regular updates, transparent reporting, and measurable campaign results.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    badgeColor: "bg-orange-100 text-orange-700",
    line: "from-orange-500 to-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "ROI First",
    badge: "Growth",
    description:
      "Every optimization is focused on maximizing conversions, leads, and long-term return on investment.",
    color: "from-blue-600 via-indigo-600 to-violet-600",
    badgeColor: "bg-blue-100 text-blue-700",
    line: "from-blue-600 to-violet-600",
  },
];
export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, 70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 90, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-[0_15px_40px_rgba(6,182,212,.18)] backdrop-blur-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Sparkles size={14} />
            </span>
            Why Choose AdsLyve Media
          </motion.span>

          {/* Heading */}

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            The Trusted Digital Growth Partner
            <br />
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Businesses Choose Every Day
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We combine strategy, creativity, technology, and performance
            marketing to deliver measurable business growth through data-driven
            digital campaigns.
          </p>
        </motion.div>

        {/* Floating Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute inset-0 rounded-[34px] bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10 blur-2xl" />

          <div className="relative grid grid-cols-2 gap-5 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,.10)] backdrop-blur-2xl lg:grid-cols-4">
            {/* Stat */}

            {[
              {
                icon: TrendingUp,
                value: "320%",
                label: "Average ROI",
                color: "from-emerald-500 via-teal-500 to-cyan-500",
              },
              {
                icon: Users,
                value: "250+",
                label: "Happy Clients",
                color: "from-cyan-500 via-blue-500 to-indigo-600",
              },
              {
                icon: Award,
                value: "98%",
                label: "Client Retention",
                color: "from-orange-500 via-amber-500 to-yellow-400",
              },
              {
                icon: BarChart3,
                value: "5+",
                label: "Growth Services",
                color: "from-fuchsia-600 via-violet-600 to-blue-600",
              },
            ].map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  key={stat.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-500 hover:shadow-xl"
                >
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${stat.color} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Feature Cards Grid */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-7 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_30px_80px_rgba(14,165,233,.15)]"
              >
                {/* Gradient Border */}

                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
                />

                {/* Background Glow */}

                <div
                  className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-15`}
                />

                {/* Number */}

                <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition duration-500 group-hover:text-slate-200">
                  0{index + 1}
                </div>

                {/* Icon */}

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon size={30} />
                </div>

                {/* Badge */}

                <span
                  className={`mt-6 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.badgeColor}`}
                >
                  {item.badge}
                </span>

                {/* Title */}

                <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                  </div>

                  <motion.div
                    initial={{
                      width: 50,
                    }}
                    whileHover={{
                      width: 90,
                    }}
                    className={`h-[3px] rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

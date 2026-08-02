"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  SearchCheck,
  Lightbulb,
  Rocket,
  TrendingUp,
  FileText,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Discovery",
    icon: SearchCheck,
    description: "Understanding your business, audience, and goals.",
  },
  {
    number: "02",
    title: "Strategy",
    icon: Lightbulb,
    description: "Creating a customized digital marketing roadmap.",
  },
  {
    number: "03",
    title: "Execution",
    icon: Rocket,
    description:
      "Launching high-performing campaigns across the right platforms.",
  },
  {
    number: "04",
    title: "Optimization",
    icon: TrendingUp,
    description: "Continuous testing and improvements for better performance.",
  },
  {
    number: "05",
    title: "Reporting",
    icon: FileText,
    description: "Transparent monthly reports with actionable insights.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28"
    >
      {/* Background Effects */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
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
          className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
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
        {/* HEADER */}

        <motion.div
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
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-[0_12px_30px_rgba(6,182,212,.18)] backdrop-blur-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <Workflow size={15} />
            </span>
            Our Process
          </motion.span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            Our Proven
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Growth Process
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every successful campaign follows a structured process that keeps
            your business goals at the center while delivering measurable
            results.
          </p>
        </motion.div>

        {/* DESKTOP PROCESS */}

        <div className="relative mt-20 hidden lg:block">
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
            }}
            className="absolute left-0 top-12 h-px bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500"
          />

          <div className="grid grid-cols-5 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className="relative text-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 shadow-[0_20px_50px_rgba(99,102,241,.35)]"
                  >
                    <Icon size={34} className="text-white" />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className="group mt-8 relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-2xl"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-600">
                      Step {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE PROCESS */}

        <div className="relative mt-16 space-y-6 lg:hidden">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400 via-violet-400 to-blue-400" />

          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-xl">
                  <Icon size={26} />
                </div>

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl"
                >
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                    Step {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

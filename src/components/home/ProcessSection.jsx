"use client";

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
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-600">
            <Workflow size={16} />
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
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
        </div>

        <div className="relative mt-20">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-fuchsia-200 via-violet-200 to-blue-200 lg:hidden" />

          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-fuchsia-200 via-violet-200 to-blue-200" />

            <div className="grid grid-cols-5 gap-6">
              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 shadow-xl transition-all duration-300 hover:scale-105">
                      <Icon size={34} className="text-white" />
                    </div>

                    <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-200 hover:shadow-xl">
                      <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-600">
                        Step {step.number}
                      </span>

                      <h3 className="mt-4 text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 lg:hidden">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative pl-20">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 shadow-lg">
                    <Icon size={26} className="text-white" />
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-600">
                      Step {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

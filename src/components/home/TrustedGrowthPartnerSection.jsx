"use client";

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
  },
  {
    icon: BadgeCheck,
    title: "Certified Experts",
    description:
      "Our Google & Meta certified specialists create high-performing campaigns using industry best practices.",
  },
  {
    icon: ChartSpline,
    title: "Transparent Reporting",
    description:
      "Track campaign performance with clear reports, actionable insights, and complete visibility.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Customized Marketing Plans",
    description:
      "No one-size-fits-all approach. Every strategy is tailored to your business goals and audience.",
  },
  {
    icon: Users,
    title: "Dedicated Account Managers",
    description:
      "Work with a dedicated expert who understands your business and ensures smooth communication.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Campaign Optimization",
    description:
      "We continuously monitor, analyze, and optimize campaigns for higher ROI and sustainable growth.",
  },
];

export default function TrustedGrowthPartner() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-600">
            <Handshake size={16} />
            Trusted Growth Partner
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Your Partner in
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Sustainable Business Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At AdsLyve Media, we don't believe in guesswork.Every campaign is
            backed by research, analytics, and optimization to help your
            business achieve sustainable growth.Whether you're a startup looking
            for visibility or an established brand aiming to scale, we build
            marketing strategies tailored to your goals.
          </p>

          <div className="mt-10 rounded-3xl border border-fuchsia-100 bg-gradient-to-r from-fuchsia-50 via-violet-50 to-blue-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Why Choose AdsLyve?
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We combine data, creativity, and proven marketing strategies to
              deliver consistent business growth while keeping complete
              transparency throughout every campaign.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative mt-10 rounded-[30px] border border-slate-200 bg-white px-7 pb-7 pt-12 transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-200 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="absolute -top-8 left-7 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={28} />
                </div>

                <div className="flex justify-end">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold tracking-[0.18em] text-slate-400 transition-all duration-300 group-hover:border-fuchsia-200 group-hover:text-fuchsia-600">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-0">
                  <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-fuchsia-600">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fuchsia-600 transition-transform duration-300 group-hover:scale-125" />
                    <span className="h-2 w-2 rounded-full bg-violet-500 transition-transform duration-300 delay-75 group-hover:scale-125" />
                    <span className="h-2 w-2 rounded-full bg-blue-500 transition-transform duration-300 delay-150 group-hover:scale-125" />
                  </div>

                  <div className="h-1 w-16 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-0 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

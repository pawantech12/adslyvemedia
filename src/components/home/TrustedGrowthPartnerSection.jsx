"use client";

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
          <span className="inline-flex rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-semibold text-fuchsia-600">
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
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

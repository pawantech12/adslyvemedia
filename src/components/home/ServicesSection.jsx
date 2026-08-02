"use client";

import Link from "next/link";
import {
  Search,
  Megaphone,
  TrendingUp,
  Chrome,
  Instagram,
  Share2,
  Globe,
  Mail,
  ArrowRight,
  Check,
} from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Rank Higher. Get Found. Grow Organically.",
    icon: Search,
    color: "from-fuchsia-600 via-violet-600 to-blue-500",
    description:
      "Our SEO strategies help your business appear where your customers are searching.",
    features: [
      "Website SEO Audit",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Content Optimization",
      "Link Building",
      "Monthly SEO Reporting",
    ],
  },

  {
    title: "Digital Marketing",
    subtitle: "End-to-End Digital Marketing Solutions",
    icon: Megaphone,
    color: "from-blue-600 via-violet-600 to-fuchsia-600",
    description:
      "Integrated marketing strategies that strengthen your online presence and accelerate business growth.",
    features: [
      "Brand Strategy",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Online Reputation Management",
      "Website Optimization",
      "Lead Generation",
      "Marketing Analytics",
    ],
  },

  {
    title: "Performance Marketing",
    subtitle: "Every Click Should Generate Results",
    icon: TrendingUp,
    color: "from-fuchsia-600 via-violet-600 to-blue-500",
    description:
      "Generate quality leads, sales, and conversions while optimizing every marketing dollar.",
    features: [
      "Lead Generation Campaigns",
      "Sales Campaigns",
      "Conversion Optimization",
      "Landing Page Optimization",
      "Audience Targeting",
      "Funnel Optimization",
      "Retargeting Campaigns",
      "ROI Tracking",
    ],
  },

  {
    title: "Google Ads",
    subtitle: "Reach Customers Exactly When They're Searching",
    icon: Chrome,
    color: "from-blue-600 via-cyan-500 to-violet-600",
    description:
      "Highly optimized Google advertising campaigns that maximize visibility and ROI.",
    features: [
      "Search Ads",
      "Display Ads",
      "Shopping Ads",
      "YouTube Ads",
      "App Campaigns",
      "Performance Max Campaigns",
      "Remarketing Campaigns",
    ],
  },

  {
    title: "Meta Ads",
    subtitle: "Reach Millions Across Facebook & Instagram",
    icon: Instagram,
    color: "from-pink-600 via-fuchsia-600 to-violet-600",
    description:
      "Advertising campaigns designed to drive engagement, generate leads and increase sales.",
    features: [
      "Facebook Advertising",
      "Instagram Advertising",
      "Lead Generation Ads",
      "Conversion Campaigns",
      "E-commerce Ads",
      "Remarketing Campaigns",
      "Video Advertising",
      "Brand Awareness Campaigns",
    ],
  },

  {
    title: "Social Media Marketing",
    subtitle: "Build Communities That Convert",
    icon: Share2,
    color: "from-violet-600 via-blue-600 to-cyan-500",
    description:
      "Grow your brand across social media platforms with engaging content and strategic campaigns.",
    features: [
      "Content Strategy",
      "Creative Design",
      "Social Media Management",
      "Audience Growth",
      "Influencer Campaigns",
      "Paid Social Campaigns",
      "Analytics",
      "Community Management",
    ],
  },

  {
    title: "Web & App Development",
    subtitle: "Modern Digital Experiences",
    icon: Globe,
    color: "from-cyan-600 via-blue-600 to-violet-600",
    description:
      "Professional websites and scalable web & mobile applications built for performance.",
    features: [
      "Business Websites",
      "E-commerce",
      "Landing Pages",
      "Web Applications",
      "Mobile Apps",
      "UI/UX Design",
      "Maintenance",
      "Performance Optimization",
    ],
  },

  {
    title: "Email Marketing",
    subtitle: "Convert Subscribers into Customers",
    icon: Mail,
    color: "from-fuchsia-600 via-violet-600 to-indigo-600",
    description:
      "Automated email campaigns that nurture leads, increase retention and boost revenue.",
    features: [
      "Email Campaigns",
      "Automation",
      "Newsletter Design",
      "Lead Nurturing",
      "Promotional Emails",
      "CRM Integration",
      "A/B Testing",
      "Performance Reports",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-600">
            <BriefcaseBusiness size={16} />
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Complete Digital Growth
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From SEO and paid advertising to web development and social media,
            we provide everything your business needs to grow online.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500" />

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-100 to-blue-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-fuchsia-600">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
                    What's Included
                  </h4>

                  <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fuchsia-100">
                          <Check size={12} className="text-fuchsia-600" />
                        </div>

                        <span className="text-sm leading-6 text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
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

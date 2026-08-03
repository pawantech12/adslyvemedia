"use client";

import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  TrendingUp,
  Chrome,
  Instagram,
  Share2,
  Globe,
  Mail,
  Check,
  Sparkles,
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
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 max-sm:py-10"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
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
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
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
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-lg backdrop-blur-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <BriefcaseBusiness size={16} />
            </span>
            What We Do
          </motion.span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
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
        </motion.div>

        {/* CARDS */}

        <div className="mt-16 max-sm:mt-10 grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-xl transition-all duration-500"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500" />

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-200 to-blue-200 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-xl`}
                >
                  <Icon size={30} />
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 font-semibold text-fuchsia-600">
                  {service.subtitle}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
                    What's Included
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        whileHover={{
                          x: 5,
                        }}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white">
                          <Check size={13} />
                        </span>

                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
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

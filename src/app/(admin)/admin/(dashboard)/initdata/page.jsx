"use client";

import { useState } from "react";
import axios from "axios";

const initialServices = [
  {
    title: "Digital Marketing",
    subtitle: "End-to-End Digital Marketing Solutions",
    icon: "Megaphone",
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
    icon: "TrendingUp",
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
    icon: "Chrome",
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
    icon: "Instagram",
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
    icon: "Share2",
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
    icon: "Globe",
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
    icon: "Mail",
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

export default function SeedServices() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const seedServices = async () => {
    try {
      setLoading(true);
      setResult("");

      let created = 0;
      let failed = 0;

      for (const service of initialServices) {
        try {
          await axios.post("/api/admin/services", service);
          created++;
        } catch (error) {
          console.error(
            `Failed to create ${service.title}:`,
            error.response?.data || error,
          );

          failed++;
        }
      }

      setResult(`Completed. Created: ${created}, Failed: ${failed}`);
    } catch (error) {
      console.error(error);

      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <button
        type="button"
        onClick={seedServices}
        disabled={loading}
        className="rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Adding Services..." : "Add Initial Services"}
      </button>

      {result && (
        <p className="mt-4 text-sm font-medium text-slate-700">{result}</p>
      )}
    </div>
  );
}

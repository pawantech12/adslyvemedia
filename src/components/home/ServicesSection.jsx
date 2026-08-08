"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  Search,
  Megaphone,
  TrendingUp,
  Globe,
  Mail,
  Check,
  BriefcaseBusiness,
  Loader2,
} from "lucide-react";
import { Code } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Monitor } from "lucide-react";
import { Palette } from "lucide-react";
import { Camera } from "lucide-react";
import { Video } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Target } from "lucide-react";
import { Users } from "lucide-react";
import { Settings } from "lucide-react";
import { Rocket } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Star } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Database } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { FileText } from "lucide-react";
import { PenTool } from "lucide-react";
import { Layout } from "lucide-react";
import { MessageSquare } from "lucide-react";

const iconMap = {
  BriefcaseBusiness,
  Search,
  Code,
  BarChart3,
  Megaphone,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Camera,
  Video,
  Mail,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Settings,
  Rocket,
  Lightbulb,
  Star,
  CheckCircle,
  Database,
  ShieldCheck,
  FileText,
  PenTool,
  Layout,
  MessageSquare,
};

const defaultIcon = BriefcaseBusiness;

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get("/api/admin/services");

        if (response.data?.success) {
          setServices(response.data.services || []);
        } else {
          setError(response.data?.message || "Unable to load services.");
        }
      } catch (error) {
        console.error("FETCH SERVICES ERROR:", error);

        setError(
          error.response?.data?.message ||
            "Unable to load services. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10"
    >
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
        <motion.div
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
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-lg backdrop-blur-xl"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <BriefcaseBusiness size={14} />
            </div>
            What We Do
          </motion.div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.9rem]">
            Complete Digital Growth
            <span className="mt-1.5 block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            From SEO and paid advertising to web development and social media,
            we provide everything your business needs to grow online.
          </p>
        </motion.div>

        {loading && (
          <div className="mt-10 flex min-h-[250px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-violet-600" />

              <p className="text-sm font-medium text-slate-500">
                Loading services...
              </p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="mt-10 flex min-h-[200px] items-center justify-center">
            <div className="max-w-md rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-center">
              <p className="font-semibold text-red-700">
                Unable to load services
              </p>

              <p className="mt-1 text-sm text-red-600">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && services.length === 0 && (
          <div className="mt-10 flex min-h-[250px] items-center justify-center">
            <div className="rounded-2xl border border-slate-200 bg-white px-8 py-8 text-center shadow-sm">
              <BriefcaseBusiness className="mx-auto h-10 w-10 text-slate-400" />

              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                No Services Available
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Our services will be available here soon.
              </p>
            </div>
          </div>
        )}

        {!loading && !error && services.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || defaultIcon;

              return (
                <motion.div
                  key={service._id}
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
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,.08)] backdrop-blur-xl transition-all duration-500"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500" />

                  <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-200 to-blue-200 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h3 className="mt-4 text-xl font-bold leading-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-sm font-semibold text-fuchsia-600">
                    {service.subtitle}
                  </p>

                  <p className="mt-3 text-[15px] leading-6 text-slate-600">
                    {service.description}
                  </p>

                  {Array.isArray(service.features) &&
                    service.features.length > 0 && (
                      <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                        <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-800">
                          What's Included
                        </h4>

                        <div className="grid gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={`${service._id}-${featureIndex}`}
                              whileHover={{
                                x: 2,
                              }}
                              className="flex items-center gap-2"
                            >
                              <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white">
                                <Check size={10} />
                              </span>

                              <span className="text-sm leading-5 text-slate-700">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

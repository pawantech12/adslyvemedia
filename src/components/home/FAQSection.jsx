"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, HelpCircle } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing noticeable improvements within 3–6 months, depending on competition and website health.",
    color: "from-cyan-500 via-blue-500 to-indigo-600",
    badge: "SEO",
    border: "border-cyan-200",
  },
  {
    question: "Which is better: SEO or Google Ads?",
    answer:
      "SEO builds sustainable organic growth, while Google Ads delivers immediate visibility. The best approach often combines both.",
    color: "from-fuchsia-600 via-violet-600 to-indigo-600",
    badge: "Marketing",
    border: "border-fuchsia-200",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We help startups build their online presence and create scalable marketing strategies from the ground up.",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "Startups",
    border: "border-emerald-200",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. Every client receives transparent performance reports with insights, campaign updates, and recommendations.",
    color: "from-orange-500 via-amber-500 to-yellow-500",
    badge: "Reports",
    border: "border-orange-200",
  },
  {
    question: "Can you manage our social media ads?",
    answer:
      "Absolutely. We create and manage Facebook and Instagram advertising campaigns focused on engagement, lead generation, and sales.",
    color: "from-blue-600 via-indigo-600 to-violet-600",
    badge: "Social Media",
    border: "border-blue-200",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute -left-28 top-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-lg backdrop-blur-xl"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white">
              <MessageCircleQuestion size={14} />
            </div>
            Frequently Asked Questions
          </motion.div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Know
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            Have questions about our digital marketing services? Here are the
            answers to the most common questions our clients ask.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mt-8 divide-y divide-slate-200">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="py-1 transition-all duration-300"
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center gap-3 py-3 text-left"
                >
                  {/* Icon */}

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md`}
                  >
                    <HelpCircle size={16} />
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      {item.badge}
                    </span>

                    <h3 className="mt-1 text-[15px] font-semibold leading-6 text-slate-900 lg:text-base">
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle */}

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-white`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="ml-12 border-l-2 border-slate-200 pl-4 pb-3 pt-1">
                        <p className="text-sm leading-6 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-10 overflow-hidden rounded-[26px] border border-white/70 bg-white/80 px-5 py-6 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-2xl sm:mt-12 sm:px-8 "
        >
          {/* Background */}

          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-fuchsia-500/15 blur-[90px]" />

          <div className="absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-cyan-500/15 blur-[90px]" />

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500" />

          <div className="relative text-center">
            {/* Heading */}
            <h3 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
              Still Have Questions?
            </h3>
            {/* Description */}
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
              Speak with our digital marketing experts and discover the best
              strategy to grow your business.
            </p>
            {/* Button */}
            <motion.a
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#contact"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 px-6 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(79,70,229,.3)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(6,182,212,.35)]"
            >
              Talk With Our Experts
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

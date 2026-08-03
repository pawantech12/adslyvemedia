"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percentage);
      setVisible(scrollTop > 250);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 30;
  const stroke = 4;

  const normalizedRadius = radius - stroke / 2;

  const circumference = 2 * Math.PI * normalizedRadius;

  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="group fixed bottom-5 right-5 z-[999] sm:bottom-7 sm:right-7"
        >
          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 via-blue-500 to-cyan-500 opacity-35 blur-2xl"
          />

          <div className="relative flex h-[72px] w-[72px] items-center justify-center">
            {/* Progress Ring */}

            <svg
              className="absolute inset-0 -rotate-90"
              width="72"
              height="72"
              viewBox="0 0 72 72"
            >
              {/* Background */}

              <circle
                cx="36"
                cy="36"
                r="31"
                fill="none"
                stroke="rgba(203,213,225,.35)"
                strokeWidth="3"
              />

              {/* Progress */}

              <motion.circle
                cx="36"
                cy="36"
                r="31"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 31}
                animate={{
                  strokeDashoffset:
                    2 * Math.PI * 31 - (progress / 100) * (2 * Math.PI * 31),
                }}
                transition={{
                  duration: 0.15,
                }}
              />

              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d946ef" />
                  <stop offset="30%" stopColor="#8b5cf6" />
                  <stop offset="65%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glass Circle */}

            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/70 bg-white/90 backdrop-blur-2xl shadow-[0_18px_40px_rgba(15,23,42,.16)] transition-all duration-500 group-hover:border-cyan-300 group-hover:shadow-[0_25px_60px_rgba(6,182,212,.28)]"
            >
              {/* Inner Gradient Circle */}

              <motion.div
                whileHover={{
                  rotate: -12,
                  scale: 1.05,
                }}
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 via-violet-600 via-blue-500 to-cyan-500 shadow-lg"
              >
                <ArrowUp size={20} strokeWidth={2.8} className="text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

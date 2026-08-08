"use client";

import { motion } from "framer-motion";
import { MessagesSquare } from "lucide-react";

export default function WhatsappButton() {
  const phone = "919876543210"; // Replace with your WhatsApp Number

  const message =
    "Hi AdsLyve Media, I'm interested in your digital marketing services.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        scale: 0.8,
        x: -20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
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
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 opacity-35 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/70 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,.18)] backdrop-blur-2xl transition-all duration-500 group-hover:border-emerald-300 group-hover:shadow-[0_25px_60px_rgba(34,197,94,.28)]"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
          <MessagesSquare size={22} strokeWidth={2.5} />
        </div>

        <span className="absolute h-full w-full rounded-full border-2 border-emerald-400/40 animate-ping" />
      </motion.div>
    </motion.a>
  );
}

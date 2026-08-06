"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminHeader({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>

            <p className="hidden text-sm text-slate-500 sm:block">
              Welcome back, Admin 👋
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="rounded-full border p-1"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 font-bold text-white">
            A
          </div>
        </motion.button>
      </div>
    </header>
  );
}

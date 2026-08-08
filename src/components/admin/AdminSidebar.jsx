"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminSidebar({ menu, sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/auth/logout");

      toast.success(response.data.message);

      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to logout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center border-b py-4">
            <Image src="/logo-dark.webp" width={130} height={40} alt="logo" />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Navigation
            </p>

            <div className="space-y-2">
              {menu.map((item) => {
                const Icon = item.icon;

                const active = pathname === item.href;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                      active
                        ? "bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="border-t p-4">
            <button
              onClick={handleLogout}
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}
    </>
  );
}

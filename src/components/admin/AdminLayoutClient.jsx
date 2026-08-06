"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  BriefcaseBusiness,
  Users,
  Mail,
  Settings,
} from "lucide-react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayoutClient({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      title: "About Management",
      icon: FileText,
      href: "/admin/about",
    },
    {
      title: "Services Management",
      icon: BriefcaseBusiness,
      href: "/admin/services",
    },
    {
      title: "Lead Enquiries",
      icon: Users,
      href: "/admin/leads",
    },
    {
      title: "Contact Management",
      icon: Mail,
      href: "/admin/contact",
    },
    {
      title: "Website Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-100">
      <div className="flex">
        <AdminSidebar
          menu={menu}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="min-w-0 flex-1 lg:ml-[280px]">
          <AdminHeader setSidebarOpen={setSidebarOpen} />

          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </section>
  );
}

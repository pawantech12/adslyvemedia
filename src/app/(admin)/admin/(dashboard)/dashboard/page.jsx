"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  BriefcaseBusiness,
  Mail,
  Users,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-slate-100">
      <div className="space-y-6 ">
        {/* ================= Overview ================= */}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Website Overview
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Monitor your website activity and manage your business from one
              place.
            </p>
          </div>

          <div className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg sm:w-fit">
            AdsLyve Media Admin Panel
          </div>
        </div>

        {/* ================= Statistics ================= */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Total Leads */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-fuchsia-200 hover:shadow-xl"
          >
            {/* Background Glow */}

            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-100 opacity-60 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Total Lead Enquiries
                </p>

                <h3 className="mt-4 text-4xl font-extrabold text-slate-900">
                  0
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Leads received through website enquiry forms.
                </p>

                <span className="mt-5 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Active
                </span>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </motion.div>

          {/* Services */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
          >
            {/* Background Glow */}

            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-100 opacity-60 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Services Listed
                </p>

                <h3 className="mt-4 text-4xl font-extrabold text-slate-900">
                  6
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Active digital marketing services available on website.
                </p>

                <span className="mt-5 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Published
                </span>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg">
                <BriefcaseBusiness className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= Recent Lead Enquiries ================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
          {/* Header */}

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Recent Lead Enquiries
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Latest enquiries received from your website.
              </p>
            </div>
          </div>

          {/* ================= Responsive Table ================= */}

          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-[900px] w-full">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-500">
                    Name
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-500">
                    Email
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-500">
                    Phone
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-500">
                    Service
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-500">
                    Status
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-500">
                    Date
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  {
                    name: "Rahul Sharma",
                    email: "rahul@gmail.com",
                    phone: "+91 9876543210",
                    service: "SEO",
                    status: "New",
                    date: "Today",
                  },
                  {
                    name: "Amit Patel",
                    email: "amit@gmail.com",
                    phone: "+91 9876543211",
                    service: "Google Ads",
                    status: "Contacted",
                    date: "Yesterday",
                  },
                  {
                    name: "Neha Singh",
                    email: "neha@gmail.com",
                    phone: "+91 9876543212",
                    service: "Social Media",
                    status: "Pending",
                    date: "2 Days Ago",
                  },
                  {
                    name: "Priya Verma",
                    email: "priya@gmail.com",
                    phone: "+91 9876543213",
                    service: "Meta Ads",
                    status: "Closed",
                    date: "3 Days Ago",
                  },
                ].map((lead, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-sm font-semibold text-white">
                          {lead.name.charAt(0)}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">
                            {lead.name}
                          </h4>

                          <p className="text-xs text-slate-500">Website Lead</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-600">
                      {lead.email}
                    </td>

                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-600">
                      {lead.phone}
                    </td>

                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {lead.service}
                      </span>
                    </td>

                    <td className="px-5 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold
              ${
                lead.status === "New"
                  ? "bg-emerald-100 text-emerald-700"
                  : lead.status === "Pending"
                    ? "bg-orange-100 text-orange-700"
                    : lead.status === "Closed"
                      ? "bg-slate-200 text-slate-700"
                      : "bg-blue-100 text-blue-700"
              }`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-500">
                      {lead.date}
                    </td>

                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-100">
                          View
                        </button>

                        <button className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}

          <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-semibold">4</span> of{" "}
              <span className="font-semibold">4</span> enquiries
            </p>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
                Previous
              </button>

              <button className="rounded-lg bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-4 py-2 text-sm font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
                Next
              </button>
            </div>
          </div>
        </div>
        {/* ================= Bottom Section ================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Quick Navigation
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Quickly manage your website content.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "About",
                desc: "Manage company information",
                href: "/admin/about",
                color: "from-fuchsia-600 via-violet-600 to-blue-500",
                icon: FileText,
              },
              {
                title: "Services",
                desc: "Update all services",
                href: "/admin/services",
                color: "from-cyan-500 via-blue-500 to-indigo-600",
                icon: BriefcaseBusiness,
              },
              {
                title: "Contact",
                desc: "Business details",
                href: "/admin/contact",
                color: "from-emerald-500 to-teal-500",
                icon: Mail,
              },
              {
                title: "Lead Forms",
                desc: "View enquiries",
                href: "/admin/leads",
                color: "from-orange-500 to-red-500",
                icon: Users,
              },
              {
                title: "Settings",
                desc: "Website configuration",
                href: "/admin/settings",
                color: "from-indigo-600 to-purple-600",
                icon: Settings,
              },
              {
                title: "Dashboard",
                desc: "Overview",
                href: "/admin/dashboard",
                color: "from-slate-700 to-slate-900",
                icon: LayoutDashboard,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} whileHover={{ y: -4 }}>
                  <Link
                    href={item.href}
                    className="group block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-transparent hover:shadow-lg"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="mt-3 text-base font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

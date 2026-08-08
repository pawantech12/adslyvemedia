"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  LayoutDashboard,
  FileText,
  BriefcaseBusiness,
  Mail,
  Settings,
  Users,
  Trash2,
  X,
  Phone,
  MessageSquare,
  Calendar,
  RefreshCw,
  Loader2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import axios from "axios";

const getStatusStyle = (status) => {
  switch (status) {
    case "New":
      return "bg-emerald-100 text-emerald-700";

    case "Contacted":
      return "bg-blue-100 text-blue-700";

    case "Closed":
      return "bg-slate-200 text-slate-700";

    default:
      return "bg-slate-100 text-slate-600";
  }
};

const formatDate = (date) => {
  if (!date) return "—";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const quickNavigation = [
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
];

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  const [selectedLead, setSelectedLead] = useState(null);
  const [viewModal, setViewModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState(null);

  const [deleting, setDeleting] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const fetchDashboardData = async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const [leadsResponse, servicesResponse] = await Promise.all([
        axios.get("/api/admin/leads", {
          withCredentials: true,
          headers: {
            "Cache-Control": "no-cache",
          },
        }),

        axios.get("/api/admin/services", {
          withCredentials: true,
          headers: {
            "Cache-Control": "no-cache",
          },
        }),
      ]);

      setLeads(leadsResponse.data.leads || []);
      setServices(servicesResponse.data.services || []);
    } catch (error) {
      console.error("DASHBOARD FETCH ERROR:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to load dashboard data. Please try again.",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const statistics = useMemo(() => {
    const total = leads.length;

    const newLeads = leads.filter((lead) => lead.status === "New").length;

    const contactedLeads = leads.filter(
      (lead) => lead.status === "Contacted",
    ).length;

    const closedLeads = leads.filter((lead) => lead.status === "Closed").length;

    return {
      total,
      newLeads,
      contactedLeads,
      closedLeads,
      services: services.length,
    };
  }, [leads, services]);

  const recentLeads = useMemo(() => {
    return [...leads]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);
  }, [leads]);

  const handleView = (lead) => {
    setSelectedLead(lead);
    setViewModal(true);
  };

  const closeModal = () => {
    setViewModal(false);

    setTimeout(() => {
      setSelectedLead(null);
    }, 200);
  };

  const handleDelete = (lead) => {
    setLeadToDelete(lead);
    setDeleteModal(true);
  };

  const cancelDelete = () => {
    if (deleting) return;

    setDeleteModal(false);
    setLeadToDelete(null);
  };

  const confirmDelete = async () => {
    if (!leadToDelete) return;

    try {
      setDeleting(true);

      const response = await axios.delete(
        `/api/admin/leads?id=${leadToDelete._id}`,
        {
          withCredentials: true,
        },
      );

      setLeads((prev) => prev.filter((lead) => lead._id !== leadToDelete._id));

      if (selectedLead?._id === leadToDelete._id) {
        closeModal();
      }

      setDeleteModal(false);
      setLeadToDelete(null);
    } catch (error) {
      console.error("DELETE LEAD ERROR:", error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete lead.",
      );
    } finally {
      setDeleting(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      setUpdatingStatus(true);

      const response = await axios.patch(
        "/api/admin/leads",
        {
          id,
          status,
        },
        {
          withCredentials: true,
        },
      );

      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id
            ? {
                ...lead,
                status,
              }
            : lead,
        ),
      );

      if (selectedLead?._id === id) {
        setSelectedLead((prev) => ({
          ...prev,
          status,
        }));
      }
    } catch (error) {
      console.error("UPDATE STATUS ERROR:", error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to update status.",
      );
    } finally {
      setUpdatingStatus(false);
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-100">
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <Loader2
              size={38}
              className="mx-auto animate-spin text-violet-600"
            />

            <p className="mt-4 text-sm font-medium text-slate-600">
              Loading dashboard...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100">
      <div className="space-y-6">
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

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => fetchDashboardData(true)}
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {refreshing ? (
                <Loader2 size={17} className="animate-spin" />
              ) : (
                <RefreshCw size={17} />
              )}

              {refreshing ? "Refreshing..." : "Refresh"}
            </button>

            <div className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg sm:w-fit">
              AdsLyve Media Admin Panel
            </div>
          </div>
        </div>

        {error && (
          <div className="flex flex-col gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="mt-0.5 shrink-0 text-red-600" />

              <div>
                <p className="font-semibold text-red-800">Dashboard Error</p>

                <p className="mt-1 text-sm text-red-600">{error}</p>
              </div>
            </div>

            <button
              onClick={() => fetchDashboardData(true)}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* TOTAL LEADS */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-fuchsia-200 hover:shadow-xl"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-100 opacity-60 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Total Lead Enquiries
                </p>

                <h3 className="mt-4 text-4xl font-extrabold text-slate-900">
                  {statistics.total}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Leads received through website enquiry forms.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {statistics.newLeads} New
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {statistics.contactedLeads} Contacted
                  </span>

                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    {statistics.closedLeads} Closed
                  </span>
                </div>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </motion.div>

          {/* SERVICES */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-xl"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-100 opacity-60 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Services Listed
                </p>

                <h3 className="mt-4 text-4xl font-extrabold text-slate-900">
                  {statistics.services}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Active digital marketing services available on website.
                </p>

                <span className="mt-5 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Published
                </span>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg">
                <BriefcaseBusiness className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                Recent Lead Enquiries
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Latest enquiries received from your website.
              </p>
            </div>

            <Link
              href="/admin/leads"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View All Leads
              <ArrowRight size={16} />
            </Link>
          </div>

          {recentLeads.length > 0 ? (
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-[850px] w-full">
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

                <tbody className="divide-y divide-slate-100">
                  {recentLeads.map((lead) => (
                    <tr
                      key={lead._id}
                      className="transition-colors hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-sm font-semibold text-white">
                            {lead.name?.charAt(0)?.toUpperCase()}
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-slate-900">
                              {lead.name}
                            </h4>

                            <p className="text-xs text-slate-500">
                              Website Lead
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                        {lead.email}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                        {lead.phone}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            lead.status,
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                        {formatDate(lead.createdAt)}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleView(lead)}
                            className="rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-100"
                          >
                            View
                          </button>

                          <button
                            onClick={() => handleDelete(lead)}
                            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyLeads />
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Quick Navigation
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Quickly manage your website content.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {quickNavigation.map((item) => {
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

      <AnimatePresence>
        {viewModal && selectedLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 20,
              }}
              className="flex max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* HEADER */}

              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Lead Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    View customer enquiry details.
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100"
                >
                  <X size={18} />
                </button>
              </div>

              {/* BODY */}

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-4">
                  {/* NAME */}

                  <LeadInfo
                    icon={<Users size={20} />}
                    iconClass="bg-violet-100 text-violet-700"
                    label="Full Name"
                    value={selectedLead.name}
                  />

                  {/* EMAIL */}

                  <LeadInfo
                    icon={<Mail size={20} />}
                    iconClass="bg-blue-100 text-blue-700"
                    label="Email Address"
                    value={selectedLead.email}
                  />

                  {/* PHONE */}

                  <LeadInfo
                    icon={<Phone size={20} />}
                    iconClass="bg-emerald-100 text-emerald-700"
                    label="Phone Number"
                    value={selectedLead.phone}
                  />

                  {/* MESSAGE */}

                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-700">
                        <MessageSquare size={18} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs text-slate-500">
                          Customer Requirement
                        </p>

                        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700">
                          {selectedLead.message}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DATE + STATUS */}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                          <Calendar size={18} />
                        </div>

                        <div>
                          <p className="text-xs text-slate-500">Submitted On</p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {formatDate(selectedLead.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Lead Status
                      </label>

                      <select
                        value={selectedLead.status}
                        disabled={updatingStatus}
                        onChange={(e) =>
                          updateStatus(selectedLead._id, e.target.value)
                        }
                        className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-fuchsia-500 disabled:cursor-not-allowed disabled:bg-slate-100"
                      >
                        <option value="New">New</option>

                        <option value="Contacted">Contacted</option>

                        <option value="Closed">Closed</option>
                      </select>

                      {updatingStatus ? (
                        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500">
                          <Loader2 size={13} className="animate-spin" />
                          Updating...
                        </div>
                      ) : (
                        <span
                          className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            selectedLead.status,
                          )}`}
                        >
                          {selectedLead.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div className="border-t border-slate-200 p-4 sm:px-6 sm:py-5">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={closeModal}
                    className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    Close
                  </button>

                  <button
                    onClick={closeModal}
                    className="rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {deleteModal && leadToDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
            >
              <div className="border-b border-slate-200 px-6 py-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Delete Lead
                </h3>
              </div>

              <div className="px-6 py-6">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Trash2 className="h-8 w-8 text-red-600" />
                </div>

                <p className="text-center text-lg font-semibold text-slate-900">
                  Are you sure?
                </p>

                <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                  You are about to permanently delete the enquiry from{" "}
                  <span className="font-semibold text-slate-900">
                    {leadToDelete.name}
                  </span>
                  .
                </p>

                <p className="mt-3 text-center text-sm text-red-500">
                  This action cannot be undone.
                </p>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-5 sm:flex-row sm:justify-end">
                <button
                  onClick={cancelDelete}
                  disabled={deleting}
                  className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmDelete}
                  disabled={deleting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {deleting && <Loader2 size={16} className="animate-spin" />}

                  {deleting ? "Deleting..." : "Delete Lead"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function StatusCard({ title, value, icon: Icon, iconClass }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-3xl font-extrabold text-slate-900">{value}</p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={21} />
        </div>
      </div>
    </motion.div>
  );
}

function LeadInfo({ icon, iconClass, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs text-slate-500">{label}</p>

          <p className="mt-1 break-all text-sm font-medium text-slate-900">
            {value || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

function EmptyLeads() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
        <Users size={30} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        No Lead Enquiries Yet
      </h3>

      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
        New enquiries submitted through your website contact form will appear
        here.
      </p>
    </div>
  );
}

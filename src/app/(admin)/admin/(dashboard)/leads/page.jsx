"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Eye,
  Trash2,
  Phone,
  Mail,
  User,
  MessageSquare,
  Calendar,
  X,
  Users,
} from "lucide-react";

const initialLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    message:
      "I need SEO services for my e-commerce business. Please contact me.",
    status: "New",
    date: "05 Aug 2026",
  },
  {
    id: 2,
    name: "Amit Patel",
    email: "amit@gmail.com",
    phone: "+91 9876543211",
    message: "Looking for Google Ads campaign management for my business.",
    status: "Contacted",
    date: "04 Aug 2026",
  },
  {
    id: 3,
    name: "Priya Verma",
    email: "priya@gmail.com",
    phone: "+91 9876543212",
    message: "Need a complete digital marketing strategy for our startup.",
    status: "Closed",
    date: "03 Aug 2026",
  },
];

export default function LeadManagementPage() {
  const [leads, setLeads] = useState(initialLeads);

  const [selectedLead, setSelectedLead] = useState(null);

  const [viewModal, setViewModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState(null);

  const handleView = (lead) => {
    setSelectedLead(lead);
    setViewModal(true);
  };

  const closeModal = () => {
    setViewModal(false);

    setTimeout(() => {
      setSelectedLead(null);
    }, 250);
  };

  const handleDelete = (lead) => {
    setLeadToDelete(lead);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!leadToDelete) return;

    setLeads((prev) => prev.filter((lead) => lead.id !== leadToDelete.id));

    setDeleteModal(false);
    setLeadToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModal(false);
    setLeadToDelete(null);
  };

  const updateStatus = (id, status) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id
          ? {
              ...lead,
              status,
            }
          : lead,
      ),
    );

    if (selectedLead?.id === id) {
      setSelectedLead({
        ...selectedLead,
        status,
      });
    }
  };

  return (
    <div className="space-y-5 lg:space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Lead Management
          </h1>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            View and manage enquiries submitted through your website.
          </p>
        </div>

        <div className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg sm:w-fit">
          <Users size={18} />
          Total Leads : {leads.length}
        </div>
      </div>

      {/* ================= Desktop Table ================= */}

      <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Date
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-slate-100 transition-colors duration-300 hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div className="font-semibold text-slate-900">
                    {lead.name}
                  </div>
                </td>

                <td className="px-6 py-5 text-slate-600">{lead.email}</td>

                <td className="px-6 py-5 text-slate-600">{lead.phone}</td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      lead.status === "New"
                        ? "bg-emerald-100 text-emerald-700"
                        : lead.status === "Contacted"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-slate-500">{lead.date}</td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleView(lead)}
                      className="rounded-xl border border-cyan-200 bg-cyan-50 p-2 text-cyan-700 transition-all duration-300 hover:bg-cyan-100"
                    >
                      <Eye size={17} />
                    </button>

                    <button
                      onClick={() => handleDelete(lead)}
                      className="rounded-xl border border-red-200 bg-red-50 p-2 text-red-600 transition-all duration-300 hover:bg-red-100"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Cards ================= */}

      <div className="grid gap-4 lg:hidden">
        {leads.map((lead) => (
          <motion.div
            key={lead.id}
            whileHover={{
              y: -2,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-bold text-slate-900">
                  {lead.name}
                </h3>

                <p className="mt-2 break-all text-sm text-slate-500">
                  {lead.email}
                </p>

                <p className="mt-1 text-sm text-slate-500">{lead.phone}</p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      lead.status === "New"
                        ? "bg-emerald-100 text-emerald-700"
                        : lead.status === "Contacted"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {lead.status}
                  </span>

                  <span className="text-xs text-slate-400">{lead.date}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleView(lead)}
                className="rounded-xl border border-cyan-200 bg-cyan-50 py-3 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:bg-cyan-100"
              >
                View
              </button>

              <button
                onClick={() => handleDelete(lead)}
                className="rounded-xl border border-red-200 bg-red-50 py-3 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= View Lead Modal ================= */}
      <AnimatePresence>
        {viewModal && selectedLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
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
              transition={{ duration: 0.2 }}
              className="flex h-auto max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Header */}

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

              {/* Body */}

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-4">
                  {/* Name */}

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white">
                        <User size={22} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">Full Name</p>

                        <h3 className="truncate text-base font-semibold text-slate-900">
                          {selectedLead.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Email */}

                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        <Mail size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">Email Address</p>

                        <p className="mt-1 break-all text-sm font-medium text-slate-900">
                          {selectedLead.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}

                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <Phone size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">Phone Number</p>

                        <p className="mt-1 text-sm font-medium text-slate-900">
                          {selectedLead.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message */}

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

                  {/* Bottom */}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Date */}

                    <div className="rounded-xl border border-slate-200 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                          <Calendar size={18} />
                        </div>

                        <div>
                          <p className="text-xs text-slate-500">Submitted On</p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {selectedLead.date}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Status */}

                    <div className="rounded-xl border border-slate-200 p-4">
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Lead Status
                      </label>

                      <select
                        value={selectedLead.status}
                        onChange={(e) =>
                          updateStatus(selectedLead.id, e.target.value)
                        }
                        className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-fuchsia-500"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Closed">Closed</option>
                      </select>

                      <span
                        className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          selectedLead.status === "New"
                            ? "bg-emerald-100 text-emerald-700"
                            : selectedLead.status === "Contacted"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {selectedLead.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}

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
        {deleteModal && (
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
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
            >
              {/* Header */}

              <div className="border-b border-slate-200 px-6 py-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Delete Lead
                </h3>
              </div>

              {/* Body */}

              <div className="px-6 py-6">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Trash2 className="h-8 w-8 text-red-600" />
                </div>

                <p className="text-center text-lg font-semibold text-slate-900">
                  Are you sure?
                </p>

                <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                  You are about to permanently delete the enquiry from
                  <br />
                  <span className="font-semibold text-slate-900">
                    {leadToDelete?.name}
                  </span>
                </p>

                <p className="mt-3 text-center text-sm text-red-500">
                  This action cannot be undone.
                </p>
              </div>

              {/* Footer */}

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-5 sm:flex-row sm:justify-end">
                <button
                  onClick={cancelDelete}
                  className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmDelete}
                  className="rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700"
                >
                  Delete Lead
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= Empty State ================= */}

      {leads.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm sm:px-10 sm:py-20">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white shadow-lg">
            <Users size={36} />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            No Lead Enquiries Found
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Customer enquiries submitted through your website will appear here.
            Once visitors submit your contact form, you'll be able to view,
            update their status, and manage all enquiries from this dashboard.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, BriefcaseBusiness } from "lucide-react";

export default function ServicesManagement() {
  const [openModal, setOpenModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      subtitle: "Rank Higher. Get Found. Grow Organically.",
      description: "SEO Description",
      features: ["Website SEO Audit", "Keyword Research", "On-Page SEO"],
    },
    {
      id: 2,
      title: "Digital Marketing",
      subtitle: "End-to-End Digital Marketing Solutions",
      description: "Digital Marketing Description",
      features: ["Brand Strategy", "Lead Generation"],
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    features: [""],
  });

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const resetForm = () => {
    setEditingService(null);

    setFormData({
      title: "",
      subtitle: "",
      description: "",
      features: [""],
    });
  };

  const handleEdit = (service) => {
    setEditingService(service);

    setFormData({
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      features: [...service.features],
    });

    setOpenModal(true);
  };

  const handleDelete = (service) => {
    setServiceToDelete(service);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!serviceToDelete) return;

    setServices((prev) =>
      prev.filter((item) => item.id !== serviceToDelete.id),
    );

    setDeleteModal(false);
    setServiceToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModal(false);
    setServiceToDelete(null);
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const updateFeature = (index, value) => {
    const features = [...formData.features];
    features[index] = value;

    setFormData({
      ...formData,
      features,
    });
  };

  const removeFeature = (index) => {
    if (formData.features.length === 1) return;

    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const handleAddService = () => {};

  const handleUpdateService = () => {};

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* ================= Header ================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Services Management
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Add, edit and delete website services.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setOpenModal(true);
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] sm:w-auto"
        >
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      {/* ================= Responsive Table ================= */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[850px] w-full">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-500 sm:px-6">
                  Service
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-500 sm:px-6">
                  Subtitle
                </th>

                <th className="px-4 py-4 text-center text-sm font-semibold text-slate-500 sm:px-6">
                  Features
                </th>

                <th className="px-4 py-4 text-right text-sm font-semibold text-slate-500 sm:px-6">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {services.map((service) => (
                <tr
                  key={service.id}
                  className="transition-colors duration-200 hover:bg-slate-50"
                >
                  {/* Service */}

                  <td className="px-4 py-5 sm:px-6">
                    <div className="max-w-[220px]">
                      <h3 className="font-semibold leading-6 text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                  </td>

                  {/* Subtitle */}

                  <td className="px-4 py-5 sm:px-6">
                    <p className="max-w-[320px] text-sm leading-6 text-slate-600">
                      {service.subtitle}
                    </p>
                  </td>

                  {/* Features */}

                  <td className="px-4 py-5 text-center sm:px-6">
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {service.features.length} Features
                    </span>
                  </td>

                  {/* Actions */}

                  <td className="px-4 py-5 sm:px-6">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700 transition-all duration-200 hover:bg-cyan-100 hover:scale-105"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(service)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-600 transition-all duration-200 hover:bg-red-100 hover:scale-105"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scroll Hint (Only Mobile) */}

        <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-center text-xs text-slate-500 lg:hidden">
          ← Swipe horizontally to view all columns →
        </div>
      </div>

      {/* ================= Modal ================= */}

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="flex h-auto max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {editingService ? "Edit Service" : "Add New Service"}
                </h3>

                <button
                  onClick={() => {
                    setOpenModal(false);
                    resetForm();
                  }}
                  className="rounded-lg p-2 transition hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}

              <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
                <div className="space-y-4">
                  {/* Service Title */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Service Title
                    </label>

                    <input
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
                    />
                  </div>

                  {/* Subtitle */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Subtitle
                    </label>

                    <input
                      value={formData.subtitle}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subtitle: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
                    />
                  </div>

                  {/* Description */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Description
                    </label>

                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
                    />
                  </div>

                  {/* Features */}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Features
                    </label>

                    <div className="space-y-2.5">
                      {formData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-2 sm:flex-row"
                        >
                          <input
                            value={feature}
                            onChange={(e) =>
                              updateFeature(index, e.target.value)
                            }
                            placeholder={`Feature ${index + 1}`}
                            className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500"
                          />

                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="flex h-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 text-red-600 transition hover:bg-red-100 sm:h-auto sm:w-11 sm:px-0"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={addFeature}
                      className="mt-3 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
                    >
                      + Add Feature
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}

              <div className="sticky bottom-0 border-t border-slate-200 bg-white px-4 py-3 sm:px-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => {
                      setOpenModal(false);
                      resetForm();
                    }}
                    className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={
                      editingService ? handleUpdateService : handleAddService
                    }
                    className="rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                  >
                    {editingService ? "Save Changes" : "Save Service"}
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
                scale: 0.95,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
                y: 20,
              }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
            >
              {/* Header */}

              <div className="border-b border-slate-200 px-6 py-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Delete Service
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
                  You are about to permanently delete
                  <br />
                  <span className="font-semibold text-slate-800">
                    "{serviceToDelete?.title}"
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
                  Delete Service
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= Empty State ================= */}

      {services.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center"
        >
          <BriefcaseBusiness className="mx-auto mb-4 h-12 w-12 text-slate-400" />

          <h3 className="text-lg font-semibold text-slate-900">
            No Services Found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Click <strong>Add New Service</strong> to create your first service.
          </p>

          <button
            onClick={() => {
              resetForm();
              setOpenModal(true);
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            <Plus size={18} />
            Add New Service
          </button>
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  BriefcaseBusiness,
  Search,
  Code,
  BarChart3,
  Megaphone,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Camera,
  Video,
  Mail,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Settings,
  Rocket,
  Lightbulb,
  Star,
  CheckCircle,
  Database,
  ShieldCheck,
  FileText,
  PenTool,
  Layout,
  MessageSquare,
  LucideIcon,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

/* =========================
   ICON MAP
========================= */

const iconMap = {
  BriefcaseBusiness,
  Search,
  Code,
  BarChart3,
  Megaphone,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Camera,
  Video,
  Mail,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Settings,
  Rocket,
  Lightbulb,
  Star,
  CheckCircle,
  Database,
  ShieldCheck,
  FileText,
  PenTool,
  Layout,
  MessageSquare,
};

/* =========================
   ICON OPTIONS
========================= */

const iconOptions = [
  {
    name: "BriefcaseBusiness",
    label: "Business",
  },
  {
    name: "Search",
    label: "Search / SEO",
  },
  {
    name: "Code",
    label: "Development",
  },
  {
    name: "BarChart3",
    label: "Analytics",
  },
  {
    name: "Megaphone",
    label: "Marketing",
  },
  {
    name: "Globe",
    label: "Website",
  },
  {
    name: "Smartphone",
    label: "Mobile",
  },
  {
    name: "Monitor",
    label: "Desktop",
  },
  {
    name: "Palette",
    label: "Design",
  },
  {
    name: "Camera",
    label: "Photography",
  },
  {
    name: "Video",
    label: "Video",
  },
  {
    name: "Mail",
    label: "Email",
  },
  {
    name: "ShoppingCart",
    label: "E-commerce",
  },
  {
    name: "Target",
    label: "Target",
  },
  {
    name: "TrendingUp",
    label: "Growth",
  },
  {
    name: "Users",
    label: "Users",
  },
  {
    name: "Settings",
    label: "Settings",
  },
  {
    name: "Rocket",
    label: "Launch",
  },
  {
    name: "Lightbulb",
    label: "Ideas",
  },
  {
    name: "Star",
    label: "Star",
  },
  {
    name: "CheckCircle",
    label: "Success",
  },
  {
    name: "Database",
    label: "Database",
  },
  {
    name: "ShieldCheck",
    label: "Security",
  },
  {
    name: "FileText",
    label: "Content",
  },
  {
    name: "PenTool",
    label: "Creative",
  },
  {
    name: "Layout",
    label: "Layout",
  },
  {
    name: "MessageSquare",
    label: "Communication",
  },
];

/* =========================
   DEFAULT FORM
========================= */

const defaultForm = {
  title: "",
  subtitle: "",
  description: "",
  icon: "BriefcaseBusiness",
  features: [""],
};

export default function ServicesManagement() {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [editingService, setEditingService] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);

  const [serviceToDelete, setServiceToDelete] = useState(null);

  const [formData, setFormData] = useState(defaultForm);

  /* =========================
     FETCH SERVICES
  ========================= */

  const fetchServices = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/admin/services");

      if (response.data.success) {
        setServices(response.data.services || []);
      }
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        return;
      }

      toast.error(error.response?.data?.message || "Failed to load services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  /* =========================
     BODY SCROLL
  ========================= */

  useEffect(() => {
    document.body.style.overflow = openModal || deleteModal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal, deleteModal]);

  /* =========================
     RESET FORM
  ========================= */

  const resetForm = () => {
    setEditingService(null);

    setFormData({
      title: "",
      subtitle: "",
      description: "",
      icon: "BriefcaseBusiness",
      features: [""],
    });
  };

  /* =========================
     OPEN ADD MODAL
  ========================= */

  const openAddModal = () => {
    resetForm();
    setOpenModal(true);
  };

  /* =========================
     EDIT SERVICE
  ========================= */

  const handleEdit = (service) => {
    setEditingService(service);

    setFormData({
      title: service.title || "",
      subtitle: service.subtitle || "",
      description: service.description || "",
      icon: service.icon || "BriefcaseBusiness",
      features: service.features?.length > 0 ? [...service.features] : [""],
    });

    setOpenModal(true);
  };

  /* =========================
     CLOSE MODAL
  ========================= */

  const closeFormModal = () => {
    if (saving) return;

    setOpenModal(false);

    resetForm();
  };

  /* =========================
     FORM CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     FEATURES
  ========================= */

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const updateFeature = (index, value) => {
    setFormData((prev) => {
      const features = [...prev.features];

      features[index] = value;

      return {
        ...prev,
        features,
      };
    });
  };

  const removeFeature = (index) => {
    setFormData((prev) => {
      if (prev.features.length === 1) {
        return prev;
      }

      return {
        ...prev,
        features: prev.features.filter((_, i) => i !== index),
      };
    });
  };

  /* =========================
     VALIDATE
  ========================= */

  const validateForm = () => {
    if (!formData.title.trim()) {
      toast.error("Service title is required.");
      return false;
    }

    if (!formData.subtitle.trim()) {
      toast.error("Service subtitle is required.");
      return false;
    }

    if (!formData.description.trim()) {
      toast.error("Service description is required.");
      return false;
    }

    if (!formData.icon) {
      toast.error("Please select a service icon.");
      return false;
    }

    const validFeatures = formData.features
      .map((feature) => feature.trim())
      .filter(Boolean);

    if (validFeatures.length === 0) {
      toast.error("Add at least one service feature.");
      return false;
    }

    return true;
  };

  /* =========================
     ADD SERVICE
  ========================= */

  const handleAddService = async () => {
    if (!validateForm()) return;

    try {
      setSaving(true);

      const payload = {
        title: formData.title.trim(),
        subtitle: formData.subtitle.trim(),
        description: formData.description.trim(),
        icon: formData.icon,
        features: formData.features
          .map((feature) => feature.trim())
          .filter(Boolean),
      };

      const response = await axios.post("/api/admin/services", payload);

      if (response.data.success) {
        setServices((prev) => [response.data.service, ...prev]);

        toast.success(response.data.message || "Service created successfully.");

        setOpenModal(false);

        resetForm();
      }
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        return;
      }

      toast.error(error.response?.data?.message || "Failed to create service.");
    } finally {
      setSaving(false);
    }
  };

  /* =========================
     UPDATE SERVICE
  ========================= */

  const handleUpdateService = async () => {
    if (!editingService) return;

    if (!validateForm()) return;

    try {
      setSaving(true);

      const payload = {
        id: editingService._id,
        title: formData.title.trim(),
        subtitle: formData.subtitle.trim(),
        description: formData.description.trim(),
        icon: formData.icon,
        features: formData.features
          .map((feature) => feature.trim())
          .filter(Boolean),
      };

      const response = await axios.put("/api/admin/services", payload);

      if (response.data.success) {
        setServices((prev) =>
          prev.map((service) =>
            service._id === editingService._id
              ? response.data.service
              : service,
          ),
        );

        toast.success(response.data.message || "Service updated successfully.");

        setOpenModal(false);

        resetForm();
      }
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        return;
      }

      toast.error(error.response?.data?.message || "Failed to update service.");
    } finally {
      setSaving(false);
    }
  };

  /* =========================
     DELETE
  ========================= */

  const handleDelete = (service) => {
    setServiceToDelete(service);

    setDeleteModal(true);
  };

  const cancelDelete = () => {
    if (deleting) return;

    setDeleteModal(false);

    setServiceToDelete(null);
  };

  const confirmDelete = async () => {
    if (!serviceToDelete) return;

    try {
      setDeleting(true);

      const response = await axios.delete(
        `/api/admin/services?id=${serviceToDelete._id}`,
      );

      if (response.data.success) {
        setServices((prev) =>
          prev.filter((service) => service._id !== serviceToDelete._id),
        );

        toast.success(response.data.message || "Service deleted successfully.");

        setDeleteModal(false);

        setServiceToDelete(null);
      }
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        return;
      }

      toast.error(error.response?.data?.message || "Failed to delete service.");
    } finally {
      setDeleting(false);
    }
  };

  /* =========================
     ICON COMPONENT
  ========================= */

  const getIcon = (iconName) => {
    return iconMap[iconName] || BriefcaseBusiness;
  };

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="h-8 w-56 animate-pulse rounded-lg bg-slate-200" />

            <div className="mt-2 h-5 w-72 animate-pulse rounded bg-slate-100" />
          </div>

          <div className="h-12 w-full animate-pulse rounded-xl bg-slate-200 sm:w-44" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="space-y-4 p-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-16 animate-pulse rounded-xl bg-slate-100"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* ================= HEADER ================= */}

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
          onClick={openAddModal}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] sm:w-auto"
        >
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      {/* ================= TABLE ================= */}

      {services.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[950px] w-full">
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
                {services.map((service) => {
                  const Icon = getIcon(service.icon);

                  return (
                    <tr
                      key={service._id}
                      className="transition-colors duration-200 hover:bg-slate-50"
                    >
                      <td className="px-4 py-5 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white">
                            <Icon size={18} />
                          </div>

                          <div className="max-w-[260px]">
                            <h3 className="font-semibold leading-6 text-slate-900">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-5 sm:px-6">
                        <p className="max-w-[320px] text-sm leading-6 text-slate-600">
                          {service.subtitle}
                        </p>
                      </td>

                      <td className="px-4 py-5 text-center sm:px-6">
                        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {service.features?.length || 0} Features
                        </span>
                      </td>

                      <td className="px-4 py-5 sm:px-6">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(service)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-700 transition-all duration-200 hover:scale-105 hover:bg-cyan-100"
                          >
                            <Pencil size={16} />
                          </button>

                          <button
                            onClick={() => handleDelete(service)}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-600 transition-all duration-200 hover:scale-105 hover:bg-red-100"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-center text-xs text-slate-500 lg:hidden">
            ← Swipe horizontally to view all columns →
          </div>
        </div>
      )}

      {/* ================= ADD / EDIT MODAL ================= */}

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 backdrop-blur-sm sm:p-4"
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
              className="flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* HEADER */}

              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {editingService ? "Edit Service" : "Add New Service"}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Configure your website service.
                  </p>
                </div>

                <button
                  disabled={saving}
                  onClick={closeFormModal}
                  className="rounded-lg p-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <X size={20} />
                </button>
              </div>

              {/* BODY */}

              <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
                <div className="space-y-4">
                  {/* TITLE */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Service Title
                    </label>

                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Search Engine Optimization (SEO)"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
                    />
                  </div>

                  {/* SUBTITLE */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Subtitle
                    </label>

                    <input
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleChange}
                      placeholder="Rank Higher. Get Found. Grow Organically."
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
                    />
                  </div>

                  {/* ICON */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Service Icon
                    </label>

                    <div className="relative">
                      <select
                        value={formData.icon}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            icon: e.target.value,
                          }))
                        }
                        className="h-12 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
                      >
                        {iconOptions.map((option) => (
                          <option key={option.name} value={option.name}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                      {(() => {
                        const SelectedIcon = getIcon(formData.icon);

                        return (
                          <>
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 text-white">
                              <SelectedIcon size={18} />
                            </div>

                            <div>
                              <p className="text-xs text-slate-500">
                                Selected Icon
                              </p>

                              <p className="text-sm font-semibold text-slate-900">
                                {
                                  iconOptions.find(
                                    (item) => item.name === formData.icon,
                                  )?.label
                                }
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Description
                    </label>

                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe this service..."
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
                    />
                  </div>

                  {/* FEATURES */}

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
                            className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/10"
                          />

                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            disabled={formData.features.length === 1 || saving}
                            className="flex h-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-40 sm:w-11 sm:px-0"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={addFeature}
                      disabled={saving}
                      className="mt-3 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:opacity-50"
                    >
                      + Add Feature
                    </button>
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div className="border-t border-slate-200 bg-white px-4 py-3 sm:px-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <button
                    disabled={saving}
                    onClick={closeFormModal}
                    className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    disabled={saving}
                    onClick={
                      editingService ? handleUpdateService : handleAddService
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        {editingService ? "Saving..." : "Creating..."}
                      </>
                    ) : editingService ? (
                      "Save Changes"
                    ) : (
                      "Save Service"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= DELETE MODAL ================= */}

      <AnimatePresence>
        {deleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
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
              transition={{
                duration: 0.2,
              }}
              className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="border-b border-slate-200 px-6 py-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Delete Service
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

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-5 sm:flex-row sm:justify-end">
                <button
                  disabled={deleting}
                  onClick={cancelDelete}
                  className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  disabled={deleting}
                  onClick={confirmDelete}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {deleting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Deleting...
                    </>
                  ) : (
                    "Delete Service"
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= EMPTY STATE ================= */}

      {services.length === 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm"
        >
          <BriefcaseBusiness className="mx-auto mb-4 h-12 w-12 text-slate-400" />

          <h3 className="text-lg font-semibold text-slate-900">
            No Services Found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Click <strong>Add New Service</strong> to create your first website
            service.
          </p>

          <button
            onClick={openAddModal}
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

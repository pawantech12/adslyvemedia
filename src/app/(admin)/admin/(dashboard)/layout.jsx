import AdminLayoutClient from "@/components/admin/AdminLayoutClient";
import "../../../globals.css";

export default function AdminLayout({ children }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}

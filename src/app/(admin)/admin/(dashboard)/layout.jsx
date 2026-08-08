import AdminLayoutClient from "@/components/admin/AdminLayoutClient";
import "../../../globals.css";

export const metadata = {
  title: {
    default: "Admin Dashboard | AdsLyve Media",
    template: "%s | Admin | AdsLyve Media",
  },
  description:
    "AdsLyve Media admin dashboard for managing leads, services, website settings, and administrative operations.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}

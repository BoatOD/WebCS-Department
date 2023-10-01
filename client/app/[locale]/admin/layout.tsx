
import NavbarAdmin from "@/components/admin/NavbarAdmin";

import React from "react"; // Import React for StrictMode
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarAdmin></NavbarAdmin>
      {children}
    </div>
  );
}

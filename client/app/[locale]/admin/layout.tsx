import SidebarWithCta from "@/components/admin/SidebarWithCta";
import React from "react"; // Import React for StrictMode
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/6">
          <SidebarWithCta></SidebarWithCta>
        </div>
        <div className="basis-5/6 ml-10">
          {children}
        </div>
      </div>
    </div>
  );
}

import Footer from "@/components/Footer";
import NavbarHeader from "@/components/navbar";
import React from "react"; // Import React for StrictMode
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F4F4F4]">
      <NavbarHeader></NavbarHeader>
      {children}
      <Footer></Footer>
    </div>
  );
}

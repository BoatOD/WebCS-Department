import Footer from "@/components/Footer";
import NavbarHeader from "@/components/navbar";
import React from "react"; // Import React for StrictMode
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarHeader></NavbarHeader>
      {children}
      <Footer></Footer>
    </div>
  );
}

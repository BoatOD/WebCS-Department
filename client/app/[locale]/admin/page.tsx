"use client"

import React from "react";
import SidebarWithCta from "@/components/admin/SidebarWithCta";

export default function page() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/6"><SidebarWithCta></SidebarWithCta></div>
      <div className="basis-5/6">02</div>
    </div>
  );
}

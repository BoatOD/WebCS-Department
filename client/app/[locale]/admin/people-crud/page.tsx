"use client";

import React from "react";
import SidebarWithCta from "@/components/admin/SidebarWithCta";

export default function page() {
  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

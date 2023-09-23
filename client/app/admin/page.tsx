"use client";
import SidebarForAdmin from "@/components/admin/SidebarForAdmin";
import React from "react";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5 gap-7">
        <div className="w-full md:w-2/3">
          <div className="flex pb-5">
            <div className="flex flex-col space-y-2 mt-7">
              <div className="px-8 py-0.5 bg-black w-full "></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                NEWS
              </p>
            </div>
          </div>

          <div className="pt-5"></div>
        </div>
        <div>
          <div className="flex pb-5">
            <div className="flex flex-col space-y-0 mt-7">
              <div className="px-8 py-0.5 bg-black w-full"></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                EVENTS
              </p>
            </div>
          </div>

          <div className="overflow-y-auto h-[28rem] pt-5"></div>
        </div>
      </div>
    </>
  );
}

"use client";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import type { CustomFlowbiteTheme } from "flowbite-react";
import React, { useEffect } from "react";

type Props = {};

export default function undergraduate({}: Props) {
  const customTheme: CustomFlowbiteTheme["sidebar"] = {
    root: {
      inner: "bg-white",
    },
    collapse: {
      button: "text-2xl",
    },
  };
  const items = [
    {
      key: "new",
      label: "New file",
      type: "link",
    },
    {
      key: "copy",
      label: "Copy link",
      type: "link",
    },
    {
      key: "edit",
      label: "Edit file",
      type: "link",
    },
    {
      key: "delete",
      label: "Delete file",
      type: "dropdown",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[2rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar theme={customTheme} className="w-full">
              <Sidebar.Items className="bg-white p-0">
                <Sidebar.ItemGroup className="bg-white p-0">
                  <Sidebar.Collapse  label="Undergraduate">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                    <Sidebar.Item href="#">Sales</Sidebar.Item>
                    <Sidebar.Item href="#">Refunds</Sidebar.Item>
                    <Sidebar.Item href="#">Shipping</Sidebar.Item>
                  </Sidebar.Collapse>

                  <Sidebar.Collapse  label="Undergraduate">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                    <Sidebar.Item href="#">Sales</Sidebar.Item>
                    <Sidebar.Item href="#">Refunds</Sidebar.Item>
                    <Sidebar.Item href="#">Shipping</Sidebar.Item>
                  </Sidebar.Collapse>

                  <Sidebar.Collapse  label="Undergraduate">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                    <Sidebar.Item href="#">Sales</Sidebar.Item>
                    <Sidebar.Item href="#">Refunds</Sidebar.Item>
                    <Sidebar.Item href="#">Shipping</Sidebar.Item>
                  </Sidebar.Collapse>

                  <Sidebar.Item href="#" >
                    <p>Master degree</p>
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}

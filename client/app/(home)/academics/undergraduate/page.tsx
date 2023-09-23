"use client";
import React from "react";
import Banner from "@/components/Banner";

import Image from "next/image";

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";

type Props = {};

export default function undergraduate({}: Props) {
  const sidebarItem: SidebarProps[] = [
    {
      content: "UNDERGRADUATE PROGRAMS",
      type: "header",
      href: "/academics/undergraduate",
    },
    {
      content: "Couses",
      href: "/academics/undergraduate/couses",
      type: "singleItem",
    },
    {
      content: "Undergraduate 64+",
      type: "multiItem",
      SidebarOption: [
        {
          title: "Study Plan",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Required Courses",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Core Courses",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Elective Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Free Elective Courses",
              href: "#",
            },
            {
              title: "GE Elective Courses",
              href: "#",
            },
            {
              title: "Major Elective Courses",
              href: "#",
            },
          ],
        },
        {
          title: "Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Organization Issues and Information System",
              href: "#",
            },
            {
              title: "Technology for Application",
              href: "#",
            },
            {
              title: "Technology and System Methodology",
              href: "#",
            },
            {
              title: "System of Fundamental Structure",
              href: "#",
            },
            {
              title: "Hardware and Computer Architecture",
              href: "#",
            },
          ],
        },
        {
          title: "Plan-Specific Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Regular Plan",
              href: "#",
            },
            {
              title: "Co-Operative Education Plan",
              href: "#",
            },
            {
              title: "Honors Plan",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      content: "Undergraduate 59(63)",
      type: "multiItem",
      SidebarOption: [
        {
          title: "Study Plan",
          href: "#",
        },
        {
          title: "Required Courses",
          href: "#",
        },
        {
          title: "Core Courses",
          href: "#",
        },
        {
          title: "Elective Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Free Elective Courses",
              href: "#",
            },
            {
              title: "GE Elective Courses",
              href: "#",
            },
            {
              title: "Major Elective Courses",
              href: "#",
            },
          ],
        },
        {
          title: "Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Organization Issues and Information System",
              href: "#",
            },
            {
              title: "Technology for Application",
              href: "#",
            },
            {
              title: "Technology and System Methodology",
              href: "#",
            },
            {
              title: "System of Fundamental Structure",
              href: "#",
            },
            {
              title: "Hardware and Computer Architecture",
              href: "#",
            },
          ],
        },
        {
          title: "Plan-Specific Compulsory Courses",
          type: "Have",
          SideBarSubOption: [
            {
              title: "Regular Plan",
              href: "#",
            },
            {
              title: "Co-Operative Education Plan",
              href: "#",
            },
            {
              title: "Honors Plan",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      content: "Student portal",
      type: "multiItem",
      SidebarOption: [
        {
          title: "Score Report",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Assignment Submission",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Student Research",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Phone Number",
          href: "#",
          type: "NotHave",
        },
        {
          title: "Line Chat Bot",
          href: "#",
          type: "NotHave",
        },
      ],
    },
  ];

  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="UNDERGRADUATE"
        customStyles={{
          width: "500px", // Custom width for this page
          height: "100px", // Custom height for this page
          bottom: "-15px", // Custom bottom attribute for this page
        }}
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="max-w-full max-h-full justify-center">
              <Image
                src={"/bc.jpg" ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="academic-image"
                className="w-auto h-auto object-scale-down  "
              />
            </div>
            <div className="p-5">
              <p>
                World-renowned for both rigor and innovation, EECS is the
                largest undergraduate program at MIT. Our flexible curriculum
                and inventive, hands-on approach to coursework gives students a
                holistic view of the field, an understanding of how to solve
                problems, and a focus on modeling and abstraction that prepares
                them for success in a wide range of fields, from research to
                industry and beyond. The majority of undergraduate programs in
                EECS are administered by the EECS Undergraduate Office, who can
                be reached at ug@eecs.mit.edu.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>

            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  );
}

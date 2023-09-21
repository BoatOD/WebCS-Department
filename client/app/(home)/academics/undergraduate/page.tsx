"use client"
import React from "react";
import Banner from '@/components/AcademicPage/Banner';
import { Sidebar } from "flowbite-react";
import Image from "next/image";
import { SidebarCustomTheme } from "@/theme";

type Props = {};

export default function undergraduate({}: Props) {
  return (
    <>
    <Banner
        imageSrc="/academic_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="UNDERGRADUATE"
        customStyles={{
          width: '500px',  // Custom width for this page
          height: '100px',  // Custom height for this page
          bottom: '-15px', // Custom bottom attribute for this page
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
                src={"/image1.png" ?? "#"}
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
            <Sidebar theme={SidebarCustomTheme} className="w-full">
              <Sidebar.Items className="p-0">
                <Sidebar.ItemGroup className="p-0">
                  <Sidebar.Item className="text-lg font-bold hover:bg-transparent">
                    <p>UNDERGRADUATE</p>
                  </Sidebar.Item>
                  <div className="border-b border-black border-3 my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">
                    <p>Courses</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Collapse className="hover:bg-[#e8e8e8] " label="Undergraduate 64">
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Program</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">required courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Core courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">GE electric courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Free electric courses </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">
                      Plan-specific Compulsory Courses
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Compulsory Courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Major Elective Courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Minor Courses</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="border-b border-black my-2"></div>

                  <Sidebar.Collapse className="hover:bg-[#e8e8e8] " label="undergraduate 59 (63)">
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Program</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">required courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Core courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">GE electric courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Free electric courses </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">
                      Plan-specific Compulsory Courses
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Compulsory Courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Major Elective Courses</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Minor Courses</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="border-b border-black my-2"></div>

                  <Sidebar.Collapse className="hover:bg-[#e8e8e8] " label="Student portal">
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Score Report </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Assignment Submission</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Student Research</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Phone Number</Sidebar.Item>
                    <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#">Line Chat Bot</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="border-b border-black my-2"></div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}

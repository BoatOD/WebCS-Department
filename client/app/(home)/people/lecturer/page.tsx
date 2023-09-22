'use client'
import React from 'react'
import { Sidebar } from "flowbite-react";
import { SidebarCustomTheme } from "@/theme";
import Banner from '@/components/AcademicPage/Banner';
import Image from "next/image";

type Props = {}

export default function lecturer({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/academic_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="PEOPLE"
        subtitle="LECTURERS"
        customStyles={{
          width: '300px',  // Custom width for this page
          height: '100px',  // Custom height for this page
          bottom: '-15px', // Custom bottom attribute for this page
        }}
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>

          <div className="p-1 pt-3 ">
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={"/personal/lecturers/p1.JPG"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className="pl-8 pr-8 pt-1 sm:text-center md:text-left">
                  <a href="https://www2.cs.science.cmu.ac.th/staff/wss/" className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">ผู้ช่วยศาสตราจารย์ ดร.วิจักษณ์ ศรีสัจจะเลิศวาจา รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ 
                  ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์</a>
                  <ul className='list-none text-slate-600 mt-3 mb-4 text-base font-normal'>
                    <li>Assistant Professor Dr.Wijak Srisujjalertwaja</li>
                    <li>Tel: 053-943412 ต่อ 124 </li>
                    <li>Email: wijak.cscmu@gmail.com </li>
                    <li>Research Interests: Recommender System</li>
                  </ul>
                  <a href="https://www2.cs.science.cmu.ac.th/staff/wss/" className="block mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500">Personal Website</a>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={"/personal/lecturers/p2.JPG"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className="pl-8 pr-8 pt-1 sm:text-center md:text-left">
                  <a href="https://www2.cs.science.cmu.ac.th/staff/ratsameetip/" className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">
ผู้ช่วยศาสตราจารย์ ดร.รัศมีทิพย์ วิตา รักษาการแทนรองหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์</a>
                  <ul className='list-none text-slate-600 mt-3 mb-4 text-base font-normal'>
                    <li>Dr.Ratsameetip Wita</li>
                    <li>Tel: 053-943412 ต่อ 215 </li>
                    <li>Email: ratsameetip.w@cmu.ac.th </li>
                    <li>Research Interests: Security management, webservice, ontology and semantic </li>
                  </ul>
                  <a href="https://www2.cs.science.cmu.ac.th/staff/ratsameetip/" className="block mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500">Personal Website</a>
                </div>
              </div>
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
                    PEOPLE
                  </Sidebar.Item>
                  <div className="border-b border-black border-3 my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#analysis">
                    <p>Lecturers</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#obj" >
                    <p>Staff</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  )
}
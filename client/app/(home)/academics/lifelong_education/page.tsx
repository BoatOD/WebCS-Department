'use client'
import React from 'react'
import Banner from '@/components/Banner';
// import './intelligent.css'
import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/lifelong_education/sidebarData'
type Props = {}

export default function Lifelong({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="LIFELONG EDUCATION"
        customStyles={{
          width: 'auto',  // Custom width for this page
          height: '100px',  // Custom height for this page
          bottom: '-15px', // Custom bottom attribute for this page
        }}
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">หลักสูตรการศึกษาตลอดชีวิต</h1>
              <h3 className="text-lg font-bold">ภายใต้การสนับสนุนจากวิทยาลัยการศึกษาตลอดชีวิต (Lifelong Education)</h3>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2">
                  <a href="/academics/lifelong_education/intelligent" className="hover:underline">หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะ ประกอบด้วย 7 หลักสูตรย่อย</a>
                </li>
                <li className="mb-2">
                  <a href="/academics/lifelong_education/cryptocurrency" className="hover:underline">หลักสูตรอบรมคริปโทเคอร์เรนซี(Cryptocurrency) ประกอบด้วย 7 หลักสูตรย่อย</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  )
}
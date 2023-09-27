'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/undergraduate/sidebarData'

type Props = {}

export default function Minor({ }: Props) {

  interface Courses {
    _id: string;
    code: string;
    credit: string;
    cu_no: number[];
    e_name: string;
    e_overview: string;
    e_type: string;
    name: string;
    overview: string;
    prereg: string;
    type: string;
    sup_type: string;
  }

  const [data, setData] = useState<Courses[]>([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("http://cs-project.onrender.com/api/courses")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="undergraduate 64+"
        subtitle="Minor Courses"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">

              <h1 className="text-2xl font-bold">วิชาโท (Minor Courses) 15 หน่วยกิต</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>ต้องการเรียนวิชาโท</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">- แผนปกติและแผนสหกิจศึกษาสามารถเลือกเรียนวิชาโทสาขาใด ๆ โดยความเห็นชอบของอาจารย์ที่ปรึกษา</li>
                    <li className="mb-2">- แผนก้าวหน้าสามารถเลือกเรียนวิชาโทสาขาคณิตศาสตร์ สถิติ หรือวิทยาการข้อมูล</li>
                  </ul>

                  <li className='mb-2 font-bold'>ไม่ต้องการเรียนวิชาโท</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">- เลือกเรียนวิชาเอกเลือกระดับ 300 หรือ 400 เพิ่มไม่น้อยกว่า 15 หน่วยกิต</li>
                  </ul>
                </ul>
                <h2>🔗<a href='https://www.eqd.cmu.ac.th/Curr/minor.html' className="font-bold underline hover:text-gray-700">รายชื่อวิชาโทที่เปิดสอน</a></h2>
              </div>
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
  )
}

'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/undergraduate/sidebarData'

require('dotenv').config();
type Props = {}

export default function Elective({ }: Props) {

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
    fetch("https://cs-project-ime1.vercel.app/api/courses")
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
        subtitle="Elective Courses"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">

              <h1 className="text-2xl font-bold" id='fe'>วิชาเลือกเสรี (Free Elective Courses) 6 หน่วยกิต</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    วิชาเลือกเสรี (Free Elective Courses) เป็นวิชาที่หลักสูตรเปิดโอกาสให้นักศึกษาเลือกเรียน นอกเหนือไปจากวิชาเฉพาะ (204XXX) โดยมีจุดมุ่งหมายเพื่อขยายความสัมพันธ์ทางวิชาการให้
                    กว้างขวางออกไป ตลอดจนเป็นการส่งเสริมความถนัดและความสนใจของแต่ละบุคคลให้ได้มากยิ่งขึ้น
                  </span>
                </p>
              </div>

              <h1 className="text-2xl font-bold" id='ge'>วิชาเลือกทั่วไป (GE Electives Courses) 24 หน่วยกิต</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <h2 className="font-bold underline">ให้นักศึกษาเลือกเรียนกระบวนวิชาจากทั้ง 3 กลุ่มเพิ่มเติมอีก 6 หน่วยกิต จากกระบวนวิชาต่อไปนี้</h2>
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้ (Learner Person)</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Learner Person")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>

                  <li className='mb-2 font-bold'>กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม (Innovative Co-creator) 3 หน่วยกิต</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Innovative Co-creator")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                  <li className='mb-2 font-bold'>กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง (Active Citizen) 6 หน่วยกิต</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Active Citizen")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </ul>
              </div>

              <h1 className="text-2xl font-bold" id='me'>วิชาเอกเลือก (Major Elective Courses)</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>แผนปกติ (Regular Plan) 15 หน่วยกิต</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">- เป็นกระบวนวิชาระดับ 300-400 โดยที่อย่างน้อย 9 หน่วยกิต ต้องเป็นกระบวนวิชาระดับ 400</li>
                  </ul>

                  <li className='mb-2 font-bold'>แผนสหกิจศึกษา (Co-operative Education Plan) 12 หน่วยกิต</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">- เป็นกระบวนวิชาระดับ 300-400 โดยที่อย่างน้อย 6 หน่วยกิต ต้องเป็นกระบวนวิชาระดับ 400</li>
                  </ul>
                  <li className='mb-2 font-bold'>แผนก้าวหน้า (Honors Plan) 27 หน่วยกิต</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">- เป็นกระบวนวิชาระดับ 300-400 โดยที่อย่างน้อย 9 หน่วยกิต ต้องเป็นกระบวนวิชาระดับ 400</li>
                    <li className="mb-2">- เป็นกระบวนวิชาระดับ 700 12 หน่วยกิต</li>
                  </ul>
                </ul>
                {/* แก้ path */}
                <h2>🔗<a href='#' className="font-bold underline hover:text-gray-700">รายชื่อวิชาเอกเลือก (Major Elective Courses)</a></h2>
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

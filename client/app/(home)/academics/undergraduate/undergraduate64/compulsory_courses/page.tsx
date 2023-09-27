'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/undergraduate/sidebarData'

require('dotenv').config();
type Props = {}

export default function Compulsory({ }: Props) {

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
    fetch("https://cs-project-ime1.vercel.app//api/courses")
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
        subtitle="Compulsory Courses"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">

              <h1 className="text-2xl font-bold" id='oi'>กลุ่มประเด็นด้านองค์กรและระบบสารสนเทศ (Organization Issues and Information System)</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>กลุ่มประเด็นด้านองค์กรและระบบสารสนเทศ (Organization Issues and Information System)</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Organization Issues and Information System")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </ul>
              </div>

              <h1 className="text-2xl font-bold" id='ta'>กลุ่มเทคโนโลยีเพื่องานประยุกต์ (Technology for Application)</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>กลุ่มเทคโนโลยีเพื่องานประยุกต์ (Technology for Application) </li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Technology for Application")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </ul>
              </div>

              <h1 className="text-2xl font-bold" id='ts'>กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์ (Technology and System Methodology)</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์ (Technology and System Methodology)</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Technology and System Methodology")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </ul>
              </div>

              <h1 className="text-2xl font-bold" id='sf'>กลุ่มโครงสร้างพื้นฐานของระบบ (System of Fundamental Structure)</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>กลุ่มโครงสร้างพื้นฐานของระบบ (System of Fundamental Structure)</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "System of Fundamental Structure")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </ul>
              </div>

              <h1 className="text-2xl font-bold" id='hc'>กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์ (Hardware and Computer Architecture)</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์ (Hardware and Computer Architecture)</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Hardware and Computer Architecture")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </ul>
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

"use client";
import React, { useEffect, useState } from 'react'
import Banner from "@/components/Banner";

import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'
import Sidebar1 from "@/components/Sidebar1";
import Link from 'next/link'
import { useTranslations} from 'next-intl';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { title } from 'process';

type Props = {};

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

export default function Undergraduate({ }: Props) {
  
  const u4 = useTranslations("Undergraduate64");
  
  const [data, setData] = useState<Courses[]>([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/courses")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const handleOpen = (value: number) => {
    if (openAccordions.includes(value)) {
      // If the Accordion is already open, close it
      setOpenAccordions(openAccordions.filter((acc) => acc !== value));
    } else {
      // If the Accordion is closed, open it
      setOpenAccordions([...openAccordions, value]);
    }
  };


  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="UNDERGRADUATE"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
          </div>
          <div className="p-1 pt-3 mt-12">
            <div className='text-2xl font-medium mb-4'>
            {u4("title30")}
            </div>

            <div className="flex-row md:flex justify-between my-2">
              <Accordion open={openAccordions.includes(1)} className='w-full pb-0 m-2 mb-0 mx-0 md:mr-2' >
                <AccordionHeader onClick={() => handleOpen(1)} className='text-lg font-kanit font-medium bg-[#EC870B] text-white text-center justify-center h-28'>
                  วิชาบังคับ <br />
                  (Required Courses)<br />
                  {u4("title0")}
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg break-words'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'> {u4("title1")}</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "Required Courses" && courses.sup_type === "Learner Person")
                        .map(courses => (
                          <li key={courses._id} className="mb-2 break-words">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                    <br />
                    <ul className='list-none pl-2'>
                      {data.filter(courses => courses.e_type === "Required Courses" && courses.sup_type === "Innovative Co-creator")
                        .map(courses => (
                          <li key={courses._id} className="mb-2 break-words">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                    <br />
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "Required Courses" && courses.sup_type === "Active Citizen")
                        .map(courses => (
                          <li key={courses._id} className="mb-2 break-words">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>
                </AccordionBody>
              </Accordion>
              <Accordion open={openAccordions.includes(2)} className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0' >
                <AccordionHeader onClick={() => handleOpen(2)} className='text-lg font-kanit font-medium bg-[#EC870B] text-white text-center justify-center h-28'>
                  วิชาเอกบังคับประจำแผน <br />
                  (Plan-Specific Compulsory Courses)
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>{u4("title2")}</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                        (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 1)))
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>{u4("title3")}</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                        (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 2)))
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>{u4("title4")}</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                        (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 3)))
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                </AccordionBody>
              </Accordion>
            </div>

            <div className="flex-row md:flex justify-between my-2">
              <Accordion open={openAccordions.includes(3)} className='w-full pb-0 m-2 mb-0 mx-0 md:mr-2' >
                <AccordionHeader onClick={() => handleOpen(3)} className='text-lg font-kanit font-medium bg-[#EB8E1B] text-white text-center justify-center h-28'>
                  วิชาแกน <br />
                  (Core Courses)<br />
                  {u4("title0")}
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => (
                      ((typeof courses.e_type === "string" && courses.e_type === "Core Courses") ||
                        (Array.isArray(courses.e_type) && courses.e_type.includes("Core Courses"))) &&
                      (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 1 || cu === 2 || cu === 3))
                    ))
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                </AccordionBody>
              </Accordion>

              <Accordion open={openAccordions.includes(4)} className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0' >
                <AccordionHeader onClick={() => handleOpen(4)} className='text-lg font-kanit font-medium bg-[#EB8E1B] text-white text-center justify-center h-28'>
                  วิชาเอกบังคับร่วม <br />
                  (Compulsory Courses)<br />
                  {u4("title5")}
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>กลุ่มประเด็นด้านองค์กรและระบบสารสนเทศ (Organization Issues and Information System)</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Organization Issues and Information System")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>กลุ่มเทคโนโลยีเพื่องานประยุกต์ (Technology for Application) </li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Technology for Application")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์ (Technology and System Methodology)</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Technology and System Methodology")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>กลุ่มโครงสร้างพื้นฐานของระบบ (System of Fundamental Structure)</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "System of Fundamental Structure")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์ (Hardware and Computer Architecture)</li>
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.sup_type && courses.sup_type["64"] === "Hardware and Computer Architecture")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>

            <div className="flex-row md:flex justify-between my-2">
              <Accordion open={openAccordions.includes(5)} className='w-full pb-0 m-2 mb-0 mx-0 md:mr-2' >
                <AccordionHeader onClick={() => handleOpen(5)} className='text-lg font-kanit font-medium bg-[#EB9A37] text-white text-center justify-center h-28'>
                  วิชาเอกเลือกทั่วไป <br />
                  (GE Elective Courses)<br />
                  {u4("title6")}
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <p className="font-medium underline">{u4("title7")}</p>
                  <ul className='list-disc pl-6 '>

                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Learner Person")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                    <br />
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Innovative Co-creator")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                    <br />
                    <ul className='list-none pl-2 '>
                      {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Active Citizen")
                        .map(courses => (
                          <li key={courses._id} className="mb-2">
                            - {courses.code} {courses.name} ({courses.e_name})
                          </li>
                        ))}
                    </ul>
                  </ul>

                </AccordionBody>
              </Accordion>
              <Accordion open={openAccordions.includes(6)} className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0' >
                <AccordionHeader onClick={() => handleOpen(6)} className='text-lg font-kanit font-medium bg-[#EB9A37] text-white text-center justify-center h-28'>
                  วิชาเอกเลือก <br />
                  (Major Elective Courses)
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>{u4("title8")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        {u4("title9")}
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>{u4("title10")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title11")}
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>{u4("title12")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title9")}
                      </li>
                      <li className="mb-2">
                      {u4("title13")}
                      </li>
                    </ul>
                  </ul>
                  <br />
                  <Link href='/academics/undergraduate/undergraduate64/major_elective_courses' target='_blank' className='underline hover:opacity-80'>🔗 รายชื่อวิชาเอกเลือก (Major Elective Courses)</Link>
                </AccordionBody>
              </Accordion>
            </div>

            <div className="flex-row md:flex justify-between my-2">
              <Accordion open={openAccordions.includes(7)} className='w-full pb-0 m-2 mb-0 mx-0 md:mr-2' >
                <AccordionHeader onClick={() => handleOpen(7)} className='text-lg font-kanit font-medium bg-[#F5B66A] text-white text-center justify-center h-28'>
                  วิชาเลือกเสรี <br />
                  (Free Elective Courses)<br />
                  {u4("title6")}
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <p className='font-medium'>วิชาเลือกเสรี (Free Elective Courses)</p>
                  <p>
                    <span className="ml-[1rem]">
                    {u4("title14")}
                      <span className='underline'>{u4("title15")}</span>{u4("title16")}
                    </span>
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion open={openAccordions.includes(8)} className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0' >
                <AccordionHeader onClick={() => handleOpen(8)} className='text-lg font-kanit font-medium bg-[#F5B66A] text-white text-center justify-center h-28'>
                  วิชาโท <br />
                  (Minor Courses)<br />
                  {u4("title17")}
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>{u4("title18")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title19")}
                      </li>
                      <li className="mb-2">
                      {u4("title20")}
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>{u4("title21")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title22")}
                      </li>
                    </ul>
                  </ul>
                  <br />
                  <Link href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:opacity-80'>🔗 รายชื่อวิชาโทที่เปิดสอน</Link>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="flex-row md:flex justify-between my-2">
              <div className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0'>
                <p className='text-2xl font-medium'>{u4("title23")}</p>
                <div className='bg-[#FFD5A3] mt-5 mb-3 p-4 rounded-lg'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>{u4("title24")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title25")}
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>{u4("title26")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title27")}
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>{u4("title28")}</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                      {u4("title29")}
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0'>
                <p className='text-2xl font-medium'>Prerequisite Tree</p>
                <div className='bg-[#FFD5A3] mt-5 mb-3 p-4 rounded-lg'>
                  <Link href='/prerequisite-tree.png' target='_blank' className='underline hover:opacity-80'>prerequisite-tree.png</Link>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div >
    </>
  );
}

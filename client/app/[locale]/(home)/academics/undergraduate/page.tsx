"use client";
import React, { useEffect, useState } from 'react'
import Banner from "@/components/Banner";

import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'
import Sidebar1 from "@/components/Sidebar1";
import Link from 'next/link'

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
              ภาพรวมหลักสูตร 64+
            </div>

            <div className="flex-row md:flex justify-between my-2">
              <Accordion open={openAccordions.includes(1)} className='w-full pb-0 m-2 mb-0 mx-0 md:mr-2' >
                <AccordionHeader onClick={() => handleOpen(1)} className='text-lg font-kanit font-medium bg-[#EC870B] text-white text-center justify-center h-28'>
                  วิชาบังคับ <br />
                  (Required Courses)<br />
                  24 หน่วยกิต
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg break-words'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้ (Learner Person) 15 หน่วยกิต</li>
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
                    <li className='mb-2 font-medium'>แผนปกติ (Regular Plan) 3 หน่วยกิต</li>
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
                    <li className='mb-2 font-medium'>แผนสหกิจศึกษา (Co-operative Education Plan) 7 หน่วยกิต</li>
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
                    <li className='mb-2 font-medium'>แผนก้าวหน้า (Honors Plan) 3 หน่วยกิต</li>
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
                  24 หน่วยกิต
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
                  41 หน่วยกิต
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
                  6 หน่วยกิต
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <p className="font-medium underline">ให้นักศึกษาเลือกเรียนกระบวนวิชาจากทั้ง 3 กลุ่มเพิ่มเติมอีก 6 หน่วยกิต จากกระบวนวิชาต่อไปนี้</p>
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
                    <li className='mb-2 font-medium'>แผนปกติ (Regular Plan) 15 หน่วยกิต</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - เป็นกระบวนวิชาระดับ 300-400 โดยที่อย่างน้อย 9 หน่วยกิต ต้องเป็นกระบวนวิชาระดับ 400
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>แผนสหกิจศึกษา (Co-operative Education Plan) 12 หน่วยกิต</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - เป็นกระบวนวิชาระดับ 300-400 โดยที่อย่างน้อย 6 หน่วยกิต ต้องเป็นกระบวนวิชาระดับ 400
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>แผนก้าวหน้า (Honors Plan) 27 หน่วยกิต</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - เป็นกระบวนวิชาระดับ 300-400 โดยที่อย่างน้อย 9 หน่วยกิต ต้องเป็นกระบวนวิชาระดับ 400
                      </li>
                      <li className="mb-2">
                        - เป็นกระบวนวิชาระดับ 700 12 หน่วยกิต
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
                  6 หน่วยกิต
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <p className='font-medium'>วิชาเลือกเสรี (Free Elective Courses)</p>
                  <p>
                    <span className="ml-[1rem]">
                      เป็นวิชาที่หลักสูตรเปิดโอกาสให้นักศึกษาเลือกเรียน
                      <span className='underline'>นอกเหนือไปจากวิชาเฉพาะ</span>(204XXX)
                      โดยมีจุดมุ่งหมายเพื่อขยายความสัมพันธ์ทางวิชาการให้กว้างขวางออกไป
                      ตลอดจนเป็นการส่งเสริมความถนัดและความสนใจของแต่ละบุคคลให้ได้มากยิ่งขึ้น
                    </span>
                  </p>
                </AccordionBody>
              </Accordion>
              <Accordion open={openAccordions.includes(8)} className='w-full pb-0 m-2 mx-0 md:mx-2 mb-0' >
                <AccordionHeader onClick={() => handleOpen(8)} className='text-lg font-kanit font-medium bg-[#F5B66A] text-white text-center justify-center h-28'>
                  วิชาโท <br />
                  (Minor Courses)<br />
                  15 หน่วยกิต
                </AccordionHeader>
                <AccordionBody className='font-kanit bg-[#FFD8A9] mt-5 mb-3 px-4 rounded-lg'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>ต้องการเรียนวิชาโท</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - แผนปกติและแผนสหกิจศึกษาสามารถเลือกเรียนวิชาโทสาขาใด ๆ โดยความเห็นชอบของอาจารย์ที่ปรึกษา
                      </li>
                      <li className="mb-2">
                        - แผนก้าวหน้าสามารถเลือกเรียนวิชาโทสาขาคณิตศาสตร์ สถิติ หรือวิทยาการข้อมูล
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>ไม่ต้องการเรียนวิชาโท</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - เลือกเรียนวิชาเอกเลือกระดับ 300 หรือ 400 เพิ่มไม่น้อยกว่า 15 หน่วยกิต
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
                <p className='text-2xl font-medium'>จำนวนหน่วยกิตรวมตลอดหลักสูตร</p>
                <div className='bg-[#FFD5A3] mt-5 mb-3 p-4 rounded-lg'>
                  <ul className='list-disc pl-6 '>
                    <li className='mb-2 font-medium'>แผนปกติ</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - ไม่น้อยกว่า 134 หน่วยกิต
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>แผนสหกิจศึกษา</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - ไม่น้อยกว่า 135 หน่วยกิต
                      </li>
                    </ul>
                    <br />
                    <li className='mb-2 font-medium'>แผนก้าวหน้า</li>
                    <ul className='list-none pl-2 '>
                      <li className="mb-2">
                        - ไม่น้อยกว่า 146 หน่วยกิต
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

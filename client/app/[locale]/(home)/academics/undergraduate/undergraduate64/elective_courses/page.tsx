'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'
import { useTranslations } from 'next-intl';

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

  const e = useTranslations("ElectiveCourses");

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

              <h1 className="text-2xl font-bold" id='fe'>{e("title0")}</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    {e("title1")}
                  </span>
                </p>
              </div>

              <h1 className="text-2xl font-bold" id='ge'>{e("title2")}</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <h2 className="font-bold underline">{e("title3")}</h2>
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>{e("title4")}</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Learner Person")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>

                  <li className='mb-2 font-bold'>{e("title5")}</li>
                  <ul className='list-none pl-6 '>
                    {data.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Innovative Co-creator")
                      .map(courses => (
                        <li key={courses._id} className="mb-2">
                          - {courses.code} {courses.name} ({courses.e_name})
                        </li>
                      ))}
                  </ul>
                  <li className='mb-2 font-bold'>{e("title6")}</li>
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

              <h1 className="text-2xl font-bold" id='me'>{e("title7")}</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>{e("title8")}</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">{e("title9")}</li>
                  </ul>

                  <li className='mb-2 font-bold'>{e("title10")}</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">{e("title11")}</li>
                  </ul>
                  <li className='mb-2 font-bold'>{e("title12")}</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">{e("title13")}</li>
                    <li className="mb-2">{e("title14")}</li>
                  </ul>
                </ul>
                <h2>🔗<a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses' target='_blank' className="font-bold underline hover:text-gray-700">{e("title15")}</a></h2>
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

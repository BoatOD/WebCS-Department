'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";
import { useTranslations, useLocale } from 'next-intl';
type Props = {}

interface NonDegree {
  _id: string;
  cu_no: number;
  detail: string;
  e_detail: string;
  e_process: string;
  process: string;
}

export default function Nondegree({ }: Props) {
  const n = useTranslations("nondegree");
  const locale = useLocale();
  const sidebarItem: SidebarProps[] = [
    {
      content: "NON DEGREE",
      type: "header",
      href: "/academics/nondegree",
    },
    {
      content: "การวิเคราะห์ข้อมูลอัจฉริยะ",
      href: "#analysis",
      type: "singleItem",
    },
    {
      content: "วัตถุประสงค์ของหลักสูตร",
      href: "#obj",
      type: "singleItem",
    },
    {
      content: "คุณสมบัติของผู้สมัคร",
      href: "#quali",
      type: "singleItem",
    },
    {
      content: "กระบวนการรับสมัคร",
      href: "#process",
      type: "singleItem",
    },
    {
      content: "การสมัครและเอกสารที่ใช้",
      href: "#candidacy",
      type: "singleItem",
    },
    {
      content: "วิธีจัดการเรียนการสอนกระบวนวิชา",
      href: "#thc",
      type: "singleItem",
    },
    {
      content: "แผนการศึกษา",
      href: "#studyplan",
      type: "singleItem",
    },
  ];

  const [data, setData] = useState<NonDegree[]>([]);
  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/non_degree")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="NON DEGREE"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          <div className="p-1 pt-3 ">

            <div className="p-5">
              <h1 id="analysis" className="text-2xl font-bold">{n("title0")}</h1>
              <br />
              <p>
                <span className="ml-[1rem]">{n("title1")}</span>
              </p>

              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20pc"></div>
              </div>
              <br />
              <h1 id="obj" className="text-2xl font-bold">{n("title2")}</h1>
              <br />
              <ol className="list-disc pl-6">
                <li className="mb-2">
                  {n("title3")}
                </li>
                <li className="mb-2">
                  {n("title4")}
                </li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="quali" className="text-2xl font-bold">{n("title5")}</h1>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2"> {n("title6")}</li>
                <li className="mb-2"> {n("title7")}</li>
                <li className="mb-2"> {n("title8")}</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="process" className="text-2xl font-bold">{n("title9")}</h1>
              <br />
              <table className="w-full text-sm text-left">
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title10")}
                    </th>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title11")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`bg-${index % 2 === 0 ? 'white' : '[#F6BA70]'} border-b text-black`}
                    >
                      <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                        {locale === "en" ? item.e_process : item.process}
                      </th>
                      <td className="p-1 md:p-4">
                        {locale === "en" ? item.e_detail : item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="candidacy" className="text-2xl font-bold">{n("title25")}</h1>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2">{n("title26")}</li>
                <li className="mb-2">{n("title27")}</li>
                <li className="mb-2">{n("title28")}</li>
                <li className="mb-2">{n("title29")}</li>
                <li className="mb-2">Curriculum Vitae (CV)</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="thc" className="text-2xl font-bold">{n("title31")}</h1>
              <br />
              <p>{n("title32")}</p>
              <br />
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title33")}
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title34")}
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title35")}
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title36")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title37")}
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title38")}
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title39")}
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title40")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title41")}
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title42")}
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h1>{n("title43")}</h1>
              <br />
              <table className='w-full'>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title44")}
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title45")}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="studyplan" className="text-2xl font-bold">{n("title46")}</h1>
              <br />
              <table className='w-full'>
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title47")}
                    </th>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title48")}
                    </th>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title49")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title50")}
                    </th>
                    <td className="p-1 md:p-4 text-center">
                      204728 Data Manipulation
                    </td>
                    <td className="p-1 md:p-4 text-center">
                      3
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      {n("title53")}
                    </th>
                    <td className="p-1 md:p-4 text-center">
                      204725 Data Analytics with Machine Learning
                    </td>
                    <td className="p-1 md:p-4 text-center">
                      3
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <table className='w-full'>
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title55")}
                    </th>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title56")}
                    </th>
                    <th scope="col" className="p-1 md:p-4 text-center">
                      {n("title57")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      CS725 (204725)
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title59")}
                    </td>
                    <td className="p-1 md:p-4">
                      {n("title60")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="p-1 md:p-4 font-medium whitespace-nowrap text-center">
                      CS728 (204728)
                    </th>
                    <td className="p-1 md:p-4">
                      {n("title62")}
                    </td>
                    <td className="p-1 md:p-4">
                      {n("title63")}
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div >
    </>
  )
}
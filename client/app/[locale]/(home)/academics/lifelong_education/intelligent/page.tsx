'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations, useLocale } from 'next-intl';

type Props = {}

interface LifelongIntelligent {
  _id: string;
  app_fee: number;
  cu_no: number;
  reg_link: string;
  university_fee: number;
  application_period: string;
  studying_time: string;
  name: string;
  e_application_period: string;
  e_name: string;
  e_studying_time: string;
  detail: {
    [key: string]: any[];
  };
  e_detail: {
    [key: string]: any[];
  };
}


export default function Intelligent({ }: Props) {
  const l = useTranslations("lifelong");
  const locale = useLocale();
  const [data, setData] = useState<LifelongIntelligent[]>([]);
  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/lifelong_intelligent", { cache: 'force-cache' })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="LIFELONG EDUCATION"
        subtitle="INTELLIGENT ANALYSIS COURSE"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title145")}</h1>
              <h3 className="font-bold">{l("title146")}</h3>
              <div className="bg-[#F2D4B0] h-full m-6 p-6 mr-16">
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    {l("title147")}
                  </span>
                </p>
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    {l("title148")}
                  </span>
                </p>
                <p>
                  <span className="ml-[1rem]">
                    {l("title149")}
                  </span>
                </p>
              </div>
              <h2 className="text-xl">{l("title150")}</h2>
              <br />
              <table className="w-full text-sm text-left">
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">
                      {l("title14")}
                    </th>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">
                      {l("title13")}
                    </th>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">
                      {l("title151")}
                    </th>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">
                      {l("title152")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`bg-${index % 2 === 0 ? 'white' : '[#F6BA70]'} border-b text-black`}
                    >
                      <td className="px-1 md:px-6 py-4">
                        {index + 1}. {locale === "en" ? item.e_name : item.name}
                      </td>
                      <td className="px-1 md:px-6 py-4 text-center">
                        {item.app_fee === -1 ? l("title154") : (locale === "en" ? `${item.app_fee}.- baht` : `${item.app_fee}.- บาท`)}
                      </td>
                      <td className="px-1 md:px-6 py-4 text-center">
                        {locale === "en" ? `${item.university_fee}.- baht` : `${item.university_fee}.- บาท`}
                      </td>
                      <td className="px-1 md:px-6 py-4 text-center">
                        {item.reg_link === "Coming soon" ? (
                          <>
                            {l("title154")}
                          </>
                        ) : (
                          <a href={item.reg_link} className='underline' target='_blank'>
                            {l("title20")}
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                  {/* <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title68")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title161")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title83")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title161")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title85")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title161")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title99")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title161")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title107")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title128")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title139")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title155")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title161")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title154")}
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">
                    {l("title156")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title161")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                    {l("title153")}
                    </td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/000267' className='underline'>https://cmu.to/000267</a>
                    </td>
                  </tr> */}

                </tbody>
              </table>
              <p className="mt-10 mb-5">{l("title34")}</p>
              <ol className="list-disc pl-6 ml-5">
                <li className="mb-2">{l("title35")}</li>
                <li className="mb-2">{l("title36")}</li>
                <li className="mb-2">{l("title37")}</li>
                <li className="mb-2">{l("title157")}</li>
                <li className="mb-2">{l("title38")}</li>
              </ol>
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



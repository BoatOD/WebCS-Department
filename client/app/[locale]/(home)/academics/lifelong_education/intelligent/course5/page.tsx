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
  c_no: number[];
}

export default function Course_5({ }: Props) {
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
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 5"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            {data
              .filter((item) => item.c_no.length === 1 && item.c_no[0] === 105)
              .map((item) => (
                <div className="p-5" key={item._id}>
                  <h1 className="text-2xl font-bold">{item.c_no[0].toString().slice(-1)}. {locale === "en" ? item.e_name : item.name}</h1>
                  <br />
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                          {l("title40")}
                        </th>
                        <td className="bg-white text-black px-1 md:px-6">
                          {locale === "en" ? item.e_application_period : item.application_period}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                          {l("title42")}
                        </th>
                        <td className="bg-white text-black px-1 md:px-6">
                          {locale === "en" ? item.e_studying_time : item.studying_time}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                          {l("title44")}
                        </th>
                        <td className="bg-white text-black px-1 md:px-6">
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
                    </tbody>
                  </table>
                  <h2 className="text-xl my-5">{l("title45")}</h2>

                  {item.detail && (
                    <ul className="list-disc pl-6">
                      {Object.keys(item.detail).map((key) => (
                        <li key={key} className="mb-2">
                          {key}
                          {Array.isArray(item.detail[key]) && item.detail[key].length > 0 && (
                            <ul className="list-disc pl-6">
                              {item.detail[key].map((item) => (
                                <li key={item} className="mb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              ))}
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
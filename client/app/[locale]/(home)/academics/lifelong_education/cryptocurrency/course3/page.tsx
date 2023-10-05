'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations, useLocale } from 'next-intl';


type Props = {}

interface LifelongCrypto {
  _id: string;
  cu_no: number;
  reg_link: string;
  application_period: string;
  studying_time: string;
  name: string;
  e_application_period: string;
  e_name: string;
  e_studying_time: string;
  detail: {
    "การทำงานของบล็อกเชนสำหรับเก็บข้อมูลคริปโทเคอร์เรนซี": string[];
    "การเขียนโปรแกรมสคริปต์สำหรับเทรดคริปโทเคอร์เรนซี": string[];
  };
  e_detail: {
    "How does blockchain work for storing cryptocurrency data?": string[];
    "Programming scripts for trading cryptocurrencies": string[];
  };
  app_fee_other: number;
  app_fee_student: number;
  lecturer: string[];
  e_lecturer: string[];
}

export default function Course3({ }: Props) {
  const l = useTranslations("lifelong");
  const locale = useLocale();
  const [data, setData] = useState<LifelongCrypto[]>([]);
  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/lifelong_cryptocurrency", { cache: 'force-cache' })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="CRYPTOCURRENCY TRANING COURSE"
        subtitle="CRYPTO INVESTMENT TIPS"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            {data
              .filter((item) => item.e_name === "Course 3 : Analysis and Psychology of Investing in Cryptocurrencies (Crypto Investment Tips)")
              .map((item) => (
                <div key={item._id} className="p-5">
                  <h1 className="text-2xl font-bold">{locale === "en" ? item.e_name : item.name}</h1>
                  <br />
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">{l("title40")}</th>
                        <td className="bg-white text-black px-1 md:px-6">{locale === "en" ? item.e_application_period : item.application_period}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">{l("title42")}</th>
                        <td className="bg-white text-black px-1 md:px-6">{locale === "en" ? item.e_studying_time : item.studying_time}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">{l("title44")}</th>
                        <td className="bg-white text-black px-1 md:px-6"><a href={`${item.reg_link}`} className='underline' target='_blank'>{l("title20")}</a></td>
                      </tr>
                    </tbody>
                  </table>
                  <h2 className="mt-10 mb-5 font-bold">{l("title45")}</h2>
                  <ul className="list-disc pl-6 ml-5">
                    {locale === "en" ? (
                      Object.keys(item.e_detail).map((key) => (
                        <li key={key} className="mb-2">{key}</li>
                      ))
                    ) : (
                      Object.keys(item.detail).map((key) => (
                        <li key={key} className="mb-2">{key}</li>
                      ))
                    )}

                  </ul>
                  <br />
                  <h2 className="mb-5 font-bold">{l("title50")}</h2>
                  <ul className="list-disc pl-6 ml-5">
                    {locale === "en" ?
                      item.e_lecturer.map((lecturer, index) => (
                        <li key={index} className="mb-2">{lecturer}</li>
                      ))
                      :
                      item.lecturer.map((lecturer, index) => (
                        <li key={index} className="mb-2">{lecturer}</li>
                      ))
                    }
                  </ul>

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
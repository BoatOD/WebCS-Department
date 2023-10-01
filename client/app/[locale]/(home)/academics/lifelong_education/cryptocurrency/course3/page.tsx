'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';


type Props = {}

export default function Course3({ }: Props) {
  const l = useTranslations("lifelong");
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
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title61")}</h1>
              <br />
              <table className="w-full">
                <tbody>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">{l("title40")}:</th>
                    <td className="bg-white text-black px-1 md:px-6">{l("title56")}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">{l("title42")}</th>
                    <td className="bg-white text-black px-1 md:px-6">{l("title62")}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">{l("title44")}</th>
                    <td className="bg-white text-black px-1 md:px-6"><a href="https://www.lifelong.cmu.ac.th/courseleid.php?id=000121" className='underline'>{l("title20")}</a></td>
                  </tr>
                </tbody>
              </table>
              <h2 className="mt-10 mb-5 font-bold">{l("title45")}</h2>

              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">{l("title63")}</li>
                <li className="mb-2">{l("title64")}</li>
              </ul>
              <br />
              <h2 className="mb-5 font-bold">{l("title50")}</h2>
              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">{l("title65")}</li>
                <li className="mb-2">{l("title66")}</li>
                <li className="mb-2">{l("title67")}</li>
              </ul>

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
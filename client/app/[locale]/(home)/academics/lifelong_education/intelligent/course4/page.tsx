'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';

type Props = {}

export default function Course_4({ }: Props) {
  const l = useTranslations("lifelong");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 4"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title99")}</h1>
              <br />
              <table className="w-full">
                <tbody>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title40")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title86")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title42")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title87")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title44")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title88")}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl my-5">{l("title45")}</h2>

              <ul className="list-disc pl-6">
                <li className='mb-2'>Preparing and working with custom data</li>
                <li className='mb-2'>Basic exploration and visualization of single-cell datasets</li>
                <li className='mb-2'>Building Reports & Dashboards in Google Data Studio</li>
                <li className='mb-2'>Marker genes and cell scoring</li>
                <li className='mb-2'>Cell classification</li>
                <li className='mb-2'>Cell clustering and cluster characterization</li>
                <li className='mb-2'>Performance evaluation</li>
                <li className='mb-2'>Model parameters tuning</li>
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
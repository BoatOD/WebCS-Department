'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';

type Props = {}

export default function Course_3({ }: Props) {
  const l = useTranslations("lifelong");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 3"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title85")}</h1>
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
                <li className='mb-2'>Introduction to Google Data Studio features</li>
                <li className='mb-2'>Connecting to data sources</li>
                <li className='mb-2'>Building Reports & Dashboards in Google Data Studio</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Creating charts and tables</li>
                  <li className='mb-2'>Creating charts and tables</li>
                  <li className='mb-2'>Using various chart types: Area chart, Bar chart, Bullet chart, Geo map, Pie chart, Scatter plot, Scorecard, Table, Time series, etc.</li>
                </ul>
                <li className='mb-2'>Applying filters and interactive</li>
                <li className='mb-2'>Sharing & Collaboration</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Report sharing options</li>
                  <li className='mb-2'>Collaboration features</li>
                </ul>
                <li className='mb-2'>Problem-based learning</li>
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
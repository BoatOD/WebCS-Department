'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/lifelong_education/sidebarData'

type Props = {}

export default function Course({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 3"
        customStyles={{
          width: 'auto',  // Custom width for this page
          height: '100px',  // Custom height for this page
          bottom: '-15px', // Custom bottom attribute for this page
        }}
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">3. การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลสำหรับผู้เรียนระดับต้นด้วย Google Data Studio</h1>
              <br />
              <table>
                <tbody>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่วงวันรับสมัคร :
                    </th>
                    <td className="bg-white text-black px-6">
                      1 กันยายน – 20 ตุลาคม 2564
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่วงเวลาเรียน :
                    </th>
                    <td className="bg-white text-black px-6">
                      1-5 พฤศจิกายน 2564 เวลา 9:00-12:00 น.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่องทางรับการสมัคร :
                    </th>
                    <td className="bg-white text-black px-6">
                      *โปรดติดตามประกาศอีกครั้ง เริ่มรับสมัคร 1 กันยายน
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl my-5">เนื้อหาหลักสูตร</h2>

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
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  )
}
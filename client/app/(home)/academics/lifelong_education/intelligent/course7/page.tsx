'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/lifelong_education/sidebarData'

type Props = {}

export default function Course_7({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 7"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">7. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 1 และ MODULE2</h1>
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
                      ช่วงเวลาเรียน MODULE1 :
                    </th>
                    <td className="bg-white text-black px-6">
                      1-5 พฤศจิกายน 2564 เวลา 13:00-16:00 น.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่วงเวลาเรียน MODULE2 :
                    </th>
                    <td className="bg-white text-black px-6">
                      8-12 พฤศจิกายน 2564 เวลา 13:00-16:00 น.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่องทางรับการสมัคร :
                    </th>
                    <td className="bg-white text-black px-6">
                      * โปรดติดตามประกาศอีกครั้ง เริ่มรับสมัคร 1 กันยายน
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
      </div>
    </>
  )
}
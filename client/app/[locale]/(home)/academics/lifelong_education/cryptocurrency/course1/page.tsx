'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'


type Props = {}

export default function Course1({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="CRYPTOCURRENCY TRANING COURSE"
        subtitle="BASIC OF CRYPTOCURRENCY"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">หลักสูตรที่ 1 พื้นฐานของคริปโทเคอร์เรนซี (Cryptocurrency สำหรับนักลงทุนมือใหม่)</h1>
              <br />
              <table className="w-full">
                <tbody>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">ช่วงวันรับสมัคร :</th>
                    <td className="bg-white text-black px-6">รุ่นที่ 1 : 14 กรกฎาคม – 23 กรกฎาคม 2564</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">ช่วงเวลาเรียน :</th>
                    <td className="bg-white text-black px-6">รุ่นที่ 1 : 31 กรกฎาคม 2564 เวลา 9.30 – 16.30 น.</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">ช่องทางรับการสมัคร :</th>
                    <td className="bg-white text-black px-6"><a href="https://www.lifelong.cmu.ac.th/courseleid.php?id=000119" className='underline'>Click here!</a></td>
                  </tr>
                </tbody>
              </table>
              <h2 className="mt-10 mb-5 font-bold">เนื้อหาหลักสูตร</h2>

              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">Blockchain and Cryptocurrency</li>
                <li className="mb-2">Mining</li>
                <li className="mb-2">การเริ่มต้นการลงทุนด้าน Cryptocurrency</li>
                <li className="mb-2">ผลิตภัณฑ์อื่น ๆ ที่น่าสนใจ</li>
              </ul>
              <br />
              <h2 className="mb-5 font-bold">ผู้บรรยาย</h2>
              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">รศ.ดร. เอกรัฐ บุญเชียง</li>
                <li className="mb-2">อ.ดร. วรวิทย์ เทพแสน</li>
                <li className="mb-2">คุณบริรัฐ คำปิงยศ</li>
                <li className="mb-2">อ.ดร.ณพล หงสกุลวสุ</li>
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
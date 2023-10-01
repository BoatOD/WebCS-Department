'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'

type Props = {}

export default function Course_5({ }: Props) {
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
            <div className="p-5">
              <h1 className="text-2xl font-bold">5. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 1 : แนวคิดและแอปพลิเคชันการวิเคราะห์ข้อมูลด้วยเทคนิคการเรียนรู้ด้วยเครื่อง โดยใช้โปรแกรมออเรนจ์</h1>
              <br />
              <table className="w-full">
                <tbody>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่วงวันรับสมัคร :
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                      1 กันยายน – 20 ตุลาคม 2564
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่วงเวลาเรียน :
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                      1-5 พฤศจิกายน 2564 เวลา 9:00-12:00 น.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      ช่องทางรับการสมัคร :
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                      * โปรดติดตามประกาศอีกครั้ง เริ่มรับสมัคร 1 กันยายน
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl my-5">เนื้อหาหลักสูตร</h2>

              <ul className="list-disc pl-6">
                <li className='mb-2'>Text mining</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Loading the data, corpus-retrieval techniques</li>
                  <li className='mb-2'>Text preprocessing and automatic syntactic annotation</li>
                  <li className='mb-2'>Word cloud</li>
                  <li className='mb-2'>Text clustering</li>
                  <li className='mb-2'>Text classification</li>
                  <li className='mb-2'>Sentiment Analysis</li>
                  <li className='mb-2'>Topic Modelling</li>
                  <li className='mb-2'>Cases studies</li>
                </ul>
                <li className='mb-2'>Image analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Loading image data file</li>
                  <li className='mb-2'>Image preprocessing</li>
                  <li className='mb-2'>Image classification</li>
                  <li className='mb-2'>Image clustering</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Recommender system</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Content-based recommender system</li>
                  <li className='mb-2'>Collaborative recommender system</li>
                  <li className='mb-2'>Evaluation</li>
                  <li className='mb-2'>Cases studies</li>
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
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
        subtitle="COURSE 6"
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
              <h1 className="text-2xl font-bold">6. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 2 : การวิเคราะห์ข้อมูลด้วยเทคนิคการเรียนรู้ของเครื่อง โดยใช้โปรแกรมออเรนจ์</h1>
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
              <h2 className="text-xl my-5">เนื้อหาหลักสูตร</h2>

              <ul className="list-disc pl-6">
                <li className='mb-2'>Data exploration and visualization</li>
                <li className='mb-2'>Classification analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine learning and basic classification techniques: decision tree, Naïve Bayes, k-Nearest Neighbors</li>
                  <li className='mb-2'>Classification analysis evaluation</li>
                  <li className='mb-2'>Model parameters tuning for classification analysis</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Clustering analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine learning and basic clustering techniques: K-means, Hierarchical clustering</li>
                  <li className='mb-2'>Clustering analysis evaluation</li>
                  <li className='mb-2'>Model parameters tuning for clustering analysis</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Predictive analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine Learning and Basic Classification Techniques: Outliers detection, regression analysis, association rules analysis</li>
                  <li className='mb-2'>Predictive analysis evaluation</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Advanced learning techniques</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Reinforcement learning, Neural networks</li>
                  <li className='mb-2'>Model parameters tuning</li>
                  <li className='mb-2'>Case studies</li>
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
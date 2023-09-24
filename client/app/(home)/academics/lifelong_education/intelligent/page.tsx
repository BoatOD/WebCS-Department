'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/lifelong_education/sidebarData'

type Props = {}

export default function Intelligent({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="LIFELONG EDUCATION"
        subtitle="INTELLIGENT ANALYSIS COURSE"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะ</h1>
              <h3 className="font-bold">ภายใต้การสนับสนุนจากวิทยาลัยการศึกษาตลอดชีวิต (Lifelong Education)</h3>
              <div className="bg-[#F2D4B0] h-full m-6 p-6 mr-16">
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    หลักสูตรวิเคราะห์ข้อมูลอัจฉริยะ เป็นหลักสูตรที่ออกแบบมาเพื่อพัฒนาความรู้ของผู้เรียนโดยมุ่ง
                    เน้นให้เป็นผู้ที่สามารถบริหารข้อมูล สกัดข้อมูลเชิงลึก สามารถนำข้อมูลไปวิเคราะห์เพื่อทำ
                    ความเข้าใจและอธิบายปรากฏการณ์ต่างๆ  ที่เกิดขึ้นอีกทั้งมุ่งเน้นในการสร้างโมเดลสำหรับ
                    การวิเคราะห์ข้อมูล เพื่อการทำนายผลที่จะเกิดขึ้นในอนาคตและสร้างองค์ความรู้ใหม่เพื่อช่วยใน
                    การหาวิธีการ แก้ปัญหา หรือการวางแผนการดำเนินงานขององค์กร
                  </span>
                </p>
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    นอกจากนั้นผู้เรียนจะสามารถสร้างการสื่อสารด้วยภาพข้อมูลในลักษณะของ
                    Intelligence Dashboard เพื่อนำเสนอสารสนเทศในมิติต่างๆ ได้อย่างครอบคลุมและน่าสนใจ
                  </span>
                </p>
                <p>
                  <span className="ml-[1rem]">
                    เนื้อหาของหลักสูตรมุ่งเน้นการพัฒนาผู้เรียนในหลายๆ ระดับเพื่อให้ผู้เรียนได้พัฒนาตนเอง ตั้งแต่ระดับพื้นฐานสู่ความเป็นมืออาชีพ
                    ตามหัวข้อที่ผู้เรียนสนใจ ผู้สำเร็จการอบรมในแต่ละหลักสูตรจะได้รับประกาศนียบัตรรับรองสมรรถนะจากมหาวิทยาลัยเชียงใหม่
                    เพื่อสร้างการยอมรับในความรู้ ความสามารถตามหลักสูตรนั้น
                  </span>
                </p>
              </div>
              <h2 className="text-xl">หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะประกอบด้วยหลักสูตรย่อยดังนี้</h2>
              <br />
              <table className="w-full text-sm text-left">
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      ชื่อหลักสูตร
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      ค่าธรรมเนียม
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      ค่าบำรุงมหาวิทยาลัย
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      ลิงค์รับสมัคร
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">
                      1. การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลสำหรับผู้เรียน ระดับต้นด้วย Advanced Microsoft Excel
                    </td>
                    <td className="px-6 py-4 text-center">
                      2,900.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">
                      2. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่อง สำหรับผู้เรียนระดับสูง โดยใช้การเขียนโปรแกรมไพธอน (Python)
                    </td>
                    <td className="px-6 py-4 text-center">
                      2,900.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">
                      3. การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลสำหรับผู้เรียนระดับต้นด้วย Google Data Studio
                    </td>
                    <td className="px-6 py-4 text-center">
                      2,900.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">
                      4. การวิเคราะห์ข้อมูลพื้นฐานด้วยเทคนิคการเรียนรู้ของเครื่องสำหรับงานประยุกต์ด้านชีวสารสนเทศศาสตร์
                    </td>
                    <td className="px-6 py-4 text-center">
                      2,900.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">
                      5. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 1 : Data analysis applications using Data Mining Tools
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">
                      6. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 2 : Intelligence data analysis with machine learning techniques using Orange data mining toolbox
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">
                      7. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox (MODULE1 และ MODULE2)
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">
                      8. การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลด้วย Power BI (Data analysis and data visualization for beginner with Power BI)
                    </td>
                    <td className="px-6 py-4 text-center">
                      2,900.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      โปรดรอติดตาม
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">
                      8. การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลด้วย Power BI (Data analysis and data visualization for beginner with Power BI)
                    </td>
                    <td className="px-6 py-4 text-center">
                      2,900.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      600.- บาท
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/000267' className='underline'>https://cmu.to/000267</a>
                    </td>
                  </tr>

                </tbody>
              </table>
              <p className="mt-10 mb-5">หมายเหตุ :</p>
              <ol className="list-disc pl-6 ml-5">
                <li className="mb-2">ยกเว้นค่าบำรุงมหาวิทยาลัยสำหรับผู้เรียนที่เป็นนักศึกษา ผู้ปฏิบัติงานในมหาวิทยาลัย หรือศิษย์เก่าที่สำเร็จการศึกษาจากมหาวิทยาลัยเชียงใหม่)</li>
                <li className="mb-2">ทุกหลักสูตรเรียนออนไลน์ผ่าน ZOOM</li>
                <li className="mb-2">ผู้เรียนจะได้ใบรับรองสมรรถนะเมื่อผ่านการประเมิน 70%</li>
                <li className="mb-2">หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox จะได้รับใบรับรองสมรรถนะเมื่อเรียนครบทั้ง 2 MODULE</li>
                <li className="mb-2">จำนวนชั่วโมงและหัวข้อย่อยทุกหลักสูตรอาจมีการปรับเปลี่ยนตามความเหมาะสม</li>
              </ol>
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



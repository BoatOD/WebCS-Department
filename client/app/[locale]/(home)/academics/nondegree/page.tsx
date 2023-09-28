'use client'
import React from 'react'
import Banner from '@/components/Banner';

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";

type Props = {}

export default function Nondegree({ }: Props) {
  const sidebarItem: SidebarProps[] = [
    {
      content: "NON DEGREE",
      type: "header",
      href: "/academics/nondegree",
    },
    {
      content: "การวิเคราะห์ข้อมูลอัจฉริยะ",
      href: "#analysis",
      type: "singleItem",
    },
    {
      content: "วัตถุประสงค์ของหลักสูตร",
      href: "#obj",
      type: "singleItem",
    },
    {
      content: "คุณสมบัติของผู้สมัคร",
      href: "#quali",
      type: "singleItem",
    },
    {
      content: "กระบวนการรับสมัคร",
      href: "#process",
      type: "singleItem",
    },
    {
      content: "การสมัครและเอกสารที่ใช้",
      href: "#candidacy",
      type: "singleItem",
    },
    {
      content: "วิธีจัดการเรียนการสอนกระบวนวิชา",
      href: "#thc",
      type: "singleItem",
    },
    {
      content: "แผนการศึกษา",
      href: "#studyplan",
      type: "singleItem",
    },
  ];
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="NON DEGREE"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          <div className="p-1 pt-3 ">

            <div className="p-5">
              <h1 id="analysis" className="text-2xl font-bold">การวิเคราะห์ข้อมูลอัจฉริยะ (INTELLIGENT DATA ANALYSIS)</h1>
              <br />
              <p>
                <span className="ml-[1rem]">เพื่อการวิเคราะห์เชิงลึกและค้นหาข้อมูลสำคัญที่นำไปสู่การสร้างสรรค์พัฒนาสิ่งใหม่ สามารถต่อยอดเป็นนวัตกรรมที่สร้างมูลค่าให้กับองค์กร จึงนำมาสู่การเปิดหลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะ (Intelligent Data Analysis) หลักสูตรนี้มุ่งหวังให้ผู้เรียนมีความรู้ภาคทฤษฎีเกี่ยวกับการจัดดำเนินการข้อมูล และการวิเคราะห์ข้อมูลด้วยเทคนิคการเรียนรู้ด้วยเครื่อง(Machine Learning) ที่สามารถนำไปประยุกต์ใช้กับโจทย์การวิเคราะห์ข้อมูลเชิงลึกและการวิจัยกับข้อมูลหลายประเภท นอกจากนี้ผู้เรียนจะได้ฝึกภาคปฏิบัติ ณ สถานประกอบการ โดยใช้ข้อมูลจริงตามความต้องการของสถานประกอบการ เพื่อประโยชน์ขององค์กรต่อไป</span>
              </p>

              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20pc"></div>
              </div>
              <br />
              <h1 id="obj" className="text-2xl font-bold">วัตถุประสงค์ของหลักสูตร</h1>
              <br />
              <ol className="list-disc pl-6">
                <li className="mb-2">
                  พัฒนากำลังคนให้มีความรู้และทักษะด้านการวิเคราะห์ข้อมูลอัจฉริยะด้วยเทคนิคการเรียนรู้ด้วยเครื่อง เพื่อนำไปประยุกต์ใช้ให้เกิดประโยชน์สำหรับองค์กร
                </li>
                <li className="mb-2">
                  วิเคราะห์ข้อมูลอัจฉริยะและค้นหาข้อมูลสำคัญที่นำไปสู่การสร้างสรรค์พัฒนาสิ่งใหม่ สามารถต่อยอดเป็นนวัตกรรมที่สร้างมูลค่าให้กับองค์กร
                </li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="quali" className="text-2xl font-bold">คุณสมบัติของผู้สมัคร</h1>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2"> มีทักษะพื้นฐานการใช้งานโปรแกรม Microsoft Excel</li>
                <li className="mb-2"> ได้รับอนุญาตจากหน่วยงานให้เรียนและนำข้อมูลในองค์กรมาใช้เพื่อประกอบการเรียน</li>
                <li className="mb-2"> เป็นพนักงานในองค์กรด้านอุตสาหกรรม หรือธุรกิจเอกชน โดยองค์กรต้องร่วมเซ็น MOU กับคณะวิทยาศาสตร์</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="process" className="text-2xl font-bold">กระบวนการรับสมัคร</h1>
              <br />
              <table className="w-full text-sm text-left">
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      กระบวนการ
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      รายละเอียด
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      รับสมัคร
                    </th>
                    <td className="px-6 py-4">
                      22 มิถุนายน – 8 กรกฎาคม 2565
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      สัมภาษณ์
                    </th>
                    <td className="px-6 py-4">
                      20 กรกฎาคม 2565 เวลา 9:00-12:00 น. (การประชุมออนไลน์ผ่านระบบ Zoom)
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ประกาศผล
                    </th>
                    <td className="px-6 py-4">
                      22 กรกฎาคม 2565 (รับผู้เรียนจำนวน 40 คน)
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ประสานงานเพื่อทำ MOU
                    </th>
                    <td className="px-6 py-4">
                      25-31 กรกฎาคม 2565
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ปฐมนิเทศผู้เรียน
                    </th>
                    <td className="px-6 py-4">
                      27 กรกฎาคม 2565 เวลา 13:30-15:30 น. (การประชุมออนไลน์ผ่านระบบ Zoom)
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      เริ่มเรียน
                    </th>
                    <td className="px-6 py-4">
                      4 สิงหาคม 2565
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ช่วงเวลาเรียน
                    </th>
                    <td className="px-6 py-4">
                      สิงหาคม 2565 - กุมภาพันธ์ 2566 (ภาคทฤษฏี : Video on Demand ภาคปฏิบัติ : สอนสดผ่านระบบ Zoom)
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="candidacy" className="text-2xl font-bold">การสมัครและเอกสารที่ใช้</h1>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2">สมัคร Online ผ่านลิงค์ https://cmu.to/Wsw0d</li>
                <li className="mb-2">รูปถ่าย</li>
                <li className="mb-2">สำเนาบัตรประชาชน</li>
                <li className="mb-2">หนังสือนำส่งจากบริษัท</li>
                <li className="mb-2">Curriculum Vitae (CV)</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="thc" className="text-2xl font-bold">วิธีจัดการเรียนการสอนกระบวนวิชา</h1>
              <br />
              <p>การจัดการเรียนการสอนในกระบวนวิชา Data Manipulation (ส.ค.-ก.ย. 65) และกระบวนวิชา Data Analysis with Machine Learning (ก.ย.-ต.ค. 65)</p>
              <br />
              <table className="w-full text-sm text-left">
                <tbody>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ระยะเวลา
                    </th>
                    <td className="px-6 py-4">
                      ใช้ระยะเวลาในการเรียนการสอนในแต่ละกระบวนวิชาประมาณ 6 สัปดาห์ 360 ชม. (ทฤษฎี 90 ชม. , ปฏิบัติ 270 ชม.)
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ภาคทฤษฎี
                    </th>
                    <td className="px-6 py-4">
                      จัดการเรียนการสอนแบบออนไลน์ Video on Demand โดยมีเนื้อหาให้ผู้เรียนศึกษาด้วยตนเองผ่านวิดีโอและมีแบบฝึกหัดเพื่อทบทวนเนื้อหา โดยความยาววิดีโอประมาณ 30 นาที ต่อ 1 หัวข้อ จำนวน 4 หัวข้อ/สัปดาห์ (ใช้เวลาในการเรียนรู้ประมาณ 8 ชั่วโมงต่อสัปดาห์)
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      ภาคปฏิบัติ
                    </th>
                    <td className="px-6 py-4">
                      จัดการเรียนการสอนสด แบบออนไลน์ผ่านระบบ Zoom ในวันพุธของแต่ละสัปดาห์ เวลา 13:30-15:30 น. และเช็คชื่อเข้าเรียน โดยผู้เรียนต้องเข้าเรียนอย่างน้อยร้อยละ 80 ของเวลาเรียนทั้งหมดในแต่ละกระบวนวิชา มีการบันทึกวิดีโอการสอนให้ทบทวนบทเรียนย้อนหลัง รวมทั้งมีแบบฝึกหัดเพื่อฝึกฝนทักษะในแต่ละสัปดาห์
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      การประเมินผล
                    </th>
                    <td className="px-6 py-4">
                      ผู้เรียนจะต้องได้รับ ผลการประเมินตั้งแต่ร้อยละ 60 ขึ้นไป ในการทำแบบฝึกหัดภาคทฤษฎี ภาคปฏิบัติ และการสอบประเมินผลการเรียน จึงจะถือว่าเป็นผู้สำเร็จหลักสูตร โดยผู้เรียนที่ได้ผลการประเมินน้อยกว่าที่กำหนดจะต้องทบทวนเนื้อหาและทำแบบฝึกหัดหรือสอบใหม่ ซึ่งอาจารย์ผู้สอนจะให้คำแนะนำอย่างใกล้ชิด
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      การให้คำปรึกษา
                    </th>
                    <td className="px-6 py-4">
                      มีการให้บริการตอบคำถามผ่านระบบถามตอบออนไลน์ โดยจะมีเจ้าหน้าที่คอยให้บริการเวลา 9:00-16:00 น. ในเวลาราชการ โดยเจ้าหน้าที่จะให้บริการตอบคำถามเบื้องต้นและส่งต่อคำถามพิเศษไปยังอาจารย์ผู้สอน ซึ่งผู้เรียนสามารถแจ้งความจำนงเพื่อขอติดต่อสอบถามอาจารย์ผู้สอนโดยตรงทางโทรศัพท์หรือทางออนไลน์ผ่านระบบ Zoom
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <h1>การจัดการเรียนการสอนในกระบวนวิชา Project-based learning (พ.ย. 65 – ก.พ. 66)</h1>
              <br />
              <table>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      การเรียน
                    </th>
                    <td className="px-6 py-4">
                      จัดการเรียนการสอนแบบ Project-based learning และแบบ Work-integrated learning โดยเข้ารับการฝึกปฏิบัติงานจริง เพื่อทำการศึกษา ค้นคว้าในสภาพแวดล้อมการทำงานจริง เพื่อพัฒนาโครงงานประยุกต์สำหรับการแก้โจทย์ชององค์การ โดยมีทีมอาจารย์ที่ปรึกษาทำหน้าที่เป็น Mentor
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="studyplan" className="text-2xl font-bold">แผนการศึกษา</h1>
              <br />
              <table>
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      เดือน
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      รายวิชา
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      หน่วยกิต
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      เดือนที่ 1, 2
                    </th>
                    <td className="px-6 py-4 text-center">
                      204728 Data Manipulation
                    </td>
                    <td className="px-6 py-4 text-center">
                      3
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      เดือนที่ 3, 4
                    </th>
                    <td className="px-6 py-4 text-center">
                      204725 Data Analytics with Machine Learning
                    </td>
                    <td className="px-6 py-4 text-center">
                      3
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <table>
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      รหัสวิชา
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      ชื่อกระบวนวิชา
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      เนื้อหา
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      CS725 (204725)
                    </th>
                    <td className="px-6 py-4">
                      การวิเคราะห์ข้อมูลและการเรียนรู้ของเครื่อง (Data Analytics and Machine Learning)
                    </td>
                    <td className="px-6 py-4">
                      ตัวแบบการทำนายการวิเคราะห์การจัดกลุ่มการจัดหมวดหมู่การวิเคราะห์ถดถอยการให้คะแนนและการจัดลำดับการเรียนรู้โครงสร้างการเรียนรู้แบบกึ่งมีผู้สอนการเรียนรู้แบบเสริมกำลัง Predictive analytics, cluster analysis, classification, regression analysis, scaring and ranking, structure learning, semi-supervised learning, reinforcement learning.
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-center">
                      CS728 (204728)
                    </th>
                    <td className="px-6 py-4">
                      การจัดดำเนินการข้อมูล (Data Manipulation)
                    </td>
                    <td className="px-6 py-4">
                      การแทนและการได้ข้อมูล การแปลงและการตรวจชำระข้อมูล การประมวลผลคุณลักษณะ กระบวนการของ การสกัด การแปลงและการบรรจุ (อีทีแอล) การนำเสนอข้อมูล Data representations and acquisitions, data transformation and cleansing, feature processing, process of extraction transformation and load (ETL), data presentation.
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
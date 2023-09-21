'use client'
import React from 'react'
import { Sidebar } from "flowbite-react";
import { SidebarCustomTheme } from "@/theme";
import './non.css'

type Props = {}

export default function Master({ }: Props) {
  return (
    <>
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          <div className="p-1 pt-3 ">

            <div className="p-5">
              <h1 id="analysis">การวิเคราะห์ข้อมูลอัจฉริยะ (INTELLIGENT DATA ANALYSIS)</h1>
              <br />
              <p>
                เพื่อการวิเคราะห์เชิงลึกและค้นหาข้อมูลสำคัญที่นำไปสู่การสร้างสรรค์พัฒนาสิ่งใหม่ สามารถต่อยอดเป็นนวัตกรรมที่สร้างมูลค่าให้กับองค์กร จึงนำมาสู่การเปิดหลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะ (Intelligent Data Analysis) หลักสูตรนี้มุ่งหวังให้ผู้เรียนมีความรู้ภาคทฤษฎีเกี่ยวกับการจัดดำเนินการข้อมูล และการวิเคราะห์ข้อมูลด้วยเทคนิคการเรียนรู้ด้วยเครื่อง(Machine Learning) ที่สามารถนำไปประยุกต์ใช้กับโจทย์การวิเคราะห์ข้อมูลเชิงลึกและการวิจัยกับข้อมูลหลายประเภท นอกจากนี้ผู้เรียนจะได้ฝึกภาคปฏิบัติ ณ สถานประกอบการ โดยใช้ข้อมูลจริงตามความต้องการของสถานประกอบการ เพื่อประโยชน์ขององค์กรต่อไป
              </p>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20pc"></div>
              </div>
              <br />
              <h1 id="obj">วัตถุประสงค์ของหลักสูตร</h1>
              <br />
              <ol style={{ listStyleType: 'disc' }}>
                <li>พัฒนากำลังคนให้มีความรู้และทักษะด้านการวิเคราะห์ข้อมูลอัจฉริยะด้วยเทคนิคการเรียนรู้ด้วยเครื่อง เพื่อนำไปประยุกต์ใช้ให้เกิดประโยชน์สำหรับองค์กร</li>
                <li>วิเคราะห์ข้อมูลอัจฉริยะและค้นหาข้อมูลสำคัญที่นำไปสู่การสร้างสรรค์พัฒนาสิ่งใหม่ สามารถต่อยอดเป็นนวัตกรรมที่สร้างมูลค่าให้กับองค์กร</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="quali">คุณสมบัติของผู้สมัคร</h1>
              <br />
              <ol style={{ listStyleType: 'decimal' }}>
                <li>มีทักษะพื้นฐานการใช้งานโปรแกรม Microsoft Excel</li>
                <li>ได้รับอนุญาตจากหน่วยงานให้เรียนและนำข้อมูลในองค์กรมาใช้เพื่อประกอบการเรียน</li>
                <li>เป็นพนักงานในองค์กรด้านอุตสาหกรรม หรือธุรกิจเอกชน โดยองค์กรต้องร่วมเซ็น MOU กับคณะวิทยาศาสตร์</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="process">กระบวนการรับสมัคร</h1>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>กระบวนการ</th>
                    <th>รายละเอียด</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">รับสมัคร</td>
                    <td>22 มิถุนายน – 8 กรกฎาคม 2565</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">สัมภาษณ์</td>
                    <td>20 กรกฎาคม 2565 เวลา 9:00-12:00 น. (การประชุมออนไลน์ผ่านระบบ Zoom)</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">ประกาศผล</td>
                    <td>22 กรกฎาคม 2565 (รับผู้เรียนจำนวน 40 คน)</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">ประสานงานเพื่อทำ MOU</td>
                    <td>25-31 กรกฎาคม 2565</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">ปฐมนิเทศผู้เรียน</td>
                    <td>27 กรกฎาคม 2565 เวลา 13:30-15:30 น. (การประชุมออนไลน์ผ่านระบบ Zoom)</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">เริ่มเรียน</td>
                    <td>4 สิงหาคม 2565</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">ช่วงเวลาเรียน</td>
                    <td>สิงหาคม 2565 - กุมภาพันธ์ 2566 (ภาคทฤษฏี : Video on Demand ภาคปฏิบัติ : สอนสดผ่านระบบ Zoom)</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="candidacy">การสมัครและเอกสารที่ใช้</h1>
              <br />
              <ol style={{ listStyleType: 'decimal' }}>
                <li>สมัคร Online ผ่านลิงค์ https://cmu.to/Wsw0d</li>
                <li>รูปถ่าย</li>
                <li>สำเนาบัตรประชาชน</li>
                <li>หนังสือนำส่งจากบริษัท</li>
                <li>Curriculum Vitae (CV)</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="thc">วิธีจัดการเรียนการสอนกระบวนวิชา</h1>
              <br />
              <p>การจัดการเรียนการสอนในกระบวนวิชา Data Manipulation (ส.ค.-ก.ย. 65) และกระบวนวิชา Data Analysis with Machine Learning (ก.ย.-ต.ค. 65)</p>
              <br />
              <table>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">ระยะเวลา</td>
                    <td>ใช้ระยะเวลาในการเรียนการสอนในแต่ละกระบวนวิชาประมาณ 6 สัปดาห์ 360 ชม. (ทฤษฎี 90 ชม. , ปฏิบัติ 270 ชม.)</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">ภาคทฤษฎี</td>
                    <td>จัดการเรียนการสอนแบบออนไลน์ Video on Demand โดยมีเนื้อหาให้ผู้เรียนศึกษาด้วยตนเองผ่านวิดีโอและมีแบบฝึกหัดเพื่อทบทวนเนื้อหา โดยความยาววิดีโอประมาณ 30 นาที ต่อ 1 หัวข้อ จำนวน 4 หัวข้อ/สัปดาห์ (ใช้เวลาในการเรียนรู้ประมาณ 8 ชั่วโมงต่อสัปดาห์)</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">ภาคปฏิบัติ</td>
                    <td>จัดการเรียนการสอนสด แบบออนไลน์ผ่านระบบ Zoom ในวันพุธของแต่ละสัปดาห์ เวลา 13:30-15:30 น. และเช็คชื่อเข้าเรียน โดยผู้เรียนต้องเข้าเรียนอย่างน้อยร้อยละ 80 ของเวลาเรียนทั้งหมดในแต่ละกระบวนวิชา มีการบันทึกวิดีโอการสอนให้ทบทวนบทเรียนย้อนหลัง รวมทั้งมีแบบฝึกหัดเพื่อฝึกฝนทักษะในแต่ละสัปดาห์</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">การประเมินผล</td>
                    <td>ผู้เรียนจะต้องได้รับ ผลการประเมินตั้งแต่ร้อยละ 60 ขึ้นไป ในการทำแบบฝึกหัดภาคทฤษฎี ภาคปฏิบัติ และการสอบประเมินผลการเรียน จึงจะถือว่าเป็นผู้สำเร็จหลักสูตร โดยผู้เรียนที่ได้ผลการประเมินน้อยกว่าที่กำหนดจะต้องทบทวนเนื้อหาและทำแบบฝึกหัดหรือสอบใหม่ ซึ่งอาจารย์ผู้สอนจะให้คำแนะนำอย่างใกล้ชิด</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">การให้คำปรึกษา</td>
                    <td>มีการให้บริการตอบคำถามผ่านระบบถามตอบออนไลน์ โดยจะมีเจ้าหน้าที่คอยให้บริการเวลา 9:00-16:00 น. ในเวลาราชการ โดยเจ้าหน้าที่จะให้บริการตอบคำถามเบื้องต้นและส่งต่อคำถามพิเศษไปยังอาจารย์ผู้สอน ซึ่งผู้เรียนสามารถแจ้งความจำนงเพื่อขอติดต่อสอบถามอาจารย์ผู้สอนโดยตรงทางโทรศัพท์หรือทางออนไลน์ผ่านระบบ Zoom</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1>การจัดการเรียนการสอนในกระบวนวิชา Project-based learning (พ.ย. 65 – ก.พ. 66)</h1>
              <br />
              <table>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="left">การเรียน</td>
                  <td>จัดการเรียนการสอนแบบ Project-based learning และแบบ Work-integrated learning โดยเข้ารับการฝึกปฏิบัติงานจริง เพื่อทำการศึกษา ค้นคว้าในสภาพแวดล้อมการทำงานจริง เพื่อพัฒนาโครงงานประยุกต์สำหรับการแก้โจทย์ชององค์การ โดยมีทีมอาจารย์ที่ปรึกษาทำหน้าที่เป็น Mentor</td>
                </tbody>
              </table>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="studyplan">แผนการศึกษา</h1>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>เดือน</th>
                    <th>รายวิชา</th>
                    <th>หน่วยกิต</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">เดือนที่ 1, 2</td>
                    <td>204728 Data Manipulation</td>
                    <td>3</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">เดือนที่ 3, 4</td>
                    <td>204725 Data Analytics with Machine Learning</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <br />
              <table>
                <thead>
                  <tr>
                    <th>รหัสวิชา</th>
                    <th>ชื่อกระบวนวิชา</th>
                    <th>เนื้อหา</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  <tr>
                    <td className="left">CS725 (204725)</td>
                    <td>การวิเคราะห์ข้อมูลและการเรียนรู้ของเครื่อง (Data Analytics and Machine Learning)</td>
                    <td>ตัวแบบการทำนายการวิเคราะห์การจัดกลุ่มการจัดหมวดหมู่การวิเคราะห์ถดถอยการให้คะแนนและการจัดลำดับการเรียนรู้โครงสร้างการเรียนรู้แบบกึ่งมีผู้สอนการเรียนรู้แบบเสริมกำลัง Predictive analytics, cluster analysis, classification, regression analysis, scaring and ranking, structure learning, semi-supervised learning, reinforcement learning.</td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: '#F6BA70' }}>
                  <tr>
                    <td className="left">CS728 (204728)</td>
                    <td>การจัดดำเนินการข้อมูล (Data Manipulation )</td>
                    <td>การแทนและการได้ข้อมูล การแปลงและการตรวจชำระข้อมูล การประมวลผลคุณลักษณะ กระบวนการของ การสกัด การแปลงและการบรรจุ (อีทีแอล) การนำเสนอข้อมูล Data representations and acquisitions, data transformation and cleansing, feature processing, process of extraction transformation and load (ETL), data presentation.</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar theme={SidebarCustomTheme} className="w-full">
              <Sidebar.Items className="p-0">
                <Sidebar.ItemGroup className="p-0">
                  <Sidebar.Item className="text-lg font-bold hover:bg-transparent">
                    NON DEGREE
                  </Sidebar.Item>
                  <div className="border-b border-black border-3 my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#analysis">
                    <p>การวิเคราะห์ข้อมูลอัจฉริยะ</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#obj" >
                    <p>วัตถุประสงค์ของหลักสูตร</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#quali">
                    <p>คุณสมบัติของผู้สมัคร</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#process">
                    <p>กระบวนการรับสมัคร</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#candidacy">
                    <p>การสมัครและเอกสารที่ใช้</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#thc">
                    <p>วิธีจัดการเรียนการสอนกระบวนวิชา</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                  <Sidebar.Item className="hover:bg-[#e8e8e8] " href="#studyplan">
                    <p>แผนการศึกษา</p>
                  </Sidebar.Item>
                  <div className="border-b border-black my-2"></div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  )
}
'use client'
import React from 'react'
import { Sidebar } from "flowbite-react";
import { SidebarCustomTheme } from "@/theme";
import Banner from '@/components/AcademicPage/Banner';
import './intelligent.css'


type Props = {}

export default function Intelligent({}: Props) {
    return (
      <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="LIFELONG EDUCATION"
        subtitle="INTELLIGENT ANALYSIS COURSE"
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
              <h1>หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะ</h1> 
              <h3>ภายใต้การสนับสนุนจากวิทยาลัยการศึกษาตลอดชีวิต (Lifelong Education)</h3>
              <div
                style={{
                  backgroundColor: '#F2D4B0',
                  width: 'flex',
                  height: 'flex',
                  padding: '25px'
                  }}
                  class="data"
                >หลักสูตรวิเคราะห์ข้อมูลอัจฉริยะ เป็นหลักสูตรที่ออกแบบมาเพื่อพัฒนาความรู้ของผู้เรียนโดยมุ่ง
                เน้นให้เป็นผู้ที่สามารถบริหารข้อมูล สกัดข้อมูลเชิงลึก สามารถนำข้อมูลไปวิเคราะห์เพื่อทำ
                ความเข้าใจและอธิบายปรากฏการณ์ต่างๆ  ที่เกิดขึ้นอีกทั้งมุ่งเน้นในการสร้างโมเดลสำหรับ
                การวิเคราะห์ข้อมูล เพื่อการทำนายผลที่จะเกิดขึ้นในอนาคตและสร้างองค์ความรู้ใหม่เพื่อช่วยใน
                การหาวิธีการ แก้ปัญหา หรือการวางแผนการดำเนินงานขององค์กร
                นอกจากนั้นผู้เรียนจะสามารถสร้างการสื่อสารด้วยภาพข้อมูลในลักษณะของ  Intelligence  Dashboard  เพื่อนำเสนอสารสนเทศในมิติต่างๆ ได้อย่างครอบคลุมและน่าสนใจ   
                เนื้อหาของหลักสูตรมุ่งเน้นการพัฒนาผู้เรียนในหลายๆ  ระดับเพื่อให้ผู้เรียนได้พัฒนาตนเอง    ตั้งแต่ระดับพื้นฐานสู่ความเป็นมืออาชีพ ตามหัวข้อที่ผู้เรียนสนใจ ผู้สำเร็จการอบรมในแต่ละหลัก
                สูตรจะได้รับประกาศนียบัตรรับรองสมรรถนะจากมหาวิทยาลัยเชียงใหม่ เพื่อสร้างการยอมรับในความรู้   ความสามารถตามหลักสูตรนั้น              
              </div>
              <h2>หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะประกอบด้วยหลักสูตรย่อยดังนี้</h2>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>ชื่อหลักสูตร</th>
                    <th>ค่าธรรมเนียม</th>
                    <th>ค่าบำรุงมหาวิทยาลัย</th>
                    <th>ลิงค์รับสมัคร</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class = "row_white">
                    <td>1.การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลสำหรับผู้เรียน ระดับต้นด้วย Advanced Microsoft Excel</td>
                    <td>2,900.- บาท</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_orange">
                    <td>2.การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่อง สำหรับผู้เรียนระดับสูง โดยใช้การเขียนโปรแกรมไพธอน (Python)</td>
                    <td>2,900.- บาท</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_white">
                    <td>3.การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลสำหรับผู้เรียน ระดับต้นด้วย Google Data Studio</td>
                    <td>2,900.- บาท</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_orange">
                    <td>4.การวิเคราะห์ข้อมูลพื้นฐานด้วยเทคนิคการเรียนรู้ของเครื่อง สำหรับงานประยุกต์ด้านชีวสารสนเทศศาสตร์</td>
                    <td>2,900.- บาท</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_white">
                    <td>5.การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่อง สำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 1 : Data analysis applications using Data Mining Tools</td>
                    <td>โปรดติดตาม</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_orange">
                    <td>6.การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่อง สำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox MODULE 2 : Intelligence data analysis with machine learning techniques using Orange data mining toolbox</td>
                    <td>โปรดติดตาม</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_white">
                    <td>7.การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่อง สำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox (MODULE1 และ MODULE2)</td>
                    <td>โปรดติดตาม</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_orange">
                    <td>8.การวิเคราะห์ข้อมูลและการแสดงมโนภาพข้อมูลด้วย Power BI (Data analysis and data visualization for beginner with Power BI)</td>
                    <td>2,900.- บาท</td>
                    <td>600.- บาท</td>
                    <td>โปรดติดตาม</td>
                  </tr>
                  <tr class = "row_white">
                    <td>9.การวิเคราะห์ข้อมูลอัจฉริยะด้วย RapidMiner (Intelligence Data analysis with RapidMiner)</td>
                    <td>2,900.- บาท</td>
                    <td>600.- บาท</td>
                    <td><a href= "https://cmu.to/000267">https://cmu.to/000267</a></td>
                  </tr>
                  
                </tbody>
              </table>
              <div class="small">
                <p>หมายเหตุ :</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>ยกเว้นค่าบำรุงมหาวิทยาลัยสำหรับผู้เรียนที่เป็นนักศึกษา ผู้ปฏิบัติงานในมหาวิทยาลัย หรือศิษย์เก่าที่สำเร็จการศึกษาจากมหาวิทยาลัยเชียงใหม่)</li>
                  <li>ทุกหลักสูตรเรียนออนไลน์ผ่าน ZOOM</li>
                  <li>ผู้เรียนจะได้ใบรับรองสมรรถนะเมื่อผ่านการประเมิน 70%</li>
                  <li>หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับกลาง โดยใช้ Orange data mining toolbox จะได้รับใบรับรองสมรรถนะเมื่อเรียนครบทั้ง 2 MODULE</li>
                  <li>จำนวนชั่วโมงและหัวข้อย่อยทุกหลักสูตรอาจมีการปรับเปลี่ยนตามความเหมาะสม</li>
              </ol>
              </div>
              
  
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar theme={SidebarCustomTheme} className="w-full">
              <Sidebar.Items className="bg-white p-0">
                <Sidebar.ItemGroup className="bg-white p-0">
                  <Sidebar.Item className="text-lg font-bold hover:bg-transparent">
                    LIFELONG EDUCATION
                  </Sidebar.Item>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                  <Sidebar.Collapse label="Intelligent Data Analysis Course">
                    <Sidebar.Item href="#">Couse 1</Sidebar.Item> {/*path to intelligent/course1 */}
                    <Sidebar.Item href="#">Couse 2</Sidebar.Item> {/*path to intelligent/course2 */}
                    <Sidebar.Item href="#">Couse 3</Sidebar.Item> {/*path to intelligent/course3 */}
                    <Sidebar.Item href="#">Couse 4</Sidebar.Item> {/*path to intelligent/course4 */}
                    <Sidebar.Item href="#">Couse 5</Sidebar.Item> {/*path to intelligent/course5 */}
                    <Sidebar.Item href="#">Couse 6</Sidebar.Item> {/*path to intelligent/course6 */}
                    <Sidebar.Item href="#">Couse 7</Sidebar.Item> {/*path to intelligent/course7 */}
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>

                  <Sidebar.Collapse label="Cryptocurrency training course">
                    <Sidebar.Item href="#">Course 1: Basics of Cryptocurrency</Sidebar.Item>  {/*path to cruptocurrency/course1 */}
                    <Sidebar.Item href="#">Course 2: Robot Trading</Sidebar.Item> {/*path to cruptocurrency/course2 */}
                    <Sidebar.Item href="#">Course 3: Crypto Investment Tips</Sidebar.Item>  {/*path to cruptocurrency/course3 */}
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  )
}
      
      
        
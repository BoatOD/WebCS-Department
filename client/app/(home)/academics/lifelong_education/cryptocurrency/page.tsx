'use client'
import React from 'react'
import { Sidebar } from "flowbite-react";
import { SidebarCustomTheme } from "@/theme";
import Banner from '@/components/AcademicPage/Banner';
import './intelligent.css'


type Props = {}

export default function Cryptocurrency({}: Props) {
    return (
      <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="LIFELONG EDUCATION"
        subtitle="CRYPTOCURRENCY TRANING COURSE"
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
              <h1>หลักสูตรอบรมคริปโทเคอร์เรนซี</h1> 
              <h3>โดยภาควิชาวิทยาการคอมพิวเตอร์ และภาควิชาคณิตศาสตร์ คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่</h3>
              <h3>ภายใต้การสนับสนุนจากวิทยาลัยการศึกษาตลอดชีวิต</h3>
              <div
                style={{
                  backgroundColor: '#F2D4B0',
                  width: 'flex',
                  height: 'flex',
                  padding: '25px'
                  }}
                  class="data"
                >  คริปโทเคอร์เรนซี(Cryptocurrency)เป็นสินทรัพย์ดิจิทัลประเภทหนึ่งที่มีการเข้ารหัสและมีราคาซื้อขาย  แปรผันตามกลไกตลาดโดยคริปโทเคอร์เรนซีทำหน้าที่เป็นสื่อกลางในการแลกเปลี่ยนมูลค่าผ่านอินเทอร์เน็ตที่ไม่ได้อยู่ภาย ใต้การควบคุมหรือจัดการโดยหน่วยงานทางการเงินสากลใด ๆ หากแต่จะทำงานอยู่บนระบบที่สามารถควบ คุมและตรวจสอบตัวมันเองได้ที่เรียกว่า บล็อกเชน (Blockchain) 
                บล็อกเชน (Blockchain) เป็นรูปแบบการเก็บข้อมูลแบบหนึ่งที่ทำให้ข้อมูลธุรกรรมของแต่ละคนสามารถแชร์ไป ยังทุกคนได้ เป็นเสมือนห่วงโซ่ที่ทำให้บล็อก (block) ของข้อมูลเชื่อมต่อไปยังทุกคนโดยที่ทราบว่าใครเป็นเจ้าของ และมีสิทธิในข้อมูลนั้นจริง เมื่อบล็อกของข้อมูลได้ถูกบันทึกไว้ในบล็อกเชนแล้วนั้นจะเป็นเรื่องยากที่จะเข้าไปเปลี่ยน แปลงข้อมูล และเมื่อมีผู้ใดต้องการเพิ่มข้อมูล ทุกคนในเครือข่ายซึ่งมีสำเนาของบล็อกเชน สามารถใช้ขั้นตอนวิธี เพื่อตรวจสอบธุรกรรมที่เข้ามาใหม่ได้ โดยธุรกรรมใหม่นี้จะได้รับอนุญาตให้บันทึกเติมลงบนบล็อกเชนก็ต่อเมื่อ เครือข่ายส่วนใหญ่ เห็นด้วยว่าธุรกรรมนั้นถูกต้องเท่านั้น
                ในปัจจุบันนั้นคริปโทเคอร์เรนซีสามารถทำการซื้อขายได้โดยใช้เงินจริง โดยมีราคาซื้อขายแปรผันตามกลไกตลาด ทำให้มีนักลงทุนหลายคนมีความสนใจในการลงทุนด้านคริปโทเคอร์เรนซี อย่างไรก็ตาม เนื่องจากราคาของคริปโท เคอร์เรนซีนั้นมีการเปลี่ยนแปลงอย่างรวดเร็ว เมื่อเทียบกับการเปลี่ยนแปลงของราคาหุ้น และเปลี่ยนแปลงตลอด เวลาไม่มีการปิดตลาด ทำให้การลงทุน ชนิดนี้เป็นการลงทุนที่มีความเสี่ยงสูงมาก 
                หลักสูตรการอบรมระยะสั้นในหัวข้อคริปโทเคอร์เรนซี มีจุดประสงค์เพื่อให้ผู้เรียนเข้าใจหลักการ ความเป็นมา และทฤษฎีต่าง ๆ ที่เกี่ยวข้องกับบล๊อคเชนและคริปโทเคอร์เรนซี สามารถ ประยุกต์ใช้เทคโนโลยีในศาสตร์อื่น ๆ รวมถึงเป็นการเพิ่มทักษะทางการเงิน (financial literacy) ซึ่งเป็นทักษะสำคัญแห่งการเรียนรู้ศตวรรษที่ 21 ให้กับผู้เรียนอีกด้วย             
              </div>

              <h2>หลักสูตรประกอบด้วยหน่วยย่อย 3 หน่วย ดังต่อไปนี้</h2>
                <ul style={{ listStyleType: 'disc' }}>
                  <li>หน่วยย่อยที่ 1 : พื้นฐานของคริปโทเคอร์เรนซี (Cryptocurrency สำหรับนักลงทุนมือใหม่)</li>
                  <li>หน่วยย่อยที่ 2 : การพัฒนาโปรแกรมเทรดอัตโนมัติ (Trading script) สำหรับการทำธุรกรรมด้วยคริปโทเคอร์เรนซี (Robot Trading)</li>
                  <li>หน่วยย่อยที่ 3 : การวิเคราะห์และจิตวิทยาการลงทุนในคริปโทเคอร์เรนซี (เคล็ดลับการลงทุนคริปโต)</li>
                </ul>
              <br/>

              <h2>ชื่อสมรรถนะ : การพัฒนาโปรแกรมเทรดอัตโนมัติและวิเคราะห์การลงทุนในคริปโทเคอร์เรนซี</h2>
                <ul style={{ listStyleType: 'disc' }}>
                  <li>ผู้เรียนจะได้ใบรับรองสมรรถนะเมื่อเรียนครบทั้ง 3 หน่วยย่อย และผ่านการประเมิน 70%</li>
                  <li>เรียนแบบบรรยายและอบรมเชิงปฏิบัติการ ผ่านระบบ Zoom</li>
                </ul>
              <br/>
              
              <h2>ค่าธรรมเนียมการศึกษา</h2>
              <table>
                <thead>
                  <tr>
                    <th>ชื่อหลักสูตร</th>
                    <th>นักศึกษามหาวิทยาลัยเชียงใหม่</th>
                    <th>บุคลากร/ศิษย์เก่ามหาวิทยาลัยเชียงใหม่และบุคคลทั่วไป</th>
                    <th>ลิงค์รับสมัคร</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class = "row_white">
                    <td>1.หลักสูตรที่ 1 : พื้นฐานของคริปโทเคอร์เรนซี (Cryptocurrency สำหรับนักลงทุนมือใหม่)</td>
                    <td>399.- บาท</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class = "row_orange">
                    <td>2.หลักสูตรที่ 2 : การพัฒนาโปรแกรมเทรดอัตโนมัติ (Trading script) สำหรับการทำธุรกรรมด้วยคริปโทเคอร์เรนซี (Robot Trading)</td>
                    <td>1,900.- บาท</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class = "row_white">
                    <td>3.หลักสูตรที่ 3 : การวิเคราะห์และจิตวิทยาการลงทุนในคริปโทเคอร์เรนซี (เคล็ดลับการลงทุนคริปโต)</td>
                    <td>1,900.- บาท</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class = "row_orange">
                    <td>4.หลักสูตรที่ 1+2 : เริ่มซื้อ-ขาย สำหรับนักลงทุนคริปโตมือใหม่</td>
                    <td>2,299.- บาท</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class = "row_white">
                    <td>5.หลักสูตรที่ 1+3 : สนามรบนักลงทุนคริปโต</td>
                    <td>2,299.- บาท</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class = "row_orange">
                    <td>6.หลักสูตรที่ 2+3 : ติดอาวุธนักลงทุนคริปโต</td>
                    <td>3,400.- บาท<br/>(จาก 3,800.- บาท)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class = "row_white">
                    <td>7.หลักสูตรที่ 1+2+3 : เส้นทางสู่การเป็นนักลงทุนคริปโตมืออาชีพ</td>
                    <td>3,400.- บาท<br/>(จาก 3,800.- บาท)</td>
                    <td></td>
                    <td></td>
                  </tr>                  
                </tbody>
              </table>

              <div class="small">
                <p>หมายเหตุ :</p>
                <ol style={{ listStyleType: 'disc' }}>
                  <li>ยกเว้นค่าบำรุงมหาวิทยาลัยสำหรับผู้เรียนที่เป็นนักศึกษา ผู้ปฏิบัติงานในมหาวิทยาลัย หรือศิษย์เก่าที่สำเร็จการศึกษาจากมหาวิทยาลัยเชียงใหม่)</li>
                  <li>ทุกหลักสูตรเรียนออนไลน์ผ่าน ZOOM</li>
                  <li>ผู้เรียนจะได้ใบรับรองสมรรถนะเมื่อผ่านการประเมิน 70%</li>
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
                    <Sidebar.Item href="#">Couse 1</Sidebar.Item> 
                    <Sidebar.Item href="#">Couse 2</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 3</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 4</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 5</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 6</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>

                  <Sidebar.Collapse label="Cryptocurrency training course">
                    <Sidebar.Item href="#">Course 1: Basics of Cryptocurrency</Sidebar.Item>
                    <Sidebar.Item href="#">Course 2: Robot Trading</Sidebar.Item>
                    <Sidebar.Item href="#">Course 3: Crypto Investment Tips</Sidebar.Item>
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
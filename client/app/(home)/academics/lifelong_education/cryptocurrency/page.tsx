'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/(home)/academics/lifelong_education/sidebarData'

type Props = {}

export default function Cryptocurrency({ }: Props) {
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
              <h1 className="text-2xl font-bold">หลักสูตรอบรมคริปโทเคอร์เรนซี</h1>
              <h3 className="font-bold">
                โดยภาควิชาวิทยาการคอมพิวเตอร์ และภาควิชาคณิตศาสตร์ คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่
                ภายใต้การสนับสนุนจากวิทยาลัยการศึกษาตลอดชีวิต
              </h3>
              <div className="bg-[#F2D4B0] h-full m-6 p-6 mr-16">
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    คริปโทเคอร์เรนซี(Cryptocurrency) เป็นสินทรัพย์ดิจิทัลประเภทหนึ่งที่มีการเข้ารหัส และมีราคาซื้อขายแปรผันตามกลไกตลาด โดยคริปโทเคอร์เรนซีทำหน้าที่เป็นสื่อกลาง
                    ในการแลกเปลี่ยนมูลค่าผ่านอินเทอร์เน็ตที่ไม่ได้อยู่ภายใต้การควบคุมหรือจัดการโดยหน่วยงานทางการเงินสากลใด ๆ หากแต่จะทำงานอยู่บนระบบที่สามารถควบคุมและ
                    ตรวจสอบตัวมันเองได้ที่เรียกว่า บล็อกเชน (Blockchain)
                  </span>
                </p>
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    บล็อกเชน (Blockchain) เป็นรูปแบบการเก็บข้อมูลแบบหนึ่ง ที่ทำให้ข้อมูลธุรกรรมของแต่ละคนสามารถแชร์ไปยังทุกคนได้ เป็นเสมือนห่วงโซ่ที่ทำให้บล็อก (block) ของข้อมูลเชื่อมต่อไป
                    ยังทุกคนโดยที่ทราบว่าใครเป็นเจ้าของและมีสิทธิในข้อมูลนั้นจริง เมื่อบล็อกของข้อมูลได้ถูกบันทึกไว้ในบล็อกเชนแล้วนั้น จะเป็นเรื่องยากที่จะเข้าไปเปลี่ยนแปลงข้อมูล และเมื่อมีผู้ใดต้องการเพิ่มข้อมูล
                    ทุกคนในเครือข่ายซึ่งมีสำเนาของบล็อกเชน สามารถใช้ขั้นตอนวิธี เพื่อตรวจสอบธุรกรรมที่เข้ามาใหม่ได้ โดยธุรกรรมใหม่นี้จะได้รับอนุญาตให้บันทึกเติมลงบนบล็อกเชนก็ต่อเมื่อเครือข่ายส่วนใหญ่
                    เห็นด้วยว่าธุรกรรมนั้นถูกต้องเท่านั้น
                  </span>
                </p>
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                    ในปัจจุบันนั้นคริปโทเคอร์เรนซีสามารถทำการซื้อขายได้โดยใช้เงินจริง โดยมีราคาซื้อขายแปรผันตามกลไกตลาด ทำให้มีนักลงทุนหลายคนมีความสนใจในการลงทุนด้านคริปโทเคอร์เรนซี
                    อย่างไรก็ตาม เนื่องจากราคาของคริปโทเคอร์เรนซีนั้นมีการเปลี่ยนแปลงอย่างรวดเร็ว เมื่อเทียบกับการเปลี่ยนแปลงของราคาหุ้น และเปลี่ยนแปลงตลอดเวลาไม่มีการปิดตลาด  ทำให้การลงทุน
                    ชนิดนี้เป็นการลงทุนที่มีความเสี่ยงสูงมาก
                  </span>
                </p>
                <p>
                  <span className="ml-[1rem]">
                    หลักสูตรการอบรมระยะสั้นในหัวข้อคริปโทเคอร์เรนซี มีจุดประสงค์เพื่อให้ผู้เรียนเข้าใจหลักการ ความเป็นมา และทฤษฎีต่าง ๆ ที่เกี่ยวข้องกับบล๊อคเชนและคริปโทเคอร์เรนซี สามารถ
                    ประยุกต์ใช้เทคโนโลยีในศาสตร์อื่น ๆ รวมถึงเป็นการเพิ่มทักษะทางการเงิน (financial literacy) ซึ่งเป็นทักษะสำคัญแห่งการเรียนรู้ศตวรรษที่ 21 ให้กับผู้เรียนอีกด้วย
                  </span>
                </p>
              </div>
              <h2 className="mb-5 font-bold">หลักสูตรประกอบด้วยหน่วยย่อย 3 หน่วย ดังต่อไปนี้</h2>
              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">หน่วยย่อยที่ 1 : พื้นฐานของคริปโทเคอร์เรนซี (Cryptocurrency สำหรับนักลงทุนมือใหม่)</li>
                <li className="mb-2">หน่วยย่อยที่ 2 : การพัฒนาโปรแกรมเทรดอัตโนมัติ (Trading script) สำหรับการทำธุรกรรมด้วยคริปโทเคอร์เรนซี (Robot Trading)</li>
                <li className="mb-2">หน่วยย่อยที่ 3 : การวิเคราะห์และจิตวิทยาการลงทุนในคริปโทเคอร์เรนซี (เคล็ดลับการลงทุนคริปโต)</li>
              </ul>
              <br />

              <h2 className="mb-5 font-bold">ชื่อสมรรถนะ : การพัฒนาโปรแกรมเทรดอัตโนมัติและวิเคราะห์การลงทุนในคริปโทเคอร์เรนซี</h2>
              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">ผู้เรียนจะได้ใบรับรองสมรรถนะเมื่อเรียนครบทั้ง 3 หน่วยย่อย และผ่านการประเมิน 70%</li>
                <li className="mb-2">เรียนแบบบรรยายและอบรมเชิงปฏิบัติการ ผ่านระบบ Zoom</li>
              </ul>

              <div className="flex flex-col space-y-2 mt-7 mb-7">
                <div className="px-8 py-0.5 bg-black w-full "></div>
              </div>

              <h2 className="mb-5 text-xl font-bold">ค่าธรรมเนียมการศึกษา</h2>
              <table>
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">ชื่อหลักสูตร</th>
                    <th scope="col" className="px-6 py-3 text-center">นักศึกษามหาวิทยาลัยเชียงใหม่</th>
                    <th scope="col" className="px-6 py-3 text-center">บุคลากร/ศิษย์เก่ามหาวิทยาลัยเชียงใหม่และบุคคลทั่วไป</th>
                    <th scope="col" className="px-6 py-3 text-center">ลิงค์รับสมัคร</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">1.หลักสูตรที่ 1 : พื้นฐานของคริปโทเคอร์เรนซี (Cryptocurrency สำหรับนักลงทุนมือใหม่)</td>
                    <td className="px-6 py-4 text-center">399.- บาท</td>
                    <td className="px-6 py-4 text-center">599.- บาท</td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-01' className='underline'>
                        https://cmu.to/Crypto-01
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">2.หลักสูตรที่ 2 : การพัฒนาโปรแกรมเทรดอัตโนมัติ (Trading script) สำหรับการทำธุรกรรมด้วยคริปโทเคอร์เรนซี (Robot Trading)</td>
                    <td className="px-6 py-4 text-center">1,900.- บาท</td>
                    <td className="px-6 py-4 text-center">1,900.- บาท</td>
                    <td className="px-6 py-4 text-center">
                    <a href='https://cmu.to/Crypto-02' className='underline'>
                        https://cmu.to/Crypto-02
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">3.หลักสูตรที่ 3 : การวิเคราะห์และจิตวิทยาการลงทุนในคริปโทเคอร์เรนซี (เคล็ดลับการลงทุนคริปโต)</td>
                    <td className="px-6 py-4 text-center">1,900.- บาท</td>
                    <td className="px-6 py-4 text-center">1,900.- บาท</td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-03' className='underline'>
                        https://cmu.to/Crypto-03
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">4.หลักสูตรที่ 1+2 : เริ่มซื้อ-ขาย สำหรับนักลงทุนคริปโตมือใหม่</td>
                    <td className="px-6 py-4 text-center">2,299.- บาท</td>
                    <td className="px-6 py-4 text-center">2,299.- บาท<br />(จาก 2,499.- บาท)</td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-04' className='underline'>
                        https://cmu.to/Crypto-04
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">5.หลักสูตรที่ 1+3 : สนามรบนักลงทุนคริปโต</td>
                    <td className="px-6 py-4 text-center">2,299.- บาท</td>
                    <td className="px-6 py-4 text-center">2,299.- บาท<br />(จาก 2,499.- บาท)</td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-05' className='underline'>
                        https://cmu.to/Crypto-05
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-6 py-4">6.หลักสูตรที่ 2+3 : ติดอาวุธนักลงทุนคริปโต</td>
                    <td className="px-6 py-4 text-center">3,400.- บาท<br />(จาก 3,800.- บาท)</td>
                    <td className="px-6 py-4 text-center">3,400.- บาท<br />(จาก 3,800.- บาท)</td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-06' className='underline'>
                        https://cmu.to/Crypto-06
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-6 py-4">7.หลักสูตรที่ 1+2+3 : เส้นทางสู่การเป็นนักลงทุนคริปโตมืออาชีพ</td>
                    <td className="px-6 py-4 text-center">3,400.- บาท<br />(จาก 3,800.- บาท)</td>
                    <td className="px-6 py-4 text-center">3,899.- บาท<br />((จาก 4,399.- บาท)</td>
                    <td className="px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-07' className='underline'>
                        https://cmu.to/Crypto-07
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-10 mb-5">หมายเหตุ :</p>
              <ol className="list-disc pl-6 ml-5">
                <li className="mb-2">ยกเว้นค่าบำรุงมหาวิทยาลัยสำหรับผู้เรียนที่เป็นนักศึกษา ผู้ปฏิบัติงานในมหาวิทยาลัย หรือศิษย์เก่าที่สำเร็จการศึกษาจากมหาวิทยาลัยเชียงใหม่)</li>
                <li className="mb-2">ทุกหลักสูตรเรียนออนไลน์ผ่าน ZOOM</li>
                <li className="mb-2">ผู้เรียนจะได้ใบรับรองสมรรถนะเมื่อผ่านการประเมิน 70%</li>
                <li className="mb-2">จำนวนชั่วโมงและหัวข้อย่อยทุกหลักสูตรอาจมีการปรับเปลี่ยนตามความเหมาะสม</li>
              </ol>

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
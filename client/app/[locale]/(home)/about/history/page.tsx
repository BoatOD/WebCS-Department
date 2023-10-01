'use client'
import React from 'react'
import Banner from '@/components/Banner';
import { sidebarItem } from '@/app/[locale]/(home)/about/sidebarData'
import Image from "next/image";
import Sidebar1 from "@/components/Sidebar1";

type Props = {};

export default function history({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="COMPUTER SCIENCE"
        subtitle="DEPARTMENTAL HISTORY"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          <div className="p-1 pt-3 mt-3">
            <div className="flex max-w-full max-h-full justify-center items-center">
              <Image
                src={"/History.png" ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="History-image"
                className="w-[650px] h-auto object-cover  "
              />
            </div>

            <div className="p-5">
              <br />
              <p>
                <span className="ml-[1rem]">ภาควิชาวิทยาการคอมพิวเตอร์ เริ่มต้นจากการเป็น กระบวนวิชาวิทยาการคอมพิวเตอร์อยู่ภายในภาควิชาคณิตศาสตร์ และเปิดสาขาวิชาวิทยาการคอมพิวเตอร์ ภาควิชาคณิตศาสตร์ เมื่อเดือนกุมภาพันธ์ 2526 ในปีการศึกษา2530 ได้รับการอนุมัติจากทบวงมหาวิทยาลัยให้ดำเนินการเปิดภาควิชาวิทยาการคอมพิวเตอร์ ปัจจุบันภาควิชาได้เปิดหลักสูตรทั้งระดับ ปริญญาตรี โท และ เอก ในระดับ บัณฑิตศึกษาเปิด ทั้งภาคปกติ และภาคพิเศษ ทั้งแผน ก และ แผน ข ได้ผลิตนักศึกษาในระดับปริญญาตรีไปแล้ว กว่า 1000 คน ปริญญาโท กว่า 200 คน เข้าสู่สังคม โดยเป็น เจ้าของกิจการ พนักงานบริษัท อาจารย์ มหาวิทยาลัย ข้าราชการ และ อื่นๆ</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]">ด้านงานวิจัย  คณาจารย์ของภาควิชาได้ผลิตผลงานด้านวิจัยใน หลาย ๆ สาขา เช่น  Theory of computation, Bioinformatics, NLP, Biomedical Engineering, Software Engineering, Networking, Evolutionary Algorithm  เป็นต้น</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]">ด้านบริการวิชาการ  ภาควิชาได้จัดอบรม สัมมนา ประชุมวิชาการ  ต่าง ๆ มากมาย เพื่อถ่ายทอด  แลกเปลี่ยน องค์ความรู้ สู่ชุมชน  ระหว่างนักวิจัย  นักศึกษา  และ นักเรียน  ในปี 2010 ภาควิชาเจ้าภาพจัดการประชุมวิชาการ NCSEC  และการแข่งขันคอมพิวเตอร์โอลิมปิก ระดับชาติครั้งที่ 6</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]"> ด้านความร่วมมือ กับ มหาวิทยาลัยต่าง ๆ ทั้งใน และ ต่างประเทศ  ภาควิชาได้ลงนามบันทึกความจำ กับมหาวิทยาลัยชั้นนำของโลก เช่น University of  Woolongon (ออสเตรเลีย), Armstrong Atlantic State University (อเมริกา),National Chung Cheng University (ไต้หวัน)  เป็นต้น</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]"> บุคลากรของภาควิชา  มุ่งมั่นที่จะพัฒนาภาควิชาให้เป็นภาควิชาชั้น แนวหน้าของประเทศ เพื่อสอดคล้องวิสัยทัศน์ ของภาควิชาวิทยาการคอมพิวเตอร์ที่เป็นภาควิชาที่มุ่งเน้นการผลิตบัณฑิตที่มีคุณภาพ วิจัยที่เป็นเลิศระดับสากล และมีการจัดหาทรัพยากรเพื่อการพัฒนาที่นำไปสู่การพึ่งตนเอง</span>
              </p>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20pc"></div>
              </div>
              <br />


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

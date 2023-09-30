'use client'
import React from 'react'
import Banner from '@/components/Banner';
import { sidebarItem } from '@/app/[locale]/(home)/about/sidebarData'

import Sidebar1 from "@/components/Sidebar1";

type Props = {};

export default function contact({ }: Props) {
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="COMPUTER SCIENCE"
        subtitle="CONTACT"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-2xl px-[1rem] gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first mx-auto">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h2 id="analysis" className="text-2xl font-bold">ที่อยู่</h2>
              <br></br>
              <p>
                ภาควิชาวิทยาการคอมพิวเตอร์ <br></br>
                คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่ <br></br>
                239 ถ. ห้วยแก้ว ต.สุเทพ อ. เมือง จ. เชียงใหม่ 50200
              </p>
              <br></br>
              <h2 id="analysis" className="text-2xl font-bold">หมายเลขโทรศัพท์</h2>
              <br></br>
              <p>
                โทรศัพท์ : 0-5394-3412-16 , 063-080-7969 <br></br>
                ธุรการ : กด 0 หรือ 101 <br></br>
                หลักสูตรปริญญาตรี : กด 103 <br></br>
                หลักสูตรปริญญาโท-เอก : กด 105 <br></br>
                E-mail : compsci@cmu.ac.th <br></br>
                Line ID : cscmu <br></br>
              </p>
              <br></br>
              <h2 id="analysis" className="text-2xl font-bold">Social Media</h2>
              <br></br>
              <ul className="dark:text-white font-medium mb-4">
                <li>
                  <a
                    href="https://www.facebook.com/compscicmu/"
                    className="hover:underline"
                  >
                    <span className="ml-[1rem]">Computer Science CMU</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/cscmuhomecoming/"
                    className="hover:underline"
                  >
                    <span className="ml-[1rem]">Facebook Page ศิษย์เก่า</span>
                  </a>
                </li>
                <li>
                  
                <span className="ml-[1rem]">Location</span>
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.8733917381746!2d98.94994537398075!3d18.803794860463988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a6986a44d33%3A0x26567f48ad5789ee!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04LiX4Lii4Liy4LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmM!5e0!3m2!1sth!2sth!4v1696011869055!5m2!1sth!2sth"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  loading="lazy"
                  ></iframe>
                </li>
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

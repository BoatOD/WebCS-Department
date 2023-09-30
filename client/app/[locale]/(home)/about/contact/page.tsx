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
                  className="hover:underline flex items-center"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 425 512"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="black"
                      strokeWidth="30"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mr-2" 
                    >
                      <path d="M212 50.5q43.5 0 81.75 16.5t66.75 45 45 66.5T422 260t-16.5 81.75-45 66.75-66.75 45T212 470t-81.5-16.5-66.5-45-45-66.75T2.5 260 19 178.5 64 112t66.5-45T212 50.5zm79 91.5h-44.5q-13 0-24 4.5t-19.25 12-12.75 17-4.5 19V221h-39.5v52H186v105h52.5V273h39v-52h-39v-13.5q0-6 4.75-9.5t8.25-3.5H291V142z"/>
                    </svg>
                    Computer Science CMU
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/cscmuhomecoming/"
                  className="hover:underline flex items-center"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 425 512"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="black"
                      strokeWidth="30"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mr-2" 
                    >
                      <path d="M212 50.5q43.5 0 81.75 16.5t66.75 45 45 66.5T422 260t-16.5 81.75-45 66.75-66.75 45T212 470t-81.5-16.5-66.5-45-45-66.75T2.5 260 19 178.5 64 112t66.5-45T212 50.5zm79 91.5h-44.5q-13 0-24 4.5t-19.25 12-12.75 17-4.5 19V221h-39.5v52H186v105h52.5V273h39v-52h-39v-13.5q0-6 4.75-9.5t8.25-3.5H291V142z"/>
                    </svg>
                    Facebook Page ศิษย์เก่า
                  </span>
                </a>
              </li>

              <li>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="black"
                      strokeWidth="30"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mr-2"
                    >
                      <path d="m6 .5c2.48528137 0 4.5 2.01471863 4.5 4.5 0 1.86262254-1.41980393 3.81485295-4.2 5.9-.17777778.1333333-.42222222.1333333-.6 0-2.78019607-2.08514705-4.2-4.03737746-4.2-5.9 0-2.48528137 2.01471863-4.5 4.5-4.5zm0 3c-.82842712 0-1.5.67157288-1.5 1.5s.67157288 1.5 1.5 1.5 1.5-.67157288 1.5-1.5-.67157288-1.5-1.5-1.5z" fill="#212121"/>
                    </svg>
                    Location
                  </span>
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

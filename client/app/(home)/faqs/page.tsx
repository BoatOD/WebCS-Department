'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import FAQsAccordionProps from "@/types/accordion";
import { Accordion } from 'flowbite-react';


export default function FAQs({ }: FAQsAccordionProps) {

  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="COMPUTER SCIENCE"
        subtitle="FAQs"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-2xl px-[1rem] gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first mx-auto">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          <div className='text-2xl text-center font-bold mt-5'>
            how can we help you?
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <Accordion collapseAll className="bg-[#F8A138] bg-opacity-70">
                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    อยากสอบถามว่าหลักสูตรปัจจุบันนี้ สาขาวิทยาการคอมพิวเตอร์ ยังมีวิชาชีววิทยา 1 เคมี 1 ฟิสิกส์ 1 อยู่ไหม
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    ยังเรียนวิชาพื้นฐานเหล่านี้อยู่
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    สาขานี้สายศิลป์ภาษาพอเรียนได้ไหม
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    เรียนได้ หากมีความชอบ และพื้นฐานในด้านนี้ เพราะมีการสอบรอบที่ไม่ได้ระบุสายวิทย์เท่านั้น
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    วิชา Natural Language Processing (NLP) มีเปิดสอนให้กับนักศึกษาคณะอื่นไหม
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    หากผ่านเงื่อนไขกระบวนวิชาที่ต้องผ่านก่อน ก็สามารถเรียนได้
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    ทั้งวิทยาการคอมพิวเตอร์แล้วก็วิศวกรรมซอฟต์แวร์ของ camt สองสาขานี้ต่างกันยังไง แล้ววิทยาการคอมพิวเตอร์เรียนหรือเน้นเรื่องไหนที่ลึกกว่า วิศกรรมซอฟต์แวร์
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    <p>ต่างกันอย่างแรก คือ ค่าเทอมค่ะ</p>
                    <ol className="list-disc pl-6 mt-1">
                      <li className="mb-1">Computer science 18,000</li>
                      <li className="mb-1">Software engineer 40,000</li>
                    </ol>
                    <br />
                    <p>Computer Science</p>
                    <p>
                      <span className="ml-[1rem]">เรียนทั้ง Hardware และ Software เน้น Software ทั้งหน้าบ้านและหลังบ้าน (front end and backend) (จบแล้วทำงานได้กว้างกว่า software engineer)</span>
                    </p>
                    <br />

                    <p>Software engineer</p>
                    <p>
                      <span className="ml-[1rem]">เรียนการทำ software แล้วจะเน้น management กับการทำ software เขียนโปรแกรมเป็น แต่อาจจะไม่ได้ลงลึกตรง technology</span>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    ลูกเข้าเรียนคณะนี้ต้องเตรียมตัวหรือดูรายละเอียดได้จากไหนคะ
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    เว็บไซต์ <a href='https://www.cs.science.cmu.ac.th/' className='underline'>https://www.cs.science.cmu.ac.th/</a>
                    และเฟสบุคแฟนเพจ <a href='https://www.facebook.com/CSCMU.HS.edition' className='underline'>https://www.facebook.com/CSCMU.HS.edition</a>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    <p>มีเรื่องสงสัยเกี่ยวรายวิชาคณิตศาสตร์ที่จะเรียนใน คณะ Com sci มช น่ะครับ อยากถามว่า</p>
                    <ol className="list-decimal pl-6 mt-1">
                      <li className="mb-1">Linear algebra นี้มีสอนให้กับ นักศึกษามั้ยครับผม</li>
                      <li className="mb-1">แล้วก็ถ้าเป็นไปได้ แอดมินสามารถตอบผมได้มั้ยครับว่า รายวิชาคณิตศาสตร์ที่จะต้องเจอตอนเรียนนี้สามารถดูได้ที่ไหน</li>
                    </ol>
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    สามารถดูรายละเอียดกระบวนวิชาที่ต้องเรียนได้ที่ <a href='https://www.cs.science.cmu.ac.th/program/' className='underline'>https://www.cs.science.cmu.ac.th/program/</a>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    ประชาสัมพันธ์เรื่องการฝึกงาน
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    สามารถส่งรายละเอียดมาทางข้อความเพจ หรือทางอีเมล compsci@cmu.ac.th
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    อยู่สายศิลป์คำนวณแล้วผมอยากเรียน com sciecnce สามารถสมัครเข้าเรียนได่ไหม
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    เรียนได้ หากมีความชอบ และพื้นฐานในด้านนี้ เพราะมีการสอบรอบที่ไม่ได้ระบุสายวิทย์เท่านั้น
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    ปกติที่คณะมีค่าย หรือมีจัดอบรมเกี่ยวกับค่ายเขียนโปรแกรมสำหรับเด็กไหม
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    สามารถติดตามกิจกรรมสำหรับนักเรียนที่สนใจด้านคอมพิวเตอร์ได้ที่ เฟสบุคแฟนเพจ <a href='https://www.facebook.com/CSCMU.HS.edition' className='underline'>https://www.facebook.com/CSCMU.HS.edition</a>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    ขอรายละเอียดเกี่ยวกับการย้ายคณะ
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    สามารถติดต่อสอบถามที่เบอร์ 053-943315 เพื่อสอบถามรายละเอียดที่ต้องใช้ในการย้ายคณะค่ะ
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel>
                  <Accordion.Title className="text-black bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                    ขอดูแผนการเรียน
                  </Accordion.Title>
                  <Accordion.Content className="ml-2">
                    สามารถดูรายละเอียดกระบวนวิชาที่ต้องเรียนได้ที่ <a href='https://www.cs.science.cmu.ac.th/program/' className='underline'>https://www.cs.science.cmu.ac.th/program/</a>
                  </Accordion.Content>
                </Accordion.Panel>

              </Accordion>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import data from "@/data/faqs.json"

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const processedData = data.map((item) => {
  const updatedItem = { ...item }; // Create a copy of the item
  updatedItem.answer = findLinksAndWrapInAnchorTags(item.answer); // Process the "answer" field
  return updatedItem;
});

function findLinksAndWrapInAnchorTags(text: string): string {
  // Regular expression to match URLs starting with "http://" or "https://"
  const urlRegex = /https?:\/\/\S+/g;

  // Find all matches in the text
  const matches = text.match(urlRegex);

  if (!matches) {
    // If no matches found, return the original text
    return text;
  }

  // Replace each match with an anchor tag
  const replacedText = text.replace(urlRegex, (match) => {
    return `<a href="${match}" target="_blank" class="underline hover:opacity-80">${match}</a>`;
  });

  return replacedText;
}


type Props = {};

export default function FAQs({ }: Props) {

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

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
          <div className='text-5xl text-center font-bold mt-5'>
            คำถามที่พบบ่อย
          </div>
          {/* <div className='text-lg text-center font-semibold mt-5 flex-row md:flex justify-center'>
            <div className='text-center m-5 border-2 border-[#F29D35] p-5 rounded-full'>
              การสมัครเข้าเรียน
            </div>
            <div className='text-center m-5 border-2 border-[#F29D35] p-5 rounded-full'>
              แผนการเรียน
            </div>
            <div className='text-center m-5 border-2 border-[#F29D35] p-5 rounded-full'>
              การลงทะเบียนเรียน
            </div>
            <div className='text-center m-5 border-2 border-[#F29D35] p-5 rounded-full'>
              คำถามอื่นๆ
            </div>
          </div> */}
          <div className='text-2xl text-center font-bold mt-14'>
            การสมัครเข้าเรียน
          </div>
          <div className='text-lg text-center mt-2'>
            การสมัครเข้าเรียน/เงื่อนไขในการรับสมัคร
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              {processedData.filter(item => item.type === "Degree").map((item, index) => (
                <Accordion key={item.f_id} open={open === item.f_id} className="mb-2 rounded-lg border-[#F29D35] px-4 border-3 " icon={<Icon id={item.f_id} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(item.f_id)}
                    className="border-b-0 transition-colors font-kanit hover:opacity-80 break-words font-normal"
                  >
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody className="p-2 text-base font-normal font-kanit border bg-[#FFEDD6] rounded-lg mb-4 break-words">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>

          <div className='text-2xl text-center font-bold mt-14'>
            แผนการเรียน
          </div>
          <div className='text-lg text-center mt-2'>
            แผนการเรียน/วิชาที่เปิดสอน
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              {processedData.filter(item => (item.type === "Courses") || (item.type === "Curriculum")).map((item, index) => (
                <Accordion key={item.f_id} open={open === item.f_id} className="mb-2 rounded-lg border-[#F29D35] px-4 border-3 " icon={<Icon id={item.f_id} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(item.f_id)}
                    className="border-b-0 transition-colors font-kanit hover:opacity-80 break-words font-normal"
                  >
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody className="p-2 text-base font-normal font-kanit border bg-[#FFEDD6] rounded-lg mb-4 break-words">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>

          <div className='text-2xl text-center font-bold mt-14'>
            การลงทะเบียนเรียน
          </div>
          <div className='text-lg text-center mt-2'>
            การลงเบียนเรียนของมหาวิทยาลัย
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              {processedData.filter(item => item.type === "Enrolled Courses").map((item, index) => (
                <Accordion key={item.f_id} open={open === item.f_id} className="mb-2 rounded-lg border-[#F29D35] px-4 border-3 " icon={<Icon id={item.f_id} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(item.f_id)}
                    className="border-b-0 transition-colors font-kanit hover:opacity-80 break-words font-normal"
                  >
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody className="p-2 text-base font-normal font-kanit border bg-[#FFEDD6] rounded-lg mb-4 break-words">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>

          <div className='text-2xl text-center font-bold mt-14'>
            คำถามอื่นๆ
          </div>
          <div className='text-lg text-center mt-2'>
            คำถามทั่วไป
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              {processedData.filter(item => item.type === "Other").map((item, index) => (
                <Accordion key={item.f_id} open={open === item.f_id} className="mb-2 rounded-lg border-[#F29D35] px-4 border-3 " icon={<Icon id={item.f_id} open={open} />}>
                  <AccordionHeader
                    onClick={() => handleOpen(item.f_id)}
                    className="border-b-0 transition-colors font-kanit hover:opacity-80 break-words font-normal"
                  >
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody className="p-2 text-base font-normal font-kanit border bg-[#FFEDD6] rounded-lg mb-4 break-words">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
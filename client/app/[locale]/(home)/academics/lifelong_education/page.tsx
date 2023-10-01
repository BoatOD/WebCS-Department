'use client'
import React from 'react'
import Banner from '@/components/Banner';
// import './intelligent.css'
import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';
type Props = {}

export default function Lifelong({ }: Props) {
  const l = useTranslations("lifelong");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="LIFELONG EDUCATION"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title158")}</h1>
              <h3 className="text-lg font-bold">{l("title146")}</h3>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2">
                  <a href="/academics/lifelong_education/intelligent" className="hover:underline">{l("title159")}</a>
                </li>
                <li className="mb-2">
                  <a href="/academics/lifelong_education/cryptocurrency" className="hover:underline">{l("title160")}</a>
                </li>
              </ol>
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
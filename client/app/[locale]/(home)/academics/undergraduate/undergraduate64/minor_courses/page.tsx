'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'
import { useTranslations } from 'next-intl';

type Props = {}

export default function Minor({ }: Props) {
  const m = useTranslations("Minor");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="undergraduate 64+"
        subtitle="Minor Courses"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">

              <h1 className="text-2xl font-bold">{m("title0")}</h1>
              <div className="bg-[#FCDCB4] h-full mt-6 mb-6 p-6">
                <ul className='list-disc pl-6 '>
                  <li className='mb-2 font-bold'>{m("title1")}</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">{m("title2")}</li>
                    <li className="mb-2">{m("title3")}</li>
                  </ul>

                  <li className='mb-2 font-bold'>{m("title4")}</li>
                  <ul className='list-none pl-6 '>
                    <li className="mb-2">{m("title5")}</li>
                  </ul>
                </ul>
                <h2>🔗<a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className="font-bold underline hover:text-gray-700">{m("title6")}</a></h2>
              </div>
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

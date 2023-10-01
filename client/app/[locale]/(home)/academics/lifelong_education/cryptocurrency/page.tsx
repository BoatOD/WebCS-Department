'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';


type Props = {}

export default function Cryptocurrency({ }: Props) {
  const l = useTranslations("lifelong");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="LIFELONG EDUCATION"
        subtitle="CRYPTOCURRENCY TRANING COURSE"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title0")}</h1>
              <h3 className="font-bold">
              {l("title1")}
              </h3>
              <div className="bg-[#F2D4B0] h-full m-6 p-6 mr-16">
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                  {l("title2")}
                  </span>
                </p>
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                  {l("title3")}
                  </span>
                </p>
                <p className='mb-2'>
                  <span className="ml-[1rem]">
                  {l("title4")}
                  </span>
                </p>
                <p>
                  <span className="ml-[1rem]">
                  {l("title5")}
                  </span>
                </p>
              </div>
              <h2 className="mb-5 font-bold">{l("title6")}</h2>
              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">{l("title7")}</li>
                <li className="mb-2">{l("title8")}</li>
                <li className="mb-2">{l("title9")}</li>
              </ul>
              <br />

              <h2 className="mb-5 font-bold">{l("title10")}</h2>
              <ul className="list-disc pl-6 ml-5">
                <li className="mb-2">{l("title11")}</li>
                <li className="mb-2">{l("title12")}</li>
              </ul>

              <div className="flex flex-col space-y-2 mt-7 mb-7">
                <div className="px-8 py-0.5 bg-black w-full "></div>
              </div>

              <h2 className="mb-5 text-xl font-bold">{l("title13")}</h2>
              <table>
                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                  <tr>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">{l("title14")}</th>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">{l("title15")}</th>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">{l("title16")}</th>
                    <th scope="col" className="px-1 md:px-6 py-3 text-center">{l("title17")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title144")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title18")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title19")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-01' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title21")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title22")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title22")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-02' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title23")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title22")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title22")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-03' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title24")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title25")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title25")}<br />{l("title26")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-04' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title27")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title25")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title25")}<br />{l("title26")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-05' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-[#F6BA70] border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title28")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title29")}<br />{l("title30")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title29")}<br />{l("title30")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-06' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b text-black">
                    <td className="px-1 md:px-6 py-4">{l("title31")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title29")}<br />{l("title30")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{l("title32")}<br />{l("title33")}</td>
                    <td className="px-1 md:px-6 py-4 text-center">
                      <a href='https://cmu.to/Crypto-07' className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-10 mb-5">{l("title34")}</p>
              <ol className="list-disc pl-6 ml-5">
                <li className="mb-2">{l("title35")}</li>
                <li className="mb-2">{l("title36")}</li>
                <li className="mb-2">{l("title37")}</li>
                <li className="mb-2">{l("title38")}</li>
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
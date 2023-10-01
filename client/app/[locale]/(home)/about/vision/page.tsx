'use client'
import React from 'react'
import Banner from '@/components/Banner';
import { sidebarItem } from '@/app/[locale]/(home)/about/sidebarData'
import Image from "next/image";
import Sidebar1 from "@/components/Sidebar1";
import { useTranslations } from 'next-intl';

type Props = {};

export default function Vision({ }: Props) {
  const some = useTranslations("about");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="COMPUTER SCIENCE"
        subtitle="VISION"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>
          <div className="p-1 pt-3 mt-3">
            <div className="flex max-w-full max-h-full justify-center items-center">
              <Image
                src={"/Vision_new.jpg" ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="vision-image"
                className="w-[650px] h-auto object-cover  "
              />
            </div>

            <div className="p-5">
              <h1 id="analysis" className="text-2xl font-bold">{some("title0")}</h1>
              <br />

              <p>
                <span className="ml-[1rem]">{some("detail0")}</span>
              </p>

              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20pc"></div>
              </div>
              <br />
              <h1 id="obj" className="text-2xl font-bold">{some("title1")}</h1>
              <br />
              <ol className="list-decimal pl-6">
                <li className="mb-2">
                  {some("detail1")}
                </li>
                <li className="mb-2">
                  {some("detail2")}
                </li>
                <li className="mb-2">
                  {some("detail3")}
                </li>
                <li className="mb-2">
                  {some("detail4")}
                </li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
              </div>
              <br />
              <h1 id="quali" className="text-2xl font-bold">{some("title2")}</h1>
              <br />
              <p className='mb-2'>
              {some("detail5")}
              </p>
              <ol className="list-decimal pl-6">
                <li className="mb-2"> {some("detail6")}</li>
                <li className="mb-2"> {some("detail7")}</li>
                <li className="mb-2">  {some("detail8")}</li>
                <li className="mb-2">  {some("detail9")}</li>
                <li className="mb-2"> {some("detail10")}</li>
                <li className="mb-2">  {some("detail11")}</li>
                <li className="mb-2">  {some("detail12")}</li>
              </ol>
              <div className="flex flex-col space-y-1 mt-7">
                <div className="px-8 py-0.5 bg-black w-20px"></div>
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

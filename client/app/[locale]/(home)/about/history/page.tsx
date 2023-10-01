'use client'
import React from 'react'
import Banner from '@/components/Banner';
import { sidebarItem } from '@/app/[locale]/(home)/about/sidebarData'
import Image from "next/image";
import Sidebar1 from "@/components/Sidebar1";
import { useTranslations } from 'next-intl';

type Props = {};

export default function History({ }: Props) {
  const some = useTranslations("about");
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
                <span className="ml-[1rem]">{some("detail13")}</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]">{some("detail14")}</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]">{some("detail15")}</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]">{some("detail16")}</span>
              </p>
              <br />
              <p>
                <span className="ml-[1rem]">{some("detail17")}</span>
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

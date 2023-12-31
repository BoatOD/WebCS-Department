'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';
import Image from "next/image";

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";
import { useLocale } from 'next-intl';


type Props = {}

export default function Staffs({ }: Props) {
  const sidebarItem: SidebarProps[] = [
    {
      content: "PEOPLE",
      type: "header",
      href: "/people/staffs",
    },
    {
      content: "Lecturers",
      href: "/people/lecturers",
      type: "singleItem",
    },
    {
      content: "Staffs",
      href: "/people/staffs",
      type: "singleItem",
    },
  ];

  interface Lecturer {
    _id: string;
    picture: string;
    affiliation: string;
    title: string;
    name: string;
    e_title: string;
    e_name: string;
    tel: string[];
    email: string[];
    position: string[];
    e_position: string[];
    e_affiliation: string;
    job_type: string;
    e_id: number;
    personal_web: string;
  }


  const [data, setData] = useState<Lecturer[]>([]);
  const locale = useLocale();
  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/staffs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
    
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="PEOPLE"
        subtitle="STAFFS"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>

          <div className="p-1 pt-3 ">
            {data.map((item) => (
              <div key={item._id} className="max-w-md mx-auto  overflow-hidden md:max-w-2xl m-10 ">
                <div className="md:flex">
                  <div className="md:shrink-0 md:justify-center sm:mr-5">
                    <Image
                      src={`${item.picture}`}
                      width="0"
                      height="0"
                      sizes="100vm"
                      alt=""
                      className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                    />
                  </div>
                  <div className=" pt-1 md:text-left">
                    {locale === "en" ?(
                      <p className="block mt-1 text-sm md:text-lg leading-tight font-semibold text-slate-700 ">
                      {item.e_title}{item.e_name} </p>
                    ):(
                      <p className="block mt-1 text-sm md:text-lg leading-tight font-semibold text-slate-700 ">
                      {item.title}{item.name} </p>
                    )}
                    {locale === "en" ?(
                       <p className="block mt-1 text-sm md:text-lg leading-tight font-semibold text-slate-700 pb-2">
                       {item.e_position.join(' ')} </p>
                    ):(
                      <p className="block mt-1 text-sm md:text-lg leading-tight font-semibold text-slate-700 pb-2">
                      {item.position.join(' ')} </p>
                    )}
                    
                   
                    <ul className='list-none text-slate-600 mt-3 mb-4 text-base font-normal'>
                      {item.tel.map((tel, index) => (
                        <li key={`tel-${index}`}>Tel: {tel}</li>
                      ))}
                      {item.email.length > 0 && (
                        <li>
                          Email: {item.email.map((email, index) => (
                            <span key={`email-${index}`}>
                              {index > 0 && ', '}{email}
                            </span>
                          ))}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

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
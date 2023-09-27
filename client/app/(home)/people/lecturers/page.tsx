'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';
import Image from "next/image";

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";

require('dotenv').config();
type Props = {};

export default function Lecturer({ }: Props) {
  const sidebarItem: SidebarProps[] = [
    {
      content: "PEOPLE",
      type: "header",
      href: "/people/lecturer",
    },
    {
      content: "Lecturers",
      href: "/people/lecturers",
      type: "singleItem",
    },
    {
      content: "Staff",
      href: "/people/staff",
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
    research_interest: string;
  }

  const [data, setData] = useState<Lecturer[]>([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/lecturers")
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
        subtitle="LECTURERS"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>

          <div className="p-1 pt-3 ">
            {data.map((item) => (
              <div key={item._id} className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <Image
                      src={`/personal/lecturers${item.picture}`}
                      width="0"
                      height="0"
                      sizes="100vm"
                      alt=""
                      className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                    />
                  </div>
                  <div className="pl-8 pr-8 pt-1 text-center md:text-left">
                    <a
                      href={item.personal_web}
                      className="block mt-1 text-xl leading-tight font-semibold text-slate-700 "
                    >
                      {item.affiliation} {item.title}
                      {item.name} {item.position.join(" ")}
                    </a>
                    <ul className="list-none text-slate-600 mt-3 mb-4 text-base font-normal">
                      <li>
                        {item.e_affiliation} {item.e_title}
                        {item.e_name}
                      </li>
                      {item.tel.map((tel, index) => (
                        <li key={`tel-${index}`}>Tel: {tel}</li>
                      ))}
                      {item.email.length > 0 && (
                        <li>
                          Email:{" "}
                          {item.email.map((email, index) => (
                            <span key={`email-${index}`}>
                              {index > 0 && ", "}
                              {email}
                            </span>
                          ))}
                        </li>
                      )}
                      <li>Research Interests: {item.research_interest}</li>
                    </ul>
                    {item.personal_web === "" ? (
                      <></>
                    ) : (
                      <>
                        <a
                          href={item.personal_web} target='_blank'
                          className="inline-block mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2 pt-2  hover:text-slate-500"
                        >
                          Personal Website
                        </a>
                      </>
                    )}
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
  );
}

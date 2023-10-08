'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';
import Image from 'next/image';

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";
import { useLocale, useTranslations } from 'next-intl';

type Props = {}

interface ResearchArticle {
    _id: string;
    e_topic: string;
    topic: string;
    description: string;
    e_description: string;
    researchers: {
        e_name: string;
        personal_web: string;
    }[];
    r_id: number;
    picture: string;
}

export default function Research({ }: Props) {

    const [data, setData] = useState<ResearchArticle[]>([]);
    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        fetch("https://cs-project-ime1.vercel.app/api/research")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);
    const r = useTranslations("Research");
    const locale = useLocale();
    const sidebarItem: SidebarProps[] = [
        {
            content: "RESEARCH",
            type: "header",
            href: "/people/lecturer",
        },
    ];

    for (const item of data) {

        sidebarItem.push({

            content: item.topic,
            href: `#${item._id}`,
            type: "singleItem",
        });


    }

    return (
        <>
            <Banner
                imageSrc="/all_page_banner.png" // Adjust the image path for this page
                altText="Image Alt Text"
                title="COMPUTER SCIENCE"
                subtitle="RESEARCH"
            />
            <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-2xl px-[1rem] gap-[3rem]">
                <div className="w-full md:w-2/3 order-last md:order-first mx-auto">
                    <div className="flex flex-col space-y-2 mt-20">
                        <div className="px-8 py-0.5 bg-black w-20pc"></div>
                    </div>
                    {data.map((item) => (
                        <div key={item._id} id={`${item._id}`} className="mx-auto m-10 border-[#F29D35] border-l-[16px] border-1 p-5 md:mr-5">
                            <div className="md:flex">
                                <div className="pt-1 w-full text-left break-keep">
                                    {locale === "en" ? (
                                        <div className="text-2xl font-medium">{item.e_topic}</div>
                                    ) : (
                                        <div className="text-2xl font-medium">{item.topic}</div>
                                    )}

                                    <div className="font-[450] mt-4">{r("title1")}&nbsp;
                                        {item.researchers.length === 1 ? (
                                            <a
                                                href={item.researchers[0].personal_web}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-gray-700 underline cursor-pointer"
                                            >
                                                {item.researchers[0].e_name}
                                            </a>
                                        ) : (
                                            <span>
                                                {item.researchers.map((researcher, index) => (
                                                    <span key={index}>
                                                        <a
                                                            href={researcher.personal_web}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-gray-700 underline cursor-pointer"
                                                        >
                                                            {researcher.e_name}
                                                        </a>
                                                        {index < item.researchers.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </span>
                                        )}
                                    </div>
                                    {locale === "en" ? (
                                        <div className="mt-4">{item.e_description}</div>
                                    ) : (
                                        <div className="mt-4">{item.description}</div>
                                    )}

                                </div>
                                <div className="md:shrink-0 flex justify-center items-center mt-5 md:ml-5 md:mt-0">
                                    <Image
                                        src={`/research${item.picture}`}
                                        width="250"
                                        height="0"
                                        sizes="100vm"
                                        alt=""
                                        className="object-cover h-52"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
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
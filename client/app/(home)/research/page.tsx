'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import ResearchAccordion from "@/components/research/Accordion";
import { ResearchAccordionProps } from "@/types/accordion";

type Props = {}

export default function Research({ }: Props) {

    const [data, setData] = useState<ResearchAccordionProps[]>([]);
    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        fetch('http://cs-project.onrender.com/api/research')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

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
                    <div className="p-1 pt-3 ">
                        <div className="p-5">
                            <ResearchAccordion data={data}></ResearchAccordion>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
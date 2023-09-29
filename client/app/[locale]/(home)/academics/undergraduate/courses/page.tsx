'use client'
import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'

// require('dotenv').config();
type Props = {}

export default function Elective({ }: Props) {

    interface Courses {
        _id: string;
        code: string;
        credit: string;
        cu_no: number[];
        e_name: string;
        e_overview: string;
        e_type: string;
        name: string;
        overview: string;
        prereg: string;
        type: string;
        sup_type: string;
    }

    const [data, setData] = useState<Courses[]>([]);

    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        fetch("https://cs-project-ime1.vercel.app/api/courses")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Banner
                imageSrc="/all_page_banner.png" // Adjust the image path for this page
                altText="Image Alt Text"
                title="undergraduate"
                subtitle="courses"
            />
            <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] overflow-x-auto">
                <div className="w-full md:w-2/3 order-last md:order-first ">
                    <div className="flex flex-col space-y-2 mt-20">
                        <div className="px-8 py-0.5 bg-black w-full "></div>
                    </div>
                    <div className="p-1 pt-3 ">
                        <div className="p-5">

                            <h1 className="text-2xl font-bold text-center">Bachelor&apos;s degree courses</h1>
                            <div className='bg-[#F4C07F] h-full  mt-6 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/201110/doku.php' target='_blank'>
                                            201110 Integrated Math SC
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://cmu.to/cs100current' target='_blank'>
                                            204100 IT And Modern Life
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204101/doku.php' target='_blank'>
                                            204101 Introduction to Computer
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204101_ENG/' target='_blank'>
                                            204101 Introduction to Computer (INTER)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204111/doku.php' target='_blank'>
                                            204111 Fundamentals of Programming
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204112/doku.php' target='_blank'>
                                            204112 Structured Programming
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204113/' target='_blank'>
                                            204113 Principles of Computing
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204123/' target='_blank'>
                                            204123 Introduction to Data Science
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-[#857D7D] border-2 my-10"></div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204202/doku.php' target='_blank'>
                                            204202 Information Technology II
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204211' target='_blank'>
                                            204211 Object-Oriented Programming
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204216/doku.php' target='_blank'>
                                            204216 C Programming
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204217/doku.php?id=start' target='_blank'>
                                            204217 Comp Prog Languages
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204219' target='_blank'>
                                            204219 Java Programming
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204222/doku.php' target='_blank'>
                                            204222 Fundamentals of Database Systems
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/staff/chumphol/204231/' target='_blank'>
                                            204231 Computer Organization and Architecture
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204232/doku.php' target='_blank'>
                                            204232 Computer Networks and Protocols
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204251/doku.php' target='_blank'>
                                            204251 Data Structures
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204251_ENG/doku.php' target='_blank'>
                                            204251 Data Structures (701)
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-[#857D7D] border-2 my-10"></div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204320/doku.php' target='_blank'>
                                            204320 Database Management
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204321/doku.php' target='_blank'>
                                            204321 Database System I
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204335/doku.php' target='_blank'>
                                            204335 Microcontroller and Internet of Things
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204341/' target='_blank'>
                                            204341 Operating System
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204355/doku.php' target='_blank'>
                                            204355 Competitive Programming
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204362/doku.php' target='_blank'>
                                            204362 Object-Oriented Design
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/staff/churee/CS365/index-365.php' target='_blank'>
                                            204365 Human-Computer Interaction
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#F4C07F] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204371/' target='_blank'>
                                            204371 Feature Engineering
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-[#857D7D] border-2 my-10"></div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='http://www2.cs.science.cmu.ac.th/courses/204422' target='_blank'>
                                            204422 Data Warehousing
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204426/doku.php' target='_blank'>
                                            204426 Data Engineering
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204432/doku.php' target='_blank'>
                                            204432 Comp Net Design and Management
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/courses/204451' target='_blank'>
                                            204451 Algorithm Design and Analysis
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/staff/chumphol/204453/' target='_blank'>
                                            204453 Pattern Recognition
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='https://www2.cs.science.cmu.ac.th/staff/jakramate/courses/2019/cs456/ml.html' target='_blank'>
                                            204456 Machine Learning
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='http://www2.cs.science.cmu.ac.th/courses/204482' target='_blank'>
                                            204482 Simulation and Modelling
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-[#FCDCB4] h-full  mt-2 mb-2 p-6 pt-4 pb-4 rounded-xl'>
                                <ul className='list-disc ml-4 underline'>
                                    <li>
                                        <a className='hover:text-gray-700' href='http://www2.cs.science.cmu.ac.th/courses/204490' target='_blank'>
                                            204490 Research in Computer Science
                                        </a>
                                    </li>
                                </ul>
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

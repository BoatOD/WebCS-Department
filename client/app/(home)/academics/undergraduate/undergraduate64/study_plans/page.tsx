"use client";
import React, { useEffect, useState } from 'react'
import Banner from "@/components/Banner";

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";

import Tooltip from '@/components/Tooltip';

type Props = {};

export default function undergraduate({ }: Props) {
    const sidebarItem: SidebarProps[] = [
        {
            content: "UNDERGRADUATE PROGRAMS",
            type: "header",
            href: "/academics/undergraduate",
        },
        {
            content: "Couses",
            href: "/academics/undergraduate/couses",
            type: "singleItem",
        },
        {
            content: "Undergraduate 64+",
            type: "multiItem",
            SidebarOption: [
                {
                    title: "Study Plan",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Required Courses",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Core Courses",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Elective Courses",
                    type: "Have",
                    SideBarSubOption: [
                        {
                            title: "Free Elective Courses",
                            href: "#",
                        },
                        {
                            title: "GE Elective Courses",
                            href: "#",
                        },
                        {
                            title: "Major Elective Courses",
                            href: "#",
                        },
                    ],
                },
                {
                    title: "Compulsory Courses",
                    type: "Have",
                    SideBarSubOption: [
                        {
                            title: "Organization Issues and Information System",
                            href: "#",
                        },
                        {
                            title: "Technology for Application",
                            href: "#",
                        },
                        {
                            title: "Technology and System Methodology",
                            href: "#",
                        },
                        {
                            title: "System of Fundamental Structure",
                            href: "#",
                        },
                        {
                            title: "Hardware and Computer Architecture",
                            href: "#",
                        },
                    ],
                },
                {
                    title: "Plan-Specific Compulsory Courses",
                    type: "Have",
                    SideBarSubOption: [
                        {
                            title: "Regular Plan",
                            href: "#",
                        },
                        {
                            title: "Co-Operative Education Plan",
                            href: "#",
                        },
                        {
                            title: "Honors Plan",
                            href: "#",
                        },
                    ],
                },
            ],
        },
        {
            content: "Undergraduate 59(63)",
            type: "multiItem",
            SidebarOption: [
                {
                    title: "Study Plan",
                    href: "#",
                },
                {
                    title: "Required Courses",
                    href: "#",
                },
                {
                    title: "Core Courses",
                    href: "#",
                },
                {
                    title: "Elective Courses",
                    type: "Have",
                    SideBarSubOption: [
                        {
                            title: "Free Elective Courses",
                            href: "#",
                        },
                        {
                            title: "GE Elective Courses",
                            href: "#",
                        },
                        {
                            title: "Major Elective Courses",
                            href: "#",
                        },
                    ],
                },
                {
                    title: "Compulsory Courses",
                    type: "Have",
                    SideBarSubOption: [
                        {
                            title: "Organization Issues and Information System",
                            href: "#",
                        },
                        {
                            title: "Technology for Application",
                            href: "#",
                        },
                        {
                            title: "Technology and System Methodology",
                            href: "#",
                        },
                        {
                            title: "System of Fundamental Structure",
                            href: "#",
                        },
                        {
                            title: "Hardware and Computer Architecture",
                            href: "#",
                        },
                    ],
                },
                {
                    title: "Plan-Specific Compulsory Courses",
                    type: "Have",
                    SideBarSubOption: [
                        {
                            title: "Regular Plan",
                            href: "#",
                        },
                        {
                            title: "Co-Operative Education Plan",
                            href: "#",
                        },
                        {
                            title: "Honors Plan",
                            href: "#",
                        },
                    ],
                },
            ],
        },
        {
            content: "Student portal",
            type: "multiItem",
            SidebarOption: [
                {
                    title: "Score Report",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Assignment Submission",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Student Research",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Phone Number",
                    href: "#",
                    type: "NotHave",
                },
                {
                    title: "Line Chat Bot",
                    href: "#",
                    type: "NotHave",
                },
            ],
        },
    ];

    interface Course {
        _id: string;
        code: string;
        credit: string;
        e_name: string;
        name: string;
        overview: string;
        prereg: string;
    }

    interface Study_plans {
        _id: string;
        cu_no: number;
        year: number;
        semester_1: Course[];
        semester_2: Course[];
    }

    const [data, setData] = useState<Study_plans[]>([]);

    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        fetch('http://localhost:8080/api/study_plan')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const filteredData = data.filter((item) => item.year === 1 && item.cu_no === 1);

    return (
        <>
            <Banner
                imageSrc="/all_page_banner.png" // Adjust the image path for this page
                altText="Image Alt Text"
                title="ACADEMIC"
                subtitle="UNDERGRADUATE"
            />
            <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
                <div className="w-full md:w-2/3 order-last md:order-first ">
                    <div className="flex flex-col space-y-2 mt-20">
                        <div className="px-8 py-0.5 bg-black w-full "></div>
                    </div>
                    <div className="p-1 pt-3 ">
                        <div className="p-5">
                            <h1 className='text-2xl font-bold mb-4'>ชั้นปีที่ 1</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((studyPlan) =>
                                        studyPlan.semester_1.map((course) => (
                                            <tr key={course._id} className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-2 py-4 font-medium text-center border-solid border-[#EFB770] border-1"
                                                >
                                                    {course.code}
                                                    {course.overview ? (
                                                        <Tooltip position="right" header={course.name} prereq={course.prereg} credit={course.credit} content={course.overview}>
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1">
                                                    {course.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1">
                                                    {course.credit.split('(')[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((studyPlan) =>
                                        studyPlan.semester_2.map((course) => (
                                            <tr key={course._id} className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-2 py-4 font-medium text-center border-solid border-[#EFB770] border-1"
                                                >
                                                    {course.code}
                                                    {course.overview ? (
                                                        <Tooltip position="right" header={course.name} prereq={course.prereg} credit={course.credit} content={course.overview}>
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1">
                                                    {course.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1">
                                                    {course.credit.split('(')[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>
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
    );
}

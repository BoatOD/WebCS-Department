"use client";
import React, { useEffect, useState } from 'react'
import Banner from "@/components/Banner";

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'

import Tooltip from '@/components/Tooltip';

type Props = {};

export default function Study_Plans({ }: Props) {

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
                title="Elective Courses"
                subtitle="Major Elective Courses"
            />
            <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
                <div className="w-full md:w-2/3 order-last md:order-first ">
                    <div className="flex flex-col space-y-2 mt-20">
                        <div className="px-8 py-0.5 bg-black w-full "></div>
                    </div>
                    <div className="p-1 pt-3 ">
                        <div className="p-5">
                            <h1 className='text-2xl font-bold mb-4'>รายชื่อวิชาเอกเลือก (Major Elective Courses)</h1>
                            <h2 className='text-2xl mb-4'>วิชาระดับ 300</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-center">
                                            รหัสวิชา
                                        </th>

                                        <th scope="col" className="px-3 md:px-6 py-3 text-center">
                                            ชื่อวิชา
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data
                                        .filter((courses) => {
                                            // Check if the course code contains "3" in the hundreds place
                                            const courseCode = String(courses.code);
                                            const contains3InHundredsPlace = courseCode.length >= 3 && courseCode[courseCode.length - 3] === "3";

                                            return (
                                                ((typeof courses.e_type === "string" && courses.e_type === "Major Elective Courses") ||
                                                    (Array.isArray(courses.e_type) && courses.e_type.includes("Major Elective Courses"))) &&
                                                (Array.isArray(courses.cu_no) && courses.cu_no.some((cu) => cu === 1 || cu === 2 || cu === 3)) &&
                                                contains3InHundredsPlace
                                            );
                                        }).sort((a, b) => {
                                            // Compare the code values as numbers in ascending order
                                            return parseInt(a.code, 10) - parseInt(b.code, 10);
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >

                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.e_name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>{courses.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{courses.e_name}</p>
                                                    <p>{courses.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))}

                                </tbody>
                            </table>

                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-2xl mb-4' id='400'>วิชาระดับ 400</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 text-center">
                                            รหัสวิชา
                                        </th>

                                        <th scope="col" className="px-3 md:px-6 text-center">
                                            ชื่อวิชา
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data
                                        .filter((courses) => {
                                            // Check if the course code contains "3" in the hundreds place
                                            const courseCode = String(courses.code);
                                            const contains3InHundredsPlace = courseCode.length >= 3 && courseCode[courseCode.length - 3] === "4";

                                            return (
                                                ((typeof courses.e_type === "string" && courses.e_type === "Major Elective Courses") ||
                                                    (Array.isArray(courses.e_type) && courses.e_type.includes("Major Elective Courses"))) &&
                                                (Array.isArray(courses.cu_no) && courses.cu_no.some((cu) => cu === 1 || cu === 2 || cu === 3)) &&
                                                contains3InHundredsPlace
                                            );
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >

                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.e_name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>{courses.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{courses.e_name}</p>
                                                    <p>{courses.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))}

                                </tbody>
                            </table>

                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-2xl mb-4' id='700'>วิชาระดับ 700 (สำหรับแผนก้าวหน้า)</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 text-center">
                                            รหัสวิชา
                                        </th>

                                        <th scope="col" className="px-3 md:px-6 text-center">
                                            ชื่อวิชา
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data
                                        .filter((courses) => {
                                            // Check if the course code contains "3" in the hundreds place
                                            const courseCode = String(courses.code);
                                            const contains3InHundredsPlace = courseCode.length >= 3 && courseCode[courseCode.length - 3] === "7";

                                            return (
                                                ((typeof courses.e_type === "string" && courses.e_type === "Major Elective Courses") ||
                                                    (Array.isArray(courses.e_type) && courses.e_type.includes("Major Elective Courses"))) &&
                                                (Array.isArray(courses.cu_no) && courses.cu_no.some((cu) => cu === 1 || cu === 2 || cu === 3)) &&
                                                contains3InHundredsPlace
                                            );
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >

                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.e_name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>{courses.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{courses.e_name}</p>
                                                    <p>{courses.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))}

                                </tbody>
                            </table>
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

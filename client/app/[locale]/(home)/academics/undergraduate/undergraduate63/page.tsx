"use client";
import React, { useEffect, useState } from 'react'
import Banner from "@/components/Banner";

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'

import Tooltip from '@/components/Tooltip';
import { useTranslations } from 'next-intl';

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

    interface Study_plans {
        _id: string;
        cu_no: number;
        year: number;
        semester_1: Courses[];
        semester_2: Courses[];
    }

    const [data, setData] = useState<Study_plans[]>([]);
    const [courses, setCourses] = useState<Courses[]>([]);

    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        fetch('https://cs-project-ime1.vercel.app/api/courses')
            .then((response) => response.json())
            .then((courses) => {
                setCourses(courses);

                return fetch("https://cs-project-ime1.vercel.app/api/study_plan");
            })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const u = useTranslations("Undergraduate63")
    const filteredData_1 = data.filter((item) => item.year === 1 && item.cu_no === 4);
    const filteredData_2 = data.filter((item) => item.year === 2 && item.cu_no === 4);
    const filteredData_3 = data.filter((item) => item.year === 3 && item.cu_no === 4);
    const filteredData_4 = data.filter((item) => item.year === 4 && item.cu_no === 4);

    const filteredData_3_2 = data.filter((item) => item.year === 3 && item.cu_no === 5);
    const filteredData_4_2 = data.filter((item) => item.year === 4 && item.cu_no === 5);

    return (
        <>
            <Banner
                imageSrc="/all_page_banner.png" // Adjust the image path for this page
                altText="Image Alt Text"
                title="ACADEMIC"
                subtitle="undergraduate 59 (63)"
            />
            <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
                <div className="w-full md:w-2/3 order-last md:order-first ">
                    <div className="flex flex-col space-y-2 mt-20">
                        <div className="px-8 py-0.5 bg-black w-full "></div>
                    </div>
                    <div className="p-1 pt-3 ">
                        <div className="p-5">
                            <h1 className='text-3xl font-bold mb-4'>{u("title0")}</h1>
                            <p><span className='font-bold'>{u("title1")}</span>{u("title3")}</p>
                            <p><span className='font-bold'>{u("title2")}</span>{u("title4")}</p>
                            <p><span className='font-bold'>{u("title2")} </span> {u("title5")}</p>
                            <h2 className='text-2xl font-bold my-4'>{u("title6")}</h2>
                            <p><a href='https://www2.cs.science.cmu.ac.th/Curriculum/g63/lib/exe/fetch.php?media=couseoutline.pdf' target='_blank' className='underline hover:text-gray-700'>{u("title81")}</a></p>
                            <p><a href='https://www2.cs.science.cmu.ac.th/Curriculum/g63/lib/exe/fetch.php?media=prerequisitey59majorjan63upd.pdf' target='_blank' className='underline hover:text-gray-700'>{u("title82")}</a></p>
                            <p><a href='https://www2.cs.science.cmu.ac.th/Curriculum/g63/lib/exe/fetch.php?media=minor_updjuly63.pdf' target='_blank' className='underline hover:text-gray-700'>{u("title83")}</a></p>
                            <h1 className='text-3xl font-bold mb-4 mt-6'>{u("title7")}</h1>
                            <ul className="list-disc pl-6 ml-5">
                                <li className="mb-2">{u("title8")}</li>
                                <li className="mb-2">{u("title9")}</li>
                            </ul>
                            <h1 className='text-3xl font-bold mb-4 mt-6'>{u("title10")}</h1>
                            <h2 className='text-lg mb-4 font-bold'>{u("title11")}</h2>

                            <p className='mb-2' id='rc'>{u("title12")}</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                        {u("title13")} <br /> {u("title14")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title15")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "Required Courses" && courses.sup_type === "Learner Person")
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                        {u("title16")} <br /> {u("title17")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title18")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "Required Courses" && courses.sup_type === "Innovative Co-creator")
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                        {u("title19")}<br /> {u("title20")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title21")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "Required Courses" && courses.sup_type === "Active Citizen")
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <p className='mb-2' id='ge'>{u("title22")}</p>
                            <p className='ml-2 text-[#FF0000]'>ให้นักศึกษาเลือกเรียนกระบวนวิชาจากทั้ง 3 กลุ่มเพิ่มเติมอีก 6 หน่วยกิต จากกระบวนวิชาต่อไปนี้</p>
                            <p className='mb-2 ml-2 text-[#FF0000]'>A student also chooses at least 6 credits from these 3 groups of GE courses.</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={3}>
                                        {u("title23")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Learner Person")
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={3}>
                                        {u("title24")} <br /> {u("title25")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Innovative Co-creator")
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={3}>
                                        {u("title26")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "GE Electives Courses" && courses.sup_type === "Active Citizen")
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <h2 className='text-lg mb-4 font-bold'>{u("title27")}</h2>
                            <p className='mb-2'>{u("title28")}</p>
                            <p className='mb-2'>{u("title29")}</p>
                            <h3 className='font-bold mb-2 mt-4' id='cc'>{u("title30")}</h3>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                        {u("title31")}
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                        {u("title32")}
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                        {u("title33")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => (
                                        ((typeof courses.e_type === "string" && courses.e_type === "Core Courses") ||
                                            (Array.isArray(courses.e_type) && courses.e_type.includes("Core Courses"))) &&
                                        (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 4 || cu === 5)) &&
                                        courses.code !== "204111"
                                    ))
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <h3 className='font-bold mb-2 mt-4' >{u("title34")}</h3>
                            <p className='mb-2'>{u("title35")}</p>
                            <p className='mb-2'>{u("title36")}</p>
                            <p className='mb-6 text-[#FF0000]'>{u("title37")}</p>

                            <p className='mb-2 font-bold'>{u("title38")}</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                        {u("title31")}
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                        {u("title32")}
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                        {u("title33")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#FCDCB4] text-black uppercase font-bold" id='oi'>
                                        <th
                                            scope="row"
                                            className="px-4 py-4 text-left border-solid border-[#EFB770] border-1 w-1/5"
                                            colSpan={3}
                                        >
                                            {u("title39")}
                                        </th>
                                    </tr>
                                    {courses.filter(courses => courses.sup_type && courses.sup_type["59"] === "Organization Issues and Information System")
                                        .sort((a, b) => {
                                            // Compare the code values as numbers in ascending order
                                            return parseInt(a.code, 10) - parseInt(b.code, 10);
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`bg-[#FFEDD6] text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}

                                    <tr className="bg-[#FCDCB4] text-black uppercase font-bold" id='ta'>
                                        <th
                                            scope="row"
                                            className="px-4 py-4 text-left border-solid border-[#EFB770] border-1 w-1/5"
                                            colSpan={3}
                                        >
                                            {u("title40")}
                                        </th>
                                    </tr>
                                    {courses.filter(courses => courses.sup_type && courses.sup_type["59"] === "Technology for Application")
                                        .sort((a, b) => {
                                            // Compare the code values as numbers in ascending order
                                            return parseInt(a.code, 10) - parseInt(b.code, 10);
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`bg-[#FFEDD6] text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}

                                    <tr className="bg-[#FCDCB4] text-black uppercase font-bold" id='ts'>
                                        <th
                                            scope="row"
                                            className="px-4 py-4 text-left border-solid border-[#EFB770] border-1 w-1/5"
                                            colSpan={3}
                                        >
                                            {u("title41")}
                                        </th>
                                    </tr>
                                    {courses.filter(courses => courses.sup_type && courses.sup_type["59"] === "Technology and System Methodology")
                                        .sort((a, b) => {
                                            // Compare the code values as numbers in ascending order
                                            return parseInt(a.code, 10) - parseInt(b.code, 10);
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`bg-[#FFEDD6] text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}

                                    <tr className="bg-[#FCDCB4] text-black uppercase font-bold" id='sf'>
                                        <th
                                            scope="row"
                                            className="px-4 py-4 text-left border-solid border-[#EFB770] border-1 w-1/5"
                                            colSpan={3}
                                        >
                                            {u("title41")}
                                        </th>
                                    </tr>
                                    {courses.filter(courses => courses.sup_type && courses.sup_type["59"] === "System of Fundamental Structure")
                                        .sort((a, b) => {
                                            // Compare the code values as numbers in ascending order
                                            return parseInt(a.code, 10) - parseInt(b.code, 10);
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`bg-[#FFEDD6] text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}

                                    <tr className="bg-[#FCDCB4] text-black uppercase font-bold" id='hc'>
                                        <th
                                            scope="row"
                                            className="px-4 py-4 text-left border-solid border-[#EFB770] border-1 w-1/5"
                                            colSpan={3}
                                        >
                                            {u("title42")}
                                        </th>
                                    </tr>
                                    {courses.filter(courses => courses.sup_type && courses.sup_type["59"] === "Hardware and Computer Architecture")
                                        .sort((a, b) => {
                                            // Compare the code values as numbers in ascending order
                                            return parseInt(a.code, 10) - parseInt(b.code, 10);
                                        })
                                        .map((courses, index) => (
                                            <tr
                                                key={courses._id}
                                                className={`bg-[#FFEDD6] text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {courses.code}
                                                    {courses.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={courses.name}
                                                            prereq={courses.prereg}
                                                            credit={courses.credit}
                                                            content={courses.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {courses.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {courses.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        )
                                        )}
                                </tbody>
                            </table>

                            <><p className='mb-2 mt-6 font-bold'>{u("title43")}</p><p className='mb-2' id='rp'>{u("title44")}</p><table className="w-full mb-14">
                                    <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                {u("title31")}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                {u("title32")}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                {u("title33")}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                                            (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 4)))
                                            .map((courses, index) => (
                                                <tr
                                                    key={courses._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {courses.code}
                                                        {courses.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={courses.name}
                                                                prereq={courses.prereg}
                                                                credit={courses.credit}
                                                                content={courses.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {courses.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {courses.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            )
                                            )}
                                    </tbody>
                                </table><p className='mb-2' id='co'>{u("title45")}</p><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    {u("title31")}
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    {u("title32")}
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    {u("title33")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                                                (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 5)))
                                                .map((courses, index) => (
                                                    <tr
                                                        key={courses._id}
                                                        className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                    >
                                                        <th
                                                            scope="row"
                                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                        >
                                                            {courses.code}
                                                            {courses.overview ? (
                                                                <Tooltip
                                                                    position="right"
                                                                    header={courses.name}
                                                                    prereq={courses.prereg}
                                                                    credit={courses.credit}
                                                                    content={courses.overview}
                                                                >
                                                                    <a>Tooltip Trigger</a>
                                                                </Tooltip>
                                                            ) : (
                                                                <a>No Tooltip</a>
                                                            )}
                                                        </th>
                                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                            {courses.name}
                                                        </td>
                                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                            {courses.credit.split("(")[0]}
                                                        </td>
                                                    </tr>
                                                )
                                                )}
                                        </tbody>
                                    </table><p className='mb-2 mt-6 font-bold' id='me'>{u("title46")}</p><p className='mb-2'>{u("title47")}</p><ul className="list-disc pl-6 ml-5">
                                        <li className="mb-2 text-[#FF0000]">{u("title48")}</li>
                                    </ul><p className='mb-2'>{u("title49")}</p><ul className="list-disc pl-6 ml-5">
                                        <li className="mb-2 text-[#FF0000]">{u("title50")}</li>
                                    </ul><p className='mb-2 font-bold'>{u("title51")}</p><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    {u("title31")}
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    {u("title32")}
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    {u("title33")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.filter(courses => ((typeof courses.e_type === "string" && courses.e_type === "Major Elective Courses") ||
                                                (Array.isArray(courses.e_type) && courses.e_type.includes("Major Elective Courses"))) &&
                                                (Array.isArray(courses.cu_no) && courses.cu_no.some((cu) => cu === 4 || cu === 5))

                                            )
                                                .map((courses, index) => (
                                                    <tr
                                                        key={courses._id}
                                                        className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                    >
                                                        <th
                                                            scope="row"
                                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                        >
                                                            {courses.code}
                                                            {courses.overview ? (
                                                                <Tooltip
                                                                    position="right"
                                                                    header={courses.name}
                                                                    prereq={courses.prereg}
                                                                    credit={courses.credit}
                                                                    content={courses.overview}
                                                                >
                                                                    <a>Tooltip Trigger</a>
                                                                </Tooltip>
                                                            ) : (
                                                                <a>No Tooltip</a>
                                                            )}
                                                        </th>
                                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                            {courses.name}
                                                        </td>
                                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                            {courses.credit.split("(")[0]}
                                                        </td>
                                                    </tr>
                                                )
                                                )}
                                            <tr className="bg-[#FCDCB4] text-[#FF0000] uppercase font-bold">
                                                <td
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-left border-solid border-[#EFB770] border-1 w-1/5 "
                                                    colSpan={3}
                                                >
                                                    {u("title52")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><h3 className='font-bold mb-2 mt-4' id='mc'>{u("title53")}</h3><p className='mb-2 text-[#FF0000]'>{u("title54")}</p><p className='mb-2 text-[#FF0000]'>{u("title55")}</p><h2 className='text-lg mb-4 font-bold' id='fe'>{u("title56")}</h2><p className='mb-2'>{u("title57")}</p><p className='mb-4 text-[#FF0000]'>{u("title58")}</p><h1 className='text-3xl font-bold mb-4' id='sp'>{u("title59")}</h1><h2 className='text-2xl font-bold mb-4'>{u("title60")}</h2><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title61")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title62")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_1.map((studyPlan) => studyPlan.semester_1.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                        </tbody>
                                    </table><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title63")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title64")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_1.map((studyPlan) => studyPlan.semester_2.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                        </tbody>
                                    </table><div className="border-[#857D7D] border-2 my-2"></div><h2 className='text-2xl font-bold mb-4 mt-4'>{u("title65")}</h2><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title61")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title66")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_2.map((studyPlan) => studyPlan.semester_1.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title67")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title63")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title66")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_2.map((studyPlan) => studyPlan.semester_2.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title69")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><div className="border-[#857D7D] border-2 my-2"></div><h3 className='text-xl font-bold mb-4 mt-4'>{u("title70")}</h3><h2 className='text-2xl font-bold mb-4 mt-4'>{u("title71")}</h2><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title61")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title66")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_3.map((studyPlan) => studyPlan.semester_1.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                            <tr className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title69")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title72")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title63")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title64")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_3.map((studyPlan) => studyPlan.semester_2.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title73")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title74")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title69")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title67")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><div className="border-[#857D7D] border-2 my-2"></div><h2 className='text-2xl font-bold mb-4 mt-4'>{u("title75")}</h2><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title61")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title76")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_4.map((studyPlan) => studyPlan.semester_1.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                            <tr className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title74")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title77")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title69")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><table className="w-full mb-14">
                                        <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                                    {u("title63")}
                                                </th>

                                                <th scope="col" className="px-2 py-3 text-center">
                                                    {u("title76")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData_4.map((studyPlan) => studyPlan.semester_2.map((course, index) => (
                                                <tr
                                                    key={course._id}
                                                    className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"} text-black`}
                                                >
                                                    <th
                                                        scope="row"
                                                        className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                    >
                                                        {course.code}
                                                        {course.overview ? (
                                                            <Tooltip
                                                                position="right"
                                                                header={course.name}
                                                                prereq={course.prereg}
                                                                credit={course.credit}
                                                                content={course.overview}
                                                            >
                                                                <a>Tooltip Trigger</a>
                                                            </Tooltip>
                                                        ) : (
                                                            <a>No Tooltip</a>
                                                        )}
                                                    </th>
                                                    <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                        {course.credit.split("(")[0]}
                                                    </td>
                                                </tr>
                                            ))
                                            )}
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title74")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FCDCB4] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title69")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                            <tr className="bg-[#FFEDD6] text-black">
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    ******
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {u("title72")}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {u("title68")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table><div className="border-[#857D7D] border-2 my-2"></div><h3 className='text-xl font-bold mb-4 mt-4'>{u("title78")}</h3></>
                            {/* แก้ สีหัวตาราง */}
                            <h2 className='text-2xl font-bold mb-4 mt-4'>{u("title71")}</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                        {u("title61")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title66")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_3_2.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.code}
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {course.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title69")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title68")}
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title72")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title68")}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                        {u("title63")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title64")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_3_2.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.code}
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {course.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title73")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title77")}
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title69")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title77")}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-2xl font-bold mb-4 mt-4'>{u("title75")}</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                        {u("title61")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title79")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_4_2.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.code}
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {course.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
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
                                        {u("title63")}
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                        {u("title80")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_4_2.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.code}
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>Tooltip Trigger</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    {course.name}
                                                </td>
                                                <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title74")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title77")}
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title69")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title68")}
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title72")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title68")}
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                        {u("title67")}
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                        {u("title68")}
                                        </td>
                                    </tr>
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

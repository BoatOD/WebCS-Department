"use client";
import React, { useEffect, useState } from 'react'
import Banner from "@/components/Banner";

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'

import Tooltip from '@/components/Tooltip';

type Props = {};

export default function Study_Plans({ }: Props) {

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
        fetch("https://cs-project-ime1.vercel.app/api/study_plan")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const filteredData_1 = data.filter((item) => item.year === 1 && item.cu_no === 1);
    const filteredData_2 = data.filter((item) => item.year === 2 && item.cu_no === 1);
    const filteredData_3 = data.filter((item) => item.year === 3 && item.cu_no === 1);
    const filteredData_4 = data.filter((item) => item.year === 4 && item.cu_no === 1);

    const filteredData_3_2 = data.filter((item) => item.year === 3 && item.cu_no === 2);
    const filteredData_4_2 = data.filter((item) => item.year === 4 && item.cu_no === 2);

    const filteredData_3_3 = data.filter((item) => item.year === 3 && item.cu_no === 3);
    const filteredData_4_3 = data.filter((item) => item.year === 4 && item.cu_no === 3);

    return (
        <>
            <Banner
                imageSrc="/all_page_banner.png" // Adjust the image path for this page
                altText="Image Alt Text"
                title="undergraduate 64+"
                subtitle="Study Plans"
            />
            <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem]">
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
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_1.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
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
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_1.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >

                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.e_name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 2</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_2.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
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
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_2.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-xl font-bold mb-4 mt-4'>แผนปกติ (Regular Plan)</h2>
                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 3</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_3.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>GE Elective Course</p>
                                            <p>วิชาศึกษาทั่วไป (เลือกจาก 3 กลุ่มวิชา)</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            19 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_3.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >

                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 300 or 400</p>
                                            <p>วิชาเอกเลือกระดับ 300 หรือ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Free Elective Course</p>
                                            <p>วิชาเลือกเสรี</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 4</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            14 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_4.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>GE Elective Course</p>
                                            <p>วิชาศึกษาทั่วไป (เลือกจาก 3 กลุ่มวิชา)</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#400' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 400</p>
                                            <p>วิชาเอกเลือกระดับ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            11 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_4.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#400' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 400</p>
                                            <p>วิชาเอกเลือกระดับ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Free Elective Course</p>
                                            <p>วิชาเลือกเสรี</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-xl font-bold mb-4 mt-4'>แผนสหกิจศึกษา (Co-operative Education Plan)</h2>
                            {/* แก้ สีหัวตาราง */}
                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 3</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
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
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>GE Elective Course</p>
                                            <p>วิชาศึกษาทั่วไป (เลือกจาก 3 กลุ่มวิชา)</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            19 หน่วยกิต
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
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 300 or 400</p>
                                            <p>วิชาเอกเลือกระดับ 300 หรือ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Free Elective Course</p>
                                            <p>วิชาเลือกเสรี</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 4</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            7 หน่วยกิต
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
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
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
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            19 หน่วยกิต
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
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>GE Elective Course</p>
                                            <p>วิชาศึกษาทั่วไป (เลือกจาก 3 กลุ่มวิชา)</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 300 or 400</p>
                                            <p>วิชาเอกเลือกระดับ 300 หรือ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#400' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 400</p>
                                            <p>วิชาเอกเลือกระดับ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Free Elective Course</p>
                                            <p>วิชาเลือกเสรี</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-xl font-bold mb-4 mt-4'>แผนก้าวหน้า (Honors Plan)</h2>
                            {/* แก้ สีหัวตาราง */}
                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 3</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            18 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_3_3.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>GE Elective Course</p>
                                            <p>วิชาศึกษาทั่วไป (เลือกจาก 3 กลุ่มวิชา)</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            19 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_3_3.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 300 or 400</p>
                                            <p>วิชาเอกเลือกระดับ 300 หรือ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Free Elective Course</p>
                                            <p>วิชาเลือกเสรี</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h1 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 4</h1>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            20 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_4_3.map((studyPlan) =>
                                        studyPlan.semester_1.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>GE Elective Course</p>
                                            <p>วิชาศึกษาทั่วไป (เลือกจาก 3 กลุ่มวิชา)</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#400' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 400</p>
                                            <p>วิชาเอกเลือกระดับ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#700' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 700</p>
                                            <p>วิชาเอกเลือกระดับ 700</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-3 md:px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-1 md:px-2 py-3 text-center">
                                            17 หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData_4_3.map((studyPlan) =>
                                        studyPlan.semester_2.map((course, index) => (
                                            <tr
                                                key={course._id}
                                                className={`${index % 2 === 0 ? "bg-[#FCDCB4]" : "bg-[#FFEDD6]"
                                                    } text-black`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                                >
                                                    {course.overview ? (
                                                        <Tooltip
                                                            position="right"
                                                            header={course.name}
                                                            prereq={course.prereg}
                                                            credit={course.credit}
                                                            content={course.overview}
                                                        >
                                                            <a>{course.code}</a>
                                                        </Tooltip>
                                                    ) : (
                                                        <a>No Tooltip</a>
                                                    )}
                                                </th>
                                                <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                                    <p>{course.e_name}</p>
                                                    <p>{course.name}</p>
                                                </td>
                                                <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                                    {course.credit.split("(")[0]}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#400' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 400</p>
                                            <p>วิชาเอกเลือกระดับ 400</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://cs-project-git-main-kitsadi.vercel.app/academics/undergraduate/undergraduate64/major_elective_courses#700' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Major Elective Courses Level 700</p>
                                            <p>วิชาเอกเลือกระดับ 700</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Minor Course</p>
                                            <p>วิชาโท</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                    <tr className="bg-[#FCDCB4] text-black">
                                        <th
                                            scope="row"
                                            className="p-1 md:p-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="p-1 md:p-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            <p>Free Elective Course</p>
                                            <p>วิชาเลือกเสรี</p>
                                        </td>
                                        <td className="px-1 md:px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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

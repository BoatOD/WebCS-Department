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
                            <h1 className='text-3xl font-bold mb-4'>(ปริญญาตรี) หลักสูตรสำหรับนักศึกษารหัส 63</h1>
                            <p><span className='font-bold'>ชื่อปริญญา</span> : วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)</p>
                            <p><span className='font-bold'>ชื่อปริญญา</span> : วท.บ. (วิทยาการคอมพิวเตอร์)</p>
                            <p><span className='font-bold'>ชื่อหลักสูตร </span> : หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์</p>
                            <h2 className='text-2xl font-bold my-4'>เอกสารประกอบ</h2>
                            <p><a href='https://www2.cs.science.cmu.ac.th/Curriculum/g63/lib/exe/fetch.php?media=couseoutline.pdf' target='_blank' className='underline hover:text-gray-700'>รายละเอียดกระบวนวิชา</a></p>
                            <p><a href='https://www2.cs.science.cmu.ac.th/Curriculum/g63/lib/exe/fetch.php?media=prerequisitey59majorjan63upd.pdf' target='_blank' className='underline hover:text-gray-700'>แผนผังหลักสูตร (Updated: ม.ค. 63)</a></p>
                            <p><a href='https://www2.cs.science.cmu.ac.th/Curriculum/g63/lib/exe/fetch.php?media=minor_updjuly63.pdf' target='_blank' className='underline hover:text-gray-700'>แผนผังหลักสูตร สำหรับ Minor</a></p>
                            <h1 className='text-3xl font-bold mb-4 mt-6'>1. จำนวนหน่วยกิตรวมตลอดหลักสูตร</h1>
                            <ul className="list-disc pl-6 ml-5">
                                <li className="mb-2">สำหรับแผน 1 ไม่น้อยกว่า 134 หน่วยกิต</li>
                                <li className="mb-2">สำหรับแผน 2 ไม่น้อยกว่า 135 หน่วยกิต</li>
                            </ul>
                            <h1 className='text-3xl font-bold mb-4 mt-6'>2. โครงสร้างหลักสูตร</h1>
                            <h2 className='text-lg mb-4 font-bold'>1) หมวดวิชาศึกษาทั่วไป 30 หน่วยกิต</h2>

                            <p className='mb-2' id='rc'>วิชาบังคับ (Required Courses) 24 หน่วยกิต</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            1.1 กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้ <br /> (Learner Person)
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            15 หน่วยกิต
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
                                            1.2 กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม <br /> (Innovative Co-creator)
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            3 หน่วยกิต
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
                                            1.3 กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง<br /> (Active Citizen)
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            6 หน่วยกิต
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

                            <p className='mb-2' id='ge'>วิชาเลือก (GE Electives)</p>
                            <p className='ml-2 text-[#FF0000]'>ให้นักศึกษาเลือกเรียนกระบวนวิชาจากทั้ง 3 กลุ่มเพิ่มเติมอีก 6 หน่วยกิต จากกระบวนวิชาต่อไปนี้</p>
                            <p className='mb-2 ml-2 text-[#FF0000]'>A student also chooses at least 6 credits from these 3 groups of GE courses.</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={3}>
                                            กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้เรียนรู้ (Learner Person)
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
                                            กลุ่มวิชาด้านการพัฒนาทักษะการเป็นผู้ร่วมสร้างสรรค์นวัตกรรม <br /> (Innovative Co-creator)
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
                                            กลุ่มวิชาด้านการพัฒนาทักษะการเป็นพลเมืองที่เข้มแข็ง (Active Citizen)
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

                            <h2 className='text-lg mb-4 font-bold'>2) หมวดวิชาเฉพาะ</h2>
                            <p className='mb-2'>แผน 1 ไม่น้อยกว่า 98 หน่วยกิต</p>
                            <p className='mb-2'>แผน 2 ไม่น้อยกว่า 99 หน่วยกิต</p>
                            <h3 className='font-bold mb-2 mt-4' id='cc'>2.1 ) วิชาแกน 24 หน่วยกิต</h3>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            รหัสวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            ชื่อวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            หน่วยกิต
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

                            <h3 className='font-bold mb-2 mt-4' >2.2 ) วิชาเอก</h3>
                            <p className='mb-2'>แผน 1 ไม่น้อยกว่า 59 หน่วยกิต</p>
                            <p className='mb-2'>แผน 2 ไม่น้อยกว่า 60 หน่วยกิต</p>
                            <p className='mb-6 text-[#FF0000]'>ในจำนวนนี้อย่างน้อย 36 หน่วยกิต จะต้องเป็นกระบวนวิชาระดับ 300-400 และอย่างน้อย 18 หน่วยกิตต้องเป็นกระบวนวิชาระดับ 400 ขึ้นไป</p>

                            <p className='mb-2 font-bold'>2.2.1) วิชาเอกบังคับร่วม 41 หน่วยกิต</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            รหัสวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            ชื่อวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            หน่วยกิต
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
                                            กลุ่มประเด็นด้านองค์การและระบบสารสนเทศ
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
                                            กลุ่มเทคโนโลยีเพื่องานประยุกต์
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
                                            กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์
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
                                            กลุ่มโครงสร้างพื้นฐานของระบบ
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
                                            กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์
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

                            <p className='mb-2 mt-6 font-bold'>2.2.2) วิชาเอกบังคับประจำแผน</p>
                            <p className='mb-2' id='rp'>(ก) แผน 1 จำนวน 3 หน่วยกิต</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            รหัสวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            ชื่อวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                                        (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 4)))
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

                            <p className='mb-2' id='co'>(ข) แผน 2 จำนวน 7 หน่วยกิต</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            รหัสวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            ชื่อวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses => courses.e_type === "Plan-specific Compulsory Courses" &&
                                        (Array.isArray(courses.cu_no) && courses.cu_no.some(cu => cu === 5)))
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

                            <p className='mb-2 mt-6 font-bold' id='me'>2.2.3) วิชาเอกเลือก ต้องเป็นกระบวนวิชาระดับ 300 หรือ 400 ขึ้นไป</p>
                            <p className='mb-2'>(ก) แผน 1 ไม่น้อยกว่า 15 หน่วยกิต</p>
                            <ul className="list-disc pl-6 ml-5">
                                <li className="mb-2 text-[#FF0000]">โดยที่จะต้องเป็นกระบวนวิชาระดับ 400 อย่างน้อย 12 หน่วยกิต</li>
                            </ul>

                            <p className='mb-2'>(ข) แผน 2 ไม่น้อยกว่า 12 หน่วยกิต</p>
                            <ul className="list-disc pl-6 ml-5">
                                <li className="mb-2 text-[#FF0000]">โดยที่จะต้องเป็นกระบวนวิชาระดับ 400 อย่างน้อย 6 หน่วยกิต</li>
                            </ul>
                            <p className='mb-2 font-bold'>โดยทั้งสองแผนเลือกจากกระบวนวิชาต่อไปนี้</p>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            รหัสวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            ชื่อวิชา
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            หน่วยกิต
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.filter(courses =>
                                        ((typeof courses.e_type === "string" && courses.e_type === "Major Elective Courses") ||
                                            (Array.isArray(courses.e_type) && courses.e_type.includes("Major Elective Courses"))) &&
                                        (Array.isArray(courses.cu_no) && courses.cu_no.some((cu) => cu === 4 || cu === 5))

                                    )
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
                                    <tr className="bg-[#FCDCB4] text-[#FF0000] uppercase font-bold">
                                        <td
                                            scope="row"
                                            className="px-4 py-4 font-medium text-left border-solid border-[#EFB770] border-1 w-1/5 "
                                            colSpan={3}
                                        >
                                            หรือกระบวนวิชาเอกเลือกสาขาวิชาวิทยาการคอมพิวเตอร์ระดับ 300 หรือ 400 ที่เปิดสอนเพิ่มเติมในมหาวิทยาลัยเชียงใหม่
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='font-bold mb-2 mt-4' id='mc'>2.3 ) วิชาโทไม่น้อยกว่า 15 หน่วยกิต</h3>
                            <p className='mb-2 text-[#FF0000]'>2.3.1) นักศึกษาที่ต้องการเรียนวิชาโท สามารถเลือกเรียนวิชาโทสาขาใดๆ โดยความเห็นชอบของอาจารย์ที่ปรึกษา</p>
                            <p className='mb-2 text-[#FF0000]'>2.3.2) นักศึกษาที่ไม่ต้องการเรียนวิชาโท ให้เลือกเรียนกระบวนวิชาวิทยาการคอมพิวเตอร์ระดับ 300 หรือ 400 ในหมวดวิชาเอกเลือกเพิ่มเติมอีก ไม่น้อยกว่า 15 หน่วยกิต</p>
                            <h2 className='text-lg mb-4 font-bold' id='fe'>3) หมวดวิชาเลือกเสรี</h2>
                            <p className='mb-2'>หมวดวิชาเลือกเสรีไม่น้อยกว่า 6 หน่วยกิต</p>
                            <p className='mb-4 text-[#FF0000]'>นักศึกษาต้องเลือกเรียนกระบวนวิชานอกเหนือจากวิชาเอกและวิชาโท (ถ้ามี) ไม่น้อยกว่า 6 หน่วยกิต</p>

                            <h1 className='text-3xl font-bold mb-4' id='sp'>4. แผนการศึกษา ระดับปริญญาตรี</h1>
                            <h2 className='text-2xl font-bold mb-4'>ชั้นปีที่ 1</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            20 หน่วยกิต
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
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            19 หน่วยกิต
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
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 2</h2>
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
                                    {filteredData_2.map((studyPlan) =>
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
                                    <tr className="bg-[#FFEDD6] text-black">
                                        <th
                                            scope="row"
                                            className="px-4 py-4 font-medium text-center border-solid border-[#EFB770] border-1 w-1/5"
                                        >
                                            ******
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            วิชาเลือก
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
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
                                    {filteredData_2.map((studyPlan) =>
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
                                            <a href='https://www.eqd.cmu.ac.th/Curr/minor.html' target='_blank' className='underline hover:text-gray-700'>******</a>
                                        </th>
                                        <td className="pl-4 pr-10 py-4 text-left border-solid border-[#EFB770] border-1 w-3/5">
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h3 className='text-xl font-bold mb-4 mt-4'>แผนปกติ (แผน 1)</h3>
                            <h2 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 3</h2>
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
                                    {filteredData_3.map((studyPlan) =>
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเลือกเสรี
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
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
                                            วิชาเอกเลือกระดับ 300 หรือ 400
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเอกเลือกระดับ 400
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเลือก
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 4</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            11 หน่วยกิต
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
                                            วิชาเอกเลือกระดับ 400
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
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
                                            วิชาเอกเลือกระดับ 400
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเลือกเสรี
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h3 className='text-xl font-bold mb-4 mt-4'>แผนสหกิจศึกษา (แผน 2)</h3>
                            {/* แก้ สีหัวตาราง */}
                            <h2 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 3</h2>
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเลือกเสรี
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
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
                                            วิชาเอกเลือกระดับ 300 หรือ 400
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="border-[#857D7D] border-2 my-2"></div>

                            <h2 className='text-2xl font-bold mb-4 mt-4'>ชั้นปีที่ 4</h2>
                            <table className="w-full mb-14">
                                <thead className="text-lg text-black uppercase bg-[#F29D35]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left" colSpan={2}>
                                            ภาคการศึกษาที่ 1
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
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
                                            ภาคการศึกษาที่ 2
                                        </th>

                                        <th scope="col" className="px-2 py-3 text-center">
                                            16 หน่วยกิต
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
                                            วิชาเอกเลือกระดับ 400
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            6
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
                                            วิชาโท
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเลือกเสรี
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
                                            3
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
                                            วิชาเลือก
                                        </td>
                                        <td className="px-2 text-center border-solid border-[#EFB770] border-1 w-1/5">
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

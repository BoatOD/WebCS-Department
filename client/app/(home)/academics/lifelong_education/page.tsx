'use client'
import React from 'react'
import { Sidebar } from "flowbite-react";
import { SidebarCustomTheme } from "@/theme";
import Banner from '@/components/AcademicPage/Banner';
import './intelligent.css'

type Props = {}

export default function Lifelong({}: Props) {
  return (
    <>
    <Banner
      imageSrc="/all_page_banner.png" // Adjust the image path for this page
      altText="Image Alt Text"
      title="ACADEMIC"
      subtitle="LIFELONG EDUCATION"
      customStyles={{
        width: 'auto',  // Custom width for this page
        height: '100px',  // Custom height for this page
        bottom: '-15px', // Custom bottom attribute for this page
      }}
    />
    <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
          <div className="w-full md:w-2/3 order-last md:order-first ">
            <div className="flex flex-col space-y-2 mt-7">
              <div className="px-8 py-0.5 bg-black w-full "></div>
            </div>
            <div className="p-1 pt-3 ">
              <div className="p-5">
                <h1>หลักสูตรการศึกษาตลอดชีวิต</h1> 
                <h3>ภายใต้การสนับสนุนจากวิทยาลัยการศึกษาตลอดชีวิต (Lifelong Education)</h3>
                <br />
                <ol style={{ listStyleType: "decimal"}}>
                  <li>หลักสูตรการวิเคราะห์ข้อมูลอัจฉริยะ ประกอบด้วย 7 หลักสูตรย่อย</li> {/*path to intelligent */}
                  <li>หลักสูตรอบรมคริปโทเคอร์เรนซี(Cryptocurrency) ประกอบด้วย 7 หลักสูตรย่อย</li> {/*path to cruptocurrency*/}
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 order-first md:order-last ">
            <div className="flex flex-col space-y-2 mt-7">
              <div className="px-8 py-0.5 bg-black w-full"></div>
              <Sidebar theme={SidebarCustomTheme} className="w-full">
                <Sidebar.Items className="bg-white p-0">
                  <Sidebar.ItemGroup className="bg-white p-0">
                    <Sidebar.Item className="text-lg font-bold hover:bg-transparent">
                    LIFELONG EDUCATION
                    </Sidebar.Item>
                    <div className="border-b border-black border-3 my-2"></div>
                    <Sidebar.Collapse label="Intelligent Data Analysis Course">
                      <Sidebar.Item href="#">Couse 1</Sidebar.Item> {/*path to intelligent/course1 */}
                      <Sidebar.Item href="#">Couse 2</Sidebar.Item> {/*path to intelligent/course2 */}
                      <Sidebar.Item href="#">Couse 3</Sidebar.Item> {/*path to intelligent/course3 */}
                      <Sidebar.Item href="#">Couse 4</Sidebar.Item> {/*path to intelligent/course4 */}
                      <Sidebar.Item href="#">Couse 5</Sidebar.Item> {/*path to intelligent/course5 */}
                      <Sidebar.Item href="#">Couse 6</Sidebar.Item> {/*path to intelligent/course6 */}
                      <Sidebar.Item href="#">Couse 7</Sidebar.Item> {/*path to intelligent/course7 */}
                    </Sidebar.Collapse>
                    <div className="flex flex-col space-y-1 mt-7">
                      <div className="px-8 py-0.5 bg-slate-500"></div>
                    </div>
  
                    <Sidebar.Collapse label="Cryptocurrency training course">
                      <Sidebar.Item href="#">Course 1: Basics of Cryptocurrency</Sidebar.Item>  {/*path to cruptocurrency/course1 */}
                      <Sidebar.Item href="#">Course 2: Robot Trading</Sidebar.Item> {/*path to cruptocurrency/course2 */}
                      <Sidebar.Item href="#">Course 3: Crypto Investment Tips</Sidebar.Item>  {/*path to cruptocurrency/course3 */}
                    </Sidebar.Collapse>
                    <div className="flex flex-col space-y-1 mt-7">
                      <div className="px-8 py-0.5 bg-slate-500"></div>
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar>
            </div>
          </div>
        </div>
      </>
    )
  }
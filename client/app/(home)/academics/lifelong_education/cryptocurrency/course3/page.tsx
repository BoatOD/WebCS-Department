'use client'
import React from 'react'
import { Sidebar } from "flowbite-react";
import { SidebarCustomTheme } from "@/theme";
import Banner from '@/components/AcademicPage/Banner';
import './intelligent.css'


type Props = {}

export default function Course({}: Props) {
    return (
      <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="CRYPTOCURRENCY TRANING COURSE"
        subtitle="CRYPTO INVESTMENT TIPS"
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
              <h1>หลักสูตรที่ 3</h1> 
              <br />
              <table>
              <tr>
                <th>ช่วงวันรับสมัคร :</th>
                <td class = "row_white"></td>
              </tr>
              <tr>
                <th>ช่วงเวลาเรียน :</th>
                <td class = "row_white"></td>
              </tr>
              <tr>
                <th>ช่องทางรับการสมัคร :</th>
                <td class = "row_white"></td>
              </tr>

              </table>
              <h2>เนื้อหาหลักสูตร</h2>  
              
              <ul style={{ listStyleType: "disc"}}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <br/>
              <h2>ผู้บรรยาย</h2>  
              <ul style={{ listStyleType: "disc"}}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>  

              
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
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                  <Sidebar.Collapse label="Intelligent Data Analysis Course">
                    <Sidebar.Item href="#">Couse 1</Sidebar.Item> 
                    <Sidebar.Item href="#">Couse 2</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 3</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 4</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 5</Sidebar.Item>
                    <Sidebar.Item href="#">Couse 6</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>

                  <Sidebar.Collapse label="Cryptocurrency training course">
                    <Sidebar.Item href="#">Course 1: Basics of Cryptocurrency</Sidebar.Item>
                    <Sidebar.Item href="#">Course 2: Robot Trading</Sidebar.Item>
                    <Sidebar.Item href="#">Course 3: Crypto Investment Tips</Sidebar.Item>
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
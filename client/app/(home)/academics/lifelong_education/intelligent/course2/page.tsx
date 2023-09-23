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
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 2"
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
              <h1>2. การวิเคราะห์ข้อมูลอัจฉริยะโดยเทคนิคการเรียนรู้ด้วยเครื่องสำหรับผู้เรียนระดับสูง โดยใช้การเขียนโปรแกรมไพธอน</h1> 
              <br />
              <table>
              <tr>
                <th>ช่วงวันรับสมัคร :</th>
                <td class = "row_white">วันนี้ – 30 สิงหาคม 2564</td>
              </tr>
              <tr>
                <th>ช่วงเวลาเรียน :</th>
                <td class = "row_white">13-17 กันยายน เวลา 13:00-16:00 น.</td>
              </tr>
              <tr>
                <th>ช่องทางรับการสมัคร :</th>
                <td class = "row_white"><a href= "https://www.lifelong.cmu.ac.th/courseleid.php?id=000069">https://www.lifelong.cmu.ac.th/courseleid.php?id=000069</a></td>
              </tr>
              </table>
              <h2>เนื้อหาหลักสูตร</h2>  

              <ul style={{ listStyleType: "disc"}}>
                <li>Data manipulation with Python</li>
                <li>Classification analysis modeling</li>
                <ul style={{ listStyleType: "disc"}}> {/*ต้องย่อหน้าเข้าไปอีก มันยังไม่ย่อให้*/}
                  <li>Machine learning and basic classification techniques: decision tee, Naïve Bayes, k-Nearest Neighbors</li>
                  <li>Performance evaluation</li>
                  <li>Model parameters tuning for classification analysis</li>
                </ul>
              </ul>

              <ul style={{ listStyleType: "disc"}}>
                <li>Clustering analysis modeling</li>
                <ul style={{ listStyleType: "disc"}}> {/*ต้องย่อหน้าเข้าไปอีก มันยังไม่ย่อให้*/}
                  <li>Machine learning and basic clustering techniques: K-means, Hierarchical clustering</li>
                  <li>Performance evaluation</li>
                  <li>Model parameters tuning for classification analysis</li>
                </ul>
              </ul>  

              <ul style={{ listStyleType: "disc"}}>
                <li>Predictive analysis</li>
                <ul style={{ listStyleType: "disc"}}> {/*ต้องย่อหน้าเข้าไปอีก มันยังไม่ย่อให้*/}
                  <li>Machine Learning and Basic Classification Techniques: Outliers detection, regression analysis, association rules analysis</li>
                  <li>Performance evaluation</li>
                </ul>
              </ul>

              <ul style={{ listStyleType: "disc"}}>
                <li>Advanced learning techniques</li>
                <ul style={{ listStyleType: "disc"}}> {/*ต้องย่อหน้าเข้าไปอีก มันยังไม่ย่อให้*/}
                  <li>Reinforcement learning, Neural network</li>
                  <li>Performance evaluation</li>
                  <li>Model parameters tuning</li>
                </ul>
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
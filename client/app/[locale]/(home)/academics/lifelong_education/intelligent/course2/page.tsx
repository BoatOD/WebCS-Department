'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';

type Props = {}

export default function Course_2({ }: Props) {
  const l = useTranslations("lifelong");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 2"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title83")}</h1>
              <br />
              <table className="w-full">
                <tbody>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title40")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title69")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title42")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title84")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                      {l("title44")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                      <a href="https://www.lifelong.cmu.ac.th/courseleid.php?id=000069" className='underline'>
                      {l("title20")}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl my-5">{l("title45")}</h2>

              <ul className="list-disc pl-6">
                <li className='mb-2'>Data manipulation with Python</li>
                <li className='mb-2'>Classification analysis modeling</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine learning and basic classification techniques: decision tee, Naïve Bayes, k-Nearest Neighbors</li>
                  <li className='mb-2'>Performance evaluation</li>
                  <li className='mb-2'>Model parameters tuning for classification analysis</li>
                </ul>
                <li className='mb-2'>Clustering analysis modeling</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine learning and basic clustering techniques: K-means, Hierarchical clustering</li>
                  <li className='mb-2'>Performance evaluation</li>
                  <li className='mb-2'>Model parameters tuning for classification analysis</li>
                </ul>
                <li className='mb-2'>Predictive analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine Learning and Basic Classification Techniques: Outliers detection, regression analysis, association rules analysis</li>
                  <li className='mb-2'>Performance evaluation</li>
                </ul>
                <li className='mb-2'>Advanced learning techniques</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Reinforcement learning, Neural network</li>
                  <li className='mb-2'>Performance evaluation</li>
                  <li className='mb-2'>Model parameters tuning</li>
                </ul>
              </ul>

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
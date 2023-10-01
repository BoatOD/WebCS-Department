'use client'
import React from 'react'
import Banner from '@/components/Banner';

import Sidebar1 from "@/components/Sidebar1";
import { sidebarItem } from '@/app/[locale]/(home)/academics/lifelong_education/sidebarData'
import { useTranslations } from 'next-intl';

type Props = {}

export default function Course_6({ }: Props) {
  const l = useTranslations("lifelong");
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="INTELLIGENT ANALYSIS COURSE"
        subtitle="COURSE 6"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="p-5">
              <h1 className="text-2xl font-bold">{l("title128")}</h1>
              <br />
              <table className="w-full">
                <tbody>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title40")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title86")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title42")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title129")}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-1 md:px-6 py-4 whitespace-nowrap text-center bg-[#F29D35] font-bold">
                    {l("title44")}
                    </th>
                    <td className="bg-white text-black px-1 md:px-6">
                    {l("title88")}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl my-5">{l("title45")}</h2>

              <ul className="list-disc pl-6">
                <li className='mb-2'>Data exploration and visualization</li>
                <li className='mb-2'>Classification analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine learning and basic classification techniques: decision tree, Naïve Bayes, k-Nearest Neighbors</li>
                  <li className='mb-2'>Classification analysis evaluation</li>
                  <li className='mb-2'>Model parameters tuning for classification analysis</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Clustering analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine learning and basic clustering techniques: K-means, Hierarchical clustering</li>
                  <li className='mb-2'>Clustering analysis evaluation</li>
                  <li className='mb-2'>Model parameters tuning for clustering analysis</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Predictive analysis</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Machine Learning and Basic Classification Techniques: Outliers detection, regression analysis, association rules analysis</li>
                  <li className='mb-2'>Predictive analysis evaluation</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Advanced learning techniques</li>
                <ul className="list-disc pl-6">
                  <li className='mb-2'>Reinforcement learning, Neural networks</li>
                  <li className='mb-2'>Model parameters tuning</li>
                  <li className='mb-2'>Case studies</li>
                </ul>
                <li className='mb-2'>Problem-based learning</li>
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
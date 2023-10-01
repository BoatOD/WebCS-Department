import React, { useEffect, useState } from 'react';

import { CardOfEventProps } from "@/types/cardofevent";
import CardForEvents from "./CardForEvents";
import { CarouselProps } from "@/types/carousel";
import CarouselForNews from "../CarouselForNews";
import Link from "next/link";
import { useTranslations } from 'next-intl';

type Props = {};

interface NewsEvent {
  _id: string;
  b_id: number;
  topic: string;
  e_topic: string;
  detail: string;
  e_detail: string;
  date: Date;
  location: string;
  e_location: string;
  category: string;
  nflag: boolean;
  picture: string[];
  eflag: boolean;
  status: string;
  undertaker: string;
  formattedDate: string; // Add formattedDate property
}


const NewsAndEvent = (props: Props) => {
  const [data, setData] = useState<NewsEvent[]>([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch('https://cs-project-ime1.vercel.app/api/news_events')
      .then((response) => response.json())
      .then((data) => {
        // Parse the date strings into Date objects
        const parsedData = data.map((item: NewsEvent) => ({
          ...item,
          date: new Date(item.date),
        }));

        // Sort the array by date in descending order
        const sortedData = parsedData.sort((a: NewsEvent, b: NewsEvent) => b.date.getTime() - a.date.getTime());

        setData(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);


  console.log(data)

  const images: CarouselProps[] = data.filter((item: NewsEvent) => item.status === 'pass').map((item: NewsEvent) => {

    return {
      title: item.topic, // Use the 'topic' property for the title
      content: item.detail.split('\n')[0], // Use the 'detail' property for the content
      href: `/news_events/news/${item.b_id}`, // Construct the 'href' based on 'b_id'
      images: item.picture[0], // Use the first picture from 'picture' array (you may need to add additional checks if 'picture' can be empty)
    };
  }).slice(0, 3);

  const posts: CardOfEventProps[] = data
    .filter((item: NewsEvent) => item.status === 'coming')
    .map((item: NewsEvent) => {
      const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      } as Intl.DateTimeFormatOptions;

      // Access the 'date' property on the 'item' (individual 'NewsEvent')
      const formattedDate = item.date.toLocaleDateString('en-US', options);

      return {
        title: formattedDate, // Use the 'topic' property for the title
        content: item.topic, // Use the 'detail' property for the content
        href: `/news_events/events/${item.b_id}`, // Construct the 'href' based on 'b_id'
      };
    })
    .slice(0, 6);
    const ne = useTranslations("news&eventhome");
  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5 gap-7">
        <div className="w-full md:w-2/3">
          <div className="flex justify-between mt-7 pb-5">
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white border-t-4 border-black">
              {ne("title0")}
            </p>
            <Link href='/news_events/news' className="flex items-center hover:opacity-80">
              <p className="text-gray-900 uppercase text-center font-medium">
              {ne("title2")}
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="pt-5">
            <CarouselForNews images={images} />
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-7 pb-5">
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white border-t-4 border-black">
            {ne("title1")}
            </p>
            <Link href='/news_events/events' className="flex items-center hover:opacity-80">
              <p className="text-gray-900 uppercase text-center font-medium">
              {ne("title3")}
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="overflow-y-auto h-[28rem] pt-3">
            <CardForEvents posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsAndEvent;

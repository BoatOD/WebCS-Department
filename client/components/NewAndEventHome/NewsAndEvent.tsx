import React, { useEffect, useState } from 'react';

import { CardOfEventProps } from "@/types/cardofevent";
import CardForEvents from "./CardForEvents";
import { CarouselProps } from "@/types/carousel";
import CarouselForNews from "../CarouselForNews";

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

  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5 gap-7">
        <div className="w-full md:w-2/3">
          <div className="flex pb-5">
            <div className="flex flex-col space-y-2 mt-7">
              <div className="px-8 py-0.5 bg-black w-full "></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                NEWS
              </p>
            </div>
          </div>

          <div className="pt-5">
            <CarouselForNews images={images} />
          </div>
        </div>
        <div>
          <div className="flex pb-5">
            <div className="flex flex-col space-y-0 mt-7">
              <div className="px-8 py-0.5 bg-black w-full"></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                EVENTS
              </p>
            </div>
          </div>

          <div className="overflow-y-auto h-[28rem] pt-5">
            <CardForEvents posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsAndEvent;

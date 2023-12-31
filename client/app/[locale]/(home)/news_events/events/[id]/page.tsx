'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link'

import OutlookCalendarInvite from '@/components/calendar/OutlookCalendarInvite';
import ICal from '@/components/calendar/ical';
import GoogleCalendar from '@/components/calendar/GoogleCalendar';
import { useLocale, useTranslations } from 'next-intl';
type Params = {
  params: {
    id: string
  }
}

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
const EventsDetail = ({ params: { id } }: Params) => {
  const [data, setData] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    // Define the id you want to retrieve
    const idToFetch = id;

    // Fetch data from the backend API when the component mounts
    fetch('https://cs-project-ime1.vercel.app/api/news_events')
      .then((response) => response.json())
      .then((data) => {
        // Find the item with the matching b_id
        const foundItem = data.find((item: NewsEvent) => item._id === idToFetch);

        if (foundItem) {
          // If the item is found, you can format its date and set it to your state
          const date: Date = new Date(foundItem.date);
          const formattedDate: string = formatDate(date);
          const formattedItem = { ...foundItem, formattedDate, date };

          setData([formattedItem]); // Place the item in an array as setData expects an array
        } else {
          // Handle the case where no item with the specified _id is found
          console.error(`Item with _id ${idToFetch} not found.`);
        }
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);


  function formatTextWithLinks(text: string): React.ReactNode[] {
    // Regular expression to match URLs in text
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Split text by line breaks and process each line
    const lines = text.split('\n');

    const formattedLines: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      const parts: React.ReactNode[] = [];

      // Split the line by URLs and non-URLs
      const tokens = line.split(urlRegex);

      tokens.forEach((token, tokenIndex) => {
        if (token.match(urlRegex)) {
          // If the token is a URL, create a link element
          const url = token.trim();
          parts.push(
            <a
              key={tokenIndex}
              href={url}
              className="underline hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          );
        } else {
          // If the token is not a URL, add it as text
          parts.push(token);
        }
      });

      // Combine the parts of the line and add it to the formattedLines array
      formattedLines.push(
        <div key={index}>
          {parts.map((part, partIndex) => (
            <React.Fragment key={partIndex}>{part}</React.Fragment>
          ))}
        </div>
      );
    });

    return formattedLines;
  }

  const locale = useLocale();
  function formatDate(date: Date): string {

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    if (locale === "en") {
      return date.toLocaleDateString(undefined, options);
    }
    else {
      return date.toLocaleDateString('th-TH', options);
    }
    // return date.toLocaleDateString(undefined, options);
    // return date.toLocaleDateString('th-TH', options); // 'th-TH' is the locale for Thai languag
  }

  const itemIndex = 0;
  const item: NewsEvent = data[itemIndex];

  const outlookEventDetails = item
    ? {
      subject: item.topic || '',
      location: item.location || '',
      startDate: item.date || new Date(), // Provide a default date if item.date is falsy
      endDate: item.date || new Date(),
      description: item.detail.split('\n')[0] || '',
    }
    : {
      subject: '',
      location: '',
      startDate: new Date(),
      endDate: new Date(),
      description: '',
    };

  const googleEventDetails = item
    ? {
      title: item.topic || '',
      location: item.location || '',
      startDate: new Date(item.date) || new Date(), // Provide a default date if item.date is falsy
      endDate: new Date(item.date) || new Date(),
      description: item.detail.split('\n')[0] || '',
    }
    : {
      title: '',
      location: '',
      startDate: new Date(),
      endDate: new Date(),
      description: '',
    };

  const icalEventDetails = item
    ? {
      title: item.topic || '',
      location: item.location || '',
      startDate: item.date || new Date(), // Provide a default date if item.date is falsy
      endDate: item.date || new Date(),
      description: item.detail.split('\n')[0] || '',
    }
    : {
      title: '',
      location: '',
      startDate: new Date(),
      endDate: new Date(),
      description: '',
    };



  const ne = useTranslations("news&eventhome");
  return (
    <>
      <div className="flex flex-col space-y-2 mt-2 mx-10">
        <div className="px-8 py-0.5 bg-black w-full "></div>
      </div>
      <div className="flex flex-row space-y-2 mt-2 mx-10 mb-16 justify-between">
        <h1 className='text-[#EB8E1B] text-5xl font-medium text-left'>{ne("title1")}</h1>
        <div className='text-right flex items-center'>
          <Link href='/news_events/news' className="mr-2 border-r-2 border-black pr-2">{ne("title4")}</Link>
          <Link href='/news_events/events'>{ne("title7")}</Link>
        </div>

      </div>
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first">
          <div className="p-1 pt-3 ">
            {loading ? (

              <div role="status">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <span className="sr-only">Loading...</span>
              </div>

            ) : (
              item ? (
                <div>
                  {locale === "en" ? (
                    <h1 className='text-5xl font-medium text-left p-5 break-words'>{item.e_topic}</h1>


                  ) : (
                    <h1 className='text-5xl font-medium text-left p-5 break-words'>{item.topic}</h1>

                  )}
                  <p className='p-5 pb-1 text-lg font-medium'>{item.formattedDate}</p>
                  {locale === "en" ? (
                     <p className='pl-5'>{item.e_location}</p>


                  ) : (
                    <p className='pl-5'>{item.location}</p>

                  )}

                  <div className="border-b border-black mt-5"></div>
                  <p className='p-5 pb-1 text-lg font-medium'>{ne("title8")}</p>
                  <div className="flex space-x-4 pl-5 pb-1 text-lg font-medium">
                    <div>
                      <GoogleCalendar eventDetails={googleEventDetails} />
                    </div>
                    <div className="border-r-2 border-black mx-2"></div>
                    <div>
                      <ICal {...icalEventDetails} />
                    </div>
                    <div className="border-r-2 border-black mx-2"></div>
                    <div>
                      <OutlookCalendarInvite eventDetails={outlookEventDetails} />
                    </div>
                  </div>

                  {item.picture.length === 1 ? (
                    <div className="text-center items-center p-5">
                      <div className="flex justify-center items-center">
                        <Image
                          src={item.picture[0].length < 100 ? `/blog${item.picture[0]}` : `${item.picture[0]}`}
                          width="600"
                          height="0"
                          alt="news-image"
                          className="h-auto object-cover"
                        />
                      </div>
                    </div>
                  ) : item.picture.length === 2 ? (
                    <div className="flex justify-center">
                      {item.picture.map((pic, index) => (
                        <div key={index} className="text-center items-center p-5 px-2">
                          <div className="flex justify-center items-center">
                            <Image
                              src={item.picture[0].length < 100 ? `/blog${pic}` : `${pic}`}
                              width="300" // You can adjust the width as needed
                              height="0"
                              alt={`news-image-${index}`}
                              className="h-auto object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap pl-5 py-5">
                      {item.picture.map((pic, index) => (
                        <div key={index} className="w-1/3 p-1">
                          <div className="text-center items-center">
                            <Image
                              src={item.picture[0].length < 100 ? `/blog${pic}` : `${pic}`}
                              width="300" // You can adjust the width as needed
                              height="0"
                              alt={`news-image-${index}`}
                              className="h-auto object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}


                  <div className="p-5">
                  {locale === "en" ? (
                     <p className='break-words'>
                     {formatTextWithLinks(item.e_detail)}
                   </p>
                    ) : (
                      <p className='break-words'>
                      {formatTextWithLinks(item.detail)}
                    </p>
                    )}
                    
                  </div>
                </div>

              ) : (
                <div>{ne("title6")}</div>
              )
            )}
          </div>
        </div>
      </div>
    </>


  )
}

export default EventsDetail
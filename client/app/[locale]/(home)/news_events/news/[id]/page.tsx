'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link'
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
const NewsDetail = ({ params: { id } }: Params) => {
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


  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    if(locale === "en") {
      return date.toLocaleDateString(undefined, options);
    } 
     else{
      return date.toLocaleDateString('th-TH', options);
    }
    // return date.toLocaleDateString(undefined, options);
    // return date.toLocaleDateString('th-TH', options); // 'th-TH' is the locale for Thai language
  }

  const itemIndex = 0;
  const item: NewsEvent = data[itemIndex];
  const ne = useTranslations("news&eventhome");
  const locale = useLocale();
  return (
    // <div className="flex justify-center items-center h-screen">

    // </div>
    <>
      <div className="flex flex-col space-y-2 mt-2 mx-10">
        <div className="px-8 py-0.5 bg-black w-full "></div>
      </div>
      <div className="flex flex-row space-y-2 mt-2 mx-10 mb-16 justify-between">
        <h1 className='text-[#EB8E1B] text-5xl font-medium text-left'>{ne("title0")}</h1>
        <div className='text-right flex items-center'>
          <Link href='/news_events/news' className="mr-2 border-r-2 border-black pr-2">{ne("title4")}</Link>
          <Link href='/news_events/events'>{ne("title1")}</Link>
        </div>

      </div>
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first">
          <div className="p-1 pt-3 ">
            {loading ? (

              <div role="status">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
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
                    <h1 className='text-5xl font-medium text-left p-5 break-words leading-relaxed sm:leading-tight'>{item.e_topic}</h1>

                  ) : (
                    <h1 className='text-5xl font-medium text-left p-5 break-words leading-relaxed sm:leading-tight'>{item.topic}</h1>
                  )}
                  <p className='p-5 pb-1 text-lg font-medium'>{ne("title5")}</p>
                  <p className='pl-5 '>{item.formattedDate}</p>

                  <div className="border-b border-black mt-10"></div>

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
                              src={`/blog${pic}` ?? "#"}
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
                              src={`/blog${pic}` ?? "#"}
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
                <div>{ne("title5")}</div>
              )
            )}
          </div>
        </div>
      </div>
    </>


  )
}

export default NewsDetail
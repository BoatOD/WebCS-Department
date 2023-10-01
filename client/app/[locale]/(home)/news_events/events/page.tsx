'use client'
import React, { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import { sidebarItem } from '@/app/[locale]/(home)/news_events/sidebarData';
import Sidebar1 from '@/components/Sidebar1';
import Link from 'next/link'
import { useLocale } from 'next-intl';

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

export default function Events() {
  const [data, setData] = useState<NewsEvent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch('https://cs-project-ime1.vercel.app/api/news_events')
      .then((response) => response.json())
      .then((data) => {
        // Convert date strings to Date objects and format them
        const formattedData: NewsEvent[] = data.map((item: NewsEvent) => {
          const date: Date = new Date(item.date);
          const formattedDate: string = formatDate(date);
          return { ...item, formattedDate, date };
        });

        // Filter the array to only include items with status "coming"
        const comingEvents = formattedData.filter((item) => item.status === 'coming');

        // Sort the filtered array by date in descending order
        const sortedData = comingEvents.sort((a, b) => b.date.getTime() - a.date.getTime());

        setData(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const locale = useLocale();
  // Function to format a Date object
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    if(locale === "en") {
      return date.toLocaleDateString(undefined, options);
    } 
     else{
      return date.toLocaleDateString('th-TH', options);
    }
  }


  // Calculate the range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Generate an array of page numbers based on the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="NEWS & EVENTS"
        subtitle="events"
      />
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          {displayedItems.map((item) => (
            <div key={item.b_id} className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="flex bg-[#FFCB8A] rounded-2xl">
                <div className="md:shrink-0 m-5 bg-[#FFE8CC] h-16 md:h-32 w-20 md:w-32 rounded-2xl flex flex-col items-center justify-center">
                {locale === "en" ? (
                      <div className="text-lg mt-4 font-medium text-left">
                        <div className="text-xs md:text-sm uppercase">{item.date.toLocaleDateString(undefined, { weekday: 'short' })}</div>
                      </div>
                    ) : (
                      <div className="text-lg mt-4 font-medium text-left">
                        <div className="text-xs md:text-sm uppercase">{item.date.toLocaleDateString('th-TH', { weekday: 'long' })}</div>
                      </div>
                    )}
                  
                  <div className='text-[#F29D35] text-2xl md:text-5xl'>{item.date.toLocaleDateString(undefined, { day: 'numeric' })}</div>
                </div>
                <div className="md:flex-1 pt-1 mt-3 text-center w-full h-full overflow-hidden mr-3 md:mr-0">
                  <div className="font-medium flex mt-2 justify-between">
                    <span className="text-left uppercase">
                      {item.formattedDate} {/* Display the formatted date */}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    {locale === "en" ? (
                      <span className="text-left">
                        {item.e_location} {/* Display the location */}
                      </span>
                    ) : (
                      <span className="text-left">
                        {item.location} {/* Display the location */}
                      </span>
                    )}
                  </div>
                  <Link href={{ pathname: `/news_events/events/${item.b_id}` }} className="hover:underline">
                    {locale === "en" ? (
                      <div className="text-lg mt-4 font-medium text-left">
                        {item.e_topic}
                      </div>
                    ) : (
                      <div className="text-lg mt-4 font-medium text-left">
                        {item.topic}
                      </div>
                    )}

                  </Link>
                </div>
              </div>
              <div className="border-b border-black mt-10"></div>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex justify-end"> {/* Flex container with justify-end */}
            <nav aria-label="Page navigation example">
              <ul className="list-style-none flex">
                {/* Previous Page */}
                {currentPage > 1 && (
                  <li>
                    <button
                      className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      aria-label="Previous"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                )}

                {/* Page Numbers */}
                {pageNumbers.map((page) => (
                  <li key={page} aria-current="page">
                    <button
                      className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === page ? 'bg-neutral-100 dark:bg-neutral-700 dark:text-white' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}

                {/* Next Page */}
                {currentPage < totalPages && (
                  <li>
                    <button
                      className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                      aria-label="Next"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>

        </div>
        <div className="w-full md:w-1/3 order-first md:order-last">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  );
}

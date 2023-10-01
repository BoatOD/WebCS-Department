"use client";

import React, { useEffect, useState } from 'react';
import SidebarWithCta from "@/components/admin/SidebarWithCta";
import Link from 'next/link'
import Image from 'next/image';

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

export default function Page() {
  const [data, setData] = useState<NewsEvent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

        // Sort the array by date in descending order
        const sortedData = formattedData.sort((a, b) => b.date.getTime() - a.date.getTime());

        setData(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
    // return date.toLocaleDateString('th-TH', options); // 'th-TH' is the locale for Thai language
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem]">
        <div className="w-full">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          {displayedItems.map((item) => (
            <div key={item.b_id} className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
              <div className="md:flex">
                <div className="md:shrink-0 sm:mr-5">
                  <Image
                    src={`/blog${item.picture[0]}`}
                    width="250"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="object-cover h-52 ml-auto mr-auto md:flex"
                  />
                </div>
                <div className="pt-1 mt-2 text-center w-full h-48 overflow-hidden md:text-left">
                  <Link href={{
                    pathname: `/admin?name=/${item.b_id }`,
                    // query: { id: item._id, topic: item.topic, detail: item.detail },
                  }}
                    className="hover:underline">
                    <div className="font-medium flex justify-between">
                      <span className="text-left">
                        {item.formattedDate} {/* Display the formatted date */}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-right"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                    <div className="text-lg mt-4 font-medium">{item.topic}</div>
                  </Link>
                  <div className="mt-4 break-words">{item.detail.split('\n')[0]}</div>
                </div>
              </div>
              <div className="border-b border-black mt-10"></div>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex justify-center"> {/* Flex container with justify-end */}
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
      </div>
    </>
  );
}
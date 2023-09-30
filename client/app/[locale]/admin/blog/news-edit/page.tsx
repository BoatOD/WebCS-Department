'use client'
import React, { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import Image from 'next/image';
import { sidebarItem } from '@/app/[locale]/(home)/news_events/sidebarData';
import Sidebar1 from '@/components/Sidebar1';
import Link from 'next/link'

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

export default function News() {
  const [data, setData] = useState<NewsEvent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page
  const [edit, setEdit] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [date, setDate] = useState(Date);

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

  // Function to format a Date object
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
    // return date.toLocaleDateString('th-TH', options); // 'th-TH' is the locale for Thai language
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

  const changeEdit = () => {
    setEdit(!edit);
  };

  const onSelectFile = (event: any) => {
    const selectFile = event.target.files;
    const selectFileArray = Array.from(selectFile);
    const imagesArray = selectFileArray.map((file: any) => {
      return URL.createObjectURL(file)
    })
    setSelectedImages(imagesArray);
  }

  const onDate = (event: any) => {
    setDate(event.target.date)
    console.log(event.target.value)
  }

  return (
    <>
      <div className='flex w-full justify-center mt-10'>
        <button
          className={edit ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
          onClick={changeEdit}
        >Create News</button>
      </div>
      <div className={edit ? "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center" : "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] hidden"}>
        <form className='w-full'>
          <input type="text" name="b_id" id="b_id" value="" hidden />
          <input type="text" name="status" id="status" value="pass" hidden />
          <div className="space-y-12 w-full">
            <div className="border-b border-gray-900/10 pb-12 w-full">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 w-full">
                <div className="sm:col-span-4">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Topic
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    English Topic
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Undertaker
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Location
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    English Location
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value=""
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <input type="date" onChange={onDate} value={date} />
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Detail
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={15}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    English Detail
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={15}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Photo
                  </label>
                  <div className="mt-2 flex flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className='flex flex-wrap images'>
                      {selectedImages &&
                        selectedImages.map((image, index) => {
                          return (
                            <div key={image} className='image mr-3'>
                              <img src={image} className='max-h-72 mb-3 rounded-md' />
                              <button
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-3"
                                onClick={() => {
                                  setSelectedImages(selectedImages.filter((e) => e !== image))
                                }}>
                                Delete Image
                              </button>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={onSelectFile} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={changeEdit}>
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className={edit ? "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] hidden" : "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem]"}>
        <div className="w-full md:w-2/3 order-last md:order-first ">
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
                    pathname: `/admin/blog/news-edit/${item.b_id}`,
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
      </div>
    </>
  );
}

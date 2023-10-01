'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
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
  const [edit, setEdit] = useState(false);
  const [date, setDate] = useState(Date);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    b_id: 0,
    topic: "",
    e_topic: "",
    detail: "",
    e_detail: "",
    date: "",
    location: "",
    e_location: "",
    category: "",
    nflag: false,
    picture: [],
    eflag: true,
    status: "coming",
    undertaker: "",
  });

  useEffect(() => {
    // Define the id you want to retrieve
    const idToFetch = id;

    // Fetch data from the backend API when the component mounts
    fetch('https://cs-project-ime1.vercel.app/api/news_events')
      .then((response) => response.json())
      .then((data) => {
        // Find the item with the matching b_id
        const foundItem = data.find((item: NewsEvent) => item.b_id === parseInt(idToFetch));

        if (foundItem) {
          // If the item is found, you can format its date and set it to your state
          const date: Date = new Date(foundItem.date);
          const formattedDate: string = formatDate(date);
          const formattedItem = { ...foundItem, formattedDate, date };
          const formattedDate2: string = formatDate2(date);

          setDate(formattedDate2)

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
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
    // return date.toLocaleDateString('th-TH', options); // 'th-TH' is the locale for Thai language
  }

  function formatDate2(date = new Date()) {
    const year = date.toLocaleString('en-CA', { year: 'numeric' });
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });
    const day = date.toLocaleString('default', { day: '2-digit' });

    return [year, month, day].join('-');
  }

  const itemIndex = 0;
  const item: NewsEvent = data[itemIndex];

  const changeEdit = () => {
    setEdit(!edit);
  };

  const onDate = (event: any) => {
    setDate(event.target.date)
    console.log(event.target.value)
  }

  const onSelectFile = (event: any) => {
    const selectFile = event.target.files;
    const selectFileArray = Array.from(selectFile);
    const imagesArray = selectFileArray.map((file: any) => {
      return URL.createObjectURL(file)
    })
    setSelectedImages(imagesArray);

  }

  return (
    <>
      <div className="flex flex-col space-y-2 mt-2 mx-10">
        <div className="px-8 py-0.5 bg-black w-full "></div>
      </div>
      <div className="flex flex-row space-y-2 mt-2 mx-10 mb-16 justify-between">
        <h1 className='text-[#EB8E1B] text-5xl font-medium text-left'>EVENTS</h1>

      </div>
      <div className='flex w-full justify-center'>
        <button
          className={edit ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
          onClick={changeEdit}
        >Edit</button>
      </div>
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center">
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
                  <div className={edit ? "hidden" : ""}>

                    <h1 className='text-5xl font-medium text-left p-5 break-words'>{item.topic}</h1>

                    <p className='p-5 pb-1 text-lg font-medium'>{item.formattedDate}</p>
                    <p className='pl-5'>{item.location}</p>

                    {item.picture.length === 1 ? (
                      <div className="text-center items-center p-5">
                        <div className="flex justify-center items-center">
                          <Image
                            src={`/blog${item.picture[0]}` ?? "#"}
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

                    <div className="border-b border-black mt-5"></div>


                    <div className="p-5">
                      <p className='break-words'>
                        {formatTextWithLinks(item.detail)}
                      </p>
                    </div>
                  </div>
                  <div className={edit ? "" : "hidden"}>
                    <form className='w-full'>
                      <input type="text" name="b_id" id="b_id" value={item.b_id} hidden />
                      <input type="text" name="status" id="status" value={item.status} hidden />
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
                                  value={item.topic}
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
                                  value={item.e_topic}
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
                                  value={item.undertaker}
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
                                  value={item.location}
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
                                  value={item.e_location}
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
                                  defaultValue={item.detail}
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
                                  defaultValue={item.e_detail}
                                />
                              </div>
                            </div>
                            <div className="col-span-full">
                              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Photo
                              </label>
                              <div className="mt-2 flex flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                {item.picture.length === 0 ? (
                                  <>
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
                                  </>
                                ) : (
                                  <>
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
                                  </>
                                )}
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
                </div>
              ) : (
                <div>Data not found.</div>
              )
            )}
          </div>
        </div>
      </div>
    </>


  )
}

export default EventsDetail
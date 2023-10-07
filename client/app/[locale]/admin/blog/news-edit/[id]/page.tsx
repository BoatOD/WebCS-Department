"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import axios from "axios";
import { Button } from "@nextui-org/react";

type Params = {
  params: {
    id: string;
  };
};

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

const ProductDetail = ({ params: { id } }: Params) => {
  const [data, setData] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const [edit, setEdit] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [date, setDate] = useState(Date);
  const idToFetch = id;

  useEffect(() => {
    // Define the id you want to retrieve
    const idToFetch = id;

    // Fetch data from the backend API when the component mounts
    fetch("https://cs-project-ime1.vercel.app/api/news_eventsadmin")
      .then((response) => response.json())
      .then((data) => {
        // Find the item with the matching b_id
        const foundItem = data.find(
          (item: NewsEvent) => item._id === idToFetch
        );

        if (foundItem) {
          // If the item is found, you can format its date and set it to your state
          const date: Date = new Date(foundItem.date);
          const formattedDate: string = formatDate(date);
          const formattedItem = { ...foundItem, formattedDate, date };
          const formattedDate2: string = formatDate2(date);

          // var Datetest = formattedDate.replace(/ /g, "-")
          setDate(formattedDate2);

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

  const fetchblog = async () => {
    try {
      const res = await axios.get<NewsEvent>(
        `http://localhost:8080/api/viewedit/${idToFetch}`
      );

      const data = res.data;
      console.log(typeof data);
      if (data) {
        // If the item is found, you can format its date and set it to your state

        const date: Date = new Date(data.date);

        const formattedDate2: string = formatDate2(date);
        data["formattedDate"] = formattedDate2;
        // var Datetest = formattedDate.replace(/ /g, "-")
      }

      formik.setValues({
        topic: data.topic,
        e_topic: data.e_topic,
        detail: data.detail,
        e_detail: data.e_detail,
        location: data.location,
        e_location: data.e_location,
        status: data.status,
        category: data.category,
        date: data.formattedDate,
        picture: [],
      });
    } catch (error) {
      console.error(error);
    }
  };

  function formatTextWithLinks(text: string): React.ReactNode[] {
    // Regular expression to match URLs in text
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Split text by line breaks and process each line
    const lines = text.split("\n");

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
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
    // return date.toLocaleDateString('th-TH', options); // 'th-TH' is the locale for Thai language
  }

  function formatDate2(date = new Date()) {
    const year = date.toLocaleString("en-CA", { year: "numeric" });
    const month = date.toLocaleString("default", {
      month: "2-digit",
    });
    const day = date.toLocaleString("default", { day: "2-digit" });

    return [year, month, day].join("-");
  }

  const itemIndex = 0;
  const item: NewsEvent = data[itemIndex];

  const changeEdit = () => {
    setEdit(!edit);
  };

  const onSelectFile = (event: any) => {
    const selectFile = event.target.files;
    const selectFileArray = Array.from(selectFile);
    const imagesArray = selectFileArray.map((file: any) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imagesArray);
  };

  const onDate = (event: any) => {
    setDate(event.target.value);
    formik.setFieldValue("date", date);
    console.log(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      topic: "",
      e_topic: "",
      detail: "",
      e_detail: "",
      location: "",
      e_location: "",
      status: "",
      category: "",
      date: "",
      picture: [],
    },
    onSubmit: async (values) => {
      console.log(values);

      alert(JSON.stringify(values, null, 2));
      try {
        alert("success");
        const data = values;
        console.log(data);
        const res = await axios.post(
          `http://localhost:8080/api/newsup/${idToFetch}`,
          data
        );
        window.location.href="http://localhost:3000/admin/blog/news-edit"
      } catch (error) {
        alert(error);
      }
    },
  });

  useEffect(() => {
    fetchblog();
  }, []);
  return (
    <>
      <div className="flex w-full justify-center mt-10">
        <button
          className={
            edit
              ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          }
          onClick={changeEdit}
        >
          Edit
        </button>
      </div>
      <div
        className={
          edit
            ? "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] hidden"
            : "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center"
        }
      >
        <div className="w-full md:w-2/3 order-last md:order-first">
          <div className="p-1 pt-3 ">
            {loading ? (
              <div role="status">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
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
            ) : item ? (
              <div>
                <h1 className="text-5xl font-medium text-left p-5 break-words">
                  {item.topic}
                </h1>
                <p className="p-5 pb-1 text-lg font-medium">
                  By Computer Science Department
                </p>
                <p className="pl-5">{item.formattedDate}</p>

                <div className="border-b border-black mt-10"></div>

                {item.picture.length === 1 ? (
                  <div className="text-center items-center p-5">
                    <div className="flex justify-center items-center">
                      <Image
                        src={`/blog${item.picture[0]}` ?? "#"}
                        width="600"
                        height="0"
                        alt="news-image"
                        className="h-auto object-none"
                      />
                    </div>
                  </div>
                ) : item.picture.length === 2 ? (
                  <div className="flex justify-center">
                    {item.picture.map((pic, index) => (
                      <div
                        key={index}
                        className="text-center items-center p-5 px-2"
                      >
                        <div className="flex justify-center items-center">
                          <Image
                            src={`/blog${pic}` ?? "#"}
                            width="300" // You can adjust the width as needed
                            height="0"
                            alt={`news-image-${index}`}
                            className="h-auto object-none"
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
                            className="h-auto object-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="p-5">
                  <p className="break-words">
                    {formatTextWithLinks(item.detail)}
                  </p>
                </div>
              </div>
            ) : (
              <div>Data not found.</div>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          edit
            ? "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center"
            : "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] hidden"
        }
      >
        {item ? (
          <form className="w-full">
            <input type="text" name="b_id" id="b_id" value={item.b_id} hidden />
            <input
              type="text"
              name="status"
              id="status"
              onChange={formik.handleChange}
              value={formik.values.status}
              hidden
            />
            <div className="space-y-12 w-full">
              <div className="border-b border-gray-900/10 pb-12 w-full">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 w-full">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Topic
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="topic"
                        id="topic"
                        autoComplete="given-name"
                        onChange={formik.handleChange}
                        value={formik.values.topic}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      English Topic
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="e_topic"
                        id="e_topic"
                        autoComplete="given-name"
                        onChange={formik.handleChange}
                        value={formik.values.e_topic}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
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
                  </div> */}
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="given-name"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      English Location
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="e_location"
                        id="e_location"
                        autoComplete="given-name"
                        onChange={formik.handleChange}
                        value={formik.values.e_location}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date
                    </label>
                    <input type="date" onChange={onDate} value={date} />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Detail
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="detail"
                        name="detail"
                        rows={15}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.detail}
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      English Detail
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="e_detail"
                        name="e_detail"
                        rows={15}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={formik.handleChange}
                        value={formik.values.e_detail}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Photo
                    </label>
                    <div className="mt-2 flex flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {item.picture.length === 0 ? (
                        <>
                          <div className="flex flex-wrap images">
                            {selectedImages &&
                              selectedImages.map((image, index) => {
                                return (
                                  <div key={image} className="image mr-3">
                                    <img
                                      src={image}
                                      className="max-h-72 mb-3 rounded-md"
                                    />
                                    <button
                                      type="button"
                                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-3"
                                      onClick={() => {
                                        setSelectedImages(
                                          selectedImages.filter(
                                            (e) => e !== image
                                          )
                                        );
                                      }}
                                    >
                                      Delete Image
                                    </button>
                                  </div>
                                );
                              })}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-wrap images">
                            {selectedImages &&
                              selectedImages.map((image, index) => {
                                return (
                                  <div key={image} className="image mr-3">
                                    <img
                                      src={image}
                                      className="max-h-72 mb-3 rounded-md"
                                    />
                                    <button
                                      type="button"
                                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-3"
                                      onClick={() => {
                                        setSelectedImages(
                                          selectedImages.filter(
                                            (e) => e !== image
                                          )
                                        );
                                      }}
                                    >
                                      Delete Image
                                    </button>
                                  </div>
                                );
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
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                            onChange={onSelectFile}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
              <Button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={changeEdit}
              >
                Cancel
              </Button>
              <Button
                onPress={() => formik.submitForm()}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Save
              </Button>
            </div>
          </form>
        ) : (
          <div>Data not found.</div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;

'use client'
import React, { useEffect, useState } from 'react';
import { BlogProps } from '@/types/blog';
import NewEvent from '@/components/admin/News'
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';

export default function News() {
  const [data, setData] = useState<BlogProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [edit, setEdit] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [date, setDate] = useState(Date);

  const formik = useFormik({
    initialValues: {
      title: "",
      e_title: "",
      detail: "",
      e_detail: "",
      date: "",
      location: "",
      e_location: "",
      category: "",
      nflag: "",
      eflag: "",
      status: "",
      undertaker: "",
      picture: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      e_name: Yup.string().required("Required"),

      job_type: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const data = { ...values };
      console.log(values);
      // try {
      //   const res = await axios.post(`http://localhost:8080/people`, data);
      //   console.log(res.data);
      //   formik.resetForm();
      //   setSelectedImages([]);
      //   alert("success");
      // } catch (error) {
      //   console.log(error);
      //   alert("failed");
      // }
    },
  });

  useEffect(() => {
    fetch('https://cs-project-ime1.vercel.app/api/news_eventsadmin')
      .then((response) => response.json())
      .then((data) => {
        const formattedData: BlogProps[] = data.map((item: BlogProps) => {
          const date: Date = new Date(item.date);
          const formattedDate: string = formatDate(date);
          return { ...item, formattedDate };
        });
        const passEvents = formattedData.filter((item) => item.status === 'pass');
        setData(passEvents);
      })
      .catch((error) => console.error(error));
  }, []);

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
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
    setDate(event.target.value)
    console.log(event.target.value)
  }

  const isFormFieldInvalid = (name: string) =>
    !!(formik.touched[name as keyof typeof formik.touched] && formik.errors[name as keyof typeof formik.errors]);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: Function) => {
    const fileList = e.target.files;
    // console.log(fileList);
    let pictureArray = [];
    if (fileList){
      for (let i = 0; i < fileList.length; i++) {
        // console.log(fileList[i]);
        if (fileList[i].size / 1024 / 1024 < 2) {
          const base64 = await convertToBase64(fileList[i]);
          pictureArray[i] = base64;
          setFieldValue(`picture${i}`, pictureArray);

        } else {
          alert("Image size must be of 2MB or less");
        }
      }
      
    }
  };

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center">
        <div className="w-full md:w-2/3 order-last md:order-first mb-9">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className='flex w-full justify-center mt-10'>
            <button
              className={edit ? "hidden" : "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"}
              onClick={changeEdit}
            >Create News</button>
          </div>
          <div className={edit ? "hidden" : ""}>
            {/* Show Blog */}
            <NewEvent data={displayedItems}></NewEvent>
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
          <div className={edit ? "flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center" : "hidden"}>
            <form className='w-full'>
              <div className="space-y-12 w-full">
                <div className="border-b border-gray-900/10 pb-12 w-full">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 w-full">
                    <div className="sm:col-span-4">
                      <label htmlFor="topic" className="block text-sm font-medium leading-6 text-gray-900">
                        Topic
                      </label>
                      <div className="mt-2">
                        <Input
                          type="text"
                          label="Topic"
                          isInvalid={isFormFieldInvalid("topic")}
                          errorMessage={isFormFieldInvalid("topic") && formik.errors.title}
                          value={formik.values.title}
                          onChange={(e) => {
                            formik.setFieldValue("topic", e.target.value);
                          }}
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
                    <Select
                      labelPlacement="outside"
                      label="ประเภท"
                      placeholder="เลือกประเภท"
                      className="max-w-xs"
                      selectedKeys={formik.values.status}
                      selectionMode="single"
                      isInvalid={isFormFieldInvalid("status")}
                      errorMessage={
                        isFormFieldInvalid("status") && formik.errors.status
                      }
                      onChange={(e) => {
                        formik.setFieldValue("status", e.target.value);
                      }}
                    >
                      <SelectItem key="L" value="L">
                        Pass
                      </SelectItem>
                      <SelectItem key="S" value="S">
                        Coming
                      </SelectItem>
                    </Select>
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
                          rows={10}
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
                          rows={10}
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
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={(e) => { handleImage(e, formik.setFieldValue); }} />
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
                <Button onPress={() => formik.submitForm()} color="success">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

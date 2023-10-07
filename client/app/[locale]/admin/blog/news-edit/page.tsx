"use client";
import React, { useEffect, useState } from "react";
import { BlogProps } from "@/types/blog";
import NewEvent from "@/components/admin/News";
import { useFormik } from "formik";
import axios from "axios";
import { Button, Textarea } from "@nextui-org/react";

export default function News() {
  const [data, setData] = useState<BlogProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [edit, setEdit] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [date, setDate] = useState(Date);

  useEffect(() => {
    fetch("https://cs-project-ime1.vercel.app/api/news_eventsadmin")
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
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
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
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const changeEdit = () => {
    setEdit(!edit);
  };

  const onDate = (event: any) => {
    setDate(event.target.value)
    console.log(event.target.value)
  }

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: Function) => {
    const fileList = e.target.files;
    // console.log(fileList);
    let pictureArray: string[] = [];
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        console.log(fileList[i]);
        if (fileList[i].size / 1024 / 1024 < 2) {
          const base64 = await convertToBase64(fileList[i]) as string;
          pictureArray[i] = base64;
          setFieldValue(`picture${i}`, pictureArray);
          setSelectedImages(pictureArray);
        } else {
          alert("ขนาดรูปภาพต้องไม่เกิน 1 Mb");
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

  const deletePicture = (key: any) => {
    setSelectedImages(selectedImages.filter((e) => e !== key))
    formik.setFieldValue("picture", selectedImages.filter((e) => e !== key));
  }

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
      // console.log(values);

      // alert(JSON.stringify(values, null, 2));
      try {
        alert("success");
        const data = values;
        console.log(data);
        const res = await axios.post(
          `https://cs-project-ime1.vercel.app/api/create-news`,
          data
        );
        formik.resetForm();
        // setEdit(!edit);
        location.reload();
        // window.location.href = "https://cs-project-taupe.vercel.app/admin/people-crud";
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-screen-xl px-[1rem] gap-[3rem] justify-center">
        <div className="w-full md:w-2/3 order-last md:order-first mb-9">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="flex w-full justify-center mt-10">
            <button
              className={
                edit
                  ? "hidden"
                  : "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
              }
              onClick={changeEdit}
            >
              Create News
            </button>
          </div>
          <div className={edit ? "hidden" : ""}>
            {/* Show Blog */}
            <NewEvent data={displayedItems}></NewEvent>
            {/* Pagination */}
            <div className="flex justify-end">
              {" "}
              {/* Flex container with justify-end */}
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
                        className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === page
                          ? "bg-neutral-100 dark:bg-neutral-700 dark:text-white"
                          : ""
                          }`}
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

                    <div className="justify-center mt-5">
                      <label className="">หัวข้อ</label>
                      <input
                        type="text"
                        name="topic"
                        id="topic"
                        className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ใส่หัวข้อ"
                        onChange={(e) => formik.setFieldValue("topic", e.target.value)}
                        value={formik.values.topic}
                      />
                    </div>

                    <div className="justify-center mt-5">
                      <label className="">หัวข้อ ภาษาอังกฤษ</label>
                      <input
                        type="text"
                        name="e_topic"
                        id="e_topic"
                        className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ใส่หัวข้อ ภาษาอังกฤษ"
                        onChange={(e) => formik.setFieldValue("e_topic", e.target.value)}
                        value={formik.values.e_topic}
                      />
                    </div>

                    <div className="justify-center mt-5 w-full">
                      <Textarea
                        label="รายละเอียด"
                        labelPlacement="outside"
                        placeholder="ใส่รายละเอียด"
                        className="radius-none"
                        minRows={17}
                        onChange={(e) => formik.setFieldValue("detail", e.target.value)}
                        value={formik.values.detail}
                      />
                    </div>

                    <div className="justify-center mt-5 w-full">
                      <Textarea
                        label="รายละเอียด ภาษาอังกฤษ"
                        labelPlacement="outside"
                        placeholder="ใส่รายละเอียด ภาษาอังกฤษ"
                        className="radius-none"
                        minRows={17}
                        onChange={(e) => formik.setFieldValue("e_detail", e.target.value)}
                        value={formik.values.e_detail}
                      />
                    </div>

                    <div className="justify-center mt-5">
                      <label className="">สถานที่จัดกิจกรรม</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ใส่สถานที่จัดกิจกรรม"
                        onChange={(e) => formik.setFieldValue("location", e.target.value)}
                        value={formik.values.location}
                      />
                    </div>

                    <div className="justify-center mt-5">
                      <label className="">สถานที่จัดกิจกรรม ภาษาอังกฤษ</label>
                      <input
                        type="text"
                        name="e_location"
                        id="e_location"
                        className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ใส่สถานที่จัดกิจกรรม ภาษาอังกฤษ"
                        onChange={(e) =>
                          formik.setFieldValue("e_location", e.target.value)
                        }
                        value={formik.values.e_location}
                      />
                    </div>

                    <div className="justify-center mt-5 w-1/4">
                      <label
                        placeholder="ตำแหน่งทางวิชาการ (ภาษาไทย)"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        วัน/เดือน/ปี ที่จัดกิจจกรรม
                      </label>
                      <input type="date" onChange={onDate} value={date} />
                    </div>

                    <div className="justify-center mt-5 w-1/4">
                      <label
                        placeholder="ตำแหน่งทางวิชาการ (ภาษาไทย)"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        สถานะ
                      </label>

                      <select
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                        id="status"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>เลือกสถานะ</option>
                        <option value="pass"> ผ่านไปแล้ว</option>
                        <option value="coming">ยังมาไม่ถึง</option>
                      </select>
                    </div>

                    <div className="justify-center mt-5 w-1/4">
                      <label
                        placeholder="ตำแหน่งทางวิชาการ (ภาษาไทย)"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        หมวด
                      </label>
                      <select
                        name="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>ประเภท</option>
                        <option value="announcement"> announcement</option>
                        <option value="training course">training course</option>
                        <option value="congratulation"> congratulation</option>
                        <option value="event">event</option>
                      </select>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        อัพโหลดรูปภาพ
                      </label>
                      <div className="mt-2 flex flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
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
                                      deletePicture(image)
                                    }}>
                                    ลบรูปภาพ
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>อัพโหลดรูปภาพ</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={(e) => { handleImage(e, formik.setFieldValue); }} />
                          </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG ไม่เกิน 1 MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 mb-6 flex items-center justify-end gap-x-6">
                <Button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={changeEdit}>
                  Cancel
                </Button>
                <Button onPress={() => formik.submitForm()} className="text-sm font-semibold leading-6 text-gray-900" color="success">
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

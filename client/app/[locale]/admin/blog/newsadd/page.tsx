"use client";
import { Button, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { link } from "fs/promises";
import React, { useState } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

type Props = {};

export default function Page({}: Props) {
  const [date, setDate] = useState(Date);
  const onDate = (event: any) => {
    setDate(event.target.value);
    formik.setFieldValue("date", date);
    console.log(event.target.value);
  };

  const cancel = async () => {
    window.location.href = "http://localhost:3000/admin/blog"
  };
  const handleImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: Function
  ) => {
    const fileList = e.target.files;
    // console.log(fileList);
    let pictureArray = [];
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        console.log(fileList[i]);
        if (fileList[i].size / 1024 / 1024 < 2) {
          const base64 = await convertToBase64(fileList[i]);
          pictureArray[i] = base64;
        } else {
          alert("Image size must be of 2MB or less");
        }
      }
      setFieldValue("picture", pictureArray);
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
          `http://localhost:8080/api/create-news`,
          data
        );
        formik.resetForm();
        // window.location.href = "http://localhost:3000/admin/people-crud";
      } catch (error) {
        alert(error);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-center">Create New & Events</h1>

          <div className="justify-center mt-5">
            <label className="">topic</label>
            <input
              type="text"
              name="topic"
              id="topic"
              className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="topic"
              onChange={(e) => formik.setFieldValue("topic", e.target.value)}
              value={formik.values.topic}
            />
          </div>

          <div className="justify-center mt-5">
            <label className="">topic(Eng)</label>
            <input
              type="text"
              name="e_topic"
              id="e_topic"
              className="w-[345px] bg te-gray-50 border border-gray-300xt-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="topic(Eng)"
              onChange={(e) => formik.setFieldValue("e_topic", e.target.value)}
              value={formik.values.e_topic}
            />
          </div>

          <div className="justify-center mt-5 w-1/4">
            <Textarea
              label="Detail"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="radius-none"
              minRows={5}
              onChange={(e) => formik.setFieldValue("detail", e.target.value)}
              value={formik.values.detail}
            />
          </div>
          <div className="justify-center mt-5 w-1/4">
            <Textarea
              label="Detail (Eng)"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="radius-none"
              minRows={5}
              onChange={(e) => formik.setFieldValue("e_detail", e.target.value)}
              value={formik.values.e_detail}
            />
          </div>
          <div className="justify-center mt-5">
            <label className="">location</label>
            <input
              type="text"
              name="location"
              id="location"
              className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="location"
              onChange={(e) => formik.setFieldValue("location", e.target.value)}
              value={formik.values.location}
            />
          </div>
          <div className="justify-center mt-5">
            <label className="">location(Eng)</label>
            <input
              type="text"
              name="e_location"
              id="e_location"
              className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="location(Eng)"
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
              <option selected>เลือกสถานะ</option>
              <option value="announcement"> announcement</option>
              <option value="training course">training course</option>
              <option value="congratulation"> congratulation</option>
              <option value="event">event</option>
            </select>
          </div>
          <div className="justify-center mt-5 w-1/4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              อัพโหลดรูป
            </label>
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
                    onChange={(e) => {
                      handleImage(e, formik.setFieldValue);
                    }}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
          <div className="justify-between my-5 gap-5">
            <Button onPress={() => formik.submitForm()} color="success">
              บันทึก
            </Button>
            <Button className="ml-5" color="success" onClick={cancel}>
              ยกเลิก
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

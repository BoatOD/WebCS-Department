"use client";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { link } from "fs/promises";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const convertToBase64 = (file: any) => {
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

  const handleImage = async (e: any, setFieldValue: any) => {
    const file = e.target.files[0];
    //check the size of image
    if (file?.size / 1024 / 1024 < 2) {
      const base64 = await convertToBase64(file);
      setFieldValue("picture", base64);
    } else {
      alert("Image size must be of 2MB or less");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      e_title: "",
      name: "",
      e_name: "",
      tel: "",
      email: "",
      position: "",
      e_position: "",
      affiliation: "",
      e_affiliation: "",
      job_type: "",
      personal_web: "",
      research_interest: "",
      picture: null,
    },
    onSubmit: async (values) => {
      try {
        alert("success");
        const data = values;
        console.log(data);
        const res = await axios.post(
          `http://localhost:8080/api/peopleadd`,
          data
        );
        formik.resetForm();
        window.location.href = "http://localhost:3000/admin/people-crud";
      } catch (error) {
        alert(error);
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row justify-center mt-3 mr-4">
          <h1 className="text-5xl">Create People</h1>
        </div>

        <div className="flex flex-row mx-9 my-2 gap-x-2 mt-4">
          <div className="basis-3/12 ml-2">
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ตำแหน่ง (ภาษาไทย) (หากมีหลายตำแหน่งให้คั่นด้วย &quot; , &quot; )
            </label>
            <input
              type="text"
              name="position"
              id="position"
              className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ตำแหน่ง (ภาษาไทย)"
              onChange={formik.handleChange}
              value={formik.values.position}
            />
          </div>

          <div className="basis-3/12 mr-2">
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ตำแหน่ง (Eng) (หากมีหลายตำแหน่งให้คั่นด้วย &quot; , &quot; )
            </label>
            <input
              type="text"
              name="e_position"
              id="e_position"
              className="w-[345px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" ตำแหน่ง (Eng)"
              onChange={formik.handleChange}
              value={formik.values.e_position}
            />
          </div>
        </div>

        <div className="flex flex-row mx-9 my-2 gap-x-2">
          <div className="basis-3/12 m-2  ">
            <label
              placeholder="ตำแหน่งทางวิชาการ (ภาษาไทย)"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ตำแหน่งทางวิชาการ (ภาษาไทย)
            </label>
            <select
              name="affiliation"
              onChange={formik.handleChange}
              value={formik.values.affiliation}
              id="affiliation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>เลือกต่ำแหน่งวิชาการ</option>
              <option value="ศาสตราจารย์">ศาสตราจารย์</option>
              <option value="รองศาสตราจารย์">รองศาสตราจารย์</option>
              <option value="ผู้ช่วยศาสตราจารย์">ผู้ช่วยศาสตราจารย์</option>
              <option value="อาจารย์">อาจารย์</option>
              <option value="null">ไม่มี</option>
            </select>
          </div>

          <div className="basis-3/12 m-2 ">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              คำนำหน้านาม (ไทย)
            </label>
            <select
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>คำนำหน้านาม (ไทย)</option>
              <option value="ดร.">ดร.</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
              <option value="ไม่มี">ไม่มี</option>
            </select>
          </div>

          <div className="basis-6/12 m-2 ">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ชื่อ-นามสกุล (ภาษาไทย)
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ชื่อ-นามสกุล (ภาษาไทย)"
            />
          </div>
        </div>

        <div className="flex flex-row mx-9 my-2 gap-x-2">
          <div className="basis-3/12 m-2  ">
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              คำนำหน้าตำแหน่งทางวิชาการ (Eng)
            </label>
            <select
              onChange={formik.handleChange}
              value={formik.values.e_affiliation}
              name="e_affiliation"
              id="e_affiliation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>คำนำหน้าตำแหน่งทางวิชาการ (Eng)</option>
              <option value="Professor">Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Lecturer">Lecturer</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="basis-3/12 m-2 ">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              คำนำหน้านาม (Eng)
            </label>
            <select
              onChange={formik.handleChange}
              value={formik.values.e_title}
              name="e_title"
              id="e_title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>คำนำหน้านาม (Eng)</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss">Miss</option>
              <option value="null">None</option>
            </select>
          </div>

          <div className="basis-6/12 m-2 ">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ชื่อ-นามสกุล (Eng)
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.e_name}
              type="text"
              name="e_name"
              id="e_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ชื่อ-นามสกุล (Eng)"
            />
          </div>
        </div>

        <div className="flex flex-row mx-9 my-2 gap-x-2 mt-[5rem]">
          <div className="basis-3/12 m-2 ">
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              เบอร์โทรศัพท์ (หากมีหลายเบอร์ให้คั่นด้วย &quot; , &quot; )
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.tel}
              type="text"
              name="tel"
              id="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="เบอร์โทรศัพท์"
            />
          </div>

          <div className="basis-3/12 m-2 ">
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email (หากมีหลาย email ให้คั่นด้วย &quot; , &quot; )
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className="basis-6/12 m-2">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              รูปภาพ
            </label>
            <input
              type="file"
              className="max-w-md"
              onChange={(e) => {
                handleImage(e, formik.setFieldValue);
              }}
            />
          </div>
        </div>
        <div className="flex flex-row mx-9 my-2 gap-x-2">
          <div className="basis-3/12 m-2  ">
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Job type
            </label>
            <select
              id="job_type"
              name="job_type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={formik.handleChange}
              value={formik.values.job_type}
            >
              <option selected>เลือกประเภท</option>
              <option value="L">Lectur</option>
              <option value="S">Staff</option>
            </select>
          </div>

          <div className="basis-3/12 m-2 ">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              เว็บไซต์ส่วนตัว
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.personal_web}
              type="text"
              name="personal_web"
              id="personal_web"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอก  URL"
            />
          </div>

          <div className="basis-6/12 m-2 ">
            {" "}
            <label
              placeholder="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              งานวิจัยที่สนใจ
            </label>
            <input
              type="text"
              name="research_interest"
              id="research_interest"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอกงานวิจัยที่สนใจ"
              onChange={formik.handleChange}
              value={formik.values.research_interest}
            />
          </div>
        </div>

        <div className="flex flex-row justify-center mt-3">
          <Button type="submit" color="success">
            บันทึก
          </Button>
        </div>
      </form>
    </>
  );
}

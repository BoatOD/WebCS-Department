"use client";
import {
  Input,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CreateModal from "@/components/admin/CreateMoal";
import axios from "axios";

export default function PeopleForm() {
  const [tel, setTel] = useState<any>([]);
  const [email, setEmail] = useState<any>([]);
  const [position, setPosition] = useState<any>([]);
  const [e_position, setE_position] = useState<any>([]);
  const formik = useFormik({
    initialValues: {
      title: "",
      e_title: "",
      name: "",
      e_name: "",
      affiliation: "",
      e_affiliation: "",
      picture: null,
      job_type: "",
      personal_web: "",
      research_interest: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      e_name: Yup.string().required("Required"),
      job_type: Yup.string().required("Required"),
    }),
    
    onSubmit: async (values) => {
      const data = {
        ...values,
        tel: [...tel],
        email: [...email],
        position: [...position],
        e_position: [...e_position],
      };
      try {
        const res = await axios.post(`https://cs-project-ime1.vercel.app/people`, data);
        console.log(res.data);
        formik.resetForm();
        setTel([]);
        setEmail([]);
        setPosition([]);
        setE_position([]);
        alert("success");
      } catch (error) {
        console.log(error);
        alert("failed");
      }
    },
  });

  const isFormFieldInvalid = (name: string) =>
    !!(formik.touched[name as keyof typeof formik.touched] && formik.errors[name as keyof typeof formik.errors]);

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

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: Function) => {
    const file =  e.target.files && e.target.files[0];
    //check the size of image
    if (file && file?.size / 1024 / 1024 < 2) {
      const base64 = await convertToBase64(file);
      setFieldValue("picture", base64);
    } else {
      alert("Image size must be of 2MB or less");
    }
  };

  const [selectedType, setSelectedType] = useState<Set<string>>(new Set());

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(new Set([e.target.value]));
  };
  
  const formatArray = (arr: Array<string>) => {
    return arr.join(" , ");
  };

  return (
    <form>
      <div className="grid grid-cols-4 gap-3">
        <div className="h-unit-10 min-h-unit-10">
          <Input
            type="text"
            label="คำนำหน้า"
            isInvalid={isFormFieldInvalid("title")}
            errorMessage={isFormFieldInvalid("title") && formik.errors.title}
            className="max-w-xs"
            value={formik.values.title}
            onChange={(e) => {
              formik.setFieldValue("title", e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            label="คำนำหน้าภาษาอังกฤษ"
            isInvalid={isFormFieldInvalid("e_title")}
            errorMessage={
              isFormFieldInvalid("e_title") && formik.errors.e_title
            }
            className="max-w-xs"
            value={formik.values.e_title}
            onChange={(e) => {
              formik.setFieldValue("e_title", e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            label="ชื่อ"
            isInvalid={isFormFieldInvalid("name")}
            errorMessage={isFormFieldInvalid("name") && formik.errors.name}
            className="max-w-xs"
            value={formik.values.name}
            onChange={(e) => {
              formik.setFieldValue("name", e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            label="ชื่อภาษาอังกฤษ"
            isInvalid={isFormFieldInvalid("e_name")}
            errorMessage={isFormFieldInvalid("e_name") && formik.errors.e_name}
            className="max-w-xs"
            value={formik.values.e_name}
            onChange={(e) => {
              formik.setFieldValue("e_name", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <p className="text-lg font-semibold mt-5">เบอร์โทร</p>
        <p className="text-base font-base mt-5">{formatArray(tel)}</p>
        <CreateModal text="เบอร์โทร" data={tel} setData={setTel} />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <p className="text-lg font-semibold mt-5">อีเมล</p>
        <p className="text-base font-base mt-5">{formatArray(email)}</p>
        <CreateModal text="อีเมล" data={email} setData={setEmail} />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <p className="text-lg font-semibold mt-5">ตำแหน่ง</p>
        <p className="text-base font-base mt-5">{formatArray(position)}</p>
        <CreateModal text="ตำแหน่ง" data={position} setData={setPosition} />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <p className="text-lg font-semibold mt-5">ตำแหน่งภาษาอังกฤษ</p>
        <p className="text-base font-base mt-5">{formatArray(e_position)}</p>
        <CreateModal
          text="ตำแหน่งภาษาอังกฤษ"
          data={e_position}
          setData={setE_position}
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div>
          <Input
            type="text"
            label="ตำแหน่งทางวิชาการ"
            isInvalid={isFormFieldInvalid("affiliation")}
            errorMessage={
              isFormFieldInvalid("affiliation") && formik.errors.affiliation
            }
            className="max-w-xs"
            value={formik.values.affiliation}
            onChange={(e) => {
              formik.setFieldValue("affiliation", e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            label="ตำแหน่งทางวิชาการภาษาอังกฤษ"
            isInvalid={isFormFieldInvalid("e_affiliation")}
            errorMessage={
              isFormFieldInvalid("e_affiliation") && formik.errors.e_affiliation
            }
            className="max-w-xs"
            value={formik.values.e_affiliation}
            onChange={(e) => {
              formik.setFieldValue("e_affiliation", e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="file"
            className="max-w-xs"
            onChange={(e) => {
              handleImage(e, formik.setFieldValue);
            }}
          />
        </div>
        <div>
          <Select
            labelPlacement="outside"
            label="ประเภท"
            placeholder="เลือกประเภท"
            className="max-w-xs"
            selectedKeys={formik.values.job_type}
            selectionMode="single"
            isInvalid={isFormFieldInvalid("job_type")}
            errorMessage={
              isFormFieldInvalid("job_type") && formik.errors.job_type
            }
            onChange={(e) => {
              formik.setFieldValue("job_type", e.target.value);
            }}
          >
            <SelectItem key="L" value="L">
              Lecturer
            </SelectItem>
            <SelectItem key="S" value="S">
              Staff
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div>
          <Input
            type="text"
            label="เว็บไซต์"
            isInvalid={isFormFieldInvalid("personal_web")}
            errorMessage={
              isFormFieldInvalid("personal_web") && formik.errors.personal_web
            }
            className="max-w-xs"
            value={formik.values.personal_web}
            onChange={(e) => {
              formik.setFieldValue("personal_web", e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            label="ความสนใจ"
            isInvalid={isFormFieldInvalid("research_interest")}
            errorMessage={
              isFormFieldInvalid("research_interest") &&
              formik.errors.research_interest
            }
            className="max-w-xs"
            value={formik.values.research_interest}
            onChange={(e) => {
              formik.setFieldValue("research_interest", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mt-5">
        <Button onPress={() => formik.submitForm()} color="success">
          บันทึก
        </Button>
      </div>
    </form>
  );
}

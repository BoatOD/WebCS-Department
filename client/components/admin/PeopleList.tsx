import React from "react";
import { PeopleProps } from "@/types/people";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik";

export default function PeopleList({ data }: { data: PeopleProps[] }) {
  // const onDelete = async (_id: string) => {
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:8080/api/people/delete/${params._id}`,
  //       _id
  //     );
  //     console.log(res.data);
  //     alert("success");
  //   } catch (error) {
  //     console.log(error);
  //     alert("failed");
  //   }
  // };
  // const UserDelete = async (id: any) => {
  //   console.log(id);

  //   try {
  //     alert("success");
  //   } catch (error) {
  //     console.log(error);
  //     alert("failed");
  //   }
  // };

  const UserDelete = async (id: any) => {
    console.log(id);

    try {
      const res = await axios.post(
        `http://localhost:8080/api/people/delete/${id}`
      );

      if (res.status === 200) {
        alert("Success");
        window.location.reload();
      } else {
        alert("Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  return (
    <>
      <div>
        {data.map((item) => {
          // console.log(item.position)
          return (
            <div
              key={item._id}
              className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10"
            >
              <div className="md:flex">
                <div className="hidden" id="id_pass">
                  {item.e_id}
                </div>
                <div className="md:shrink-0 md:justify-center sm:mr-5">
                    <Image
                      src={`${item.picture}`} 
                      width="0"
                      height="0"
                      sizes="100vm"
                      alt=""
                      className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                    />
                </div>

                <div className="pt-1 md:text-left ">
                  <div className="flex">
                    <Button
                      as={Link}
                      href={`/admin/people-crud/editpeople/${item._id}`}
                      color="default"
                    >
                      Edit
                    </Button>
                    <Button
                      color="default"
                      onClick={() => UserDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                  <div>
                    <a
                      href={item.personal_web}
                      className="block mt-1  md:text-left text-lg leading-tight font-semibold text-slate-700 "
                    >
                      {item.affiliation} <br /> {item.title}
                      {item.name} <br />
                      {item.position.map((position, index) => {
                        return (
                          <span key={`position-${index}`}>
                            {position}
                            {index < item.position.length - 1 && <br />}
                          </span>
                        );
                      })}
                    </a>
                  </div>

                  <ul className="list-none text-left text-base text-slate-600 mt-3 mb-3 font-normal">
                    <li>
                      {item.e_affiliation} <br /> {item.e_title} &nbsp;
                      {item.e_name}
                    </li>
                    {item.tel.map((tel, index) => (
                      <li key={`tel-${index}`}>Tel: {tel}</li>
                    ))}
                    {item.email.length > 0 && (
                      <li>
                        Email:{" "}
                        {item.email.map((email, index) => (
                          <span key={`email-${index}`}>
                            {index > 0 && ", "}
                            {email}
                          </span>
                        ))}
                      </li>
                    )}
                    <li>Research Interests: {item.research_interest}</li>
                  </ul>
                  {item.personal_web === "" ? (
                    <></>
                  ) : (
                    <>
                      <a
                        href={item.personal_web}
                        target="_blank"
                        className="inline-block mt-1 text-base leading-tight font-semibold text-slate-600 underline underline-offset-2   hover:text-slate-500"
                      >
                        Personal Website
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

import React from "react";
import RemovePeople from "./RemovePeople";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { Avatar } from "@nextui-org/react";
import { PeopleProps } from "@/types/people";

type Props = {};

const PeopleList = ({ data }: { data: PeopleProps[] }) => {
  return (
    <>
      <div>
        <div className="relative overflow-y-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col text-center" className="px-6 py-3">
                  Avatar
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  Title
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  e_title
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  name
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  e_name
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  tel
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  email
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  postion
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  e_position
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  affiliation
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  e_affiliation
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  jop_type
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  personal web
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  research interest
                </th>
                <th scope="col text-center" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {data.map((item, index) => (
              <tbody key={index}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">
                    <img
                      src={`/personal/staff${item.picture}`}
                      alt={item.name}
                    />
                  </td>
                  <td className="text-center">{item.title}</td>
                  <td className="text-center">{item.e_title}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.e_name}</td>
                  <td className="text-center">{item.tel}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.position}</td>
                  <td className="text-center">{item.e_position}</td>
                  <td className="text-center">{item.affiliation}</td>
                  <td className="text-center">{item.e_affiliation}</td>
                  <td className="text-center">{item.job_type}</td>
                  <td className="text-center">{item.personal_web}</td>
                  <td className="text-center">{item.research_interest}</td>

                  <td className="flex items-center px-6 py-4 space-x-3">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Remove
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      {/* <div className=" p-5 mt-5 border border-slate-300 my-4  justify-between flex flex-row">
        <div>
          <Avatar
            size="lg"
            isBordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>
        <div>title</div>
        <div>e_title</div>
        <div>name</div>
        <div>e_name</div>
        <div>tel</div>
        <div>email</div>
        <div>postion</div>
        <div>e_position</div>
        <div>affiliation</div>
        <div>e_affiliation</div>
        <div>jop_type</div>
        <div>personal web</div>
        <div>research interest</div>

        <div className="flex gap-3">
          <RemovePeople></RemovePeople>
          <Link href={"/admin/people-crud/editpeople/123"}>
            <HiPencilAlt size={24}></HiPencilAlt>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default PeopleList;

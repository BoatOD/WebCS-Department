import React from "react";
import { BlogProps } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import axios from "axios";

export default function BlogList({ data }: { data: BlogProps[] }) {
  const locale = useLocale();
  // Function to format a Date object
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    if (locale === "en") {
      return date.toLocaleDateString(undefined, options);
    } else {
      return date.toLocaleDateString("th-TH", options);
    }
  }

  const UserDelete = async (id: any) => {
    console.log(id);

    try {
      const res = await axios.post(
        `http://localhost:8080/api/news/delete/${id}`
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
          return (
            <div
              key={item._id}
              className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10"
            >
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
                  <Link
                    href={{
                      pathname: `/admin/blog/news-edit/${item._id}`,
                      // query: { id: item._id, topic: item.topic, detail: item.detail },
                    }}
                    className="hover:underline"
                  >
                    <div className="font-medium flex justify-between items-center">
                      <div className="">
                        <span className="text-left">
                          {item.formattedDate}{" "}
                          {/* Display the formatted date */}
                        </span>
                        <Button
                          isIconOnly
                          color="danger"
                          size="sm"
                          onClick={() => UserDelete(item._id)}
                        >
                          <TrashIcon className="w-5 h-5" />
                        </Button>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-right"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className="text-lg mt-4 font-medium">{item.topic}</div>
                  </Link>
                  <div className="mt-4 break-words">
                    {item.detail.split("\n")[0]}
                  </div>
                </div>
              </div>
              <div className="border-b border-black mt-10"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

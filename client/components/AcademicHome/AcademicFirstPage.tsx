import React from "react";
import { CardOfEventProps } from "@/types/cardofevent";
import CardForAcademic from "./CardForAcademic";
import Link from "next/link";

type Props = {};

const AcademicFirstPage = (props: Props) => {
  const posts: CardOfEventProps[] = [
    {
      title: "The Coldest Sunset",
      content:
        "The Computer Science Department admits students to anundergraduate program that you are guaranteed to find rigorousand dedicated to the real-world training and practical problemsolving that has been the hallmark of computer scienceeducation at CMU since its inception.",
      href: "#",
      image: "/master.svg",
    },
    {
      title: "The Coldest Sunset",
      content:
        "The Computer Science Department admits students to anundergraduate program that you are guaranteed to find rigorousand dedicated to the real-world training and practical problemsolving that has been the hallmark of computer scienceeducation at CMU since its inception.",
      href: "#",
      image: "/master.svg",
    },
    {
      title: "The Coldest Sunset",
      content:
        "The Computer Science Department admits students to anundergraduate program that you are guaranteed to find rigorousand dedicated to the real-world training and practical problemsolving that has been the hallmark of computer scienceeducation at CMU since its inception.",
      href: "#",
      image: "/master.svg",
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="flex">
          <div className="flex flex-col space-y-2">
            <div className="px-8 py-0.5 bg-black w-full "></div>
            <Link href="#">
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                Academic
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 ">
          <CardForAcademic posts={posts}></CardForAcademic>
        </div>
      </div>
    </>
  );
};

export default AcademicFirstPage;

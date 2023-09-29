import React from "react";
import { CardOfEventProps } from "@/types/cardofevent";
import CardForAcademic from "./CardForAcademic";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {};

const AcademicFirstPage = (props: Props) => {
  const t = useTranslations('AcademicHome');
  const posts: CardOfEventProps[] = [
    {
      title: "Undergraduate",
      content:
        "The Computer Science Department admits students to an undergraduate program that you are guaranteed to find rigorous and dedicated to the real-world training and practical problem solving that has been the hallmark of computer science education at CMU since its inception.",
      href: "#",
      image: "/1.jpg",
    },
    {
      title: "Master",
      content:
        "We offer three distinct master’s options for students who have completed (or will complete) a bachelor’s degree and want to extend their training in computer science. Our largest program is the M.S. in Computer Science, which allows students to work with their academic advisor to create their own course of study.",
      href: "#",
      image: "/2.jpg",
    },
    {
      title: "DOCTORAL",
      content:
        "Chiang Mai University's Ph.D. in Computer Science is, above all, a research degree. We certify that our students have a broad foundation and awareness of core concepts in computer science, have advanced the field by performing significant original research and have reported that work in a scholarly fashion.",
      href: "#",
      image: "/3.jpg",
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 mt-2 sm:px-6 pt-3">
        <div className="flex">
          <div className="flex flex-col space-y-2">
            <div className="px-8 py-0.5 bg-black w-full "></div>
            <Link href="#">
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              {t("title")}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-1 ">
          <CardForAcademic posts={posts}></CardForAcademic>
        </div>
      </div>
    </>
  );
};

export default AcademicFirstPage;

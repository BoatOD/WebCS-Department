import React from "react";
import { CardOfEventProps } from "@/types/cardofevent";
import CardForAcademic from "./CardForAcademic";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {};

const AcademicFirstPage = (props: Props) => {
  const t = useTranslations("AcademicHome");
  
  const posts: CardOfEventProps[] = [
    {
      title: "UNDERGRADUATE",
      content:
        "The Computer Science Department at CMU offers a rigorous and practical undergraduate program focused on real-world problem solving.",
      href: "/academics/undergraduate",
      image: "/1.jpg",
    },
    {
      title: "MASTER",
      content:
        "Join us to advance computer knowledge and innovation through our Master's program in computer science. Gain the skills to tackle complex tech challenges and collaborate on diverse projects with experts.",
      href: "#",
      image: "/2.jpg",
    },
    {
      title: "DOCTORAL",
      content:
        "Computer science research is the focus. Graduates of CMU who earned doctoral degrees make contributions to the field through creative research. Their writing should be published internationally.",
      href: "#",
      image: "/3.jpg",
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 mt-2 sm:px-6 pt-3">
        <div className="flex">
          <div className="flex flex-col space-y-2">
            <Link href="#">
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white border-t-4 border-black">
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

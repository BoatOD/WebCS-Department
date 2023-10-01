import React from "react";
import Image from "next/image";
import { CardOfEventProps } from "@/types/cardofevent";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {};

const CardForAcademic = ({ posts }: { posts: CardOfEventProps[] }) => {
  const maxHeight = Math.max(...posts.map((item) => item.content.length));
  const a = useTranslations("AcademicHome");
  const c = useTranslations("content");
  return (
    <>
      {posts.map((item, index) => (
        <Link key={index} href={item.href ?? "#"}>
          <div className="p-1 snap-center">
            <div className="max-w-full shadow-lg">
              <div className="relative">
                <Image
                  src={item.image ?? "#"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="academic-image"
                  className="w-full h-full object-cover hidden md:flex justify-center"
                />
                <div className="absolute bg-[#F29D35] opacity-70 hidden md:flex items-center justify-center w-full h-[70px] bottom-0">
                  <div className="font-bold text-4xl text-center mb-2">{a(item.title)}</div>
                </div>
              </div>
              <div className="px-6 py-4 bg-white border hover:bg-gray-100" style={{ minHeight: `${maxHeight}px` }}>
                <div className="text-gray-700 text-base break-words">{c(`content${index}`)}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default CardForAcademic;
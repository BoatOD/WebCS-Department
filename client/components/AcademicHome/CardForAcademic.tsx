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
            <div className="max-w-full  shadow-lg  ">
              <Image
                src={item.image ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="academic-image"
                className="w-auto h-auto object-scale-down hidden md:flex justify-center"
              />
              <div className="px-6 py-4  bg-white border  hover:bg-gray-100" style={{ minHeight: `${a(maxHeight)}px` }}>
                <div className="font-bold text-xl mb-2">{a(item.title)}</div>
                <div className="text-gray-700 text-base">{c(`content${index}`)}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default CardForAcademic;
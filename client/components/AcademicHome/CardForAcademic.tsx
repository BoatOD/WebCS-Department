import React from "react";
import Image from "next/image";
import { CardOfEventProps } from "@/types/cardofevent";
import Link from "next/link";

type Props = {};

const CardForAcademic = ({ posts }: { posts: CardOfEventProps[] }) => {
  return (
    <>
      {posts.map((item, index) => (
        <Link href={item.href ?? "#"}>
          <div className="p-2">
            <div className="max-w-full rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={item.image ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="object-contain h-96 w-96 hover:object-scale-down" 
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default CardForAcademic;
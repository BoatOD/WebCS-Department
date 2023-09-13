import React from "react";
import { CardOfEventProps } from "@/types/cardofevent";

const CardForEvents = ({ posts }: { posts: CardOfEventProps[] }) => {
  return (
    <>
      {posts.map((item, index) => (
        <div className="pt-5 w-full">
          <a
            href={item.href}
            className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h3 className="mb-2 text-3auto font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-2auto">
              {item.content}
            </p>
          </a>
        </div>
      ))}
    </>
  );
};

export default CardForEvents;

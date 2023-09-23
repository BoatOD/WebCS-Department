import React from "react";

import Carousel from "../Carousel";

import { CardOfEventProps } from "@/types/cardofevent";
import CardForEvents from "./CardForEvents";
import { CarouselProps } from "@/types/carousel";
import CarouselForNews from "../CarouselForNews";

type Props = {};

const NewsAndEvent = (props: Props) => {
  const images: CarouselProps[] = [
    {
      images: "/news2.jpg",
      href: "#",
      title:
        "ขอแสดงความยินดีกับ นักศึกษาและคณาจารย์ จากภาควิชาวิทยาการคอมพิวเตอร์",
      content:
        "ขอแสดงความยินดีกับนักศึกษาและคณาจารย์จากภาควิชาวิทยาการคอมพิวเตอร์ที่ได้รับคัดเลือกผลงานไปนำเสนอในงานประชุมวิชาการระดับนานาชาติ",
    },
    {
      images: "/news3.png",
      href: "#",
      title:
        "ขอแสดงความยินดีกับ นักศึกษาและคณาจารย์ จากภาควิชาวิทยาการคอมพิวเตอร์",
      content:
        "ขอแสดงความยินดีกับนักศึกษาและคณาจารย์จากภาควิชาวิทยาการคอมพิวเตอร์ที่ได้รับคัดเลือกผลงานไปนำเสนอในงานประชุมวิชาการระดับนานาชาติ",
    },
  ];
  const posts: CardOfEventProps[] = [
    {
      title: "27 July Wednesday , 9:00 AM",
      content: "Lorem ipsum dolor sit amet, ",
      href: "#",
    },
    {
      title: "27 July Wednesday , 9:00 AM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      href: "#",
    },
    {
      title: "27 July Wednesday , 9:00 AM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      href: "#",
    },
    {
      title: "27 July Wednesday , 9:00 AM",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      href: "#",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5 gap-7">
        <div className="w-full md:w-2/3">
          <div className="flex pb-5">
            <div className="flex flex-col space-y-2 mt-7">
              <div className="px-8 py-0.5 bg-black w-full "></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                NEWS
              </p>
            </div>
          </div>

          <div className="pt-5">
            <CarouselForNews images={images} />
          </div>
        </div>
        <div>
          <div className="flex pb-5">
            <div className="flex flex-col space-y-0 mt-7">
              <div className="px-8 py-0.5 bg-black w-full"></div>
              <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                EVENTS
              </p>
            </div>
          </div>

          <div className="overflow-y-auto h-[28rem] pt-5">
            <CardForEvents posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsAndEvent;

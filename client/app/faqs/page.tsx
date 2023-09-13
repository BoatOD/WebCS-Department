"use client";
import Carousel from "@/components/Carousel";
import { CarouselProps } from "@/types/carousel";
import React from "react";

type Props = {};

export default function page({}: Props) {
  const images: CarouselProps[] = [
    {
      images: "/12-8-2023.png",
      href: "#",
      title: "วันแม่แห่งชาติ",
      content:
        "ปัจจุบันตรงกับวันที่ 12 สิงหาคม ของทุกปี ซึ่งตรงกับวันคล้ายวันพระราชสมภพของสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง",
    },
    {
      images: "/banner1.svg",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
    {
      images: "/banner1.svg",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
  ];
  return (
    <>
      
    </>
  );
}

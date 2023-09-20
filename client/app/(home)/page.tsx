"use client";
import Carousel from "@/components/Carousel";
import AcademicFirstPage from "@/components/AcademicHome/AcademicFirstPage";
import NewsAndEvent from "@/components/NewAndEventHome/NewsAndEvent";
import { CarouselProps } from "@/types/carousel";

export default function Home() {
  const images: CarouselProps[] = [
    {
      images: "/12-8-2023.png",
      href: "#",
      title: "วันแม่แห่งชาติ",
      content: "ปัจจุบันตรงกับวันที่ 12 สิงหาคม ของทุกปี ซึ่งตรงกับวันคล้ายวันพระราชสมภพของสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง",
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
    <div>
      <Carousel images={images} />
      <AcademicFirstPage></AcademicFirstPage>
      <NewsAndEvent></NewsAndEvent>
    </div>
  );
}

"use client";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const images = ["/banner1.svg", "/banner2.svg", "/banner3.svg"];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((src, i) => (
          <SwiperSlide>
            <div className="relative h-96 flex-[0_0_100%]" key={i}>
              <Image
                src={src}
                fill
                className="object-cover"
                alt="asdasdasdasdad"
              />
              <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                <h1 className="text-white font-semibold text-4xl">
                  COMPUTER SCIENCE
                </h1>
                <p className="text-gray-200 pr-9">CMU</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="flex">
          <div className="flex flex-col space-y-2">
            <div className="px-8 py-0.5 bg-black w-full "></div>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Academic
            </p>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="flex flex-row">
          <div className="basis-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  The Computer Science Department admits students to an
                  undergraduate program that you are guaranteed to find rigorous
                  and dedicated to the real-world training and practical problem
                  solving that has been the hallmark of computer science
                  education at CMU since its inception.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  We offer three distinct master’s options for students who have
                  completed (or will complete) a bachelor’s degree and want to
                  extend their training in computer science. Our largest program
                  is the M.S. in Computer Science, which allows students to work
                  with their academic advisor to create their own course of
                  study.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Chiang Mai University's Ph.D. in Computer Science is, above
                  all, a research degree. We certify that our students have a
                  broad foundation and awareness of core concepts in computer
                  science, have advanced the field by performing significant
                  original research and have reported that work in a scholarly
                  fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

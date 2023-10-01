import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselProps } from "@/types/carousel";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";


const CarouselForNews = ({ images }: { images: CarouselProps[] }) => {
  const locale = useLocale();
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      modules={[Autoplay]}
      className="mySwiper "
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <Link key={index} href={item.href ?? "#"} target="_blank">
            <div className="relative h-[28rem] flex-[0_0_100%] " key={index}>
              <Image
                src={`/blog${item.images}`}
                fill
                className="w-auto rounded-lg h-52 object-cover"
                alt=""
              />
              <div className="absolute bottom-0 px-4 py-3 bg-black bg-opacity-80 w-full">

                <h1 className="text-white font-medium text-xl">
                  {item.title}
                </h1>
                <p className="text-gray-200 pr-9 text-base">{item.content}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CarouselForNews;

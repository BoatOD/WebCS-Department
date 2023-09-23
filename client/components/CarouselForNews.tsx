import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselProps } from "@/types/carousel";
import Link from "next/link";

const CarouselForNews = ({ images }: { images: CarouselProps[] }) => {
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
          <Link key={index} href={item.href ?? "#"}>
            <div className="relative h-[28rem] flex-[0_0_100%] " key={index}>
              <Image
                src={item.images}
                fill
                className="w-auto h-auto  rounded-lg sm:h-52"
                alt="asdasdasdasdad"
              />
              <div className="absolute bottom-0 px-4 py-3 bg-[#000000] w-full">
                <h1 className="text-white font-semibold text-lg">
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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselProps } from "@/types/carousel";
import Link from "next/link";

const Carousel = ({ images }: { images: CarouselProps[] }) => {
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
          <Link href={item.href ?? "#"}>
            <div className="relative h-96 flex-[0_0_100%]" key={index}>
              <Image
                src={item.images}
                fill
                className="w-full h-full object-cover object-top rounded-lg sm:h-52"
                alt=""
              />
              <div className="absolute bottom-0 bg-[#3B3A3AA6] py-7 px-14 rounded-lg">
                <h1 className="text-[#F29D35] font-bold text-5xl text-right">
                  {item.title}
                </h1>
                <p className="text-[#F29D35] text-right text-4xl font-semibold">
                  {item.content}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;

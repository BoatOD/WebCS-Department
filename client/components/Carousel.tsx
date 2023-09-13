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
      modules={[Autoplay]}
      className="mySwiper"
    >
      {images.map((item, index) => (
        <SwiperSlide>
          <Link href={item.href ?? "#"}>
            <div className="relative h-96 flex-[0_0_100%]" key={index}>
              <Image
                src={item.images}
                fill
                className="object-scale-down sm:object-none "
                alt="asdasdasdasdad"
              />
              <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                <h1 className="text-white font-semibold text-5auto">
                  {item.title}
                </h1>
                <p className="text-gray-200 pr-9">{item.content}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;

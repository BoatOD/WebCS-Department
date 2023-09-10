import React from "react";
import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  const banners = ["/banner1.svg", "/banner2.svg", "/banner3.svg"];
  return (
    <>
      {banners.map((e: any) => (
        <div className="relative h-full">
          <Image
            src={e}
            width="0"
            height="0"
            sizes="100vw"
            alt="Banner"
            className="w-full h-auto"
          />
        </div>
      ))}
    </>
  );
};

export default Banner;

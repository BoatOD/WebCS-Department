import React, { CSSProperties } from 'react';
import Image from "next/image";

interface BannerProps {
  imageSrc: string;
  altText: string;
  backgroundColor?: string;
  textColor?: string;
  title: string;
  subtitle: string;
  customStyles?: CSSProperties; // Additional styles as an object
}

function Banner({
  imageSrc,
  altText,
  backgroundColor,
  textColor,
  title,
  subtitle,
  customStyles, // Additional styles as an object
}: BannerProps) {
  const bannerStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: backgroundColor || 'rgba(242, 157, 53, 0.76)',
    color: textColor || 'white',
    padding: '20px',
    width: customStyles?.width || 'auto',
    height: customStyles?.height || '120px',
    bottom: customStyles?.bottom || '-35px',
    left: '0',
  };

  return (
    <div className="relative hidden md:block">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={altText}
          width={0}
          height={0}
          sizes="100vw"
          className='w-full' />
        <div style={bannerStyle} className="pb-5">
          <p className="font-bold uppercase">{title}</p>
          <h1 className={`text-5xl font-bold ${subtitle === 'FAQs' ? '' : 'uppercase'}`}>{subtitle}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;

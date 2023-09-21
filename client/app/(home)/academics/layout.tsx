"use client";
import Carousel from "@/components/Carousel";
import CardForEvents from "@/components/NewAndEventHome/CardForEvents";
import { CarouselProps } from "@/types/carousel";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const images: CarouselProps[] = [
    {
      images: "/academic_banner.png",
      href: "#",
      title: "COMPUTER SCIENCE",
      content: "CMU",
    },
  ];

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <img
            src="/academic_banner.png" // Replace with the actual path to your image
            alt="Image Alt Text"           // Replace with appropriate alt text
            style={{ width: '100%' }}      // Set the width to 100% to fit the page
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-15px',                   // Move text to the bottom
              left: '0',                     // Move text to the left
              background: 'rgba(242, 157, 53, 0.76)', // Background color for the text
              color: 'white',                // Text color
              padding: '20px',               // Increase padding to make it larger
              width: '375px',               // Increase width to make it wider
              height: '100px'
            }}
          >
            <p>ACADEMICS</p>
            <h1 className="text-5xl">NON DEGREE</h1>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

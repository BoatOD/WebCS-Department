"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      {children}
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Academics", href: "#", current: true },
  { name: "Research", href: "#", current: false },
  { name: "People", href: "#", current: false },
  { name: "News & Events", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "FAQs", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Disclosure as="nav" className="bg-white-100">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex items-center">
                    <div className="flex mr-auto">
                      <img
                        className="h-20 w-20"
                        src={"/cs-cmu-logo.svg"}
                        alt="CS-CMU-logo"
                      />
                      <div>
                        <span className="font-normal text-base">
                          DEPARTMENT OF
                        </span>
                        <br />
                        <h3 className="text-2xl	font-semibold	uppercase">
                          computer science
                        </h3>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <button
                        className="flex px-6 py-1 bg-[#F29D35] rounded-full space-x-1"
                        type="button"
                      >
                        <span className="text-xs uppercase font-normal ">
                          Search
                        </span>
                        <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="block md:flex md:justify-end">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="mt-5">{children}</div>
      </body>
    </html>
  );
}

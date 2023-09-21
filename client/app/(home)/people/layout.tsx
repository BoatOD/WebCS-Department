import React from 'react'
import Image from "next/image";

type Props = {}

const layout = (props: Props) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl m-10">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
                src={"/personal/Arisa.JPG"}
                width="0"
                height="0"
                sizes="100vm"
                alt=""
                className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
              />
        </div>
        <div className="pl-8 pr-8 pb-8 pt-3">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
  )
}

export default layout
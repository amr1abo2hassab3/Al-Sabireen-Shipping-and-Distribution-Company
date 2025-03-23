import Image from "next/image";
import React from "react";

interface ItemOtherServProps {
  imgSrc: string;
  title: string;
}

export default function ItemOtherServ({ imgSrc, title }: ItemOtherServProps) {
  return (
    <div className="border cursor-pointer flex-col items-center flex border-black p-6 text-center transition-all duration-300 group hover:scale-105">
      <div className="relative w-20 h-20 perspective-1000">
        <Image
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain opacity-50 transition-all duration-300 
            group-hover:opacity-100 group-hover:scale-105 group-hover:rotate-y-360"
        />
      </div>
      <h3 className="text-gray-500 text-lg font-bold mt-3 transition-all duration-300 group-hover:text-black">
        {title}
      </h3>
    </div>
  );
}

import React from "react";

interface PropsCardOffer {
  city: string;
  description: string;
}

export default function CardOffer({ city, description }: PropsCardOffer) {
  return (
    <div
      className="flex items-center bg-white p-4 rounded-lg shadow-md cursor-pointer 
                 transition-all duration-300 hover:bg-[#212121] group"
    >
      <span
        className="w-[40px] h-[40px] ml-3 bg-[#0AAD0A] flex items-center 
                   justify-center rounded transition-all duration-300 
                   hover:bg-white group-hover:bg-white"
      >
        <i
          className="fa-solid fa-check text-[23px] font-bold text-white 
                     transition-all duration-300 group-hover:text-[#0AAD0A] hover:text-[#0AAD0A]"
        ></i>
      </span>
      <div className="text-gray-700 font-bold transition-all duration-300 group-hover:text-white">
        <strong>{city}</strong> – {description}
      </div>
    </div>
  );
}

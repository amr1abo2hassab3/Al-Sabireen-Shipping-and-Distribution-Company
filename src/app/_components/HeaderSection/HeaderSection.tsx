import Link from "next/link";
import React from "react";

interface HeaderSectionProps {
  title?: string;
  subtitle?: string;
  link?: string;
}

export default function HeaderSection({
  title,
  subtitle,
  link,
}: HeaderSectionProps) {
  return (
    <div className="text-center my-10 px-4">
      <h2 className="relative text-[#0AAD0A] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold inline-block">
        <Link
          href={link}
          className="relative px-[30px] sm:px-[40px] md:px-[50px] inline-flex items-center"
        >
          <span className="hidden sm:block absolute w-[20px] sm:w-[30px] md:w-[40px] h-[4px] bg-[#0AAD0A] left-[-40px] sm:left-[-50px] md:left-[-60px] top-1/2 -translate-y-1/2"></span>

          <span className="break-words text-center">{title}</span>
          <span className="hidden sm:block absolute w-[20px] sm:w-[30px] md:w-[40px] h-[4px] bg-[#0AAD0A] right-[-40px] sm:right-[-50px] md:right-[-60px] top-1/2 -translate-y-1/2"></span>
        </Link>
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg text-[#666666] font-bold mt-2 max-w-[90%] mx-auto">
        {subtitle}
      </h3>
    </div>
  );
}

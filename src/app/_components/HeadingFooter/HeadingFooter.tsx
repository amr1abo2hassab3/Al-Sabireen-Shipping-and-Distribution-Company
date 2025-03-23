import React from "react";

interface PropsHeadingFooter {
  title: string;
}

export default function HeadingFooter({ title }: PropsHeadingFooter) {
  return (
    <h2
      className="text-[16px] text-white uppercase pb-[15px] mb-[30px] border-b-4 
           border-[#0aad0a6b] inline-block font-bold"
    >
      {title}
    </h2>
  );
}

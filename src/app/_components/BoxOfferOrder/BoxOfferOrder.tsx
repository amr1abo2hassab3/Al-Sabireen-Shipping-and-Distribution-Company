import Link from "next/link";
import React from "react";

interface PropsBoxOfferOrder {
  title: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
}

export default function BoxOfferOrder({
  title,
  paragraphs,
  linkText,
  linkHref,
}: PropsBoxOfferOrder) {
  return (
    <section className="p-4 bg-[#7baf3c] text-center flex flex-col items-center justify-between rounded-md leading-loose">
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-14">
        {title}
      </h1>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg font-bold text-white my-6">
          {paragraph}
        </p>
      ))}
      <Link
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkText}
        className="py-3 px-8 flex items-center gap-4 bg-white text-[#7baf3c] font-bold rounded-md transition-all duration-300 hover:bg-[#212121] hover:text-white my-2"
      >
        <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
        <strong>{linkText}</strong>
      </Link>
    </section>
  );
}

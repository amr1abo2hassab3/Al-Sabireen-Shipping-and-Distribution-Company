import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardServProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export default function CardServ({
  imgSrc,
  title,
  description,
  link,
}: CardServProps) {
  return (
    <Link
      href={link}
      className="rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-3 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label={`اقرأ المزيد عن ${title}`}
    >
      <div className="relative w-full h-[392px]">
        <Image
          src={imgSrc}
          loading="lazy"
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="bg-white shadow-lg p-6 text-center border-t-2 border-gray-600">
        <h3 className="text-[#7baf3c] text-[28px] md:text-[30px] font-bold my-4">
          {title}
        </h3>
        <p className="text-gray-600 text-[14px] md:text-[16px] font-bold">
          {description}
        </p>
      </div>
    </Link>
  );
}

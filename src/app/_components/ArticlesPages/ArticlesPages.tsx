import React from "react";
import AsideAricle from "../AsideAricle/AsideAricle";
import imgRiyadh from "../../../assets/images/شحنالرياض.jpg";
import imgJeddah from "../../../assets/images/شحن جده.jpg";
import imgDammam from "../../../assets/images/شحن الدمام.jpg";
import imgMakkah from "../../../assets/images/serv1.jpg";
import imgMadinah from "../../../assets/images/شحن المدينه المنوره .jpg";
import imgHail from "../../../assets/images/شحن حائل.jpg";
import imgQassim from "../../../assets/images/شحن القصيم.jpg";
import imgHafar from "../../../assets/images/شحن حفر الباطن.jpg";
import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  text: string;
}

interface PropsArticlesPages {
  articlsPage?: Article[];
  HeadingPage?: string;
}

const locations = [
  { name: "نقل الأثاث في الرياض", link: "/services/riyadh", image: imgRiyadh },
  { name: "نقل الأثاث في جدة", link: "/services/jeddah", image: imgJeddah },
  { name: "نقل الأثاث في الدمام", link: "/services/dammam", image: imgDammam },
  { name: "نقل الأثاث في مكة", link: "/services/makkah", image: imgMakkah },
  {
    name: "نقل الأثاث في المدينة المنورة",
    link: "/services/madinah",
    image: imgMadinah,
  },
  { name: "نقل الأثاث في حائل", link: "/services/hail", image: imgHail },
  { name: "نقل الأثاث في القصيم", link: "/services/qassim", image: imgQassim },
  {
    name: "نقل الأثاث في حفر الباطن",
    link: "/services/hafaralbatin",
    image: imgHafar,
  },
];

export default function ArticlesPages({
  articlsPage,
  HeadingPage,
}: PropsArticlesPages) {
  return (
    <div className="mt-[300px] mb-12 container mx-auto">
      <h1 className="text-[32px] font-bold text-[#7baf3c] my-8">
        {HeadingPage}{" "}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* المقالات */}
        <section className=" p-6 col-span-1 lg:col-span-3 text-gray-800 space-y-8">
          {articlsPage?.map((article, index) => (
            <article key={index}>
              <h2 className="text-xl font-semibold text-[#7baf3c] mb-2">
                {article.title}
              </h2>
              <p>{article.text}</p>
            </article>
          ))}

          <p className="font-semibold text-[#7baf3c] text-lg">
            تواصل معنا الآن للحصول على أفضل خدمات شحن العفش داخل المملكة بأعلى
            معايير الجودة والأمان!
          </p>

          <div className="bg-white p-6">
            {locations.map((location, index) => (
              <Link
                key={index}
                href={location.link}
                className="flex gap-[30px] flex-col text-center md:text-right md:flex-row py-2 items-center text-lg border-b border-[rgba(167,167,167,0.15)] transition-all"
              >
                <div className="relative  overflow-hidden rounded-md group shadow-[10px_10px_0px_0px_rgba(123,175,60,0.2)]">
                  <Image
                    src={location.image}
                    alt={location.name}
                    width={300}
                    height={210}
                    className="object-cover"
                  />

                  <div className="absolute bg-white w-full h-full top-0 left-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
                <span className="mr-3 font-bold text-[#7baf3c]">
                  <span>{location.name}</span>
                  <p className="mt-5 text-[#676767]">
                    تعتبر شركة الصابرين للنقل والشحن واحدة من أفضل شركات النقل
                    في المملكة العربية السعودية، حيث تقدم خدمات متكاملة لنقل
                    العفش والأثاث بأعلى مستوى من الاحترافية، مما يجعلها الخيار
                    الأول للعملاء الباحثين عن الجودة والموثوقية.
                  </p>
                </span>
              </Link>
            ))}
          </div>
        </section>
        <AsideAricle locations={locations} />
      </div>
    </div>
  );
}

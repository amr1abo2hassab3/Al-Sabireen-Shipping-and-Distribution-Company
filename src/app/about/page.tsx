import Image from "next/image";
import img from "../../assets/images/اسطول.jpg";
import React from "react";
import HeaderTitle from "../_components/HeaderTitle/HeaderTitle";
import FromUs from "../_components/FromUs/FromUs";
import HeaderSection from "../_components/HeaderSection/HeaderSection";

export const metadata = {
  title: "شركة الصابرين | من نحن",
  description:
    "تعرف على شركة الصابرين للنقل والخدمات المنزلية داخل السعودية، نقدم أفضل خدمات النقل والتغليف لجميع المدن.",
  keywords: [
    "نقل عفش",
    "نقل الأثاث",
    "شحن العفش",
    "شركة نقل أثاث",
    "شركة الصابرين",
  ],
  openGraph: {
    title: "شركة الصابرين | من نحن",
    description:
      "شركة الصابرين تقدم أفضل خدمات نقل العفش والتغليف داخل السعودية بجودة وأمان.",
    url: "https://your-website.com/about",
    images: [
      {
        url: "../../assets/images/photo_2025-03-21_02-51-37.jpg",
        width: 1200,
        height: 630,
        alt: "أسطول النقل الخاص بشركة الصابرين",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة الصابرين | من نحن",
    description:
      "شركة الصابرين للنقل توفر أفضل خدمات نقل العفش داخل السعودية بأفضل الأسعار.",
    images: ["../../assets/images/photo_2025-03-21_02-51-37.jpg"],
  },
};

const locationsNames: string[] = [
  "الرياض",
  "جدة",
  "الدمام",
  "مكة",
  "المدينة المنورة",
  "حائل",
  "القصيم",
  "حفر الباطن",
];

export default function About() {
  return (
    <div className="mt-[300px] mb-12 container mx-auto">
      <div className="flex justify-center items-center flex-col text-center gap-5">
        <Image
          src={img}
          alt="أسطول النقل"
          width={0}
          height={0}
          sizes="90vw"
          style={{ width: "90%", height: "320px", objectFit: "contain" }}
          className="rounded-lg"
        />
        <HeaderTitle
          name="من نحن | شركة الصابرين للنقل والخدمات المنزلية داخل السعودية"
          caption="اطلب خدمتك الآن"
        />
      </div>
      <FromUs />
      <div className="my-5">
        <HeaderSection title="مناطق الخدمة" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {locationsNames.map((location, index) => (
            <div
              key={index}
              className="bg-green-600 text-white p-6 rounded-lg shadow-lg text-center hover:bg-green-700 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{location}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

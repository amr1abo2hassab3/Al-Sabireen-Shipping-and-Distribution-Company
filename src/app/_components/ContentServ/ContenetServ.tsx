import React from "react";
import CardServ from "../CardServ/CardServ";
import Link from "next/link";
import HeaderSection from "../HeaderSection/HeaderSection";
import img1 from "../../../assets/images/serv1.jpg";
import img2 from "../../../assets/images/serv2.jpg";
import img3 from "../../../assets/images/serv3.jpg";

const services = [
  {
    imgSrc: img1,
    title: "تخزين العفش",
    description:
      "تمتلك شركة الصابرين شاحنات حديثة ومتخصصة لنقل مختلف أنواع البضائع والعفش والسيارات.",
    link: "/services/storage",
  },
  {
    imgSrc: img2,
    title: "نقل الأثاث",
    description:
      "نوفر لك خدمات نقل الأثاث بكل أمان وسهولة مع ضمان الحماية الكاملة لأغراضك.",
    link: "/services/moving",
  },
  {
    imgSrc: img3,
    title: "الشحن في السعوديه",
    description:
      "تقدم شركتنا خدمات شحن في السعوديه بأفضل الأسعار وأعلى معايير الجودة.",
    link: "/services/shipping",
  },
];

export default function ContenetServ() {
  return (
    <div className="bg-[#212121] flex flex-col items-center">
      <HeaderSection
        title="خدماتنا الاحترافية"
        subtitle="اكتشف بعض خدمات شركة الصابرين المميزة"
        link="/services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6 mx-auto">
        {services.map((service, index) => (
          <CardServ key={index} {...service} />
        ))}
      </div>

      <div className="lg:w-[60%] w-[80%] text-center my-22">
        <p className="text-white font-bold">
          تعد شركة الصابرين للنقل والخدمات المنزلية أفضل شركة
          <Link href="/services" className="text-main-color font-bold mx-4">
            شحن عفش في السعودية،
          </Link>
          ونقل الأثاث الداخلي وشحن البضائع والسيارات بين دول الخليج العربي مثل،
          السعودية، الرياض، الدمام، القصيم، حفر، الباطن. ذلك يرجع بفضل خبرتها
          الطويلة وفريق عملها المحترف، وأدواتها ومعداتها الحديثة والمطورة، التي
          تضمن لك عملية نقل احترافية وآمنة وبأسعار لا مثيل لها.
        </p>
      </div>
    </div>
  );
}

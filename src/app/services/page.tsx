import React from "react";
import HeaderSection from "../_components/HeaderSection/HeaderSection";
import CardServ from "../_components/CardServ/CardServ";
import img1 from "../../assets/images/شحنالرياض.jpg";
import img2 from "../../assets/images/شحن جده.jpg";
import img3 from "../../assets/images/شحن الدمام.jpg";
import img4 from "../../assets/images/serv1.jpg";
import img5 from "../../assets/images/شحن حفر الباطن.jpg";
import img6 from "../../assets/images/شحن حائل.jpg";
import img7 from "../../assets/images/شحن المدينه المنوره .jpg";
import img8 from "../../assets/images/شحن القصيم.jpg";

const services = [
  {
    imgSrc: img1,
    title: "نقل الأثاث في الرياض",
    description:
      "نوفر لك أفضل خدمات نقل الأثاث في الرياض بأمان تام ومساحات مخصصة لحفظ الأثاث بعيدًا عن التلف.",
    link: "/services/riyadh",
  },
  {
    imgSrc: img2,
    title: "نقل الأثاث في جدة",
    description:
      "نقل الأثاث داخل جدة مع أفضل الخدمات من فك وتركيب وتغليف احترافي يحافظ على ممتلكاتك.",
    link: "/services/jeddah",
  },
  {
    imgSrc: img3,
    title: "نقل الأثاث في الدمام",
    description:
      "أفضل خدمات نقل الأثاث في الدمام بأسعار تنافسية ونقل سريع وآمن لكافة أنواع البضائع.",
    link: "/services/dammam",
  },

  {
    imgSrc: img7,
    title: "نقل الأثاث في المدينة المنورة",
    description:
      "أفضل خدمات نقل الأثاث في المدينة المنورة مع توفير العمالة المدربة لحماية أغراضك.",
    link: "/services/madinah",
  },
  {
    imgSrc: img6,
    title: "نقل الأثاث في حائل",
    description:
      "نقل العفش والبضائع داخل حائل بأحدث الشاحنات مع فريق محترف لضمان السلامة.",
    link: "/services/hail",
  },
  {
    imgSrc: img8,
    title: "نقل الأثاث في القصيم",
    description:
      "نقل العفش في القصيم بكل سهولة مع خدمات التحميل والتفريغ الاحترافية.",
    link: "/services/qassim",
  },
  {
    imgSrc: img5,
    title: "نقل الأثاث في حفر الباطن",
    description:
      "توصيل سريع وخدمات شحن متكاملة داخل حفر الباطن وخارجها بأسعار مميزة.",
    link: "/services/hafaralbatin",
  },
  {
    imgSrc: img4,
    title: "نقل الأثاث في مكة",
    description: "نقل الأثاث في مكة مع فريق محترف وأفضل خدمات التغليف والنقل.",
    link: "/services/makkah",
  },
];

export default function Services() {
  return (
    <div className="mt-[350px] mb-[50px] container mx-auto">
      <HeaderSection
        title="خدماتنا في شركة الصابرين للنقل والخدمات المنزلية"
        subtitle="خدماتنا المتنوعة في شركة الصابرين للنقل والخدمات المنزلية نقدمها لك بإبداع وإتقان وجودة وتنافسية في سرعة التنفيد ومهارة المختصين. وبأسعار تنافسية لا مثيل لها."
        link="/services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6 mx-auto my-7">
        {services.map((service, index) => (
          <CardServ key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

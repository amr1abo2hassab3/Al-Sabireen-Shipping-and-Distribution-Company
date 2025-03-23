import React from "react";
import HeaderSection from "../_components/HeaderSection/HeaderSection";
import CardServ from "../_components/CardServ/CardServ";
import img1 from "../../assets/images/serv1.jpg";
import img2 from "../../assets/images/serv2.jpg";
import img3 from "../../assets/images/serv3.jpg";

const services = [
  {
    imgSrc: img1,
    title: "تخزين العفش في الرياض",
    description:
      "نوفر لك أفضل خدمات تخزين العفش في الرياض بأمان تام ومساحات مخصصة لحفظ الأثاث بعيدًا عن التلف.",
    link: "/services/storage-riyadh",
  },
  {
    imgSrc: img2,
    title: "نقل الأثاث في جدة",
    description:
      "نقل الأثاث داخل جدة مع أفضل الخدمات من فك وتركيب وتغليف احترافي يحافظ على ممتلكاتك.",
    link: "/services/moving-jeddah",
  },
  {
    imgSrc: img3,
    title: "الشحن في الدمام",
    description:
      "أفضل خدمات الشحن في الدمام بأسعار تنافسية ونقل سريع وآمن لكافة أنواع البضائع.",
    link: "/services/shipping-dammam",
  },
  {
    imgSrc: img1,
    title: "نقل العفش في القصيم",
    description:
      "نقل العفش في القصيم بكل سهولة مع خدمات التحميل والتفريغ الاحترافية.",
    link: "/services/moving-qassim",
  },
  {
    imgSrc: img2,
    title: "الشحن في حفر الباطن",
    description:
      "توصيل سريع وخدمات شحن متكاملة داخل حفر الباطن وخارجها بأسعار مميزة.",
    link: "/services/shipping-hafr-albatin",
  },
  {
    imgSrc: img3,
    title: "خدمات النقل في حائل",
    description:
      "نقل العفش والبضائع داخل حائل بأحدث الشاحنات مع فريق محترف لضمان السلامة.",
    link: "/services/moving-hail",
  },
  {
    imgSrc: img1,
    title: "نقل الأثاث في المدينة المنورة",
    description:
      "أفضل خدمات نقل الأثاث في المدينة المنورة مع توفير العمالة المدربة لحماية أغراضك.",
    link: "/services/moving-madina",
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

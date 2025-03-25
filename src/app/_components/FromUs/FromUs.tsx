import React from "react";
import imgRiyadh from "../../../assets/images/شحنالرياض.jpg";
import imgJeddah from "../../../assets/images/شحن جده.jpg";
import imgDammam from "../../../assets/images/شحن الدمام.jpg";
import imgMakkah from "../../../assets/images/شحن مكه.jpg";
import imgMadinah from "../../../assets/images/شحن المدينه المنوره .jpg";
import imgHail from "../../../assets/images/شحن حائل.jpg";
import imgQassim from "../../../assets/images/شحن القصيم.jpg";
import imgHafar from "../../../assets/images/شحن حفر الباطن.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ObjectLocation {
  name: string;
  link: string;
  image: StaticImageData | string;
}
interface SocialLink {
  href: string;
  icon: string;
  title: string;
  type: "brands" | "solid";
}

const locations: ObjectLocation[] = [
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

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/profile.php?id=61574132114409",
    icon: "fa-facebook-f",
    title: "فيسبوك",
    type: "brands",
  },
  {
    href: "https://wa.me/966542971661",
    icon: "fa-whatsapp",
    title: "واتساب",
    type: "brands",
  },
  {
    href: "tel:+966565469022",
    icon: "fa-phone",
    title: "اتصل بنا",
    type: "solid",
  },
];

export default function FromUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10">
      <div className="text-center p-12 md:p-16 lg:p-20   rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">
          🚛 شركة الصابرين لنقل العفش - الأفضل في السعودية
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          <strong>شركة الصابرين</strong> هي الشركة الرائدة في{" "}
          <strong>نقل الأثاث والعفش</strong> داخل
          <strong> المملكة العربية السعودية</strong>، حيث نقدم خدمات متكاملة
          تشمل <strong>الفك، التغليف، التركيب، النقل والتخزين</strong> بأعلى
          معايير الجودة.
        </p>

        {/* 🔹 قائمة الخدمات */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">✅ خدماتنا:</h3>
        <ul className="list-disc text-left inline-block text-lg space-y-3 pl-6">
          <li>
            <strong>نقل العفش:</strong> بأحدث السيارات والمعدات.
          </li>
          <li>
            <strong>فك وتركيب الأثاث:</strong> على يد فنيين متخصصين.
          </li>
          <li>
            <strong>تغليف الأثاث:</strong> بأفضل المواد لحماية ممتلكاتك.
          </li>
          <li>
            <strong>التخزين الآمن:</strong> مستودعات مجهزة لحفظ الأثاث.
          </li>
          <li>
            <strong>شحن الأثاث والسيارات:</strong> بين جميع مدن المملكة.
          </li>
        </ul>

        {/* 🔹 لماذا نحن؟ */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">
          🚀 لماذا تختار شركة الصابرين؟
        </h3>
        <p className="text-lg leading-relaxed">
          لدينا <strong>خبرة تزيد عن 10 سنوات</strong> في مجال{" "}
          <strong>نقل الأثاث في السعودية</strong>، ونعمل على تقديم{" "}
          <strong>
            أفضل الأسعار، أسرع الخدمات، وضمان الحماية الكاملة لممتلكاتك
          </strong>
          .
        </p>

        {/* 🔹 بيانات التواصل */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">📞 تواصل معنا:</h3>
        <p className="text-lg font-semibold leading-relaxed">
          📍 <strong>العنوان:</strong> الرياض - جدة - الدمام
          <br />
          📞 <strong>الهاتف:</strong> +966 0565469022
          <br />
          📧 <strong>البريد الإلكتروني:</strong> alsabreentransports@gmail.com
        </p>

        <div className="w-full border-r border-black/20 py-3.5 flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              title={`زيارة صفحتنا على ${social.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[#7baf3c] text-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:bg-[#7baf3c]"
            >
              <i
                className={`fa-${social.type} ${social.icon} text-2xl`}
                aria-hidden="true"
              ></i>
            </a>
          ))}
        </div>
      </div>

      {/* ✅ القسم الثاني - يمكن استخدامه لصور أو محتوى إضافي */}
      <div className="text-center p-10  rounded-lg shadow-lg sticky top-4 h-fit">
        <h2 className="text-3xl font-bold ">📸 معرض الصور</h2>
        <p className="text-lg mt-4">
          شاهد صور عمليات النقل والتغليف التي قمنا بها!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <Link
              key={index}
              href={location.link}
              className="flex flex-col gap-[30px] py-2 items-center text-lg border-b border-[rgba(167,167,167,0.80)] transition-all"
            >
              <div className="relative  overflow-hidden rounded-md group shadow-[10px_10px_0px_0px_rgba(123,175,60,0.2)]">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={80}
                  height={80}
                  style={{ width: "auto", height: "auto" }}
                />

                <div className="absolute bg-white w-full h-full top-0 left-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                  <i className="fa-solid fa-link"></i>
                </div>
              </div>
              <span className="mr-3 font-bold text-[#7baf3c]">
                {location.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

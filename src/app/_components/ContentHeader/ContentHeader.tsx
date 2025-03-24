"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/photo_2025-03-21_02-51-37.jpg";

const services = [
  { name: "نقل الأثاث في الرياض", link: "/services/riyadh" },
  { name: "نقل الأثاث في جدة", link: "/services/jeddah" },
  { name: "نقل الأثاث في الدمام", link: "/services/dammam" },
  { name: "نقل الأثاث في مكة", link: "/services/makkah" },
  { name: "نقل الأثاث في المدينة المنورة", link: "/services/madinah" },
  { name: "نقل الأثاث في حائل", link: "/services/hail" },
  { name: "نقل الأثاث في القصيم", link: "/services/qassim" },
  { name: "نقل الأثاث في حفر الباطن", link: "/services/hafaralbatin" },
];

const articles = [
  { name: "تنظيف وصيانة", link: "/articles/cleaning" },
  { name: "شحن عفش داخل المملكة", link: "/articles/shipping" },
  { name: "نقل أثاث داخلي", link: "/articles/moving" },
];

const socialLinks = [
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

export default function ContentHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);

  return (
    <div className="container mx-auto flex items-center justify-between py-4 relative">
      {/* الشعار */}
      <div className="w-[30%] overflow-hidden cursor-pointer">
        <Image
          src={logo}
          alt="للنقل شركة الصابرين"
          width={120}
          height={120}
          className="rounded-full"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="w-[70%] hidden md:flex flex-col items-end justify-center gap-2">
        {/* أيقونة الهاتف + الرقم */}
        <a
          href="tel:+966565469022"
          target="_blank"
          className="flex items-center gap-2"
        >
          <i className="fa-solid fa-phone text-white text-[40px] transform transition-all duration-300 hover:scale-110 hover:text-green-500"></i>
          <h4 className="text-lg font-bold text-[#dadada]">
            الدعم: 0565469022
          </h4>
        </a>

        {/* أيقونة البريد الإلكتروني + العنوان */}
        <a
          href="mailto:alsabreentransports@gmail.com"
          target="_blank"
          className="flex items-center gap-2 text-[#dadada] text-sm hover:text-blue-400 transition duration-300"
        >
          <i className="fa-solid fa-envelope text-white text-[30px] transition-all duration-300 hover:scale-110 hover:text-blue-400"></i>
          alsabreentransports@gmail.com
        </a>
      </div>
      {/* زر القائمة (للجوال) */}
      <div
        className="md:hidden text-[20px] flex items-center justify-center text-[#7baf3c] w-11 h-11 bg-white rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fa-solid fa-list"></i>
      </div>

      {/* القائمة الجانبية */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-gray-800 text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-6">
          <li className="py-2">
            <span className="ml-1">
              <i className="fa-solid fa-house-chimney"></i>
            </span>
            <Link href="/" className="text-lg hover:text-gray-400">
              الرئيسية
            </Link>
          </li>

          {/* قائمة الخدمات */}
          <li className="relative py-2">
            <button className="text-lg hover:text-gray-400 cursor-pointer flex justify-between w-full">
              <Link href="/services" className="text-lg hover:text-gray-400">
                الخدمات
              </Link>
              <i
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`fa-solid fa-chevron-down transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <ul
              className={`bg-gray-700 mt-3 w-full border border-gray-600 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                isServicesOpen
                  ? "max-h-[450px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {services.map((service) => (
                <li
                  key={service.link}
                  className="px-4 flex  items-center py-4 hover:bg-gray-600"
                >
                  <i className="fa-solid fa-angle-left ml-2"></i>
                  <Link href={service.link}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* قائمة المقالات */}
          <li className="relative py-2">
            <button className="text-lg hover:text-gray-400 cursor-pointer flex justify-between w-full">
              <Link href="/services" className="text-lg hover:text-gray-400">
                المقالات
              </Link>
              <i
                onClick={() => setIsArticlesOpen(!isArticlesOpen)}
                className={`fa-solid fa-chevron-down transition-transform ${
                  isArticlesOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            <ul
              className={`bg-gray-700 mt-3 w-full border border-gray-600 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                isArticlesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {articles.map((article) => (
                <li
                  key={article.link}
                  className="px-4 flex  items-center py-4 hover:bg-gray-600"
                >
                  <i className="fa-solid fa-angle-left ml-2"></i>
                  <Link href={article.link}>{article.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="py-2">
            <Link href="/about" className="text-lg hover:text-gray-400">
              من نحن
            </Link>
          </li>
          <li className="py-2">
            <Link href="/contact" className="text-lg hover:text-gray-400">
              اتصل بنا
            </Link>
          </li>
        </ul>
        <div className="absolute w-full bottom-0 flex items-center justify-center">
          {" "}
          {/* وسائل التواصل الاجتماعي */}
          <div className="w-full border-r border-black/20 py-3.5 flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                title={`زيارة صفحتنا على ${social.title}`}
                target="_blank"
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
      </div>
    </div>
  );
}

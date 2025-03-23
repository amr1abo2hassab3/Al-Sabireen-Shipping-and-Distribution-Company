"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const services = [
  { name: "نقل الأثاث في الرياض", link: "/services/riyadh" },
  { name: "نقل الأثاث في جدة", link: "/services/jeddah" },
  { name: "نقل الأثاث في الدمام", link: "/services/dammam" },
  { name: "نقل الأثاث في مكة", link: "/services/makkah" },
  { name: "نقل الأثاث في المدينة المنورة", link: "/services/madinah" },
];

const articles = [
  { name: "تنظيف وصيانة", link: "/articles/cleaning" },
  { name: "شحن عفش داخل المملكة", link: "/articles/shipping" },
  { name: "نقل أثاث داخلي", link: "/articles/moving" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
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

// تحديد النوع لـ href و children
interface NavItemProps {
  href: string;
  children: React.ReactNode; // يمكن أن يكون نصًا أو مكونات
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href);
  return (
    <li className="border-r border-black/20 group">
      <Link
        href={href}
        className={`py-3.5 px-5 transition-all duration-300 font-bold inline-block ${
          isActive ? "text-[#0AAD0A]" : "text-[#333] group-hover:text-[#0AAD0A]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const renderDropdown = (
  title: string,
  href: string,
  items: { name: string; link: string }[]
) => (
  <li className="border-r border-black/20 relative group">
    <Link
      href={href}
      className="py-3.5 px-5 transition-all duration-300 font-bold inline-block text-[#333] group-hover:text-[#0AAD0A] cursor-pointer flex items-center"
    >
      <span className="text-[18px]">{title}</span>
      <i className="fa-solid fa-angle-down mr-2" aria-hidden="true"></i>
    </Link>
    <ul className="absolute top-full mt-[1px] min-w-[210px] bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden group-hover:block pointer-events-auto">
      {items.map((item) => (
        <li
          key={item.link}
          className={`px-4 py-2 font-bold transition ${
            usePathname() === item.link
              ? "text-[#0AAD0A]"
              : "text-[#0aad0a92] hover:text-[#0AAD0A]"
          }`}
        >
          <Link href={item.link} className="block w-full h-full">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

const NavBar: React.FC = () => {
  return (
    <nav
      className="container mx-auto md:flex hidden items-center bg-white rounded shadow-md"
      aria-label="القائمة الرئيسية"
    >
      <div className="w-[80%]">
        <ul className="flex flex-wrap items-center">
          <NavItem href="/">
            <i
              className="fa-solid fa-house-chimney ml-2"
              aria-hidden="true"
            ></i>
            <span className="text-[18px]">الرئيسية</span>
          </NavItem>
          {renderDropdown("خدماتنا", "/services", services)}
          {renderDropdown("مقالات", "/articles", articles)}
          <NavItem href="/about">
            <span className="text-[18px]">من نحن</span>
          </NavItem>
          <NavItem href="/contact">
            <span className="text-[18px]">تواصل معنا</span>
          </NavItem>
        </ul>
      </div>

      {/* وسائل التواصل الاجتماعي */}
      <div className="w-[20%] border-r border-black/20 py-3.5 flex justify-center gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            title={`زيارة صفحتنا على ${social.title}`}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center bg-[#0AAD0A] text-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:bg-[#088908]"
          >
            <i
              className={`fa-${social.type} ${social.icon} text-2xl`}
              aria-hidden="true"
            ></i>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

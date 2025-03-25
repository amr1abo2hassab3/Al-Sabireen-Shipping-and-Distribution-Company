import React from "react";
import Link from "next/link";
import HeaderSection from "../_components/HeaderSection/HeaderSection";

export const metadata = {
  title: "شركة الصابرين | اتصل بنا - خدمات النقل والشحن في السعودية",
  description:
    "تواصل مع شركة الصابرين لخدمات النقل والشحن داخل المملكة العربية السعودية. اتصل بنا عبر الهاتف أو الواتساب لمعرفة المزيد عن خدماتنا.",
  keywords: [
    "نقل عفش",
    "شحن عفش",
    "نقل الأثاث",
    "شركة الصابرين",
    "خدمات الشحن",
    "التواصل مع شركة الصابرين",
  ],
  openGraph: {
    title: "شركة الصابرين | اتصل بنا - خدمات النقل والشحن",
    description:
      "تواصل مع شركة الصابرين لخدمات النقل والشحن داخل المملكة. اتصل بنا اليوم لمزيد من المعلومات.",
    url: "https://your-website.com/contact",
    images: [
      {
        url: "../../assets/images/photo_2025-03-21_02-51-37.jpg",
        width: 1200,
        height: 630,
        alt: "اتصل بنا - شركة الصابرين للنقل والشحن",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة الصابرين | اتصل بنا - خدمات النقل والشحن",
    description:
      "تواصل معنا عبر الهاتف أو الواتساب لمعرفة المزيد عن خدمات النقل والشحن لدينا.",
    images: ["../../assets/images/photo_2025-03-21_02-51-37.jpg"],
  },
};

interface SocialLink {
  href: string;
  icon: string;
  title: string;
  type: "brands" | "solid";
}

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

interface ContactInfo {
  title: string;
  address: string;
  icon: string;
  link: string;
}

const contactInfo: ContactInfo[] = [
  {
    title: "عنوان",
    address: "المملكة العربية السعودية",
    icon: "fa-solid fa-location-dot",
    link: "/",
  },
  {
    title: "هاتف",
    address: "0565469022",
    icon: "fa-solid fa-phone",
    link: "tel:+966565469022",
  },
  {
    title: "واتساب",
    address: "0542971661",
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/966542971661",
  },
  {
    title: "البريد الإلكتروني",
    address: "alsabreentransports@gmail.com",
    icon: "fa-solid fa-envelope",
    link: "mailto:alsabreentransports@gmail.com",
  },
];

export default function Contact() {
  return (
    <div className="mt-[300px] mb-12 container mx-auto">
      <div className="py-[50px] px-7 rounded bg-[#212121]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((info, index) => (
            <Link
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group mb-7 cursor-pointer"
            >
              <IconBlock icon={info.icon} />
              <TextBlock title={info.title} address={info.address} />
            </Link>
          ))}
        </div>
        <div>
          <HeaderSection
            title="كن على تواصل معنا"
            subtitle="اتصل بنا اليوم!"
            link="tel:+966565469022"
          />
          <article className="mt-10 bg-white p-6 rounded shadow-md">
            <h1 className="text-2xl font-bold text-[#0aad0a]">
              شركة الصابرين للنقل والخدمات المنزلية
            </h1>
            <p className="text-gray-700 mt-4">
              توفر لك <strong>شركة الصابرين</strong> العديد من الخدمات داخل{" "}
              <strong>المملكة العربية السعودية</strong> في جميع أنحائها.
            </p>
            <h2 className="text-xl font-semibold mt-6 text-[#0aad0a]">
              خدماتنا
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>نقل العفش والأثاث.</li>
              <li>شحن البضائع والسيارات.</li>
              <li>تخزين العفش والبضائع.</li>
              <li>خدمات منزلية متكاملة.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              نحن نمتلك خبرة طويلة في المجال، بالإضافة إلى العمالة الماهرة
              والمعدات المتطورة، مما يجعلنا قادرين على تنفيذ المهام بكفاءة
              عالية.
            </p>
            <p className="text-gray-700 mt-4">
              تواصل معنا الآن عبر الهاتف{" "}
              <a
                href="tel:+966565469022"
                className="text-[#0aad0a] font-semibold"
              >
                0565469022
              </a>{" "}
              لتحصل على تجربة نقل سريعة وآمنة.
            </p>
          </article>
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
      </div>
    </div>
  );
}

const IconBlock = ({ icon }: { icon: string }) => (
  <div
    className="min-w-[85px] min-h-[85px] group-hover:bg-[#0aad0a] duration-200 rounded p-[5px] bg-[#31291F] flex items-center justify-center"
    aria-hidden="true"
  >
    <i
      className={`${icon} text-[25px] duration-200 group-hover:text-white text-[#0aad0a]`}
    ></i>
  </div>
);

const TextBlock = ({ title, address }: { title: string; address: string }) => (
  <div>
    <h2 className="text-white/75 font-bold mb-1 duration-200 group-hover:text-[#0aad0a]">
      {title}
    </h2>
    <p className="text-white font-semibold text-[16px]" aria-label={address}>
      {address}
    </p>
  </div>
);

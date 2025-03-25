import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ServiceSection {
  title: string;
  description: string;
  link: string;
}

interface ServicesPagesProps {
  serviceSections: ServiceSection[];
  city: string;
  ImgSection: StaticImageData;
}

const ServicesPages: React.FC<ServicesPagesProps> = ({
  serviceSections,
  city,
  ImgSection,
}) => {
  return (
    <div className="mt-[300px] container mx-auto px-4">
      <Head>
        <title>شركة الصابرين لنقل الأثاث</title>
        <meta
          name="description"
          content={`أفضل خدمات نقل الأثاث داخل وخارج ${city} بأعلى معايير الجودة.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`نقل أثاث, شركة نقل عفش, ${city}, جدة, الدمام, نقل الشركات, تغليف الأثاث, تخزين العفش`}
        />
        <meta
          property="og:title"
          content={`شركة الصابرين لنقل الأثاث داخل وخارج ${city}`}
        />
        <meta
          property="og:description"
          content={`نقدم خدمات نقل الأثاث داخل وخارج ${city} بأعلى معايير الجودة والأمان.`}
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="text-center text-3xl font-bold text-[#088908] my-20">
        شركة الصابرين لنقل الأثاث داخل وخارج {city}
      </h1>
      <div className="container flex items-center justify-center">
        <Image
          src={ImgSection}
          width={300}
          height={300}
          className="object-contain"
          alt={`شركة الصابرين لنقل الأثاث داخل وخارج ${city}`}
          loading="lazy"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      {/* الأقسام المختلفة */}
      {serviceSections.map((section, index) => (
        <section
          key={index}
          className={`p-6 rounded-xl shadow-md my-6 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            {section.title}
          </h2>
          <p className="text-gray-600 mt-2">{section.description}</p>
          <Link href={section.link} className="text-blue-600 underline">
            تعرف على المزيد
          </Link>
        </section>
      ))}

      {/* قسم الأسئلة الشائعة */}
      <section className="bg-gray-200 p-6 rounded-xl shadow-md my-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          الأسئلة الشائعة
        </h2>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>ما هي تكلفة نقل الأثاث داخل {city}؟</li>
          <li>هل توفرون خدمة الفك والتركيب؟</li>
          <li>ما هي إجراءات الحماية المستخدمة أثناء النقل؟</li>
          <li>هل تقدمون خدمات شحن دولي؟</li>
          <li>كم تستغرق عملية النقل؟</li>
          <li>هل توفرون خدمات تنظيف الأثاث بعد النقل؟</li>
          <li>ما أنواع التغليف المستخدمة لحماية الأثاث؟</li>
        </ul>
      </section>

      {/* قائمة الروابط السريعة */}
      <nav className="bg-gray-200 p-4 rounded-xl shadow-md my-6">
        <h2 className="text-2xl font-semibold text-gray-800">خدمات أخرى</h2>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          {serviceSections.map((section, index) => (
            <li key={index}>
              <Link href={section.link} className="text-blue-600 underline">
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="text-center text-gray-700 my-8">
        جميع الحقوق محفوظة لشركة الصابرين &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default ServicesPages;

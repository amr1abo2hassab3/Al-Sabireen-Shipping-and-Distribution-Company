import React from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import CardOffer from "../CardOffer/CardOffer";
import BoxOfferOrder from "../BoxOfferOrder/BoxOfferOrder";

export default function OfferOrder() {
  const services = [
    {
      city: "الرياض",
      description: "النقل السريع داخل العاصمة مع ضمان الحماية الكاملة.",
    },
    { city: "جدة", description: "حلول الشحن البحري والجوي بأفضل الأسعار." },
    { city: "الدمام", description: "خدمات شحن متكاملة تشمل النقل والتخزين." },
    { city: "القصيم", description: "نقل احترافي مع تغليف مقاوم للكسر." },
    {
      city: "حفر الباطن",
      description: "نقل العفش والبضائع بأحدث المركبات المغلقة.",
    },
    { city: "حائل", description: "فريق متخصص لضمان سرعة وجودة الخدمة." },
    {
      city: "المدينة المنورة",
      description: "نقل موثوق وآمن داخل وخارج المدينة.",
    },
  ];
  const features = [
    { title: "أسعار تنافسية", description: "تناسب جميع الميزانيات." },
    { title: "سرعة وأمان", description: "في تنفيذ عمليات النقل." },
    {
      title: "فريق محترف",
      description: "مدرب على التعامل مع جميع أنواع الأثاث.",
    },
    { title: "خدمات شحن", description: "محلي ودولي بأفضل المعايير." },
  ];
  const boxData = [
    {
      title: "لماذا تختار شركة الصابرين للنقل في السعودية؟",
      paragraphs: [
        "تعد الصابرين أفضل شركة نقل عفش في الرياض، جدة، الدمام، القصيم، حفر الباطن، حائل، والمدينة المنورة، حاصلة على شهادة الأيزو.",
        "لدينا خبرة طويلة في نقل الأثاث داخل المملكة العربية السعودية بأمان وسرعة، مع توفير خدمات تغليف وحماية متكاملة.",
      ],
      linkText: "اتصل بنا الآن",
      linkHref: "tel:+966565469022",
    },
    {
      title: "خدمات الشحن والنقل السريع داخل السعودية",
      paragraphs: [
        "نحن نقدم خدمات شحن البضائع في الرياض، جدة، الدمام، القصيم، حفر الباطن، حائل، والمدينة المنورة.",
        "نوفر أحدث الشاحنات والمعدات لضمان نقل آمن وسريع بأسعار تنافسية، مع إمكانية التوصيل الفوري.",
      ],
      linkText: "اتصل لحجز خدمة الشحن",
      linkHref: "tel:+966565469022",
    },
    {
      title: "نقل سيارات بين جميع مدن السعودية",
      paragraphs: [
        "خدمة نقل السيارات بين الرياض، جدة، الدمام، القصيم، حفر الباطن، حائل، والمدينة المنورة بأفضل الأسعار.",
        "نستخدم ناقلات حديثة تضمن سلامة سيارتك حتى وصولها إلى وجهتها بأمان.",
      ],
      linkText: "اتصل للاستفسار عن نقل السيارات",
      linkHref: "tel:+966565469022",
    },
    {
      title: "أفضل شركة نقل أثاث في السعودية",
      paragraphs: [
        "نقدم خدمات نقل عفش احترافية في الرياض، جدة، الدمام، القصيم، حفر الباطن، حائل، والمدينة المنورة، مع ضمان الحماية الكاملة للأثاث.",
        "نعمل على مدار الساعة لتوفير خدمة موثوقة وسريعة داخل جميع مدن المملكة.",
      ],
      linkText: "اتصل للحصول على عرض سعر",
      linkHref: "tel:+966565469022",
    },
    {
      title: "نقل المكاتب والشركات في السعودية",
      paragraphs: [
        "نقدم خدمة نقل المكاتب والشركات في الرياض، جدة، الدمام، والقصيم بأسعار تنافسية.",
        "نضمن لك فك وتركيب الأثاث والمعدات الإلكترونية بأمان وسرعة دون التأثير على سير العمل.",
      ],
      linkText: "احجز خدمة نقل المكاتب",
      linkHref: "tel:+966565469022",
    },
    {
      title: "نقل العفش داخل نفس المدينة وبين المدن",
      paragraphs: [
        "نقل العفش داخل الرياض، جدة، الدمام، والمدينة المنورة، بالإضافة إلى النقل بين المدن.",
        "نوفر سيارات مجهزة وعمالة مدربة لنقل أثاثك بأمان وسرعة داخل السعودية.",
      ],
      linkText: "اتصل لحجز خدمة النقل",
      linkHref: "tel:+966565469022",
    },
  ];

  return (
    <div className="container mx-auto my-18">
      <HeaderTitle
        name="📍 خدماتنا متاحة في جميع أنحاء السعودية"
        caption="للحصول على سعر وخدمات أفضل"
      />
      <div className="bg-white shadow-lg rounded-lg p-6 my-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          أفضل شركة نقل عفش وشحن في السعودية
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          إذا كنت تبحث عن <strong>شركة نقل عفش موثوقة</strong> أو{" "}
          <strong>شحن البضائع والسيارات</strong> داخل السعودية أو إلى دول الخليج
          العربي، فنحن في <strong>[شركة الصابرين]</strong> نوفر لك حلولًا مميزة
          وسريعة تناسب احتياجاتك. نمتلك خبرة واسعة في تقديم{" "}
          <strong>خدمات النقل والتغليف الاحترافي</strong>، لضمان وصول أغراضك
          بأمان تام ودون أي تلف.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {services.map((service, index) => (
          <CardOffer
            key={index}
            city={service.city}
            description={service.description}
          />
        ))}
      </div>
      <HeaderTitle name="🚀 لماذا تختار خدماتنا؟" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {features.map((feature, index) => (
          <CardOffer
            key={index}
            city={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {boxData.map((data, index) => (
          <BoxOfferOrder
            key={index}
            title={data.title}
            paragraphs={data.paragraphs}
            linkText={data.linkText}
            linkHref={data.linkHref}
          />
        ))}{" "}
      </div>
    </div>
  );
}

import ServicesPages from "@/app/_components/ServicesPages/ServicesPages";
import React from "react";
import imgSection from "../../../assets/images/serv1.jpg";
const serviceSections = [
  {
    title: "نقل الأثاث داخل جدة",
    description:
      "توفر شركة الصابرين خدمات نقل الأثاث داخل جدة بأعلى معايير الجودة. نضمن لك تجربة نقل سلسة وآمنة مع استخدام أحدث وسائل التغليف والحماية.",
    link: "/services/jeddah",
  },
  {
    title: "نقل الأثاث خارج جدة",
    description:
      "نقدم خدمات نقل العفش خارج جدة إلى جميع المدن السعودية، مع توفير سيارات مجهزة لحماية الأثاث أثناء النقل لمسافات طويلة.",
    link: "/services",
  },
  {
    title: "نقل الشركات والمكاتب",
    description:
      "نساعدك في نقل مكتبك أو شركتك بأمان وسرعة، مع ترتيب الأثاث في المكان الجديد لضمان استمرارية العمل دون تأخير.",
    link: "/services",
  },
  {
    title: "التخزين المؤقت للأثاث",
    description:
      "نوفر مستودعات آمنة لتخزين العفش لفترات مؤقتة مع أنظمة حماية متقدمة.",
    link: "/services",
  },
  {
    title: "خدمات الفك والتركيب",
    description:
      "نوفر فريقًا متخصصًا لفك وتركيب الأثاث بأفضل الطرق، مما يضمن الحفاظ على سلامته أثناء النقل.",
    link: "/",
  },
  {
    title: "شحن الأثاث دوليًا",
    description:
      "نقدم خدمات شحن الأثاث إلى خارج السعودية، سواءً عبر النقل الجوي أو البحري، مع توفير الحماية والتغليف المناسب.",
    link: "/services",
  },
  {
    title: "تنظيف الأثاث بعد النقل",
    description:
      "نقدم خدمات تنظيف وتعقيم الأثاث بعد نقله لضمان بيئة نظيفة وصحية.",
    link: "/services",
  },
  {
    title: "خدمات التعبئة والتغليف",
    description:
      "نقدم حلول تغليف احترافية للحفاظ على الأثاث أثناء النقل، باستخدام مواد ذات جودة عالية.",
    link: "/",
  },
];

export default function Jeddah() {
  return (
    <div>
      <ServicesPages
        ImgSection={imgSection}
        city="جدة"
        serviceSections={serviceSections}
      />
    </div>
  );
}

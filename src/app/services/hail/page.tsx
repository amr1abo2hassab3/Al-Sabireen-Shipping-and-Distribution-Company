import ServicesPages from "@/app/_components/ServicesPages/ServicesPages";
import React from "react";
import imgSection from "../../../assets/images/شحن حائل.jpg";

const serviceSections = [
  {
    title: "نقل الأثاث داخل حائل",
    description:
      "توفر شركة الصابرين خدمات نقل الأثاث داخل حائل بأعلى معايير الجودة. نضمن لك تجربة نقل سلسة وآمنة مع استخدام أحدث وسائل التغليف والحماية.",
    link: "/services/hail",
  },
  {
    title: "نقل الأثاث خارج حائل",
    description:
      "نقدم خدمات نقل العفش خارج حائل إلى جميع المدن السعودية، مع توفير سيارات مجهزة لحماية الأثاث أثناء النقل لمسافات طويلة.",
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

export default function Hail() {
  return (
    <div>
      <ServicesPages
        ImgSection={imgSection}
        city="حائل"
        serviceSections={serviceSections}
      />
    </div>
  );
}

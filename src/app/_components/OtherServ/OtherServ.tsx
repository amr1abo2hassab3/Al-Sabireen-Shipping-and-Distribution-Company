import React from "react";
import ItemOtherServ from "../ItemOtherServ/ItemOtherServ";
import img1 from "../../../assets/images/box1.png";
import img2 from "../../../assets/images/box2.png";
import img3 from "../../../assets/images/box3.png";
import img4 from "../../../assets/images/box4.png";
import img5 from "../../../assets/images/box5.png";
import img6 from "../../../assets/images/box7.png";

const services = [
  { imgSrc: img1, title: "تصدير الخدمات" },
  { imgSrc: img2, title: " استيراد الخدمات" },
  { imgSrc: img3, title: "توصيل سريع" },
  { imgSrc: img4, title: "ضمان" },
  { imgSrc: img5, title: " دعم ٢٤/٧" },
  { imgSrc: img6, title: "نقل الشركات" },
];

export default function OtherServ() {
  return (
    <div className="py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <ItemOtherServ
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
}

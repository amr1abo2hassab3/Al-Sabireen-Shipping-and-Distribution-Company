"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import TextLanding from "../TextLanding/TextLanding";

// استيراد الصور
import slider3 from "../../../assets/images/slider3.jpg";
import slider from "../../../assets/images/slider.jpg";

const slides = [
  {
    img: slider3,
    title: "شركة الصابرين للنقل والخدمات المنزلية",
    description: "كبرى شركات نقل العفش وشحن البضائع والسيارات",
  },
  {
    img: slider,
    title: "نقل الأثاث بأحدث الوسائل",
    description: "نستخدم أحدث المعدات لحماية أثاثك أثناء النقل",
  },
];

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    beforeChange: (_: unknown, next: number) => setCurrentSlide(next),
  };

  return (
    <Slider {...settings} className="relative">
      {slides.map((slide, index) => (
        <div key={index} className="md:h-[800px] h-[414px] relative">
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={80}
          />
          <TextLanding
            keyIndex={currentSlide}
            title={slide.title}
            description={slide.description}
          />
        </div>
      ))}
    </Slider>
  );
}

import Image from "next/image";
import img1 from "../../../assets/images/delivery-truck.png";
import img2 from "../../../assets/images/truck-2.png";

export default function ContentSec1() {
  return (
    <div className="container mt-9 mx-auto flex flex-col-reverse md:flex-row justify-between items-center flex-wrap">
      <div className="md:w-3/4 xl:w-1/2 w-full flex flex-col md:flex-row justify-start gap-6 items-center">
        <Image
          src={img1}
          width={80}
          height={80}
          alt="أسطول سيارات حديثة تناسب كافة المنقولات"
          className="filter invert"
        />
        <div className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-white font-bold text-center md:text-left">
          <h3>أسطول سيارات حديثة تناسب كافة المنقولات</h3>
          <p className="text-[#C7D5F1] mt-5 text-base md:text-lg lg:text-xl font-normal leading-relaxed">
            نحن كبرى شركات نقل العفش والأثاث والشحن في السعوديه، نضمن نقل
            ممتلكاتكم بسلامة وكفاءة.
          </p>
        </div>
      </div>

      <div className="md:w-1/4 xl:w-1/2 w-full flex justify-center">
        <Image
          src={img2}
          alt="نحن كبرى شركات نقل العفش والأثاث والشحن في السعوديه  الرياض، الدمام، القصيم، حفر، الباطن، نضمن نقل ممتلكاتكم"
        />
      </div>
    </div>
  );
}

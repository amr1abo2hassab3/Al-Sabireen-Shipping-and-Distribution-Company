import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../../../assets/images/photo_2025-03-21_02-51-37.jpg";

interface SocialLink {
  href: string;
  icon: string;
  title: string;
  type: "brands" | "solid";
}

interface Location {
  name: string;
  link: string;
  image: StaticImageData | string;
}

interface AsideArticleProps {
  locations: Location[];
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

const AsideArticle: React.FC<AsideArticleProps> = ({ locations }) => {
  return (
    <aside className="siderbar bg-white/10 border sticky top-4 h-fit border-black/10 rounded-lg shadow-[10px_10px_0px_0px_rgba(123,175,60,0.2)] col-span-1">
      <div className="text-center p-6">
        <h5 className="text-xl font-bold text-[#7baf3c] mb-2">
          أفضل شركة نقل عفش في السعودية
        </h5>
        <div className="flex justify-center my-6">
          <Image
            src={logo}
            alt="شعار شركة الصابرين لنقل العفش"
            width={200}
            height={100}
            className="object-contain w-full h-auto"
          />
        </div>
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
      <div className="bg-[#7baf3c33]">
        <p className="text-lg bg-[#7baf3c33] font-bold py-[15px] px-[25px] text-[#7baf3c] mt-4">
          خدماتنا الأخرى
        </p>
        <ul className="list-none bg-white p-6 text-gray-700 space-y-2">
          <li className="border-b border-[rgba(167,167,167,0.15)] text-[#7baf3c] py-2 cursor-pointer transition-all duration-300 hover:border-[#7baf3c] flex items-center gap-2">
            <i className="fa-solid fa-angle-left"></i>
            <span>نقل العفش في جميع أنحاء المملكة</span>
          </li>
          <li className="border-b border-[rgba(167,167,167,0.15)] text-[#7baf3c] py-2 cursor-pointer transition-all duration-300 hover:border-[#7baf3c] flex items-center gap-2">
            <i className="fa-solid fa-angle-left"></i>
            <span>خدمات التخزين الآمنة</span>
          </li>
          <li className="border-b border-[rgba(167,167,167,0.15)] text-[#7baf3c] py-2 cursor-pointer transition-all duration-300 hover:border-[#7baf3c] flex items-center gap-2">
            <i className="fa-solid fa-angle-left"></i>
            <span>نقل البضائع والشحن الداخلي</span>
          </li>
        </ul>
      </div>

      <div className="bg-[#7baf3c33]">
        <p className="text-lg bg-[#7baf3c33] font-bold py-[15px] px-[25px] text-[#7baf3c] mt-4">
          اماكن تواجدنا
        </p>
        <div className="bg-white p-6 ">
          {locations.map((location, index) => (
            <Link
              key={index}
              href={location.link}
              className="flex flex-col gap-[30px] py-2 items-center text-lg border-b border-[rgba(167,167,167,0.80)] transition-all"
            >
              <div className="relative  overflow-hidden rounded-md group shadow-[10px_10px_0px_0px_rgba(123,175,60,0.2)]">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={80}
                  height={80}
                  style={{ width: "auto", height: "auto" }}
                />

                <div className="absolute bg-white w-full h-full top-0 left-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                  <i className="fa-solid fa-link"></i>
                </div>
              </div>
              <span className="mr-3 font-bold text-[#7baf3c]">
                {location.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AsideArticle;

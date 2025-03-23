import HeadingFooter from "../HeadingFooter/HeadingFooter";
import FooterLink from "../FooterLink/FooterLink";
import FooterAbout from "../FooterAbout/FooterAbout";

const footerLinks = [
  { href: "/", title: "نقل الأثاث في الرياض" },
  { href: "/jeddah", title: "نقل الأثاث في جدة" },
  { href: "/dammam", title: "نقل الأثاث في الدمام" },
  { href: "/mecca", title: "نقل الأثاث في مكة" },
  { href: "/medina", title: "نقل الأثاث في المدينة المنورة" },
];

const contactInfo = [
  {
    title: "عنوان",
    address: "المملكة العربية السعودية",
    icon: "fa-solid fa-location-dot",
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
];
export default function Footer() {
  return (
    <footer>
      <div className="bg-[#212121] bg-cover pt-20 px-12 pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            <div>
              <HeadingFooter title="بالنسبة لشركتنا" />
              <p className="text-white/75 font-bold">
                <strong>شركة الصابرين</strong> للنقل والخدمات المنزلية رائدة
                شركات نقل العفش والبضائع والسيارات داخل المملكة العربية
                السعودية.
              </p>
            </div>
            <div>
              <HeadingFooter title="نقل أثاث داخل السعودية" />
              <nav aria-label="روابط نقل الأثاث">
                <ul role="list">
                  {footerLinks.map((link, index) => (
                    <FooterLink
                      key={index}
                      href={link.href}
                      title={link.title}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <HeadingFooter title="معلومات التواصل" />
              {contactInfo.map((info, index) => (
                <FooterAbout key={index} {...info} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C1C1C] text-white text-[18px] font-extrabold text-center p-[20px]">
        <span className="bg-[#0AAD0A]">
          حقوق النشر © ٢٠٢٥. جميع الحقوق محفوظة - شركة الصابرين للنقل والخدمات
          المنزلية.
        </span>
      </div>
    </footer>
  );
}

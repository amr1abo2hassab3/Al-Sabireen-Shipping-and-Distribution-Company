import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import ContactFixed from "./_components/ContactFixed/ContactFixed";

export const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-kufi",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/favicon.ico",
  metadataBase: new URL("https://al-sabreentransport.com"),
  title: "شركة الصابرين للنقل والخدمات المنزلية - نقل عفش وشحن داخل السعودية",
  description:
    "شركة الصابرين للنقل تقدم خدمات نقل العفش، شحن الأثاث، وتخزين العفش في جميع أنحاء السعودية. خدمات نقل آمنة وسريعة بأسعار تنافسية.",
  keywords: [
    "نقل عفش",
    "نقل الأثاث",
    "شحن داخل السعودية",
    "شركة شحن",
    "شحن الأثاث",
    "تخزين العفش",
    "شركات النقل في السعودية",
    "نقل أثاث بأسعار رخيصة",
    "شحن البضائع",
    "نقل الأثاث في الرياض",
    "نقل الأثاث في جدة",
    "نقل الأثاث في الدمام",
    "نقل الأثاث في مكة",
    "نقل الأثاث في المدينة المنورة",
    "نقل الأثاث في حائل",
    "نقل الأثاث في القصيم",
    "نقل الأثاث في حفر الباطن",
    "نقل الأثاث في الطائف",
    "نقل الأثاث في أبها",
    "نقل الأثاث في تبوك",
    "نقل الأثاث في نجران",
    "نقل الأثاث في الباحة",
    "نقل الأثاث في جيزان",
    "نقل الأثاث في ينبع",
    "نقل الأثاث في الجبيل",
    "نقل الأثاث في الخرج",
    "نقل الأثاث في الإحساء",
    "نقل الأثاث في سكاكا",
    "نقل الأثاث في القريات",
    "نقل الأثاث في عرعر",
  ],
  robots: "index, follow",
  openGraph: {
    title: "شركة الصابرين للنقل والخدمات المنزلية - نقل عفش وشحن داخل السعودية",
    description:
      "خدمات نقل العفش، شحن الأثاث، والتخزين في جميع أنحاء المملكة العربية السعودية. اتصل بنا الآن للحصول على أفضل الأسعار.",
    type: "website",
    url: "https://al-sabreentransport.com",
    images: [
      {
        url: "https://al-sabreentransport.com/assets/images/photo_2025-03-21_02-51-37.jpg",
        width: 1200,
        height: 630,
        alt: "شركة الصابرين للنقل والخدمات المنزلية",
      },
    ],
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "شركة الصابرين للنقل والخدمات المنزلية - نقل عفش وشحن داخل السعودية",
    description:
      "خدمات نقل العفش، شحن الأثاث، والتخزين في جميع أنحاء المملكة العربية السعودية. اتصل بنا الآن للحصول على أفضل الأسعار.",
    images: [
      "https://al-sabreentransport.com/assets/images/photo_2025-03-21_02-51-37.jpg",
    ],
  },
  alternates: {
    canonical: "https://al-sabreentransport.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "شركة الصابرين للنقل والخدمات المنزلية",
            url: "https://al-sabreentransport.com",
            logo: "https://al-sabreentransport.com/assets/images/logo.png",
            description: "نقل عفش وشحن داخل السعودية بأفضل الأسعار.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
              addressRegion: "الرياض",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966XXXXXXXXX",
              contactType: "customer service",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "شركة الصابرين للنقل والخدمات المنزلية",
            description: "نقل عفش وشحن الأثاث داخل السعودية بأسعار تنافسية.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "الرياض، السعودية",
              addressLocality: "الرياض",
              addressRegion: "SA",
              postalCode: "11564",
              addressCountry: "SA",
            },
            telephone: "+966XXXXXXXXX",
            openingHours: "Mo-Su 08:00-20:00",
            url: "http://al-sabreentransport.com",
            image:
              "http://al-sabreentransport.com/assets/images/photo_2025-03-21_02-51-37.jpg",
            geo: {
              "@type": "GeoCoordinates",
              latitude: "24.7136",
              longitude: "46.6753",
            },
            areaServed: {
              "@type": "Country",
              name: "Saudi Arabia",
            },
          })}
        </script>
      </head>
      <body
        className={`${notoKufi.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ContactFixed />
        <Footer />
      </body>
    </html>
  );
}

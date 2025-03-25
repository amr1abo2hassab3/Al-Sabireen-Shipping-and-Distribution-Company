import React from "react";

export default function ContactFixed() {
  return (
    <div className="fixed bottom-7 left-7 flex flex-col items-center justify-center gap-2">
      <div className="w-15 h-15">
        <a
          href="https://wa.me/966542971661"
          title="زيارة صفحتنا على واتساب"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center bg-[#7baf3c] text-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:bg-[#088908]"
        >
          <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true"></i>
        </a>
      </div>
      <div className="w-15 h-15">
        <a
          href="tel:+966565469022"
          title="الاتصال بنا"
          className="w-full h-full flex items-center justify-center bg-[#7baf3c] text-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:bg-[#088908]"
        >
          <i className="fa-solid fa-phone text-2xl" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

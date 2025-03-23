import Link from "next/link";

interface FooterLinkProps {
  href: string;
  title: string;
}

export default function FooterLink({ href, title }: FooterLinkProps) {
  return (
    <li
      className="text-white/75 font-bold pb-3 linkfooter transition-all duration-200 
                 group cursor-pointer flex items-center hover:mr-[8px]"
      role="listitem"
    >
      <span
        className="ml-2 w-[23px] h-[23px] flex items-center justify-center 
                   group-hover:bg-[#0aad0a] rounded bg-transparent 
                   transition-all duration-200"
        aria-hidden="true"
      >
        <i
          className="fa-solid fa-angles-left group-hover:text-white"
          aria-label="رابط تنقل"
        ></i>
      </span>
      <Link
        className="group-hover:text-[#0aad0a] transition-all duration-200 ml-2"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}

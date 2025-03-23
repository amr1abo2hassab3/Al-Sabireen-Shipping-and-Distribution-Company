interface FooterAboutProps {
  title: string;
  address: string;
  icon: string;
  link?: string;
}

export default function FooterAbout({
  title,
  address,
  icon,
  link,
}: FooterAboutProps) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link}
      className="flex items-center gap-4 group mb-7"
      {...(link && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <div
        className="w-[50px] h-[50px] group-hover:bg-[#0aad0a] duration-200 rounded p-[5px] bg-[#31291F] flex items-center justify-center"
        aria-hidden="true"
      >
        <i
          className={`${icon} text-[20px] duration-200 group-hover:text-white text-[#0aad0a]`}
        ></i>
      </div>
      <div>
        <h2 className="text-white/75 font-bold mb-1 duration-200 group-hover:text-[#0aad0a]">
          {title}
        </h2>
        <p
          className="text-white font-semibold text-[16px]"
          aria-label={address}
        >
          {address}
        </p>
      </div>
    </Wrapper>
  );
}

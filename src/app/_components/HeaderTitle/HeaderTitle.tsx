interface ProposHeaderTitle {
  name: string;
  caption?: string;
}

const HeaderTitle = ({ name, caption }: ProposHeaderTitle) => {
  return (
    <div className="">
      <h1 className="font-semibold capitalize text-[32px] inline-block rounded-[10px] pr-3 border-r-[10px] border-[#7baf3c]">
        {name}
      </h1>
      <h3 className="text-[16px] font-bold text-[#66666] mt-3">{caption} </h3>
    </div>
  );
};

export default HeaderTitle;

import ContentHeader from "../ContentHeader/ContentHeader";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header className="p-5 absolute top-0 left-0 right-0 h-[221px] z-40 bg-gradient-to-b from-black/5 to-black/50">
      <ContentHeader />
      <NavBar />
    </header>
  );
}

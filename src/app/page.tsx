import Landing from "./_components/Landing/Landing";
import OfferOrder from "./_components/OfferOrder/OfferOrder";
import OtherServ from "./_components/OtherServ/OtherServ";
import Sec1 from "./_components/Sec1/Sec1";
import ServicesSection from "./_components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Landing />
      <Sec1 />
      <ServicesSection />
      <OtherServ />
      <OfferOrder />
      
    </div>
  );
}

import ServerLocation from "./components/DataCenter/ServerLocation/ServerLocation";
import Services from "./components/DataCenter/Services/Services";
import CustomerOpinions from "./components/Home/CustomerOpinions";
import DashboardFeatures from "./components/Home/DashboardFeatures";
import HeroSectionHome from "./components/Home/HeroSectionHome";
import PartnersSection from "./components/Home/PartnersSection";
import ServicesSection from "./components/Home/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSectionHome />
      <ServicesSection />
      <ServerLocation />
      <Services />
      <DashboardFeatures />
      <PartnersSection />
      <CustomerOpinions />
    </div>
  );
}

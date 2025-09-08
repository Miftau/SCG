import Dashboard from "../components/StaticDashboard/Welcome";
import TechnologySection from "../components/StaticDashboard/TechnologySection";
import { NavigationMenuDemo } from "../components/Header/MainNavbar";
import Services from "../components/DataCenter/Services/Services"; 
import Navbar from "../components/Header/Navbar";

export default function StaticDashboard() {
  return (
    <div className="overflow-x-hidden">
       <NavigationMenuDemo/> 
      <Dashboard />
      <TechnologySection />
      <Services/>
    </div>
  );
}
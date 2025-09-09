import React from "react";
import HeroSection from "../components/Blog/HeroSection";
import Asks from "../components/DataCenter/Asks/Asks";
import { NavigationMenuDemo } from "../components/Header/MainNavbar";




const Blog = () => {
  return (
    <div className="overflow-x-hidden">
    <NavigationMenuDemo/>
      <HeroSection
      />
      <Asks />
    </div>
  );
};

export default Blog;
"use client";
import { motion } from "framer-motion";
import { NavigationMenuDemo } from "../Header/MainNavbar";


const AboutHeroSection = () => {
    return (
        <div className="relative w-full min-h-1/4 bg-[#092346]">
            {/* Background image */}
              <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } }}
            className="w-full h-full relative"
          >
            {/* Background image */}
            <img src="/images/about.svg" className="absolute w-full bottom-0 left-0" />

          </motion.div>
        </div>
            {/* Content over background */}
            <NavigationMenuDemo />
            <div className="relative z-10 text-white flex flex-col pt-12 items-center  h-[70vh] md:min-h-[400px]">
                <div className="w-full max-w-4xl flex flex-col items-center justify-center px-4 text-center">
                    <p className=" text-2xl md:text-4xl font-semi-bold ">
                        عن النمور

                    </p>
                    <p className="text-lg font-medium pt-4 sm:pt-6 md:pt-8">
                        النمور هو المزود الرائد لخدمات السحابة في المملكة العربية السعودية،  
                      
                        ويعمل على دعم وحماية البنية  التحتية التقنية للمؤسسات من جميع الأحجام.
                       
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHeroSection;

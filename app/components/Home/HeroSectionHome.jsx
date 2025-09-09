"use client";
import { motion } from "framer-motion";
import  {NavigationMenuDemo}  from "../Header/MainNavbar";

const HeroSectionHome = () => {
  return (
    <div className="relative text-white w-full hero bg-[#092346] lg:h-[90vh] h-[80vh] mb-10">
      <div className="hidden" />
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: "easeOut" },
          }}
          className="w-full h-full relative"
        >
          {/* Background image */}
          <img
            src="/images/groupHero-Bt0B6L23.svg"
            className="absolute w-full bottom-0 left-0"
          />
        </motion.div>
      </div>

      {/* Content over background */}
      <NavigationMenuDemo />
      <div className="absolute text-center w-full md:w-1/2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform  mt-10 px-2 lg:px-6">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center px-4 text-center">
          <p className="lg:text-7xl text-3xl text-main font-bold text-[#3684FF]">
            حلول
          </p>
          <p className="text-white lg:text-4xl text-2xl lg:my-4">
            مثالي لاستضافة الويب
          </p>
          <p className="font-thin md:text-2xl text-lg lg:mb-4 ">
           شركة نيمور هي شركة رائدة في مجال استضافة الويب وحجز النطاقات.
          </p>
          {/* Search box */}
          <div className="flex justify-center w-full">
            <div className="relative mt-4 w-3/4">
              <input
                type="search"
                placeholder="بحث عن نطاق جديد"
                className="w-full py-3 px-4 md:!px-8 rounded-full bg-white md:placeholder:text-lg placeholder:text-sm placeholder:text-gray-400 outline-none text-black"
                suppressHydrationWarning={true}
              />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 ltr:right-1 rtl:left-1 outline-none text-white bg-[#3684FF] rounded-full py-2 px-4 lg:px-8"
                suppressHydrationWarning={true}
              >
                ابحث
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <img
              src="/images/542e8bd45065bae71f3f7a0e25f1b8d34418216f.png"
              alt="Center Illustration"
              width={50}
              height={50}
              quality={100}
              className="object-contain"
            />
            <img
              src="/images/e91e873ab3ce43c99bdd0e4cf6350a0e88455e40.png"
              alt="Center Illustration"
              width={50}
              height={50}
              className="object-contain"
            />
            <img
              src="/images/c476df0ad4e70158a7a67a17ec68c57702098968.png"
              alt="Center Illustration"
              width={50}
              height={50}
              className="object-contain"
            />
            <img
              src="/images/6081d7c898df845d9b7b48ca230ea32c13208f7c.png"
              alt="Center Illustration"
              width={50}
              height={50}
              className="object-contain"
            />
            <img
              src="/images/542e8bd45065bae71f3f7a0e25f1b8d34418216f.png"
              alt="Center Illustration"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;

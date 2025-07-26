"use client";
import { motion } from "framer-motion";

const HeroSectionHome = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#092346]">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/groupHero-Bt0B6L23.svg')" }}
        ></motion.div>
      </div>
      {/* Content over background */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center px-4 text-center">
          <p className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-[#3684FF]">
            حلول
          </p>
          <p className="text-lg sm:text-xl md:text-4xl font-bold pt-4 sm:pt-6 md:pt-8">
            استضفات الويب المثالية
          </p>
          <p className="text-lg sm:text-xs md:text-sm  pt-2 sm:pt-4 ">
            شركة العنكبوت الليبي هي الشركة الرائدة في تقديم حلول التكنولوجيا
            <br />
            والخدمات السحابية في ليبيا.
          </p>
          {/* Search box */}
          <div className="w-full mt-8 sm:mt-12">
            <div className="relative flex items-center bg-white rounded-full overflow-hidden w-full max-w-[600px] mx-auto">
              <input
                type="text"
                placeholder="بحث عن نطاق جديد"
                className="w-full px-4 py-4 text-gray-500 focus:outline-none bg-white rounded-r-full text-right placeholder:text-gray-400 text-sm sm:text-base"
                suppressHydrationWarning={true} // Added to suppress hydration warning
              />
              <button
                className="absolute left-2 sm:left-4 bg-[#3684FF] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-bold rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base"
                suppressHydrationWarning={true} // Added to suppress hydration warning
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

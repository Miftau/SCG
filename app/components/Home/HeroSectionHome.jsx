import React from "react";

const HeroSectionHome = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#092346]">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Maskgroup.png')" }}
        ></div>
      </div>
      {/* Content over background */}
      <div className="relative z-10 text-white flex flex-col items-start justify-center pr-4 sm:pr-8 md:pr-12  h-screen">
        <div className="w-full max-w-4xl  flex flex-col items-start justify-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3684FF]">
            حلول
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold pt-4 sm:pt-6 md:pt-8">
            استضفات الويب المثالية
          </p>

          {/* Search box */}
          <div className="w-full mt-8 sm:mt-12">
            <div className="relative flex items-center bg-white rounded-full overflow-hidden w-full max-w-[600px]">
              <input
                type="text"
                placeholder="بحث عن نطاق جديد"
                className="w-full px-4 py-4 text-gray-500 focus:outline-none bg-white rounded-r-full text-right placeholder:text-gray-400 text-sm sm:text-base"
              />
              <button className="absolute left-2 sm:left-4 bg-[#3684FF] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-bold rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base">
                ابحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;

import React from "react";
import AccordionDemo from "./AccordionDemo";

const Asks = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-items-center md:justify-items-stretch w-full max-w-6xl">
        
        {/* Left side - Cards */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-y-6">
          {/* Card 1 - FAQ Active */}
          <div className="bg-white flex flex-col justify-center items-center gap-y-3 py-6 px-0 rounded-xl border border-gray-200 shadow-md relative">
            <img
              src="/images/Group228.png" 
              alt="FAQ Icon"
              className="w-16 h-24 object-contain"
            />
            <p className="font-semibold text-base text-gray-800">
              Frequently asked questions
            </p>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-b-md"></span>
          </div>

          {/* Card 2 - Help Center */}
          <div className="bg-white flex flex-col justify-center items-center gap-y-3 py-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <img
              src="/images/download 1.png" 
              alt="Help Center Icon"
              className="w-16 h-24 object-contain"
            />
            <p className="font-semibold text-base text-gray-800">Help Center</p>
          </div>
        </div>

        {/* Right side - Accordion */}
        <div className="col-span-12 md:col-span-8">
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
};

export default Asks;

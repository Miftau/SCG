import Image from "next/image";
import React from "react";
import AccordionDemo from "./AccordionDemo";

const Asks = () => {
  return (
    <div className="p-0 md:p-8 frlex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-items-center md:justify-items-stretch">
        {/* القسم الأيسر - الكروت */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col justify-center items-center md:items-start gap-y-8">
            {/* الكارت الأول */}
            <div className="bg-white flex flex-col justify-center items-center md:items-start gap-y-4 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/Group228.png"
                alt="Asks Icon"
                width={50}
                height={50}
                className="object-cover"
              />
              <p className="font-bold text-xl">مركز المساعدة</p>
            </div>
            {/* الكارت الثاني */}
            <div className="bg-white flex flex-col justify-center items-center md:items-start gap-y-4 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/download 1.png"
                alt="Asks Icon"
                width={50}
                height={50}
                className="object-cover"
              />
              <p className="font-bold text-xl">الأسئلة الشائعة</p>
            </div>
          </div>
        </div>

        {/* القسم الأيمن - Accordion */}
        <div className="col-span-12 md:col-span-8">
          <div className="h-full w-full max-w-2xl">
            <AccordionDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asks;

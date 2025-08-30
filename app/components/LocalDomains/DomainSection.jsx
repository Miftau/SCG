import React from "react";

const DomainSection = ({ title, description }) => {
  return (
    <div className=" mx-auto max-w-xl text-center px-4 py-8">
      <div className="relative">
        {/* الخلفية */}
        <img
          src="/images/Mask Group 26.png"
          alt="Online Payment"
          className="object-contain w-full"
        />

        {/* المحتوى في المنتصف */}
        <div className="">
          <img
            src="/images/number-1-register-libyan-spider-ly 1.png"
            alt="Online Payment"
            className="mx-auto mb-4"
          />
          <p className="text-[#2B1F51] text-2xl sm:text-4xl font-bold mb-5">{title}</p>
          <p className="text-[#2B1F5180] text-sm font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainSection;

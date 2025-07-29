import React from "react";

const DomainSection = ({ title, description }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {/* الخلفية */}
        <img
          src="/images/Mask Group 26.png"
          alt="Online Payment"
          className="object-contain w-full"
        />

        {/* المحتوى في المنتصف */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-xl px-4">
          <img
            src="/images/number-1-register-libyan-spider-ly 1.png"
            alt="Online Payment"
            className="mx-auto mb-4"
          />
          <p className="text-[#2B1F51] text-4xl font-bold mb-2">{title}</p>
          <p className="text-[#2B1F5180] text-sm font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainSection;

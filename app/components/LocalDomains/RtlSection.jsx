import React from "react";
const RtlSection = ({ title, items }) => {
  return (
    <section className="w-full py-12 md:py-20 bg-white flex justify-center">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index}>
              {item.label && (
                <p className="font-bold text-lg text-right flex items-center justify-start">
                  <span className="ml-2">•</span>
                  {item.label}
                </p>
              )}
              <p className="text-right text-gray-700 pr-6">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RtlSection;

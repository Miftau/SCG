// app/components/FeaturesSection.jsx
"use client";

import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 leading-tight">
          لست واثقًا من أين ستبدأ؟ لا تقلق، سنقوم بمساعدتك
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
          شركة العكوت التي وصفها مرؤدا رسمياً لحلول مايكروسوفت السحابية، على استعداد لمساعدتك مؤسسات في شأي حل الإنتاجية السحابي "مايكروسوفت 365" ودمجه بالكامل مع أبنة عملك.
        </p>

        {/* Description */}
        <p className="text-base text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          نفتخر بخدمتنا للعديد من الشركات في رحلتهم لتنفيذ عملية انتقالهم إلى خدمات مايكروسوفت 365 بنجاح – ونسردنا مساعدتكم أنتم كذلك!
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center mb-16">
          <button className="border border-black text-black font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-black hover:text-white shadow-sm">
            اطلب الآن!
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { text: "تغييرات الإعدادات" },
            { text: "التدريب" },
            { text: "الدعم الفني" },
            { text: "ضبط الإعدادات والتخصيص" },
            { text: "ترحيل البيانات والمستخدمين" },
            { text: "ترحيل SharePoint Online" }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center mb-4 group-hover:border-gray-500 transition-colors duration-300 group-hover:bg-gray-100">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center">
          <img 
            src="/images/ls-start-graphic1.svg" 
            alt="Process illustration" 
            className="w-full max-w-4xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
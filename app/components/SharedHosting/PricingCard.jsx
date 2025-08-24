'use client';
import React from "react";

const PricingCard = ({ plan, index }) => {
  const getPlanColor = () => {
    switch (index) {
      case 0: return { border: 'border-yellow-400', topBar: 'bg-yellow-400' };
      case 1: return { border: 'border-gray-300', topBar: 'bg-gray-300' };
      case 2: return { border: 'border-blue-400', topBar: 'bg-blue-400' };
      default: return { border: 'border-gray-300', topBar: 'bg-gray-300' };
    }
  };

  const colors = getPlanColor();

  return (
    <div className={`rounded-xl shadow-lg border ${colors.border} relative transform hover:scale-105 transition-transform duration-300`}>
      {index === 0 && (
        <div className="absolute top-0 left-0 right-0 h-3 bg-yellow-400 rounded-t-xl"></div>
      )}
      {index === 1 && (
        <div className="absolute top-0 left-0 right-0 h-3 bg-gray-300 rounded-t-xl"></div>
      )}
      {index === 2 && (
        <div className="absolute top-0 left-0 right-0 h-3 bg-blue-400 rounded-t-xl"></div>
      )}
      
      <div className="p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl sm:text-5xl font-bold text-gray-800">{plan.price}</span>
          <span className="text-gray-500 ml-1 text-sm">د.ل.</span>
          <span className="text-xs text-gray-500 ml-2 line-through">{plan.originalPrice} د.ل</span>
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded ml-2">{plan.discount}</span>
        </div>
        
        <button className="w-full bg-[#2B1F51] text-white py-3 rounded-lg hover:bg-[#2B1F51]/90 transition-colors duration-300 text-sm sm:text-base font-medium">
          اطلب الان
        </button>
        
        <ul className="space-y-3 mt-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-center">
              <svg className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div class="w-full h-[2px] bg-black bg-opacity-50 mt-4"></div>
      <p class="mt-4 mb-8 text-center __web-inspector-hide-shortcut__">compare packages</p>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    { 
      name: "P2-HOST", 
      price: "91.30", 
      originalPrice: "120", 
      discount: "30%", 
      features: [
        "60GB NVMe Storage",
        "15 Website (s)",
        "4 RAM",
        "3 CPU",
        "cPanel Control Panel",
        "Unlimited Subdomains",
        "Unlimited MySQL & SQL Databases",
        "Unlimited Email Account",
        "Unlimited FTP Accounts",
        "Dedicated Name Server(ns1,ns2)"
      ] 
    },
    { 
      name: "P2-HOST", 
      price: "91.30", 
      originalPrice: "120", 
      discount: "30%", 
      features: [
        "60GB NVMe Storage",
        "15 Website (s)",
        "4 RAM",
        "3 CPU",
        "cPanel Control Panel",
        "Unlimited Subdomains",
        "Unlimited MySQL & SQL Databases",
        "Unlimited Email Account",
        "Unlimited FTP Accounts",
        "Dedicated Name Server(ns1,ns2)"
      ] 
    },
    { 
      name: "P2-HOST", 
      price: "91.30", 
      originalPrice: "120", 
      discount: "30%", 
      features: [
        "60GB NVMe Storage",
        "15 Website (s)",
        "4 RAM",
        "3 CPU",
        "cPanel Control Panel",
        "Unlimited Subdomains",
        "Unlimited MySQL & SQL Databases",
        "Unlimited Email Account",
        "Unlimited FTP Accounts",
        "Dedicated Name Server(ns1,ns2)"
      ] 
    }
  ];

  return (
    /* Pricing Section */
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B1F51] mb-4">اختر الخط</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
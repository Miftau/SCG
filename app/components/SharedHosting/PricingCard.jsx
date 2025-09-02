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
          <p className="text-4xl sm:text-5xl font-bold text-gray-800">{plan.price}</p>
          <span className="text-gray-500 ml-1 text-sm">د.ل./quarterly</span>        
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
      
      <div className="w-full h-[2px] bg-black bg-opacity-5 mt-8"></div>
      <p className="mt-8 text-center z-5">compare packages</p>
      
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
    <section className="mt-64 relative">
      <img className="absolute right-0 -top-52 -z-10" alt="" src="data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77870)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M330.305%20134.66L468%2071.9882L330.305%200L192.61%2071.9882L330.305%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M192.61%2071.9883V427.472L330.305%20489.904V134.658L192.61%2071.9883Z'%20fill='url(%23paint0_linear_9_77870)'/%3e%3cpath%20d='M468%2071.9883L330.305%20134.659V489.901L468%20409.631'%20fill='url(%23paint1_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint2_linear_9_77870)'/%3e%3cpath%20d='M137.695%20280.76L275.391%20218.09L137.695%20146.102L0.00302124%20218.09L137.695%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M7.62939e-05%20218.09V573.573L137.695%20636.005V280.761L7.62939e-05%20218.09Z'%20fill='url(%23paint3_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint4_linear_9_77870)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77870'%20x1='268.204'%20y1='547.158'%20x2='156.896'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77870'%20x1='380.564'%20y1='287.631'%20x2='562.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77870'%20x1='75.5948'%20y1='693.26'%20x2='-35.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77870'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='matrix(-1%200%200%201%20468%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"></img>
      <img className="absolute left-0 -top-52 -z-10" alt="" src="data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77861)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M62.6952%20134.66L-75%2071.9882L62.6952%200L200.39%2071.9882L62.6952%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M200.39%2071.9883V427.472L62.6953%20489.904V134.658L200.39%2071.9883Z'%20fill='url(%23paint0_linear_9_77861)'/%3e%3cpath%20d='M-75%2071.9883L62.6952%20134.659V489.901L-75%20409.631'%20fill='url(%23paint1_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint2_linear_9_77861)'/%3e%3cpath%20d='M255.305%20280.76L117.609%20218.09L255.305%20146.102L392.997%20218.09L255.305%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M393%20218.09V573.573L255.305%20636.005V280.761L393%20218.09Z'%20fill='url(%23paint3_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint4_linear_9_77861)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77861'%20x1='124.796'%20y1='547.158'%20x2='236.104'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77861'%20x1='12.4365'%20y1='287.631'%20x2='-169.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77861'%20x1='317.405'%20y1='693.26'%20x2='428.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77861'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='translate(-75)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"></img>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B1F51] mb-4">اختر الخطة</h2>
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
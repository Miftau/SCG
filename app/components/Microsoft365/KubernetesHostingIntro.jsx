'use client';

import React from 'react';

const RIGHT_CUBE_SVG =
  "data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77870)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M330.305%20134.66L468%2071.9882L330.305%200L192.61%2071.9882L330.305%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M192.61%2071.9883V427.472L330.305%20489.904V134.658L192.61%2071.9883Z'%20fill='url(%23paint0_linear_9_77870)'/%3e%3cpath%20d='M468%2071.9883L330.305%20134.659V489.901L468%20409.631'%20fill='url(%23paint1_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint2_linear_9_77870)'/%3e%3cpath%20d='M137.695%20280.76L275.391%20218.09L137.695%20146.102L0.00302124%20218.09L137.695%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M7.62939e-05%20218.09V573.573L137.695%20636.005V280.761L7.62939e-05%20218.09Z'%20fill='url(%23paint3_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint4_linear_9_77870)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77870'%20x1='268.204'%20y1='547.158'%20x2='156.896'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77870'%20x1='380.564'%20y1='287.631'%20x2='562.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77870'%20x1='75.5948'%20y1='693.26'%20x2='-35.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77870'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='matrix(-1%200%200%201%20468%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";


const KubernetesHostingIntro = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      {/* Top Left Decorative Image */}
      <div className="absolute top-5 left-5 w-20 h-20">
        <img 
          src={RIGHT_CUBE_SVG}
          alt="Server Icon" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12">
        {/* Left Content */}
        <div className="flex-1 text-right">
          {/* Microsoft Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/microsoft-clould-solution-provider1.png" 
              alt="Microsoft" 
              className="w-64 h-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            شركة النور شريك مزود لحلول مايكروسوفت السحابية
          </h1>

          {/* Arabic Text */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-right">
            إنها الأدوات التي تعرفها وتحبها، وأكثر من ذلك بكثير. ابدأ العمل عبر الإنترنت باستخدام حل الإنتاجية المشهور عالميًا الذي يوفر تطبيقات Office مثل PowerPoint و Word و Excel مع استضافة آمنة على الإنترنت، والاتصال بالبريد الإلكتروني Outlook و OneDrive للتخزين وتحسين سحب الملفات، بالإضافة إلى مساحة تخزين سحابية بسعة 1 تيرابايت والمزيد من أدوات التعاون.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-2xl">
          <img 
            src="/images/microsoft-right.png" 
            alt="Cloud Computing Setup" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default KubernetesHostingIntro;
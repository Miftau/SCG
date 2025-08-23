// app/components/PartnersGrid.jsx
"use client";

import React from 'react';

const PartnersGrid = () => {
  return (
    <section className="bg-gray-70 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          موثوق به من قبل عملائنا
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Partner 1 */}
          <div className="bg-gray-0 p-6 rounded-lg text-center rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/partner1.jpg" 
                alt="مركز المعلومات والتوثيق" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">مركز المعلومات والتوثيق</p>
          </div>

          {/* Partner 2 */}
          <div className="bg-gray-0 p-6 rounded-lg text-center rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/partner2.png" 
                alt="لجنة الإفراجات المالية" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">لجنة الإفراجات المالية</p>
          </div>

          {/* Partner 3 */}
          <div className="bg-gray-0 p-6 rounded-lg text-center rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/partner3.png" 
                alt="صندوق الضمان الاجتماعي" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">صندوق الضمان الاجتماعي</p>
          </div>

          {/* Partner 4 */}
          <div className="bg-gray-0 p-6 rounded-lg text-center rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300">
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/partner3.png" 
                alt="صندوق الضمان الاجتماعي" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">صندوق الضمان الاجتماعي</p>
          </div>

          {/* Partner 5 (Centered on 2nd row) */}
          <div className="bg-gray-0 p-6 rounded-lg text-center rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300 md:col-span-1 md:col-start-2">
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/partner2.png" 
                alt="مصلحة السجل التجاري" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">مصلحة السجل التجاري</p>
          </div>

          {/* Partner 6 (Next to Partner 5, also centered) */}
          <div className="bg-gray-0 p-6 rounded-lg text-center rounded-xl shadow-lg relative transform hover:scale-105 transition-transform duration-300 md:col-span-1">
            <div className="mb-4 flex justify-center">
              <img 
                src="/images/partner6.png" 
                alt="صيدلية ذات العواري" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-gray-700 font-medium">صيدلية ذات العواري</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;

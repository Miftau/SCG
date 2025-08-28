"use client";
import React from 'react';

const MailHostAdvantages = () => {
  return (
    <div className="bg-white py-4 px-4 sm:px-2 lg:px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">مزايا استضافة البريد الإلكتروني</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            اكتشف المزايا التي تقدمها خدمات استضافة البريد الإلكتروني لدينا
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Advantage 1 */}
          <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50 border border-gray-100 aspect-square flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <img 
                src="/images/mailhost/mail-storage-icon 1.svg" 
                alt="السعة التخزينية" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm leading-tight">
              مساحة تخزين كبيرة للبريد الإلكتروني
            </p>
            <div className="mt-2 w-8 h-1 bg-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Advantage 2 */}
          <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-green-50 border border-gray-100 aspect-square flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <img 
                src="/images/mailhost/uptime-guarantee 1.svg" 
                alt="الموثوقية" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm leading-tight">
              ضمان وقت تشغيل بنسبة 99.9%
            </p>
            <div className="mt-2 w-8 h-1 bg-green-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Advantage 3 */}
          <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-purple-50 border border-gray-100 aspect-square flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <img 
                src="/images/mailhost/rel-email-icon 1.svg" 
                alt="الأمان" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm leading-tight">
              بريد إلكتروني احترافي مع حماية أمنية
            </p>
            <div className="mt-2 w-8 h-1 bg-purple-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Advantage 4 */}
          <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-orange-50 border border-gray-100 aspect-square flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <img 
                src="/images/mailhost/ssl 1.svg" 
                alt="الدعم الفني" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm leading-tight">
              فريق دعم فني متخصص على مدار الساعة
            </p>
            <div className="mt-2 w-8 h-1 bg-orange-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Advantage 5 */}
          <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-red-50 border border-gray-100 aspect-square flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <img 
                src="/images/mailhost/Security-Monitoring-icon 1.svg" 
                alt="النسخ الاحتياطي" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm leading-tight">
              نسخ احتياطي تلقائي لبياناتك
            </p>
            <div className="mt-2 w-8 h-1 bg-red-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Advantage 6 */}
          <div className="group bg-gray-50 rounded-md p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-indigo-50 border border-gray-100 aspect-square flex flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <img 
                src="/images/mailhost/spam-protection-icon 1.svg" 
                alt="إدارة سهلة" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-gray-600 text-sm leading-tight">
              واجهة سهلة الاستخدام لإدارة البريد الإلكتروني
            </p>
            <div className="mt-2 w-8 h-1 bg-indigo-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailHostAdvantages;
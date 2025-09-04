"use client";
import React from 'react';

const MailHostAdvantages = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 my-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">مزايا استضافة البريد الإلكتروني</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            اكتشف المزايا التي تقدمها خدمات استضافة البريد الإلكتروني لدينا
          </p>
        </div>

        {/* Grid of Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Advantage 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src="/images/mailhost/mail-storage-icon 1.svg" 
              alt="السعة التخزينية" 
              className="w-24 h-48 mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm leading-tight">مساحة تخزين كبيرة للبريد الإلكتروني</p>
          </div>

          {/* Advantage 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src="/images/mailhost/uptime-guarantee 1.svg" 
              alt="الموثوقية" 
              className="w-24 h-48 mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm leading-tight">ضمان وقت تشغيل بنسبة 99.9%</p>
          </div>

          {/* Advantage 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src="/images/mailhost/rel-email-icon 1.svg" 
              alt="الأمان" 
              className="w-24 h-48 mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm leading-tight">بريد إلكتروني احترافي مع حماية أمنية</p>
          </div>

          {/* Advantage 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src="/images/mailhost/ssl 1.svg" 
              alt="الدعم الفني" 
              className="w-24 h-48 mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm leading-tight">فريق دعم فني متخصص على مدار الساعة</p>
          </div>

          {/* Advantage 5 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src="/images/mailhost/Security-Monitoring-icon 1.svg" 
              alt="النسخ الاحتياطي" 
              className="w-24 h-48 mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm leading-tight">نسخ احتياطي تلقائي لبياناتك</p>
          </div>

          {/* Advantage 6 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center">
            <img 
              src="/images/mailhost/spam-protection-icon 1.svg" 
              alt="إدارة سهلة" 
              className="w-24 h-48 mb-4 object-contain"
            />
            <p className="text-gray-700 text-sm leading-tight">واجهة سهلة الاستخدام لإدارة البريد الإلكتروني</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailHostAdvantages;
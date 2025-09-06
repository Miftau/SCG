"use client";
import React from "react";

const BeastMain = () => {
  return (
    <div className="relative mt-16 mb-32 md:mx-16 mx-4">
      <div className="mb-16">
        <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold">
          المزايا الرئيسية
        </h1>
        <p className="text-center mt-6">
          امتلك خادمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.
        </p>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
          <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105 undefined">
            <img src="/images/control%201-ztjX8Ipp.svg" alt="PCI/DSS" />
            <h1 className="text-center text-sm font-medium">
              التوافق مع معيار PCI/DSS
            </h1>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 undefined">
            <img src="/images/data-encrypt%201-CriIjH66.svg" alt="تشفير" />
            <h1 className="text-center text-sm font-medium">
              تشفير البيانات 256-بت
            </h1>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 undefined">
            <img src="/images/secure-client%201-G6n8GCv6.svg" alt="تأمين" />
            <h1 className="text-center text-sm font-medium">
              تأمين بيانات العملاء
            </h1>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 undefined">
            <img src="/images/laptop-DdcKV8iV.svg" alt="دعم فني" />
            <h1 className="text-center text-sm font-medium">الدعم الفني</h1>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 undefined">
            <img
              src="/images/Security-Monitoring-icon%201-BDBMSdm4.svg"
              alt="ضمان"
            />
            <h1 className="text-center text-sm font-medium">الضمان</h1>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 undefined">
            <img src="/images/feat-speed%201-Crq2Kl6Q.svg" alt="HTTPS" />
            <h1 className="text-center text-sm font-medium">
              رمز القفل واختصار https://
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeastMain;

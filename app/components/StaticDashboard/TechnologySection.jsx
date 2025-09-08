"use client";
import React from "react";

const TechnologySection = () => {
  return (
    <div className="container mt-32">
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold">
        The technology used to build the painting
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/fi_1995685-Cl-Oibpi.svg" alt="tech-icon" />
          <h1 className="text-center text-xs">ltrltrltr</h1>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Laravel.svg%201-BC6tyiE6.svg" alt="laravel" />
          <h1 className="text-center text-xs">Laravel</h1>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Php-BjU_0vM1.svg" alt="php" />
          <h1 className="text-center text-xs">Php</h1>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/Js-Dc4NxB02.svg" alt="javascript" />
          <h1 className="text-center text-xs">JavaScript</h1>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 col-span-1 lg:col-span-1 md:col-span-2 col-start-2">
          <img src="/images/logo-onlight%201-C8yTmhJR.svg" alt="lagom-theme" />
          <h1 className="text-center text-xs">Lagom Theme</h1>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 col-span-1 lg:col-span-1 md:col-span-2 col-start-2">
          <img src="/images/whatsapp-16%201-CKGxjYoG.svg" alt="whatsapp-api" />
          <h1 className="text-center text-xs">Api WhatsApp</h1>
        </div>

        {/* Card 7 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105 col-span-1 lg:col-span-1 md:col-span-2 col-start-2">
          <img src="/images/whmcs-logo%202-D6A94U71.svg" alt="whmcs" />
          <h1 className="text-center text-xs">Whmcs</h1>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;

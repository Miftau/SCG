"use client";
import React from "react";

const ImageSection = () => {
  return (
    <div className="container mt-12">
      {/* النص */}
      <p className="text-center text-lg">
        هل ترغب في معرفة كيف يمكننا المساعدة في نجاح عملك؟ تواصل معنا.
      </p>

      {/* الشعارات */}
      <div className="grid lg:grid-cols-5 grid-cols-2 lg:ml-16 sm:mx-auto gap-4 mt-12 items-center justify-center">
        <img alt="مايكروسوفت" src="/images/microsoft-GkOjRO04.svg" />
        <img alt="شعار شريك" src="/images/Group%202306-DCwOO3nP.svg" />
        <img alt="شعار شريك" src="/images/Group 2307-nyjIzQtj.svg" />
        <img
          alt="شعار شريك"
          src="data:image/svg+xml,%3csvg%20width='239'%20height='72'%20viewBox='0%200%20239%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M110.175%2035.4296C110.175%2042.3526%20105.897%2045.6139%20100.638%2045.6139H97.415V41.5006H100.44C103.663%2041.5006%20105.768%2039.8031%20105.768%2035.4942C105.768%2031.248%20103.729%2029.0963%20100.309%2029.0963C97.0208%2029.0963%2094.6522%2031.1197%2094.6522%2035.4287V52.8H90.246V25.441H94.6522V27.7911H95.3096C95.9962%2026.8807%2096.8912%2026.1454%2097.9205%2025.6459C98.9499%2025.1464%20100.084%2024.8971%20101.23%2024.9185C106.097%2024.9185%20110.175%2028.4437%20110.175%2035.4296Z'%20fill='%23006D5C'/%3e%3c/svg%3e"
        />
        <img alt="شعار شريك" src="/images/Group%202309-sk_OY7Jm.svg" />
      </div>
    </div>
  );
};

export default ImageSection;

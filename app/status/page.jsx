"use client";

import Image from "next/image";

export default function StatusPage() {
  return (
    <div className="relative uk-animation-fade">
      {/* Toastify Section */}
      <section
        className="Toastify"
        aria-live="polite"
        aria-atomic="false"
        aria-relevant="additions text"
        aria-label="Notifications Alt+T"
      ></section>

      {/* Hero Section */}
      <div className="bg-[#F6F8FA] relative py-16 pt-24">
        <Image
          className="absolute bottom-0 right-0 z-0"
          alt="right decoration"
          src="/images/right-C-jjqZQf.svg"
          width={400}
          height={400}
        />
        <Image
          className="absolute top-0 left-0 z-0"
          alt="left decoration"
          src="/images/left-BjSWUqvf.svg"
          width={400}
          height={400}
        />

        <div className="container lg:px-64 relative z-10">
          <div className="flex items-center justify-between">
            <div className="bg-[#092346] hover:bg-transparent transition hover:text-primary hover:border-2 hover:border-primary text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer !m-0">
              <p>Start now!</p>
            </div>
            <h1 className="text-[#092346] text-4xl">MineCraft</h1>
          </div>

          <p className="mt-12 text-center">
            The following alerts are provided to keep you informed of service
            outages
          </p>

          <h1 className="text-white bg-[#42CF9A] rounded-md py-4 px-4 font-semibold text-left mt-8 lg:w-2/3 mx-auto text-lg">
            All systems are operational
          </h1>
        </div>
      </div>

      {/* Status Section */}
      <div className="mt-32 container">
        <div className="flex items-center gap-4 mb-8">
          <img
            alt="clock icon"
            src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_23111)'%3e%3cpath%20d='M7.0013%2012.8332C10.223%2012.8332%2012.8346%2010.2215%2012.8346%206.99984C12.8346%203.77818%2010.223%201.1665%207.0013%201.1665C3.77964%201.1665%201.16797%203.77818%201.16797%206.99984C1.16797%2010.2215%203.77964%2012.8332%207.0013%2012.8332Z'%20stroke='black'/%3e%3cpath%20d='M7%204.6665V6.99984L8.45833%208.45817'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9_23111'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
            width={14}
            height={14}
          />
          <p>All listed times are EET Time.</p>
        </div>
        <div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}

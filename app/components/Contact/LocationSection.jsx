"use client";
import React from "react";

const LocationSection = () => {
  return (
    <div>
      {/* Help & Services Section */}
      <div className="bg-white">
        <div className="container pt-32 pb-12">
          {/* Service Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
              <img src="/images/HELP-BhMZpd-A.svg" alt="help" />
              <h1 className="text-center text-xs">Help center</h1>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
              <img src="/images/STATUS-DrLqPY_P.svg" alt="status" />
              <h1 className="text-center text-xs">Server status</h1>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-light transition hover:scale-105">
              <img src="/images/subscribers-Nm6eNfDT.svg" alt="subscribers" />
              <h1 className="text-center text-xs">Subscriber Services</h1>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16 ml-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2715.20357416589!2d46.67766630464344!3d24.714449700676195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1742057970001!5m2!1sar!2snl"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="mt-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="flex flex-col justify-center items-center gap-4 lg:border-r-2 border-black border-opacity-50">
                <img width="50px" src="/images/email-DZtt2k-g.svg" alt="email" />
                <p className="text-xl font-bold">Email Service</p>
                <p>CS@MH.LY</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 lg:border-r-2 border-black border-opacity-50">
                <img width="50px" src="/images/phone-117DhAkS.svg" alt="phone" />
                <p className="text-xl font-bold">Phone</p>
                <p>+214568987</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  width="50px"
                  src="/images/location-Biln1feD.svg"
                  alt="location"
                />
                <p className="text-xl font-bold">Location</p>
                <p>Ryad, Alya, Suadia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Form Section */}
      <div className="container">
        <div className="mt-16">
          <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold">
            Didn't find your answer? get support now
          </h1>
          <p className="text-center opacity-65">
            With many unique blocks, you can easily build a page without the
            need for coding. Build your next consulting site in just a few
            minutes.
          </p>
        </div>

        {/* Form */}
        <div className="border rounded-lg p-6 bg-white my-24 ml-16">
          <div className="mb-8">
            <label>Full Name</label>
            <input
              className="mt-4 border-2 border-gray-200 px-4 py-3 w-full ps-8 rounded-md placeholder:text-gray-300 placeholder:text-sm focus:border-primary-700 duration-200 outline-none text-primary"
              placeholder="Enter full name"
              type="text"
            />
          </div>
          <div className="mb-8">
            <label>Email</label>
            <input
              className="mt-4 border-2 border-gray-200 px-4 py-3 w-full ps-8 rounded-md placeholder:text-gray-300 placeholder:text-sm focus:border-primary-700 duration-200 outline-none text-primary"
              placeholder="Enter email"
              type="email"
            />
          </div>
          <div className="mb-8">
            <label>Phone</label>
            <input
              className="mt-4 border-2 border-gray-200 px-4 py-3 w-full ps-8 rounded-md placeholder:text-gray-300 placeholder:text-sm focus:border-primary-700 duration-200 outline-none text-primary"
              placeholder="Enter phone"
              type="tel"
            />
          </div>
          <div className="mb-8">
            <label>Why Do You Want To Join Us?</label>
            <input
              className="mt-4 border-2 border-gray-200 px-4 py-3 w-full ps-8 rounded-md placeholder:text-gray-300 placeholder:text-sm focus:border-primary-700 duration-200 outline-none text-primary"
              placeholder="...."
              type="text"
            />
          </div>
          <div className="bg-[#2A3252] hover:bg-transparent transition hover:text-[#2A3252] hover:border-2 hover:border-[#2A3252] text-white rounded-md px-12 w-fit mx-auto cursor-pointer w-full text-center py-3">
            <p>Send</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

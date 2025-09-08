"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="mt-32">
      {/* Hero Section */}
      <div className="container">
        <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold">
          Welcome to Your Dashboard
        </h1>
        <p className="mt-8 text-center">
          Easily manage your domains, check your stats, and monitor performance
          from one place.
        </p>
        <img
          className="mx-auto w-1/2"
          alt="hero"
          src="/images/hero-Dq72XEUc.svg"
        />
      </div>

      {/* Domain Management Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between">
        <div className="ps-16">
          <h1 className="text-xl font-bold">Domain Management</h1>
          <p className="lg:w-1/2 mt-4">
            Manage your domains with ease. Sign new domains, renew existing
            ones, and view all related details in real-time.
          </p>
        </div>
        <div>
          <img
            className="transform rtl:lg:-translate-x-56 ltr:lg:translate-x-56 mx-auto w-2/3"
            alt="domain-management"
            src="/images/Desktop-D4S_kQHu.svg"
          />
        </div>
      </div>

      {/* Dashboard Overview Section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between mt-32">
        <div>
          <img
            className="transform rtl:lg:translate-x-56 ltr:lg:-translate-x-56 mx-auto w-2/3"
            alt="dashboard-overview"
            src="/images/Desktop-D4S_kQHu.svg"
          />
        </div>
        <div className="ps-16">
          <h1 className="text-xl font-bold">Dashboard Overview</h1>
          <p className="lg:w-1/2 mt-4">
            Access real-time data and performance metrics right from your
            dashboard. Track your domain status, visitor statistics, and much
            more in one convenient place.
          </p>
        </div>
      </div>

      {/* Track Performance Section */}
      <div className="container lg:px-64">
        <div className="mt-32 bg-white rounded-lg shadow-light py-16 mx-auto relative">
          <img
            className="absolute -bottom-20 right-0 z-20 hidden lg:block"
            alt="mobile"
            src="/images/mobile-EtU6FdBH.svg"
          />
          <img
            className="absolute bottom-0 left-0 z-10 w-full"
            alt="layer"
            src="/images/Layer%201%201-H8HM44I-.svg"
          />
          <img
            className="absolute bottom-0 left-0 -z-0"
            alt="background-shape"
            src="data:image/svg+xml,%3csvg%20width='163'%20height='161'%20viewBox='0%200%20163%20161'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M107.981%2053.9421L163%2028.8371L107.981%20-4.80993e-06L52.9615%2028.8371L107.981%2053.9421Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M52.9612%2028.8398L52.9612%20171.24L107.98%20196.249L107.98%2053.9443L52.9612%2028.8398Z'%20fill='url(%23paint0_linear_9_79775)'/%3e%3cpath%20d='M163%2028.8398L107.981%2053.9445L107.981%20196.248L163%20164.093'%20fill='url(%23paint1_linear_9_79775)'/%3e%3cpath%20d='M86.0391%2087.3633L31.0198%20112.468L31.0198%20254.771L86.0391%20222.617'%20fill='url(%23paint2_linear_9_79775)'/%3e%3cpath%20d='M31.0198%20112.465L86.0391%2087.3605L31.0198%2058.5234L-23.9983%2087.3605L31.0198%20112.465Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M-23.9997%2087.3633L-23.9997%20229.763L31.0195%20254.772L31.0195%20112.468L-23.9997%2087.3633Z'%20fill='url(%23paint3_linear_9_79775)'/%3e%3cpath%20d='M86.0391%2087.3633L31.0198%20112.468L31.0198%20254.771L86.0391%20222.616'%20fill='url(%23paint4_linear_9_79775)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_79775'%20x1='83.1668'%20y1='219.184'%20x2='38.4782'%20y2='28.4128'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_79775'%20x1='128.063'%20y1='115.222'%20x2='200.774'%20y2='108.665'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_79775'%20x1='51.1018'%20y1='173.746'%20x2='123.813'%20y2='167.188'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_79775'%20x1='6.20583'%20y1='277.707'%20x2='-38.4827'%20y2='86.9362'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_79775'%20x1='51.1018'%20y1='173.746'%20x2='123.813'%20y2='167.188'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          />
          <h1 className="lg:text-4xl text-xl mb-6 text-center">
            Track Your Performance
          </h1>
          <p className="text-center mt-4 relative z-50">
            Stay updated with your domain performance. Monitor traffic,
            renewals, and usage at a glance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

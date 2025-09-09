import React from 'react';

export default function PricingCard() {
  return (
    <div className="mt-64 relative">
      {/* Right decorative SVG */}
      <img 
      src="/images/right-blocks-with-icons-Djf34w85.svg" 
      alt="" 
      className='absolute right-0 -top-52 -z-10'
      />

      {/* Left decorative SVG */}
      <img 
      src="/images/left-blocks-with-icons-DS-c4Ztu.svg" 
      alt="" 
      className='absolute left-0 -top-52 -z-10'
      />

      <div className="container mx-auto px-4">
        <h1 className="lg:text-4xl text-xl mb-6 text-center">Choose Plan</h1>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {/* Plan 1 */}
          <div className="rounded-md bg-white border-t-8 border-yellow-400 text-center p-6 shadow-lg transition hover:scale-105 mx-auto">
            <h1 className="text-2xl ms-4">P2-HOST</h1>
            <span className="mt-4 lg:text-5xl md:text-3xl text-xl font-light">91.30</span>
            <span className="opacity-40 mb-4">د.ل</span>
            <div className="mt-1 flex justify-center items-center text-sm text-gray-500">
              <p className="line-through">120 د.ل</p>
              <span className="ml-3 rounded-md bg-pink-100 px-3 py-0.5 text-xs font-medium text-pink-600">
                خفيض 30%
              </span>
            </div>
            
            <div className="flex items-start justify-between mt-6 px-4 flex-row-reverse"></div>
            
            <div className="mt-6 mx-auto">
              <div className="w-[280px] mx-auto">
                <p className='bg-[#0D1164] hover:bg-transparent transition hover:text-[#0D1164] hover:border-2 hover:border-[#0D1164] text-white rounded-md px-8 py-2 w-fit mx-auto cursor-pointer'>Order Now</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="w-full h-[3px] bg-gray-200 bg-opacity-5"></div>
              
              <div className="text-start mt-4">
                <h1><strong>60GB</strong> NVMe Storage</h1>
                <h1 className="mt-4"><strong>15</strong> Website(s)</h1>
                <h1 className="mt-4"><strong>4</strong> RAM</h1>
                <h1 className="mt-4"><strong>3</strong> CPU</h1>
                <h1 className="mt-4">cPanel Control Panel</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> Subdomains</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> MySQL & SQL Databases</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> Email Account</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> FTP Accounts</h1>
                <p className="mt-4">Supports one-click app installer</p>
                
                <div className="w-full h-[2px] bg-gray-200 bg-opacity-5 mt-6"></div>
                <p className="mt-6 text-center">compare packages</p>
              </div>
            </div>
          </div>
          
          {/* Plan 2 */}
          <div className="rounded-md bg-white border-t-8 border-gray-400 text-center p-6 shadow-lg transition hover:scale-105 mx-auto">
            <h1 className="text-2xl ms-4">P2-HOST</h1>
            <span className="mt-4 lg:text-5xl md:text-3xl text-xl font-light">91.30</span>
            <span className="opacity-40 mb-4">د.ل</span>
            <div className="mt-1 flex justify-center items-center text-sm text-gray-500">
              <p className="line-through">120 د.ل</p>
              <span className="ml-3 rounded-md bg-pink-100 px-3 py-0.5 text-xs font-medium text-pink-600">
                خفيض 30%
              </span>
            </div>
            
            <div className="flex items-start justify-between mt-6 px-4 flex-row-reverse"></div>
            
            <div className="mt-6 mx-auto">
              <div className="w-[280px] mx-auto">
                <p className='bg-[#0D1164] hover:bg-transparent transition hover:text-[#0D1164] hover:border-2 hover:border-[#0D1164] text-white rounded-md px-8 py-2 w-fit mx-auto cursor-pointer'>Order Now</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="w-full h-[3px] bg-gray-200 bg-opacity-5"></div>
              
              <div className="text-start mt-4">
                <h1><strong>60GB</strong> NVMe Storage</h1>
                <h1 className="mt-4"><strong>15</strong> Website(s)</h1>
                <h1 className="mt-4"><strong>4</strong> RAM</h1>
                <h1 className="mt-4"><strong>3</strong> CPU</h1>
                <h1 className="mt-4">cPanel Control Panel</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> Subdomains</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> MySQL & SQL Databases</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> Email Account</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> FTP Accounts</h1>
                <p className="mt-4">Supports one-click app installer</p>
                
                <div className="w-full h-[2px] bg-gray-200 bg-opacity-5 mt-6"></div>
                <p className="mt-6 text-center">compare packages</p>
              </div>
            </div>
          </div>
          
          {/* Plan 3 */}
          <div className="rounded-md bg-white border-t-8 border-blue-800 text-center p-6 shadow-lg transition hover:scale-105 mx-auto">
            <h1 className="text-2xl ms-4">P2-HOST</h1>
            <span className="mt-4 lg:text-5xl md:text-3xl text-xl font-light">91.30</span>
            <span className="opacity-40 mb-4">د.ل</span>
            <div className="mt-1 flex justify-center items-center text-sm text-gray-500">
              <p className="line-through">120 د.ل</p>
              <span className="ml-3 rounded-md bg-pink-100 px-3 py-0.5 text-xs font-medium text-pink-600">
                خفيض 30%
              </span>
            </div>
            
            <div className="flex items-start justify-between mt-6 px-4 flex-row-reverse"></div>
            
            <div className="mt-6 mx-auto">
              <div className="w-[280px] mx-auto">
                <p className='bg-[#0D1164] hover:bg-transparent transition hover:text-[#0D1164] hover:border-2 hover:border-[#0D1164] text-white rounded-md px-8 py-2 w-fit mx-auto cursor-pointer'>Order Now</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="w-full h-[3px] bg-gray-200 bg-opacity-5"></div>
              
              <div className="text-start mt-4">
                <h1><strong>60GB</strong> NVMe Storage</h1>
                <h1 className="mt-4"><strong>15</strong> Website(s)</h1>
                <h1 className="mt-4"><strong>4</strong> RAM</h1>
                <h1 className="mt-4"><strong>3</strong> CPU</h1>
                <h1 className="mt-4">cPanel Control Panel</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> Subdomains</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> MySQL & SQL Databases</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> Email Account</h1>
                <h1 className="mt-4"><strong>Unlimited</strong> FTP Accounts</h1>
                <p className="mt-4">Supports one-click app installer</p>
                
                <div className="w-full h-[2px] bg-gray-200 bg-opacity-5 mt-6"></div>
                <p className="mt-6 text-center">compare packages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
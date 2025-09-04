// app/page.js
'use client';

import React from 'react';
import { Cpu, HardDrive, Plug, MemoryStick, Network, Settings } from 'lucide-react';

export default function PricingSection() {
  const plan = {
    name: "INTEL SILVER 7402P",
    cpu: "INTEL SILVER 7402P",
    cores: "26 Cores @ 2.1 GHz\nBenchmark 15,390",
    storage: "2x 250GB SSD\nup to 8 disks",
    ram: "64GB\nup to 384GB",
    bandwidth: "3Gbps\n100TB/mo free traffic",
    os: "cPanel/WHM, please\nObsidian Web Host Edition",
    power: "1\nup to 3",
    price: "$41.99",
    period: "40.00 USD/mo when you renew",
    button: "buy it now!",
    flags: [
      <img src="/images/flag/Amreci.png" alt="US Flag" className="w-12 h-12" />,
      <img src="/images/flag/England.png" alt="UK Flag" className="w-12 h-12" />,
      <img src="/images/flag/aust.svg" alt="AUSTRALIA Flag" className="w-12 h-12" />,
    ]
  };

  // Duplicate 3 times
  const plans = [plan, plan, plan];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              
              {/* Header */}
              <div className="p-6 border-b border-r border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{plan.name}</h2>
                    <p className="text-gray-600 text-sm">{plan.cpu}</p>
                    <div className="flex my-8 space-x-2">
                      {plan.flags.map((flag, i) => (
                        <span key={i} className="text-2xl">{flag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <h3 className="text-3xl font-bold">{plan.price}</h3>
                    <p className="text-gray-600 text-sm">{plan.period}</p>
                    <div className="flex mt-4 space-x-4 justify-end">
                      <button className="bg-indigo-900 hover:bg-white hover:text-blue-900 hover:border border-indigo-800 text-white font-medium px-6 py-2 rounded-md transition duration-200">
                        {plan.button}
                      </button>
                      <button className="border border-indigo-800 text-indigo-800 hover:bg-indigo-50 font-medium px-6 py-2 rounded-md transition duration-200">
                        Features
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid (2x3) */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
                
                {/* Row 1 */}
                <div className="p-6 border-b md:border-b border-r border-gray-200">
                  <div className="flex items-center mb-2">
                    <Cpu className="w-5 h-5 mr-2 text-gray-800" />
                    <h4 className="font-medium">{plan.cores.split('\n')[0]}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{plan.cores.split('\n')[1]}</p>
                </div>
                
                <div className="p-6 border-b md:border-b border-r border-gray-200">
                  <div className="flex items-center mb-2">
                    <HardDrive className="w-5 h-5 mr-2 text-gray-800" />
                    <h4 className="font-medium">{plan.storage.split('\n')[0]}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{plan.storage.split('\n')[1]}</p>
                </div>
                
                <div className="p-6 border-b md:border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <Plug className="w-5 h-5 mr-2 text-gray-800" />
                    <h4 className="font-medium">{plan.power.split('\n')[0]}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{plan.power.split('\n')[1]}</p>
                </div>

                {/* Row 2 */}
                <div className="p-6 border-r border-gray-200">
                  <div className="flex items-center mb-2">
                    <MemoryStick className="w-5 h-5 mr-2 text-gray-800" />
                    <h4 className="font-medium">{plan.ram.split('\n')[0]}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{plan.ram.split('\n')[1]}</p>
                </div>
                
                <div className="p-6 border-r border-gray-200">
                  <div className="flex items-center mb-2">
                    <Network className="w-5 h-5 mr-2 text-gray-800" />
                    <h4 className="font-medium">{plan.bandwidth.split('\n')[0]}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{plan.bandwidth.split('\n')[1]}</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Settings className="w-5 h-5 mr-2 text-gray-800" />
                    <h4 className="font-medium">{plan.os.split('\n')[0]}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{plan.os.split('\n')[1]}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

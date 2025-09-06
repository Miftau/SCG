import { Button } from '@/components/ui/button'
import React from 'react'

const WordPressMigrationSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-20 bg-white overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="relative bg-[#2A3252] rounded-lg p-8 md:p-12 lg:p-16 max-w-7xl mx-auto shadow-lg">
          {/* Left 3D Box Image */}
          <img
            src="/images/Group3417.png"
            alt="3D blue open box"
            width={260}
            height={260}
            className="absolute -left-0 -top-10 w-[180px] h-[180px] object-contain"
          />

          {/* Content */}
          <div className="space-y-6 relative z-20">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              هل لديك موقع ووردبريس فى شركة اخرى ؟
            </h2>
            <p className="text-white text-xl md:text-2xl lg:text-3xl">
              نقدم خدمة النقل مجانا
            </p>

            {/* Buttons container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-[#2A3252] hover:bg-[#F1F1F1] transition-colors duration-300 px-8 py-3 rounded-md text-lg font-semibold shadow-md">
                اطلب الآن!
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#2A3252] transition-colors duration-300 px-8 py-3 rounded-md text-lg font-semibold shadow-md">
                اعرف المزيد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WordPressMigrationSection

'use client'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, Phone, Twitter, Globe } from 'lucide-react'
import React, { useState } from 'react'

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState('Global')

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language)
        setIsDropdownOpen(false)
    }

    return (
        <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">

                    {/* First Column */}
                    <div className='flex flex-col items-center text-center'>
                        <img
                            src="/images/footer-img.png"
                            alt="Logo"
                            className="mb-4 w-full max-w-[120px] sm:max-w-[150px]"
                        />
                        <p className="text-[#878787] text-xs sm:text-sm leading-relaxed">
                            ابق على اطلاع بأحدث أخبارنا وعروضنا الخاصة من خلال متابعتنا على قنوات التواصل الاجتماعي المختلفة.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4 mt-4 justify-center">
                            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600 transition-colors" />
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600 transition-colors" />
                            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600 transition-colors" />
                            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600 transition-colors" />
                        </div>
                    </div>

                    {/* Columns 2 - 5 */}
                    {[1, 2, 3, 4].map((_, idx) => (
                        <div key={idx} className="text-center sm:text-left">
                            <h3 className="font-bold mb-2 text-[#5B5B5B] text-lg sm:text-xl">خدمات أخرى</h3>
                            <ul className='text-[#878787] flex flex-col gap-y-3 sm:gap-y-4 text-xs sm:text-sm'>
                                <li>تسجيل نطاق جديد</li>
                                <li>نقل النطاق إلينا</li>
                                <li>التسويق على أساس العمولة</li>
                                <li>شروط الخدمة</li>
                            </ul>
                        </div>
                    ))}

                    {/* Last Column */}
                    <div className='flex flex-col items-center text-center'>
                        <h3 className="font-semibold mb-2 text-base sm:text-lg">اتصل بنا</h3>
                        <Button className="bg-[#1FA536] text-white hover:bg-green-700 flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2">
                            +19712514959 <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>

                        <div className="grid grid-cols-3 gap-2 py-4 w-full max-w-[180px] sm:max-w-[200px]">
                            {["visa", "paypal", "mastercard", "Cib", "Vodfone", "mada"].map((img, i) => (
                                <img
                                    key={i}
                                    src={`/images/${img}.png`}
                                    alt={img}
                                    className="w-10 sm:w-12 mx-auto"
                                />
                            ))}
                        </div>

                        <div className="bg-orange-600 p-2 rounded-lg flex justify-center items-center w-full max-w-[150px] sm:max-w-[200px]">
                            <img
                                src="/images/cPanel-footer.png"
                                alt="cPanel"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-6 pb-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
                        {/* Privacy Policy */}
                        <a 
                            href="#" 
                            className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm underline transition-colors duration-200"
                        >
                            Privacy Policy and User Agreement
                        </a>

                        {/* Language Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center space-x-2 bg-white hover:bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 transition-colors duration-200 shadow-sm"
                            >
                                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                <span className="text-gray-700 font-medium text-xs sm:text-sm">{selectedLanguage}</span>
                                <svg 
                                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 sm:left-auto mt-1 w-40 sm:w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    <div className="py-1">
                                        <button
                                            onClick={() => handleLanguageSelect('العربية')}
                                            className="flex items-center space-x-3 w-full px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 text-left transition-colors duration-200 text-xs sm:text-sm"
                                        >
                                            <img src="/images/flag/saudi.png" alt="Saudi Arabia Flag" className="rounded-sm w-5 sm:w-6" />
                                            <span>العربية</span>
                                        </button>
                                        <button
                                            onClick={() => handleLanguageSelect('English')}
                                            className="flex items-center space-x-3 w-full px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 text-left transition-colors duration-200 text-xs sm:text-sm"
                                        >
                                            <img src="/images/flag/England.png" alt="English Flag" className="rounded-sm w-5 sm:w-6" />
                                            <span>English</span>
                                        </button>
                                        <button
                                            onClick={() => handleLanguageSelect('Français')}
                                            className="flex items-center space-x-3 w-full px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 text-left transition-colors duration-200 text-xs sm:text-sm"
                                        >
                                            <img src="/images/flag/turkey.png" alt="French Flag" className="rounded-sm w-5 sm:w-6" />
                                            <span>Français</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs sm:text-sm text-center mt-4">
                        @All rights reserved to Nemours Al-Jaria Company
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
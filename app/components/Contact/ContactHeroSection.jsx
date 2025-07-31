import React from 'react'
import { NavigationMenuDemo } from '../Header/MainNavbar'
import { Button } from '@/components/ui/button'

const ContactHeroSection = () => {
    return (

        <div className="relative w-full min-h-1/2 bg-[#092346]">
            {/* Background image */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/groupHero-Bt0B6L23.svg')" }}
                ></div>
            </div>

            {/* Content over background */}
            <NavigationMenuDemo />
            <div className="relative z-10 text-white flex flex-col pt-12 items-center  h-[70vh] md:min-h-[400px]">
                <div className="w-full max-w-4xl flex flex-col items-center justify-center px-4 text-center">
                    <p className=" text-2xl md:text-4xl font-bold ">
                        تواصل معنا

                    </p>
                    <p className="text-sm f pt-4 sm:pt-6 md:pt-8">
                        إذا كنت أحد عملاء الشركة، يمكنك التواصل معنا بسهولة عبر حسابك للوصول إلى فريق الدعم الفني أو المبيعات. نحن ملتزمون بتقديم أفضل خدمة وحلول سريعة تناسب احتياجاتك.

                    </p>
                    <Button className="bg-white mt-4 text-[#2A3252] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-md">تواصل معنا
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactHeroSection
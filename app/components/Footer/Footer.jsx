import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, Phone, Twitter } from 'lucide-react'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                    {/* العمود الأول */}
                    <div className='flex flex-col items-center text-center'>
                        <img
                            src="/images/footer-img.png"
                            alt="Logo"
                            className="mb-4 max-w-[150px] w-full"
                        />
                        <p className="text-[#878787] text-sm">
                            ابق على اطلاع بأحدث أخبارنا وعروضنا الخاصة من خلال متابعتنا على قنوات التواصل الاجتماعي المختلفة.
                        </p>
                        <div className="flex space-x-4 mt-4 justify-center">
                            <Facebook className="w-6 h-6" />
                            <Linkedin className="w-6 h-6" />
                            <Instagram className="w-6 h-6" />
                            <Twitter className="w-6 h-6" />
                        </div>
                    </div>

                    {/* الأعمدة 2 - 5 */}
                    {[1, 2, 3, 4].map((_, idx) => (
                        <div key={idx}>
                            <h3 className="font-bold mb-2 text-[#5B5B5B] text-xl">خدمات أخرى</h3>
                            <ul className='text-[#878787] flex flex-col gap-y-4 text-sm'>
                                <li>تسجيل نطاق جديد</li>
                                <li>نقل النطاق إلينا</li>
                                <li>التسويق على أساس العمولة</li>
                                <li>شروط الخدمة</li>
                            </ul>
                        </div>
                    ))}

                    {/* العمود الأخير */}
                    <div className='flex flex-col items-center text-center'>
                        <h3 className="font-semibold mb-2 text-lg">اتصل بنا</h3>
                        <Button className="bg-[#1FA536] text-white hover:bg-green-700 flex items-center gap-2 text-sm">
                            +19712514959 <Phone className="w-5 h-5" />
                        </Button>

                        <div className="grid grid-cols-3 gap-2 py-4">
                            {["visa", "paypal", "mastercard", "Cib", "Vodfone", "mada"].map((img, i) => (
                                <img
                                    key={i}
                                    src={`/images/${img}.png`}
                                    alt={img}
                                    className="w-12 mx-auto"
                                />
                            ))}
                        </div>

                        <div className="bg-orange-600 p-2 rounded-lg flex justify-center items-center w-full">
                            <img
                                src="/images/cPanel-footer.png"
                                alt="cPanel"
                                className="w-1/2 object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                <hr className="border-gray-400 mt-8" />
                <div className="flex justify-between items-center py-6">
                    <div className="">
                        <img
                            src="/images/logoBottomFooter.svg"
                            alt="Logo"
                            className="max-w-[150px] w-full"
                        />
                    </div>
                    <div className="">جميع الحقوق محفوظة لشركة نمور الجارية  @</div>
                    <div className="">
                        <Select defaultValue="arabic">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="اختر اللغة" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="arabic">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/flag/saudi.png" alt="Saudi Arabia Flag" className="rounded-sm w-6" />
                                        <span>العربية</span>
                                    </div>
                                </SelectItem>
                                <SelectItem value="english">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/flag/England.png" alt="English Flag" className="rounded-sm w-6" />
                                        <span>English</span>
                                    </div>
                                </SelectItem>
                                <SelectItem value="french">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/flag/turkey.png" alt="French Flag" className="rounded-sm w-6" />
                                        <span>Français</span>
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

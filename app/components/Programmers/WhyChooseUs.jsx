"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const WhyChooseUs = () => {
    const locations = [
        {
            skylineSrc: "/images/Group3277.png",
            skylineAlt: "Cloud Services Skyline",
            title: "استضافة ثابتة بمستوى الشركات",
            descrption:
                "قم بتقديم تطبيقاتك الثابتة بأمان وأداء عاليين. استفد من التحديثات الفورية، والوصول العالمي، وعدم الحاجة إلى الصيانة.",
        },
        {
            skylineSrc: "/images/Group 3275.png",
            skylineAlt: "Cloud Services Skyline",
            title: "تخزين سحابي قابل للتطوير",
            descrption:
                "قم بتخزين بياناتك والوصول إليها بأمان مع تخزين سحابي عالي الأداء. قم بالتوسع بسهولة مع نمو عملك بفضل التكرار المحسن.",
        },
        {
            skylineSrc: "/images/Group 3274.png",
            skylineAlt: "Cloud Services Skyline",
            title: "استضافة ثابتة موثوقة",
            descrption:
                "استضف مواقعك الثابتة بوقت تحميل فائق السرعة واستقرار لا مثيل له. استمتع بنشر سلس مع شبكة CDN موزعة عالميًا.",
        },


    ];


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="py-8">
                <p className="text-center text-4xl font-bold text-[#2B1F51] ">
                    لماذا تختار النمور؟
                </p>
                <p className="text-center text-lg font-sm text-[#2B1F51] pt-4">
                    حلول وخدمات متطوّرة وشاملة، للأفراد والمؤسسات
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pt-8">
                {locations.map((location, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, ease: "easeOut" },
                        }}
                        key={index}
                        className="card-hover bg-white rounded-2xl border border-gray-200 shadow-md   p-4 "
                    >
                        <div className="">
                            <img
                                src={location.skylineSrc}
                                alt={location.skylineAlt}
                                width={50}
                                height={50}
                                className=" object-cover"
                            />
                            <p className="font-bold text-lg">{location.title}</p>
                            <p className="font-normal text-sm text-gray-600 pt-4">
                                {location.descrption}
                            </p>
                            <p className="font-extrabold text-xl pt-4">{location.button}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="w-full py-12 md:py-20 bg-white" >
                <p className="text-center text-xl font-medium pb-16 text-[#2B1F51]">
                    هل أنت مهتم بمعرفة كيف يمكننا مساعدة عملك على النجاح؟ . اتصل بنا .

                </p>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
                        <img src="/images/microsoft-GkOjRO04.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/Group 2306-DCwOO3nP.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/download.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/Group 2307-nyjIzQtj.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/Group 2309-sk_OY7Jm.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WhyChooseUs
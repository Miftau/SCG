"use client"
import React from 'react'
import { motion } from 'framer-motion'
const ArabicFeaturesSection = () => {

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
        <div className="relative mt-32">
                <h1 className="lg:text-4xl text-xl mb-6 text-center !mb-20 text-[#2B1F51] ">
                    انطلق بسرعة ونمي أعمالك
                </h1>
            <div className='container'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ml-12">
                {locations.map((location, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, ease: "easeOut" },
                        }}
                        key={index}
                        className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-light flex-col gap-4 justify-between transition hover:scale-105 duration-300"
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
            </div>

        </div>
    )
}

export default ArabicFeaturesSection
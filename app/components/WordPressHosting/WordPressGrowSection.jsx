"use client";
import { motion } from "framer-motion";

const RIGHT_CUBE_SVG =
  "data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77870)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M330.305%20134.66L468%2071.9882L330.305%200L192.61%2071.9882L330.305%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M192.61%2071.9883V427.472L330.305%20489.904V134.658L192.61%2071.9883Z'%20fill='url(%23paint0_linear_9_77870)'/%3e%3cpath%20d='M468%2071.9883L330.305%20134.659V489.901L468%20409.631'%20fill='url(%23paint1_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint2_linear_9_77870)'/%3e%3cpath%20d='M137.695%20280.76L275.391%20218.09L137.695%20146.102L0.00302124%20218.09L137.695%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M7.62939e-05%20218.09V573.573L137.695%20636.005V280.761L7.62939e-05%20218.09Z'%20fill='url(%23paint3_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint4_linear_9_77870)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77870'%20x1='268.204'%20y1='547.158'%20x2='156.896'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77870'%20x1='380.564'%20y1='287.631'%20x2='562.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77870'%20x1='75.5948'%20y1='693.26'%20x2='-35.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77870'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='matrix(-1%200%200%201%20468%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const LEFT_CUBE_SVG =
  "data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77861)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M62.6952%20134.66L-75%2071.9882L62.6952%200L200.39%2071.9882L62.6952%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M200.39%2071.9883V427.472L62.6953%20489.904V134.658L200.39%2071.9883Z'%20fill='url(%23paint0_linear_9_77861)'/%3e%3cpath%20d='M-75%2071.9883L62.6952%20134.659V489.901L-75%20409.631'%20fill='url(%23paint1_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint2_linear_9_77861)'/%3e%3cpath%20d='M255.305%20280.76L117.609%20218.09L255.305%20146.102L392.997%20218.09L255.305%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M393%20218.09V573.573L255.305%20636.005V280.761L393%20218.09Z'%20fill='url(%23paint3_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint4_linear_9_77861)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77861'%20x1='124.796'%20y1='547.158'%20x2='236.104'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77861'%20x1='12.4365'%20y1='287.631'%20x2='-169.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77861'%20x1='317.405'%20y1='693.26'%20x2='428.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77861'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='translate(-75)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const WordPressGrowSection = () => {

    const locations = [
    {
      skylineSrc: "/images/Group 3275.png",
      skylineAlt: "Cloud Services Skyline",
      title: "حظر البريد الإلكتروني غير المصرح به",
      descrption:
        "ارفع سرعة موقعك مع إضافة لايت اسبيد كاش الأفضل على الاطلاق. أنشئ نسخ احتياطية (backups) لموقعك بضغطة زر.",
    },
    {
      skylineSrc: "/images/Group 3274.png",
      skylineAlt: "Cloud Services Skyline",
      title: "تصفح وتنصيب وإدارة المكونات الإضافية",
      descrption:
        "نوفر لك امكانية تثبيت المكونات الإضافية على ووردبريس وإدارتها دون الحاجة لمغادرة لوحة تحكم المستخدم الخاصة بك.",
    },
    {
      skylineSrc: "/images/Group3277.png",
      skylineAlt: "Cloud Services Skyline",
      title: "لتحكم الكامل في إدارة ووردبريس",
      descrption:
        "قم بعرض وإنشاء وتحرير بالإضافة إلى حذف نسخ ووردبريس المثبتة باستخدام قائمة بسيطة من النماذج بنقرة واحدة",
    },
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <p className="text-center text-4xl font-bold text-[#2B1F51] ">
          انطلق أسرع وسارع في نموّ عملك
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
            className=" bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 "
          >
            <div className="pointer-events-none select-none absolute top-16 sm:top-20 right-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] opacity-40 z-0" >
            <img src={RIGHT_CUBE_SVG} alt="" aria-hidden="true" className="w-full h-auto" />
          </div>
          <div className="pointer-events-none select-none absolute top-16 left-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] opacity-40 z-0">
            <img src={LEFT_CUBE_SVG} alt="" aria-hidden="true" className="w-full h-auto" />
          </div>
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
  );
};

export default WordPressGrowSection;

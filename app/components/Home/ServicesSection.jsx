'use client';
import { motion } from "framer-motion";

const RIGHT_CUBE_SVG =
  "data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77870)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M330.305%20134.66L468%2071.9882L330.305%200L192.61%2071.9882L330.305%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M192.61%2071.9883V427.472L330.305%20489.904V134.658L192.61%2071.9883Z'%20fill='url(%23paint0_linear_9_77870)'/%3e%3cpath%20d='M468%2071.9883L330.305%20134.659V489.901L468%20409.631'%20fill='url(%23paint1_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint2_linear_9_77870)'/%3e%3cpath%20d='M137.695%20280.76L275.391%20218.09L137.695%20146.102L0.00302124%20218.09L137.695%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M7.62939e-05%20218.09V573.573L137.695%20636.005V280.761L7.62939e-05%20218.09Z'%20fill='url(%23paint3_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint4_linear_9_77870)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77870'%20x1='268.204'%20y1='547.158'%20x2='156.896'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77870'%20x1='380.564'%20y1='287.631'%20x2='562.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77870'%20x1='75.5948'%20y1='693.26'%20x2='-35.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77870'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='matrix(-1%200%200%201%20468%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const LEFT_CUBE_SVG =
  "data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77861)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M62.6952%20134.66L-75%2071.9882L62.6952%200L200.39%2071.9882L62.6952%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M200.39%2071.9883V427.472L62.6953%20489.904V134.658L200.39%2071.9883Z'%20fill='url(%23paint0_linear_9_77861)'/%3e%3cpath%20d='M-75%2071.9883L62.6952%20134.659V489.901L-75%20409.631'%20fill='url(%23paint1_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint2_linear_9_77861)'/%3e%3cpath%20d='M255.305%20280.76L117.609%20218.09L255.305%20146.102L392.997%20218.09L255.305%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M393%20218.09V573.573L255.305%20636.005V280.761L393%20218.09Z'%20fill='url(%23paint3_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint4_linear_9_77861)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77861'%20x1='124.796'%20y1='547.158'%20x2='236.104'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77861'%20x1='12.4365'%20y1='287.631'%20x2='-169.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77861'%20x1='317.405'%20y1='693.26'%20x2='428.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77861'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='translate(-75)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function ServicesSection() {
  const services = [
    {
      title: "الخوادم المخصصة",
      description: "استضف موقعك بسهولة و أريحية وتكاليف اقتصادية!",
      price: "بدا من 45 رس / شهرًا",
      image: "/images/Clip path group.png",
      topColor: "bg-[#FBE06B]",
    },
    {
      title: "الاستضافة السحابية المشتركة",
      description: "استضف موقعك بسهولة و أريحية وتكاليف اقتصادية!",
      price: "بدا من 45 رس / شهرًا",
      image: "/images/shared-hosting-card 1.png",
      topColor: "bg-[#C6CDE0]",
    },
    {
      title: "استضافة المواقع",
      description: "استضف موقعك بسهولة و أريحية وتكاليف اقتصادية!",
      price: "بدا من 45 رس / شهرًا",
      image: "/images/ls-cloud-card 1.svg",
      topColor: "bg-[#69A0E0]",
    },
    {
      title: "رخصة لوحة التحكم",
      description: "استضف موقعك بسهولة و أريحية وتكاليف اقتصادية!",
      price: "بدا من 45 رس / شهرًا",
      image: "/images/Clip path group (1).png",
      topColor: "bg-[#594734]",
    },
    {
      title: "النطاقات",
      description: "استضف موقعك بسهولة و أريحية وتكاليف اقتصادية!",
      price: "بدا من 45 رس / شهرًا",
      image: "/images/Clip path group (2).png",
      topColor: "bg-[#333C5E]",
    },
    {
      title: "VPS",
      description: "استضف موقعك بسهولة و أريحية وتكاليف اقتصادية!",
      price: "بدا من 45 رس / شهرًا",
      image: "/images/vps-card 1.png",
      topColor: "bg-[#568F5A]",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <motion.section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none select-none absolute top-16 sm:top-20 right-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] opacity-40">
            <img src={RIGHT_CUBE_SVG} alt="" aria-hidden="true" className="w-full h-auto" />
          </div>
          <div className="pointer-events-none select-none absolute top-16 left-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] opacity-40">
            <img src={LEFT_CUBE_SVG} alt="" aria-hidden="true" className="w-full h-auto" />
          </div>

          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-center w-fit mx-auto bg-[#092346] text-white font-bold text-2xl p-2 rounded-xl mb-4">
              خدماتنا
            </h2>
            <p className="lg:text-4xl text-xl mb-6 text-center">
              اكتشف الخدمات المقدمة لك
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col bg-white transition hover:scale-105"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Colored Top Border */}
                <div className={`w-full h-2 ${service.topColor}`}></div>
                
                {/* Image Container with Curved Background */}
                <div className="relative w-full">
                  {/* Dark Purple Background with INNER CURVED TOP */}
                  <div 
                    className="absolute inset-0 bg-[#1A1A3A] bottom-20 rounded-t-md"
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                      borderRadius: '0% 0% 40% 40% / 0% 0% 70% 70%',
                      zIndex: 1,
                    }}
                  ></div>
                  
                  {/* Image Over the Background */}
                  <div className="flex items-center justify-center h-72 z-10 relative">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-32 sm:w-36 md:w-40 lg:w-42 h-auto max-h-48 sm:max-h-52 object-contain"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 mt-4 text-start">
                  <h1 className="text-2xl rtl:text-xl font-semibold">
                    {service.title}
                  </h1>
                  <p className="font-thin mb-2">
                    {service.description}
                  </p>

                </div>
                <div className="flex items-start justify-between mt-8 px-4 flex-row-reverse"></div>

                  {/* Price Button */}
                  <div className="mt-8 mx-auto">
                    <div 
                    className="bg-[#092346] hover:bg-transparent transition hover:text-[#092346] hover:border-2 hover:border-primary text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer py-3 px-6 mb-6 text-lg font-semibold"
                  >
                    {service.price}
                  </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}
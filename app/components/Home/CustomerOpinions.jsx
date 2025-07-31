"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    id: 1,
    quote:
      "تجربتي مع شركتكم وشعرتها الفنين ، حيث وصلني مسئول الشراء عملية التوريد توضيح كل ما هو جديد مع المتابعة المستمرة الاستضافه والطباعة ، في المقابل حصرت في 48% من الجهد، تقابل ذلك معناه وبدب شديد واستشعار الأمانة في الاستدامة كما في المسئوليه",
    author: "أحمد شوقي",
    title: "نائب مدير شعبة",
  },
  {
    id: 2,
    quote:
      "خدمة ممتازة ودعم فني رائع! لقد تجاوزت توقعاتي بكثير. أنصح بها بشدة لكل من يبحث عن حلول موثوقة وفعالة.",
    author: "فاطمة الزهراء",
    title: "مديرة مشروع",
  },
  {
    id: 3,
    quote:
      "المنتجات ذات جودة عالية جداً، والتسليم كان في الموعد المحدد. تجربة شراء سلسة وممتعة، سأعود بالتأكيد.",
    author: "محمد علي",
    title: "رائد أعمال",
  },
  {
    id: 4,
    quote:
      "فريق عمل محترف ومتعاون، استجابوا لجميع استفساراتي بسرعة وكفاءة. سعيد جداً بالتعامل معهم.",
    author: "ليلى خالد",
    title: "مستشارة تسويق",
  },
];

const CustomerOpinions = () => {
  return (
    <div className="">
      {/* Customer Reviews Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            آراء العملاء
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/Group11709.png"
                  alt="Online Payment"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                مركز المساعدة
              </h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/career-icon 1.png"
                  alt="Online Payment"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                وظائف
              </h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/server-icon 1.png"
                  alt="Online Payment"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                حالة المخدّم
              </h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/Group 4072.png"
                  alt="Online Payment"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                خدمات المشتركين{" "}
              </h3>
            </div>
          </motion.div>
          {/* Testimonial Slider Vertical */}
          <div className="relative h-[340px] md:h-[300px] ">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              direction={"vertical"}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="h-full pb-10" // Added padding-bottom for pagination dots
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white p-8 rounded-xl shadow-lg relative h-full flex flex-col justify-between">
                    <div className="absolute top-6 right-6 text-6xl text-black">
                      "
                    </div>
                    <div className="pt-8">
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-500">{testimonial.title}</p>
                        </div>
                        <div className="mr-auto text-4xl text-black/10">"</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerOpinions;

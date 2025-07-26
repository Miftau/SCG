"use client";

import {motion} from "framer-motion"
const WhoisTool = () => {
  const tools = [
    {
      title: "ما هي أداة whois؟",
      description:
        "شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة.",
      image: "/images/Group 19400.svg", // حط مسار الصورة هنا
      reverse: false,
    },
    {
      title: "ما هي أداة whois؟",
      description:
        "شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة شرح عن الأداة.",
      image: "/images/Group 19402.svg", // حط مسار الصورة هنا
      reverse: true,
    },
  ];

  return (
    <section className="space-y-20 py-20 container mx-auto px-4">
      {tools.map((tool, index) => (
        <motion.div
         initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
          key={index}
          className={`flex flex-col-reverse md:flex-row items-center ${
            tool.reverse ? "md:flex-row-reverse" : ""
          } gap-10`}
        >
          {/* Text */}
          <div className="md:w-1/2 text-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {tool.title} <span className="text-black font-normal">whois؟</span>
            </h2>
            <p className="text-gray-700 font-[700] leading-loose mb-6">{tool.description}</p>
            <button className="bg-[#0F1F38] text-white px-6 py-2 rounded-md hover:bg-[#183052] transition">
              ابدأ الآن!
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={tool.image}
              alt={tool.title}
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};


export default WhoisTool;

"use client";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
const DomianCard = ({ domains, topDomain }) => {
  return (
    <section className="w-full pb-12">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-8">
        {/* Top .sa card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="card-hover bg-white rounded-xl shadow-md p-6 flex items-center justify-between w-full max-w-xs md:max-w-sm lg:max-w-md"
        >
          <div className="flex flex-col items-end text-right">
            <span className="text-2xl font-bold text-gray-800">
              {topDomain.name}
            </span>
            <span className="text-sm text-gray-600">{topDomain.price}</span>
          </div>
          <img
            src={topDomain.flag}
            alt="Saudi Arabian flag"
            width={48}
            height={48}
            className="rounded-full"
          />
        </motion.div>

        {/* Grid of other domain cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
          {domains.map((domain, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={index}
              className="card-hover bg-white rounded-xl shadow-md p-4 flex items-center justify-between"
            >
              <div className="flex flex-col items-end text-right">
                <span className="text-lg font-semibold text-gray-800">
                  {domain.name}
                </span>
                <span className="text-sm text-gray-600">{domain.price}</span>
              </div>
              <Globe className="h-8 w-8 text-gray-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomianCard;

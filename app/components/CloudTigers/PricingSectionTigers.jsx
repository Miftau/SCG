"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const PricingSectionTigers = () => {
  const pricingPlans = [
    {
      planName: "P2-HOST",
      price: "91.30",
      currency: "د.ل",
      originalPrice: "120",
      discountText: "تخفيض 30%",
      buttonText: "اطلب الان",
      features: [
        "60GB NVMe Storage",
        "15 Website(s)",
        "4 RAM",
        "3 CPU",
        "cPanel Control Panel",
        "Unlimited Subdomains",
        "Unlimited MySQL & SQL Databases",
        "Unlimited Email Account",
        "Unlimited FTP Accounts",
        "Dedicated Name Server(ns1,ns2)",
      ],
      compareLinkText: "compare packages",
      borderColorClass: "border-t-yellow-400",
    },
    {
      planName: "P2-HOST",
      price: "91.30",
      currency: "د.ل",
      originalPrice: "120",
      discountText: "تخفيض 30%",
      buttonText: "اطلب الان",
      features: [
        "60GB NVMe Storage",
        "15 Website(s)",
        "4 RAM",
        "3 CPU",
        "cPanel Control Panel",
        "Unlimited Subdomains",
        "Unlimited MySQL & SQL Databases",
        "Unlimited Email Account",
        "Unlimited FTP Accounts",
        "Dedicated Name Server(ns1,ns2)",
      ],
      compareLinkText: "compare packages",
      borderColorClass: "border-t-gray-300",
    },
    {
      planName: "P2-HOST",
      price: "91.30",
      currency: "د.ل",
      originalPrice: "120",
      discountText: "تخفيض 30%",
      buttonText: "اطلب الان",
      features: [
        "60GB NVMe Storage",
        "15 Website(s)",
        "4 RAM",
        "3 CPU",
        "cPanel Control Panel",
        "Unlimited Subdomains",
        "Unlimited MySQL & SQL Databases",
        "Unlimited Email Account",
        "Unlimited FTP Accounts",
        "Dedicated Name Server(ns1,ns2)",
      ],
      compareLinkText: "compare packages",
      borderColorClass: "border-t-blue-500",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            منتجات VPS
          </h2>
          <p className="pt-4 text-base sm:text-lg md:text-xl font-medium text-gray-600">
            توفير كبير لاستضافة VPS مع مدخراتنا الشهرية
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut", delay: index * 0.1 },
              }}
              viewport={{ once: true }}
              key={index}
              className={`relative flex flex-col items-center rounded-lg border bg-white p-6 shadow-md ${plan.borderColorClass} border-t-8`}
            >
              <div className="mb-4 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                  {plan.planName}
                </h3>
                <div className="mt-2 flex items-baseline justify-center">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="mx-2 text-xl sm:text-2xl font-medium text-gray-600">
                    {plan.currency}
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  <span className="line-through">
                    {plan.originalPrice} {plan.currency}
                  </span>
                  <span className="mx-4 rounded-md bg-pink-100 px-3 py-0.5 text-xs font-medium text-pink-600">
                    {plan.discountText}
                  </span>
                </div>
              </div>
              <Button className="mb-6 w-full bg-[#4a327a] text-white hover:bg-[#4a327a]/90 text-sm sm:text-base md:text-lg py-2 sm:py-3">
                {plan.buttonText}
              </Button>
              <ul className="mb-6 w-full space-y-2 text-center text-gray-700">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={
                      featureIndex === plan.features.length - 1
                        ? "text-xs sm:text-sm"
                        : "text-sm sm:text-base font-semibold"
                    }
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-xs sm:text-sm text-gray-600 hover:underline">
                {plan.compareLinkText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-12 md:pt-16"
        >
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                النسخ الاحتياطي والاسترداد للبيانات المادية والافتراضية والسحابية.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                اكتشاف التهديدات المتقدمة والاستجابة لها.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                إدارة ومراقبة مركزية.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                الحماية من البرامج الضارة ومكافحة برامج الفدية.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                حماية البريد الإلكتروني والأرشفة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                إدارة ومراقبة مركزية.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                حماية الأجهزة الطرفية وإدارتها.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                التعافي من الكوارث المستند إلى السحابة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                إدارة ومراقبة مركزية.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSectionTigers;
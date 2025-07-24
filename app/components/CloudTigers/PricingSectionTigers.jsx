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
        "15 Website (s)",
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
        "15 Website (s)",
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
        "15 Website (s)",
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
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            منتجات VPS
          </h2>
          <p className="pt-4 text-lg font-medium ">
            توفير كبير لاستضافة VPS مع مدخراتنا الشهرية
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={index}
              className={`card-hover relative flex flex-col items-center rounded-lg border bg-white p-6 shadow-md ${plan.borderColorClass} border-t-8`}
            >
              <div className="mb-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {plan.planName}
                </h3>
                <div className="mt-2 flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="mx-2 text-2xl font-medium text-gray-600">
                    {plan.currency}
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  <span className="line-through">
                    {plan.originalPrice} {plan.currency}
                  </span>
                  <span className="mx-4 rounded-md bg-pink-100 px-4 py-0.5 text-xs font-medium text-pink-600">
                    {plan.discountText}
                  </span>
                </div>
              </div>
              <Button className="mb-6 w-full bg-[#4a327a] text-white hover:bg-[#4a327a]/90">
                {plan.buttonText}
              </Button>
              <ul className="mb-6 w-full space-y-3 text-center text-gray-700">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={
                      featureIndex === plan.features.length - 1
                        ? "text-sm"
                        : "font-bold"
                    }
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                {plan.compareLinkText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right pt-8 md:pt-16"
        >
          {/* Column 1 (Right in original image) */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                النسخ الاحتياطي والاسترداد للبيانات المادية والافتراضية
                والسحابية.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                اكتشاف التهديدات المتقدمة والاستجابة لها.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{"إدارة ومراقبة مركزية."}</p>
            </div>
          </div>

          {/* Column 2 (Middle in original image) */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                الحماية من البرامج الضارة ومكافحة برامج الفدية.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                حماية البريد الإلكتروني والأرشفة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{"إدارة ومراقبة مركزية."}</p>
            </div>
          </div>

          {/* Column 3 (Left in original image) */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                حماية الأجهزة الطرفية وإدارتها.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                التعافي من الكوارث المستند إلى السحابة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">إدارة ومراقبة مركزية.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSectionTigers;

"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";

const ECommercePlatforms = () => {
  const platforms = [
    {
      id: 1,
      imageSrc: "/images/Layer2.png",
      title: "Magento Cluster",
      description:
        "مجموعة Magento قابلة للتطوير التلقائي وذات توفرية عالية مع موازنة التحميل وتكرار البيانات والتخزين المؤقت للمحتوى وتخزين جلسة المستخدم.",
      linkText: "اطلق الان",
      linkHref: "#",
    },
    {
      id: 2,
      imageSrc: "/images/Layer2.png",
      title: "Magento",
      description:
        "Magento هو برنامج ومنصة للتجارة الإلكترونية موثوق به من قبل العلامات التجارية الرائدة في العالم. طور عملك التجاري على الإنترنت مع Magento!",
      linkText: "اطلق الان",
      linkHref: "#",
    },
    {
      id: 3,
      imageSrc: "/images/download20.png",
      title: "Cyclos 4 Pro",
      description: "Cyclos 4 PRO عبارة عن منصة دفع للشركات والمؤسسات الكبرى.",
      linkText: "اطلق الان",
      linkHref: "#",
    },
    {
      id: 4,
      imageSrc: "/images/download23.png",
      title: "Maian Cart",
      description:
        "Maian Cart عبارة عن منصة تجارة إلكترونية سريعة وقوية ومجانية تم إنشاؤها باستخدام PHP و MySQL والتي تحتوي على جميع الميزات التي تحتاجها لتشغيل متجرك عبر الإنترنت.",
      linkText: "اطلق الان",
      linkHref: "#",
    },
    {
      id: 5,
      imageSrc: "/images/download22.png",
      title: "OpenCart",
      description:
        "OpenCart هو نظام تسوق عبر الإنترنت مفتوح المصدر يعتمد على PHP.",
      linkText: "اطلق الان",
      linkHref: "#",
    },
    {
      id: 6,
      imageSrc: "/images/download21.png",
      title: "PrestShop",
      description:
        "PrestaShop هو حل مفتوح المصدر وقابل للتخصيص تمامًا لبيع المنتجات عبر الإنترنت، وهو فعال وسريع وسهل الاستخدام.",
      linkText: "اطلق الان",
      linkHref: "#",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="">
          <p className="text-[#2B1F51] text-4xl font-bold">
            E-commerce – التجارة الإلكترونية
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 pt-12 ">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex flex-col items-center p-6 pt-8">
                <div className="relative w-24 h-24 mb-4">
                  <img
                    src={platform.imageSrc}
                    alt={platform.title}
                    width={96}
                    height={96}
                    className="rounded-lg object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {platform.title}
                </h3>
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  {platform.description}
                </p>
              </div>
              <div className="flex justify-start p-6 pt-0">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
                >
                  {platform.linkText}
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommercePlatforms;

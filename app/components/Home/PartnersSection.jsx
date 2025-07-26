"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Placeholder image URLs - replace with your actual image paths
const IMAGE_BASE_URL = "/placeholder.svg"

const mainPartnersData = [
  {
    id: 1,
    name: "Linode",
    imageUrl: "/images/Vector.png",
    description: "خوادم قوية ومتقدمة للخدمات السحابية في موقع مركز البيانات الرقمية بسرعة عالية وحماية شاملة",
    color: "text-green-600",
  },
  {
    id: 2,
    name: "Cpanel",
    imageUrl: "/images/61a70148d9f569ca4c3408cae0bb7b08409e5c28.png",
    description: "لوحة تحكم قوية ومتطورة ومبدعة للإدارة المتميزة",
    color: "text-orange-600",
  },
  {
    id: 3,
    name: "Cloudlinux",
    imageUrl: "/images/391b4ec0b6a6c8af4f95170b677c5c78446de47e.png",
    description: "نظام تشغيل CloudLinux الآمن للخوادم والأمان الكامل",
    color: "text-blue-600",
  },
]

const otherPartnersData = [
  {
    id: 4,
    name: "AMD Epyc",
    imageUrl: "./images/Vector-1.png",
    description: "معالجات AMD EPYC عالية الأداء للخوادم المتقدمة",
    color: "text-red-600",
  },
  {
    id: 5,
    name: "Cloudflare",
    imageUrl: "/images/b555ebc20bc3dea3ff8cab9960fcac9b0dd2f0bc.png",
    description: "شبكة توصيل المحتوى العالمية",
    color: "text-orange-500",
  },
  {
    id: 6,
    name: "MemCached",
    imageUrl: "/images/021dd37e4d5a1d8f8e711a7cef1859e980d8907d.png",
    description: "نظام ذاكرة التخزين المؤقت",
    color: "text-gray-600",
  },
  {
    id: 7,
    name: "Imunify360",
    imageUrl: "/images/43e7272e1fd71748b7c94c09968f8ebef13670ac.png",
    description: "حماية شاملة متطورة",
    color: "text-green-500",
  },
  {
    id: 8,
    name: "MailChannel",
    imageUrl: "/images/aa1cc26dbccc5da305b97282fa346d0d24b8f940.png",
    description: "خدمة البريد الإلكتروني الموثوقة",
    color: "text-green-600",
  },
  {
    id: 9,
    name: "LiteSpeed",
    imageUrl: "/images/af65ddbd2d4611699b402af523ac1192db6bcd4e.png",
    description: "خادم الويب عالي الأداء",
    color: "text-blue-500",
  },
  {
    id: 10,
    name: "QUIC.cloud",
    imageUrl: "/images/8ea1bf553e758c0b53e80e68e2428102c0402f22.png",
    description: "تقنية QUIC المتطورة",
    color: "text-teal-600",
  },
  {
    id: 11,
    name: "MariaDB",
    imageUrl: "/images/d2c730858ebc4923342e2063648236ad856bbf75.png",
    description: "قاعدة بيانات عالية الأداء",
    color: "text-blue-700",
  },
  {
    id: 12,
    name: "JetBackup",
    imageUrl: "/images/12ca73a032e2be1cb037c513e99d03532e1065a0.png",
    description: "حلول النسخ الاحتياطي المتقدمة",
    color: "text-orange-600",
  },
  {
    id: 13,
    name: "Softaculous",
    imageUrl: "/images/9d73dec4c85f02c04b8b670a9a50329be6156ae1.png",
    description: "منصة تثبيت التطبيقات",
    color: "text-purple-600",
  },
]

const PartnersSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">شركائنا</h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          نقدم بفخرولة جيرى وناد شعوني الغطضيم دعم زقميل عمائن وتحقيق أبدطبيرت التام الرقمي
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Top 3 main partners */}
        {mainPartnersData.map((partner, index) => {
          return (
            <motion.div
              className=""
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <Card
                key={partner.id}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-28 h-28 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors overflow-hidden">
                      <img
                        width={70}
                        height={70}
                        src={partner.imageUrl || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{partner.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
                  <p className="mt-6 font-semibold text-xl">عرض المزيد</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {/* Remaining partners in smaller cards */}
        {otherPartnersData.map((partner, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className=""
            >
              <Card
                key={partner.id}
                className="group hover:shadow-md transition-all duration-300 border border-gray-200 bg-white"
              >
                <CardContent className="p-4 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors overflow-hidden">
                      <img
                        src={partner.imageUrl || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{partner.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default PartnersSection

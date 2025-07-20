"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Server,
  Shield,
  Cloud,
  Cpu,
  Zap,
  Database,
  Mail,
  Globe,
  HardDrive,
  Workflow,
  Archive,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "Linode",
    icon: Server,
    description:
      "خوادم قوية ومتقدمة للخدمات السحابية في موقع مركز البيانات الرقمية بسرعة عالية وحماية شاملة",
    color: "text-green-600",
  },
  {
    id: 2,
    name: "Cpanel",
    icon: Settings,
    description: "لوحة تحكم قوية ومتطورة ومبدعة للإدارة المتميزة",
    color: "text-orange-600",
  },
  {
    id: 3,
    name: "Cloudlinux",
    icon: Shield,
    description: "نظام تشغيل CloudLinux الآمن للخوادم والأمان الكامل",
    color: "text-blue-600",
  },
  {
    id: 4,
    name: "AMD Epyc",
    icon: Cpu,
    description: "معالجات AMD EPYC عالية الأداء للخوادم المتقدمة",
    color: "text-red-600",
  },
  {
    id: 5,
    name: "Cloudflare",
    icon: Cloud,
    description: "شبكة توصيل المحتوى العالمية",
    color: "text-orange-500",
  },
  {
    id: 6,
    name: "MemCached",
    icon: Database,
    description: "نظام ذاكرة التخزين المؤقت",
    color: "text-gray-600",
  },
  {
    id: 7,
    name: "Imunify360",
    icon: Shield,
    description: "حماية شاملة متطورة",
    color: "text-green-500",
  },
  {
    id: 8,
    name: "MailChannel",
    icon: Mail,
    description: "خدمة البريد الإلكتروني الموثوقة",
    color: "text-green-600",
  },
  {
    id: 9,
    name: "LiteSpeed",
    icon: Zap,
    description: "خادم الويب عالي الأداء",
    color: "text-blue-500",
  },
  {
    id: 10,
    name: "QUIC.cloud",
    icon: Globe,
    description: "تقنية QUIC المتطورة",
    color: "text-teal-600",
  },
  {
    id: 11,
    name: "MariaDB",
    icon: HardDrive,
    description: "قاعدة بيانات عالية الأداء",
    color: "text-blue-700",
  },
  {
    id: 12,
    name: "JetBackup",
    icon: Archive,
    description: "حلول النسخ الاحتياطي المتقدمة",
    color: "text-orange-600",
  },
  {
    id: 13,
    name: "Softaculous",
    icon: Workflow,
    description: "منصة تثبيت التطبيقات",
    color: "text-purple-600",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          شركائنا
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          نقدم بفخرولة جيرى وناد شعوني الغطضيم دعم زقميل عمائن وتحقيق أبدطبيرت
          التام الرقمي
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Top 3 main partners */}
        {partners.slice(0, 3).map((partner, index) => {
          const IconComponent = partner.icon;
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
                    <div className="w-20 h-20 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <IconComponent className={`w-10 h-10 ${partner.color}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {partner.name}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {/* Remaining partners in smaller cards */}
        {partners.slice(3).map((partner, index) => {
          const IconComponent = partner.icon;
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
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <IconComponent className={`w-6 h-6 ${partner.color}`} />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-900">
                    {partner.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnersSection;

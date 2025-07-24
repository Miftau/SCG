"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HardDrive, MemoryStick, Cpu } from "lucide-react";
import { motion } from "framer-motion";
const PricingSection = () => {
  const pricingPlans = [
    {
      id: "plan-1",
      headerColor: "bg-[#FEE572]",
      title: "أوبيليونز ناتيف",
      price: "91.30",
      billingPeriod: "دل/ربع سنوي",
      features: [
        { icon: HardDrive, value: "20GB", label: "تخزين SSD" },
        { icon: MemoryStick, value: "2GB", label: "الذاكرة" },
        { icon: Cpu, value: "1", label: "vCPU" },
      ],
      buttonText: "اطلب الان",
    },
    {
      id: "plan-2",
      headerColor: "bg-[#E0E0E0]", // Light gray from image
      title: "أوبيليونز ناتيف",
      price: "91.30",
      billingPeriod: "دل/ربع سنوي",
      features: [
        { icon: HardDrive, value: "20GB", label: "تخزين SSD" },
        { icon: MemoryStick, value: "2GB", label: "الذاكرة" },
        { icon: Cpu, value: "1", label: "vCPU" },
      ],
      buttonText: "اطلب الان",
    },
    {
      id: "plan-3",
      headerColor: "bg-[#87B9F0]", // Blue from image
      title: "أوبيليونز ناتيف",
      price: "91.30",
      billingPeriod: "دل/ربع سنوي",
      features: [
        { icon: HardDrive, value: "20GB", label: "تخزين SSD" },
        { icon: MemoryStick, value: "2GB", label: "الذاكرة" },
        { icon: Cpu, value: "1", label: "vCPU" },
      ],
      buttonText: "اطلب الان",
    },
    {
      id: "plan-4",
      headerColor: "bg-[#FEE572]", // Yellow from image
      title: "أوبيليونز ناتيف",
      price: "91.30",
      billingPeriod: "دل/ربع سنوي",
      features: [
        { icon: HardDrive, value: "20GB", label: "تخزين SSD" },
        { icon: MemoryStick, value: "2GB", label: "الذاكرة" },
        { icon: Cpu, value: "1", label: "vCPU" },
      ],
      buttonText: "اطلب الان",
    },
    {
      id: "plan-5",
      headerColor: "bg-[#E0E0E0]", // Light gray from image
      title: "أوبيليونز ناتيف",
      price: "91.30",
      billingPeriod: "دل/ربع سنوي",
      features: [
        { icon: HardDrive, value: "20GB", label: "تخزين SSD" },
        { icon: MemoryStick, value: "2GB", label: "الذاكرة" },
        { icon: Cpu, value: "1", label: "vCPU" },
      ],
      buttonText: "اطلب الان",
    },
    {
      id: "plan-6",
      headerColor: "bg-[#87B9F0]", // Blue from image
      title: "أوبيليونز ناتيف",
      price: "91.30",
      billingPeriod: "دل/ربع سنوي",
      features: [
        { icon: HardDrive, value: "20GB", label: "تخزين SSD" },
        { icon: MemoryStick, value: "2GB", label: "الذاكرة" },
        { icon: Cpu, value: "1", label: "vCPU" },
      ],
      buttonText: "اطلب الان",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-900">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-8">
        {pricingPlans.map((plan) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="card-hover"
            key={plan.id}
          >
            <Card className="flex flex-col items-center text-center rounded-lg shadow-lg overflow-hidden p-0">
              <CardHeader
                className={`w-full py-2 rounded-xl ${plan.headerColor}`}
              ></CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6 flex-grow">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-900 mb-4">
                  {plan.title}
                </CardTitle>{" "}
                {/* Moved here */}
                <div className="text-5xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {plan.billingPeriod}
                </p>
                <div className="flex justify-around w-full max-w-xs mb-6">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1"
                    >
                      <feature.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {feature.value}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-700 mb-6" />
              </CardContent>
              <CardFooter className="w-full p-6">
                <Button className="w-full bg-[#3F3F6F] hover:bg-[#3F3F6F]/90 text-white font-bold py-2 px-4 rounded">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

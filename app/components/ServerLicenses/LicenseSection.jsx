"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { motion } from "framer-motion";
const LicenseSection = () => {
  const licenseItems = [
    {
      id: "cloudlinux",
      name: "CloudLinux",
      logo: "/images/391b4ec0b6a6c8af4f95170b677c5c78446de47e.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
    {
      id: "whmcs",
      name: "WHMCS",
      logo: "/images/507ba9e08079a97077a9a2273b4d2a7d395e8940.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
    {
      id: "kernelcare",
      name: "KernelCare",
      logo: "/images/65e2f52fdf4a054291aab7886a49fa832a174f67.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
    {
      id: "litespeed",
      name: "LiteSpeed",
      logo: "/images/0066b2d2bcad17704f44334a0546dfc4ea200170.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
     {
      id: "cloudlinux-2",
      name: "CloudLinux",
      logo: "/images/12ca73a032e2be1cb037c513e99d03532e1065a0.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
    {
      id: "cpanel-whm",
      name: "cPanel & WHM",
      logo: "/images/e46cb3b47769e106847a28f95021f281c1427e27.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
    {
      id: "softaculous",
      name: "Softaculous",
      logo: "/images/969221bd73e840edfad1d4118b1fe03cef9d2ab9.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
     {
      id: "jetbackup",
      name: "JetBackup",
      logo: "/images/391b4ec0b6a6c8af4f95170b677c5c78446de47e.png",
      price: "15.00",
      currency: "$",
      period: "/Month",
    },
   
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 lg:ml-12 sm:mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2
            className="text-3xl font-semibold tracking-tighter sm:text-4xl text-gray-800"
          
          >
            هل تحتاج الى تراخيص مفرده؟
          </h2>
          <p
            className=""
          >
            احصل على ترخيص مفرد للخوادم الخاصة و الخوادم المخصصة الكاملة
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {licenseItems.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={item.id}
            >
              <Card
                className="flex flex-col items-center justify-between p-4 rounded-md shadow-sm border"
              >
                <CardContent className="flex flex-col items-center justify-center p-0 w-full">
                  <div className="flex items-center justify-center h-24 w-full mb-8">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.name} logo`}
                      width={150}
                      height={60}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="h-[1px] w-full bg-gray-700"></div>
                  <div className="flex items-center justify-between w-full mt-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl md:text-4xl text-[#2B1F51] font-bold">
                        {item.price}
                      </span>
                      <span className="text-2xl md:text-4xl text-[#2B1F51] font-bold">
                        {item.currency}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-[#2B1F51] text-primary-foreground w-6 h-6 p-1 cursor-pointer hover:bg-[#2B1F51]/40"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Add {item.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;

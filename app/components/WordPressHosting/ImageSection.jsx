
import { Button } from "@/components/ui/button";

const ImageSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-20 bg-white overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="relative bg-[#2A3252] rounded-lg p-8 md:p-12 lg:p-16 max-w-7xlxl mx-auto shadow-lg">
          <img
            src="/images/Clip path group (3).png"
            alt="3D blue open box"
            width={100}
            height={100}
            className="absolute -left-0 top-10  w-[160px] h-[160px]  object-contain"
          />

          <img
            src="/images/blocks-icon 1.png"
            alt="3D blue cube"
            width={200}
            height={200}
            className="absolute -right-0 -top-10  w-[180px] h-[180px]  object-contain"
          />

          <div className="space-y-6 relative z-20">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              هل لديك موقع ووردبريس فى شركة اخرى ؟
            </h2>
            <p className="text-white text-xl md:text-2xl lg:text-3xl">
              نقدم خدمة النقل مجانا
            </p>
            <Button className="bg-white text-[#2A3252] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-md">
              اطلب الآن!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;

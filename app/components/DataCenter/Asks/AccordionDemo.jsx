import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const AccordionDemo = () => {
  return (
    <div className="w-full max-w-[95%] sm:max-w-2xl mx-auto px-1 sm:px-4 space-y-200">
      <Accordion
        type="single"
        collapsible
        className="w-full border rounded-lg p-2 sm:p-4"
        defaultValue="item-1"
       
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="group flex flex-row justify-between items-center text-right text-xs sm:text-base [&>svg:last-child]:hidden">
            <span className="flex-grow text-xl text-blue-700 text-start leading-relaxed">
              ما هو الخادم الافتراضي المخصص (VPS)؟
            </span>
            <Plus className="font-bold text-6xl text-blue-700 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 text-right text-xs sm:text-base leading-relaxed">
            <p>
              الخادم الافتراضي هو خادم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS، فإن إحدى تلك
              البيئات مخصصة لك بالكامل، بدون مشاركة موارد.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="group flex flex-row justify-between items-center text-right text-xs sm:text-base [&>svg:last-child]:hidden">
            <span className="flex-grow text-xl text-blue-700 text-start leading-relaxed">
              متى يجب علي استخدام استضافة VPS بدلاً من الاستضافة المشتركة؟
            </span>
            <Plus className="font-bold text-6xl text-blue-700 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 text-right text-xs sm:text-base leading-relaxed">
            <p>
              نحن نقدم شحنًا عالميًا عبر شركاء موثوقين. يستغرق الشحن القياسي 3-5 أيام عمل، بينما الشحن السريع خلال 1-2 يوم.
            </p>
            <p>
              تتبع شحنتك عبر بوابة التتبع لدينا، والتغليف آمن ومتين.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="group flex flex-row justify-between items-center text-right text-xs sm:text-base [&>svg:last-child]:hidden">
            <span className="flex-grow text-xl text-blue-700 text-start leading-relaxed">
              ما الفرق بين الخادم الافتراضي والخادم المخصص؟
            </span>
            <Plus className="font-bold text-6xl text-blue-700 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 text-right text-xs sm:text-base leading-relaxed">
            <p>
              لدينا سياسة إرجاع لمدة 30 يومًا، تشمل شحن مجاني واسترداد فوري خلال 48 ساعة من استلام المرتجع.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="group flex flex-row justify-between items-center text-right text-xs sm:text-base [&>svg:last-child]:hidden">
            <span className="flex-grow text-xl text-blue-700 text-start leading-relaxed">
              ماهي المواقع المتاحة لاستضافة VPS؟
            </span>
            <Plus className="font-bold text-6xl text-blue-700 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 text-right text-xs sm:text-base leading-relaxed">
            <p>
              تشمل مواقعنا مراكز بيانات في أوروبا، أمريكا وآسيا لضمان سرعة واستقرار الخدمة.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionDemo;

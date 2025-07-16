

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react" 

const AccordionDemo = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border h-full rounded-lg p-4"
      defaultValue="item-1"
      dir="rtl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="group flex flex-row justify-between items-center text-right [&>svg:last-child]:hidden">
          <span className="flex-grow text-right">ما هو الخادم الافتراضي المخصص (VPS)؟</span>
          <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-right">
          <p>
            الخادم الافتراضي هو خادم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS، فإن إحدى تلك
            البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة
            المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر سلوكهم.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="group flex flex-row justify-between items-center text-right [&>svg:last-child]:hidden">
          <span className="flex-grow text-right">متى يجب علي استخدام استضافة VPS بدلاً من الاستضافة المشتركة؟</span>
          <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-right">
          <p>
            نحن نقدم شحنًا عالميًا عبر شركاء شحن موثوقين. يستغرق التسليم القياسي من 3 إلى 5 أيام عمل، بينما يضمن الشحن
            السريع التسليم في غضون 1-2 يوم عمل.
          </p>
          <p>
            يتم تغليف جميع الطلبات بعناية وتأمينها بالكامل. تتبع شحنتك في الوقت الفعلي من خلال بوابة التتبع المخصصة
            لدينا.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="group flex flex-row justify-between items-center text-right [&>svg:last-child]:hidden">
          <span className="flex-grow text-right">ما الفرق بين الخادم الافتراضي والخادم المخصص؟</span>
          <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-right">
          <p>
            نحن ندعم منتجاتنا بسياسة إرجاع شاملة لمدة 30 يومًا. إذا لم تكن راضيًا تمامًا، فما عليك سوى إرجاع العنصر في
            حالته الأصلية.
          </p>
          <p>
            تتضمن عملية الإرجاع الخالية من المتاعب لدينا شحن إرجاع مجاني واسترداد كامل للمبالغ المدفوعة في غضون 48 ساعة
            من استلام العنصر المرتجع.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="group flex flex-row justify-between items-center text-right [&>svg:last-child]:hidden">
          <span className="flex-grow text-right">ماهي المواقع المتاحة لاستضافة VPS؟</span>
          <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-right">
          <p>
            نحن ندعم منتجاتنا بسياسة إرجاع شاملة لمدة 30 يومًا. إذا لم تكن راضيًا تمامًا، فما عليك سوى إرجاع العنصر في
            حالته الأصلية.
          </p>
          <p>
            تتضمن عملية الإرجاع الخالية من المتاعب لدينا شحن إرجاع مجاني واسترداد كامل للمبالغ المدفوعة في غضون 48 ساعة
            من استلام العنصر المرتجع.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionDemo

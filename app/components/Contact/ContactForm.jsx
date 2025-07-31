import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
    return (

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" dir="rtl">
                        لم تجد إجابتك بعد؟ احصل على المساعدة الآن
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl" dir="ltr">
                        With many unique blocks, you can easily build a page without the need for coding. Build your next consulting
                        site in just a few minutes
                    </p>
                </div>
                <div className="mx-auto w-full max-w-md space-y-6">
                    <div className="space-y-2 text-right" dir="rtl">
                        <Label htmlFor="full-name">الاسم الكامل</Label>
                        <Input id="full-name" placeholder="ادخل اسمك الكامل" />
                    </div>
                    <div className="space-y-2 text-right" dir="rtl">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input id="email" type="email" placeholder="ادخل بريدك الإلكتروني" />
                    </div>
                    <div className="space-y-2 text-right" dir="rtl">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input id="phone" type="tel" placeholder="ادخل رقم الهاتف" />
                    </div>
                    <div className="space-y-2 text-right" dir="rtl">
                        <Label htmlFor="reason">لماذا ترغب في الانضمام إلينا؟</Label>
                        <Textarea id="reason" placeholder="-" className="min-h-[100px]" />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-[#2A3252] hover:bg-white hover:text-[#2A3252] border border-[#2A3252] hover:border-[#2A3252] text-white"

                    >
                        إرسال
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
    return (
        <div className=" w-full px-8">
            <div className="flex items-center justify-between  gap-8">

                <NavigationMenu className="relative z-50 text-white">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white hover:text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0">
                                التكنولوجيا
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                                    <Link href="/security" className="space-y-3">
                                        <h4 className="font-medium leading-none">الأمان</h4>
                                        <p className="text-sm text-muted-foreground">
                                            ميزات أمان متطورة لحماية بياناتك ومواقعك الإلكترونية.
                                        </p>
                                    </Link>
                                    <Link href="/speed" className="space-y-3">
                                        <h4 className="font-medium leading-none">السرعة</h4>
                                        <p className="text-sm text-muted-foreground">حلول استضافة محسنة لضمان أسرع أوقات تحميل.</p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">لوحة التحكم</h4>
                                        <p className="text-sm text-muted-foreground">
                                            قم بإدارة خدمات الاستضافة الخاصة بك بسهولة باستخدام لوحة التحكم التفاعلية لدينا.
                                        </p>
                                    </div>
                                    <Link href="/data-center" className="space-y-3">
                                        <h4 className="font-medium leading-none">مراكز البيانات</h4>
                                        <p className="text-sm text-muted-foreground">
                                            اكتشف مراكز البيانات الحديثة لدينا للبنية التحتية من الدرجة الأولى.
                                        </p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">حالة الخوادم</h4>
                                        <p className="text-sm text-muted-foreground">تحقق من الحالة الحالية ووقت التشغيل لجميع خوادمنا.</p>
                                    </div>
                                    <Link href="/backups" className="space-y-3">
                                        <h4 className="font-medium leading-none">النسخ الاحتياطية</h4>
                                        <p className="text-sm text-muted-foreground">
                                            تأكد من أن بياناتك آمنة دائماً من خلال خدمات النسخ الاحتياطي المنتظمة.
                                        </p>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white hover:text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0">
                                الشركة
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">عنا</h4>
                                        <p className="text-sm text-muted-foreground">تعرف على المزيد عن شركتنا وقيمنا وموقعنا.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">اتصل بنا</h4>
                                        <p className="text-sm text-muted-foreground">تواصل مع فريقنا لأي استفسارات أو دعم.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">الوظائف</h4>
                                        <p className="text-sm text-muted-foreground">انضم إلى فريقنا وساعدنا في تشكيل مستقبل الاستضافة.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">مركز الإعلام والأخبار</h4>
                                        <p className="text-sm text-muted-foreground">ابق محدثاً بأحدث أخبار الشركة والإصدارات الإعلامية.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">برنامج الموزعين</h4>
                                        <p className="text-sm text-muted-foreground">كن موزعاً وابدأ عملك معنا.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">شركائنا</h4>
                                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit</p>
                                    </div>
                                    <Link href="/payment-methods" className="space-y-3">
                                        <h4 className="font-medium leading-none">طرق الدفع</h4>
                                        <p className="text-sm text-muted-foreground">استكشف جميع خيارات الدفع المتاحة لخدماتنا.</p>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white hover:text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0">
                                النطاقات
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                    <Link href="/eg" className="space-y-3">
                                        <h4 className="font-medium leading-none">تسجيل النطاقات</h4>
                                        <p className="text-sm text-muted-foreground">سجل نطاقات جديدة أو قم بنقل نطاقاتك الحالية بسهولة.</p>
                                    </Link>
                                    <Link href="/eg" className="space-y-3">
                                        <h4 className="font-medium leading-none">النطاقات المحلية</h4>
                                        <p className="text-sm text-muted-foreground">احصل على امتدادات نطاقات محلية لمنطقتك أي بلدك.</p>
                                    </Link>
                                    <Link href="/eg" className="space-y-3">
                                        <h4 className="font-medium leading-none">نقل نطاق</h4>
                                        <p className="text-sm text-muted-foreground">نقل النطاقات بسلاسة من موزعين آخرين.</p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">whois</h4>
                                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit</p>
                                    </div>
                                    <Link href="/ssl" className="space-y-3">
                                        <h4 className="font-medium leading-none">شهادات الأمان SSL</h4>
                                        <p className="text-sm text-muted-foreground">
                                            تأكد من تأمين الاتصالات لموقعك الإلكتروني باستخدام شهادات SSL.
                                        </p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">كلود فلير</h4>
                                        <p className="text-sm text-muted-foreground">
                                            قم بتحسين أمان وأداء موقعك الإلكتروني باستخدام Cloudflare.
                                        </p>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white hover:text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0">
                                الخوادم
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-3">
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">خوادم VPS</h4>
                                        <p className="text-sm text-muted-foreground">خوادم افتراضية خاصة مع موارد مخصصة لمشاريعك.</p>
                                    </div>
                                    <Link href="/cloud-servers" className="space-y-3">
                                        <h4 className="font-medium leading-none">الخوادم السحابية</h4>
                                        <p className="text-sm text-muted-foreground">خوادم سحابية مرنة وقابلة للتوسع لأي نوع من الأعمال.</p>
                                    </Link>
                                    <Link href="/server-management" className="space-y-3">
                                        <h4 className="font-medium leading-none">الخوادم الكاملة</h4>
                                        <p className="text-sm text-muted-foreground">خوادم مخصصة مع تحكم كامل في بيئتك.</p>
                                    </Link>
                                    <Link href="/server-licenses" className="space-y-3">
                                        <h4 className="font-medium leading-none">تراخيص الخوادم</h4>
                                        <p className="text-sm text-muted-foreground">احصل على التراخيص اللازمة لبرنامج الخادم الخاص بك.</p>
                                    </Link>
                                    <Link href="/server-management" className="space-y-3">
                                        <h4 className="font-medium leading-none">الدعم الفني للخوادم</h4>
                                        <p className="text-sm text-muted-foreground">احصل على دعم الخبراء لصيانة وإدارة الخوادم.</p>
                                    </Link>
                                    <Link href="/backups" className="space-y-3">
                                        <h4 className="font-medium leading-none">النسخ الاحتياطي</h4>
                                        <p className="text-sm text-muted-foreground">
                                            قم بتأمين بياناتك مع خدمات النسخ الاحتياطي المنتظمة.
                                        </p>
                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white hover:text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0">
                                استضافة الموزعين
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-2">
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">الموزع العادي</h4>
                                        <p className="text-sm text-muted-foreground">خطة استضافة أساسية للموزعين لبدء عملياتهم.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">الموزع للبيس</h4>
                                        <p className="text-sm text-muted-foreground">ميزات محسنة لشبكات الموزعين المتنامية.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">برنامج الموزعين</h4>
                                        <p className="text-sm text-muted-foreground">انضم إلى برنامج الموزعين لدينا وابدأ في الكسب.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">الموزع الترا</h4>
                                        <p className="text-sm text-muted-foreground">استضافة متميزة لعمليات الموزعين على نطاق واسع.</p>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                             className="text-white hover:!text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0">
                                الاستضافات
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-3">
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">الاستضافات المشاركة</h4>
                                        <p className="text-sm text-muted-foreground">
                                            استضافة مرنة ومناسبة من حيث التكلفة للشركات الصغيرة والمواقع الشخصية.
                                        </p>
                                    </div>
                                    <Link href="/shared-hosting" className="space-y-3">
                                        <h4 className="font-medium leading-none">الاستضافة السحابية</h4>
                                        <p className="text-sm text-muted-foreground">حلول استضافة قابلة للتوسع نمو مع احتياجات عملك.</p>
                                    </Link>
                                    <Link href="/wordpress-hosting" className="space-y-3">
                                        <h4 className="font-medium leading-none">استضافات الووردبريس</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Optimized hosting environment tailored for WordPress websites.
                                        </p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">Softaculous Hosting</h4>
                                        <p className="text-sm text-muted-foreground">
                                            One-click installs for over 400 applications using Softaculous.
                                        </p>
                                    </div>
                                    <Link href="/business-hosting" className="space-y-3">
                                        <h4 className="font-medium leading-none">استضافات الأعمال</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Professional-grade hosting for growing businesses with high performance.
                                        </p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">استضافات المبرمجين</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Advanced hosting solutions with tools and features for developers.
                                        </p>
                                    </div>
                                    <Link href="/mail-hosting" className="space-y-3">
                                        <h4 className="font-medium leading-none">استضافات البريد</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Reliable email hosting with custom domains for professional communication.
                                        </p>
                                    </Link>
                                    <Link href="/windows-hosting" className="space-y-3">
                                        <h4 className="font-medium leading-none">استضافات ويندوز</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Windows-based hosting with support for .NET and other Microsoft technologies.
                                        </p>
                                    </Link>
                                    <div className="space-y-3">
                                        <h4 className="font-medium leading-none">سحابة نمور </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Secure and high-performance cloud hosting for enterprise applications.
                                        </p>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="text-white hover:text-gray-200 !bg-transparent !shadow-none hover:!bg-transparent focus:!bg-transparent !ring-0"
                            >
                                <Link href="/">الرئيسية</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="text-white font-bold text-xl z-50">
                    <span className="text-blue-400">▼</span> VULTR
                </div>
            </div>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

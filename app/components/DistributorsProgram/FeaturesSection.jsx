import { Users, CreditCard, TrendingUp, Server, BarChart3, Monitor, Shield, Search } from "lucide-react"

const FeaturesSection = () => {

    const features = [
        {
            icon: Users,
            title: "خدمة عملاء متميزة",
        },
        {
            icon: CreditCard,
            title: "طرق دفع متنوعة عبر الانترنت",
        },
        {
            icon: TrendingUp,
            title: "نمو مبيعاتك",
        },
        {
            icon: Server,
            title: "استضافة مجانية لمدة سنة",
        },
        {
            icon: BarChart3,
            title: "تقارير مفصلة عن أداء موقعك",
        },
        {
            icon: Monitor,
            title: "لوحة تحكم سهلة الاستخدام",
        },
        {
            icon: Shield,
            title: "الحماية",
        },
        {
            icon: Search,
            title: "تحسين محركات البحث SEO",
        },
    ]

    return (

        <section className="py-16 px-4 bg-gray-50" dir="rtl">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">المزايا</h2>
                    <p className="text-gray-600 text-lg">المزايا التنافسية في جميع منتجاتنا</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-8 h-8 text-blue-500" />
                                    </div>
                                </div>
                                <h3 className="text-gray-700 font-medium text-sm leading-relaxed">{feature.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
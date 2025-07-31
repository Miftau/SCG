import { Check } from "lucide-react"

const PricingSection = () => {



    const pricingPlans = [
        {
            id: 1,
            name: "أوبليتور نايت",
            price: "91.30",
            currency: "ريال سعودي",
            borderColor: "bg-purple-500",
            features: [
                { label: "NVMe Storage", value: "60GB" },
                { label: "Webmin/ISP", value: "1$" },
                { label: "RAM", value: "4" },
                { label: "CPU", value: "3" },
            ],
            unlimited: ["Subdomains", "MySQL & SQL Databases", "Email Account", "FTP Accounts"],
            additionalFeatures: ["cPanel Control Panel", "Supports one-click app installer"],
        },
        {
            id: 2,
            name: "أوبليتور نايت",
            price: "91.30",
            currency: "ريال سعودي",
            borderColor: "bg-blue-500",
            features: [
                { label: "NVMe Storage", value: "60GB" },
                { label: "Webmin/ISP", value: "1$" },
                { label: "RAM", value: "4" },
                { label: "CPU", value: "3" },
            ],
            unlimited: ["Subdomains", "MySQL & SQL Databases", "Email Account", "FTP Accounts"],
            additionalFeatures: ["cPanel Control Panel", "Supports one-click app installer"],
        },
        {
            id: 3,
            name: "أوبليتور نايت",
            price: "91.30",
            currency: "ريال سعودي",
            borderColor: "bg-yellow-500",
            features: [
                { label: "NVMe Storage", value: "60GB" },
                { label: "Webmin/ISP", value: "1$" },
                { label: "RAM", value: "4" },
                { label: "CPU", value: "3" },
            ],
            unlimited: ["Subdomains", "MySQL & SQL Databases", "Email Account", "FTP Accounts"],
            additionalFeatures: ["cPanel Control Panel", "Supports one-click app installer"],
        },
    ]

    const bottomFeatures = [
        {
            id: 1,
            title: "uptime guarantee 99.9%",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
        },
        {
            id: 2,
            title: "High-speed NVMe SSD disks",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            id: 3,
            title: "High-performance devices",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
        },
        {
            id: 4,
            title: "Enterprise-level reliability",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600",
        },
    ]

    return (

        <div className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">اختر أحد الخطط</h2>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingPlans.map((plan) => (
                        <div key={plan.id} className="card-hover bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className={`h-1 ${plan.borderColor}`}></div>
                            <div className="p-8 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                                    <span className="text-gray-500 text-sm block">{plan.currency}</span>
                                </div>
                                <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors mb-8">
                                    اطلب الآن
                                </button>

                                <div className="text-right space-y-3 text-sm">
                                    {/* Features with values */}
                                    {plan.features.map((feature, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-gray-600">{feature.value}</span>
                                            <span className="text-gray-800">{feature.label}</span>
                                        </div>
                                    ))}

                                    {/* Additional features */}
                                    {plan.additionalFeatures.map((feature, index) => (
                                        <div key={index} className="text-gray-800">
                                            {feature}
                                        </div>
                                    ))}

                                    {/* Unlimited features */}
                                    {plan.unlimited.map((feature, index) => (
                                        <div key={index}>
                                            <span className="font-semibold">Unlimited</span>
                                            <span className="text-gray-600"> {feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t">
                                    <span className="text-blue-600 text-sm">فتح المتجر</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bottomFeatures.map((feature) => (
                        <div key={feature.id} className="text-center">
                            <div className={`w-12 h-12 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <Check className={`w-6 h-6 ${feature.iconColor}`} />
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                        </div>
                    ))}
                </div>

                {/* Virtual Servers Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Virtual servers, with real capabilities</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cloud virtual servers provide you with the power of fully dedicated resources to expand your hosting
                        capabilities and enhance your site's flexibility with advanced features.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PricingSection
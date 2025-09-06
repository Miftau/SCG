import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"


const PricingSection = () => {

    const plans = [
        {
            name: "أوبليتور نايت",
            price: "91.30",
            currency: "جنيه مصري شهرياً",
            borderColor: "border-t-purple-500",
            features: [
                { label: "60GB", sublabel: "NVMe Storage", highlight: false },
                { label: "Webstats", sublabel: "1$", highlight: false },
                { label: "RAM", sublabel: "4", highlight: false },
                { label: "CPU", sublabel: "3", highlight: false },
                { label: "cPanel Control Panel", highlight: false },
                { label: "Unlimited", sublabel: "Subdomains", highlight: true },
                { label: "Unlimited", sublabel: "MySQL & SQL Databases", highlight: true },
                { label: "Unlimited", sublabel: "Email Account", highlight: true },
                { label: "Unlimited", sublabel: "FTP Accounts", highlight: true },
                { label: "Supports one-click app installer", highlight: false },
            ],
        },
        {
            name: "أوبليتور نايت",
            price: "91.30",
            currency: "جنيه مصري شهرياً",
            borderColor: "border-t-gray-400",
            features: [
                { label: "60GB", sublabel: "NVMe Storage", highlight: false },
                { label: "Webstats", sublabel: "1$", highlight: false },
                { label: "RAM", sublabel: "4", highlight: false },
                { label: "CPU", sublabel: "3", highlight: false },
                { label: "cPanel Control Panel", highlight: false },
                { label: "Unlimited", sublabel: "Subdomains", highlight: true },
                { label: "Unlimited", sublabel: "MySQL & SQL Databases", highlight: true },
                { label: "Unlimited", sublabel: "Email Account", highlight: true },
                { label: "Unlimited", sublabel: "FTP Accounts", highlight: true },
                { label: "Supports one-click app installer", highlight: false },
            ],
        },
        {
            name: "أوبليتور نايت",
            price: "91.30",
            currency: "جنيه مصري شهرياً",
            borderColor: "border-t-yellow-500",
            features: [
                { label: "60GB", sublabel: "NVMe Storage", highlight: false },
                { label: "Webstats", sublabel: "1$", highlight: false },
                { label: "RAM", sublabel: "4", highlight: false },
                { label: "CPU", sublabel: "3", highlight: false },
                { label: "cPanel Control Panel", highlight: false },
                { label: "Unlimited", sublabel: "Subdomains", highlight: true },
                { label: "Unlimited", sublabel: "MySQL & SQL Databases", highlight: true },
                { label: "Unlimited", sublabel: "Email Account", highlight: true },
                { label: "Unlimited", sublabel: "FTP Accounts", highlight: true },
                { label: "Supports one-click app installer", highlight: false },
            ],
        },
    ]


    return (

        <section className="py-16 px-4 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">اختر أحد الخطط</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`card-hover relative bg-white shadow-lg  border-t-4 ${plan.borderColor}`}
                        >
                            <CardHeader className="text-center pb-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                                    <p className="text-sm text-gray-600 mt-1">{plan.currency}</p>
                                </div>
                                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-md font-medium">
                                    اطلب الآن
                                </Button>
                            </CardHeader>

                            <CardContent className="pt-4">
                                <div className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="text-sm">
                                            {feature.highlight ? (
                                                <div className="flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium">{feature.label}</span>
                                                    {feature.sublabel && <span className="text-gray-600 mr-1">{feature.sublabel}</span>}
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <span className="text-gray-800 font-medium">{feature.label}</span>
                                                    {feature.sublabel && <span className="text-gray-600 mr-1"> {feature.sublabel}</span>}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium block text-center">
                                        مقارنة الخطط
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection
import { Shield, ShieldCheck, Gauge } from "lucide-react"

const BenefitsSection = () => {
    return (

        <section className=" py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">المزايا</h2>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Protection Card */}
                    <div className="card-hover bg-white rounded-lg p-8 shadow-sm text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
                            الحماية من الاختراق والبرمجيات الضارة
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            نحن نحمايتك موقعك من البرمجيات الضارة ومحاولات الاختراق، وهجمات يوم الصفر وهجمات تحمين كلمات المرور بالقوة
                            الغاشمة.
                        </p>
                    </div>

                    {/* DDoS Protection Card */}
                    <div className="card-hover bg-white rounded-lg p-8 shadow-sm text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">التخفيف من هجمات DDoS</h3>
                        <p className="text-gray-600 leading-relaxed">
                            يمكن أن تؤدي هجمات الحرمان من الخدمة الموزعة (DDoS) إلى تعطيل عملك بالكامل. نحن نحجب هجمات DDoS على
                            المستويات 3 و4 و7 ونوفر عرض النطاق الترددي أثناء الهجمات.
                        </p>
                    </div>

                    {/* CDN Performance Card */}
                    <div className="card-hover bg-white rounded-lg p-8 shadow-sm text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <Gauge className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">تحسين أداء الموقع عبر CDN</h3>
                        <p className="text-gray-600 leading-relaxed">
                            يعمل CDN الخاص بنا على تحسين سرعة تحميل الصفحات وتقليل أعباء الخادم بنسبة 80% في المتوسط لتحسين أداء
                            موقعك.
                        </p>
                    </div> 
                </div>
            </div>
        </section>)
}

export default BenefitsSection
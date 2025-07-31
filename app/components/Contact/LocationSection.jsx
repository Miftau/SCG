import { MapPin, Phone, Mail, Shield, Database, FileText } from "lucide-react"

const LocationSection = () => {
    return (

        <section className="w-full py-12 ">
            <div className="container mx-auto px-12">
                {/* Service Icons Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Shield className="w-8 h-8 " />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">خدمات الحماية</h3>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Database className="w-8 h-8 " />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">خدمة البيانات</h3>
                    </div>

                    <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-8 h-8 " />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">إدارة المستندات</h3>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                    <div className="aspect-[16/9] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d46.677666!3d24.71445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzUyLjAiTiA0NsKwNDAnMzkuNiJF!5e0!3m2!1sar!2ssa!4v1234567890123!5m2!1sar!2ssa"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="موقعنا على الخريطة"
                        />
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Location */}
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <MapPin className="w-8 h-8 " />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">الموقع</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            الرياض، المملكة العربية السعودية
                            <br />
                            شارع الملك فهد، حي العليا
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="text-center border-r border-l border-gray-200 md:px-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <Phone className="w-8 h-8 " />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">الهاتف</h3>
                        <p className="text-gray-600 text-sm">+966123456789</p>
                    </div>

                    {/* Email */}
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <Mail className="w-8 h-8 " />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">خدمة البريد الإلكتروني</h3>
                        <p className="text-gray-600 text-sm">info@company.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationSection
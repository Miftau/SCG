import { Button } from '@/components/ui/button'
import React from 'react'

const KubernetesSection = () => {
    return (

        <section className=" py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-relaxed">
                    تم بناء مجموعات Kubernetes في دقائق معدودة
                </h1>

                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                    توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام محرك Kubernetes الخاص بالكامل، يمكنك بسهولة
                    إطلاق الموارد المُدارة للحاويات الخاصة بتطبيقك وإدارتها وتوسيع نطاقها في دقائق بدلاً من أيام.
                </p>

                <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-slate-800 border-2 border-slate-300 hover:bg-slate-50 px-8 py-3 text-lg font-medium rounded-full"
                >
                    اطلب الان!
                </Button>
            </div>
        </section>
    )
}

export default KubernetesSection
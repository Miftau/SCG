import { Button } from '@/components/ui/button'
import React from 'react'

const KubernetesSection = () => {
    return (

        <section className=" py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="lg:text-4xl text-xl mb-6 text-center mb-4 text-[#2B1F51]">
                    تم بناء مجموعات Kubernetes في دقائق معدودة
                </h1>

                <p className="text-center w-1/2 mx-auto">
                    توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام محرك Kubernetes الخاص بالكامل، يمكنك بسهولة
                    إطلاق الموارد المُدارة للحاويات الخاصة بتطبيقك وإدارتها وتوسيع نطاقها في دقائق بدلاً من أيام.
                </p>

                <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#2B1F51] hover:bg-transparent transition hover:text-[#2B1F51] hover:border-2 hover:border-[#2B1F51] text-white rounded-md px-12 py-2 w-fit mx-auto cursor-pointer !rounded-xl border-2 bg-transparent !text-[#2B1F51] border-black mt-8"
                >
                    اطلب الان!
                </Button>
            </div>
        </section>
    )
}

export default KubernetesSection
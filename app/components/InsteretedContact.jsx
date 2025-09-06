import React from 'react'

function InsteretedContact() {
  return (
     <div className="w-full py-12 md:my-20 bg-white" >
                <p className="text-center font-medium pb-16 text-[#2B1F51]">
                    هل أنت مهتم بمعرفة كيف يمكننا مساعدة عملك على النجاح؟ . اتصل بنا .

                </p>
                <div className="container mx-auto md:px-10 px-2">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
                        <img src="/images/microsoft-GkOjRO04.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/Group 2306-DCwOO3nP.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/download.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/Group 2307-nyjIzQtj.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                        <img src="/images/Group 2309-sk_OY7Jm.svg" alt="Online Payment" width={400} height={400} className="object-contain" />
                    </div>
                    <div className="bg-[#333C5E] sm:p-8 p-4 mt-14 flex items-center justify-between">
                        <div className="space-y-6">
                            <h1 className="text-white font-semibold md:text-4xl text-2xl">هل تحتاج إلى مساعدة؟</h1>
                            <p className="text-white">تواصل مع نمار واحصل على المساعدة.</p>
                        </div>
                        <button className="block text-sm sm:text-main font-semibold bg-white sm:py-4 py-2 sm:px-10 px-4 rounded-lg">اتصل الآن!</button>
                    </div>
                </div>
            </div>
  )
}

export default InsteretedContact
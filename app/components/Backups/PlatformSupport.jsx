"use client";

export default function Platforms() {
  return (
    <div className="mt-32 container">
      {/* العنوان */}
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-semibold">
        سُكوري تقدم الدعم لمختلف المنصات
      </h1>

      <p className="mt-8 text-center mb-8 lg:w-1/2 mx-auto">
        تقدم سُكوري دعمًا متعدد المنصات. يعمل جدار الحماية لمواقع سُكوري عبر جميع
        المنصات، بما في ذلك أشهر العلامات التجارية اليوم.
      </p>

      {/* الشبكة */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-8">
        {/* البطاقة 1 */}
        <div className="bg-white rounded-lg p-4 flex lg:ml-12 sm:mx-auto items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/image%2012-C7EY_c_m.svg" alt="Phpbb" />
          <h1 className="text-center text-xs">بي إتش بي بي بي (Phpbb)</h1>
        </div>

        {/* البطاقة 2 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/image%2013-DCbFCuIO.svg" alt="Joomla" />
          <h1 className="text-center text-xs">جوملا</h1>
        </div>

        {/* البطاقة 3 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/image%2014-CKO8UUoo.svg" alt="Drupal" />
          <h1 className="text-center text-xs">دروبال</h1>
        </div>

        {/* البطاقة 4 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/image%2015-BQJrFVsY.svg" alt="Magento" />
          <h1 className="text-center text-xs">ماجنتو</h1>
        </div>

        {/* البطاقة 5 */}
        <div className="bg-white rounded-lg p-4 flex items-center justify-center gap-4 flex-col shadow-lg transition hover:scale-105">
          <img src="/images/image%2016-DTnU3MLs.svg" alt="WordPress" />
          <h1 className="text-center text-xs">ووردبريس</h1>
        </div>
      </div>
    </div>
  );
}


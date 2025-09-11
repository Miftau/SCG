'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

export function NavigationMenuDemo() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const menuItems = [
    {
      label: 'التكنولوجيا',
      id: 'technology',
      items: [
        { title: 'الأمان', description: 'ميزات أمان متطورة لحماية بياناتك ومواقعك الإلكترونية.', href: '/security' },
        { title: 'السرعة', description: 'حلول استضافة محسنة لضمان أسرع أوقات تحميل.', href: '/speed' },
        { title: 'لوحة التحكم', description: 'قم بإدارة خدمات الاستضافة الخاصة بك بسهولة باستخدام لوحة التحكم التفاعلية لدينا.', href: '/static-dashboard' },
        { title: 'مراكز البيانات', description: 'اكتشف مراكز البيانات الحديثة لدينا للبنية التحتية من الدرجة الأولى.', href: '/data-center' },
        { title: 'حالة الخوادم', description: 'تحقق من الحالة الحالية ووقت التشغيل لجميع خوادمنا.', href: '/status' },
        { title: 'النسخ الاحتياطي', description: 'تأكد من أن بياناتك آمنة دائماً من خلال خدمات النسخ الاحتياطي المنتظمة.', href: '/backups' }
      ]
    },
    {
      label: 'الشركة',
      id: 'company',
      items: [
        { title: 'عنا', description: 'تعرف على المزيد عن شركتنا وقيمنا وموقعنا.', href: '/about' },
        { title: 'اتصل بنا', description: 'تواصل مع فريقنا لأي استفسارات أو دعم.', href: '/contact' },
        { title: 'الوظائف', description: 'انضم إلى فريقنا وساعدنا في تشكيل مستقبل الاستضافة.', href: '/careers' },
        { title: 'مركز الإعلام والأخبار', description: 'ابق محدثاً بأحدث أخبار الشركة والإصدارات الإعلامية.', href: '/blog' },
        { title: 'برنامج الموزعين', description: 'كن موزعاً وابدأ عملك معنا.', href: '/distributors-program' },
        { title: 'شركائنا', description: 'Lorem ipsum dolor sit', href: '/our-partners' },
        { title: 'طرق الدفع', description: 'استكشف جميع خيارات الدفع المتاحة لخدماتنا.', href: '/payment-methods' }
      ]
    },
    {
      label: 'النطاقات',
      id: 'domains',
      items: [
        { title: 'تسجيل النطاقات', description: 'سجل نطاقات جديدة أو قم بنقل نطاقاتك الحالية بسهولة.', href: '/eg' },
        { title: 'النطاقات المحلية', description: 'احصل على امتدادات نطاقات محلية لمنطقتك أي بلدك.', href: '/eg' },
        { title: 'نقل نطاق', description: 'نقل النطاقات بسلاسة من موزعين آخرين.', href: '/eg' },
        //{ title: 'whois', description: 'Lorem ipsum dolor sit', href: '/whois' },
        { title: 'شهادات الأمان SSL', description: 'تأكد من تأمين الاتصالات لموقعك الإلكتروني باستخدام شهادات SSL.', href: '/ssl' },
        { title: 'كلود فلير', description: 'قم بتحسين أمان وأداء موقعك الإلكتروني باستخدام Cloudflare.', href: '/cloudflare' }
      ]
    },
    {
      label: 'الخوادم',
      id: 'servers',
      items: [
        { title: 'خوادم VPS', description: 'خوادم افتراضية خاصة مع موارد مخصصة لمشاريعك.', href: '/vps' },
        { title: 'الخوادم السحابية', description: 'خوادم سحابية مرنة وقابلة للتوسع لأي نوع من الأعمال.', href: '/cloud-servers' },
        { title: 'الخوادم الكاملة', description: 'خوادم مخصصة مع تحكم كامل في بيئتك.', href: '/full-servers' },
        { title: 'تراخيص الخوادم', description: 'احصل على التراخيص اللازمة لبرنامج الخادم الخاص بك.', href: '/server-licenses' },
        { title: 'الدعم الفني للخوادم', description: 'احصل على دعم الخبراء لصيانة وإدارة الخوادم.', href: '/server-management' },
        { title: 'النسخ الاحتياطي', description: 'قم بتأمين بياناتك مع خدمات النسخ الاحتياطي المنتظمة.', href: '/backups' }
      ]
    },
    {
      label: 'استضافة الموزعين',
      id: 'resellers',
      items: [
        { title: 'الموزع العادي', description: 'خطة استضافة أساسية للموزعين لبدء عملياتهم.', href: '/distributors-program'  },
        { title: 'الموزع للبيس', description: 'ميزات محسنة لشبكات الموزعين المتنامية.', href:  '/distributors-plus'},
        { title: 'برنامج الموزعين', description: 'انضم إلى برنامج الموزعين لدينا وابدأ في الكسب.', href: '/distributors-program' },
        { title: 'الموزع الترا', description: 'استضافة متميزة لعمليات الموزعين على نطاق واسع.', href: '/distributors-ultra' }
      ]
    },
    {
      label: 'الاستضافات',
      id: 'hosting',
      items: [
        { title: 'الاستضافات المشاركة', description: 'استضافة مرنة ومناسبة من حيث التكلفة للشركات الصغيرة والمواقع الشخصية.', href: '/shared-hosting' },
        { title: 'الاستضافة السحابية', description: 'حلول استضافة قابلة للتوسع نمو مع احتياجات عملك.', href: '/cloud-hosting' },
        { title: 'استضافات الووردبريس', description: 'Optimized hosting environment tailored for WordPress websites.', href: '/wordpress-hosting' },
        { title: 'Softaculous Hosting', description: 'One-click installs for over 400 applications using Softaculous.', href: '/softaculous-hosting' },
        { title: 'استضافات الأعمال', description: 'Professional-grade hosting for growing businesses with high performance.', href: '/business-hosting' },
        { title: 'استضافات المبرمجين', description: 'Advanced hosting solutions with tools and features for developers.', href: '/programmers' },
        { title: 'استضافات البريد', description: 'Reliable email hosting with custom domains for professional communication.', href: '/mail-hosting' },
        { title: 'استضافات ويندوز', description: 'Windows-based hosting with support for .NET and other Microsoft technologies.', href: '/windows-hosting' },
        { title: 'سحابة نمور', description: 'Secure and high-performance cloud hosting for enterprise applications.', href: '/cloud-tiger' }
      ]
    }
  ];

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const closeAllMenus = () => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#092346]">
      {/* Navigation Bar */}
      <nav className="bg-transparent bg-opacity-0  sticky top-0 z-50">
        <div className="container w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-white font-bold text-4xl md:text-2xl">
                <span className="text-blue-400">▼</span> VULTR
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(menuItem.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => toggleMenu(menuItem.id)}
                    className="flex items-center space-x-1 px-3 py-2 text-white hover:text-grey-300 transition-all duration-300 bg-transparent border-none cursor-pointer text-sm font-medium rounded-lg"
                  >
                    <span>{menuItem.label}</span>
                    <div className="transition-transform duration-300">
                      {openMenu === menuItem.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {openMenu === menuItem.id && (
                    <div
                      className="absolute top-full right-0 mt-2 w-80 md:w-96 lg:w-[680px] bg-gray-50 bg-opacity-100 backdrop-blur-sm rounded-xl shadow-2xl text-gray-900 z-50 overflow-hidden animate-fadeIn overflow-x-hidden"
                      onMouseEnter={() => clearTimeout(timeoutRef.current)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="dropdown-navbar cursor-auto">
                        <div className="bg-white w-fit grid grid-cols-3 gap-4 mx-auto mt-10 p-2 rounded-lg shadow-2xl">
                          {menuItem.items.map((item, index) => (
                            <div
                              key={index}
                              className={`p-3 rounded-lg transition-all duration-300 hover:bg-opacity-20 cursor-pointer ${
                                item.href ? 'hover:scale-105' : ''
                              }`}
                            >
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="block text-gray-600 transition-colors duration-300"
                                  onClick={closeAllMenus}
                                >
                                  <h4 className="font-semibold text-sm md:text-base leading-tight mb-1">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </a>
                              ) : (
                                <div className="text-white">
                                  <h4 className="font-semibold text-sm md:text-base leading-tight mb-1">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Home Link */}
              <a
                href="/"
                className="px-3 py-2 text-white hover:text-blue-300 transition-all duration-300 bg-transparent border-none cursor-pointer text-sm font-medium rounded-lg hover:bg-blue-600 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                الرئيسية
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm border-t border-gray-700">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((menuItem) => (
                <div key={menuItem.id} className="border-b border-gray-700 pb-2">
                  <button
                    onClick={() => toggleMenu(menuItem.id)}
                    className="flex items-center justify-between w-full px-3 py-2 text-white hover:text-blue-300 transition-colors duration-300"
                  >
                    <span className="font-medium">{menuItem.label}</span>
                    <div className="transition-transform duration-300">
                      {openMenu === menuItem.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  
                  {openMenu === menuItem.id && (
                    <div className="mt-2 ml-4 space-y-2">
                      {menuItem.items.map((item, index) => (
                        <div key={index} className="pl-4">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="block py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                              onClick={closeAllMenus}
                            >
                              {item.title}
                            </a>
                          ) : (
                            <div className="py-2 text-gray-400 text-sm">
                              {item.title}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-300 font-medium"
                onClick={closeAllMenus}
              >
                الرئيسية
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
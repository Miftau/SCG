import { Smile, Clock, Globe, MessageCircle, MapPin, PowerCircle, PowerIcon, Power, PowerSquareIcon,  } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const AchievementsTimeline = () => {
  const achievements = [
    {
      date: "2008 - 03 - 03",
      text: "تأسست علي يد علي المسيري وتبني حسن وبدأت عملها متخصصة في خدمات الاستضافة بطريق محدود من 3 أفراد فقط",
    },
    {
      date: "2008 - 03 - 03",
      text: "تأسست علي يد علي المسيري وتبني حسن وبدأت عملها متخصصة في خدمات الاستضافة بطريق محدود من 3 أفراد فقط",
    },
    {
      date: "2008 - 03 - 03",
      text: "تأسست علي يد علي المسيري وتبني حسن وبدأت عملها متخصصة في خدمات الاستضافة بطريق محدود من 3 أفراد فقط",
    },
    {
      date: "2008 - 03 - 03",
      text: "تأسست علي يد علي المسيري وتبني حسن وبدأت عملها متخصصة في خدمات الاستضافة بطريق محدود من 3 أفراد فقط",
    },
    {
      date: "2008 - 03 - 03",
      text: "تأسست علي يد علي المسيري وتبني حسن وبدأت عملها متخصصة في خدمات الاستضافة بطريق محدود من 3 أفراد فقط",
    },
  ];
   const stats = [
     {
      title: "مراكز المعلومات",
      value: "5",
      icon: MapPin,
    },
    {
      title:"الاستقلالية",
      value: "99.9%",
      icon: MessageCircle,
    },
    {
      title: "المواقع المستضافة",
      value: "1500k",
      icon: Globe,
    },
    {
      title:"ضمان وقت التشغيل",
      value: "99.9%",
      icon: Power,
    },
     {
      title: "رضا العملاء",
      value: "100%",
      icon: Smile,
    },
   
  ]

  return (
    <div className="py-12 px-4"> {/* <-- min-h-screen تمت إزالتها */}
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">إنجازاتنا</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {achievements.map((achievement, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute right-1/2 transform translate-x-1/2 w-6 h-6 bg-[#480689] rounded-full border-4 z-10"></div>

              {/* Content */}
              <div className={`flex ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className={`md:w-6/12 ${index % 2 === 0 ? "sm:pr-6" : "sm:pl-6"}`}>
                  <div className=" p-4">
                    <div className={`text-lg font-bold mb-2 pb-1 ${index % 2 === 0 ? "text-right" : "text-left" }`}>
                      { achievement.date}
                    </div>
                    <p className="text-black leading-relaxed">{achievement.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="flex gap-4 mb-4">
                  <IconComponent className="w-5 h-5 text-black ml-2 flex-shrink-0" />
                  <h3 className=" text-black">{stat.title}</h3>
                </div>
                <div className="text-4xl font-semibold  text-gray-900 mb-2">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default AchievementsTimeline;

import { Smile, Clock, Globe, MessageCircle, MapPin } from "lucide-react"
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
      title: "رضا العملاء",
      value: "100%",
      icon: Smile,
    },
    {
      title: "الوقت المتاح مضمون",
      value: "99.9%",
      icon: Clock,
    },
    {
      title: "المواقع المستضافة",
      value: "1500k",
      icon: Globe,
    },
    {
      title: "الاستقلالية",
      value: "99.9%",
      icon: MessageCircle,
    },
    {
      title: "مراكز المعلومات",
      value: "5",
      icon: MapPin,
    },
  ]

  return (
    <div className="py-12 px-4"> {/* <-- min-h-screen تمت إزالتها */}
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">إنجازاتنا</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {achievements.map((achievement, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-[#f8f6f3] z-10"></div>

              {/* Content */}
              <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-6" : "pl-6"}`}>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
                      {achievement.date}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{achievement.text}</p>
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600 text-right flex-1">{stat.title}</h3>
                  <IconComponent className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default AchievementsTimeline;

import { Building2, Award, MapPin, Users } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "1948", label: "سنة التأسيس" },
    { icon: MapPin, number: "13", label: "شركة تابعة" },
    { icon: Award, number: "70+", label: "سنة خبرة" },
    { icon: Users, number: "12B", label: "جنيه مبيعات" },
  ]
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-5">شركة العتال القابضة للتطوير العقاري</h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              تأسست عام ١٩٤٨ كشركة عائلية وتطورت لتصبح أحد أكبر كيانات التطوير العقاري في مصر. تضم ١٣ شركة تابعة تغطي كافة أنواع المقاولات والتطوير. شيّدت سفارات ماليزيا وقطر والبحرين وأنجولا في مصر، وحققت مبيعات تجاوزت ١٢ مليار جنيه في مشروع واحد.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 border border-primary/20">
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-foreground">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

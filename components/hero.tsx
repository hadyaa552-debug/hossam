"use client"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="relative flex items-center overflow-hidden" style={{minHeight:"100vh"}}>
      <div className="absolute inset-0">
        <img src="https://prod-images.nawy.com/processed/inventory/compounds/1223/gallery/cover_16_9/high.webp"
          alt="El Attal Holding" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/50 to-white/15" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className={`text-right space-y-5 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <p className="text-primary font-bold tracking-widest text-sm uppercase mb-3">El Attal Holding • منذ ١٩٤٨</p>
              <h1 className="text-4xl lg:text-5xl font-black text-foreground leading-tight mb-2">
                The 101<br/>
                <span className="text-primary text-2xl lg:text-3xl font-bold">Park Lane • West Leaves</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg mr-auto lg:mr-0">
              ثلاثة مشاريع استثنائية من أعرق شركات التطوير العقاري في مصر — ٧٠+ سنة من الخبرة والإبداع
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              {["مدينة المستقبل", "العاصمة الإدارية", "السادس من أكتوبر", "١٠٪ مقدم"].map((tag, i) => (
                <span key={i} className="border border-primary/40 text-primary bg-primary/5 px-4 py-1.5 text-sm font-medium">{tag}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-border">
              {[{ value: "1948", label: "سنة التأسيس" }, { value: "3", label: "مشاريع نشطة" }, { value: "70+", label: "سنة خبرة" }].map((s, i) => (
                <div key={i} className="text-right border-r border-border pr-4 first:border-r-0 first:pr-0">
                  <div className="text-3xl font-black text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

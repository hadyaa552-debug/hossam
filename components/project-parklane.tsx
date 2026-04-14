"use client"

export default function ProjectParklane() {
  const phone = "+201109727449"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع Park Lane من El Attal Holding وأريد معرفة المزيد")}`

  const details = [
    { label: "الموقع", value: "العاصمة الإدارية – حي R7" },
    { label: "الوحدات", value: "شقق • دوبلكس • تجاري وإداري وطبي" },
    { label: "الستايل", value: "تراث هولندي كلاسيكي" },
    { label: "المول", value: "Pavilion Mall – تجاري وطبي وإداري" },
    { label: "السداد", value: "٧٪ مقدم | تقسيط ٨ سنوات" },
    { label: "قريب من", value: "الحي الحكومي • المحور المركزي" },
  ]

  return (
    <section id="parklane" className="bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-20 lg:py-28">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4 border border-primary/20">العاصمة الإدارية – R7 – تصميم هولندي كلاسيكي</span>
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-3">Park Lane</h2>
          <p className="text-xl text-muted-foreground">El Attal Holding – ٢٦ فدان – العاصمة الإدارية</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12">
          <img src="https://prod-images.nawy.com/processed/compound_image/image/2344/default.webp" alt="Park Lane"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-black">Park Lane</p>
            <p className="text-white/75">العاصمة الإدارية – R7</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="text-right space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              Park Lane كمبوند راقٍ في حي R7 بالعاصمة الإدارية على ٢٦ فداناً. تصميم مستوحى من التراث الهولندي الكلاسيكي — واجهات أنيقة، شوارع عريضة، ٨٠٪ مساحات خضراء. يضم Pavilion Mall بوحدات تجارية وطبية وإدارية. اسم المشروع مأخوذ من شارع Park Lane الشهير في لندن.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[{ v: "26", l: "فدان" }, { v: "80%", l: "مساحات خضراء" }, { v: "7%", l: "مقدم – ٨ سنوات" }].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5 border border-border text-center">
                  <div className="text-2xl font-black text-primary mb-1">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-0">
            {details.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold text-sm">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["Pavilion Mall", "Stream Piazza", "Clubhouse", "Skyline Lounge", "Wellness Center & Spa", "Boutique Cinema", "مسجد", "أمن ٢٤/٧"].map((f, i) => (
            <div key={i} className="bg-background p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-foreground mb-5 text-center">معرض الصور</h3>
          <div className="grid grid-cols-3 gap-3">
            {[2344, 2345, 2346, 2347, 2348, 2350].map((id, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={`https://prod-images.nawy.com/processed/compound_image/image/${id}/default.webp`}
                  alt={`Park Lane ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-foreground p-8 lg:p-10 text-center text-background">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في Park Lane</h3>
          <p className="opacity-60 mb-6 text-sm">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 font-bold hover:bg-primary/90 transition-colors">واتساب</a>
            <a href={`tel:${phone}`} className="border-2 border-background/40 text-background px-8 py-3 font-bold hover:bg-background/10 transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}

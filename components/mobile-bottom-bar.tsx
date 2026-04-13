"use client"
const phone = "201119770408"
const msg = encodeURIComponent("مرحباً، أنا مهتم بمشاريع El Attal Holding وأريد معرفة المزيد")

export default function MobileBottomBar() {
  const handleCall = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({ event: "phone_click", click_type: "mobile_bar" })
    }
  }
  const handleWA = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({ event: "whatsapp_click", click_type: "mobile_bar" })
    }
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 border-t border-border shadow-lg">
      <a href={`tel:+${phone}`} onClick={handleCall}
        className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-bold text-sm">
        📞 اتصل الآن
      </a>
      <a href={`https://wa.me/${phone}?text=${msg}`} target="_blank" rel="noopener noreferrer" onClick={handleWA}
        className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-bold text-sm">
        💬 واتساب
      </a>
    </div>
  )
}

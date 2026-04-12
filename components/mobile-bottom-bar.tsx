export default function MobileBottomBar() {
  const msg = encodeURIComponent("مرحباً، أنا مهتم بمشاريع El Attal Holding وأريد معرفة المزيد")
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 border-t border-border shadow-lg">
      <a href="tel:+201119770408" className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-bold text-sm">
        📞 اتصل الآن
      </a>
      <a href={`https://wa.me/201119770408?text=${msg}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-bold text-sm">
        💬 واتساب
      </a>
    </div>
  )
}

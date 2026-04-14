"use client"
import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

const navItems = [
  { name: "The 101", id: "the101" },
  { name: "Park Lane", id: "parklane" },
  { name: "West Leaves", id: "westleaves" },
  { name: "عن الشركة", id: "about" },
  { name: "تواصل معنا", id: "contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-lg shadow-sm border-b border-border" : "bg-white/95 backdrop-blur-md shadow-sm"}`}>
      <div className="container mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="text-lg font-black tracking-wide text-foreground">El Attal Holding</span>
          <span className="text-xs text-primary tracking-widest font-semibold">منذ ١٩٤٨</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollTo(e, item.id)}
              className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs text-muted-foreground">للاستفسار والحجز</span>
            <a href="tel:+201109727449" className="text-base font-bold text-foreground hover:text-primary" dir="ltr">01109727449</a>
          </div>
          <a href="tel:+201109727449" className="sm:hidden bg-primary text-primary-foreground p-2.5">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}

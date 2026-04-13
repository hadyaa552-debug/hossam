"use client"
import { useEffect } from "react"
import Link from "next/link"

export default function ThankYou() {
  useEffect(() => {
    // GTM dataLayer push — thank you page
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "thank_you_page",
        page: "thank_you",
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto space-y-6">
        {/* Icon */}
        <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h1 className="text-3xl font-black text-foreground mb-3">شكراً لك!</h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            تم استلام طلبك بنجاح. سيتواصل معك أحد مستشاري المبيعات في أقرب وقت ممكن.
          </p>
        </div>

        <div className="bg-muted/30 border border-border p-5 text-right space-y-3">
          <p className="font-bold text-foreground text-sm">أو تواصل معنا مباشرة:</p>
          <a href="tel:+201119770408" className="flex items-center justify-between py-2 border-b border-border hover:text-primary transition-colors">
            <span className="font-bold" dir="ltr">01119770408</span>
            <span className="text-sm text-muted-foreground">اتصال مباشر</span>
          </a>
          <a href="https://wa.me/201119770408" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between py-2 hover:text-primary transition-colors">
            <span className="font-bold text-green-600">واتساب</span>
            <span className="text-sm text-muted-foreground">رد فوري</span>
          </a>
        </div>

        <Link href="/" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold hover:bg-primary/90 transition-colors text-sm">
          العودة للرئيسية
        </Link>
      </div>
    </main>
  )
}

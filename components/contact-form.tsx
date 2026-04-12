"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          "المشروع": formData.project || "لم يتم التحديد",
          _subject: "استفسار جديد – El Attal Holding",
          _captcha: "false",
          _template: "table",
          _cc: "Info@nurlinebrokerage.com",
        }),
      })
      if (res.ok) {
        toast({ title: "تم الإرسال!", description: "سنتواصل معك في أقرب وقت" })
        setFormData({ name: "", phone: "", project: "" })
      } else throw new Error()
    } catch {
      toast({ title: "خطأ", description: "يرجى المحاولة مرة أخرى", variant: "destructive" })
    } finally { setLoading(false) }
  }

  return (
    <Card className="shadow-xl border border-border bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-foreground text-center">احجز استشارة مجانية</CardTitle>
        <p className="text-sm text-muted-foreground text-center">سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input placeholder="الاسم الكريم *" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required className="text-right h-11" />
          <Input type="tel" placeholder="رقم الهاتف *" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required className="text-right h-11" dir="ltr" />
          <Select value={formData.project} onValueChange={(v) => setFormData({ ...formData, project: v })}>
            <SelectTrigger className="h-11 text-right w-full bg-white border border-input">
              <SelectValue placeholder="المشروع المهتم به *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="the101">The 101 – مدينة المستقبل</SelectItem>
              <SelectItem value="parklane">Park Lane – العاصمة الإدارية</SelectItem>
              <SelectItem value="westleaves">West Leaves – السادس من أكتوبر</SelectItem>
              <SelectItem value="all">أكثر من مشروع</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" disabled={loading}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">
            {loading ? "جاري الإرسال..." : "إرسال الطلب"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

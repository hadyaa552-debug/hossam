import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectThe101 from "@/components/project-the101"
import ProjectParklane from "@/components/project-parklane"
import ProjectWestLeaves from "@/components/project-westleaves"
import AboutDeveloper from "@/components/about-developer"
import ContactForm from "@/components/contact-form"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectThe101 />
      <ProjectParklane />
      <ProjectWestLeaves />
      <AboutDeveloper />

      <section id="contact" className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">تواصل معنا</p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">نحن هنا لمساعدتك</h2>
            <p className="text-muted-foreground text-sm">سجل اهتمامك وسيتواصل معك فريقنا في أقرب وقت</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-right space-y-4">
              <a href="tel:+201109727449" className="text-2xl font-black text-foreground hover:text-primary block" dir="ltr">01109727449</a>
              <div className="space-y-0">
                {[
                  { name: "The 101", loc: "مدينة المستقبل – Plot 1 خلف البوابة الرئيسية" },
                  { name: "Park Lane", loc: "العاصمة الإدارية – حي R7" },
                  { name: "West Leaves", loc: "السادس من أكتوبر" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-border">
                    <div>
                      <p className="font-bold text-foreground text-sm">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.loc}</p>
                    </div>
                    <div className="w-2 h-2 bg-primary flex-shrink-0 mr-auto" />
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}

import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "El Attal Holding | The 101 • Park Lane • West Leaves",
  description: "اكتشف مشاريع El Attal Holding — The 101 في مدينة المستقبل، Park Lane في العاصمة الإدارية، وWest Leaves في السادس من أكتوبر",
  keywords: "El Attal Holding, The 101, Park Lane, West Leaves, مدينة المستقبل, العاصمة الإدارية, السادس من أكتوبر",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59D87C99"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59D87C99');
        `}</Script>

        {/* Google Ads */}
        <Script id="gtag-lib" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-17039137293" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17039137293');
        `}</Script>
      </body>
    </html>
  )
}

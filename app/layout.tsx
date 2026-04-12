import type { Metadata } from "next"
import { Cairo } from "next/font/google"
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "../../style/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} font-inter bg-primary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

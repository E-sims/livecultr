import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "../../style/globals.css"

export const metadata = {
  title: {
    default: "Live Cultr digital agency",
    template: "%s | Live Cultr",
  },
  description:
    "Live Cultr is a digital marketing agency and creative team that pushes boundaries to produce inspiring experiences that move your audience. We offer creative services ranging from ideation to design and development. Hire our team today!",
}

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

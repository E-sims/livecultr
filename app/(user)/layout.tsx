import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "../../style/globals.css"
import { previewData } from "next/headers"

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
  if (previewData()) {
    return (
      <html lang="en">
        <head />
        <body className={`${inter.variable} font-inter bg-primary`}>
          <Header />
          {children}
          <Footer />
          {/* <div className="sticky bottom-4 left-4 bg-teal-400 text-teal-900 rounded-full px-4 py-2 z-50 opacity-50 max-w-fit">
            Preview Mode
          </div> */}
        </body>
      </html>
    )
  } else {
    return (
      <html lang="en">
        <head />
        <body className={`${inter.variable} font-inter bg-primary`}>
          <Header />
          {children}
          <Footer />
          {/* <div className="absolute bottom-4 left-4 bg-red-300 text-red-900 rounded-full px-4 py-2 z-50 opacity-50 max-w-fit">
            Not in Preview Mode
          </div> */}
        </body>
      </html>
    )
  }
}

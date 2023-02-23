import { client } from "../lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import LogoClouds from "@/components/LogoClouds"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

function getProjects() {
  return client.fetch(groq`
    *[_type == "project"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      content,
    }
  `)
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="bg-[#313748] relative flex flex-col w-full h-full min-h-screen overflow-hidden">
      {/*<div className="flex flex-row w-auto">
        <h1>Live Cultr Projects</h1>

        {projects.map((project) => {
          return (
            <div className="project" key={project._id}>
              <h2>{project.name}</h2>
              <Image
                src={project.image}
                alt={project.alt}
                width={300}
                height={500}
              />
              <PortableText value={project.content} />
            </div>
          )
        })}
      </div>
      */}

      <Header />
      <Hero />
      <LogoClouds />
      {/* About */}

      <Footer />
    </main>
  )
}

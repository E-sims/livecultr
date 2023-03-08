import { client } from "../../lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Hero from "@/components/Hero"
import LogoClouds from "@/components/LogoClouds"
import TeamIntro from "@/components/TeamIntro"
import RecentProjects from "@/components/RecentProjects"

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
    <div className="bg-primary mx-auto snap-y snap-mandatory z-0">
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
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="logos" className="snap-center">
        <LogoClouds />
      </section>
      <section id="team" className="snap-center">
        <TeamIntro />
      </section>
      <section id="projects" className="snap-center">
        <RecentProjects />
      </section>
      {/* About */}
    </div>
  )
}

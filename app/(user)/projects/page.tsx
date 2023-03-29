import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import HoverCard from "@/components/HoverCard"

export const metadata = {
  title: "Web design and marketing projects",
}

function getProjects() {
  return client.fetch(groq`
    *[_type == "project"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      content[0],
    }
  `)
}

type Props = {}

type Project = {
  _id: string
  name: string
  description: string
  slug: string
  image: string
  alt: string
  content?: any
}

async function ProjectsPage({}: Props) {
  const projects = await getProjects()

  return (
    <div className="flex flex-col w-full mx-auto items-center justify-center py-16 px-4">
      <div></div>
      <h1 className="text-slate-50 text-4xl lg:text-6xl mb-6">
        Live Cultr Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto w-full max-w-5xl gap-4">
        {projects.map((project: Project) => {
          return (
            <HoverCard
              key={project._id}
              _id={project._id}
              name={project.name}
              slug={project.slug}
              image={project.image}
              alt={project.alt}
              description={project.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsPage

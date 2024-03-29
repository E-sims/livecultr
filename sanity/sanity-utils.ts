import { client } from "@/lib/sanity.client"
import { Project } from "@/types/Project"
import { groq } from "next-sanity"

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`
     *[_type == "project"]{
       _id,
       _createdAt,
       name,
       description,
       "slug": slug.current,
       "image": image.asset->url,
       url,
       content
     }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`
     *[_type == "project" && slug.current == $slug][0]{
       _id,
       _createdAt,
       name,
       description,
       "slug": slug.current,
       "image": image.asset->url,
       url,
       content
     }`,
    { slug }
  )
}

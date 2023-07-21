import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string
  _createdAt: Date
  name: string
  description: string
  slug: string
  image: string
  imageAlt: string
  url: string
  content: PortableTextBlock[]
}

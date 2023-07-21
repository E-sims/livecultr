import { getProjects } from "@/sanity/sanity-utils"
import HoverCard from "./HoverCard"

type Props = {}

const ProjectList = async (props: Props) => {
  const projects = await getProjects()
  return (
    <ul>
      {projects.map((project) => {
        return (
          <li key={project._id}>
            <HoverCard
              _id={project._id}
              name={project.name}
              slug={project.slug}
              image={project.image}
              imageAlt={project.imageAlt}
              description={project.description}
              _createdAt={project._createdAt}
              url={project.url}
              content={project.content}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectList

"use client"

import { getProjects } from "@/sanity/sanity-utils"
import { motion } from "framer-motion"
import ProjectList from "./ProjectList"

type Props = {}

async function RecentProjects(props: Props) {
  const projects = await getProjects()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-full max-w-full mx-auto relative flex flex-col md:flex-row overflow-hidden text-left items-center justify-evenly py-28"
    >
      <div className="pl-12">
        <h1 className="text-[2.8rem] leading-[1.12] xl:leading-[1.02] md:text-[3.5rem] xl:text-[4rem] text-slate-200 font-semibold tracking-tighter mb-5">
          Recent Projects
        </h1>
      </div>
      <div className="w-full h-auto flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory relative">
        <ProjectList />
      </div>
    </motion.div>
  )
}

export default RecentProjects

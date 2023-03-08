"use client"

import React from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

type Props = {}

function RecentProjects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-full min-h-screen max-w-full mx-auto relative flex flex-col md:flex-row overflow-hidden text-left items-center justify-evenly"
    >
      <h3 className="relative pt-24 text-2xl text-sand font-medium">
        Recent Projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </motion.div>
  )
}

export default RecentProjects

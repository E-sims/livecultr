import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

type Props = {}

function ProjectCard({}: Props) {
  return (
    <article className="text-slate-100 p-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-600 hover:opacity-100 opacity-40 transition-opacity duration-150 cursor-pointer overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-fit p-0 rounded-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
          alt="project image"
          width={1018}
          height={764}
          className="w-32 h-32 lg:h-[200px] lg:w-[200px] rounded-full object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10 flex flex-col items-center justify-center">
        <h4 className="text-4xl font-light">Company Name</h4>
        <p className="font-semibold text-2xl mt-1">Project Name</p>
        <div className="flex space-x-2 my-2">
          <div className="inline-flex space-x-6">
            <span className="rounded-full bg-sand/10 px-3 py-1 text-sm font-semibold leading-6 text-sand ring-1 ring-inset ring-sand/20">
              Web Design
            </span>
          </div>
          <div className="inline-flex space-x-6">
            <span className="rounded-full bg-sand/10 px-3 py-1 text-sm font-semibold leading-6 text-sand ring-1 ring-inset ring-sand/20">
              Branding
            </span>
          </div>
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-slate-300">December 2022</p>
        <p className="text-lg text-center lg:max-w-lg">
          &quot;Working with Live Cultr really allowed me to bring my vision to
          life. The team is always helpful! Not to mention super talented.”
        </p>
        <div className="flex flex-row space-x-2 mt-4">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80"
            alt="client avatar"
            width={611}
            height={764}
            className="rounded-full h-16 w-16 object-cover object-center"
          />
          <div className="flex flex-col space-y-1">
            <p>Client Name</p>
            <p>Title</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

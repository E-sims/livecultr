"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons"

type Props = {}

const logos = [
  {
    key: 1,
    name: "Transistor",
    src: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
  },
  {
    key: 2,
    name: "Reform",
    src: "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
  },
  {
    key: 3,
    name: "Tuple",
    src: "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
  },
  {
    key: 4,
    name: "SavvyCal",
    src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
  },
  {
    key: 5,
    name: "Statamic",
    src: "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg",
  },
]

function LogoClouds({}: Props) {
  return (
    <div className="bg-primary py-24 sm:py-32 border-t-2 border-slate-200/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <h2 className="text-2xl font-semibold leading-8 text-slate-100">
            Could you use help with any of these?
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            {logos.map((logo) => {
              return (
                <Image
                  key={logo.key}
                  className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                  src={logo.src}
                  alt={logo.name}
                  width={158}
                  height={48}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LogoClouds

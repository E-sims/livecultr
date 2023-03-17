"use client"

import { BoltIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Our web design service is the perfect solution for small to medium businesses who are looking to create a modern, professional website.",
  },
  {
    id: "02",
    title: "Development",
    description:
      "During development, we follow best practices with technical detail. We provide you the flexibility to continue with our recurring marketing plan packages.",
  },
  {
    id: "03",
    title: "Marketing",
    description:
      "Every business needs marketing! Don't be left behind by your competition. We focus on monitoring your market as well as competitors.",
  },
]

type Props = {}

function Services({}: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center snap-center mx-auto py-32 bg-slate-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="w-full flex flex-col lg:flex-row px-4 lg:items-center mb-20">
          <h3 className="max-w-[700px] text-3xl md:text-6xl lg:text-7xl mb-8 lg:m-0 font-medium tracking-tight text-primary lg:self-start">
            We&apos;re the agency that builds brands
          </h3>
          <Link
            href="#"
            className="rounded-full flex flex-row items-center justify-center gap-2 bg-gradient-to-tr from-[#e5887e] via-[#FED0AB] to-[#FED0AB] px-6 py-4 text-xl font-semibold capitalize leading-7 text-[#313748] shadow-sm hover:bg-[#FED0AB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FED0AB] h-fit w-fit"
          >
            <BoltIcon className="text-primary h-5 w-auto" />
            Get Started
          </Link>
        </div>
        <ul className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-auto px-4 lg:px-6">
          {services.map((service) => {
            return (
              <li
                key={service.id}
                className="w-full min-h-[1/3vh] text-slate-200 bg-primary rounded-lg p-4 pb-16 shadow-sm relative"
              >
                <h4 className="font-semibold text-2xl mb-4">{service.title}</h4>
                <p className="text-lg mb-8 text-slate-300 max-w-[70%] lg:max-w-full">
                  {service.description}
                </p>
                <svg
                  className="h-12 w-12 absolute bottom-4"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="48" cy="48" r="48" fill="#FED0AB" />
                  <path
                    d="M63.9219 39.0624C63.9177 39.0624 63.9138 39.0608 63.9108 39.0579C63.9079 39.0549 63.9063 39.051 63.9063 39.0468C63.6804 38.6623 63.357 38.3443 62.9688 38.1249L49.2188 30.3906C48.8462 30.1826 48.4267 30.0734 48 30.0734C47.5733 30.0734 47.1538 30.1826 46.7813 30.3906L33.0313 38.1249C32.643 38.3443 32.3196 38.6623 32.0938 39.0468C32.0938 39.051 32.0921 39.0549 32.0892 39.0579C32.0863 39.0608 32.0823 39.0624 32.0781 39.0624V39.0937C31.8621 39.4577 31.7487 39.8735 31.75 40.2968V55.7031C31.7508 56.1485 31.8698 56.5857 32.0949 56.97C32.32 57.3543 32.6432 57.672 33.0313 57.8906L46.7813 65.6249C47.1274 65.8138 47.5123 65.9207 47.9063 65.9374H48.125C48.509 65.9204 48.8837 65.8134 49.2188 65.6249L62.9688 57.8906C63.3569 57.672 63.68 57.3543 63.9051 56.97C64.1302 56.5857 64.2492 56.1485 64.25 55.7031V40.2968C64.2523 39.8635 64.139 39.4374 63.9219 39.0624ZM48 32.5624L60.4531 39.5624L55.6719 42.2812L43.0625 35.3281L48 32.5624ZM48.1406 46.5624L35.5625 39.5624L40.5 36.7812L53.125 43.7343L48.1406 46.5624ZM49.2656 62.7343L49.3906 48.7343L54.4063 45.8749V51.8281C54.4063 52.1596 54.538 52.4775 54.7724 52.7119C55.0068 52.9464 55.3247 53.0781 55.6563 53.0781C55.9878 53.0781 56.3057 52.9464 56.5401 52.7119C56.7746 52.4775 56.9063 52.1596 56.9063 51.8281V44.4531L61.75 41.7031V55.7031L49.2656 62.7343Z"
                    fill="#313748"
                  />
                </svg>
              </li>
            )
          })}
        </ul>
      </motion.div>
    </div>
  )
}

export default Services

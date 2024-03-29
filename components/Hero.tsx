"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BoltIcon } from "@heroicons/react/24/outline"
import LogoClouds from "./LogoClouds"

type Props = {}

function Hero({}: Props) {
  return (
    <div className="relative isolate overflow-hidden min-h-screen bg-primary w-full">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#485168" />
            <stop offset={1} stopColor="#75819f" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-28 lg:px-8">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
        >
          <div className="mt-16 sm:mt-24 lg:mt-0">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-sand/10 px-3 py-1 text-sm font-semibold leading-6 text-sand ring-1 ring-inset ring-sand/20">
                A Digital Agency
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold text-slate-50 sm:text-6xl lg:text-7xl">
            Going beyond the{" "}
            <span className="bg-gradient-to-r from-sand to-peach bg-clip-text text-transparent">
              ordinary
            </span>
          </h1>
          <p className="mt-6 text-2xl leading-8 text-slate-300">
            We&apos;re the agency that pushes boundaries to find the most
            original, most thoughtful, and most compelling ways to fulfill your
            vision.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#"
              className="rounded-full flex flex-row items-center justify-center gap-2 bg-gradient-to-tr from-[#e5887e] via-[#FED0AB] to-[#FED0AB] px-4 py-2 text-lg font-semibold capitalize leading-7 text-[#313748] shadow-sm hover:bg-[#FED0AB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FED0AB]"
            >
              <BoltIcon className="text-primary h-4 w-auto" />
              Get Started
            </Link>
          </div>
        </motion.div>
        <div className="mx-auto mt-16 flex justify-center max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
          >
            <Image
              src="/images/social-graphic.webp"
              alt="hero image"
              width={508}
              height={635}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
      <LogoClouds />
    </div>
  )
}

export default Hero

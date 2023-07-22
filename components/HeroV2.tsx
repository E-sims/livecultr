"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BoltIcon } from "@heroicons/react/24/outline"
import Avatars from "./blocks/elements/Avatars"

type Props = {}

function HeroV2({}: Props) {
  return (
    <div className="bg-gradient-to-b from-sand to-primary-50">
    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
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
          }}>
                    <h1 className="text-4xl font-bold text-primary tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                        Transform your business with
                        <div className="relative inline-flex">
                        <span className="bg-gradient-to-tr from-peach via-peach to-sand/80 bg-clip-text text-transparent">Ai Automations.</span>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-primary sm:text-xl md:max-w-3xl lg:max-w-full">The potential for AI and automation to transform businesses is enormous. We specialize in leveraging these innovative technologies to help businesses work smarter, faster, and more efficiently.</p>

                    <div className="mt-10 flex items-center space-x-8">
                        
                        <a href="#" title="" className="inline-flex rounded-full items-center justify-center px-10 py-4 gap-x-2 text-base font-semibold text-primary-50 transition-all duration-200 bg-primary hover:bg-primary-900 focus:bg-primary-900" role="button">
                            <span><BoltIcon className="w-6 h-6 text-primary-50" /></span> Supercharge </a>

                        <a href="#" title="" className="inline-flex items-center text-base font-semibold transition-all duration-200 hover:opacity-80">
                            <Avatars />
                        </a>
                    </div>
                </motion.div>

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
            }}>
                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
</div>

  )
}

export default HeroV2

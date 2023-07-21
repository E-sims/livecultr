"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BoltIcon } from "@heroicons/react/24/outline"
import LogoClouds from "./LogoClouds"
import Avatars from "./blocks/elements/Avatars"

type Props = {}

function Hero({}: Props) {
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
                    <h1 className="text-4xl font-bold text-primary sm:text-6xl lg:text-7xl">
                        Transform Your Business, With
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border border-primary-100"></span>
                            <h1 className="relative text-4xl font-bold text-primary sm:text-6xl lg:text-7xl">AI Automations.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-primary sm:text-xl">The potential for AI and automation to transform businesses is enormous. We specialize in leveraging these innovative technologies to help businesses work smarter, faster, and more efficiently.</p>

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

export default Hero

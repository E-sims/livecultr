"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo"
import Link from "next/link"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"

type Props = {}

const menuLinks = [
  {
    id: "home",
    text: "Home",
    href: "/",
  },
  {
    id: "projects",
    text: "Projects",
    href: "/projects",
  },
  {
    id: "contact",
    text: "Contact",
    href: "/contact",
  },
  {
    id: "about",
    text: "About",
    href: "/about",
  },
]

function Header({}: Props) {
  const [open, setOpen] = useState(false)
  const isOpen = () => {
    setOpen(true)
  }
  const isClose = () => {
    setOpen(false)
  }

  const mItem = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.8,
      },
    },
  }

  return (
    <header className="sticky top-0 w-full mx-auto z-20 backdrop-blur-lg bg-primary/90 border-b-primary-200/10 border-b-1">
      <div className="flex p-4 justify-between max-w-7xl mx-auto items-center">
        <motion.div
          initial={{
            y: -100,
            opacity: 0.5,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center"
        >
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-xl font-semibold text-primary-50 p-0">Live Cultr</p>
        </motion.div>
        <motion.div
          initial={{
            y: -100,
            opacity: 0.5,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="hidden lg:flex flex-row items-center justify-center gap-4"
        >
          {menuLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className="capitalize hidden md:inline-flex text-sm font-semibold leading-6 text-primary-300"
              >
                {link.text}
              </Link>
            )
          })}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="lg:hidden flex flex-row items-center text-primary-300 cursor-pointer"
        >
          {open ? (
            <XMarkIcon
              className="text-primary-300 h-6 w-6 p-1 rounded-full bg-primary"
              onClick={isClose}
            />
          ) : (
            <Bars3BottomRightIcon
              className="text-primary-300 h-6 w-6"
              onClick={isOpen}
            />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={mItem}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <ul>
              {menuLinks.map((link) => {
                return (
                  <motion.li
                    key={link.id}
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="uppercase inline-flex text-2xl md:text-[2vw] font-medium text-primary-300 py-7"
                      onClick={isClose}
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

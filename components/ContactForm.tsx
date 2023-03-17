"use client"

import React from "react"
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  companyName: string
  email: string
  phone: string
  website: string
  message: string
}

type Props = {}

const ContactForm = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData)

  return (
    <div className="relative isolate bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <svg
                className="absolute top-[calc(100%-13rem)] -left-56 w-[72.1875rem] transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                viewBox="0 0 1155 678"
                aria-hidden="true"
              >
                <path
                  fill="url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)"
                  fillOpacity=".2"
                  d="M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z"
                />
                <defs>
                  <linearGradient
                    id="0a9a5302-e517-46c6-85f0-d826aa6a313e"
                    x1="1155.49"
                    x2="-78.208"
                    y1="677.823"
                    y2="203.355"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4F46E5" />
                    <stop offset={1} stopColor="#80CAFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              We&apos;re here when you need us
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Send us your project details. Our team will contact you ASAP.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-sand animate-pulse"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Lavaca St. #721
                  <br />
                  Austin, TX 78751
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-sand animate-pulse"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-slate-50"
                    href="tel:+1 (512) 883-6553"
                  >
                    +1 (512) 883-6553
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-sand animate-pulse"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-slate-50"
                    href="mailto:hello@livecultr.co"
                  >
                    hello@livecultr.co
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="contactLabel">
                  Your name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    className="contactInput"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company-name" className="contactLabel">
                  Company name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("companyName")}
                    type="text"
                    id="company-name"
                    autoComplete="family-name"
                    className="contactInput"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="contactLabel">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    autoComplete="email"
                    className="contactInput"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="contactLabel">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    className="contactInput"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-website" className="contactLabel">
                  Website
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("website")}
                    type="text"
                    id="contact-website"
                    autoComplete="url"
                    className="contactInput"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="contactLabel">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="contactInput"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center w-full">
              <button
                type="submit"
                className="rounded-md bg-sand px-3.5 py-2.5 text-center text-sm font-semibold text-primary shadow-sm hover:bg-sand/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

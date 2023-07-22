import React from 'react'

type Props = {}

function CtaPanel({}: Props) {
  return (
    <div className="bg-primary-50">
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Free Consultation
          <br />
          Simple Startup
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            We offer a free 30-minute consultation to discuss your business needs and how we can help you achieve your goals.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center justify-center rounded-full p-1 bg-gradient-to-tr from-peach to-sand text-sm font-semibold text-primary-50 shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
          >
            <span className="bg-primary-50 text-primary block px-4 py-2 font-semibold rounded-full">Start Now</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CtaPanel
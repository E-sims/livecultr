import React from 'react'

type Props = {}

function CtaBlurBg({}: Props) {
  return (
    <section className="bg-primary-950 py-32 relative isolate">
        <div className="relative isolate -z-10 my-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 sm:bg-primary-50/10 px-6 py-16 sm:ring-1 sm:ring-primary-50/20 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-[396px] w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1633311905139-7b6088a69e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
                alt=""
                />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-primary-50 sm:text-4xl">Let the journey begin</h2>
                <p className="mt-6 text-lg leading-8 text-primary-300">
                    We offer a free 30-minute consultation to discuss your business needs and how we can help you achieve your goals.
                </p>
                <div className="mt-10 flex items-center justify-start">
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
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
            >
            <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80ee] to-[#e54663] opacity-25"
            style={{
                clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            />
          </div>
        </div>
    </section>
  )
}

export default CtaBlurBg
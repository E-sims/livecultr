import React from 'react'

const steps = [
    {
        id: "1",
        title: "Free Discovery",
        description: "Let's connect and determine how ai & automation can go to work for your business."
    },
    {
        id: "2",
        title: "Build",
        description: "Using the disovery as our roadmap, our team go to work building out the tools and integrations."
    },
    {
        id: "3",
        title: "Release & Launch",
        description: "We'll work with you to ensure a smooth launch and provide ongoing support."
    }
]

type Props = {}

function ThreeSteps({}: Props) {
  return (
    <section className="py-10 bg-gradient-to-b to-primary sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-primary-50 sm:text-4xl lg:text-5xl">How does it work?</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-primary-200">We focus on efficiency and maximizing our resources to provide the best experience and value to our clients</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-[90%] mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                {steps.map((step) => { 
                    return (
                        <div key={step.id}>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary border-2 border-sand rounded-full shadow">
                                <span className="text-xl font-semibold text-sand"> {step.id} </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-primary-50 md:mt-10">{step.title}</h3>
                            <p className="mt-4 text-base text-primary-200">{step.description}</p>
                        </div>
                    )
                 })}
            </div>
        </div>
    </div>
</section>

  )
}

export default ThreeSteps
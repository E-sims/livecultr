import Image from "next/image"
import React from "react"

type Props = {}

function TeamIntro({}: Props) {
  return (
    <div className="min-h-screen w-full mx-auto flex flex-row items-center justify-center md:py-28 bg-slate-100">
      <div className="mx-auto max-w-7xl md:px-4">
        <ul className="grid grid-cols-1 md:grid-cols-6 grid-flow-row md:gap-2 overflow-hidden">
          <li className="col-span-1 md:col-span-3 flex items-center md:rounded-lg justify-start bg-sand px-6 py-8 min-h-[25vh] shadow-md">
            <h2 className="text-5xl font-semibold text-primary max-w-md">
              A team of passionate creatives
            </h2>
          </li>
          <li className="col-span-1 md:col-span-3 bg-slate-500 md:rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/live-cultr-team.webp"
              alt="live cultr team image"
              height={1200}
              width={800}
              className="h-full w-auto object-cover object-center"
            />
          </li>
          <li className="col-span-1 md:col-span-2 md:rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/team2.webp"
              alt="live cultr team picture 2"
              height={1380}
              width={2070}
              className="h-full w-auto object-cover object-center"
            />
          </li>
          <li className="col-span-1 md:col-span-4 p-6 md:rounded-lg bg-primary flex flex-col items-center justify-center relative shadow-md">
            <div className="absolute top-6 left-4 w-[20%] py-2 rounded-full bg-sand/20" />
            <p className="text-3xl text-sand pb-8 w-xl">
              Our team of digital creatives are ready to take on your projects -
              from ideation to design and development.
            </p>
            <p className="text-3xl text-sand">
              We are driven by curiosity and joy in our work. We allow you to
              focus on the business while we focus on you.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamIntro

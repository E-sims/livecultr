import Image from "next/image"
import React from "react"

type Props = {}

function TeamIntro({}: Props) {
  return (
    <div className="w-full mx-auto flex flex-row items-center justify-center py-28 bg-slate-100">
      <div className="container mx-auto max-w-7xl">
        <ul className="grid grid-cols-3 grid-flow-row rounded-lg overflow-hidden shadow-md">
          <li className="col-span-2 bg-sand px-6 py-8 min-h-[25vh]">
            <h2 className="text-7xl text-primary max-w-md">
              A team of passionate creatives
            </h2>
          </li>
          <li className="col-span-1 bg-slate-500">
            <Image
              src="/images/live-cultr-team.webp"
              alt="live cultr team image"
              height={600}
              width={400}
              className="h-full w-auto"
            />
          </li>
          <li className="col-span-2">
            <Image
              src="/images/team2.webp"
              alt="live cultr team picture 2"
              height={1380}
              width={2070}
              className="h-full w-auto"
            />
          </li>
          <li className="col-span-1 p-6 bg-slate-50 flex flex-col items-center justify-center">
            <p className="text-xl text-primary pb-8">
              We have a team of digital creatives ready to take on your projects
              - from ideation to design and development.
            </p>
            <p className="text-xl text-primary">
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

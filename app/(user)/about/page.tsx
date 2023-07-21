import Image from "next/image"
import AboutStats from "@/components/blocks/AboutStats"

const stats = [
  {
    id: 1,
    stat: "10+",
    description: "Yrs experience",
  },
  {
    id: 2,
    stat: "100+",
    description: "Projects",
  },
  {
    id: 3,
    stat: "100%",
    description: "Satisfaction",
  },
]

type Props = {}

function AboutPage({}: Props) {
  return (
    <>
      <section className="w-full pt-10 md:pt-16 lg:pt-20 pb-24 lg:pb-36 bg-slate-50">
        <div className="mx-auto flex flex-col max-w-7xl px-5 xl:px-10">
          <div className="overflow-hidden">
            <h1 className="text-[44px] md:text-[56px] lg:text-7xl leading-[48px] font-semibold text-primary mb-6">
              About our agency
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl lg:text-2xl leading-7 text-primary/90 mb-5">
                We value People, Tech & Creativity. We work closely with our
                clients to build a high quality digital presence.
              </p>
            </div>
          </div>
          <div className="relative h-[33vh] md:h-[66vh] w-auto my-10">
            <Image
              width={5120}
              height={2880}
              src="/images/live-cultr-team.webp"
              alt="Team photo"
              className="rounded object-cover object-center"
              placeholder="blur"
              blurDataURL="/images/live-cultr-team.webp"
              priority
            />
          </div>
          {/* <AboutStats stats={stats} /> */}
        </div>
      </section>
      <section className="w-full relative z-20">
        <div className="h-20 max-w-[2px] absolute right-1/2 -my-10 bg-primary-400 mx-auto"></div>
      </section>
    </>
  )
}

export default AboutPage

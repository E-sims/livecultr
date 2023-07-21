"use client"

type Props = {}

function HeadingOne(heading: string) {
  return (
    <h1 className="text-[2.8rem] leading-[1.12] xl:leading-[1.02] md:text-[4rem] xl:text-[4.8rem] text-slate-100 font-semibold tracking-tighter mb-5">
      {heading}
    </h1>
  )
}

export default HeadingOne

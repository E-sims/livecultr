import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/Project"

function HoverCard({ _id, name, slug, image, imageAlt, description }: Project) {
  return (
    <Link
      href={`/projects/${slug}`}
      id={_id}
      className="group relative block bg-black/90 aspect-[3/2] w-full shrink-0 rounded-2xl overflow-hidden"
    >
      <Image
        alt={imageAlt}
        src={image}
        width={640}
        height={400}
        className="absolute inset-0 h-auto w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-sand">
          Client
        </p>

        <p className="text-xl font-bold text-slate-50 sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm md:text-lg text-slate-50">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HoverCard

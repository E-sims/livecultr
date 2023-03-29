import Image from "next/image"
import Link from "next/link"

type Project = {
  _id: string
  name: string
  description: string
  slug: string
  image: string
  alt: string
  content?: any
}

function HoverCard({ _id, name, slug, image, alt, description }: Project) {
  return (
    <Link
      href={slug}
      id={_id}
      className="group relative block bg-black/90 rounded-lg"
    >
      <Image
        alt={alt}
        src={image}
        width={600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-sand">
          Client
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HoverCard

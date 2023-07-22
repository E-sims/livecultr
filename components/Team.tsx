import React from 'react'

const team = [
    {
        name: 'Eric Sims',
        role: 'Founder / CEO',
        imageUrl:
          '/images/esims-headshot.webp',
        location: 'Austin, Texas',
      },
    ]

type Props = {}

function Team({}: Props) {
  return (
    <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary-50 sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-primary-300">
              Meet the team behind Live Cultr.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt={`${person.name} photo`} />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-primary-50">{person.name}</h3>
                <p className="text-base leading-7 text-primary-300">{person.role}</p>
                <p className="text-sm leading-6 text-primary-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Team
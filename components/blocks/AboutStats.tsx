type Stats = [{ id: number; stat: string; description: string }]

const AboutStats = (stats: Stats) => {
  return (
    <ul className="flex flex-col xl:flex-row gap-y-8 justify-center xl:justify-between">
      {stats.map((stat) => (
        <li
          key={stat.id}
          className="flex items-center text-[20px] lg:text-2xl leading-7"
        >
          <span className="mr-5 text-4xl lg:text-5xl leading-tight font-medium text-primary-400">
            {stat.stat}
          </span>
          <span className="text-primary-300">{stat.description}</span>
        </li>
      ))}
    </ul>
  )
}

export default AboutStats

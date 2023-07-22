import {
    AcademicCapIcon,
    CheckCircleIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
  } from '@heroicons/react/20/solid'

const values = [
    {
        name: 'Be world-class.',
        description: 'We believe in using technology for good and in creating a better world for everyone.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Take responsibility.',
        description: 'We believe in taking ownership of our work and in being accountable to our clients and to each other.',
        icon: HandRaisedIcon,
    },
    {
        name: 'Be supportive.',
        description: 'We believe in supporting each other and in lifting each other up to achieve our goals.',
        icon: UserGroupIcon,
    },
    {
        name: 'Always learning.',
        description: 'We believe in continuous learning and in always striving to improve.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Share everything you know.',
        description: 'We believe in sharing our knowledge with each other and with our clients.',
        icon: SparklesIcon,
    },
    {
        name: 'Enjoy downtime.',
        description: 'We believe in taking time to recharge and in enjoying life outside of work.',
        icon: SunIcon,
    },
]

type Props = {}

function OurValues({}: Props) {
  return (
    <div className="mx-auto my-32 max-w-7xl px-6 sm:my-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary-50 sm:text-4xl">Our values</h2>
            <p className="mt-6 text-lg leading-8 text-primary-300">
                We believe in the power of creativity and technology to solve problems, and the power of people to make it happen.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-primary-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-primary-50">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-sand" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
  )
}

export default OurValues
import HeroV2 from "@/components/HeroV2"
import TeamIntro from "@/components/TeamIntro"
import RecentProjects from "@/components/RecentProjects"
import Services from "@/components/Services"

export const metadata = {
  title: "Web design and marketing",
}

export default async function Home() {
  return (
    <div className="bg-primary mx-auto snap-y snap-mandatory z-0">
      <section id="hero" className="snap-start">
        <HeroV2 />
      </section>
      <section id="team" className="snap-center">
        <TeamIntro />
      </section>
      <section id="projects" className="snap-center">
        {/* <RecentProjects /> */}
      </section>
      <section id="services" className="snap-center">
        <Services />
      </section>
    </div>
  )
}

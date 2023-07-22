import HeroV2 from "@/components/HeroV2"
import RecentProjects from "@/components/RecentProjects"
import Services from "@/components/Services"
import AppBubbles from "@/components/AppBubbles"
import ThreeSteps from "@/components/ThreeSteps"
import CtaPanel from "@/components/CtaPanel"

export const metadata = {
  title: "Web design and marketing",
}

export default async function Home() {
  return (
    <div className="bg-primary mx-auto z-0">
        <HeroV2 />
        <AppBubbles />
        <Services />
        <ThreeSteps />
        <CtaPanel />
        {/* <RecentProjects /> */}
    </div>
  )
}

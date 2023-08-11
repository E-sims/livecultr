"use client"
import { motion } from "framer-motion"

type Props = {}

function AppBubbles({}: Props) {
  return (
    <section className="py-24 overflow-hidden bg-primary-50 sm:pt-16 lg:pt-24">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }} className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">Bringing it all together</h2>
                <p className="max-w-xl mx-auto my-4 text-base leading-relaxed text-primary-600">We offer fully customized AI and automation solutions tailored to your unique business needs. Our methodology ensures successful adoption across your entire organization.</p>
            </div>
            <img className="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png" alt="" />
        </motion.div>

    </section>

  )
}

export default AppBubbles
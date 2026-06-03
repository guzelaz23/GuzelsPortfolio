import { Hero } from '@/components/sections/hero'
import { AboutSummary } from '@/components/sections/about-summary'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { TechStack } from '@/components/sections/tech-stack'
import { ContactCTA } from '@/components/sections/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <FeaturedProjects />
      <TechStack />
      <ContactCTA />
    </>
  )
}

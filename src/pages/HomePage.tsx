import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { WhyMarmot } from '../components/WhyMarmot'
import { AboutStats } from '../components/AboutStats'
import { CtaSection } from '../components/CtaSection'
import { Faq } from '../components/Faq'
import { Cities } from '../components/Cities'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyMarmot />
      <AboutStats />
      <CtaSection />
      <Faq />
      <Cities />
    </main>
  )
}

import { Hero } from '../components/Hero'
import { HomeFeaturedWork } from '../components/HomeFeaturedWork'
import { HomeServices } from '../components/HomeServices'
import { WhyMarmot } from '../components/WhyMarmot'
import { HomeProcess } from '../components/HomeProcess'
import { HomeProof } from '../components/HomeProof'
import { Faq } from '../components/Faq'
import { CtaSection } from '../components/CtaSection'

export function HomePage() {
  return (
    <main className="home">
      <Hero />
      <HomeFeaturedWork />
      <HomeServices />
      <WhyMarmot className="home-why-section" />
      <HomeProcess />
      <HomeProof />
      <Faq limit={4} className="home-faq-section" />
      <CtaSection className="home-cta-section" />
    </main>
  )
}

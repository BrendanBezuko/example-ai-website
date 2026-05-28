import { PageHero } from '../components/PageHero'
import { Faq } from '../components/Faq'
import { CtaSection } from '../components/CtaSection'

export function FaqPage() {
  return (
    <main>
      <PageHero
        label="Asked questions"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about websites, marketing, SEO, and working with us."
      />
      <Faq showHeader={false} />
      <CtaSection />
    </main>
  )
}

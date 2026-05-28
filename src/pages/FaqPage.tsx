import { PageHero } from '../components/PageHero'
import { Faq } from '../components/Faq'
import { CtaSection } from '../components/CtaSection'

export function FaqPage() {
  return (
    <main className="page">
      <PageHero
        label="FAQ"
        title="Answers before you reach out"
        subtitle="Common questions about websites, marketing, SEO, and working with our team."
      />
      <Faq showHeader={false} className="page-faq-section" />
      <CtaSection className="home-cta-section" />
    </main>
  )
}

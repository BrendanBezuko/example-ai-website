import { PageHero } from '../components/PageHero'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Privacy',
    body: 'We collect only the information you provide through contact forms and project inquiries. We do not sell your data. Email and phone details are used solely to respond to your requests and deliver services you have agreed to.',
  },
  {
    title: 'Communications',
    body: 'If you opt in to promotional messages, you may unsubscribe at any time. Transactional messages related to active projects may still be sent as needed.',
  },
  {
    title: 'Project terms',
    body: 'Scope, timeline, and payment terms are defined in a written agreement before work begins. Change requests outside agreed scope may affect timeline and cost—we communicate clearly before proceeding.',
  },
  {
    title: 'Support',
    body: 'Post-launch support windows depend on your package. Emergency security issues are prioritized for clients with active maintenance agreements.',
  },
]

export function PoliciesPage() {
  return (
    <main>
      <PageHero
        label="Legal"
        title="Policies & Help"
        subtitle="How we handle your data, communications, and project engagements."
      />

      <section className="section">
        <div className="container content-narrow">
          {sections.map((s) => (
            <div key={s.title} className="policy-block">
              <h2>{s.title}</h2>
              <p className="prose">{s.body}</p>
            </div>
          ))}
          <p className="prose policy-contact">
            Questions? <Link to="/contact">Contact us</Link> and we&apos;ll clarify anything
            not covered here.
          </p>
        </div>
      </section>
    </main>
  )
}

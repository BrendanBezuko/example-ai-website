import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'

export function NotFoundPage() {
  return (
    <main>
      <PageHero label="404" title="Page not found" subtitle="That page doesn't exist or has moved." />
      <section className="section">
        <div className="container section-cta-center">
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}

import { PageHero } from '../components/PageHero'
import { tutorials } from '../data/pages'

export function TutorialsPage() {
  return (
    <main>
      <PageHero
        label="Resources"
        title="Free Tutorials"
        subtitle="Practical guides on web, SEO, and performance—written for small business owners and builders."
      />

      <section className="section">
        <div className="container">
          <div className="tutorials-grid">
            {tutorials.map((tutorial) => (
              <article key={tutorial.title} className="tutorial-card">
                <span className="tutorial-category">{tutorial.category}</span>
                <h2>{tutorial.title}</h2>
                <p>{tutorial.description}</p>
                <button type="button" className="btn btn-outline btn-sm" disabled>
                  Coming soon
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../data/content'

type FaqProps = {
  showHeader?: boolean
  limit?: number
  className?: string
}

export function Faq({ showHeader = true, limit, className = '' }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const items = limit ? faqs.slice(0, limit) : faqs

  return (
    <section id="faq" className={`section faq-section ${className}`.trim()}>
      <div className="container">
        {showHeader && (
          <>
            <p className="section-label">Asked questions</p>
            <h2 className="section-title section-title-left">Common questions</h2>
          </>
        )}

        <ul className="faq-list">
          {items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <li key={faq.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <svg
                    className="faq-chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        {limit && limit < faqs.length && (
          <p className="home-faq-more">
            <Link to="/faq">Read all {faqs.length} questions →</Link>
          </p>
        )}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { faqs } from '../data/content'

export function Faq({ showHeader = true }: { showHeader?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        {showHeader && (
          <>
            <p className="section-label">Asked questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </>
        )}

        <ul className="faq-list">
          {faqs.map((faq, index) => {
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
      </div>
    </section>
  )
}

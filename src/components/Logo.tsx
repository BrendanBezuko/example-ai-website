import { Link } from 'react-router-dom'

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="logo" aria-label="Marmot Marketing home">
      <svg
        className="logo-icon"
        viewBox="0 0 48 48"
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="marmotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill="url(#marmotGrad)" opacity="0.15" />
        <ellipse cx="24" cy="28" rx="14" ry="12" fill="url(#marmotGrad)" />
        <circle cx="18" cy="22" r="2.5" fill="#090909" />
        <circle cx="30" cy="22" r="2.5" fill="#090909" />
        <ellipse cx="24" cy="26" rx="3" ry="2" fill="#090909" />
        <path
          d="M14 18 Q24 8 34 18"
          fill="none"
          stroke="url(#marmotGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <ellipse cx="12" cy="30" rx="4" ry="3" fill="url(#marmotGrad)" opacity="0.8" />
        <ellipse cx="36" cy="30" rx="4" ry="3" fill="url(#marmotGrad)" opacity="0.8" />
      </svg>
      {!compact && <span className="logo-text">Marmot Marketing</span>}
    </Link>
  )
}

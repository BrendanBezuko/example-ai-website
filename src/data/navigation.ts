export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services/custom-websites',
    children: [
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Email Campaigns', href: '/services/email-campaigns' },
      { label: 'SMS Campaigns', href: '/services/sms-campaigns' },
      { label: 'Video Ads', href: '/services/video-ads' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Custom Websites', href: '/services/custom-websites' },
      { label: 'Basic Websites', href: '/services/basic-websites' },
      { label: 'IT Solutions', href: '/services/it-solutions' },
      { label: 'Custom Projects', href: '/services/custom-projects' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  {
    label: 'Pricing',
    href: '/pricing/custom-websites',
    children: [
      { label: 'Basic Websites', href: '/pricing/basic-websites' },
      { label: 'Custom Websites', href: '/pricing/custom-websites' },
    ],
  },
  { label: '✦ Free Tutorials', href: '/tutorials' },
  { label: 'Contact', href: '/contact' },
] as const

export const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Basic websites', href: '/services/basic-websites' },
    { label: 'Custom websites', href: '/services/custom-websites' },
    { label: 'Email campaigns', href: '/services/email-campaigns' },
    { label: 'SMS campaigns', href: '/services/sms-campaigns' },
    { label: 'Video ads', href: '/services/video-ads' },
    { label: 'SEO', href: '/services/seo' },
    { label: 'IT solutions', href: '/services/it-solutions' },
    { label: 'Custom projects', href: '/services/custom-projects' },
    { label: 'Website tune-ups', href: '/services/digital-marketing' },
  ],
  Resources: [
    { label: 'Free tutorials', href: '/tutorials' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [{ label: 'Policies and help', href: '/policies' }],
} as const

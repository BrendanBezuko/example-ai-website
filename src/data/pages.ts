export type ProcessStep = { title: string; description: string }

export type ServicePage = {
  slug: string
  title: string
  tagline: string
  intro: string
  highlights: string[]
  process: ProcessStep[]
}

export type PricingTier = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
}

export type PricingPage = {
  slug: string
  title: string
  tagline: string
  intro: string
  tiers: PricingTier[]
}

export const processStepsDefault: ProcessStep[] = [
  {
    title: 'Free Consultation',
    description:
      'A free sit down with our team to discuss the details of your venture. We guide you in the best direction and provide expert advice.',
  },
  {
    title: 'Design / Approval',
    description:
      "We develop a prototype and share interactive demos for your feedback. Together, we refine the design to align with your vision.",
  },
  {
    title: 'Development',
    description:
      'Your project comes to life. After construction, we deploy so you can recommend edits prior to final approval.',
  },
  {
    title: 'Ongoing Support',
    description:
      'We offer ongoing support with routine maintenance to keep your site up-to-date, secure, and performing at its best.',
  },
]

export const servicePages: Record<string, ServicePage> = {
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Campaigns that connect with real business goals',
    intro:
      'We align SEO, email, SMS, paid ads, and your website into one measurable strategy—built for small businesses that need results, not vanity metrics.',
    highlights: [
      'Strategy tied to revenue and leads, not just impressions',
      'Integrated channels that reinforce each other',
      'Clear reporting you can actually understand',
      'Local Alberta expertise with national reach',
    ],
    process: processStepsDefault,
  },
  'email-campaigns': {
    slug: 'email-campaigns',
    title: 'Email Campaigns',
    tagline: 'Engage customers with targeted email marketing',
    intro:
      'From welcome sequences to seasonal promotions, we design and deploy email campaigns that land in inboxes and drive action.',
    highlights: [
      'List segmentation and automation setup',
      'Mobile-friendly templates on brand',
      'A/B testing for subject lines and CTAs',
      'Compliance with CAN-SPAM and best practices',
    ],
    process: processStepsDefault,
  },
  'sms-campaigns': {
    slug: 'sms-campaigns',
    title: 'SMS Campaigns',
    tagline: 'Reach your audience instantly',
    intro:
      'Text message marketing with high open rates—perfect for appointments, flash sales, and time-sensitive updates your customers actually read.',
    highlights: [
      'Opt-in flows and compliance built in',
      'Short, actionable messages that convert',
      'Integration with your CRM or booking tools',
      'Scheduling and broadcast management',
    ],
    process: processStepsDefault,
  },
  'video-ads': {
    slug: 'video-ads',
    title: 'Video Ads',
    tagline: 'Compelling video that converts viewers',
    intro:
      'Short-form ads for social and YouTube, plus supporting landing pages—scripted, produced, and optimized for the platforms where your audience spends time.',
    highlights: [
      'Scripts focused on a single clear offer',
      'Platform-specific formats and lengths',
      'Hook-first editing for scroll-stopping impact',
      'Landing page pairing for full-funnel performance',
    ],
    process: processStepsDefault,
  },
  seo: {
    slug: 'seo',
    title: 'SEO',
    tagline: 'Improve rankings and drive organic traffic',
    intro:
      'Search engine optimization that helps you show up when customers search for what you offer—technical foundations, on-page content, and local visibility.',
    highlights: [
      'Technical audits and Core Web Vitals fixes',
      'Keyword research aligned with buyer intent',
      'On-page optimization and content guidance',
      'Local SEO for Alberta and Canadian markets',
    ],
    process: processStepsDefault,
  },
  'custom-websites': {
    slug: 'custom-websites',
    title: 'Custom Websites',
    tagline: 'Unique sites built from scratch for your brand',
    intro:
      'No generic templates—custom design and development tailored to your business, built on modern stacks for speed, SEO, and long-term maintainability.',
    highlights: [
      'Performance-first React and modern frameworks',
      'Fully responsive across all devices',
      'CMS or static workflows to match your team',
      '1-year support and maintenance options',
    ],
    process: processStepsDefault,
  },
  'basic-websites': {
    slug: 'basic-websites',
    title: 'Basic Websites',
    tagline: 'Professional, affordable sites for small business',
    intro:
      'Get online fast with a polished presence—ideal for startups and local businesses that need credibility without enterprise complexity.',
    highlights: [
      'Clear structure and professional design',
      'Contact forms and essential pages included',
      'Mobile-optimized out of the box',
      'Straightforward path to upgrade later',
    ],
    process: processStepsDefault,
  },
  'it-solutions': {
    slug: 'it-solutions',
    title: 'IT Solutions',
    tagline: 'Custom technical solutions for your business',
    intro:
      'Integrations, automations, cloud setup, and internal tools—when off-the-shelf software does not fit how you actually work.',
    highlights: [
      'API integrations between your tools',
      'Workflow automation to save hours',
      'Hosting and deployment guidance',
      'Security-conscious architecture',
    ],
    process: processStepsDefault,
  },
  'custom-projects': {
    slug: 'custom-projects',
    title: 'Custom Projects',
    tagline: 'One-off builds when you need something unique',
    intro:
      'Portals, dashboards, campaign microsites, or experimental products—we scope, build, and ship bespoke digital work outside standard packages.',
    highlights: [
      'Discovery workshop to define scope',
      'Fixed milestones with clear deliverables',
      'Direct access to senior developers',
      'Handoff documentation and training',
    ],
    process: processStepsDefault,
  },
}

export const pricingPages: Record<string, PricingPage> = {
  'basic-websites': {
    slug: 'basic-websites',
    title: 'Basic Websites',
    tagline: 'Affordable professional presence online',
    intro:
      'Everything you need to look credible and get found—without the cost or timeline of a full custom build.',
    tiers: [
      {
        name: 'Starter',
        price: '$1,499',
        description: 'Single-page or small brochure site for new businesses.',
        features: [
          'Up to 5 pages',
          'Mobile-responsive design',
          'Contact form',
          'Basic SEO setup',
          '30 days post-launch support',
        ],
      },
      {
        name: 'Growth',
        price: '$2,499',
        description: 'More room to showcase services and build trust.',
        features: [
          'Up to 10 pages',
          'Blog or news section',
          'Google Business integration',
          'Analytics setup',
          '60 days post-launch support',
        ],
        highlighted: true,
      },
      {
        name: 'Plus',
        price: '$3,499',
        description: 'Extra polish and content support for competitive markets.',
        features: [
          'Up to 15 pages',
          'Copy editing assistance',
          'Speed optimization pass',
          'Social link integration',
          '90 days post-launch support',
        ],
      },
    ],
  },
  'custom-websites': {
    slug: 'custom-websites',
    title: 'Custom Websites',
    tagline: 'Built from scratch for your brand',
    intro:
      'Fully custom design and development—scoped to your goals, timeline, and integrations. Pricing reflects complexity; every project starts with a free consultation.',
    tiers: [
      {
        name: 'Essential',
        price: 'From $5,000',
        description: 'Custom design with a focused feature set.',
        features: [
          'Unique visual design',
          'Up to 12 custom pages',
          'Performance-optimized build',
          'SEO foundation',
          '3 months support',
        ],
      },
      {
        name: 'Professional',
        price: 'From $9,000',
        description: 'Richer experiences with CMS and integrations.',
        features: [
          'Everything in Essential',
          'Headless CMS or admin panel',
          'Third-party integrations',
          'Advanced animations',
          '6 months support',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom quote',
        description: 'Complex products, portals, or multi-language sites.',
        features: [
          'Discovery and technical architecture',
          'Custom functionality',
          'Staging and CI/CD setup',
          'Training and documentation',
          'Dedicated support SLA',
        ],
      },
    ],
  },
}

export const portfolioProjects = [
  {
    title: 'The Door Works',
    category: 'Web Design & Development',
    description:
      "Custom website redesign for Edmonton's premier garage door parts and repair company. Responsive design showcasing products and services across all devices.",
    tags: ['Web Design', 'Custom Development', 'Responsive Design', 'SEO'],
    url: 'https://www.thedoorworks.ca',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1120&h=700&fit=crop',
  },
  {
    title: 'Alberta Wellness Co.',
    category: 'Digital Marketing',
    description:
      'Full-funnel launch including site, local SEO, and email nurture sequences for a growing health services brand.',
    tags: ['SEO', 'Email', 'Web Design'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1120&h=700&fit=crop',
  },
  {
    title: 'North Ridge HVAC',
    category: 'Basic Website + SMS',
    description:
      'Fast-turnaround service business site with booking integration and seasonal SMS campaigns.',
    tags: ['Basic Website', 'SMS', 'Local SEO'],
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1120&h=700&fit=crop',
  },
] as const

export const tutorials = [
  {
    title: 'Building a Website in 2026',
    category: 'Web',
    description:
      'What to use, what to avoid, and how to plan a site that stays fast and maintainable as you grow.',
  },
  {
    title: 'SEO Essentials for Small Business',
    category: 'SEO',
    description:
      'Search intent, on-page basics, and what actually moves rankings when you are not an enterprise.',
  },
  {
    title: 'Image Optimization for the Web',
    category: 'Performance',
    description:
      'Formats, dimensions, lazy loading, and delivery choices that keep pages fast without ugly artifacts.',
  },
  {
    title: 'How to Code a Website From Scratch',
    category: 'Web',
    description:
      'HTML, CSS, and JavaScript in context—structure, style, and behavior, plus how modern frameworks fit in.',
  },
] as const

export const values = [
  { icon: '🎯', title: 'Results-Driven', description: 'We measure success by tangible impact. Every project has clear goals and measurable outcomes.' },
  { icon: '🤝', title: 'Community-Focused', description: "We're proud to be part of Alberta's business community and prioritize local partnerships." },
  { icon: '✨', title: 'Innovation First', description: 'We stay at the cutting edge of technology and digital marketing to deliver effective solutions.' },
  { icon: '🔒', title: 'Transparency', description: 'Clear communication, honest reporting, and straightforward processes. No surprises.' },
  { icon: '🚀', title: 'Growth Mindset', description: "Whether you're a startup or established business, we adapt to help you scale." },
  { icon: '💡', title: 'Creative Excellence', description: 'Technical expertise combined with creative vision—functional and beautiful.' },
] as const

export const openRoles = [
  { title: 'Sales & Business Development', description: 'Connect with Alberta businesses and help them succeed online.' },
  { title: 'Website and Graphic Designers', description: 'Craft compelling designs that engage and convert visitors.' },
  { title: 'Photographers & Videographers', description: 'Create stunning visual content for Edmonton and Alberta businesses.' },
  { title: 'Marketers / Social Media', description: 'Help businesses grow their online presence and reach their audience.' },
] as const

/**
 * Single source of truth for site-wide SEO metadata.
 *
 * Everything that needs an absolute URL (canonical tags, sitemap, OpenGraph
 * images, structured data) resolves through `siteConfig.url` so there is only
 * ever one place to change the domain.
 */

/**
 * Resolve the canonical production origin.
 *
 * Order matters:
 *  1. NEXT_PUBLIC_SITE_URL — the explicit override, set it to your real domain
 *     (e.g. https://afsarriyad.com). Always wins.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — Vercel injects this with the project's
 *     production domain, so canonical URLs stay correct even without step 1.
 *  3. VERCEL_URL — the current deployment's own URL (used for preview builds,
 *     which keeps previews from pointing their canonicals at production).
 *  4. localhost — local development.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return stripTrailingSlash(withProtocol(explicit));

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${stripTrailingSlash(vercelProduction)}`;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${stripTrailingSlash(vercelUrl)}`;

  return 'http://localhost:3000';
}

function withProtocol(url: string): string {
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

function absoluteUrl(path = '/'): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export const siteConfig = {
  /** Canonical production origin, no trailing slash. */
  url: resolveSiteUrl(),

  name: 'Nurul Afsar Riyad',
  shortName: 'Afsar Riyad',
  role: 'Frontend & Full Stack Developer',
  location: 'Dhaka, Bangladesh',

  title: 'Nurul Afsar Riyad | Frontend & Full Stack Developer',
  tagline: 'Building web applications that perform.',

  /** Kept under ~155 characters so search engines don't truncate it. */
  description:
    'Nurul Afsar Riyad — frontend and full-stack developer in Dhaka, Bangladesh. I build fast, scalable web applications with React, Next.js and Node.js.',

  locale: 'en_US',
  language: 'en',

  /** Displayed on the OpenGraph cards. */
  email: 'no-reply@example.com',

  socials: {
    github: 'https://github.com/afsarriyad',
    linkedin: 'https://linkedin.com/in/afsar-riyad',
    whatsapp: 'https://wa.me/8801829758534',
  },

  keywords: [
    'Nurul Afsar Riyad',
    'Afsar Riyad',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'MERN Stack Developer',
    'Web Developer Bangladesh',
    'Freelance Developer Dhaka',
    'Portfolio',
  ],

  /** Twitter/X handle without the @, or undefined if you don't have one. */
  twitterHandle: undefined as string | undefined,
};

export type SiteConfig = typeof siteConfig;

export function toSocialImage(url: string): string {
  const marker = '/image/upload/';
  if (!url.includes('res.cloudinary.com') || !url.includes(marker)) return url;
  return url.replace(marker, `${marker}w_1200,h_630,c_fill,g_north,q_auto,f_auto/`);
}

export { absoluteUrl };

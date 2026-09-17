import { siteConfig, absoluteUrl } from './site';
import type { Project } from '@/types/project';



const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const DURATION_UNITS: Record<string, string> = {
  day: 'D',
  days: 'D',
  week: 'W',
  weeks: 'W',
  month: 'M',
  months: 'M',
  year: 'Y',
  years: 'Y',
};

/**
 * Turn the human duration shown on the page ("20 days") into the ISO 8601
 * duration that schema.org's `timeRequired` actually requires ("P20D").
 *
 * The property is a Duration, not free text, so "20 days" there is a type error
 * as far as a structured-data validator is concerned. Anything unparsable
 * returns null and the property is left out entirely — an absent property is
 * better than a malformed one.
 */
export function toIsoDuration(value: string): string | null {
  const match = /^\s*(\d+)\s*([a-z]+)\s*$/i.exec(value);
  if (!match) return null;
  const unit = DURATION_UNITS[match[2].toLowerCase()];
  return unit ? `P${Number(match[1])}${unit}` : null;
}

function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    image: absoluteUrl('/riyad.jpeg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'REST APIs',
      'Web Performance',
    ],
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  };
}

/** Emitted on every page from the root layout. */
export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personNode(),
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: siteConfig.url,
        name: `${siteConfig.name} — Portfolio`,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { '@id': PERSON_ID },
      },
    ],
  };
}

/** Home page only: what this URL is, plus the list of work it points at. */
export function homePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage: siteConfig.language,
      },
    ],
  };
}

export function projectSchema(project: Project) {
  const projectUrl = absoluteUrl(`/projects/${project.slug}`);
  const timeRequired = project.duration ? toIsoDuration(project.duration) : null;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${projectUrl}/#project`,
        name: project.title,
        description: project.overview ?? project.description,
        url: projectUrl,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Any',
        programmingLanguage: project.tech,
        keywords: project.tech.join(', '),
        author: { '@id': PERSON_ID },
        creator: { '@id': PERSON_ID },
        ...(project.screenshots?.length
          ? { image: project.screenshots[0], screenshot: project.screenshots }
          : {}),
        ...(timeRequired ? { timeRequired } : {}),
        isPartOf: { '@id': WEBSITE_ID },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${projectUrl}/#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${siteConfig.url}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };
}

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

/**
 * Vercel preview deployments are marked noindex so they can never compete with
 * the production domain in search results. Production stays fully crawlable.
 */
const isPreviewDeployment =
  process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== 'production';

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Nothing here is private, but keep crawlers out of the build output.
      disallow: ['/_next/static/chunks/', '/api/'],
    },
    // Must be absolute — a relative value is ignored by crawlers.
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

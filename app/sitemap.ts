import type { MetadataRoute } from 'next';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { projects } from '@/data/projects';

/**
 * Static export, so the build time is a fair "last modified" signal for the
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectEntries,
  ];
}

import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';
import { OgCard, OG_SIZE, OG_CONTENT_TYPE, siteHost } from '@/lib/og-card';

export const alt = siteConfig.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Portfolio / 2026"
        title={siteConfig.name}
        subtitle={siteConfig.role}
        footer={siteHost()}
      />
    ),
    size,
  );
}

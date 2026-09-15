import { siteConfig } from './site';

export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG_CONTENT_TYPE = 'image/png';

export function OgCard({
  eyebrow,
  title,
  subtitle,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  footer: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0a0a0a',
        padding: '72px 80px',
        position: 'relative',
      }}
    >
      {/* Neon corner glow */}
      <div
        style={{
          position: 'absolute',
          top: -220,
          right: -180,
          width: 620,
          height: 620,
          borderRadius: 620,
          backgroundImage:
            'radial-gradient(circle, rgba(204,255,0,0.20) 0%, rgba(204,255,0,0) 70%)',
        }}
      />

      {/* Top row: monogram + eyebrow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 46,
            fontWeight: 700,
            color: '#ccff00',
            letterSpacing: '-0.04em',
          }}
        >
          N.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#a3a3a3',
          }}
        >
          {eyebrow}
        </div>
      </div>

      {/* Middle: the actual message */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 26 ? 72 : 92,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 26,
            fontSize: 34,
            color: '#ccff00',
            letterSpacing: '-0.01em',
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Bottom: accent rule + domain */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', height: 3, width: 150, backgroundColor: '#ccff00' }} />
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 24,
            color: '#a3a3a3',
            letterSpacing: '0.04em',
          }}
        >
          {footer}
        </div>
      </div>
    </div>
  );
}

/** Bare hostname, used as the card footer. */
export function siteHost(): string {
  try {
    return new URL(siteConfig.url).host;
  } catch {
    return siteConfig.url;
  }
}

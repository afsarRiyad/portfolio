import { siteConfig } from '@/lib/site';


/** The upstream chart is a static asset; 6 hours is plenty fresh for this. */
const REVALIDATE_SECONDS = 21_600;
const TIMEOUT_MS = 10_000;

/** Derived from the one place the GitHub account is declared. */
function githubUsername(): string {
  try {
    return new URL(siteConfig.socials.github).pathname.replace(/^\/|\/$/g, '');
  } catch {
    return 'afsarriyad';
  }
}

const ACCENT = 'ccff00';

function upstreamUrl(): string {
  return `https://ghchart.rshah.org/${ACCENT}/${githubUsername()}`;
}

function svgHeaders(cacheControl: string): HeadersInit {
  return {
    'Content-Type': 'image/svg+xml; charset=utf-8',
    'Cache-Control': cacheControl,
  };
}


function placeholderSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="663" height="104" viewBox="0 0 663 104" role="img" aria-label="GitHub contribution graph unavailable">
  <text x="331" y="46" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" letter-spacing="2" fill="#888888">LIVE GRAPH UNAVAILABLE</text>
  <text x="331" y="68" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" letter-spacing="2" fill="#888888">VIEW ON GITHUB</text>
</svg>`;
}


export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(upstreamUrl(), {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!response.ok) throw new Error(`upstream responded ${response.status}`);

    const svg = await response.text();
    // Guard against an error page being served with a 200.
    if (!svg.includes('<svg')) throw new Error('upstream did not return SVG');

    return new Response(svg, {
      headers: svgHeaders(
        `public, max-age=3600, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
      ),
    });
  } catch {
    // Short TTL so a transient upstream outage resolves in minutes, not hours.
    return new Response(placeholderSvg(), {
      status: 200,
      headers: svgHeaders('public, max-age=300, s-maxage=300'),
    });
  }
}

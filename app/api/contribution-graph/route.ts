import { siteConfig } from '@/lib/site';

/**
 * Same-origin proxy for the GitHub contribution graph.
 *
 * The page used to hot-link `ghchart.rshah.org` straight from the browser. That
 * service scrapes GitHub on demand, so when its own cache for a user is cold the
 * request can hang for minutes — and because the visitor's browser is the one
 * waiting, the contribution box just sits there empty. The graph loads
 * eventually, which is exactly the "it shows up after a few minutes" symptom.
 *
 * Serving it through this route instead means:
 *   - the upstream fetch happens on the server, at most once per cache window
 *     rather than once per visitor,
 *   - it is bounded by a timeout, so a hanging upstream can never hang the page,
 *   - a failure degrades to a designed placeholder instead of an empty box,
 *   - the browser talks to our own origin, so no third-party connection needs to
 *     be established on first paint.
 */

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

/**
 * Shown while the upstream is unreachable. Deliberately transparent and grey so
 * it reads as intentional in both the dark and light theme, rather than a broken
 * image, and it links the visitor to the real thing.
 */
function placeholderSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="663" height="104" viewBox="0 0 663 104" role="img" aria-label="GitHub contribution graph unavailable">
  <text x="331" y="46" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" letter-spacing="2" fill="#888888">LIVE GRAPH UNAVAILABLE</text>
  <text x="331" y="68" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="12" letter-spacing="2" fill="#888888">VIEW ON GITHUB</text>
</svg>`;
}

/**
 * Request-time evaluation, on purpose.
 *
 * If this route were prerendered at build, a build-time upstream failure would
 * bake the placeholder in for the whole revalidate window. Evaluating per
 * request (with edge caching below) means a failure is only ever cached for a
 * few minutes and heals itself.
 */
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

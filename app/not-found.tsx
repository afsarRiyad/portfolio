import Link from 'next/link';
import type { Metadata } from 'next';

// A 404 must never be indexed, or it can replace real URLs in results.
export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <div className="text-wibify-neon font-mono text-xs tracking-[0.3em] uppercase mb-6">
        Error 404
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
        This page{' '}
        <span className="text-wibify-neon italic font-serif">wandered off.</span>
      </h1>

      <p className="text-wibify-gray max-w-md mb-10 font-light leading-relaxed">
        The link may be outdated, or the page may have moved. Let&apos;s get you back to the work.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="border border-wibify-neon text-wibify-neon px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-wibify-neon hover:text-black transition-all duration-300"
        >
          Back home
        </Link>
        <Link
          href="/#projects"
          className="border border-wibify-border text-wibify-gray px-6 py-3 text-xs font-mono uppercase tracking-widest hover:border-wibify-neon hover:text-wibify-neon transition-all duration-300"
        >
          View projects
        </Link>
      </div>
    </main>
  );
}

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { siteSchema } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Resolved from NEXT_PUBLIC_SITE_URL / the Vercel system env vars. Every
  // relative URL below (canonical, og:image) is made absolute against this.
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    // Project pages supply just their own title and get the name appended.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  applicationName: `${siteConfig.name} — Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  keywords: siteConfig.keywords,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${siteConfig.name} — Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.twitterHandle
      ? { site: `@${siteConfig.twitterHandle}`, creator: `@${siteConfig.twitterHandle}` }
      : {}),
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to emit the meta tag.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Matches --color-background in light/dark so mobile browser chrome blends in.
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
  ],
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteSchema()} />
        <ThemeProvider>
          {children}
          <GoogleAnalytics gaId="G-9ZF3FHFE14" />
        </ThemeProvider>
      </body>
    </html>
  );
}

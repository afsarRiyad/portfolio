import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurul Afsar Riyad | Frontend & Full Stack Developer",
  description: "Portfolio of Nurul Afsar Riyad. Self-learner and frontend engineer transitioning to full-stack development. Specializing in React, Next.js, and building scalable web applications.",
  metadataBase: new URL('https://github.com/afsarriyad'),
  openGraph: {
    title: "Nurul Afsar Riyad | Portfolio",
    description: "Building modern web experiences that scale and perform.",
    url: "https://github.com/afsarriyad",
    siteName: "Nurul Afsar Riyad Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
          <GoogleAnalytics gaId="G-9ZF3FHFE14" />
        </ThemeProvider>
      </body>
    </html>
  );
}
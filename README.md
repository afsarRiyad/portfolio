This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## SEO / canonical URLs

The sitemap, canonical tags and OpenGraph URLs are built from a single origin.
Set it in your deployment before going live, otherwise Vercel's auto-generated
deployment URL is used:

```bash
# .env.local (or Vercel → Settings → Environment Variables)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Optional verified-search stuff:

```bash
# Google Search Console (HTML-tag verification content value)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123...
```

What ships out of the box:

- `robots.txt` (via `app/robots.ts`) — absolute sitemap link, `noindex` on Vercel preview deployments
- `sitemap.xml` — homepage + every `/projects/[slug]` case study
- Per-page canonical, `og:` and `twitter:` tags (project pages use their real screenshot, cropped to 1200×630 via Cloudinary)
- Generated `opengraph-image` / `twitter-image` cards
- JSON-LD: `Person` + `WebSite` site-wide, `ProfilePage` on the home page, `SoftwareApplication` + `BreadcrumbList` per project
- Web app manifest and a `noindex` 404 page

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '01',
    slug: 'electro',
    title: 'TechMart',
    type: 'ECOMMERCE',
    year: '2026',
    overview: 'A full-stack e-commerce learning project built with React, MongoDB, and Express.js. This project helped me understand full-stack development, from frontend React components to backend database integration and authentication.',
    description: 'A full-stack e-commerce application built as a learning project to master React, MongoDB, and Express.js integration.',
    tech: ['React', 'MongoDB', 'Express.js', 'REST API', 'Tailwind CSS', 'TanStack Query', 'Axios'],
    link: 'https://github.com/afsarRiyad/techMart',
    githubUrl: 'https://github.com/afsarRiyad/techMart',
    liveUrl: 'https://tech-mart-six.vercel.app/',
    duration: '3 months',
    screenshots: [
      '/screenshots/electroSS1.png',
      '/screenshots/electroSS2.png',
      '/screenshots/electroSS3.png',
      '/screenshots/electroSS4.png',
      '/screenshots/electroSS5.png',
      '/screenshots/electroSS6.png',
    ],
    features: [
      'Product browsing and search',
      'Product details with filtering',
      'User authentication with JWT',
      'Protected routes',
      'Shopping cart functionality',
      'Wishlist feature',
      'Order management',
      'Admin dashboard',
      'Product management',
      'User and order management',
      'Responsive design',
      'API error handling with query interceptor'
    ],
    architecture: [
      'React (Frontend)',
      'TanStack Query with Axios Interceptor (API Client)',
      'REST API (API Layer)',
      'MongoDB (Database)',
      'Express.js (Backend Server)'
    ],
    challenges: [
      {
        title: 'Authentication with JWT',
        problem: 'Learning to implement secure authentication using JWT tokens while maintaining user sessions.',
        solution: 'Implemented JWT authentication with proper token management and protected routes.',
        result: 'Secure authentication flow with user session management.'
      },
      {
        title: 'MongoDB Integration',
        problem: 'Learning to structure MongoDB schemas and integrate with React frontend for data persistence.',
        solution: 'Designed MongoDB data models for products, users, and orders with proper relationships.',
        result: 'Functional database integration with CRUD operations.'
      },
      {
        title: 'Query Interceptor Implementation',
        problem: 'Managing API requests and responses globally with proper error handling and token refresh.',
        solution: 'Implemented Axios interceptor with TanStack Query for centralized API handling.',
        result: 'Consistent API error handling and automatic token refresh.'
      }
    ],
    learnings: [
      'Full-stack development workflow',
      'MongoDB database design and integration',
      'JWT authentication implementation',
      'React state management with TanStack Query',
      'API design and frontend-backend communication',
      'Axios interceptor for centralized API handling'
    ],
    improvements: [
      'This was a learning project focused on understanding full-stack concepts.',
      'Would add more advanced features like payment integration',
      'Could implement real-time updates with WebSocket',
      'Plan to add more comprehensive error handling'
    ],
    results: [
      'Full-stack application built from scratch',
      'MongoDB database integration working',
      'JWT authentication implemented',
      'Responsive frontend with React',
      'Understanding of full-stack architecture',
      'Centralized API handling with query interceptor'
    ]
  },
  {
    id: '02',
    slug: 'football-club',
    title: 'Football Club Management',
    type: 'FULL-STACK PLATFORM',
    year: '2026',
    overview: 'A production full-stack football club management platform built for a real club (Naya Diganta Club). It manages an entire club operation — squads, fixtures, live match scores, standings, news, gallery and academy — through a public website, a role-based admin panel and a REST + Socket.io backend.',
    description: 'A real-time football club management platform with a public Next.js website, a separate role-based admin panel, an Express/MongoDB REST API and Socket.io powered live match scores, events and chat.',
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Socket.io',
      'React Hook Form',
      'Zod',
      'Axios',
      'Framer Motion',
      'Cloudinary'
    ],
    link: 'https://github.com/afsarRiyad/football-club-frontend',
    githubUrl: 'https://github.com/afsarRiyad/football-club-frontend',
    liveUrl: 'https://www.nayadiganta.club/',
    duration: '4 months',
    screenshots: [
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408697/Screenshot_2026-09-14_231007_hretxo.png',
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408697/Screenshot_2026-09-14_231117_mitecj.png',
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408697/Screenshot_2026-09-14_231206_llqi6e.png',
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408696/Screenshot_2026-09-14_231341_kpfjk0.png',
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408696/Screenshot_2026-09-14_231619_qgnf4m.png',
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408697/Screenshot_2026-09-14_231744_ufzpap.png',
      'https://res.cloudinary.com/dj5ogudnj/image/upload/v1789408697/Screenshot_2026-09-14_231242_ejzzof.png'
    ],
    features: [
      'JWT authentication with register, login, forgot-password and reset-password flows',
      'Role-based access control across 7 roles (Super Admin to Member)',
      'Live match centre with real-time score, events timeline and viewer count via Socket.io',
      'Live match chat and real-time formation/pitch builder for matchday',
      'Squad and player profile pages with stats, position, number and career info',
      'Fixtures with filters by club, competition, season, status and date range',
      'Competition standings and top-scorers tables',
      'News system with categories, tags, search and per-article view counts',
      'Photo/video gallery with lightbox and infinite marquee',
      'Academy, training sessions and attendance tracking',
      'Match request workflow for opponents',
      'Separate admin panel with full CRUD for clubs, players, teams, matches, news, gallery, members, users and statistics',
      'Bulk player import and player transfer handling',
      'Cloudinary media uploads (avatars, club logos, player photos, news covers)',
      'SEO: dynamic sitemap, robots.txt, OpenGraph image and JSON-LD structured data',
      'Dark/light theme, skeletons, toasts and fully responsive mobile-first UI'
    ],
    architecture: [
      'Next.js 16 App Router — public website (Server Components + client islands)',
      'Separate Next.js admin panel with role-gated routes',
      'React Hook Form + Zod — form state and schema validation',
      'Axios instances with request/response interceptors — API + JWT handling',
      'Socket.io client — live score, events, viewer count and chat',
      'REST API (Express.js controllers/services)',
      'Mongoose models — clubs, players, teams, matches, news, members, statistics',
      'MongoDB Atlas — database',
      'Cloudinary — media storage and delivery'
    ],
    challenges: [
      {
        title: 'Real-time match updates without state drift',
        problem: 'Live scores, match events, status changes and viewer counts had to reach every viewer of a match instantly, but the React components received updates from multiple Socket.io events and could end up showing a score that disagreed with the timeline of events.',
        solution: 'Joined a per-match Socket.io room on mount and left it on unmount, then drove all UI state from a single source: each socket event carried its own score snapshot alongside the event/status, and every listener was explicitly torn down in the cleanup function so no stale subscribers or duplicated event handlers survived a route change.',
        result: 'Scores, events and status stay in sync for all viewers of a match in real time, with no duplicate events or leaked listeners after navigating away and back.'
      },
      {
        title: 'Role-based access across 7 roles and two apps',
        problem: 'The platform has 7 hierarchical roles (Super Admin, Club Admin, Team Manager, Coach, Scorer, Player, Member) that inherit permissions downward, and the same rules had to be enforced consistently in the REST API, in the public site UI and in the separate admin panel.',
        solution: 'Made the backend the single source of truth with role middleware that checks the minimum required role per endpoint, then mirrored those rules on the client to gate routes and hide admin actions, plus an Axios response interceptor that clears the session and redirects to login on any 401.',
        result: 'One permission model enforced end to end — users only ever see and can trigger the actions their role allows, and an expired or invalid token can never leave the app in a half-authenticated state.'
      },
      {
        title: 'CORS and cookies failing after deployment',
        problem: 'Everything worked on localhost but the production site and admin panel were blocked by CORS, and because the auth token is also sent as an HttpOnly cookie, requests only succeeded when the correct origin and credentials settings lined up between the deployed frontend, admin panel and backend.',
        solution: 'Configured the backend CORS whitelist from an environment variable listing the exact production frontend and admin origins with credentials enabled, set `withCredentials` on the Axios instances, and made the API base URL and Swagger server URL environment driven instead of hardcoded.',
        result: 'The public site and admin panel both authenticate and talk to the deployed API reliably, with no hardcoded localhost URLs left in the build.'
      },
      {
        title: 'Modeling a whole club without duplicating data',
        problem: 'Clubs relate to players, teams, matches, competitions, seasons, academy groups and statistics, and early on the same entities were being duplicated across screens which made filters and standings inconsistent.',
        solution: 'Designed Mongoose schemas with clear relations and references, kept statistics derived from matches and players instead of stored twice, and built list endpoints with consistent pagination and query filters (search, club, position, season, status, date range) that every screen reuses.',
        result: 'One consistent data model: standings, top scorers, squad lists and fixtures all agree because they are all resolved from the same records with the same filtering contract.'
      }
    ],
    learnings: [
      'Designing and shipping a real-time feature with Socket.io rooms and clean listener lifecycles',
      'Implementing hierarchical role-based access control end to end',
      'Structuring a Mongoose data model for a domain with many related entities',
      'Consistent API design: envelope responses, pagination and composable query filters',
      'Form architecture with React Hook Form + Zod and typed schemas',
      'Axios interceptors for auth headers and global 401 handling',
      'Environment-driven configuration and production CORS with credentials',
      'Deploying a three-part system (public site, admin panel, API) and debugging it in production',
      'Next.js App Router: server components, route groups and caching/revalidation',
      'Technical SEO with dynamic sitemap, robots, OpenGraph and JSON-LD',
      'Media handling through Cloudinary including deletes by public id'
    ],
    improvements: [
      'Add WebSocket-based push for news and gallery updates instead of only matches',
      'Implement offline-tolerant optimistic updates for admin mutations',
      'Add end-to-end tests (Playwright) for the live match flow and role gating',
      'Introduce a Redis cache layer for standings and top scorers aggregations',
      'Add push notifications for match start, goals and final whistle',
      'Add multi-club tenancy so the platform can host more than one club',
      'Move media delivery behind a CDN transform pipeline with responsive image sets',
      'Add analytics dashboards for attendance, engagement and live viewer patterns',
      'Add a mobile app or PWA install flow for matchday updates'
    ],
    results: [
      'Live, publicly used club platform running at nayadiganta.club',
      'Real-time match centre with scores, events, viewer counts and chat',
      'Complete role-based admin panel managing the entire club operation',
      'Consistent data model powering fixtures, standings, top scorers and squads',
      'Secure JWT auth with password reset and protected routes',
      'Production deployment across three services with Cloudinary media',
      'SEO-ready public site with sitemap, OpenGraph and structured data',
      'Reusable, fully responsive component system for the whole club site'
    ]
  },
  {
    id: '03',
    slug: 'ecobazar',
    title: 'Ecobazar',
    type: 'ECOMMERCE',
    year: '2026',
    overview: 'A responsive e-commerce frontend template built with React 19, featuring modern UI components, Redux Toolkit for state management, and integration with external APIs.',
    description: 'A fully functional e-commerce frontend template with responsive design, shopping cart functionality, and integration with DummyJSON API for product data.',
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'React Router', 'Axios', 'Vite', 'Swiper'],
    link: 'https://github.com/afsarRiyad/EcoBazar',
    githubUrl: 'https://github.com/afsarRiyad/EcoBazar',
    liveUrl: 'https://eco-bazar-zeta.vercel.app/',
    duration: '2 months',
    screenshots: [
      '/screenshots/ecobazarSS1.png',
      '/screenshots/ecobazarSS2.png',
      '/screenshots/ecobazarSS3.png',
    ],
    features: [
      'Responsive homepage with image slider',
      'Product browsing and display with grid layout',
      'Category navigation with dropdown menus',
      'Product search functionality',
      'Hot deals section with countdown timer',
      'User authentication UI (login/registration)',
      'Shopping cart interface',
      'Wishlist functionality',
      'Product details page structure',
      'Mobile-friendly navigation with bottom bar',
      'Newsletter subscription',
      'Customer testimonials section',
      'Instagram integration section',
      'Sponsor logos display'
    ],
    architecture: [
      'React with Vite build tool',
      'Redux Toolkit for state management',
      'React Router for client-side routing',
      'Tailwind CSS for styling',
      'Axios for API calls to DummyJSON',
      'Swiper for carousel/slider components',
      'Lucide React for icons',
      'Component-based architecture with reusable UI components'
    ],
    challenges: [
      {
        title: 'Responsive Design Implementation',
        problem: 'Creating a consistent user experience across different screen sizes while maintaining complex e-commerce layouts',
        solution: 'Implemented Tailwind CSS with responsive breakpoints and custom mobile navigation components',
        result: 'Fully responsive design that works on mobile, tablet, and desktop devices'
      },
      {
        title: 'API Integration',
        problem: 'Integrating external API data while maintaining smooth user experience',
        solution: 'Used Axios with React hooks for data fetching and implemented loading states',
        result: 'Seamless integration with DummyJSON API for product and category data'
      }
    ],
    learnings: [
      'React with modern hooks and patterns',
      'Redux Toolkit for state management',
      'Tailwind CSS for utility-first styling',
      'React Router for navigation',
      'Responsive design principles',
      'Component architecture and reusability',
      'API integration with Axios',
      'Swiper library for carousel implementations',
      'Mobile-first design approach'
    ],
    improvements: [
      'Add backend API integration for real authentication',
      'Implement persistent cart with localStorage or database',
      'Add payment gateway integration',
      'Implement real product search and filtering',
      'Add user dashboard with order history',
      'Implement product reviews and ratings system',
      'Add admin panel for product management',
      'Implement real-time inventory management',
      'Add analytics and tracking',
      'Optimize images and implement lazy loading'
    ],
    results: [
      'Fully functional e-commerce frontend template',
      'Responsive design across all devices',
      'Clean and modern UI with smooth animations',
      'Working product browsing from external API',
      'Reusable component library',
      'Mobile-optimized navigation',
      'Deployed live on Vercel',
      'Fast loading times with Vite build optimization'
    ]
  },
  {
    id: '04',
    slug: 'slate-business-website',
    title: 'Slate Business Website',
    type: 'CORPORATE',
    year: '2026',
    overview: 'A modern corporate website template built as a collaborative GitHub learning project. This project focused on understanding team collaboration, code review processes, branch management, and merge workflows while creating a professional business website.',
    description: 'A React-based corporate website template featuring multiple sections including home, products, pricing, company information, blog, and authentication. Built as a team collaboration project to learn GitHub workflows, code review practices, and design implementation.',
    tech: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Swiper', 'React Icons', 'JavaScript'],
    link: 'https://github.com/afsarRiyad/Group-Project',
    githubUrl: 'https://github.com/afsarRiyad/Group-Project',
    liveUrl: 'https://slate-business-website.vercel.app/',
    duration: '2 days',
    screenshots: [
      '/screenshots/businessSS1.png',
      '/screenshots/businessSS2.png',
      '/screenshots/businessSS3.png',
    ],
    features: [
      'Responsive homepage with hero section and email signup',
      'Product showcase with Swiper carousel',
      'Pricing comparison table with multiple tiers',
      'Company information with team and office sections',
      'Blog section with article cards',
      'User authentication UI (login/registration)',
      'Social media integration',
      'Mobile-responsive navigation',
      'Custom font integration (Inter, Archivo)',
      'Testimonials and customer sections',
      'Strategic business choice sections',
      'Footer with comprehensive links'
    ],
    architecture: [
      'React with Vite build tool',
      'React Router for client-side routing',
      'Tailwind CSS with custom theme configuration',
      'Component-based architecture with reusable layouts',
      'Swiper.js for carousel components',
      'React Icons for iconography',
      'Custom CSS layers for consistent styling',
      'Container-based layout system'
    ],
    challenges: [
      {
        title: 'Team Collaboration and Code Review',
        problem: 'Managing multiple contributors with varying skill levels while maintaining code quality and design consistency across branches',
        solution: 'Implemented systematic code review processes, established coding standards, and conducted thorough merge reviews to identify and fix bugs and design issues',
        result: 'Successful collaboration with consistent code quality and unified design implementation across all team contributions'
      },
      {
        title: 'Responsive Design Implementation',
        problem: 'Creating a consistent user experience across different screen sizes while maintaining complex corporate layouts with multiple sections',
        solution: 'Implemented Tailwind CSS with responsive breakpoints and custom component classes for mobile-first design',
        result: 'Fully responsive design that works on mobile, tablet, and desktop devices'
      },
      {
        title: 'Component Architecture and Reusability',
        problem: 'Building reusable components while maintaining flexibility for different page layouts and sections',
        solution: 'Created modular component structure with layout containers and section-specific components',
        result: 'Scalable component architecture that allows easy addition of new sections and pages'
      }
    ],
    learnings: [
      'GitHub collaboration workflows and branch management',
      'Code review practices and quality assurance',
      'Team coordination and project management',
      'React with modern hooks and patterns',
      'React Router for navigation',
      'Tailwind CSS with custom theming',
      'Swiper.js integration for carousels',
      'Component-based architecture',
      'Responsive design principles',
      'Merge conflict resolution',
      'Design implementation and bug fixing'
    ],
    improvements: [
      'Add backend integration for real authentication',
      'Implement content management system for blog',
      'Add contact form with email functionality',
      'Implement search functionality',
      'Add analytics and tracking',
      'Optimize images and implement lazy loading',
      'Add multi-language support',
      'Implement dark mode toggle',
      'Add more interactive animations',
      'Create admin panel for content management'
    ],
    results: [
      'Fully functional corporate website template',
      'Successful team collaboration with multiple contributors',
      'Clean and maintainable codebase',
      'Responsive design across all devices',
      'Comprehensive component library',
      'Professional UI with custom typography',
      'Working navigation system',
      'Consistent design language',
      'Improved GitHub workflow understanding',
      'Enhanced code review and debugging skills'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getPrevProject(currentId: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  return currentIndex > 0 ? projects[currentIndex - 1] : undefined;
}

export function getNextProject(currentId: string): Project | undefined {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  return currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;
}

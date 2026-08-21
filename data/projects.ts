import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '01',
    slug: 'electro',
    title: 'Electro',
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
    id: '03',
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

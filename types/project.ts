export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  year: string;
  overview?: string;
  description: string;
  tech: string[];
  link: string;
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
  features?: string[];
  architecture?: string[];
  challenges?: Array<{
    title: string;
    problem: string;
    solution: string;
    result: string;
  }>;
  learnings?: string[];
  improvements?: string[];
  results?: string[];
  duration?: string;
}

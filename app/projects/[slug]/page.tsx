import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import JsonLd from '@/components/JsonLd';
import { projects, getProjectBySlug, getPrevProject, getNextProject } from '@/data/projects';
import { siteConfig, toSocialImage } from '@/lib/site';
import { projectSchema } from '@/lib/structured-data';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found',
      robots: { index: false, follow: false },
    };
  }

  const description = project.overview ?? project.description;
  const canonical = `/projects/${project.slug}`;
  const screenshot = project.screenshots?.[0];

  // Prefer a real screenshot as the social card — it shows the actual product.
  const socialImage = screenshot
    ? {
        url: toSocialImage(screenshot),
        width: 1200,
        height: 630,
        alt: `${project.title} — project screenshot`,
      }
    : undefined;

  return {
    title: project.title,
    description,
    keywords: [
      project.title,
      project.type,
      ...project.tech,
      `${project.title} case study`,
    ],
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: `${project.title} — Case Study`,
      description,
      url: canonical,
      siteName: `${siteConfig.name} — Portfolio`,
      ...(socialImage ? { images: [socialImage] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study`,
      description,
      ...(socialImage ? { images: [socialImage.url] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const prevProject = getPrevProject(project.id);
  const nextProject = getNextProject(project.id);

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
    </>
  );
}

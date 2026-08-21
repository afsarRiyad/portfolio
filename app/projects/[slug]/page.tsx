import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import { projects, getProjectBySlug, getPrevProject, getNextProject } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const prevProject = getPrevProject(project.id);
  const nextProject = getNextProject(project.id);

  return <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />;
}

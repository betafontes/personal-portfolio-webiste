import { SectionTitle } from '@/app/components/section-title';
import { ProjectCard } from './project-card';
import { Link } from '@/app/components/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { Project } from '@/app/types/projects';

type HighlightedProjectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle
        subtitle="destaques"
        title="Projetos em destaque"
        className="md:mt-8 sm:mt-32"
        titleClassName="text-2xl"
        subtitleClassName="text-base text-pink-300"
      />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver Todos
            <HiArrowNarrowRight className="animate-bounce-x" />
          </Link>
        </p>
      </div>
    </section>
  );
};

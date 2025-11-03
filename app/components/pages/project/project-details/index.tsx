'use client';

import { Button } from '@/app/components/button';
import { SectionTitle } from '@/app/components/section-title';
import { TechBadge } from '@/app/components/tech-badge';
import { TbBrandGithub } from 'react-icons/tb';
import { FiGlobe } from 'react-icons/fi';
import { Link } from '@/app/components/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Project } from '@/app/types/projects';
import { RichText } from '@/app/components/rich-text';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations';

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const backgroundUrl = project?.pageThumbnail?.url || project?.thumbnail?.url || '';

  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[1] transition-all duration-500 w-[90%] h-[90%] bg-center bg-no-repeat bg-contain blur-sm opacity-60"
        style={{
          background: backgroundUrl
            ? `url(${backgroundUrl}) no-repeat center/cover`
            : 'linear-gradient(to bottom right, #060606, #1a1a1a)',
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-black/70 z-[2]" />

      <div className="relative z-[3] flex flex-col items-center text-center">
        <SectionTitle
          subtitle="projetos"
          title={project.title || 'Projeto sem título'}
          className="text-center items-center sm:[&>h3]:text-4xl"
        />

        {project?.description?.raw && (
          <motion.div
            className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
            {...fadeUpAnimation}
          >
            <RichText content={project.description.raw} />
          </motion.div>
        )}

        {project?.technologies?.length > 0 && (
          <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
            {project.technologies.map((tech, i) => (
              <TechBadge
                key={tech.name}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />
            ))}
          </div>
        )}

        <motion.div
          className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
          {...fadeUpAnimation}
        >
          {project?.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Button className="min-w-[180px]">
                <TbBrandGithub size={20} />
                Repositório
              </Button>
            </a>
          )}

          {project?.liveProjectUrl && (
            <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
              <Button className="min-w-[180px]">
                <FiGlobe size={20} />
                Deploy
              </Button>
            </a>
          )}
        </motion.div>

        <Link href="/projects">
          <HiArrowNarrowLeft size={20} className="animate-bounce-x-left"/>
          Voltar para projetos
        </Link>
      </div>
    </section>
  );
};

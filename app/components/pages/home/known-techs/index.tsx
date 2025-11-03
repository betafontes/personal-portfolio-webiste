'use client';

import { SectionTitle } from '@/app/components/section-title';
import { KnownTech } from './known-tech';
import { KnownTech as IKnownTech } from '@/app/types/projects';
import { motion } from 'framer-motion';

type KnownTechsProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-20">
      <SectionTitle
        subtitle="competências"
        title="Conhecimentos"
        className="md:mt-8 sm:mt-32"
        titleClassName="text-2xl"
        subtitleClassName="text-base text-pink-300"
      />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[40px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

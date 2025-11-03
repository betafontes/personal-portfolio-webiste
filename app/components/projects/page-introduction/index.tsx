'use client';

import { SectionTitle } from '../../section-title';
import { Link } from '@/app/components/link';
import { motion } from 'framer-motion';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-gray-900 flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos projetos que eu desenvolvi. Navegue à vontade e explore
          para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/" className="my-6">
          <HiArrowNarrowLeft size={20} />
          Voltar para o Início
        </Link>
      </motion.div>
    </section>
  );
};

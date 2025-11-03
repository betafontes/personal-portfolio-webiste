'use client';

import { Button } from '@/app/components/button';
import { CMSIcon } from '@/app/components/cms-icon';
import { RichText } from '@/app/components/rich-text';
import { TypeAnimation } from 'react-type-animation';
import { TechBadge } from '@/app/components/tech-badge';
import { HomePageInfo } from '@/app/types/page-info';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { techBadgeAnimation } from '@/app/lib/animations';

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-end py-40 sm:py-48 lg:py-[110px] bg-slate-900">
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">
        <motion.div
          className="w-full lg:max-w-[530px] text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white font-medium text-2xl mt-8 lg:text-[27px]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Olá, Eu sou
            </span>
            <TypeAnimation
              sequence={[
                'Roberta Santos',
                4000,
                'Full Stack Developer',
                4000,
                'Apaixonada por Códigos',
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block mt-2 sm:mt-2 md:mt-3 lg:mt-5 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-gray-100"
            />
          </h1>

          <div className="text-gray-400 text-base sm:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                key={`intro-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <span className="flex items-center gap-2 cursor-pointer text-base text-gray-300 hover:text-pink-300">
              Redes sociais
              <HiArrowNarrowRight size={18} className="animate-bounce-x" />
            </span>

            <div className="flex items-center gap-3 text-3xl text-gray-500 h-10">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center flex justify-center lg:justify-end w-full"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          <Image
            width={360}
            height={360}
            src="/images/profile-pic.jpg"
            alt="Foto de Perfil"
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] shadow-2xl rounded-full object-cover translate-y-4 sm:translate-y-10 lg:translate-y-16"
          />
        </motion.div>
      </div>
    </section>
  );
};

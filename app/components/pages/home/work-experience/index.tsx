import { SectionTitle } from '@/app/components/section-title';
import { ExperienceItem } from './experience-item';
import type { WorkExperience as IWorkExperience } from '@/app/types/work-experience';

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-40 flex-col md:flex-row">
      <div className="max-w-[600px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
          className="md:mt-10 sm:mt-32"
          titleClassName="text-2xl"
          subtitleClassName="text-base text-pink-300"
        />
        <p className="text-gray-400 mt-6">Minhas experiências profissionais como Desenvolvedora!</p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem key={experience.companyName} experience={experience} />
        ))}
      </div>
    </section>
  );
};

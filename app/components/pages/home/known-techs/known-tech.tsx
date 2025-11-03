import { CMSIcon } from '@/app/components/cms-icon';
import { KnownTech as IKnownTech } from '@/app/types/projects';

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col items-center justify-center gap-2 hover:text-gray-300 hover:bg-gray-600/30 transition-all">
      <p className="font-medium text-gray-400">{tech.name}</p>
      <div className="flex items-center justify-center text-5xl sm:text-6xl">
        <CMSIcon icon={tech.iconSvg} />
      </div>
    </div>
  );
};

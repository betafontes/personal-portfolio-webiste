import { HeroSection } from './components/pages/home/hero-section';
import { HighlightedProjects } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';
import { WorkExperience } from './components/pages/home/work-experience';
import { HomePageData } from './types/page-info';
import { fetchHygraphQuery } from './utils/fetch-hygraph-query';

const getPageData = async (): Promise<HomePageData | null> => {
  try {
    const data = await fetchHygraphQuery<{
      pages?: any[];
      workExperiences?: any[];
    }>(`
      query MyQuery {
        pages(where: {slug: "home"}) {
          introduction { raw }
          profilePicture { url }
          knownTechs { iconSvg name }
          technologies { name }
          socials { url iconSvg }
          highlightProjects {
            slug
            thumbnail { url }
            title
            shortDescription
            technologies { name }
          }  
        }
        workExperiences {
          role
          companyName
          companyUrl
          startDate
          endDate
          description { raw }
          technologies { name }
        }
      }
    `);

    if (!data || !data.pages || data.pages.length === 0) {
      return null;
    }

    const page = data.pages[0];

    return {
      pages: data.pages,
      highlightProjects: page.highlightProjects || [],
      knownTechs: page.knownTechs || [],
      workExperiences: data.workExperiences || [],
    };
  } catch (error) {
    console.error('Erro ao buscar dados do Hygraph:', error);
    return null;
  }
};

export default async function Home() {
  const pageData = await getPageData();

  if (!pageData) {
    return <p>Falha ao carregar os dados da página.</p>;
  }

  const homeInfo = pageData.pages[0];

  return (
    <>
      <HeroSection homeInfo={homeInfo} />
      <KnownTechs techs={homeInfo.knownTechs} />
      <HighlightedProjects projects={homeInfo.highlightProjects} />
      <WorkExperience experiences={pageData.workExperiences} />
    </>
  );
}

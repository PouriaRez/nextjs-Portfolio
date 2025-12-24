import ProjectCard from './ProjectCard';
import { projectCardInfo } from '@/types/project';
const Projects = () => {
  const projectsList: projectCardInfo[] = [
    {
      title: 'ChariWork',
      img: '/icons/donation_icon.png',
      motto: 'Donating made easy',
      description:
        'ChariWork is created to help bring chartiable donations, and attention to a wide varity of charities and non profitsattention to a wide varity of charities and non profitsattention to a wide varity of charities and non profits',
      github: 'https://github.com/PouriaRez/ChariWork',
      website: 'https://chari-work-115.vercel.app/',
    },
    {
      title: 'ChariWork',
      img: '/icons/donation_icon.png',
      description: 'Donating made easy.',
      github: 'https://github.com/PouriaRez/ChariWork',
      website: 'https://chari-work-115.vercel.app/',
    },
    {
      title: 'ChariWork',
      img: '/icons/donation_icon.png',
      description: 'Donating made easy.',
      github: 'https://github.com/PouriaRez/ChariWork',
      website: 'https://chari-work-115.vercel.app/',
    },
  ];
  return (
    <div id="projects" className="h-screen">
      {/* <div
        className=" flex flex-wrap flex-col justify-around items-start  
                md:flex-row mt-10"
      >
        {projectsList.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            img={p.img}
            description={p.description}
            github={p.github}
            website={p.website}
          />
        ))}
      </div> */}
      <div
        className="flex justify-center items-center flex-col p-10
                      md:flex-row md:justify-around"
      >
        <div
          className="flex flex-col justify-center items-center 
                        md:w-1/2"
        >
          <div className="text-9xl">{projectsList[0].title}</div>
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/2">
          <div className="text-2xl flex justify-center items-center flex-wrap">
            <p>{projectsList[0].description}</p>
          </div>
          <div>{projectsList[0].website}</div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

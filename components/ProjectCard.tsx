import Image from 'next/image';
import { projectCardInfo } from '@/types/project';

const ProjectCard = ({
  title,
  img,
  motto,
  description,
  github,
  website,
}: projectCardInfo) => {
  console.log('website url: ', website);
  return (
    <div
      className="flex flex-col w-75 bg-gray-500/50 rounded p-2 
                  hover:shadow-[0_0_50px_#00d3f2] hover:scale-110 
                  transition duration-300"
    >
      <div className="flex justify-center items-center text-5xl font-bold">
        {title}
      </div>
      <div className="flex justify-center items-center">
        <Image src={img} alt={`${img}`} height={50} width={50} />
      </div>
      <div>{description}</div>
      <div className="flex justify-between items-center ">
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
        <div>
          <a href={website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

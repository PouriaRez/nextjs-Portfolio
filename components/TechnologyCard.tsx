import { TechnologyCardInfo } from '@/types/technologies';
import Image from 'next/image';

// USE FOR ANIMATIONS: https://gsap.com/resources/react-basics

const TechnologyCard = ({ title, technologies }: TechnologyCardInfo) => {
  return (
    <>
      <div className="w-full md:w-1/3 flex flex-col items-center border p-5 ">
        <div className="text-5xl m-2 text-center ">{title}</div>
        <div
          className="grid grid-cols-3 gap-15
                    md:flex md:justify-center md:items-center md:flex-wrap"
        >
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex flex-col justify-center items-center "
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={`/icons/${tech.toLowerCase()}.svg`}
                  alt={`${tech}`}
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-center font-bold text-2xl">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechnologyCard;

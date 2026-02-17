import { TechnologyCardInfo } from '@/types/technologies';
import Image from 'next/image';

const TechnologyCard = ({ title, technologies }: TechnologyCardInfo) => {
  return (
    <>
      <div className="w-full flex flex-col items-center border p-5 ">
        <div className="text-5xl m-2 ">{title}</div>
        <div className="flex justify-center items-center flex-wrap gap-15">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex flex-col justify-center items-center"
            >
              <Image
                src={`/icons/${tech.toLowerCase()}.svg`}
                alt={`${tech}`}
                height={50}
                width={50}
              />
              <p className="text-center">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechnologyCard;

'use client';
import Image from 'next/image';
import { projectCardInfo } from '@/types/project';
import { Github, Link } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
const ProjectCard = ({
  title,
  img,
  motto,
  description,
  github,
  website,
}: projectCardInfo) => {
  const cardRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,

        x: -window.innerWidth,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 75%',
          end: 'bottom 75%',

          toggleActions: 'play',
        },
      }
    );
  }, []);
  return (
    <div
      ref={cardRef}
      className="flex justify-center items-center flex-col p-10 
                      md:flex-row md:justify-around
                      hover:shadow-[0_0_30px_#00FFFF]
                      transition-all duration-500"
    >
      <div
        className="flex flex-col justify-center items-center 
                        md:w-1/2"
      >
        <div className="flex justify-center items-center gap-2 ">
          <div className="text-7xl font-semibold md:text-9xl">{title}</div>
          {img && <Image src={img} alt={img} height={100} width={100} />}
        </div>
        <div className="text-3xl italic md:text-5xl m-2">{motto}</div>
        <div className="flex justify-start items-center gap-2">
          {github && (
            <div className="hover:shadow-[0_0_20px_#00FFFF] hover:scale-120 rounded-3xl transition-all duration-200">
              <a
                className="text-2xl "
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </div>
          )}
          {website && (
            <div className="hover:shadow-[0_0_20px_#00FFFF] hover:scale-120 rounded-3xl transition-all duration-200">
              <a
                className="text-2xl"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link />
              </a>
            </div>
          )}
        </div>
      </div>
      <div
        className="flex flex-col  
                      md:w-1/2"
      >
        <div className="flex justify-center items-center flex-wrap text-center pt-5">
          <p className="text-2xl  md:text-4xl font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

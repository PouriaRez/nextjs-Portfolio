'use client';
import { TechnologyCardInfo } from '@/types/technologies';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const TechnologyCard = ({ title, technologies }: TechnologyCardInfo) => {
  const cardRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,

        x: window.innerWidth,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 70%',
          end: 'bottom 75%',

          toggleActions: 'play',
        },
      },
    );
  });

  return (
    <>
      <div
        ref={cardRef}
        className="w-full min-h-100 md:w-1/3 flex flex-col items-center border p-5 
        hover:shadow-[0_0_10px_#C0C0C0] transition-all duration-500"
      >
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

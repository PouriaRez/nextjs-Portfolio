import { technologyCardInfo } from '@/types/technologies';
import Image from 'next/image';

const TechnologyCard = ({ title }: technologyCardInfo) => {
  return (
    <>
      <div
        className="flex flex-col items-center border w-screen ml-2 mr-2 p-5 
      md:w-1/2 "
      >
        <div className="text-5xl ">{title}</div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/javascript.svg"
              alt="js"
              height={50}
              width={50}
            />
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyCard;
/*
Languages
JavaScript
TypeScript
Python
HTML
CSS / SCSS
C++
C

Frameworks & Libraries
React
React Native
Angular
MUI (Material UI)

Backend & APIs
Node.js
Express
PostgreSQL
Firebase
OpenAPI
Plaid API

Developer Tools & Testing
Git
GitHub
Docker
Vitest
React Testing Library
MSW (Mock Service Worker)

Cloud & Deployment
Vercel
Render

*/

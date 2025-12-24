import Image from 'next/image';
import TechStack from './TechStack';

const Homepage = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-around items-center h-screen md:flex-row-reverse "
    >
      <div>
        <Image
          src="/self.jpg"
          alt="Pouria Rezaei"
          width={500}
          height={500}
          className="rounded-full shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:shadow-[0_0_70px_rgba(168,85,247,0.6)] transition duration-200"
        />
      </div>

      <div>
        <div>
          <div className="text-9xl">Pouria</div>
          <div className="text-7xl italic">Fullstack Developer.</div>
        </div>
        <div>
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

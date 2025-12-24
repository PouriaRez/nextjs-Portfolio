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
          className="rounded-full shadow-[0_0_50px_#1D84B5] hover:shadow-[0_0_70px_#1D84B5] transition duration-200"
        />
      </div>

      <div>
        <div>
          {/* maybe remove linear gradient */}
          <div className="text-7xl flex justify-center items-center md:justify-start md:text-9xl bg-linear-to-r from-[#1D84B5] rounded-2xl">
            Pouria
          </div>
          <div className="text-6xl md:text-7xl italic">
            Fullstack Developer.
          </div>
        </div>
        <div>
          tech stack here.
          {/* <TechStack /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

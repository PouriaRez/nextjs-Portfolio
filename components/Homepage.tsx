import Image from 'next/image';
const Homepage = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-around items-center h-screen md:flex-row-reverse"
    >
      <div className="hover:-translate-y-2.5 transition duration-200">
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
          <div className="text-9xl flex justify-center items-center md:justify-start md:text-[12rem]">
            Pouria
          </div>
          <div className="text-6xl  md:text-8xl italic">
            Fullstack Developer.
          </div>
        </div>
        <div>
          Click this button will change above ^^ to another hobby or fact about
          me!
        </div>
      </div>
    </div>
  );
};

export default Homepage;

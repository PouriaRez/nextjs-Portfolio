import Image from 'next/image';
import { FileUser, Github, Linkedin } from 'lucide-react';
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
        <div className="flex gap-8 mt-2">
          <a
            className="flex flex-col justify-center
                      hover:scale-110 transition duration-200"
            href="/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileUser size={50} strokeWidth={1} />
            <p className="text-4xl font-bold">Resume</p>
          </a>
          <a
            className="flex flex-col justify-center
                      hover:scale-110 transition duration-200"
            href="https://github.com/PouriaRez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={50} strokeWidth={1} />
            <p className="text-4xl font-bold">Github</p>
          </a>
          <a
            className="flex flex-col justify-center
                      hover:scale-110 transition duration-200"
            href="https://www.linkedin.com/in/pouriarez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={50} strokeWidth={1} />
            <p className="text-4xl font-bold">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import TechnologyCard from './TechnologyCard';

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex justify-center items-center h-screen w-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-5">
        <TechnologyCard title="Languages" />
        <TechnologyCard title="Frontend" />
        <TechnologyCard title="Backend" />
        <TechnologyCard title="Developer Tools & Testing" />
        <TechnologyCard title="Cloud & Deployment" />
      </div>
    </div>
  );
};

export default Technologies;

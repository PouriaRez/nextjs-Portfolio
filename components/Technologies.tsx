import TechnologyCard from './TechnologyCard';

const Technologies = () => {
  const technologies = [
    {
      title: 'Frontend',
      tech: ['React', 'React Native', 'Angular', 'MaterialUI', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      tech: [
        'Node.js',
        'Express',
        'FastAPI',
        'PostgreSQL',
        'Firebase',
        'OpenAPI',
        'Plaid API',
      ],
    },
    {
      title: 'Languages',
      tech: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
    },
    {
      title: 'Developer Tools & Testing',
      tech: [
        'Docker',
        'Vercel',
        'Render',
        'Git',
        'Vitest',
        'React Testing Library',
        'Mock Service Worker (MSW)',
        'GitHub',
      ],
    },
  ];
  return (
    <div
      id="technologies"
      className="flex flex-col justify-center items-center gap-2 m-1"
    >
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.title}
          title={technology.title}
          technologies={technology.tech}
        />
      ))}
    </div>
  );
};

export default Technologies;

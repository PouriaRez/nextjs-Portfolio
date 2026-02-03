import TechnologyCard from './TechnologyCard';

const Technologies = () => {
  const technologies = [
    { title: 'Frontend', tech: ['React', 'React Native', 'Angular'] },
    {
      title: 'Backend',
      tech: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'Firebase',
        'OpenAPI',
        'Plaid API',
      ],
    },
  ];
  return (
    <div id="technologies">
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

import ProjectCard from './ProjectCard';
import { projectCardInfo } from '@/types/project';
const Projects = () => {
  const projectsList: projectCardInfo[] = [
    {
      title: 'ChariWork',
      img: '/icons/donation_icon.png',
      motto: 'Donating made easy.',
      description:
        'ChariWork helps users support causes they care about by connecting a bank account, setting donation goals, and donating to their chosen charities once the goal is reached with a click of a button. It makes charitable giving simple, goal-driven, and impactful.',
      github: 'https://github.com/PouriaRez/ChariWork',
      website: 'https://chari-work-115.vercel.app/',
    },
    {
      title: 'LockIn',
      img: '/icons/lockin.png',
      motto: 'Be Productive, LockIn.',
      description:
        'LockIn is a productivity app built during a quarter-long hackathon with the Google Developers Club (GDC) at UCSC. Designed for students and entrepreneurs, it combines social sharing with progress tracking, allowing users to set daily goals, share photos of their work, and stay motivated through social encouragement. LockIn makes productivity engaging while fostering a supportive community.',
      github: 'https://github.com/app-lockin-ucsc/Lockin-app',
    },
    {
      title: 'Tech4Good',
      img: '/icons/t4g.png',
      motto: 'Research Lab @ UCSC',
      description:
        'Causeway is an app that helps users gain real-world skills through micro-role hierarchies. It lets anyone contribute to small roles in real projects, building skills in a structured, predictable sequence. In a pilot, novices successfully created multiple static webapp views for non-profits. Causeway combines hands-on learning with community impact, making skill-building accessible and meaningful.',
      website: 'https://tech4good.soe.ucsc.edu/',
    },
    {
      title: 'MsgMi',
      img: '/icons/slug.ico',
      motto: 'Final Project | CSE 186 Fullstack Development I',
      description:
        'Developed a Slack-like messaging platform with real-time communication across workspaces and channels. Implemented user authentication, workspace/channel management, and persistent messaging using JWT, PostgreSQL, and RESTful OpenAPI endpoints. Delivered a fully functional clone with scalable backend architecture and smooth multi-workspace navigation.',
      github: 'https://github.com/PouriaRez/CSE-186/tree/main/Assignment8',
    },
    {
      title: 'TaskPilot',
      motto: 'Organize. Track. Achieve.',
      description:
        'Built a task management app with a React + TypeScript frontend and Node.js + Express backend. Implemented a RESTful CRUD API for tasks, integrated authentication/authorization, and optimized a PostgreSQL database for secure and efficient user and task management. Axios was used for smooth API requests and data handling.',
      github: 'https://github.com/PouriaRez/Task-Mangement',
    },
  ];
  return (
    <div id="projects" className="h-fit group">
      {projectsList.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          motto={p.motto}
          description={p.description}
          img={p.img}
          github={p.github}
          website={p.website}
        />
      ))}
    </div>
  );
};
export default Projects;

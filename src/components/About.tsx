import React from 'react';
import { Icons } from '../enums';

const languageList = [
  {
    name: 'JavaScript',
    icon: Icons.JavaScript,
    experience: 4,
  },
  {
    name: 'TypeScript',
    icon: Icons.TypeScript,
    experience: 4,
  },
  {
    name: 'Bash',
    icon: Icons.Shell,
    experience: 6,
  },
  {
    name: 'SQL',
    icon: Icons.SQL,
    experience: 3,
  },
  {
    name: 'Rust',
    icon: Icons.Rust,
    experience: 1,
  },
  {
    name: 'Java',
    icon: Icons.Java,
    experience: 1,
  },
];

const toolList = [
  {
    name: 'NPM',
    icon: Icons.NPM,
    experience: 4,
  },
  {
    name: 'Yarn',
    icon: Icons.Yarn,
    experience: 4,
  },
  {
    name: 'Cargo',
    icon: Icons.Cargo,
    experience: 1,
  },
  {
    name: 'Docker',
    icon: Icons.Docker,
    experience: 2,
  },
  {
    name: 'Git',
    icon: Icons.Git,
    experience: 3,
  },
  {
    name: 'GitHub',
    icon: Icons.GitHub,
    experience: 3,
  },
  {
    name: 'AWS',
    icon: Icons.AWS,
    experience: 2,
  },
  {
    name: 'Orange Pi',
    icon: Icons.OrangePi,
  },
];

const frameworkList = [
  {
    name: 'Node.js',
    icon: Icons.Node,
    experience: 4,
  },
  {
    name: 'Express',
    icon: Icons.Express,
    experience: 4,
  },
  {
    name: 'React',
    icon: Icons.React,
  },
  {
    name: 'Vue.js',
    icon: Icons.Vue,
  },
  {
    name: 'Spring Boot',
    icon: Icons.Spring,
  },
];

const osList = [
  {
    name: 'Linux',
    icon: Icons.Linux,
    experience: 4,
  },
  {
    name: 'Windows',
    icon: Icons.Windows,
  },
];

const About: React.FC = () => {
  return (
    <>
      <p>
        I currently work as a Full-Stack Web Developer oriented more towards the backend with Node.js, Express
        and Typescript, although I have done frontend things with React.js although it is not my forte. I have
        been using Arch Linux as my main operating system for over 3 years. I am interested in all the
        low-level systems and parts and understanding how computers and programming languages work behind the
        scenes.
      </p>

      <div className='grid grid-cols-2 gap-4 mt-7'>
        <div>
          <h3 className='text-xl mb-2'>Languages</h3>
          <ul className='list list-inside grid grid-cols-2'>
            {languageList.map((language) => (
              <li className='p-1'>
                <i className={`${language.icon} text-xl`} /> {language.name}
              </li>
            ))}
          </ul>

          <h3 className='text-xl mt-5 mb-2'>Tools</h3>
          <ul className='list list-inside grid grid-cols-2'>
            {toolList.map((tool) => (
              <li className='p-1'>
                <i className={`${tool.icon} text-xl`} /> {tool.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-xl mb-2'>Frameworks</h3>
          <ul className='list list-inside grid grid-cols-2'>
            {frameworkList.map((framework) => (
              <li className='p-1'>
                <i className={`${framework.icon} text-xl`} /> {framework.name}
              </li>
            ))}
          </ul>

          <h3 className='text-xl mt-5 mb-2'>Operating Systems</h3>
          <ul className='list list-inside grid grid-cols-2'>
            {osList.map((os) => (
              <li className='p-1'>
                <i className={`${os.icon} text-xl`} /> {os.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className='text-[10px] text-gray mt-5'>
        **Obviously, I don't know these technologies perfectly; they are technologies that I believe I can
        work on a project with, encountering more or fewer problems. For more assurance, check out my GitHub.
      </p>
    </>
  );
};

export default About;

import React from 'react';
import { Icons, IconsColor } from '../enums';

const languageList = [
  {
    name: 'JavaScript',
    icon: Icons.JavaScript,
    color: IconsColor.JavaScript,
    experience: 4,
  },
  {
    name: 'TypeScript',
    icon: Icons.TypeScript,
    color: IconsColor.TypeScript,
    experience: 4,
  },
  {
    name: 'Bash',
    icon: Icons.Shell,
    color: IconsColor.Shell,
    experience: 6,
  },
  {
    name: 'SQL',
    icon: Icons.SQL,
    color: IconsColor.SQL,
    experience: 3,
  },
  {
    name: 'Rust',
    icon: Icons.Rust,
    color: IconsColor.Rust,
    experience: 1,
  },
  {
    name: 'Java',
    icon: Icons.Java,
    color: IconsColor.Java,
    experience: 1,
  },
];

const toolList = [
  {
    name: 'NPM',
    icon: Icons.NPM,
    color: IconsColor.NPM,
    experience: 4,
  },
  {
    name: 'Yarn',
    icon: Icons.Yarn,
    color: IconsColor.Yarn,
    experience: 4,
  },
  {
    name: 'Cargo',
    icon: Icons.Cargo,
    color: IconsColor.Rust,
    experience: 1,
  },
  {
    name: 'Docker',
    icon: Icons.Docker,
    color: IconsColor.Docker,
    experience: 2,
  },
  {
    name: 'Git',
    icon: Icons.Git,
    color: IconsColor.Git,
    experience: 3,
  },
  {
    name: 'GitHub',
    icon: Icons.GitHub,
    color: IconsColor.GitHub,
    experience: 3,
  },
  {
    name: 'AWS',
    icon: Icons.AWS,
    color: IconsColor.AWS,
    experience: 2,
  },
  {
    name: 'Orange Pi',
    icon: Icons.OrangePi,
    color: IconsColor.OrangePi,
  },
];

const frameworkList = [
  {
    name: 'Node.js',
    icon: Icons.Node,
    color: IconsColor.Node,
  },
  {
    name: 'Express',
    icon: Icons.Express,
    color: IconsColor.Node,
    experience: 4,
  },
  {
    name: 'React',
    icon: Icons.React,
    color: IconsColor.React,
  },
  {
    name: 'Vue.js',
    icon: Icons.Vue,
    color: IconsColor.Vue,
  },
  {
    name: 'Spring Boot',
    icon: Icons.Spring,
    color: IconsColor.Spring,
  },
];

const osList = [
  {
    name: 'Linux',
    icon: Icons.Linux,
    experience: 4,
    color: IconsColor.Linux,
  },
  {
    name: 'Windows',
    icon: Icons.Windows,
    color: IconsColor.Windows,
  },
];

const databaseList = [
  {
    name: 'MongoDB',
    icon: Icons.MongoDB,
    color: IconsColor.MongoDB,
  },
  {
    name: 'MySQL',
    icon: Icons.MySQL,
    color: IconsColor.MySQL,
  },
  {
    name: 'PostgreSQL',
    icon: Icons.PostgreSQL,
    color: IconsColor.PostgreSQL,
  },
  {
    name: 'Redis',
    icon: Icons.Redis,
    color: IconsColor.Redis,
  },
];

const editorList = [
  {
    name: 'NeoVim',
    icon: Icons.NeoVim,
    color: IconsColor.NeoVim,
  },
  {
    name: 'VSCode',
    icon: Icons.VSCode,
    color: IconsColor.VSCode,
  },
];

const About: React.FC = () => {
  return (
    <>
      <p>
        Currently, I work as a Full-Stack Web Developer with a focus more on backend using Node.js, Express,
        and Typescript. Although I have done some frontend work with React.js, it is not my strong suit. I
        have been using <label className="text-arch-color">{Icons.ArchLInux}</label> Arch Linux as my primary
        operating system for over 3 years. I am interested in all low-level systems and components, and in
        understanding how computers and programming languages work behind the scenes.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-7">
        <div>
          <h3 className="text-xl mb-2">Languages</h3>
          <ul className="list list-inside grid grid-cols-2">
            {languageList.map((language) => (
              <li className="p-1">
                <label className={`${language.color} text-xl`}>{language.icon}</label> {language.name}
              </li>
            ))}
          </ul>

          <h3 className="text-xl mt-5 mb-2">Tools</h3>
          <ul className="list list-inside grid grid-cols-2">
            {toolList.map((tool) => (
              <li className="p-1">
                <label className={`${tool.color} text-xl`}>{tool.icon}</label> {tool.name}
              </li>
            ))}
          </ul>

          <h3 className="text-xl mt-5 mb-2">Editors</h3>
          <ul className="list list-inside grid grid-cols-2">
            {editorList.map((editor) => (
              <li className="p-1">
                <label className={`${editor.color} text-xl`}>{editor.icon}</label> {editor.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-2">Frameworks</h3>
          <ul className="list list-inside grid grid-cols-2">
            {frameworkList.map((framework) => (
              <li className="p-1">
                <label className={`${framework.color} text-xl`}>{framework.icon}</label> {framework.name}
              </li>
            ))}
          </ul>

          <h3 className="text-xl mt-5">Database</h3>
          <ul className="list list-inside grid grid-cols-2">
            {databaseList.map((database) => (
              <li className="p-1">
                <label className={`${database.color} text-xl`}>{database.icon}</label> {database.name}
              </li>
            ))}
          </ul>

          <h3 className="text-xl mt-2 mb-2">Operating Systems</h3>
          <ul className="list list-inside grid grid-cols-2">
            {osList.map((os) => (
              <li className="p-1">
                <label className={`${os.color} text-xl`}>{os.icon}</label> {os.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-[10px] text-gray mt-5">
        **Obviously, I don't know these technologies perfectly; they are technologies that I believe I can
        work on a project with, encountering more or fewer problems. For more assurance, check out my GitHub.
      </p>
    </>
  );
};

export default About;

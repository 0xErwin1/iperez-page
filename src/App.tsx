import { SetStateAction, useEffect, useRef, useState } from "react";
import Modal from "./components/Modal";
import About from "./components/About";
import Projects from "./components/Projects";
import { Octokit } from "@octokit/core";
import ServerInfrastructure from "./components/ServerInfrastructure";
import Help from "./components/Help";
import Toast from "./components/Toast";
import WebAbout from "./components/WebAbout";

interface Links {
  name: string;
  url: string;
  color: string;
  icon: string;
}

export interface ProjectGithubResponse {
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  default_branch: string;
  topics: string[];
  archived: boolean;
  disabled: boolean;
  visibility: string;
  created_at: Date;
  updated_at: Date;
}

const links: Links[] = [
  {
    name: "GitHub",
    url: "https://github.com/BasileusErwin",
    color: "text-github-color",
    icon: "fab fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ignacio-perez-camejo",
    color: "text-linkedin-color",
    icon: "fab fa-linkedin",
  },
  {
    name: "arc()",
    url: "https://arc.dev/@ignacioperez_",
    color: "text-arc-color",
    icon: "",
  },
  {
    name: "Gitlab",
    url: "https://gitlab.com/BasileusErwin",
    color: "text-gitlab-color",
    icon: "fab fa-gitlab",
  },
];

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showServerInfrastructure, setShowServerInfrastructure] =
    useState(false);
  const [isCommandMode, setCommandMode] = useState(false);
  const [helpMode, setHelpMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showWebAbout, setShowWebAbout] = useState(false);

  const [projects, setProjects] = useState<ProjectGithubResponse[]>([]);
  const [command, setCommand] = useState("");
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  const executeCommand = (cmd: string) => {
    switch (cmd) {
      case "q":
        setShowAbout(false);
        setShowProjects(false);
        setShowServerInfrastructure(false);
        setHelpMode(false);
        break;
      case "web":
        setShowWebAbout(true);
        break;
      case "help":
      case "h":
      case "?":
        setHelpMode(true);
        break;
      case "about":
        setShowAbout(true);
        break;
      case "projects":
        setShowProjects(true);
        break;
      case "server":
        setShowServerInfrastructure(true);
        break;
      case "github":
        window.open(links[0].url);
        break;
      case "linkedin":
        window.open(links[1].url);
        break;
      case "arc":
        window.open(links[2].url);
        break;
      case "gitlab":
        window.open(links[3].url);
        break;
      default:
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await octokit.request("GET /users/BasileusErwin/repos", {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        const projectFiltereds: ProjectGithubResponse[] = result.data.filter(
          (project: ProjectGithubResponse) =>
            !project.fork && project.name !== "iperez-page"
        );

        setProjects(projectFiltereds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleInputKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      executeCommand(command.slice(1));
      setCommandMode(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log(event.key);
    if (event.key === "Escape") {
      setCommandMode(false);
      setShowAbout(false);
      setShowProjects(false);
      setShowServerInfrastructure(false);
      setHelpMode(false);
      setShowWebAbout(false);
    }

    if (event.key === ":") {
      setCommandMode(true);
      setCommand("");
    }
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCommand(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isCommandMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCommandMode]);

  return (
    <>
      {showToast && (
        <Toast
          message="Command not recognized. Type :help for more information."
          onClose={() => setShowToast(false)}
        />
      )}
      <Modal
        show={showWebAbout}
        onClose={() => setShowWebAbout(false)}
        titleStyle="text-2xl text-grey"
        title="About This Page"
        icon="fa fa-info-circle text-yellow"
      >
        <WebAbout />
      </Modal>
      <Modal
        show={helpMode}
        onClose={() => setHelpMode(false)}
        titleStyle="text-2xl text-grey"
        title="Help"
        icon="fa fa-question-circle text-yellow"
      >
        <Help />
      </Modal>
      <Modal
        show={showAbout}
        onClose={() => setShowAbout(false)}
        titleStyle="text-2xl text-grey"
        title="About Me"
        icon="fa fa-address-card text-cyan"
      >
        <About />
      </Modal>
      <Modal
        show={showProjects}
        titleStyle="text-2xl text-grey"
        icon="fa fa-folder text-green"
        onClose={() => setShowProjects(false)}
        title="Projects"
      >
        <Projects projects={projects} />
      </Modal>
      <Modal
        show={showServerInfrastructure}
        titleStyle="text-2xl text-grey"
        icon="fa fa-server text-blue"
        onClose={() => setShowServerInfrastructure(false)}
        title="Server Infrastructure"
      >
        <ServerInfrastructure />
      </Modal>
      <div className="font-fira min-h-screen bg-gray flex flex-col items-center justify-center">
        <div className="p-8 bg-gray-dark shadow-2xl w-400 rounded-xl">
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://avatars.githubusercontent.com/u/67933444?v=4"
              alt="Ignacio Perez"
              className="rounded-full w-32 mx-auto mb-4 shadow-2xl"
            />
            <h1 className="text-2xl mb-4 text-yellow items-center">
              Hi, I'm Ignacio Perez
            </h1>
            <p className="text-yellow">Software Developer</p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="text-cyan p-2 flex items-center justify-center  hover:text-white"
              onClick={() => setShowAbout(true)}
              type="button"
            >
              <i className="fa fa-address-card p-1 mr-1" />
              <p>About Me</p>
            </button>
            <button
              className="text-green p-2 flex items-center justify-center  hover:text-white "
              onClick={() => setShowProjects(true)}
              type="button"
            >
              <i className="fa fa-folder p-1 mr-1" />
              Projects
            </button>
            <button
              className="text-blue p-2 flex items-center justify-center  hover:text-white "
              onClick={() => setShowServerInfrastructure(true)}
              type="button"
            >
              <i className="fa fa-server p-1 mr-1" />
              Server Infrastructure
            </button>
          </div>
          <div className="grid grid-cols-2 mt-10">
            {links.map((link: Links) => (
              <div className={`${link.color} bg-gray-mirage rounded-lg m-2`}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-xl m-2 text-center p-2 hover:text-white"
                >
                  <i className={`${link.icon} mr-2`} />
                  <p>{link.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        {isCommandMode && (
          <input
            type="text"
            ref={inputRef}
            value={command}
            onChange={handleChange}
            onKeyDown={handleInputKeyDown}
            className="w-full bg-gray-dark text-white p-2"
          />
        )}
      </div>
    </>
  );
}

export default App;

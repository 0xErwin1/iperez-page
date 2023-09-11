import { Icons, IconsColor } from '../enums';

const WebAbout: React.FC = () => {
  return (
    <div className="">
      <p>
        This page was made with <i className={`nf ${Icons.React} ${IconsColor.React} text-xl`} /> React with{' '}
        <i className={`nf ${Icons.TypeScript} ${IconsColor.TypeScript} text-xl`} /> Typescript and{' '}
        <i className={`nf ${Icons.TailwindCSS} ${IconsColor.TailwindCSS} text-xl`} /> Tailwindcss and build
        with Vite. The page is hosted in <i className="nf nf-fa-cloud text-aws-color" /> Cloudflare pages and
        the source code in{' '}
        <a
          href="https://github.com/BasileusErwin/iperez-page"
          className=" text-grey hover:text-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`nf ${Icons.GitHub} ${IconsColor.GitHub} text-xl`} /> Github{' '}
          <i className="fa fa-external-link text-xs" />
        </a>
        .
      </p>

      <h2 className="text-xl mt-5 mb-2">Others:</h2>
      <ul>
        <li>
          <a
            href="https://biomejs.dev"
            className=" text-grey hover:text-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biome - Linter and formatter <i className="fa fa-external-link text-xs" />
          </a>
        </li>
        <li>Github API - To get my repos</li>
        <li>
          Color palette:{' '}
          <a
            href="https://github.com/ayu-theme/"
            className=" text-grey hover:text-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayu <i className="fa fa-external-link text-xs" />
          </a>
        </li>
        <li>Font: Fira Code </li>
        <li>
          Icons:{' '}
          <a
            href="https://fontawesome.com/"
            className=" text-grey hover:text-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Font Awesome
            <i className="fa fa-external-link text-xs" />
          </a>{' '}
          and{' '}
          <a
            href="https://nerdfonts.com/"
            className=" text-grey hover:text-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nerd fonts <i className="fa fa-external-link text-xs" />
          </a>
        </li>
        <li>Github Copilot and ChatGPT - AI to help me with the code. </li>
      </ul>
      <span className="text-xs">**I'm mainly Backend Developer, I'm allergic to css.</span>
    </div>
  );
};

export default WebAbout;

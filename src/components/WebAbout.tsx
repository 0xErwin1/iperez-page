import { Icons, IconsColor } from "../enums";

const WebAbout: React.FC = () => {
  return (
    <div className="">
      <p>
        This page was made with{" "}
        <label className={`${IconsColor.React} text-xl`}>{Icons.React}</label>
        React with{" "}
        <label className={`${IconsColor.TypeScript} text-xl`}>
          {Icons.TypeScript}
        </label>
        Typescript and{" "}
        <label className={`${IconsColor.TailwindCSS} text-xl`}>
          {Icons.TailwindCSS}
        </label>
        Tailwindcss and build with Vite. The page is hosted in{" "}
        <label className="text-aws-color"> </label>
        Cloudflare pages and the source code in {" "}
        <a
          href="https://github.com/BasileusErwin/iperez-page"
          className=" text-grey hover:text-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <label className={`${IconsColor.GitHub} text-xl`}>
            {Icons.GitHub}
          </label>
          Github <i className="fa fa-external-link text-xs" />
        </a>
        .
      </p>

      <h2 className="text-xl mt-5 mb-2">Others:</h2>
      <ul>
        <li>
          <p>Rome - Linter and formatter</p>
        </li>
        <li>
          <p>
            <label className={`${IconsColor.GitHub} text-xl`}>
              {Icons.GitHub}
            </label>
            Github API - To get my repos
          </p>
        </li>
        <li>
          Color theme:{" "}
          <a
            href="https://github.com/ayu-theme/"
            className=" text-grey hover:text-yellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayu <i className="fa fa-external-link text-xs" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WebAbout;

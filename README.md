# iperez.dev - Personal Website

This repository contains the source code for [iperez.dev](https://iperez.dev), the personal website and online resume of Ignacio Perez, a backend developer and amateur low-level programmer. The site is built with [Astro](https://astro.build), TypeScript, and utilizes modern tooling such as [Biome](https://biomejs.dev) for linting and formatting, along with a reproducible development environment using Nix.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This project serves as a personal portfolio and resume website, showcasing my skills, work experience, education, and open-source projects. It features a responsive design, interactive components, and integrates data from a structured JSON file that holds my resume details.

---

## Tech Stack

- **Astro** – A modern static site generator.
- **TypeScript** – Enhances JavaScript with type safety.
- **Biome** – For code formatting and linting.
- **Nix** – Provides a reproducible development environment.
- **direnv** – Manages environment variables for Nix shells.
- **pnpm** – Efficient package management.

---

## Features

- **Personal Resume**: Displays professional experience, education, and skills.
- **Portfolio Section**: Showcases open-source projects with links, stars, and tags.
- **Social Profiles**: Integrated icons and links to GitHub, LinkedIn, and GitLab.
- **Responsive Design**: Mobile-friendly layouts and adaptive styling.
- **Modern Tooling**: Robust development workflow with Biome, TypeScript, and Nix.

---

## Project Structure

A brief overview of the project's structure:

```text
/
├── .envrc                  # Nix environment configuration
├── shell.nix               # Nix shell definition for development
├── biome.json              # Biome configuration for linting/formatting
├── package.json            # Project dependencies and scripts
├── pnpm-lock.yaml          # pnpm lock file
├── public/
│   ├── favicon.svg         # Site favicon
│   ├── profile.webp        # Profile image used on the site
│   └── ...                 # Other public assets
└── src/
    ├── components/         # Reusable UI components (Me, About, Work, etc.)
    ├── layouts/            # Page layout components
    ├── pages/              # Astro pages (e.g., index.astro)
    ├── cv.json             # JSON file containing resume data
    └── types/              # Additional TypeScript type definitions
```

For more details on Astro’s recommended structure, refer to the [Astro documentation](https://docs.astro.build/en/basics/project-structure/).

---

## Getting Started

To set up the project locally, ensure you have [Node.js](https://nodejs.org/) (v18 or later) installed. You can use either **npm** or **pnpm** as your package manager.

### Installation

Using **pnpm** (recommended):

```sh
pnpm install
```

Or using **npm**:

```sh
npm install
```

If you use Nix with direnv, simply enter the development shell with:

```sh
direnv allow
```

---

## Development Commands

Run these commands from the project root:

| Command                   | Action                                                         |
| ------------------------- | -------------------------------------------------------------- |
| `pnpm run dev`            | Start the local development server at [localhost:4321](http://localhost:4321) |
| `pnpm run build`          | Build the production site into the `./dist/` directory         |
| `pnpm run preview`        | Preview your production build locally                          |
| `pnpm run astro ...`      | Run Astro CLI commands (e.g., `astro add`, `astro check`)        |
| `pnpm run lint`           | Lint source files using Biome                                  |
| `pnpm run format`         | Format source files using Biome                                |

*(You can also use `npm run ...` if you installed via npm.)*

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests if you’d like to help improve the project. When contributing, please follow the project's coding standards and ensure your changes pass linting and formatting checks.

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure all tests pass.
4. Submit a pull request with a clear description of your changes.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

For any questions or suggestions, feel free to reach out:

- **GitHub**: [0xErwin1](https://github.com/0xErwin1)
- **LinkedIn**: [Ignacio Perez](https://www.linkedin.com/in/ignacio-perez-camejo/)

---

Enjoy exploring the site and thanks for stopping by!

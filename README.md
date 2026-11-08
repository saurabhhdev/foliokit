# FolioKit

<p align="center">
  <strong>A developer portfolio, from an empty folder to your own in one command.</strong><br />
  FolioKit is a lightweight CLI that scaffolds a polished, responsive portfolio you can make your own.
</p>

<p align="center">
  <a href="https://github.com/saurabhhdev/foliokit"><img alt="GitHub repository" src="https://img.shields.io/badge/GitHub-foliokit-181717?logo=github&logoColor=white"></a>
  <a href="https://www.npmjs.com/package/create-foliokit"><img alt="npm package" src="https://img.shields.io/npm/v/create-foliokit?color=cb3837&logo=npm&logoColor=white"></a>
  <a href="https://www.npmjs.com/package/create-foliokit"><img alt="npm downloads" src="https://img.shields.io/npm/dm/create-foliokit?color=cb3837&logo=npm&logoColor=white"></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-38c98b.svg"></a>
</p>

<p align="center">
  <img src="public/foliokit-preview.svg?v=1b47144" alt="Original FolioKit landing page screenshot" width="100%" />
</p>
<p align="center">
  <a href="https://create-foliokit.vercel.app/">🌐 Visit the landing page</a>
  &nbsp; • &nbsp;
  <a href="https://saurabhhdev.vercel.app/">✨ View a live portfolio example</a>
</p>

## Get started

Run the interactive setup, give your project a name, and start the development server:

```bash
npx create-foliokit
cd my-portfolio
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your new portfolio. To install the CLI globally instead, run `npm install -g create-foliokit`, then use `foliokit create`.

## Make it yours

The generated portfolio is designed to be easy to personalize. Update its `data.ts` file with your name, bio, skills, experience, education, projects, testimonials, and links. Replace the starter images and adjust the sections to fit your story.

The template includes a project gallery, responsive layout, light and dark themes, and a contact area. No API keys or environment variables are needed to get started.

## What’s included

- **A portfolio scaffold, ready to edit** — introduce yourself, share your work, and add your resume.
- **Project showcase** — highlight projects with links to demos and source code.
- **Skills and experience** — organize technologies, work history, and education.
- **Social links and contact** — make it easy for people to find and reach you.
- **Testimonials** — add recommendations from colleagues, clients, or mentors.
- **Responsive design** — a considered layout for desktop, tablet, and mobile.
- **Light and dark themes** — let visitors choose the look that suits them.

## Built with

The generated portfolio uses **React 19**, **TypeScript**, **Vite 8**, and **CSS**. This repository contains the FolioKit landing page, built with React 19, TypeScript, Vite 8, and Lucide icons.

## Run this website locally

Requires **Node.js 22.12.0 or later**.

```bash
git clone https://github.com/saurabhhdev/foliokit.git
cd foliokit
npm ci
npm run dev
```

Create and preview a production build with:

```bash
npm run build
npm run preview
```

The build output is in `dist/`. To deploy the website, use `npm run build` as the build command and `dist` as the output directory. Vercel configuration is included in `vercel.json`.

## CLI commands

| Command | Description |
| --- | --- |
| `npx create-foliokit` | Start the interactive portfolio setup. |
| `foliokit create` | Open the setup wizard when the CLI is installed globally. |
| `foliokit --help` | Show CLI usage and options. |
| `foliokit --version` | Show the installed CLI version. |

## Links

- [FolioKit on npm](https://www.npmjs.com/package/create-foliokit)
- [Live landing page](https://create-foliokit.vercel.app/)
- [Live portfolio example](https://saurabhhdev.vercel.app/)
- [GitHub repository](https://github.com/saurabhhdev/foliokit)

## Credits

The idea and design were taken from [deepakmodidev (Deepak Modi)](https://github.com/deepakmodidev).

## Author

Built by [Saurabh Pandey](https://saurabhhdev.vercel.app/). Connect on [LinkedIn](https://www.linkedin.com/in/saurabh-pandey-685347384/).

## License

FolioKit is distributed under the [MIT License](LICENSE). Copyright © 2026 Saurabh Pandey.

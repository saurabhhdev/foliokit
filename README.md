# FolioKit Website

The official website for [FolioKit](https://www.npmjs.com/package/create-foliokit), a CLI that scaffolds customizable developer portfolios.

## Stack

- React 19 and TypeScript
- Vite 8
- Lucide React icons and CSS
- External assets: Google Fonts, Flaticon UI icons, and Skill Icons

## Requirements

Use Node.js 22.12.0 or later. No environment variables are required.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. The build script runs TypeScript project checks before Vite creates the production bundle.

## Deployment

Deploy the repository root with `npm run build` as the build command and `dist` as the output directory. `vercel.json` configures Vite framework detection and SPA fallback for Vercel; other static hosts should publish `dist` and use an equivalent SPA fallback if needed.

The production domain and social preview artwork have not been configured. Add the canonical URL and absolute Open Graph/Twitter image metadata in `index.html` once those are finalized. A sitemap should be added at that time if the site is deployed on a stable public domain.

## License

Distributed under the [MIT License](https://opensource.org/licenses/MIT). Copyright &copy; 2026 Saurabh Pandey.

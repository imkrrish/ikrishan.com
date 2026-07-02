# ikrishan.com

### Personal Portfolio of Krishan Kumar

<p align="center">
  <a href="https://ikrishan.com">
    <img
      src="https://assets.ikrishan.com/images/screenshot-desktop-dark.webp?v=9"
      alt="Krishan Kumar Portfolio"
      width="100%"
    />
  </a>
</p>

<p align="center">
  <strong>A modern portfolio showcasing my work, experience, and projects as a Software Development Engineer.</strong>
</p>

<p align="center">
  <a href="https://ikrishan.com"><strong>Live Website</strong></a>
  ·
  <a href="https://github.com/imkrrish/ikrishan.com"><strong>Source Code</strong></a>
  ·
  <a href="https://www.linkedin.com/in/imkrrish/"><strong>LinkedIn</strong></a>
</p>

---

## About

This repository contains the source code for [ikrishan.com](https://ikrishan.com), my personal portfolio website.

The site highlights my professional experience, technical skills, education, certifications, featured projects, GitHub activity, and contact information in one polished, fast, and SEO-friendly web experience.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Radix UI
- Motion
- MDX and Markdown tooling
- PostHog analytics
- Vercel

## Features

- Responsive portfolio layout
- Light, dark, and system themes
- Interactive command menu
- Animated avatar lighting and UI interactions
- Experience, education, certification, and project sections
- Technical skills overview
- GitHub contribution graph
- Downloadable vCard route
- `llms.txt` and markdown profile routes
- SEO metadata, Open Graph images, sitemap, and robots.txt
- PostHog event tracking with consent management
- Screenshot capture script for social and preview assets
- Performance-focused architecture

## Getting Started

### Prerequisites

- Node.js 22.x
- pnpm 9 or newer

### Installation

```bash
git clone https://github.com/imkrrish/ikrishan.com.git
cd ikrishan.com
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Available Scripts

- `pnpm dev` - Start the local development server.
- `pnpm build` - Build the production application.
- `pnpm start` - Start the production server.
- `pnpm preview` - Build and start the production server.
- `pnpm lint` - Run ESLint.
- `pnpm lint:fix` - Fix lint issues automatically where possible.
- `pnpm check-types` - Run TypeScript type checks.
- `pnpm format:check` - Check formatting with Prettier.
- `pnpm format:write` - Format supported files with Prettier.
- `pnpm capture` - Capture website screenshots.

## Environment Variables

Create a `.env.local` file when you need to override optional runtime configuration:

```bash
APP_URL=https://ikrishan.com
GITHUB_API_TOKEN=
GITHUB_CONTRIBUTIONS_API_URL=
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=
NEXT_PUBLIC_POSTHOG_HOST=
```

## Project Structure

```text
src/app                     Next.js app routes, metadata, sitemap, robots, OG, vCard, and llms routes
src/components              Shared UI, layout, navigation, markdown, command menu, and theme components
src/features/portfolio      Portfolio data, types, and feature-specific components
src/hooks                   Reusable React hooks
src/lib                     Shared utilities, events, phone metadata, and markdown helpers
src/scripts                 Utility scripts such as screenshot capture
src/styles                  Global and shared CSS
src/config                  Site navigation and metadata configuration
```

## Deployment

The project is optimized for deployment on Vercel. Configure the required environment variables and deploy directly from the repository.

## Inspiration

This portfolio was inspired by Chánh Đại Nguyễn's portfolio and has since been redesigned, extended, and customized with my own content, features, and implementation.

## License

This project is licensed under the MIT License.

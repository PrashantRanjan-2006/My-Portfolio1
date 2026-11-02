# Prashant Ranjan — Portfolio

> A polished, interactive developer portfolio for showcasing full-stack Java development, projects, achievements, and open-source activity.

[![Next.js](https://img.shields.io/badge/Next.js-15.0.0-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Overview

This portfolio is built with Next.js App Router and TypeScript. It combines a clean editorial visual style with interactive motion, live developer statistics, project highlights, and a validated contact form.

## Highlights

- Responsive portfolio experience for desktop, tablet, and mobile.
- Interactive hero section with a draggable animated Rubik's cube.
- Animated page sections with smooth navigation and scroll progress.
- Project, achievement, technology, and open-source sections.
- GitHub, LeetCode, and Codolio data integrations with graceful fallbacks.
- Contact form with EmailJS, Resend, and Web3Forms provider options.
- SEO metadata, Open Graph configuration, sitemap, robots rules, and JSON-LD profile data.
- Accessible focus states, semantic landmarks, and responsive navigation.

## Technology

- **Framework:** Next.js 15 with the App Router
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, Framer Motion
- **Icons:** Lucide React
- **Validation:** Zod and React Hook Form
- **Integrations:** GitHub GraphQL/REST, LeetCode, Codolio, EmailJS, Resend, Web3Forms

## Project Structure

```text
app/                 Next.js routes, metadata, global styles, and API routes
components/          Reusable UI, layout, form, motion, and visual components
hooks/               Shared React hooks
lib/                 Configuration, validation, utilities, and sound helpers
public/               Static images and downloadable resume
sections/            Portfolio page sections
services/            External service helpers
types/               Shared TypeScript types
portfolio.config.ts  Portfolio content and site configuration
```

## Getting Started

### Prerequisites

- Node.js 18.18 or newer
- npm 9 or newer

### Installation

```bash
git clone https://github.com/PrashantRanjan-2006/My-Portfolio1.git
cd My-Portfolio1
npm install
```

Copy the example environment file and add only the services you want to enable:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The application works with configured public profile data and optional integrations. Keep `.env.local` private and never commit it.

| Variable | Purpose |
| --- | --- |
| `GITHUB_USERNAME` | GitHub profile username |
| `GITHUB_TOKEN` | Optional GitHub token for higher API limits |
| `LEETCODE_USERNAME` | LeetCode profile username |
| `CODOLIO_USERNAME` | Codolio profile username |
| `EMAILJS_SERVICE_ID` | EmailJS server-side service ID |
| `EMAILJS_TEMPLATE_ID` | EmailJS server-side template ID |
| `EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `RESEND_API_KEY` | Optional Resend API key |
| `WEB3FORMS_ACCESS_KEY` | Optional Web3Forms access key |
| `CONTACT_TO_EMAIL` | Contact form recipient |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Production

Build and run the production application:

```bash
npm run build
npm run start
```

The project can be deployed to Vercel or any Node.js-compatible hosting platform.

## Customization

Most portfolio content is centralized in [`portfolio.config.ts`](./portfolio.config.ts). Update personal details, social links, projects, achievements, skills, SEO values, and feature flags there.

Static images and the resume are stored under [`public/assets`](./public/assets).

## Quality Checks

Before submitting changes, run:

```bash
npm run typecheck
npm run lint
npm run build
```

## License

This project is a personal portfolio. Please contact the author before reusing personal content, images, or branding.

## Contact

- **Author:** Prashant Ranjan
- **GitHub:** [@PrashantRanjan-2006](https://github.com/PrashantRanjan-2006)
- **Portfolio:** [My-Portfolio1](https://github.com/PrashantRanjan-2006/My-Portfolio1)

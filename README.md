# Vetri Kalanjiyam — Portfolio

A modern, high-performance personal portfolio built with Next.js, Tailwind CSS, and TypeScript.

Cyberpunk-inspired dark UI with neon glow accents, framer-motion animations, and a command-palette (Ctrl/Cmd+K) for quick navigation.

## Features

- Hero with animated gradient background and typewriter tagline
- About with circular profile glow and XP-style stat bars
- Projects grid with hover glow, tech badges, and links
- Skills grouped by categories with gradient badges
- Optional Experience timeline
- Contact form (mailto) + social links
- Command Palette (Ctrl/Cmd+K) to jump between sections
- Fully responsive, smooth scrolling, neon dark theme

## Tech Stack

- Next.js 16 (Pages Router)
- Tailwind CSS 4 (utilities)
- TypeScript
- framer-motion, react-type-animation, react-icons

## Getting Started

```powershell
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Then open http://localhost:3000

## Customize

- Replace resume: `public/Vetri_Kalanjiyam_Resume.pdf`
- Profile photo: add `public/profile.jpg` (square ~512x512). It's rendered in the About section.
- Project images: add thumbnails under `public/projects/` and update paths in `src/data/projects.ts`
- Social links: edit `src/data/social.ts`
- Skills/Experience: edit `src/data/skills.ts` and `src/data/experience.ts`
- Colors/Theme: tweak `src/styles/globals.css`

### Email (send inside the site)

This project uses EmailJS to send the Contact form without leaving the site.

1. Create a free account at https://www.emailjs.com/
2. Add a service and an email template with fields: `name`, `email`, `message`
3. Copy your Service ID, Template ID, and Public Key
4. Create `.env.local` from `.env.local.example` and fill:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Restart the dev server

The Contact form will now send emails directly via EmailJS.

## Keyboard Shortcut

- Press Ctrl+K (Windows/Linux) or Cmd+K (macOS) to open the command palette and jump to sections.

## License

MIT — feel free to use and adapt.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

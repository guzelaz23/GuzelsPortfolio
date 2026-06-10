# Ryantinisa Guzelazkia — Portfolio

A clean, professional, light-mode portfolio for **Ryantinisa Guzelazkia**,
Information Systems student focused on **Data Analytics · System Analysis · Product**.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and
**Framer Motion**. No backend, database, CMS, or auth.

## Design

- Light mode, bluesky palette: `#2563EB` `#38BDF8` `#0EA5E9` `#E0F2FE` `#F8FAFC` `#0F172A`
- Typography: Playfair Display (display), Plus Jakarta Sans (headings), Inter (body)
- Subtle micro-interactions, fade-in on scroll, soft shadows, rounded corners
- Icons from `lucide-react`; "RG" favicon generated from `app/icon.svg`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Pages

Home · About · Projects · Skills · Experience · Education · Contact

Homepage sections: Hero → Who I Am + What I Do → Selected Projects →
Tech Stack → Call to Action.

## Structure

```
app/                 Routes (App Router) + layout, globals.css, sitemap, robots, icon
components/
  navbar.tsx footer.tsx
  sections/          Homepage sections (hero, about-summary, featured-projects, tech-stack, contact-cta)
  ui/                Reusable primitives (button, card, mockup, tech-icon, social-icons…)
  motion/            Framer Motion reveal + page transition
data/                Single source of truth — edit content here
  site.ts projects.ts experience.ts education.ts skills.ts services.ts
public/              profile.jpg (added) + add your CV PDF
```

## Customizing

All content lives in `data/`. Update `data/site.ts` for name, role, links, email,
and the CV filename (`resumeUrl`). Edit `projects.ts`, `experience.ts`,
`education.ts`, `skills.ts` for the rest. Re-skin the whole site by changing the
`--color-primary` token in `app/globals.css`.

## Before deploying

Drop your CV into `public/Ryantinisa-Guzelazkia-CV.pdf` (the Download CV button
links there). Everything else is ready.

## Deploy

Optimized for **Vercel** — push to Git and import. No environment variables required.

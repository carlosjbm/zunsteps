# ZUNSteps Developer Guide

## Project Skills

- Always use the folder .agents for get project skills

## Run Commands

```bash
pnpm run dev        # Dev server on localhost:3000 with Turbopack
pnpm run build      # Production build with Turbopack
pnpm run export     # Static export to ./out (for Netlify)
pnpm run lint       # ESLint (next/core-web-vitals)
pnpm run start      # Run production build
```

## Build & Deploy

- **Static export required** for Netlify: `pnpm run export` outputs to `./out`
- **Build command** in Netlify: `npm run build` (not `pnpm`)
- **Publish directory:** `out`
- **Next.js config:** `next.config.mjs` - `trailingSlash: true`, `images.unoptimized: true`

## Premium Auth System

- Uses localStorage (not cookies/session) - works with static export
- Key validated client-side, stored in localStorage (`premium_key`, `premium_authenticated`)
- Protected routes: `/zunsteps/premium`, `/premium-access`
- See `PREMIUM_AUTH_IMPLEMENTATION.md` and `PREMIUM_AUTH_SETUP.md` for details
- Default premium key: `Master*25`

## Architecture

- **Framework:** Next.js 15 (App Router), React 19
- **UI:** Material-UI v7, Emotion, CSS Modules
- **State:** React Context API (PremiumAuthContext, ModulosContext, PremiumContext)
- **Database:** MySQL with mysql2 (connection via `app/lib/zunsteps.sql`)
- **Package manager:** pnpm (preferred)

## Key Directories

- `app/src/services/` - API services (auth, user, data, modules, etc.)
- `app/lib/` - DB queries, hooks, utils, theme
- `app/zunsteps/` - Dashboard, docs, faqs, premium, etc.

## Testing

- No test framework configured
- Manual testing via dev server

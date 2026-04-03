# External Integrations

**Analysis Date:** 2026-04-03

## APIs & External Services

**Not applicable** - This is a fully client-side educational web application with no external API integrations.

No SDK dependencies for third-party services detected. The application does not integrate with:
- Payment processors (Stripe, PayPal)
- Cloud platforms (AWS, Azure, GCP)
- Authentication services (Auth0, Firebase, Supabase)
- CMS or content delivery services
- Analytics or telemetry platforms
- Chat/messaging APIs

## Data Storage

**Databases:**
- None - Application is stateless

**File Storage:**
- Local filesystem only - Static assets served from `public/` directory
- Static images deployed with built application:
  - Course materials in `public/KI-Entdecker/images/`
  - PDF worksheets and downloadable resources served as static files

**Caching:**
- Client-side only via browser cache headers
- No server-side caching layer

**Client-side Data Persistence:**
- Browser localStorage via `useProgress` hook (`src/hooks/useProgress.ts`)
  - Storage key: `ki-entdecker-progress`
  - Data structure: User badges, course day completion status, lesson progress
  - Scope: Single browser/device, persists across sessions
  - No synchronization with server (local only)

## Authentication & Identity

**Auth Provider:**
- None - Application requires no user authentication
- All course content publicly accessible
- Progress tracking is browser-local only (not synced across devices)

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error reporting service integrated

**Logs:**
- Console logging only (console.error in progress parsing fallback)
- No server-side or cloud-based logging service

**Analytics:**
- Not detected - No Google Analytics, Mixpanel, or similar service

## CI/CD & Deployment

**Hosting:**
- GitHub Pages - Static site hosting at `https://github.com/[user]/[repo]/settings/pages`
- Base URL: `https://[user].github.io/KI-Entdecker`

**CI Pipeline:**
- GitHub Actions - `.github/workflows/deploy.yml`
  - Trigger: Push to main/master branches
  - Build steps:
    1. Checkout repository
    2. Setup Node.js 20 with npm cache
    3. Install dependencies: `npm ci`
    4. Build: `npm run build`
    5. Deploy to GitHub Pages using `actions/deploy-pages@v4`

**Build Artifacts:**
- Output directory: `dist/` (created by `vite build`)
- Deployed to GitHub Pages by GitHub Actions

## Environment Configuration

**Required env vars:**
- None - Application requires no environment variables for core functionality
- Vite build uses `import.meta.env.BASE_URL` (set to `/KI-Entdecker`)

**Secrets location:**
- Not applicable - No API keys or secrets required

**GitHub Actions Permissions:**
- contents: read (checkout code)
- pages: write (configure GitHub Pages)
- id-token: write (request deployment token)

## Webhooks & Callbacks

**Incoming:**
- None - Application is purely static

**Outgoing:**
- None - No external service calls

## Form Submissions & Validation

**Forms:**
- React Hook Form with Zod validation - Used in course components and worksheets
- All validation happens client-side
- No form submission to external endpoints

**Validation Schema:**
- Zod runtime validation (TypeScript-first)
- Validation logic defined locally in components
- No server validation

## Google Fonts & CDN Resources

**External Resources:**
- Google Fonts preconnect headers in `index.html`:
  - `https://fonts.googleapis.com` (preconnect)
  - `https://fonts.gstatic.com` (preconnect)
- Font families configured in `tailwind.config.js`:
  - Outfit (sans-serif)
  - Inter (sans-serif)
- Fonts loaded via Tailwind CSS (actual font files fetched from Google Fonts CDN at runtime)

## Browser APIs Used

**localStorage:**
- Stores user progress data persistently
- Uses JSON serialization/deserialization
- Handler: `src/hooks/useProgress.ts`

**window.location & history:**
- URL manipulation for GitHub Pages 404 redirect handling (`src/main.tsx`)
- Route-based navigation via React Router (client-side only)

**window.confirm:**
- Used for progress reset confirmation dialog

## Static Content Delivery

**Images:**
- Public directory: `public/KI-Entdecker/images/`
- Served as static assets by GitHub Pages
- Used throughout course pages for educational illustrations

**Documents:**
- PDF worksheets and materials served as static files
- Downloads handled by browser native functionality (no server processing)

**Structured Data:**
- Schema.org JSON-LD in `index.html` for SEO
- Course information, provider details, duration, free offer data

---

*Integration audit: 2026-04-03*

**Summary:** This is a fully static, client-side educational application with zero backend or external service dependencies. All features (progress tracking, navigation, content) work entirely within the browser.

# Architecture

**Analysis Date:** 2026-04-03

## Pattern Overview

**Overall:** Client-side Single Page Application (SPA) with React Router-based navigation and localStorage-based state management.

**Key Characteristics:**
- React 19 with TypeScript for type safety
- React Router DOM for client-side routing
- Component-driven UI with Radix UI primitives and custom UI components
- Vite as build tool and development server
- Tailwind CSS for styling with custom design system
- Progress tracking via localStorage (client-side persistence)
- Responsive layout built with mobile-first approach

## Layers

**Entry Point:**
- Purpose: Initialize the React application with routing context
- Location: `src/main.tsx`
- Contains: React root setup, BrowserRouter configuration, 404 redirect handling
- Depends on: React, React DOM, React Router, App component
- Used by: Browser via Vite dev server or built bundle

**Application Orchestration:**
- Purpose: Manage routes and page layout structure
- Location: `src/App.tsx`
- Contains: Route definitions, layout wrapper (Navigation, Footer, Toaster), progress provider
- Depends on: React Router, all page components, global components
- Used by: main.tsx

**Pages Layer:**
- Purpose: Full-page components representing distinct user destinations
- Location: `src/pages/`
- Contains: Home.tsx, Kurs.tsx, CourseDay1-5.tsx, Materialien.tsx, Eltern.tsx, Wochenplan.tsx, Impressum.tsx, Datenschutz.tsx
- Depends on: Hooks (useProgress), UI components, sections, icons (lucide-react)
- Used by: App.tsx route definitions

**Sections Layer:**
- Purpose: Reusable page sections and composed layouts (typically displayed on Home page)
- Location: `src/sections/`
- Contains: Hero.tsx, CourseOverview.tsx, Features.tsx, Materials.tsx, Parents.tsx, ProgressTracker.tsx, CTA.tsx, Navigation.tsx, Footer.tsx
- Depends on: UI components, icons, hooks
- Used by: Home.tsx and potentially other pages

**Global Components:**
- Purpose: Site-wide layout components and shared utilities
- Location: `src/components/`
- Contains: Navigation.tsx (header with mobile menu), Footer.tsx (site footer), ScrollToTop.tsx (scroll handler)
- Depends on: React Router, progress hook, icons
- Used by: App.tsx as wrapper components

**UI Component Library:**
- Purpose: Primitive and compound components following design system
- Location: `src/components/ui/`
- Contains: 55+ UI components including button.tsx, card.tsx, accordion.tsx, dialog.tsx, form.tsx, etc.
- Pattern: Radix UI primitives wrapped with Tailwind CSS + CVA (class-variance-authority) for variants
- Depends on: @radix-ui packages, clsx, tailwind-merge
- Used by: All components throughout the application

**Hooks:**
- Purpose: Encapsulate stateful logic and side effects
- Location: `src/hooks/`
- Contains: 
  - useProgress.ts - Full progress tracking system (badges, day completion, lesson tracking)
  - use-mobile.ts - Responsive breakpoint detection
  - use-toast.ts - Toast notification system
  - useProgress.ts - Custom hook for progress management
- Depends on: React hooks, localStorage API
- Used by: Page components and global components

**Utilities:**
- Purpose: Reusable helper functions
- Location: `src/lib/utils.ts`
- Contains: cn() function for combining Tailwind classes with merging
- Depends on: clsx, tailwind-merge
- Used by: UI components and throughout the app

**Styling:**
- Purpose: Global styles and design tokens
- Location: `src/index.css`
- Contains: 
  - CSS custom properties for color system
  - Tailwind directives and custom component classes
  - Content block styles (info, warning, tip, example, exercise, summary, key, code, quote, step)
  - Animation definitions (float, pulse-glow, gradient-shift, slide animations)
  - Content-specific utilities (section-padding, container-wide, etc.)
- Depends on: Tailwind CSS, Google Fonts (Inter, Outfit)

## Data Flow

**Progress Tracking Flow:**

1. User interacts with page (clicks "Complete Day" or reaches final section)
2. Page component calls useProgress hook method (completeDay, completeLesson, unlockBadge)
3. Hook updates state and localStorage via useEffect
4. Navigation component reads progress via progress.getUnlockedBadgesCount()
5. UI updates to reflect new progress state

**State Management:**
- **Local**: Component state via useState for UI interactions (form inputs, expanded sections, visibility states)
- **Persistent**: Progress data via localStorage ("ki-entdecker-progress" key) managed by useProgress hook
- **Context**: Progress object passed as prop from App.tsx through all pages that need it

**Routing Flow:**

1. User navigates via Link or location change
2. React Router matches route against defined routes in App.tsx
3. Corresponding page component renders
4. ScrollToTop component triggers scroll to top of page
5. Mobile menu closes on route change

## Key Abstractions

**Progress System:**
- Purpose: Track user completion, badges, and lessons across days
- Location: `src/hooks/useProgress.ts`
- Pattern: Custom hook with localStorage persistence
- Exports: useProgress hook returning progress object with methods (completeDay, unlockBadge, completeLesson, etc.)
- Data Structure:
  ```typescript
  UserProgress {
    badges: Badge[],      // 5 badges (KI-Anfänger, Prompt-Meister, Kreativ-Genie, Problem-Löser, KI-Experte)
    days: DayProgress[],  // 5 days (1-5)
    totalProgress: number,
    lastVisited: string,
    startedAt: string
  }
  ```

**UI Component System:**
- Purpose: Provide consistent, accessible, Radix UI-based components
- Pattern: Wrapper pattern - Radix primitive + custom Tailwind styling + CVA for variants
- Example: `src/components/ui/button.tsx` wraps @radix-ui/react-slot with button variants
- Variants: each component exports size and style variants

**Content Block System:**
- Purpose: Structured content presentation in course pages
- Pattern: CSS classes in index.css with semantic naming
- Types:
  - content-block-info (💡 blue)
  - content-block-warning (⚠️ amber)
  - content-block-tip (✨ purple)
  - content-block-example (📝 green)
  - content-block-exercise (🎯 indigo)
  - content-block-summary (📋 gray)
  - content-block-key (🔑 gradient)
  - content-block-code (code/prompt blocks)
  - content-block-quote (italic amber)
  - content-block-step (numbered steps with gradient)

**Responsive Design:**
- Purpose: Adapt layout for mobile, tablet, desktop
- Pattern: Tailwind breakpoints (sm, md, lg, xl, 2xl) + custom media queries
- Mobile-first: Base styles are mobile, extended with sm:, lg: prefixes
- Example: `px-4 sm:px-6 lg:px-8 xl:px-12` in section-padding class

## Entry Points

**Main Entry Point:**
- Location: `src/main.tsx`
- Triggers: Browser loads index.html
- Responsibilities: 
  - Mount React root to DOM element with id "root"
  - Wrap app with BrowserRouter for routing
  - Handle GitHub Pages 404 redirect via URL search params
  - Apply React.StrictMode for development checks

**Page Entry Points:**
- Location: `src/pages/*.tsx`
- Triggers: Route matches via React Router
- Responsibilities: Render full page with all sections, handle page-specific state, accept progress prop

**Build Entry Point:**
- Location: `vite.config.ts`
- Triggers: `npm run build` or `npm run dev`
- Responsibilities: Configure Vite bundler with React plugin, path aliases (@/), base URL for GitHub Pages

## Error Handling

**Strategy:** Client-side error handling with user feedback via toast notifications.

**Patterns:**
- Try-catch blocks in useProgress hook for localStorage parsing
- Toast notifications for user actions (copy to clipboard, exercise completion)
- Console error logging for development debugging
- Graceful fallback when localStorage read fails (returns default progress)

## Cross-Cutting Concerns

**Logging:** 
- console.error() for errors (e.g., progress parsing failures)
- No centralized logging system; development-focused only

**Validation:**
- Zod library imported but not extensively used in current codebase
- Form validation likely uses react-hook-form with @hookform/resolvers

**Authentication:**
- Not implemented - fully public website
- No user accounts or authentication required

**Accessibility:**
- Skip-to-main-content link in App.tsx (`.skip-to-main` class)
- ARIA labels and semantic HTML via Radix UI components
- Focus-visible styles defined in index.css (#7F56D9 purple outline)
- Reduced motion media query support for animations

**Performance:**
- Lazy component rendering via React.lazy (not currently used)
- Image optimization paths in vite.config.ts base URL
- CSS animations with GPU acceleration (transform, opacity)
- localStorage for instant state rehydration

---

*Architecture analysis: 2026-04-03*

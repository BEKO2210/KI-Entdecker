# Codebase Structure

**Analysis Date:** 2026-04-03

## Directory Layout

```
app/
├── src/                          # Source code
│   ├── main.tsx                  # Entry point - React root initialization
│   ├── App.tsx                   # Route definitions and page layout
│   ├── index.css                 # Global styles and design system
│   ├── components/               # Global and shared components
│   │   ├── Navigation.tsx         # Header with responsive mobile menu
│   │   ├── Footer.tsx            # Site footer
│   │   ├── ScrollToTop.tsx       # Scroll-to-top handler
│   │   └── ui/                   # UI component library (55+ components)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       └── [50+ more]
│   ├── pages/                    # Page components (full routes)
│   │   ├── Home.tsx              # Landing page with overview
│   │   ├── Kurs.tsx              # Course overview page
│   │   ├── CourseDay1.tsx        # "Was ist KI?" course page
│   │   ├── CourseDay2.tsx        # "Prompt Engineering" course page
│   │   ├── CourseDay3.tsx        # "Kreativ mit KI" course page
│   │   ├── CourseDay4.tsx        # "Problemlösen mit KI" course page
│   │   ├── CourseDay5.tsx        # "Das Abschlussprojekt" course page
│   │   ├── Materialien.tsx       # Materials/downloads page
│   │   ├── Eltern.tsx            # Parents information page
│   │   ├── Wochenplan.tsx        # Weekly planner page
│   │   ├── Impressum.tsx         # Legal - Impressum
│   │   └── Datenschutz.tsx       # Legal - Data privacy
│   ├── hooks/                    # Custom React hooks
│   │   ├── useProgress.ts        # Progress tracking (badges, days, lessons)
│   │   ├── use-mobile.ts         # Responsive breakpoint detection
│   │   ├── use-toast.ts          # Toast notification system
│   │   └── useProgress.ts        # Export alias for useProgress
│   └── lib/                      # Utility functions
│       └── utils.ts              # cn() function for Tailwind class merging
├── public/                       # Static assets
│   ├── images/                   # Course images
│   │   ├── courses/
│   │   │   ├── day1/
│   │   │   ├── day2/
│   │   │   ├── day3/
│   │   │   ├── day4/
│   │   │   └── day5/
│   │   └── [other images]
│   └── downloads/                # Downloadable materials (worksheets, etc.)
├── dist/                         # Build output (generated)
├── .planning/                    # Project planning documents
│   └── codebase/                 # This directory
├── node_modules/                 # Dependencies (55+ top-level)
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Lock file
├── tsconfig.json                 # Root TypeScript config
├── tsconfig.app.json             # App TypeScript config
├── tsconfig.node.json            # Node/build tools TypeScript config
├── vite.config.ts                # Build tool configuration
├── tailwind.config.js            # Tailwind CSS configuration and design tokens
├── postcss.config.js             # PostCSS configuration for Tailwind
├── eslint.config.js              # Linting rules
└── components.json               # UI component library metadata (shadcn/ui style)
```

## Directory Purposes

**`src/`**
- Purpose: All source code - TypeScript components, styles, hooks, utilities
- Contains: Pages, components, hooks, styling
- Key files: main.tsx (entry), App.tsx (routing), index.css (global styles)

**`src/components/`**
- Purpose: Shared components used across the site
- Contains: Global layout components (Navigation, Footer) and UI library
- Key files: Navigation.tsx (header), Footer.tsx (footer), ui/ (component library)
- Pattern: Each UI component is a separate file wrapping Radix UI primitives

**`src/components/ui/`**
- Purpose: Complete UI component library with consistent design
- Contains: 55+ reusable UI components (buttons, cards, dialogs, forms, etc.)
- Pattern: Radix UI wrapper + Tailwind CSS + class-variance-authority (CVA) for variants
- Naming: Component-based file names (button.tsx, card.tsx, accordion.tsx)

**`src/pages/`**
- Purpose: Full-page components, each representing a distinct route
- Contains: Home page, course pages (Day 1-5), info pages (Materialien, Eltern, Wochenplan, Impressum, Datenschutz), Kurs overview
- Naming: PascalCase with descriptive names (CourseDay1.tsx, Materialien.tsx)
- Characteristics: Accept progress prop, manage page-level state, may contain sections

**`src/hooks/`**
- Purpose: Custom React hooks encapsulating stateful logic
- Contains: useProgress (progress tracking with localStorage), use-mobile (breakpoint detection), use-toast (notifications)
- Pattern: Named with use* prefix, export both default and named exports where appropriate

**`src/lib/`**
- Purpose: Utility functions and helpers
- Contains: cn() function combining clsx and tailwind-merge
- Purpose of cn(): Safely merge Tailwind classes and deduplicate conflicting utilities

**`public/`**
- Purpose: Static assets served as-is
- Contains: Images (organized by course day), downloadable materials
- Path structure: `/KI-Entdecker/images/` (respects vite.config.ts base URL)

**`dist/`**
- Purpose: Build output (generated)
- Contains: Bundled JavaScript, CSS, and asset manifests
- Generated by: `npm run build`
- Not committed: Listed in .gitignore

## Key File Locations

**Entry Points:**
- `src/main.tsx`: React root initialization, router setup
- `src/App.tsx`: Route definitions and page layout wrapper

**Configuration:**
- `vite.config.ts`: Build configuration, path aliases (@/), base URL (/KI-Entdecker)
- `tsconfig.json`: TypeScript compiler options, path aliases
- `tailwind.config.js`: Design tokens, colors, animations, breakpoints
- `eslint.config.js`: Linting rules

**Core Logic:**
- `src/hooks/useProgress.ts`: Full progress tracking system (badges, day/lesson completion, localStorage persistence)
- `src/components/Navigation.tsx`: Header with responsive menu and progress display
- `src/App.tsx`: Route definitions connecting paths to page components

**Styling:**
- `src/index.css`: Global styles, custom components, animations, content blocks
- Colors defined as CSS custom properties (--primary, --primary-purple, --primary-teal, etc.)
- Animations defined in tailwind.config.js (float, pulse-glow, gradient-shift, etc.)

**Pages (by route):**
- `/` → `src/pages/Home.tsx`
- `/kurs` → `src/pages/Kurs.tsx`
- `/kurs/tag-1` → `src/pages/CourseDay1.tsx`
- `/kurs/tag-2` → `src/pages/CourseDay2.tsx`
- `/kurs/tag-3` → `src/pages/CourseDay3.tsx`
- `/kurs/tag-4` → `src/pages/CourseDay4.tsx`
- `/kurs/tag-5` → `src/pages/CourseDay5.tsx`
- `/materialien` → `src/pages/Materialien.tsx`
- `/eltern` → `src/pages/Eltern.tsx`
- `/wochenplan` → `src/pages/Wochenplan.tsx`
- `/impressum` → `src/pages/Impressum.tsx`
- `/datenschutz` → `src/pages/Datenschutz.tsx`

## Naming Conventions

**Files:**
- **React Components**: PascalCase (Home.tsx, Navigation.tsx, CourseDay1.tsx)
- **Hooks**: camelCase with 'use' prefix (useProgress.ts, use-mobile.ts, use-toast.ts)
- **Utilities**: camelCase (utils.ts)
- **UI Components**: Lowercase with hyphens (button.tsx, accordion.tsx, alert-dialog.tsx)
- **Directories**: lowercase (components, pages, sections, hooks, lib, ui)

**TypeScript Exports:**
- Pages: Default export of React component
- Hooks: Named export of hook function + default export
- UI Components: Named export of component + variant types

**Interfaces/Types:**
- PascalCase for all types (Home**Props**, Course**Day**, User**Progress**)
- Props interfaces typically named ComponentName + "Props"

**CSS Classes:**
- **Components**: dot notation for related styles (content-block-info, content-block-warning)
- **Utilities**: Tailwind-first with custom additions (@apply for common patterns)
- **Animations**: kebab-case (float-slow, pulse-glow, slide-in-left)

## Where to Add New Code

**New Feature:**
- **Primary code**: 
  - If it's a full page: `src/pages/NewPage.tsx`
  - If it's a reusable section: inline in the page that uses it (e.g. `src/pages/Home.tsx`) — there is no separate `src/sections/` folder anymore
  - If it's a UI component: `src/components/ui/new-component.tsx`
- **Logic**: Extract to `src/hooks/useNewFeature.ts` if stateful
- **Routes**: Add to `src/App.tsx` routes array

**New Page:**
- Create `src/pages/NewPageName.tsx` with interface accepting progress prop
- Import page in `src/App.tsx`
- Add route: `<Route path="/new-path" element={<NewPageName progress={progress} />} />`
- Add navigation link in `src/components/Navigation.tsx` navLinks array

**New Component/Module:**
- **If reusable across pages**: `src/components/NewComponent.tsx`
- **If UI primitive**: `src/components/ui/new-component.tsx` with Radix UI wrapper + Tailwind
- **If section-specific**: inline in the page (keep page self-contained)

**New Utilities:**
- Simple functions: Add to `src/lib/utils.ts`
- Complex utilities: Create new file in `src/lib/`

**New Hook:**
- Stateful logic: `src/hooks/useNewHook.ts`
- Follow pattern: Custom hook exporting functions returning state + methods
- If using localStorage: Use try-catch and JSON.parse/stringify patterns from useProgress.ts

**New Styles:**
- **Global**: Add to `src/index.css` in appropriate @layer section
- **Component-specific**: Use Tailwind className attribute
- **Animations**: Define in `tailwind.config.js` keyframes and add to animation property

## Special Directories

**`node_modules/`**
- Purpose: Installed npm dependencies
- Generated: `npm install`
- Committed: No (.gitignore)
- Contains: 1000+ dependency files including React, Vite, Tailwind, Radix UI

**`dist/`**
- Purpose: Production build output
- Generated: `npm run build`
- Committed: No (.gitignore)
- Contains: Bundled .js, .css, and .html files ready for deployment

**`.planning/`**
- Purpose: Project planning and documentation
- Contains: Codebase analysis documents (this directory)
- Committed: Yes

**`public/`**
- Purpose: Static assets copied as-is to build
- Contains: Images organized by course day, downloadable worksheets
- Committed: Yes (assets are part of the project)

**`src/components/ui/`**
- Purpose: Complete design system component library
- Generated-like: Components follow shadcn/ui pattern but manually maintained
- Pattern: Each component is a separate file with variants via CVA
- Committed: Yes (core to the project)

---

*Structure analysis: 2026-04-03*

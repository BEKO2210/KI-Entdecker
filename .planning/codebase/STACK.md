# Technology Stack

**Analysis Date:** 2026-04-03

## Languages

**Primary:**
- TypeScript 5.9.3 - Core application language for type-safe React development
- JSX/TSX - Component markup using React's templating syntax
- CSS/Tailwind - Styling via utility-first framework

**Secondary:**
- JavaScript (ES2022+) - Build configuration and utilities
- HTML - Document structure via Vite SPA

## Runtime

**Environment:**
- Node.js 20+ - Development and CI/CD runtime
- Browser (modern) - Client-side execution

**Package Manager:**
- npm - Primary dependency manager
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.2.0 - UI framework and component library
- React Router DOM 7.14.0 - Client-side routing for multi-page navigation (`/src/App.tsx`)
- React DOM 19.2.0 - DOM rendering

**UI Components:**
- Radix UI (comprehensive collection) - Accessible, headless component primitives:
  - `@radix-ui/react-accordion` - Collapsible sections
  - `@radix-ui/react-dialog` - Modal dialogs
  - `@radix-ui/react-dropdown-menu` - Dropdown menus
  - `@radix-ui/react-tabs` - Tabbed interfaces
  - `@radix-ui/react-select` - Select dropdowns
  - `@radix-ui/react-slider` - Range sliders
  - `@radix-ui/react-toast` - Toast notifications
  - `@radix-ui/react-navigation-menu` - Navigation structures
  - 17 additional Radix UI components

**Styling & Theme:**
- Tailwind CSS 3.4.19 - Utility-first CSS framework
- TailwindCSS Animate 1.0.7 - Animation utilities
- Autoprefixer 10.4.23 - CSS vendor prefixing
- PostCSS 8.5.6 - CSS processing pipeline
- `tailwind.config.js` - Custom color palette, animations, and theme extensions
- `postcss.config.js` - PostCSS configuration

**Component Utilities:**
- Class Variance Authority 0.7.1 - Type-safe component variant management
- clsx 2.1.1 - Conditional CSS class composition
- Tailwind Merge 3.4.0 - Merge conflicting Tailwind classes
- Next Themes 0.4.6 - Theme switching (dark mode support)

**Testing:**
- Not detected

**Build/Dev:**
- Vite 7.2.4 - Fast build tool and dev server
- `@vitejs/plugin-react` 5.1.1 - React Fast Refresh plugin
- TypeScript - Type checking via `tsc -b`
- `vite.config.ts` - Vite configuration with React plugin and path alias (`@/` → `src/`)

**Linting:**
- ESLint 9.39.1 - Code quality and style enforcement
- `@eslint/js` 9.39.1 - ESLint core configuration
- `typescript-eslint` 8.46.4 - TypeScript linting rules
- `eslint-plugin-react-hooks` 7.0.1 - React hooks rules
- `eslint-plugin-react-refresh` 0.4.24 - Vite Fast Refresh rules
- `eslint.config.js` - Flat config format with TypeScript and React plugin support

**Development Utilities:**
- `kimi-plugin-inspect-react` 1.0.3 - React component inspection tool

## Key Dependencies

**Critical:**
- React 19.2.0 - Core framework for UI building
- React Router DOM 7.14.0 - Enables multi-page routing (5 course pages + utility pages)
- Radix UI suite - Accessible component primitives throughout application

**UI Enhancement:**
- Lucide React 0.562.0 - Icon library for visual elements
- Embla Carousel React 8.6.0 - Carousel/slider component
- React Resizable Panels 4.2.2 - Resizable panel layouts
- Recharts 2.15.4 - Data visualization and charts
- Sonner 2.0.7 - Toast notification library

**Form & Validation:**
- React Hook Form 7.70.0 - Form state management
- `@hookform/resolvers` 5.2.2 - Form validation resolver library
- Zod 4.3.5 - TypeScript-first schema validation

**Date & Time:**
- Date-fns 4.1.0 - Date parsing and formatting utilities
- React Day Picker 9.13.0 - Calendar picker component

**Accessibility & Interaction:**
- Input OTP 1.4.2 - OTP input component
- Vaul 1.1.2 - Drawer/sliding panel component
- React Resizable Panels 4.2.2 - Resizable panel dividers

**UI Command Palette:**
- cmdk 1.1.1 - Command menu/command palette component

## Configuration

**Environment:**
- Vite Env Variables - Uses `import.meta.env.BASE_URL` for GitHub Pages deployment (`/KI-Entdecker`)
- Base path configured to `/KI-Entdecker` in `vite.config.ts`
- No `.env` files required for basic functionality

**Build:**
- `vite.config.ts` - Main build configuration with React plugin and path aliases
- `tsconfig.json` - Root TypeScript configuration with base URL and path mapping
- `tsconfig.app.json` - Application TypeScript configuration with strict mode, JSX React, ES2022 target
- `tsconfig.node.json` - Node/build tool TypeScript configuration
- `components.json` - Shadcn component configuration (New York style, Lucide icons, path aliases)

**Development:**
- `eslint.config.js` - ESLint flat config with TypeScript and React support
- `tailwind.config.js` - Extensive theme customization with custom colors, animations, and fonts
- `package.json` - Scripts: `dev` (vite), `build` (tsc && vite build), `lint` (eslint), `preview` (vite preview)

## Platform Requirements

**Development:**
- Node.js 20+ (specified in GitHub Actions workflow)
- npm for package management
- Modern text editor or IDE with TypeScript support

**Production:**
- Static file hosting - Deployed to GitHub Pages
- Base URL: `/KI-Entdecker` (configured for GitHub Pages project site)
- Deployment: Automated via GitHub Actions (`/.github/workflows/deploy.yml`)

## Build Process

**Development:**
```bash
npm run dev  # Vite dev server with Hot Module Replacement
```

**Production Build:**
```bash
npm run build  # TypeScript compilation + Vite build to /dist
npm run preview  # Local preview of production build
```

**Linting:**
```bash
npm run lint  # ESLint across TypeScript/TSX files
```

**CI/CD Deployment:**
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Triggers: Push to main/master branch or manual workflow dispatch
- Steps: Checkout → Setup Node 20 → npm ci → npm run build → Deploy to GitHub Pages

## Package Lock & Version Control

- `package-lock.json` - Present and tracked (npm ci used in CI for reproducible installs)
- Version strategy: Caret ranges (^) allow minor/patch updates, ensures compatibility

---

*Stack analysis: 2026-04-03*

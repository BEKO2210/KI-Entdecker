# Coding Conventions

**Analysis Date:** 2026-04-03

## Naming Patterns

**Files:**
- React components: PascalCase (e.g., `Navigation.tsx`, `Features.tsx`)
- Utility functions: camelCase (e.g., `useProgress.ts`, `utils.ts`)
- UI components in `components/ui/`: lowercase with hyphens for compound words (e.g., `alert-dialog.tsx`, `button-group.tsx`)
- Pages: PascalCase (e.g., `Home.tsx`, `Kurs.tsx`)
- Section components: PascalCase (e.g., `CourseOverview.tsx`, `Features.tsx`)

**Functions:**
- Components: PascalCase (function name matches filename)
- Hooks: camelCase with `use` prefix (e.g., `useProgress()`)
- Event handlers: camelCase with verb prefix (e.g., `handleScroll()`, `isActive()`)
- Regular functions: camelCase (e.g., `cn()` utility in `lib/utils.ts`)

**Variables:**
- State and local vars: camelCase (e.g., `isScrolled`, `isMobileMenuOpen`, `unlockedCount`)
- Constants: camelCase or UPPER_SNAKE_CASE for module-level constants (e.g., `STORAGE_KEY = 'ki-entdecker-progress'`)
- React hook returns: camelCase (e.g., `const { progress, isLoaded, unlockBadge } = useProgress()`)

**Types:**
- Interfaces: PascalCase (e.g., `NavigationProps`, `Badge`, `DayProgress`)
- Type aliases: PascalCase (e.g., `CarouselApi`, `ChartConfig`)
- Exported types: declared at top of file, often with `Props` suffix for component prop interfaces

## Code Style

**Formatting:**
- ESLint configured for TypeScript with React hooks support
- Config location: `eslint.config.js`
- Uses `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- No Prettier config detected - code formatted according to ESLint rules
- Single quotes used in imports and strings (observed pattern)
- Semicolons at end of statements
- Arrow functions preferred for inline functions and callbacks

**Linting:**
- Tool: ESLint (v9.39.1) with flat config format
- Key rules enforced:
  - TypeScript strict mode enabled
  - No unused locals: `noUnusedLocals: true`
  - No unused parameters: `noUnusedParameters: true`
  - No fallthrough cases in switch: `noFallthroughCasesInSwitch: true`
  - React hooks rules via `eslint-plugin-react-hooks`
  - React refresh rules via `eslint-plugin-react-refresh`
- Run linting: `npm run lint`

**TypeScript:**
- Target: ES2022
- JSX: react-jsx (automatic runtime)
- Strict mode: enabled (`"strict": true`)
- Module resolution: bundler
- Path aliases: `@/*` maps to `./src/*`
- Strict flags in use:
  - `noUnusedLocals: true`
  - `noUnusedParameters: true`
  - `noFallthroughCasesInSwitch: true`
  - `noUncheckedSideEffectImports: true`

## Import Organization

**Order:**
1. React and React ecosystem imports (React, useState, hooks)
2. External libraries (react-router-dom, lucide-react, radix-ui, class-variance-authority)
3. Type imports (marked with `type` keyword)
4. Local component imports
5. Local hook imports
6. Utility imports (from `@/lib` or similar)

**Path Aliases:**
- `@/*` points to `src/` directory
- Used throughout codebase for absolute imports (e.g., `@/lib/utils`, `@/components/ui/button`)
- Enables cleaner imports regardless of nesting depth

**Type Imports:**
- Type-only imports use `import type` keyword (e.g., `import type { useProgress } from '../hooks/useProgress'`)
- Regular imports separate from type imports

Example pattern from `Navigation.tsx`:
```typescript
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Award } from 'lucide-react';
import type { useProgress } from '../hooks/useProgress';

interface NavigationProps {
  progress: ReturnType<typeof useProgress>;
}
```

## Error Handling

**Patterns:**
- Try-catch blocks used for JSON parsing in hooks (see `useProgress.ts` lines 57-69)
- Error logged to console with context: `console.error('Failed to parse progress:', e)`
- Context hooks throw descriptive errors when used outside provider:
  - `throw new Error("useFormField should be used within <FormField>")` (in `form.tsx`)
  - `throw new Error("useCarousel must be used within a <Carousel />")` (in `carousel.tsx`)
  - `throw new Error("useSidebar must be used within a SidebarProvider.")` (in `sidebar.tsx`)
- Component props validated through TypeScript interfaces (type safety at compile time)
- Form validation via react-hook-form with Zod schema validation

**Validation:**
- Form validation: Uses `react-hook-form` with `@hookform/resolvers` for schema validation
- Data validation: Zod schemas for runtime validation (zod v4.3.5 in dependencies)
- Component props: TypeScript interfaces ensure type safety

## Logging

**Framework:** `console` object (no dedicated logging library)

**Patterns:**
- Errors logged with `console.error()` - used for JSON parse failures in hooks
- Single example in codebase: `console.error('Failed to parse progress:', e);`
- No debug/info/warn logging observed
- Minimal logging suggests production environment favors error capture tools (not analyzed in this codebase)

## Comments

**When to Comment:**
- Comments used sparingly; codebase relies on clear naming and TypeScript types
- Used for accessibility hints: `aria-hidden="true"` comments with purpose
- Used for section markers in longer files: `{/* Logo */}`, `{/* Desktop Navigation */}`, `{/* Mobile Menu Button */}`
- URL redirect explanation in `main.tsx`: `// Single Page Apps for GitHub Pages - Handle redirect from 404.html`

**JSDoc/TSDoc:**
- Not observed in codebase
- Documentation done through TypeScript interfaces and type definitions

## Function Design

**Size:**
- Component functions typically 50-300 lines
- Complex components (e.g., `Navigation.tsx`) split into clearly marked sections via comments
- Utility functions kept small (e.g., `cn()` in `lib/utils.ts` is 6 lines)

**Parameters:**
- Component props passed via single interface (e.g., `NavigationProps`, `HomeProps`)
- Props spread destructured in function signature
- No props object passed as-is

**Return Values:**
- React components return JSX
- Hooks return objects containing state and setter functions
- Example: `useProgress()` returns object with `progress`, `isLoaded`, `unlockBadge`, etc.
- Utility functions return computed values or JSX elements

**Example from `useProgress.ts` (lines 143-154):**
```typescript
return {
  progress,
  isLoaded,
  unlockBadge,
  completeDay,
  completeLesson,
  resetProgress,
  getUnlockedBadgesCount,
  getCompletedDaysCount,
  isDayUnlocked,
  getDayProgress,
};
```

## Module Design

**Exports:**
- Named exports preferred for utilities and hooks (e.g., `export const useProgress = () => { ... }`)
- Default exports for components (e.g., `export default Navigation`)
- Both patterns used depending on context

**Barrel Files:**
- Components in `components/ui/` are individual files with default or named exports
- No barrel files (index.ts) observed consolidating multiple exports
- Each component exported individually for tree-shaking

**Component Composition:**
- Radix UI primitives used as building blocks (accordion, alert-dialog, button, etc.)
- Class variance authority (CVA) used for variant-based styling
- Tailwind CSS for utility classes
- Higher-order utilities: `cn()` function merges class strings safely

## Styling

**Framework:** Tailwind CSS (v3.4.19)

**Patterns:**
- Utility-first approach with Tailwind classes
- Custom colors configured in `tailwind.config.js`
- Example custom colors used: `primary-purple`, `primary-teal`, `accent-yellow`, `accent-pink`
- Responsive classes: `hidden md:flex` for breakpoint-based visibility
- State-based styling: Conditional class strings with template literals
- Animation: `tailwindcss-animate` package for pre-built animations

**CSS-in-JS:**
- Class variance authority (CVA) used for component variants
- Example in `button.tsx`: `buttonVariants` defines variant and size combinations
- `cn()` utility merges Tailwind classes and removes conflicts via `tailwind-merge`

---

*Convention analysis: 2026-04-03*

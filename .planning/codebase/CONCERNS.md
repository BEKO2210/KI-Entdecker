# Codebase Concerns

**Analysis Date:** 2026-04-03

## Tech Debt

### Massive Monolithic Page Components

**Issue:** Five course day pages (CourseDay1-5.tsx) are extremely large with inline content arrays, making them difficult to maintain and update.

**Files:**
- `src/pages/CourseDay1.tsx` (1163 lines)
- `src/pages/CourseDay2.tsx` (1102 lines)
- `src/pages/CourseDay3.tsx` (952 lines)
- `src/pages/CourseDay4.tsx` (702 lines)
- `src/pages/CourseDay5.tsx` (717 lines)

**Impact:**
- Each file contains a massive `sections` array with JSX embedded as object properties
- Changes to lesson content require editing inside deeply nested structures
- Code reusability across days is minimal
- Refactoring or reordering content is error-prone
- These 5 files alone total 4,636 lines out of ~15,335 TS/TSX lines in `src/`

**Fix approach:**
- Extract content arrays into separate data files (JSON or TypeScript constants)
- Create a reusable `CourseDay` component template that accepts content from a data source
- Move section rendering to dedicated sub-components (`SectionIntro.tsx`, `SectionLesson.tsx`, etc.)
- Target: Reduce each CourseDay component to 200-300 lines of logic only

### Content Hardcoded in Component Render

**Issue:** All lesson content, including interactive sections, Q&A, exercises, and FAQs, is rendered inline within component code rather than separated from presentation logic.

**Files:**
- `src/pages/CourseDay1.tsx` (lines 60-1100+)
- `src/pages/CourseDay2.tsx` (lines 65-1100+)
- `src/pages/CourseDay3.tsx`
- `src/pages/CourseDay4.tsx`
- `src/pages/CourseDay5.tsx`

**Impact:**
- Non-technical content creators cannot update course material without touching code
- Content changes require full code redeployment
- No clear separation of content from presentation
- Difficult to version control content changes separately from code changes

**Fix approach:**
- Extract all content into structured data files: `data/courseContent/day1.ts`, etc.
- Create content schema/interface for type safety (topic, lesson, exercise, faq objects)
- Build a content management layer that loads and validates data separately
- Allow future migration to CMS without touching component code

## Fragile Areas

### Progress Tracking Hook - LocalStorage Vulnerability

**Issue:** `useProgress.ts` has potential data integrity issues with localStorage.

**Files:** `src/hooks/useProgress.ts`

**Why fragile:**
- Manual JSON serialization/deserialization without version migration strategy
- Malformed stored data triggers silent error and falls back to defaults (`console.error` only)
- No validation of stored data structure - could accept invalid badge/day objects
- Hard reset loses all user progress with only a `confirm()` dialog as safeguard
- Progress state merging on line 62-65 could lose fields if schema evolves

**Safe modification:**
- Add schema validation using Zod (already in dependencies)
- Implement version migration pattern for future localStorage schema changes
- Add recovery mechanism for corrupted data
- Log data issues to browser console with clear guidance

**Test coverage gap:** No tests for localStorage edge cases (storage full, corrupted JSON, concurrent tabs)

### Image Asset Dependencies

**Issue:** Hard-coded image paths throughout codebase with no validation of asset existence.

**Files:**
- `src/pages/CourseDay1.tsx` (lines 76, 176, 206, 237, etc.)
- `src/pages/CourseDay2.tsx`
- `src/pages/CourseDay3.tsx`
- `src/pages/CourseDay4.tsx`
- `src/pages/CourseDay5.tsx`
- `src/pages/Kurs.tsx`
- `src/pages/Home.tsx`
- `src/pages/Eltern.tsx`
- `src/pages/Materialien.tsx`

**Impact:**
- Missing images produce broken image icons in production
- No fallback content strategy
- Build process doesn't validate image references
- URLs use base path `/KI-Entdecker/` which could break if deployment changes

**Example paths at risk:**
- `/KI-Entdecker/images/courses/day1/robot-confused.png`
- `/KI-Entdecker/images/day1-brain.png`
- `/KI-Entdecker/images/courses/day2/magic-prompt.png`

**Safe modification:**
- Implement image import system (rather than string paths)
- Create image manifest/registry
- Add fallback placeholders
- Use dynamic base path from `import.meta.env.BASE_URL`

### State Management Complexity in CourseDay Components

**Issue:** Multiple independent state hooks in CourseDay pages with no centralized state container.

**Files:**
- `src/pages/CourseDay1.tsx` (lines 21-27): `activeSection`, `fillBlankAnswers`, `showAnswers`, `expandedFaq`, `completedExercises`
- `src/pages/CourseDay2.tsx`: Similar pattern with `promptRating`, `userPrompt`, additional state

**Why fragile:**
- 5+ useState calls per component with complex interdependencies
- No parent-child communication pattern for related state
- Exercises and FAQ expansion state scattered across multiple hooks
- Section rendering depends on manual state synchronization

**Safe modification:**
- Consolidate into single `useReducer` or context provider
- Create `CourseDayState` interface to track all page state
- Extract state management logic for reuse across days

## Performance Bottlenecks

### Large JSX Objects in Render

**Issue:** `sections` array containing JSX elements re-renders on every component mount.

**Files:**
- `src/pages/CourseDay1.tsx` (lines 60-1040+)
- `src/pages/CourseDay2.tsx`
- `src/pages/CourseDay3.tsx`
- `src/pages/CourseDay4.tsx`
- `src/pages/CourseDay5.tsx`

**Problem:**
- Each section object contains JSX that gets recreated on render
- No memoization of section content
- Heavy use of inline object literals and arrow functions in JSX (bad for React performance)
- Navigation between sections forces re-creation of all section JSX

**Improvement path:**
- Move sections array outside component or useMemo it
- Convert large JSX blocks to dedicated components
- Memoize section components with React.memo
- Lazy-load section content only when needed

### Image Loading Performance

**Issue:** No lazy loading or image optimization strategy visible.

**Files:**
- `src/pages/CourseDay1.tsx` (has `loading="lazy"` on line 228 only)
- Other pages with `img` tags lack loading strategy

**Impact:**
- First page load (Home.tsx) loads all day images upfront
- Large background gradient images not optimized
- No image format variants (webp fallback)

**Improvement path:**
- Add `loading="lazy"` to all non-critical images
- Consider image CDN or format conversion
- Use next-gen image component wrapper

## Scaling Limits

### Single Progress Storage Model

**Current:** Progress stored per browser in localStorage (not synchronized).

**Limit:**
- Cannot support multi-device progress sync
- User loses progress if they clear browser data
- No backup mechanism
- Not suitable for classroom deployment with shared computers

**Scaling path:**
- Add optional backend sync (Firebase/Supabase) for persistent storage
- Implement auto-save with debounce to avoid excessive writes
- Support progress export/import for sharing

### Hard-Coded Course Structure

**Issue:** Number of days, course URLs, badges are hard-coded throughout codebase.

**Files:**
- `src/App.tsx` (lines 40-44): 5 route definitions hard-coded
- `src/hooks/useProgress.ts` (lines 28-42): 5 badges and 5 days hard-coded
- `src/pages/Kurs.tsx` (lines 31-110): Days array defined inline
- `src/pages/Home.tsx` (lines 34-95): Courses array defined inline

**Impact:**
- Adding 6th day requires changes in 5+ files
- Course structure not configurable
- No way to feature-flag individual days

**Scaling path:**
- Create centralized course config: `src/config/courseStructure.ts`
- Define single source of truth for:
  - Course metadata (days, order, prerequisites)
  - Badge definitions
  - Route mappings
- Reference config throughout app

## Known Issues from Git History

Based on recent commits, resolved bugs hint at prior instability:

**Fixed Render Loop (commit 34ca1d5):** "Fix infinite render loop crash (white page) on FAQ sections in all 5 days"
- Indicates FAQ section had problematic useEffect dependencies
- Suggests complexity in expandedFaq state management

**Fixed Content Visibility (commit 86a857d):** "Fix content invisible until scroll on Eltern, Materialien, Wochenplan"
- Pages had layout shift or visibility state issues
- Possible z-index or CSS animation problems

**Fixed Button Visibility (commit cb60ad7):** "Fix course card button always visible"
- Button visibility logic was fragile

**These indicate state management and rendering are error-prone areas.**

## Missing Critical Features

### Error Boundaries

**Issue:** No error boundary components in React tree.

**Risk:** 
- Single component error crashes entire app (white screen)
- Users cannot recover without refreshing
- No error logging for debugging

**Implementation:**
- Add `src/components/ErrorBoundary.tsx`
- Wrap in App.tsx around main route content
- Integrate with error logging if future telemetry added

### Loading States

**Issue:** No loading indicator while images/assets load.

**Files:** All page components

**Impact:** 
- UI feels sluggish during initial load
- Users uncertain if page is responsive

**Implementation:**
- Create `LoadingSpinner` component
- Add loading state to page containers
- Show skeleton screens for deferred content

### Accessibility Gaps

**Files:** All CourseDay components

**Issues visible:**
- `sectionRef` scrollIntoView on activeSection change (line 32 in CourseDay1) lacks `prefers-reduced-motion` check
- Large `sections` array may create too many buttons (DOM bloat)
- Some interactive elements missing aria-labels
- FAQ expansion (expandedFaq state) not announced to screen readers

## Test Coverage Gaps

**Untested areas:**

1. **localStorage edge cases** (`src/hooks/useProgress.ts`)
   - What happens if localStorage is full?
   - Corrupted JSON recovery
   - Concurrent tab access
   - Private browsing mode where localStorage is unavailable

2. **Course day navigation** (`src/pages/CourseDay1-5.tsx`)
   - Section completion flow
   - Forward/backward navigation
   - Section transitions
   - Completion detection logic

3. **Progress sync** (entire `useProgress` hook)
   - Badge unlock triggers
   - Day completion logic
   - Day unlock conditions
   - Progress reset behavior

4. **Image loading** (all pages)
   - Missing image fallback
   - Broken image paths
   - Asset CDN availability

5. **Responsive layout** (all components)
   - Mobile breakpoint behavior
   - Touch interaction states
   - Landscape orientation

**Priority:** HIGH - These areas are core functionality and recent fixes show they were previously buggy.

---

*Concerns audit: 2026-04-03*

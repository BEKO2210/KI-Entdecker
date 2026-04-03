# Testing Patterns

**Analysis Date:** 2026-04-03

## Test Framework

**Status:** Not implemented

**Observations:**
- No test files found in `src/` directory
- No test configuration files detected (`jest.config.*`, `vitest.config.*`)
- No test runner in `package.json` scripts (only `dev`, `build`, `lint`, `preview`)
- No testing libraries in dependencies (no jest, vitest, testing-library, etc.)
- This is a Vite-based React application with no automated tests currently configured

## Architecture for Testing (If Implemented)

Based on the codebase structure, recommended testing approach:

**Suggested Runner:**
- Vitest (pairs well with Vite, modern, zero-config for monorepos)
- Alternative: Jest with `@vitejs/plugin-react` support

**Suggested Assertion Library:**
- Vitest's built-in assertion API or Chai

**Suggested Component Testing:**
- React Testing Library for component testing
- Recommended for Radix UI component testing

## Test File Organization

**Recommended Location:**
- Co-located with source files (testable, easier to maintain)
- Pattern: `ComponentName.tsx` with `ComponentName.test.tsx` or `ComponentName.spec.tsx` in same directory

**Recommended Naming:**
- `*.test.tsx` for component tests
- `*.test.ts` for hook and utility tests
- `*.spec.tsx` as alternative

**Recommended Structure:**
```
src/
├── components/
│   ├── Navigation.tsx
│   ├── Navigation.test.tsx
│   ├── Footer.tsx
│   ├── Footer.test.tsx
│   └── ui/
│       ├── button.tsx
│       └── button.test.tsx
├── hooks/
│   ├── useProgress.ts
│   └── useProgress.test.ts
├── pages/
│   ├── Home.tsx
│   └── Home.test.tsx
└── lib/
    ├── utils.ts
    └── utils.test.ts
```

## Hook Testing Strategy

### useProgress Hook Testing

Location: `src/hooks/useProgress.ts`

**Critical Test Areas:**

1. **Initialization:**
   - Default state loads correctly
   - localStorage reads on mount
   - Handles corrupt localStorage gracefully (try-catch at lines 57-69)

2. **localStorage Integration:**
   - Progress saves to localStorage after state changes
   - Parsing errors logged without crashing
   - Round-trip serialization/deserialization works

3. **Badge Unlocking:**
   - `unlockBadge(badgeId)` marks badge as unlocked
   - `unlockedAt` timestamp set correctly
   - Duplicate unlocks prevented (checking `!badge.unlocked`)

4. **Day Completion:**
   - `completeDay(dayId)` marks day complete
   - Corresponding badge auto-unlocked
   - `completedAt` timestamp set correctly

5. **Lesson Completion:**
   - `completeLesson(dayId, lessonId)` adds to completed list
   - No duplicate lesson completions
   - Supports multiple lessons per day

6. **Day Unlock Logic:**
   - Day 1 always unlocked
   - Days 2-5 require previous day completion
   - `isDayUnlocked(dayId)` correctly checks chain

7. **Query Functions:**
   - `getUnlockedBadgesCount()` returns correct count
   - `getCompletedDaysCount()` returns correct count
   - `getDayProgress(dayId)` returns correct day object

**Recommended Test Structure:**
```typescript
describe('useProgress hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('initialization', () => {
    it('should load default progress on first use', () => {
      // Test implementation
    });

    it('should restore progress from localStorage', () => {
      // Test implementation
    });

    it('should handle corrupt localStorage gracefully', () => {
      // Test implementation
    });
  });

  describe('badge unlocking', () => {
    it('should unlock badge and set timestamp', () => {
      // Test implementation
    });

    it('should prevent duplicate unlocks', () => {
      // Test implementation
    });
  });

  describe('day completion', () => {
    it('should mark day complete and unlock badge', () => {
      // Test implementation
    });
  });

  describe('day unlocking', () => {
    it('should always unlock day 1', () => {
      // Test implementation
    });

    it('should require previous day completion for unlock', () => {
      // Test implementation
    });
  });
});
```

## Component Testing Strategy

### Navigation Component Testing

Location: `src/components/Navigation.tsx`

**Key Test Areas:**

1. **Props handling:**
   - Progress object passed correctly
   - Badge count displayed from progress

2. **Scroll behavior:**
   - Navigation styling changes on scroll
   - Event listener cleanup on unmount

3. **Mobile menu:**
   - Opens/closes with button click
   - Closes on route navigation
   - Body scroll locked when open

4. **Route active states:**
   - `isActive()` correctly identifies current route
   - Visual indicator shown for active page

5. **Accessibility:**
   - aria-labels present
   - aria-current set on active page
   - Role attributes correct
   - Skip-to-main content link present (in App.tsx)

**Mocking Strategy:**
```typescript
// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  useLocation: () => ({ pathname: '/kurs' }),
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
  // ... other exports
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Menu: () => <div>Menu</div>,
  X: () => <div>X</div>,
  // ... other icons
}));
```

### Page Component Testing

Example: `Home.tsx` (lines 1-80)

**Test Areas:**
- Props passed from parent (progress)
- Visibility animation triggers
- Course data renders correctly
- Links navigate to correct paths
- Badge count displays from progress

## Utility Function Testing

### cn() Utility Function

Location: `src/lib/utils.ts`

**Tests needed:**
```typescript
describe('cn utility', () => {
  it('should merge tailwind classes', () => {
    const result = cn('px-4 py-2', 'px-8');
    expect(result).toBe('py-2 px-8'); // px-8 overrides px-4
  });

  it('should remove conflicting utilities', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });

  it('should handle conditional classes', () => {
    expect(cn('px-4', true && 'py-2')).toBe('px-4 py-2');
    expect(cn('px-4', false && 'py-2')).toBe('px-4');
  });

  it('should handle arrays and objects', () => {
    expect(cn(['px-4', 'py-2'], { 'bg-red-500': true })).toContain('px-4');
  });
});
```

## Mocking Strategy

**What to Mock:**
- External APIs and services (not present in current codebase but relevant for expansion)
- localStorage (for useProgress testing)
- window.addEventListener/removeEventListener (for scroll-dependent components)
- router (useLocation, Link from react-router-dom)
- Lucide icons (optional - can test rendering without mocking)
- IntersectionObserver (for scroll-triggered visibility in Features, CourseOverview, CTA sections)

**What NOT to Mock:**
- React hooks (useState, useEffect, useCallback)
- Radix UI components (test integration with real components)
- Tailwind classes (test visual output through DOM inspection)
- Utility functions like `cn()` (test as black boxes)

**IntersectionObserver Mocking Pattern:**

Used in: `Features.tsx`, `CourseOverview.tsx`, `CTA.tsx`, `Home.tsx`

```typescript
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  
  observe(element: Element) {
    // Immediately trigger for testing
    this.callback([{ isIntersecting: true }] as any, this as any);
  }
  
  unobserve() {}
  disconnect() {}
};
```

**localStorage Mocking Pattern:**

Used extensively in `useProgress.ts`:

```typescript
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
```

## Fixtures and Factories

**Recommended Test Fixtures Location:** `src/__tests__/fixtures/`

**Progress Fixture Example:**
```typescript
// src/__tests__/fixtures/progress.ts
export const mockProgressState = {
  badges: [
    { id: 1, name: 'KI-Anfänger', icon: '🤖', unlocked: true, unlockedAt: '2026-04-03T10:00:00Z' },
    { id: 2, name: 'Prompt-Meister', icon: '💬', unlocked: false },
    // ... other badges
  ],
  days: [
    { dayId: 1, completed: true, completedAt: '2026-04-03T10:00:00Z', lessonsCompleted: [1, 2, 3] },
    { dayId: 2, completed: false, lessonsCompleted: [] },
    // ... other days
  ],
  totalProgress: 20,
  lastVisited: '2026-04-03T14:00:00Z',
  startedAt: '2026-04-01T09:00:00Z',
};

export const mockNavigationProps = {
  progress: mockProgressState,
};
```

## Coverage

**Requirements:** None currently enforced

**Recommendations for future:**
- Aim for 80%+ coverage on business logic (hooks, utilities)
- Aim for 70%+ coverage on components
- 100% coverage on critical paths (authentication, data persistence, routing)

**View Coverage (when implemented):**
```bash
npm run test:coverage
# or with Vitest
vitest --coverage
```

## Test Types

**Unit Tests:**
- Scope: Individual functions, hooks, utilities
- Approach: Test in isolation using mocks for dependencies
- Focus: `useProgress` hook, `cn()` utility
- Tools: Vitest + React Testing Library

**Integration Tests:**
- Scope: Component + hook combinations (e.g., Navigation + useProgress)
- Approach: Test component with real hook behavior
- Focus: Components receiving progress data, updating state
- Tools: React Testing Library, Vitest

**E2E Tests:**
- Framework: Not implemented
- Recommendation: Playwright or Cypress for full user flows
- Test scenarios: Course progression, badge unlocking, localStorage persistence

## Common Patterns

**Async Testing:**

Pattern for async operations (not yet in codebase, but relevant for API expansion):

```typescript
it('should handle async operations', async () => {
  const { result } = renderHook(() => useProgress());
  
  await waitFor(() => {
    expect(result.current.isLoaded).toBe(true);
  });
});
```

**Error Testing:**

Pattern from `useProgress.ts` (try-catch handling):

```typescript
it('should handle JSON parse errors gracefully', () => {
  localStorage.setItem(STORAGE_KEY, 'invalid json {');
  
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  const { result } = renderHook(() => useProgress());
  
  expect(consoleSpy).toHaveBeenCalledWith('Failed to parse progress:', expect.any(Error));
  expect(result.current.progress).toEqual(getDefaultProgress());
  
  consoleSpy.mockRestore();
});
```

**Form Validation Testing:**

Relevant for any form components (not yet tested):

```typescript
it('should validate form submission', async () => {
  const { getByRole, getByText } = render(<MyForm />);
  
  const submitButton = getByRole('button', { name: /submit/i });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(getByText(/required field/i)).toBeInTheDocument();
  });
});
```

## Current Testing Gaps

**Critical Untested Areas:**
- `useProgress` hook (state management, localStorage persistence)
- Navigation component (routing, accessibility, mobile menu)
- Page components (rendering, prop passing, event handling)
- Form validation (using react-hook-form + Zod)
- Accessibility features (aria attributes, keyboard navigation)

**Recommended Test Implementation Priority:**
1. useProgress hook (core business logic)
2. Navigation component (main user interaction)
3. Page components (content rendering)
4. Form validation (data integrity)
5. Accessibility (compliance, user experience)

---

*Testing analysis: 2026-04-03*

# Light Mode Enforcement Strategy

## Overview

As of **December 18, 2025**, the Ktern Design System has transitioned to a **Light Mode Only** enforcement strategy per stakeholder requirements. The target demographic prefers a classic, high-contrast interface optimized for enterprise clarity.

## What Changed

### 1. Theme Management (`src/lib/theme/index.ts`)

**Locked to Light Mode:**
- `getTheme()` → Always returns `'light'`
- `getResolvedTheme()` → Always returns `'light'`
- `initializeTheme()` → Always applies `'light'` class, never `'dark'`
- Disabled system preference detection (`prefers-color-scheme`)

**Status:** All original logic is preserved in comments for future re-enablement.

### 2. ThemeSwitcher Component (`src/components/utilities/ThemeSwitcher/ThemeSwitcher.tsx`)

**Deprecated:**
- Added `@deprecated` JSDoc tag
- Component still exists but has no functional effect
- Removed from public API exports (`src/index.ts`)

**Status:** Code preserved, just hidden from consumers.

### 3. Storybook Configuration (`.storybook/preview.tsx`)

**Enforced Light Mode:**
- Default background set to `'light'`
- **Backgrounds toolbar disabled** (`disable: true`) - removes switcher from UI
- Dark background option commented out
- Decorator always applies `'light'` class to `document.documentElement`

**Status:** Dark mode logic preserved in comments. Toolbar completely hidden from developers.

### 4. Documentation (`README.md`)

**Updated Messaging:**
- Changed tagline from "themable" to "high-clarity"
- Removed "Dark Mode" from Key Features
- Removed theme switching code examples
- Added note about light mode enforcement
- Updated footer from "Themable" to "High-Clarity"

### 5. Public API (`src/index.ts`)

**Exports Removed:**
- `ThemeSwitcher` component
- `ThemeSwitcherProps` type
- `Moon` and `Monitor` icons from lucide-react

**Exports Preserved:**
- `applyCustomTheme()` — Still functional for white-labeling
- `resetCustomTheme()` — Still functional
- `getTheme()`, `setTheme()`, `toggleTheme()` — Deprecated but kept for API compatibility

## What Was Preserved

### ✅ All Dark Mode Code Remains Intact

**CSS Variables (`src/app/globals.css`):**
```css
.dark {
    --background: var(--color-neutral-950);
    --foreground: var(--color-neutral-50);
    /* All dark mode variables still defined */
}
```

**Component Classes:**
- All `dark:` Tailwind utilities remain in components
- Example: `dark:bg-surface-dark`, `dark:text-text-main-dark`, etc.

**Tailwind Configuration:**
- `darkMode: ['class']` still configured in `tailwind.config.ts`

### Why Preserved?

> **Strategic Flexibility:** If stakeholder requirements change, re-enabling dark mode requires only uncommenting the preserved code blocks and re-exporting the ThemeSwitcher. No refactoring needed.

## How to Re-Enable Dark Mode (Future)

If requirements change and dark mode needs to be restored:

### 1. Restore Theme Logic (`src/lib/theme/index.ts`)

```typescript
// Uncomment the preserved code in:
// - getTheme()
// - getResolvedTheme()
// - initializeTheme()
```

### 2. Re-export ThemeSwitcher (`src/index.ts`)

```typescript
export { ThemeSwitcher } from './components/utilities/ThemeSwitcher'
export type { ThemeSwitcherProps } from './components/utilities/ThemeSwitcher'
```

### 3. Restore Storybook Dark Mode (`.storybook/preview.tsx`)

```typescript
// Uncomment the dark background option
// Uncomment the isDark detection logic in decorator
```

### 4. Update README

- Restore "Dark Mode" to Key Features
- Restore theme switching examples

**Estimated Time to Re-enable:** 15 minutes

## User-Facing Impact

### What Users See

✅ **Always Light Mode:** All users see the high-clarity light interface  
✅ **No Theme Switcher:** ThemeSwitcher is not importable  
✅ **White-Labeling Still Works:** `applyCustomTheme()` allows brand color customization

### What Developers See

⚠️ **Deprecated Warnings:** IDEs will show `@deprecated` tags on theme functions  
⚠️ **Import Errors:** Importing `ThemeSwitcher` will fail (intentional)  
✅ **No Breaking Changes:** Existing imports of theme utilities still compile (they just don't do anything)

## Testing

All quality gates passed:

```bash
✅ npm run type-check     # TypeScript validation
✅ npm run build:lib      # Library build
✅ npm run test           # Unit tests
✅ npm run build-storybook # Storybook build
```

## Architecture Decision Record (ADR)

**Context:** Stakeholders updated requirements. Target demographic prefers classic, high-contrast interface. Dark mode is no longer a user-facing feature.

**Decision:** Enforce light mode only while preserving dark mode architecture.

**Consequences:**
- **Positive:**
  - Simplified UX (no theme confusion)
  - Optimized for clarity and enterprise use
  - Zero refactoring cost to re-enable dark mode
  - Smaller bundle size (ThemeSwitcher not exported)
  
- **Negative:**
  - Users cannot switch to dark mode
  - Code is "dead" but takes up space
  - Requires documentation to explain deprecation

**Status:** Implemented ✅

---

**Last Updated:** December 18, 2025  
**Author:** Senior Frontend Engineer & Product Owner

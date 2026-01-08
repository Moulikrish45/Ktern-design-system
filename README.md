# Ktern Design System

### Codename: Arctic Horizon

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next-20232A?style=for-the-badge&logo=next&logoColor=61DAFB" alt="next" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook" />
  <img src="https://img.shields.io/badge/WCAG_2.1_AA-00A651?style=for-the-badge&logo=accessibility&logoColor=white" alt="WCAG 2.1 AA" />
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build Status" />
</p>

> An enterprise-grade, accessible, high-clarity component library built for scale.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v20.x or later
- **npm** v10.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ktern-design-system.git
cd ktern-design-system

# Install dependencies
npm install
```

### Run Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to explore the component library.

### Build the Library

```bash
npm run build:lib
```

---

## 🏗️ Architecture & Philosophy

### Atomic Design Structure

The component library follows the **Atomic Design** methodology:

```
src/components/
├── atoms/          # Basic building blocks (Button, Input, Badge)
├── molecules/      # Compositions of atoms (Card, Dialog, DropdownMenu)
├── foundation/     # Layout primitives (Box, Stack, Grid, Container)
├── templates/      # Page-level compositions
└── patterns/       # Business-specific compositions (reference examples)
```

| Level          | Description                      | Examples                             |
| -------------- | -------------------------------- | ------------------------------------ |
| **Atoms**      | Indivisible UI elements          | Button, Input, Badge, Avatar, Switch |
| **Molecules**  | Groups of atoms working together | Card, Dialog, DropdownMenu, Select   |
| **Foundation** | Layout and spacing primitives    | Box, Stack, Grid, Container          |
| **Templates**  | Page-level layout structures     |                                      |
| **Patterns**   | Business-specific compositions   | ProjectCard, StatusCard              |

### Composition Over Configuration

We follow the **Composition Pattern** instead of prop explosion:

```tsx
// ❌ Anti-pattern: Monolithic component
<TextInput
  label="Email"
  helperText="Enter your email"
  errorText="Invalid email"
  icon="mail"
  showClearButton
/>

// ✅ Composition pattern: Flexible & extensible
<Stack gap="1">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" aria-describedby="email-error" />
  <p id="email-error" className="text-sm text-destructive">
    Invalid email address
  </p>
</Stack>
```

### Token-Based Theming

Three-layer architecture for runtime theme switching:

1. **Design Tokens** → Source of truth (CSS variables)
2. **CSS Variables** → Runtime switching (light/dark modes)
3. **Tailwind Utilities** → Developer interface (semantic classes)

```css
/* Layer 2: CSS Variables */
:root {
  --primary: 79 70 229;
  --background: 255 255 255;
}

.dark {
  --primary: 99 102 241;
  --background: 15 23 42;
}
```

```tsx
/* Layer 3: Tailwind (Developers use semantic names) */
<Button className="bg-primary text-primary-foreground">Click me</Button>
```

---

## 📦 Component Library

### Atoms

| Component    | Description                 | Features                                |
| ------------ | --------------------------- | --------------------------------------- |
| **Button**   | Primary interactive element | 8 variants, loading state, icon support |
| **Input**    | Text input field            | Validation states, ForwardRef           |
| **Badge**    | Status indicator            | Multiple variants, semantic colors      |
| **Avatar**   | User profile image          | Radix UI, fallback support, sizes       |
| **Switch**   | Toggle control              | Radix UI, full accessibility            |
| **Skeleton** | Loading placeholder         | Tailwind animate-pulse                  |
| **Label**    | Form label                  | Semantic HTML                           |
| **Textarea** | Multi-line input            | Auto-resize option                      |

### Molecules

| Component        | Description       | Features                                             |
| ---------------- | ----------------- | ---------------------------------------------------- |
| **Card**         | Content container | Compound components (Header, Title, Content, Footer) |
| **Dialog**       | Modal dialog      | Radix UI, focus trap, accessibility                  |
| **DropdownMenu** | Context menu      | Radix UI, sub-menus, keyboard nav                    |
| **Select**       | Dropdown selector | Radix UI, typeahead                                  |

### Foundation (Layout Primitives)

| Component     | Description           | Props                                  |
| ------------- | --------------------- | -------------------------------------- |
| **Box**       | Polymorphic container | `as`, `className`                      |
| **Stack**     | Flexbox layout        | `direction`, `gap`, `align`, `justify` |
| **Grid**      | CSS Grid layout       | `columns`, `gap`                       |
| **Container** | Max-width wrapper     | `size` (sm/md/lg/xl/full)              |

```tsx
// Polymorphic support
<Stack as="section" direction="vertical" gap="4">
  <Box as="article" className="p-4 bg-card">
    Content
  </Box>
</Stack>
```

### Key Technical Features

- ✅ **Radix UI Primitives** — Accessible, unstyled components
- ✅ **CVA (Class Variance Authority)** — Type-safe variant management
- ✅ **ForwardRef** — All components accept refs
- ✅ **Semantic Tokens** — No hardcoded colors
- ✅ **High-Contrast Light Mode** — Optimized for clarity and readability
- ✅ **TypeScript** — Full type safety

---

## 🎨 Customization & White-Labeling

### Custom Brand Colors

The design system supports white-labeling through custom brand colors:

```tsx
import { applyCustomTheme, resetCustomTheme } from "@ktern/design-system";

// Apply custom brand colors (RGB format)
applyCustomTheme({
  colorBrandPrimary: "220 80 50",
  colorBrandSecondary: "180 60 45",
  colorSuccess: "45 90 55",
});

// Reset to default theme
resetCustomTheme();
```

> **Note:** Dark mode has been disabled per stakeholder requirements. The system
> enforces a high-clarity light mode interface optimized for enterprise use.

### Available CSS Variables

```css
--primary / --primary-foreground
--secondary / --secondary-foreground
--accent / --accent-foreground
--background / --foreground
--card / --card-foreground
--muted / --muted-foreground
--destructive / --destructive-foreground
--border / --input / --ring
```

---

## �‍💻 Developer Workflow

### Creating Components

Use the **Plop.js generator** to scaffold new components:

```bash
npm run generate
```

Follow the prompts:

1. Select component type (atom, molecule, foundation, etc.)
2. Enter component name (e.g., `Tooltip`)
3. Choose if CVA variants are needed

**Generated files:**

```
src/components/atoms/Tooltip/
├── Tooltip.tsx          # Component implementation
├── Tooltip.stories.tsx  # Storybook stories
├── Tooltip.test.tsx     # Unit tests
└── index.ts             # Barrel export
```

### Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage

# UI mode
npm run test:ui
```

**Testing Stack:**

- **Vitest** — Fast unit testing
- **React Testing Library** — Component testing
- **Chromatic** — Visual regression testing

### Committing Code

Commits follow **Conventional Commits** and are validated by Husky:

```bash
# ✅ Good commits
feat: add Tooltip component
fix: button hover state in dark mode
docs: update README examples
test: add Avatar accessibility tests

# ❌ Rejected commits
fixed stuff          # Missing type
feat: Added button   # Wrong tense
```

**Pre-commit checks (automatic):**

1. `npm run lint` — ESLint + jsx-a11y
2. `npm run type-check` — TypeScript validation
3. `npm test` — Unit tests

---

## 📦 Build & Distribution

### Library Build

```bash
# Build for distribution
npm run build:lib

# Create local package
npm run pack:local
```

**Output:**

- `dist/index.mjs` — ES Module
- `dist/index.js` — CommonJS
- `dist/index.d.ts` — TypeScript declarations

### Tree Shaking

The library is configured for optimal tree shaking:

```json
{
  "sideEffects": ["**/*.css"]
}
```

**Consumer benefits:**

```typescript
// Only imports Button code
import { Button } from "@ktern/design-system";

// Input, Badge, etc. are tree-shaken away ✂️
```

## 🔌 Integration Guide

### 1. Import Global Styles

In your root file (e.g., `app/layout.tsx`), import the design system's CSS:

```tsx
// Import THIS before your own globals.css
import "@ktern/design-system/dist/style.css";
import "./globals.css";
```

### 2. Configure Tailwind

Add the library to your content array so Tailwind sees the classes:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // Add this line:
    "./node_modules/@ktern/design-system/dist/**/*.{js,mjs}",
  ],
  // ...
};
```

### 3. Usage

Import components directly:

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Stack,
} from "@ktern/design-system";

function App() {
  return (
    <Stack gap="4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
      </Card>
      <Button variant="primary">Get Started</Button>
    </Stack>
  );
}
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css         # Design tokens & CSS variables
│   └── layout.tsx          # Root layout
├── components/
│   ├── atoms/              # Basic building blocks
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Label/
│   │   ├── Skeleton/
│   │   ├── Switch/
│   │   └── Textarea/
│   ├── molecules/          # Composed components
│   │   ├── Card/
│   │   ├── Dialog/
│   │   ├── DropdownMenu/
│   │   └── Select/
│   ├── foundation/         # Layout primitives
│   │   ├── Box/
│   │   ├── Container/
│   │   ├── Grid/
│   │   └── Stack/
│   ├── cards/              # Specialized card variants
│   ├── dataviz/            # Chart components
│   ├── feedback/           # Toast, alerts
│   ├── forms/              # Form components
│   ├── modals/             # Modal dialogs
│   ├── navigation/         # Nav components
│   ├── templates/          # Page layouts
│   ├── tokens/             # Token documentation
│   └── utilities/          # ThemeSwitcher, etc.
├── lib/
│   ├── theme/              # Theme management utilities
│   └── utils.ts            # cn() utility
├── patterns/               # Business-specific examples
│   ├── ProjectCard/
│   └── OverallStatusCard/
└── index.ts                # Main exports
```

---

## 🔧 Available Scripts

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| `npm run dev`           | Start Next.js development server |
| `npm run storybook`     | Start Storybook on port 6006     |
| `npm run build:lib`     | Build library for distribution   |
| `npm run pack:local`    | Create local npm package         |
| `npm test`              | Run unit tests                   |
| `npm run test:coverage` | Run tests with coverage          |
| `npm run lint`          | Run ESLint                       |
| `npm run type-check`    | TypeScript validation            |
| `npm run generate`      | Scaffold new component           |
| `npm run chromatic`     | Run visual regression tests      |

---

## 🛡️ Quality Gates

### Automated Checks

Every commit is validated:

| Check             | Tool              | Purpose                      |
| ----------------- | ----------------- | ---------------------------- |
| Linting           | ESLint + jsx-a11y | Code quality & accessibility |
| Type Checking     | TypeScript        | Type safety                  |
| Unit Tests        | Vitest            | Regression prevention        |
| Commit Messages   | Commitlint        | Clean git history            |
| Visual Regression | Chromatic         | UI consistency               |

### Accessibility

- **WCAG 2.1 AA Compliant**
- Keyboard navigation
- Screen reader support
- Focus management
- ARIA attributes

---

## 📚 Documentation

- **Storybook** — Interactive component playground
- **JSDoc** — Inline code documentation
- **TypeScript** — Auto-generated prop tables

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/new-component`
3. Make changes following the coding standards
4. Run tests: `npm test`
5. Commit with conventional commits: `git commit -m "feat: add Tooltip"`
6. Push and create a Pull Request

---

## 📄 License

MIT © Ktern Team

---

<p align="center">
  <strong>Built with ❤️ for enterprise applications</strong><br>
  <em>Scalable • Accessible • High-Clarity</em>
</p>

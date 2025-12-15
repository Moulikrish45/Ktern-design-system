# KTern Design System

![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![Storybook](https://img.shields.io/badge/Storybook-Active-ff4785)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.16-38bdf8)
![Chromatic](https://img.shields.io/badge/Chromatic-Visual%20Regression-fc521f)

A comprehensive, accessible design system for SAP transformation applications, built with React, TypeScript, Tailwind CSS, and Storybook.

## ✨ Features

- **🎨 Modern Design**: Beautiful, cohesive visual language with glassmorphism and gradient effects
- **♿ Accessibility First**: Full keyboard navigation, ARIA attributes, focus management
- **🌙 Dark Mode**: Complete dark mode support across all components
- **📦 Composable**: Small, focused primitives that work together seamlessly
- **🎯 TypeScript**: Strict typing for better developer experience
- **📖 Documented**: Comprehensive Storybook with 100+ stories
- **🧪 Battle-Tested**: Production-ready components used in enterprise applications

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ktern-design-system.git
cd ktern-design-system

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

Storybook will open at [http://localhost:6006/](http://localhost:6006/)

### Development

```bash
# Run type checking
npm run type-check

# Build Storybook
npm run build-storybook

# Run linter (if configured)
npm run lint
```

## 📚 Component Library

### Atoms (Primitives)
- **Button** - 8 variants including Hero, Primary, Secondary, Outline, Ghost, Destructive
- **Input** - Text, email, password, file inputs with full styling
- **Label** - Accessible labels with peer-disabled support
- **Textarea** - Multi-line text input with auto-resize
- **Select** - Custom dropdown with groups, search, and keyboard navigation

### Molecules (Composed)
- **Card** - Flexible container with Header, Title, Description, Content, Footer
- **Dialog** - Fully accessible modal with focus trap and scroll lock

### Cards (Specialized)
- **StatCard** - Metrics with trends and positive/negative indicators
- **ProjectCard** - SAP project cards with status, deadline, team size
- **OverallStatusCard** - System status overview
- **DataVizCard** - Data visualization containers
- **HoverExpandCard** - Interactive cards with hover effects
- **TransformationVelocityCard** - Progress tracking cards

### Navigation
- **Breadcrumbs** - Navigation breadcrumb trails
- **Pagination** - Page navigation with ellipsis
- **UnderlineTabs** - Animated tab navigation

### Forms
- **Checkbox** - Custom checkbox with indeterminate state

### Data Visualization
- **BarChart** - Horizontal and vertical bar charts
- **DonutChart** - Ring charts with center content
- **SparklineChart** - Inline trend visualizations

### Feedback
- **Toast** - Notification system

### Templates
- **Dashboard** - Full dashboard layout showcasing component integration

## 🎨 Design Tokens

The design system uses a comprehensive token system:

```typescript
// Colors
--brand-primary: #4F46E5
--brand-secondary: #06B6D4
--surface-light: #FFFFFF
--surface-dark: #0F172A

// Typography
--font-family: 'Geist', sans-serif
--heading-lg: 3rem
--body-base: 1rem

// Spacing
--spacing-base: 4px
--spacing-lg: 24px

// Shadows
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

## 💡 Usage Examples

### Simple Button

```tsx
import { Button } from 'ktern-design-system';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

### Form with Dialog

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, Button, Label, Input } from 'ktern-design-system';

function CreateProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero">Create Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Project Name</Label>
            <Input id="name" placeholder="SAP S/4HANA Migration" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="primary">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Dashboard Layout

```tsx
import { Dashboard } from 'ktern-design-system';

function App() {
  return <Dashboard />;
}
```

## 🏗️ Architecture

### Design Principles

1. **Composition Over Configuration** - Small, focused components that compose together
2. **Accessibility First** - WCAG 2.1 AA compliant with full keyboard support
3. **Type Safety** - Strict TypeScript for better DX and fewer runtime errors
4. **Performance** - Optimized bundle size with tree-shaking support
5. **Consistency** - Using CVA (Class Variance Authority) for variant management

### Technology Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4.16** - Utility-first styling
- **Radix UI** - Headless accessible components
- **CVA** - Type-safe variant management
- **Storybook 10.1.9** - Component documentation
- **Lucide React** - Icon library

## 📖 Documentation

All components are documented in Storybook with:
- Interactive examples
- Props tables
- Accessibility guidelines
- Dark mode variants
- Composition patterns

Visit the [Storybook](http://localhost:6006/) to explore all components.

## 🧪 Testing

### TypeScript & Build
- **TypeScript** - Strict type checking with `npm run type-check`
- **Build** - Storybook build verification

### Accessibility
- **@storybook/addon-a11y** - Realtime accessibility testing in Storybook
- **WCAG 2.1 AA** - All components compliant

### Visual Regression Testing
- **Chromatic** - Automated visual regression testing
- **Setup:**
  1. Sign up at [chromatic.com](https://chromatic.com)
  2. Add your project token to GitHub Secrets as `CHROMATIC_PROJECT_TOKEN`
  3. Run `npm run chromatic` locally or let CI handle it automatically
- **Benefits:**
  - Catches 1px margin shifts
  - Prevents accidental style changes
  - Screenshot comparison on every commit
  - Free tier available

### Running Tests

```bash
# Type check
npm run type-check

# Build Storybook (production verify)
npm run build-storybook

# Chromatic (visual regression)
npm run chromatic
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspired by **Shadcn/ui** and **Radix UI**
- Built with best practices from **Josh Comeau**, **Kent C. Dodds**, and **Adam Wathan**
- SAP transformation expertise from the KTern team

---

**Made with ❤️ by the KTern Team**

**Status**: ✅ Production Ready | 🚀 V1.5.0

# KTern.AI Frontend Design System

**Version:** 1.5.0  
**Codename:** Arctic Horizon
**Last Updated:** December 2025

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 [Design Philosophy](#11-design-philosophy)
   - 1.2 [Core Principles](#12-core-principles)
   - 1.3 [System Architecture](#13-system-architecture)

2. [Style Foundation](#2-style-foundation)
   - 2.1 [Color System](#21-color-system)
   - 2.2 [Typography](#22-typography)
   - 2.3 [Iconography](#23-iconography)

3. [Design Tokens](#3-design-tokens)
   - 3.1 [Spacing System](#31-spacing-system)
   - 3.2 [Border Radius](#32-border-radius)
   - 3.3 [Shadows & Elevation](#33-shadows--elevation)
   - 3.4 [Motion & Timing](#34-motion--timing)

4. [Component Library](#4-component-library)
   - 4.1 [Buttons](#41-buttons)
   - 4.2 [Form Controls](#42-form-controls)
   - 4.3 [Cards & Containers](#43-cards--containers)
   - 4.4 [Navigation](#44-navigation)
   - 4.5 [Feedback Components](#45-feedback-components)

5. [Patterns & Best Practices](#5-patterns--best-practices)
   - 5.1 [Layout Patterns](#51-layout-patterns)
   - 5.2 [Interaction Patterns](#52-interaction-patterns)
   - 5.3 [Data Visualization](#53-data-visualization)

6. [Accessibility](#6-accessibility)
   - 6.1 [WCAG Compliance](#61-wcag-compliance)
   - 6.2 [Keyboard Navigation](#62-keyboard-navigation)
   - 6.3 [Screen Readers](#63-screen-readers)

7. [Implementation Guide](#7-implementation-guide)
   - 7.1 [Getting Started](#71-getting-started)
   - 7.2 [Framework Integration](#72-framework-integration)
   - 7.3 [Dark Mode Implementation](#73-dark-mode-implementation)

---

## 1. Introduction

### 1.1 Design Philosophy

**"From Chaos to Cosmos"**

KTern.AI's design system is inspired by the Arctic Tern—a migratory bird representing precision, adaptability, endurance, and balance. Our design philosophy merges enterprise-grade governance clarity with empathetic digital warmth.

**Core Metaphor:**
- **Maroon (Primary):** Human Trust & Governance Integrity — the emotional core
- **Orange (Secondary):** Transformation & Innovation Energy — optimism and active engagement
- **Neutrals:** Continuity & Precision — a neutral canvas for hierarchy
- **Semantic Colors:** Transparency, Sustainability, & Clarity

### 1.2 Core Principles

1. **Precision First:** Every design decision is rooted in technical accuracy and SAP system complexity
2. **Scalable & Accessible:** REM-based typography, WCAG 2.1 AA compliant, respects user preferences
3. **Human-Centric:** Balances robotic precision with warm, approachable interactions
4. **Modular Architecture:** Components are atomic and composable
5. **Performance-Driven:** Lightweight animations, optimized rendering, minimal cognitive load

### 1.3 System Architecture

```
Design System
├── Foundation Layer
│   ├── Color Tokens
│   ├── Typography Scale
│   └── Iconography
├── Token Layer
│   ├── Spacing
│   ├── Border Radius
│   ├── Shadows
│   └── Motion
├── Component Layer
│   ├── Atoms (Button, Input)
│   ├── Molecules (Form Group, Card)
│   └── Organisms (Navigation, Modal)
└── Pattern Layer
    ├── Layout Patterns
    ├── Interaction Patterns
    └── Data Visualization
```

---

## 2. Style Foundation

### 2.1 Color System

#### 2.1.1 Brand Colors

**Primary: Deep Wine Maroon**
- **Light Mode:** `#9b1c2c`(Best contrast score) optional `#a9203e`
- **Dark Mode:** primary choice:`#c41e3a` | secondary choice: `#f3b0aa`
- **Usage:** Core actions, navigation, primary CTAs, active states
- **Psychology:** Trust, governance, authority, emotional grounding

**Secondary: Arctic Amber Orange**
- **Light Mode:** `#ff8f00`
- **Dark Mode:** `#ffae42`
- **Usage:** AI features, innovation triggers, energy cues, secondary CTAs
- **Psychology:** Transformation, optimism, innovation, warmth

#### 2.1.2 Neutral Palette

| Token Name | Light Mode | Dark Mode | Usage |
|------------|-----------|-----------|--------|
| `bg-background` | `#f8f8ff` (Polar White) | `#100c08` (Cosmic Black) | Default page background |
| `bg-surface` | `#ffffff` | `#1c1917` | Cards, modals, sidebars |
| `text-foreground` | `#100c08` | `#f5f5f5` | Primary text |
| `text-muted` | `#666563` (Arctic Graphite) | `#a8a29e` | Secondary text, labels |
| `border-base` | `#e5e5e5` | `#44403c` | Dividers, input borders |

#### 2.1.3 Semantic Colors

| Role | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|--------|
| **Success** | `#3cd070` (Emerald Teal) | `#91e0c7` | Positive feedback, completion |
| **Warning** | `#fada5e` (Honey Gold) | `#ecd540` | Alerts, cautions |
| **Error/Danger** | `#c41e3a` | `#de828a` | Errors, destructive actions |
| **Info** | `#4166f5` (Aurora Blue) | `#6782f7` | Informational banners, links |

#### 2.1.4 Extended Palette (Maroon Shades)

```css
--maroon-950: #320a14;  /* Deepest shadow */
--maroon-900: #430d1a;  /* Dark hover state */
--maroon-700: #651426;  /* Button hover */
--maroon-600: #76172c;  /* Focused accent */
--maroon-500: #a9203e;  /* FLAGSHIP but #9b1c2c is best contrast score */
--maroon-400: #c41e3a;  /* System burgundy */
--maroon-100: #f3b0aa;  /* Badge background */
--maroon-50:  #f6e6e3;  /* Muted background */
--orange-600: #ff8f00;  /* Action/Energy color */
```

#### 2.1.5 Color Usage Ratio

**60-30-10 Rule:**
- **60%** Neutral (White/Gray/Black)
- **30%** Primary (Deep Wine)
- **10%** Secondary (Arctic Amber)

#### 2.1.6 Gradients

**Maroon Sunset** (Hero Headers, CTA Backgrounds)
```css
background: linear-gradient(135deg, #a9203e 0%, #d94e28 50%, #ff8f00 100%);
```

**Arctic Light** (Subtle Background Washes)
```css
background: linear-gradient(135deg, #FFE066 0%, #FF8C42 100%);
```

**Ocean Flow** (Data Visuals, Analytics)
```css
background: linear-gradient(135deg, #4166f5 0%, #3cd070 100%);
```

#### 2.1.7 Accessibility Requirements

- **Minimum Contrast:** 4.5:1 for normal text, 3:1 for large text (18px+)
- **Focus States:** Always use `ring-brand-primary` with 4px ring width
- **Dark Mode:** Never use pure black (`#000000`); use Cosmic Black (`#100c08`)
- **Color Independence:** Never rely solely on color to convey information

---

### 2.2 Typography

#### 2.2.1 Font Families

| Role | Font Family | Weights | Classification | Usage |
|------|------------|---------|---------------|--------|
| **Primary UI** | Geist | 400, 500, 600, 700, 800 | Sans-Serif | Dashboards, data tables, forms, settings |
| **Brand Display** | Manrope | 400, 600, 700 | Sans-Serif | Marketing, headlines, human moments |
| **Governance** | IBM Plex Serif | 400, 600 | Serif | Reports, whitepapers, long-form content |
| **Code** | JetBrains Mono | 400, 500 | Monospace | API docs, code snippets, logs |
| **Technical Viz** | Sora | 500, 600 | Sans-Serif | Process diagrams, workflow labels |

#### 2.2.2 Type Scale (REM-First)

**Base Size:** 16px = 1rem

| Token | REM | PX | Usage |
|-------|-----|-----|--------|
| `text-xs` | 0.75rem | 12px | Captions, tertiary data |
| `text-sm` | 0.875rem | 14px | UI secondary text, table rows |
| `text-base` | 1rem | 16px | Default body text |
| `text-lg` | 1.125rem | 18px | Introductory paragraphs |
| `text-xl` | 1.25rem | 20px | Card titles, subsection headers |
| `text-2xl` | 1.5rem | 24px | Section headers, modal titles |
| `text-3xl` | 2rem | 32px | Page titles, key metrics |
| `text-4xl` | 2.5rem | 40px | Hero sub-headers |
| `text-5xl` | 3rem | 48px | Hero headlines (mobile) |
| `text-6xl` | 4rem | 64px | Marketing headlines |
| `text-7xl` | 4.5rem | 72px | Campaign visuals |

#### 2.2.3 Line Heights

```css
--leading-tight: 1.1;     /* Headlines */
--leading-snug: 1.25;     /* Section headers */
--leading-normal: 1.5;    /* UI/Dashboard */
--leading-relaxed: 1.67;  /* Long-form body */
--leading-loose: 1.8;     /* Marketing body */
```

#### 2.2.4 Letter Spacing

```css
--tracking-tight: -0.02em;  /* Headlines for impact */
--tracking-normal: 0;       /* Default */
--tracking-wide: 0.02em;    /* Uppercase labels */
--tracking-wider: 0.05em;   /* Badges, tags */
```

#### 2.2.5 Text Width Standards

| Content Type | Max Width | Implementation |
|-------------|-----------|----------------|
| Marketing Body | 70ch | `max-w-[70ch]` |
| Docs/Governance | 75ch | `max-w-[75ch]` |
| Dashboard UI | 100% | Fill container |
| Captions | Auto | No constraint |

#### 2.2.6 Typography Examples

**Heading Hierarchy**
```html
<h1 class="text-4xl font-extrabold font-sans leading-tight text-foreground">
  Product Title
</h1>
<h2 class="text-2xl font-bold font-sans leading-snug text-foreground">
  Section Heading
</h2>
<h3 class="text-xl font-semibold font-sans text-foreground">
  Subsection
</h3>
```

**Body Text**
```html
<p class="text-base font-sans leading-normal text-foreground">
  Default body copy using Geist for precision and clarity.
</p>
<p class="text-base font-brand leading-relaxed text-muted">
  Human-centric content using Manrope for warmth.
</p>
```

---

### 2.3 Iconography

#### 2.3.1 Icon System Specifications

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **Grid Size** | 24×24px | Standard touch target |
| **Live Area** | 22×22px | 1px padding prevents clipping |
| **Stroke Weight** | 2px | Legibility at small sizes |
| **Corner Radius** | 2-3px | "Soft geometric" professional feel |
| **Terminals** | Round Cap | Modern and organic |
| **Perspective** | Flat/Front-on | Maximizes clarity |

#### 2.3.2 Icon Color Strategy

| Icon Type | Color Token | Hex | Usage |
|-----------|------------|-----|--------|
| **Primary Brand** | `maroon-500` | `#a9203e` | Core modules, navigation, governance |
| **Action/Energy** | `orange-600` | `#ff8f00` | AI features, active states, validations |
| **System/UI** | `gray-600` | `#666563` | Settings, utilities, close buttons |
| **Success** | `green-600` | `#3cd070` | Completed workflows, passing states |
| **Warning** | `yellow-500` | `#fada5e` | Alerts, caution indicators |

#### 2.3.3 Core Icon Set

**Brand Icons (Maroon)**
- Flask/Beaker: Labs, simulations, testing
- Shield: Governance, security, compliance
- Building: Enterprise, SAP landscape
- Map/Compass: Roadmap, migration path
- Document: Reports, whitepapers

**Action Icons (Orange)**
- Sparkles: AI/magic, insights, automation
- Lightning Bolt: Speed, transformation, quick actions
- Check-Circle: Validation, verified steps
- Rocket: Launch, project initiation

**Utility Icons (Gray)**
- Chevrons: Navigation
- Search: Global search
- Filter: Data tables
- Edit: Modification
- Settings: Configuration

#### 2.3.4 Icon Implementation

**SVG Structure (Example: Flask)**
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 2V5.5L6 11V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V11L14 5.5V2" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
  <path d="M10 2H14" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
```

**React Component (Using Lucide)**
```jsx
import { Beaker, CheckCircle, Settings } from 'lucide-react';

// Brand Feature
<Beaker className="text-brand-primary w-6 h-6 stroke-[2]" />

// Active Validation
<CheckCircle className="text-brand-secondary w-6 h-6 stroke-[2]" />

// Utility
<Settings className="text-muted w-6 h-6 stroke-[2]" />
```

#### 2.3.5 Icon Guidelines

**✅ Do:**
- Maintain 2px stroke weight consistently
- Use `stroke="currentColor"` for dynamic coloring
- Pair brand icons with labels (Manrope font)
- Export as optimized SVGs

**❌ Don't:**
- Use multi-color icons (maintain monotone)
- Use filled/solid styles for main icons
- Use blue for brand icons (reserved for info/links)
- Scale icons below 16px (readability suffers)

---

## 3. Design Tokens

### 3.1 Spacing System

**Base Unit:** 4px (0.25rem)

| Token | Value | Usage |
|-------|-------|--------|
| `space-0` | 0 | Reset |
| `space-1` | 0.25rem (4px) | Tight spacing |
| `space-2` | 0.5rem (8px) | Icon-text gap |
| `space-3` | 0.75rem (12px) | Compact elements |
| `space-4` | 1rem (16px) | Default spacing |
| `space-5` | 1.25rem (20px) | Comfortable spacing |
| `space-6` | 1.5rem (24px) | Section spacing |
| `space-8` | 2rem (32px) | Component separation |
| `space-10` | 2.5rem (40px) | Large gaps |
| `space-12` | 3rem (48px) | Section headers |
| `space-16` | 4rem (64px) | Major sections |
| `space-20` | 5rem (80px) | Hero padding |
| `space-24` | 6rem (96px) | Page sections |

**Implementation:**
```css
.component {
  padding: var(--space-4);
  margin-bottom: var(--space-6);
  gap: var(--space-2);
}
```

---

### 3.2 Border Radius

| Token | Value | Usage |
|-------|-------|--------|
| `rounded-sm` | 4px | Badges, tags |
| `rounded-md` | 6px | **Buttons, inputs** (standard) |
| `rounded-lg` | 8px | Small cards |
| `rounded-xl` | 12px | **Cards, panels** (standard) |
| `rounded-2xl` | 16px | **Modals, dialogs** |
| `rounded-3xl` | 24px | Special containers |
| `rounded-full` | 9999px | Avatar, indicators |

**Consistency Rule:** Never mix radius values within the same component.

---

### 3.3 Shadows & Elevation

```css
/* Subtle depth for cards */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Default card elevation */
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 
             0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Hover state, dropdowns */
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 
             0 4px 6px -4px rgb(0 0 0 / 0.1);

/* Modals, popovers */
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 
             0 8px 10px -6px rgb(0 0 0 / 0.1);

/* Maximum elevation */
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Brand-specific shadows */
--shadow-primary: 0 8px 16px -4px rgb(169 32 62 / 0.2);
--shadow-secondary: 0 8px 16px -4px rgb(255 143 0 / 0.2);
```

**Usage Guidelines:**
- Cards at rest: `shadow-sm`
- Cards on hover: `shadow-md` or `shadow-lg`
- Modals: `shadow-2xl`
- Primary CTA buttons: `shadow-primary`

---

### 3.4 Motion & Timing

#### 3.4.1 Duration Tokens

```css
--duration-instant: 100ms;   /* Quick feedback (hover) */
--duration-fast: 200ms;      /* Standard transitions */
--duration-normal: 300ms;    /* Default animations */
--duration-slow: 400ms;      /* Large movements (modals) */
--duration-slower: 600ms;    /* Page transitions */
```

#### 3.4.2 Easing Functions

```css
/* Natural motion */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Entrance animations */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* Exit animations */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Arctic Tern signature (fast start, smooth landing) */
--ease-tern: cubic-bezier(0.2, 0, 0.38, 0.9);
```

#### 3.4.3 Animation Principles

**✅ Do:**
- Use 200-300ms for standard interactions
- Apply `ease-tern` for signature brand feel
- Animate opacity + transform together (never just one)
- Respect `prefers-reduced-motion`

**❌ Don't:**
- No "bouncy" or spring animations
- Avoid off-screen fly-ins or dramatic entrances
- Never animate width/height (use transform instead)
- Don't exceed 600ms duration

---

## 4. Component Library

### 4.1 Buttons

#### 4.1.1 Button Anatomy

```
┌─────────────────────────────────┐
│  [Icon?] Label Text [Icon?]     │  ← Height: 40px
└─────────────────────────────────┘
  ↑                             ↑
  Padding-X: 16px          Border-Radius: 6px
```

#### 4.1.2 Button Variants

**Primary Button**
- **Purpose:** Core actions (Save, Submit, Deploy)
- **Visual Specs:**
  - Background: `maroon-500` (#a9203e)
  - Text: White
  - Font: Manrope 600
  - Border-radius: 6px
  - Shadow: `shadow-primary`
- **States:**
  - Hover: `maroon-600` (#76172c)
  - Active: `maroon-700`, slight depress (translateY +1px)
  - Disabled: `opacity-50`, `cursor-not-allowed`
  - Focus: 4px ring `maroon-500/50`

```html
<button class="bg-brand-primary text-white font-brand font-semibold 
               rounded-md px-4 py-2.5 
               hover:bg-[#76172c] 
               active:translate-y-0.5
               disabled:opacity-50 disabled:cursor-not-allowed
               focus:ring-4 focus:ring-brand-primary/50 focus:outline-none
               transition-all duration-200 
               shadow-lg shadow-brand-primary/20">
  Save Changes
</button>
```

**Energy Button (AI/Innovation)**
- **Purpose:** AI-driven actions (Generate, Analyze, Transform)
- **Visual Specs:**
  - Background: Gradient (Maroon → Orange)
  - Text: White
  - Icon: Sparkles (left aligned)
- **Interaction:** Icon subtle pulse on hover

```html
<button class="bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-secondary 
               text-white font-brand font-semibold 
               rounded-md px-4 py-2.5 
               hover:opacity-90
               focus:ring-4 focus:ring-brand-secondary/50 focus:outline-none
               transition-all duration-200 
               shadow-lg shadow-brand-secondary/20
               flex items-center gap-2">
  <svg class="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
  </svg>
  Generate Insights
</button>
```

**Secondary Button**
- **Purpose:** Alternative actions (Cancel, Back, Filter)
- **Visual Specs:**
  - Background: White
  - Border: 1px solid `gray-200`
  - Text: `gray-700`

```html
<button class="bg-white text-gray-700 font-brand font-medium 
               border border-gray-200 
               rounded-md px-4 py-2.5 
               hover:bg-gray-50 hover:border-gray-300
               focus:ring-4 focus:ring-gray-200 focus:outline-none
               transition-all duration-200">
  Cancel
</button>
```

**Ghost Button**
- **Purpose:** Low priority (Table actions, links)
- **Visual Specs:**
  - Background: Transparent
  - Text: `maroon-500`

```html
<button class="bg-transparent text-brand-primary font-medium 
               rounded-md px-4 py-2 
               hover:bg-brand-primary/5
               focus:ring-4 focus:ring-brand-primary/20 focus:outline-none
               transition-all duration-200">
  View Details →
</button>
```

**Destructive Button**
- **Purpose:** Dangerous actions (Delete, Revoke)
- **Visual Specs:**
  - Background: White (at rest)
  - Border: 1px solid `danger` (#c41e3a)
  - Text: `danger`
  - Hover: Fills with danger color (background animation)

```html
<button class="bg-white text-danger font-brand font-medium 
               border border-danger 
               rounded-md px-4 py-2.5 
               hover:bg-danger hover:text-white hover:border-danger
               focus:ring-4 focus:ring-danger/20 focus:outline-none
               transition-all duration-300">
  Delete Project
</button>
```

#### 4.1.3 Button Sizes

| Size | Height | Padding-X | Font Size | Use Case |
|------|--------|-----------|-----------|----------|
| Small | 32px | 12px | 0.875rem | Dense UIs, tables |
| **Default** | **40px** | **16px** | **1rem** | Standard use |
| Large | 48px | 20px | 1.125rem | Hero CTAs |

#### 4.1.4 Icon Buttons

**Standard Icon Button**
```html
<button class="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 
               flex items-center justify-center
               transition-colors duration-200">
  <svg class="w-5 h-5 text-gray-600" stroke="currentColor" stroke-width="2">
    <!-- Icon path -->
  </svg>
</button>
```

---

### 4.2 Form Controls

#### 4.2.1 Text Input

**Anatomy:**
```
┌─────────────────────────────────────┐
│  Label Text                         │  ← Font: Manrope 500, 14px
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Placeholder text...         [Icon] │  ← Height: 40px, Border: 1px
└─────────────────────────────────────┘
  ↑                                   ↑
  Padding-X: 12px            Border-radius: 6px
```

**States:**
- **Default:** Border `gray-200`, Background white
- **Hover:** Border `gray-400`
- **Focus:** Border `maroon-500`, Ring 4px `maroon-100`
- **Filled:** Background `gray-50` (optional for high-density forms)
- **Error:** Border `danger`, Icon alert (right)
- **Success:** Border `success`, Icon check-circle (orange)
- **Disabled:** Background `gray-100`, Opacity 0.6

**Implementation:**
```html
<div class="flex flex-col gap-1.5">
  <label class="text-sm font-brand font-medium text-gray-700">
    Project Name
  </label>
  <input 
    type="text" 
    placeholder="Enter project name..."
    class="h-10 rounded-md border border-gray-200 px-3 
           font-sans text-gray-900 
           placeholder:text-gray-400 
           hover:border-gray-400
           focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 
           outline-none 
           transition-all duration-200"
  />
  <span class="text-xs text-gray-500">
    This will be visible to all team members
  </span>
</div>
```

**Error State:**
```html
<div class="flex flex-col gap-1.5">
  <label class="text-sm font-brand font-medium text-gray-700">
    Email Address
  </label>
  <div class="relative">
    <input 
      type="email" 
      value="invalid.email"
      class="h-10 rounded-md border border-danger px-3 pr-10
             font-sans text-gray-900 
             focus:border-danger focus:ring-4 focus:ring-danger/10 
             outline-none 
             transition-all duration-200"
    />
    <svg class="w-5 h-5 text-danger absolute right-3 top-1/2 -translate-y-1/2" 
         fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  </div>
  <span class="text-xs text-danger">
    Please enter a valid email address
  </span>
</div>
```

#### 4.2.2 Select Dropdown

```html
<div class="flex flex-col gap-1.5">
  <label class="text-sm font-brand font-medium text-gray-700">
    Workspace
  </label>
  <select 
    class="h-10 rounded-md border border-gray-200 px-3 pr-10
           font-sans text-gray-900 
           hover:border-gray-400
           focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 
           outline-none 
           transition-all duration-200
           appearance-none bg-white
           bg-[url('data:image/svg+xml,...')] bg-no-repeat bg-right">
    <option>Select workspace...</option>
    <option>Engineering</option>
    <option>Design</option>
  </select>
</div>
```

#### 4.2.3 Checkbox

```html
<label class="flex items-center gap-2 cursor-pointer">
  <input 
    type="checkbox" 
    class="w-5 h-5 rounded border-2 border-gray-300 
           text-brand-primary 
           focus:ring-4 focus:ring-brand-primary/20 
           transition-colors duration-200"
  />
  <span class="text-sm font-sans text-gray-700">
    I agree to the terms and conditions
  </span>
</label>
```

#### 4.2.4 Toggle Switch

```html
<button 
  role="switch" 
  aria-checked="true"
  class="relative w-12 h-6 rounded-full 
         bg-success
         focus:ring-4 focus:ring-success/20 
         outline-none 
         transition-colors duration-300">
  <span class="absolute left-1 top-1/2 -translate-y-1/2 
               w-4 h-4 rounded-full bg-white 
               translate-x-6
               transition-transform duration-300"></span>
</button>
```

---

### 4.3 Cards & Containers

#### 4.3.1 Dashboard Card (Metric)

**Anatomy:**
```
┌──────────────────────────────────┐
│  Icon  KPI Title        +12% ↑   │  ← Header: 16px padding
├──────────────────────────────────┤
│                                  │
│       Metric Value / Chart       │  ← Content: 24px padding
│                                  │
└──────────────────────────────────┘
  ↑                              ↑
  Border: 1px gray-200    Border-radius: 12px
```

**Implementation:**
```html
<div class="bg-white rounded-xl border border-gray-200 
            p-6 
            hover:shadow-lg hover:-translate-y-1 
            transition-all duration-300 
            cursor-pointer">
  <!-- Header -->
  <div class="flex justify-between items-center mb-4">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-brand-primary/10 
                  flex items-center justify-center text-brand-primary">
        <svg class="w-4 h-4" stroke="currentColor" stroke-width="2">
          <!-- Icon -->
        </svg>
      </div>
      <h3 class="font-brand font-semibold text-brand-slate">
        Transformation Velocity
      </h3>
    </div>
    <span class="text-xs font-bold bg-brand-secondary/10 text-brand-secondary 
                 px-2 py-0.5 rounded">
      +12%
    </span>
  </div>
  
  <!-- Content -->
  <div class="text-3xl font-bold text-brand-primary mb-2">
    98%
  </div>
  <p class="text-sm text-gray-500">
    Digital mapping completion
  </p>
  
  <!-- Progress Bar -->
  <div class="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
    <div class="bg-brand-primary h-full rounded-full" style="width: 98%"></div>
  </div>
</div>
```

#### 4.3.2 AI Insight Card (Special)

```html
<div class="bg-gradient-to-br from-white to-gray-50 
            rounded-xl 
            border-l-4 border-brand-secondary 
            p-6 
            shadow-sm hover:shadow-md 
            transition-shadow duration-300">
  <!-- Icon Badge -->
  <div class="flex items-center gap-2 mb-4">
    <div class="w-8 h-8 rounded-full bg-brand-secondary/20 
                flex items-center justify-center">
      <svg class="w-4 h-4 text-brand-secondary animate-pulse" 
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
      </svg>
    </div>
    <span class="text-xs font-bold text-brand-secondary uppercase tracking-wide">
      AI Insight
    </span>
  </div>
  
  <!-- Content -->
  <h4 class="font-brand font-semibold text-brand-slate mb-2">
    Clean Core Opportunity Detected
  </h4>
  <p class="text-sm text-gray-600 leading-relaxed">
    3 custom objects can be replaced with standard SAP Fiori apps, 
    reducing maintenance by 40%.
  </p>
  
  <!-- CTA -->
  <button class="mt-4 text-sm font-medium text-brand-secondary 
                 hover:text-brand-primary transition-colors">
    View Recommendations →
  </button>
</div>
```

#### 4.3.3 Content Panel (Settings/Forms)

```html
<div class="bg-white rounded-xl border-0 overflow-hidden">
  <!-- Section 1 -->
  <div class="p-6">
    <h3 class="font-brand font-semibold text-xl text-brand-primary mb-4">
      General Settings
    </h3>
    <!-- Form fields -->
  </div>
  
  <!-- Divider -->
  <div class="h-px bg-gray-100"></div>
  
  <!-- Section 2 -->
  <div class="p-6">
    <h3 class="font-brand font-semibold text-xl text-brand-primary mb-4">
      Notifications
    </h3>
    <!-- Form fields -->
  </div>
</div>
```

---

### 4.4 Navigation

#### 4.4.1 Top Navigation Bar

```html
<nav class="fixed w-full bg-white/90 backdrop-blur-md 
            border-b border-gray-200 
            z-50">
  <!-- Brand Gradient Line -->
  <div class="h-px w-full bg-gradient-to-r 
              from-brand-secondary/30 via-brand-secondary to-brand-secondary/30">
  </div>
  
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="logo.png" alt="KTern Logo" class="w-8 h-8">
        <span class="font-brand font-bold text-lg">
          KTern.<span class="text-brand-secondary">AI</span>
        </span>
      </div>
      
      <!-- Nav Links -->
      <div class="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
        <a href="#" class="hover:text-brand-primary transition-colors">
          Dashboard
        </a>
        <a href="#" class="hover:text-brand-primary transition-colors">
          Projects
        </a>
        <a href="#" class="hover:text-brand-primary transition-colors">
          Analytics
        </a>
      </div>
      
      <!-- CTA -->
      <button class="bg-brand-primary text-white px-4 py-2 rounded-md 
                     text-sm font-medium 
                     hover:opacity-90 transition-opacity">
        New Project
      </button>
    </div>
  </div>
</nav>
```

#### 4.4.2 Sidebar Navigation

```html
<aside class="w-64 bg-white border-r border-gray-200 
              fixed left-0 top-16 bottom-0 
              overflow-y-auto">
  <nav class="p-4 space-y-1">
    <!-- Active Link -->
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md 
                       bg-brand-primary/10 text-brand-primary 
                       font-medium text-sm">
      <svg class="w-5 h-5" stroke="currentColor" stroke-width="2">
        <!-- Icon -->
      </svg>
      Dashboard
    </a>
    
    <!-- Default Link -->
    <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md 
                       text-gray-600 hover:bg-gray-50 hover:text-brand-primary 
                       font-medium text-sm 
                       transition-colors duration-200">
      <svg class="w-5 h-5" stroke="currentColor" stroke-width="2">
        <!-- Icon -->
      </svg>
      Projects
    </a>
  </nav>
</aside>
```

---

### 4.5 Feedback Components

#### 4.5.1 Alert / Toast

**Success Alert**
```html
<div class="bg-success/10 border border-success rounded-xl p-4 
            flex items-start gap-3">
  <svg class="w-5 h-5 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <div class="flex-1">
    <h5 class="font-brand font-semibold text-success mb-1">
      Migration Plan Created
    </h5>
    <p class="text-sm text-gray-600">
      Your S/4HANA migration roadmap is ready for review.
    </p>
  </div>
  <button class="text-gray-400 hover:text-gray-600">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>
```

**Error Alert**
```html
<div class="bg-danger/10 border border-danger rounded-xl p-4 
            flex items-start gap-3">
  <svg class="w-5 h-5 text-danger mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
  <div class="flex-1">
    <h5 class="font-brand font-semibold text-danger mb-1">
      Connection Failed
    </h5>
    <p class="text-sm text-gray-600">
      Unable to connect to SAP system. Please check credentials.
    </p>
  </div>
</div>
```

#### 4.5.2 Loading Spinner

```html
<!-- Standard Spinner -->
<div class="w-8 h-8 border-4 border-gray-200 border-t-brand-primary 
            rounded-full animate-spin">
</div>

<!-- With Text -->
<div class="flex items-center gap-3">
  <div class="w-5 h-5 border-2 border-brand-secondary/20 border-t-brand-secondary 
              rounded-full animate-spin">
  </div>
  <span class="text-sm text-gray-600">Analyzing system...</span>
</div>
```

#### 4.5.3 Progress Bar

```html
<div class="space-y-2">
  <div class="flex justify-between text-sm">
    <span class="font-medium text-gray-700">Migration Progress</span>
    <span class="text-brand-primary font-semibold">65%</span>
  </div>
  <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
    <div class="bg-gradient-to-r from-brand-primary to-brand-secondary 
                h-full rounded-full 
                transition-all duration-500" 
         style="width: 65%">
    </div>
  </div>
</div>
```

#### 4.5.4 Modal Dialog

```html
<!-- Overlay -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 
            flex items-center justify-center p-4">
  
  <!-- Modal -->
  <div class="bg-white rounded-2xl shadow-2xl 
              max-w-md w-full 
              animate-fade-in-up">
    <!-- Header -->
    <div class="p-6 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <h3 class="font-brand text-xl font-bold text-brand-primary">
          Confirm Action
        </h3>
        <button class="text-gray-400 hover:text-gray-600">
          <svg class="w-5 h-5" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Body -->
    <div class="p-6">
      <p class="text-gray-600 leading-relaxed">
        Are you sure you want to delete this project? 
        This action cannot be undone.
      </p>
    </div>
    
    <!-- Footer -->
    <div class="p-6 border-t border-gray-100 flex justify-end gap-3">
      <button class="px-4 py-2 rounded-md 
                     bg-white border border-gray-200 
                     text-gray-700 font-medium 
                     hover:bg-gray-50">
        Cancel
      </button>
      <button class="px-4 py-2 rounded-md 
                     bg-danger text-white font-medium 
                     hover:opacity-90">
        Delete
      </button>
    </div>
  </div>
</div>

<style>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 300ms ease-out;
}
</style>
```

---

## 5. Patterns & Best Practices

### 5.1 Layout Patterns

#### 5.1.1 Dashboard Grid Layout

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Metric cards span 1 column each -->
  <div class="bg-white rounded-xl...">KPI Card</div>
  <div class="bg-white rounded-xl...">KPI Card</div>
  <div class="bg-white rounded-xl...">KPI Card</div>
  
  <!-- Chart spans 2 columns -->
  <div class="lg:col-span-2 bg-white rounded-xl...">Chart</div>
  
  <!-- Table spans full width -->
  <div class="lg:col-span-3 bg-white rounded-xl...">Data Table</div>
</div>
```

#### 5.1.2 Form Layout

```html
<form class="max-w-2xl mx-auto space-y-6">
  <!-- Single column for most fields -->
  <div class="space-y-4">
    <div><!-- Input field --></div>
    <div><!-- Input field --></div>
  </div>
  
  <!-- Two-column for related fields -->
  <div class="grid grid-cols-2 gap-4">
    <div><!-- Input field --></div>
    <div><!-- Input field --></div>
  </div>
  
  <!-- Actions right-aligned -->
  <div class="flex justify-end gap-3 pt-6 border-t border-gray-100">
    <button>Cancel</button>
    <button>Save</button>
  </div>
</form>
```

### 5.2 Interaction Patterns

#### 5.2.1 The "Spark" Interaction (AI Feature)

**User Flow:**
1. User clicks "Analyze with AI" button (Orange)
2. Button creates small ripple effect
3. Thin gradient bar (Maroon → Orange) loads across container top
4. Content fades in (opacity 0 → 100) with slight upward slide

```css
/* Loading bar animation */
@keyframes gradient-slide {
  0% { width: 0%; }
  100% { width: 100%; }
}

.ai-loading-bar {
  height: 2px;
  background: linear-gradient(90deg, #a9203e 0%, #ff8f00 100%);
  animation: gradient-slide 2s ease-out;
}

/* Content fade-in */
@keyframes fade-slide-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### 5.2.2 Card Hover Behavior

```css
.dashboard-card {
  transition: all 300ms cubic-bezier(0.2, 0, 0.38, 0.9);
}

.dashboard-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 
              0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-color: rgba(169, 32, 62, 0.2);
}
```

### 5.3 Data Visualization

#### 5.3.1 Chart Color Palette

**Categorical Data (Use in order):**
1. Deep Wine Maroon: `#a9203e` (Primary KPI)
2. Aurora Blue: `#4166f5` (Secondary KPI)
3. Emerald Teal: `#3cd070` (Success Metrics)
4. Arctic Amber: `#ff8f00` (Growth/Trends)
5. Aurora Blue: `#4166f5` (Forecasts)
6. Honey Gold: `#fada5e` (Insights/Warnings)

**Sequential Data:**
```css
/* Light to Dark Maroon */
--chart-seq-1: #f6e6e3;
--chart-seq-2: #f3b0aa;
--chart-seq-3: #c41e3a;
--chart-seq-4: #a9203e;
--chart-seq-5: #651426;
```

#### 5.3.2 Chart Implementation Example

```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

<LineChart width={600} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
  <XAxis 
    dataKey="month" 
    stroke="#666563"
    style={{ fontSize: '12px', fontFamily: 'Geist' }}
  />
  <YAxis 
    stroke="#666563"
    style={{ fontSize: '12px', fontFamily: 'Geist' }}
  />
  <Tooltip 
    contentStyle={{
      backgroundColor: 'white',
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      fontFamily: 'Geist'
    }}
  />
  <Line 
    type="monotone" 
    dataKey="velocity" 
    stroke="#a9203e" 
    strokeWidth={2}
    dot={{ fill: '#a9203e', r: 4 }}
    activeDot={{ r: 6 }}
  />
  <Line 
    type="monotone" 
    dataKey="target" 
    stroke="#4166f5" 
    strokeWidth={2}
    strokeDasharray="5 5"
  />
</LineChart>
```

---

## 6. Accessibility

### 6.1 WCAG Compliance

**Target Level:** WCAG 2.1 AA

#### 6.1.1 Color Contrast Requirements

| Element Type | Minimum Ratio | KTern Implementation |
|-------------|---------------|---------------------|
| Normal text (<18px) | 4.5:1 | `text-foreground` on `bg-background` = 16.2:1 |
| Large text (≥18px) | 3:1 | All headings meet standard ✅ |
| UI Components | 3:1 | Button borders, form inputs meet standard ✅ |
| Graphical Objects | 3:1 | Icons, chart elements meet standard ✅ |

**Testing Tools:**
- WebAIM Contrast Checker
- axe DevTools
- Chrome Lighthouse

#### 6.1.2 Focus Indicators

**All interactive elements MUST have visible focus states:**

```css
/* Standard focus ring */
.focusable:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(169, 32, 62, 0.2);
  border-color: #a9203e;
}

/* High contrast focus for dark mode */
.dark .focusable:focus {
  box-shadow: 0 0 0 4px rgba(255, 143, 0, 0.3);
  border-color: #ff8f00;
}
```

**Focus Order:**
1. Skip to main content link
2. Primary navigation
3. Page content (logical reading order)
4. Secondary navigation / sidebar
5. Footer

#### 6.1.3 Text Alternatives

**Images:**
```html
<!-- Decorative -->
<img src="pattern.svg" alt="" role="presentation" />

<!-- Informative -->
<img src="chart.png" alt="Bar chart showing 65% migration completion" />

<!-- Functional (icon button) -->
<button aria-label="Close dialog">
  <svg aria-hidden="true"><!-- X icon --></svg>
</button>
```

**Icons:**
```html
<!-- With adjacent text -->
<button>
  <svg aria-hidden="true" class="w-4 h-4"><!-- Icon --></svg>
  Save Changes
</button>

<!-- Icon-only -->
<button aria-label="Search">
  <svg aria-hidden="true" class="w-5 h-5"><!-- Search icon --></svg>
</button>
```

### 6.2 Keyboard Navigation

#### 6.2.1 Interactive Element Shortcuts

| Element | Key | Action |
|---------|-----|--------|
| Button/Link | `Enter` or `Space` | Activate |
| Checkbox | `Space` | Toggle |
| Radio | `Arrow keys` | Navigate group |
| Select | `Arrow keys` | Navigate options |
| Tab | `Tab` | Move forward |
| Tab | `Shift + Tab` | Move backward |
| Modal | `Esc` | Close |

#### 6.2.2 Skip Navigation

```html
<a href="#main-content" 
   class="sr-only focus:not-sr-only 
          focus:absolute focus:top-4 focus:left-4 
          bg-brand-primary text-white px-4 py-2 rounded-md 
          z-50">
  Skip to main content
</a>

<main id="main-content" tabindex="-1">
  <!-- Page content -->
</main>
```

#### 6.2.3 Modal Focus Trap

```javascript
// Focus trap implementation
const modal = document.querySelector('[role="dialog"]');
const focusableElements = modal.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  }
  
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Focus first element when modal opens
firstElement.focus();
```

### 6.3 Screen Readers

#### 6.3.1 ARIA Landmarks

```html
<body>
  <header role="banner">
    <nav role="navigation" aria-label="Primary navigation">
      <!-- Nav links -->
    </nav>
  </header>
  
  <main role="main" id="main-content">
    <section aria-labelledby="dashboard-heading">
      <h1 id="dashboard-heading">Dashboard</h1>
      <!-- Content -->
    </section>
  </main>
  
  <aside role="complementary" aria-label="Related information">
    <!-- Sidebar -->
  </aside>
  
  <footer role="contentinfo">
    <!-- Footer -->
  </footer>
</body>
```

#### 6.3.2 Live Regions

**Toast Notifications:**
```html
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  class="fixed bottom-4 right-4 z-50">
  <!-- Toast content announced when appears -->
  <div class="bg-success/10 border border-success rounded-xl p-4">
    Project saved successfully
  </div>
</div>
```

**Loading States:**
```html
<div 
  role="status" 
  aria-live="polite" 
  aria-busy="true">
  <span class="sr-only">Loading migration data...</span>
  <div class="spinner" aria-hidden="true"></div>
</div>
```

#### 6.3.3 Form Validation

```html
<div>
  <label for="email" class="text-sm font-medium">Email</label>
  <input 
    id="email"
    type="email"
    aria-required="true"
    aria-invalid="true"
    aria-describedby="email-error"
    class="border-danger..."
  />
  <span id="email-error" role="alert" class="text-danger text-xs">
    Please enter a valid email address
  </span>
</div>
```

#### 6.3.4 Screen Reader Only Utility

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## 7. Implementation Guide

### 7.1 Getting Started

#### 7.1.1 Installation

**Using CDN (Quick Start):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KTern Application</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Manrope:wght@400;600;700&family=IBM+Plex+Serif:wght@400;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              primary: '#a9203e',
              secondary: '#ff8f00',
            },
            // ... (see section 7.1.2)
          },
          fontFamily: {
            sans: ['Geist', 'sans-serif'],
            brand: ['Manrope', 'sans-serif'],
            serif: ['IBM Plex Serif', 'serif'],
            mono: ['JetBrains Mono', 'monospace'],
          }
        }
      }
    }
  </script>
  
  <!-- Custom Styles -->
  <style>
    body { font-family: 'Geist', sans-serif; }
  </style>
</head>
<body class="bg-gray-50 dark:bg-[#100c08] text-slate-800 dark:text-[#f5f5f5]">
  <!-- Your content -->
</body>
</html>
```

#### 7.1.2 Tailwind Configuration (Full)

**tailwind.config.js:**
```javascript
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#a9203e',
          secondary: '#ff8f00',
          slate: '#475569',
        },
        background: {
          light: '#f8f8ff',
          dark: '#100c08',
        },
        surface: {
          light: '#ffffff',
          dark: '#1c1917',
        },
        text: {
          main: {
            light: '#100c08',
            dark: '#f5f5f5',
          },
          muted: {
            light: '#666563',
            dark: '#a8a29e',
          },
        },
        border: {
          light: '#e5e5e5',
          dark: '#44403c',
        },
        success: '#3cd070',
        warning: '#fada5e',
        danger: '#c41e3a',
        info: '#4166f5',
        
        // Extended Maroon palette
        maroon: {
          950: '#320a14',
          900: '#430d1a',
          700: '#651426',
          600: '#76172c',
          500: '#a9203e',
          400: '#c41e3a',
          100: '#f3b0aa',
          50: '#f6e6e3',
        },
        
        // Extended Orange palette
        orange: {
          900: '#b36500',
          700: '#e68200',
          600: '#ff8f00',
          400: '#ffc266',
          100: '#fff2e5',
        },
        
        // Gray scale
        gray: {
          950: '#100c08',
          900: '#27221f',
          800: '#3d3835',
          600: '#666563',
          400: '#9fa0a1',
          200: '#cbc6c3',
          50: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        brand: ['Manrope', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        viz: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 8px 16px -4px rgba(169, 32, 62, 0.2)',
        'secondary': '0 8px 16px -4px rgba(255, 143, 0, 0.2)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
```

### 7.2 Framework Integration

#### 7.2.1 React Component Example

**Button Component:**
```tsx
// components/Button.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-brand font-semibold transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-maroon-600 focus:ring-brand-primary/50 shadow-lg shadow-primary',
        secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200',
        ghost: 'bg-transparent text-brand-primary hover:bg-brand-primary/5 focus:ring-brand-primary/20',
        destructive: 'bg-white text-danger border border-danger hover:bg-danger hover:text-white focus:ring-danger/20',
        energy: 'bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-secondary text-white hover:opacity-90 focus:ring-brand-secondary/50 shadow-lg shadow-secondary',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        default: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

**Usage:**
```tsx
import { Button } from '@/components/Button';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="space-x-4">
      <Button variant="primary">Save Changes</Button>
      
      <Button variant="energy">
        <Sparkles className="w-4 h-4" />
        Generate Insights
      </Button>
      
      <Button variant="ghost">View Details →</Button>
      
      <Button variant="destructive">Delete Project</Button>
      
      <Button variant="primary" isLoading>
        Processing...
      </Button>
    </div>
  );
}
```

#### 7.2.2 Angular Component Example

**button.component.ts:**
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'energy';
type ButtonSize = 'sm' | 'default' | 'lg';

@Component({
  selector: 'ktern-button',
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || isLoading"
      (click)="onClick.emit($event)"
    >
      <div
        *ngIf="isLoading"
        class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"
      ></div>
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'default';
  @Input() disabled = false;
  @Input() isLoading = false;
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md font-brand font-semibold transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-brand-primary text-white hover:bg-maroon-600 focus:ring-brand-primary/50 shadow-lg shadow-primary',
      secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200',
      ghost: 'bg-transparent text-brand-primary hover:bg-brand-primary/5 focus:ring-brand-primary/20',
      destructive: 'bg-white text-danger border border-danger hover:bg-danger hover:text-white focus:ring-danger/20',
      energy: 'bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-secondary text-white hover:opacity-90 focus:ring-brand-secondary/50 shadow-lg shadow-secondary',
    };
    
    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      default: 'h-10 px-4 text-base',
      lg: 'h-12 px-5 text-lg',
    };
    
    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]}`;
  }
}
```

### 7.3 Dark Mode Implementation

#### 7.3.1 Setup

**HTML Setup:**
```html
<!DOCTYPE html>
<html lang="en" class="light">
<head>
  <!-- ... -->
  <script>
    // Check for saved theme or default to 'light'
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(theme);
  </script>
</head>
<body>
  <!-- ... -->
</body>
</html>
```

#### 7.3.2 Toggle Implementation

**Vanilla JavaScript:**
```javascript
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function toggleTheme() {
  const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.classList.remove(currentTheme);
  htmlElement.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}

themeToggle.addEventListener('click', toggleTheme);
```

**React Hook:**
```tsx
import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}

// Usage
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-brand-secondary/10 transition-all"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
```

#### 7.3.3 CSS Variables Approach

**styles.css:**
```css
:root {
  --color-background: #f8f8ff;
  --color-surface: #ffffff;
  --color-text-main: #100c08;
  --color-text-muted: #666563;
  --color-border: #e5e5e5;
}

.dark {
  --color-background: #100c08;
  --color-surface: #1c1917;
  --color-text-main: #f5f5f5;
  --color-text-muted: #a8a29e;
  --color-border: #44403c;
}

body {
  background-color: var(--color-background);
  color: var(--color-text-main);
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}
```

---

## Appendix

### A. Design Tokens JSON

```json
{
  "colors": {
    "brand": {
      "primary": {
        "light": "#a9203e",
        "dark": "#c41e3a"
      },
      "secondary": {
        "light": "#ff8f00",
        "dark": "#ffae42"
      }
    },
    "semantic": {
      "success": "#3cd070",
      "warning": "#fada5e",
      "error": "#c41e3a",
      "info": "#4166f5"
    }
  },
  "typography": {
    "fontFamilies": {
      "ui": "Geist, sans-serif",
      "brand": "Manrope, sans-serif",
      "serif": "IBM Plex Serif, serif",
      "mono": "JetBrains Mono, monospace"
    },
    "scale": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem"
    }
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "12": "3rem",
    "16": "4rem"
  },
  "borderRadius": {
    "sm": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "full": "9999px"
  },
  "motion": {
    "duration": {
      "fast": "200ms",
      "normal": "300ms",
      "slow": "400ms"
    },
    "easing": {
      "tern": "cubic-bezier(0.2, 0, 0.38, 0.9)",
      "inOut": "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }
}
```

### B. Quick Reference Checklist

**Before Shipping:**
- [ ] All text meets 4.5:1 contrast ratio
- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works without mouse
- [ ] Color is not sole indicator of information
- [ ] Alt text provided for images
- [ ] Forms have proper labels and error messages
- [ ] Tested in dark mode
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Page titles and headings are semantic
- [ ] Tables have proper headers

### C. Resources

**External Links:**
- [KTern.AI Website](https://ktern.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lucide Icons](https://lucide.dev)
<!-- 
**Internal Tools:**
- Figma Design Files: `figma.com/ktern-design-system`
- Component Storybook: `storybook.ktern.internal`
- Token Validator: `tokens.ktern.internal` -->

**Only Finalized until 2nd Section.**

---

**Document Maintained By:** KTern.AI Design Team  
**For Questions:** Moulikrishnan
**Last Edited:** 8 December 2025
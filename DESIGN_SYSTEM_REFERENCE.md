# CrowdFundIn Design System - Quick Reference 🎨

## Colors

### Primary (Indigo)
```css
--primary-50:  #eef2ff   /* Lightest - backgrounds */
--primary-100: #e0e7ff   /* Very light - hover states */
--primary-500: #6366f1   /* MAIN COLOR - buttons, links */
--primary-600: #4f46e5   /* Dark - hover */
--primary-900: #312e81   /* Darkest - text */
```

### Success (Green)
```css
--success-500: #22c55e   /* Active campaigns */
--success-600: #16a34a   /* Success states */
```

### Warning (Amber)
```css
--warning-500: #f59e0b   /* Pending states */
--warning-600: #d97706   /* Warning alerts */
```

### Error (Red)
```css
--error-500: #ef4444     /* Expired campaigns */
--error-600: #dc2626     /* Error states */
```

### Gray (Neutral)
```css
--gray-50:  #f9fafb      /* Page backgrounds */
--gray-100: #f3f4f6      /* Card backgrounds */
--gray-600: #4b5563      /* Secondary text */
--gray-900: #111827      /* Main text */
```

## Gradients

### Primary Gradient
```css
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
```
**Use for**: Buttons, headers, hero sections

### Card Gradient
```css
--gradient-card: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
```
**Use for**: Card backgrounds, panels

## Typography

### Font Sizes
```css
--font-size-xs:   0.75rem   /* 12px - badges, labels */
--font-size-sm:   0.875rem  /* 14px - body text */
--font-size-base: 1rem      /* 16px - default */
--font-size-lg:   1.125rem  /* 18px - large text */
--font-size-xl:   1.25rem   /* 20px - card titles */
--font-size-2xl:  1.5rem    /* 24px - section titles */
--font-size-3xl:  1.875rem  /* 30px - page titles */
--font-size-4xl:  2.25rem   /* 36px - hero text */
--font-size-5xl:  3rem      /* 48px - main headers */
```

### Font Weights
```css
400 - Normal (body text)
500 - Medium (emphasis)
600 - Semibold (labels, nav)
700 - Bold (headings)
800 - Extrabold (hero titles)
```

## Spacing

### Scale (4px base unit)
```css
--spacing-1:  0.25rem   /* 4px  - tight spacing */
--spacing-2:  0.5rem    /* 8px  - badges, small gaps */
--spacing-3:  0.75rem   /* 12px - buttons, inputs */
--spacing-4:  1rem      /* 16px - cards, sections */
--spacing-5:  1.25rem   /* 20px - large buttons */
--spacing-6:  1.5rem    /* 24px - card padding */
--spacing-8:  2rem      /* 32px - section spacing */
--spacing-10: 2.5rem    /* 40px - large sections */
--spacing-12: 3rem      /* 48px - hero spacing */
```

## Shadows

### Standard Shadows
```css
--shadow-sm:  Small shadow     /* Cards at rest */
--shadow-md:  Medium shadow    /* Default cards */
--shadow-lg:  Large shadow     /* Elevated cards */
--shadow-xl:  Extra large      /* Hover states */
--shadow-2xl: 2X large         /* Modals, dropdowns */
```

### Special Shadow
```css
--shadow-primary: Indigo glow  /* Primary buttons */
```

## Border Radius

```css
--radius-sm:   0.375rem  /* 6px  - small elements */
--radius-md:   0.5rem    /* 8px  - default */
--radius-lg:   0.75rem   /* 12px - buttons, inputs */
--radius-xl:   1rem      /* 16px - cards */
--radius-2xl:  1.5rem    /* 24px - large cards */
--radius-full: 9999px    /* Circles, pills */
```

## Common Patterns

### Glassmorphism Effect
```css
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(99, 102, 241, 0.1);
box-shadow: var(--shadow-2xl);
```

### Gradient Text
```css
background: var(--gradient-primary);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Hover Animation
```css
transition: all var(--transition-slow);
transform: translateY(-8px);
box-shadow: var(--shadow-xl);
```

### Card Style
```css
background: var(--gradient-card);
border-radius: var(--radius-2xl);
box-shadow: var(--shadow-md);
border: 1px solid var(--gray-200);
padding: var(--spacing-6);
```

### Button Primary
```css
background: var(--gradient-primary);
color: var(--white);
padding: var(--spacing-3) var(--spacing-6);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm);
font-weight: 600;
```

## Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

## Component Guidelines

### Buttons
- **Primary**: Gradient background, white text
- **Secondary**: Gray background, dark text
- **Outline**: Transparent, border, colored text
- **Size**: Large (--spacing-4 --spacing-8), Normal (--spacing-3 --spacing-6), Small (--spacing-2 --spacing-4)

### Cards
- **Background**: --gradient-card
- **Border**: --gray-200
- **Radius**: --radius-2xl
- **Shadow**: --shadow-md
- **Hover**: translateY(-4px) + --shadow-xl

### Forms
- **Label**: Uppercase, --font-size-sm, bold
- **Input**: --spacing-4 padding, --radius-lg
- **Focus**: --primary-500 border + --primary-100 shadow
- **Error**: --error-500 border + --error-50 background

### Navigation
- **Height**: 80px
- **Background**: Glassmorphism
- **Links**: Uppercase, --font-size-sm, bold
- **Active**: --primary-50 background, --primary-600 text

## Usage Examples

### Hero Section
```css
.hero {
  background: var(--gradient-primary);
  padding: var(--spacing-12);
  border-radius: var(--radius-2xl);
  color: var(--white);
  box-shadow: var(--shadow-primary);
}
```

### Stat Card
```css
.stat-card {
  background: var(--gradient-card);
  padding: var(--spacing-8) var(--spacing-6);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-slow);
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}
```

### Badge
```css
.badge {
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
}

.badge-success {
  background: var(--success-100);
  color: var(--success-700);
}
```

## Quick Tips

### ✅ Do
- Use CSS variables for all values
- Apply consistent spacing (multiples of 4)
- Add smooth transitions
- Use gradients for depth
- Apply hover effects
- Maintain contrast ratios

### ❌ Don't
- Hardcode colors or sizes
- Mix spacing units
- Skip hover states
- Use too many shadows
- Ignore mobile design
- Forget accessibility

## Accessibility

### Contrast Ratios
- **Normal text**: 4.5:1 minimum
- **Large text**: 3:1 minimum
- **Primary buttons**: White on indigo (excellent contrast)

### Focus States
- Always visible
- High contrast outline
- Clear indicator

### Touch Targets
- Minimum 44px × 44px
- Adequate spacing between elements

---

**Quick Reference**: Save this for easy access when styling new components!
**Full Documentation**: See UI_MODERNIZATION_GUIDE.md for detailed examples

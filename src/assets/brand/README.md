# Simply Smart Solution - Brand Assets

## Master Logo Files

### Primary Logo
**File**: `logo.svg`
**Location**: `src/assets/brand/logo.svg`
**Purpose**: Official brand logo used throughout the website
**Aspect Ratio**: 256 × 256 (viewBox)
**Usage**: Header, Footer, Admin Login, All branded areas

**DO NOT MODIFY** - This is the master brand artwork.

### Favicon
**File**: `favicon.svg`
**Location**: `src/assets/brand/favicon.svg`
**Purpose**: Website favicon (browser tab icon)
**Aspect Ratio**: 192 × 192 (viewBox)
**Usage**: Browser tab, bookmarks, favicons
**Note**: Separate from main logo to ensure optimal favicon rendering

---

## Color Palette

The official Simply Smart Solution color scheme:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dark Navy | `#001D3D` | Primary brackets, background elements |
| Medium Blue | `#0066B2` | Inner layers, secondary elements |
| Light Blue | `#1FA8DE` | Accents, icons, stars, interactive elements |

---

## Integration Points

All logo usage throughout the website references the centralized master logo:

### Components Using `logo.svg`

1. **Header.tsx**
   - Located in navbar
   - Uses `BrandLogo` component with `size="medium"`
   - Clickable link to homepage

2. **AdminLogin.tsx**
   - Admin panel login page
   - Uses `BrandLogo` component with `size="large"`

3. **Footer.tsx**
   - Footer branding section
   - Uses `BrandLogo` component with `size="medium"`

### Favicon Usage

- **index.html**
  - Meta tag: `<link rel="icon" type="image/svg+xml" href="/src/assets/brand/favicon.svg" />`
  - Browser tab display

---

## Component Reference

### BrandLogo Component
**File**: `src/components/BrandLogo.tsx`

```typescript
interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large' | 'auto';
  className?: string;
  alt?: string;
  onClick?: () => void;
  href?: string;
}
```

**Usage**:
```jsx
// Simple display
<BrandLogo size="large" />

// As a link
<BrandLogo size="medium" href="#" />

// With click handler
<BrandLogo size="small" onClick={handleClick} />
```

---

## Future Logo Replacement

To replace the official logo with a new version:

1. **Create new `logo.svg`** in `src/assets/brand/`
   - Keep the filename exactly the same
   - Maintain the SVG format

2. **Optionally update `favicon.svg`** if needed
   - Keep the filename exactly the same

3. **Rebuild the application**:
   ```bash
   npm run dev
   ```

4. **Result**: The new logo automatically appears everywhere
   - No component changes needed
   - No manual updates required
   - Centralized asset system handles everything

---

## Import Paths

When importing the logo in React components:

```typescript
// Direct import (recommended for static paths)
import logo from '../assets/brand/logo.svg';

// Using the BrandLogo component (recommended)
import { BrandLogo } from './BrandLogo';
```

---

## Specifications

### Master Logo (`logo.svg`)
- Format: SVG (Scalable Vector Graphics)
- Viewbox: 0 0 256 256
- Colors: 3 (Navy, Medium Blue, Light Blue)
- Elements: Curved brackets, stars, phone icon, wrench tool
- Status: **MASTER ARTWORK - DO NOT MODIFY**

### Favicon (`favicon.svg`)
- Format: SVG (Scalable Vector Graphics)
- Viewbox: 0 0 192 192
- Colors: 3 (Navy, Medium Blue, Light Blue)
- Elements: Symbol-only version from main logo
- Status: **SEPARATE ASSET - DO NOT MODIFY**

---

## Design System

The logo follows the official Simply Smart Solution design system:

- **Brand Name**: Simply Smart Solution
- **Tagline**: Global Digital Growth
- **Core Concept**: Curved brackets with tech elements (phone, wrench, stars)
- **Style**: Modern, tech-forward, professional
- **Accessibility**: High contrast, clear symbol, readable at all sizes

---

## Additional Notes

- All logo files are version-controlled in Git
- Keep the original SVG files unmodified
- Use CSS only for sizing/display changes
- Never rasterize or convert to PNG/JPG
- The centralized system ensures consistent branding
- One logo update = automatic website-wide update

---

**Last Updated**: September 21, 2026
**Project**: Simply Smart Solution
**Architecture**: React + TypeScript + Vite

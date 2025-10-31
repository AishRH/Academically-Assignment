## Academically Assignment - React App

### 1) Tech stack
- **Build tool**: Vite
- **Framework**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Linting/Formatting**: ESLint (project config), PostCSS

### 2) Project setup
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

### 3) Component structure
- **Entry**: `src/main.jsx`, `src/App.jsx`
- **Main section**: `src/Home.jsx`
  - Renders a sticky, layered card layout with a right-side content area.
  - Composes reusable UI pieces and orchestrates animations.
- **Reusable components**: `src/Components/`
  - `OuterCard.jsx`: Card shell used by all layered cards
  - `RightSection/`
    - `CardOne.jsx`, `CardTwo.jsx`, `CardThree.jsx`: Right-side content per layer
  - `ProfileBadge.jsx`: Profile/identity badge displayed on the final layer
  - `HeaderText.jsx`: Heading and descriptive text block
- **Custom hooks**: `src/hooks/`
  - `useScrollAnimation.js`: Produces scroll progress and derived transforms
  - `useResponsiveValue.js`: Returns values based on current viewport width breakpoints

### 4) Responsiveness and animations
- **Responsiveness**
  - Tailwind responsive utilities (e.g., `sm:`, `md:`, `lg:`) scale widths and layout per breakpoint.
  - `useResponsiveValue` provides breakpoint-aware numeric factors (e.g., spacing offsets) used by `Home.jsx` to compute pixel values based on viewport dimensions.
  - Viewport height is tracked to keep vertical spacing proportional across screen sizes.

- **Animations**
  - Framer Motion’s `useScroll` + `useTransform` drive card translations and scaling as you scroll within a sticky container.
  - Each layered card scales and moves upward at different rates, creating a subtle 3D depth effect. The container uses `transform-gpu` and `transformStyle: "preserve-3d"` for smoother transforms.
  - Secondary elements (badge and header text) animate vertically into place as the final card comes into view.


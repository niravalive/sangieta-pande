# AGENTS.md

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style Guidelines

### Imports & Structure
- Use ES6 imports/exports
- Import React dependencies first, then third-party, then local components
- Use relative imports for local files (`../components/Hero`)
- Import assets directly in components

### Components
- Use default export for components: `export default function ComponentName()`
- Use PascalCase for component names
- Use descriptive prop names
- Keep components focused on single responsibility

### Styling
- Use Tailwind CSS classes for styling
- Custom colors defined in index.css: creme, bone, oak, clay
- Use CSS-in-JS with styled-jsx for component-specific animations
- Font family: Poppins (defined in CSS variables)

### Naming Conventions
- Components: PascalCase (Hero, NavBar)
- Files: PascalCase for components (Hero.jsx)
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE for exports (SERVICES_TITLE)
- CSS classes: kebab-case

### Error Handling
- No specific error handling patterns found
- Follow React best practices for error boundaries if needed

### TypeScript
- Project uses JavaScript with JSX
- No TypeScript configuration present

### ESLint Rules
- No unused vars allowed (except uppercase pattern)
- React Hooks and Refresh plugins enabled
- ES2020+ syntax supported
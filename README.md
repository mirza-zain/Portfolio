# Mirza Zain Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

This project highlights skills, education, projects, and contact details in a responsive, modern single-page layout with dark mode support.

## Highlights

- Built with Next.js App Router
- TypeScript + Tailwind CSS styling
- Responsive layout for desktop and mobile
- Dark/light theme toggle using `next-themes`
- Lottie animation integration
- Dedicated sections for:
  - Hero / Introduction
  - Skills
  - Education
  - Projects
  - Contact

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Lottie React
- next-themes

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    providers.tsx
    {Components}/
      Navbar.tsx
      Footer.tsx
      ThemeSwitch.tsx
    skills/page.tsx
    education/page.tsx
    projects/page.tsx
    contact/page.tsx
    animations/
      *.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start local dev server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Customization

- Edit homepage and section composition in `src/app/page.tsx`
- Update personal/project details in:
  - `src/app/skills/page.tsx`
  - `src/app/education/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/contact/page.tsx`
- Update theme/global styles in `src/app/globals.css`
- Replace static assets in `public/`

## Deployment

You can deploy this project on Vercel (recommended for Next.js):

1. Push your repository to GitHub
2. Import the repository into Vercel
3. Deploy with default Next.js settings

## License

This project is for personal portfolio use.

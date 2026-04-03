# Sweet Crumbs Bakery - Next.js Version

A modern, responsive bakery website built with Next.js 14, TypeScript, and optimized images.

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Optimized images with Next.js Image component
- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ Shopping cart with localStorage persistence
- ✅ Product filtering by category
- ✅ Smooth scrolling navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Global CSS (bakery theme)
- **Image Optimization**: Next.js Image component
- **Icons**: Font Awesome 6
- **State Management**: React hooks (useState, useEffect)
- **Persistence**: LocalStorage for cart

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
bakery-next/
├── app/
│   ├── layout.tsx      # Root layout with metadata and CSS
│   └── page.tsx        # Main page component
├── components/
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── ThemeToggle.tsx # Dark/light mode toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Menu.tsx        # Menu with category filtering
│   ├── MenuCard.tsx    # Individual product card
│   ├── Offers.tsx      # Special offers section
│   ├── OfferCard.tsx   # Offer card component
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── CartSidebar.tsx # Shopping cart drawer
├── lib/
│   ├── cart.ts         # Cart utility functions
│   ├── useCart.ts      # Cart React hook
│   └── menuData.ts     # Menu items data
├── types/
│   └── index.ts        # TypeScript interfaces
├── styles/
│   └── globals.css     # Global styles (bakery theme)
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## Color Theme (Bakery)

- **Background**: Cream (#FFF3E6)
- **Text**: Chocolate Brown (#6B3E26)
- **Primary Buttons**: Light Pink (#F7B5B5) with chocolate text
- **Secondary**: Warm Brown (#A67B5B)
- **Accent**: Beige (#E8D5C4)

## Customization

### Updating Menu Items

Edit `lib/menuData.ts` to add, remove, or modify products.

### Changing Theme Colors

Update CSS variables in `styles/globals.css`:

```css
:root {
  --primary: #F7B5B5;    /* Buttons */
  --text: #6B3E26;       /* Headings & text */
  --bg: #FFF3E6;         /* Background */
  /* ... */
}
```

## Key Features Explained

### Cart System

- Cart state managed with React hook (`useCart`)
- Persists to localStorage automatically
- Add/remove items, update quantities
- Real-time cart count and total

### Image Optimization

All images use Next.js `Image` component with:
- Automatic lazy loading
- Responsive sizing
- WebP support
- Optimized from Unsplash

### Dark Mode

- Toggle via moon/sun icon
- Persists preference in localStorage
- Respects system preference on first load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. Images are from Unsplash (free to use).

---

Built with ❤️ using Next.js

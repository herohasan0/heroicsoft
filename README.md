# Portfolio

A modern portfolio website built with React, React Router, and Vite.

## Features

- 🌍 Multi-language support (English, Turkish, Spanish)
- 🌓 Dark mode support
- 📱 Responsive design
- ⚡ Fast and optimized with Vite
- 🎨 Modern UI with Tailwind CSS and Framer Motion

## Tech Stack

- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **next-themes** - Theme management
- **Resend** - Email sending service

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components
├── i18n/           # Internationalization setup
├── globals.css     # Global styles
├── App.tsx         # Main app component with routing
└── main.tsx        # Entry point

public/             # Static assets
messages/           # Translation files (JSON)
```

## Routing

The app uses React Router with locale-based routing:
- `/` - Redirects to default locale
- `/:locale` - Home page for locale
- `/:locale/about` - About page
- `/:locale/contact` - Contact page
- `/:locale/services` - Services page
- `/:locale/privacy` - Privacy policy
- `/:locale/terms` - Terms of service

Supported locales: `en`, `tr`, `es`

## Internationalization

Translations are stored in JSON files in the `messages/` directory. The i18n system automatically loads the correct translations based on the current locale.

## Contact Form

The contact form uses **Resend** via a backend Express API server (required to avoid CORS issues).

### Setup

1. Get your Resend API key from [Resend](https://resend.com/api-keys)
2. Create a `.env` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   RESEND_FROM_EMAIL=Contact Form <onboarding@resend.dev>
   RESEND_TO_EMAIL=your-email@example.com
   PORT=3001
   ```

### Running the App

Run both frontend and backend:
```bash
npm run dev
```

This starts:
- Frontend: http://localhost:5173 (Vite)
- Backend API: http://localhost:3001 (Express)

The Vite dev server automatically proxies `/api` requests to the backend server.

## License

Private project - All rights reserved

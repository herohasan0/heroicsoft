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

The contact form uses **EmailJS** for sending emails directly from the browser (no backend needed).

### Setup

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Running the App

Simply run:
```bash
npm run dev
```

No backend needed! EmailJS handles everything client-side.

## License

Private project - All rights reserved

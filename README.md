# Mongolian Traditional Dancers

A modern web application showcasing the rich cultural heritage of Mongolian traditional dance through an elegant and immersive digital experience.

## Features

- **Responsive Design**: Beautiful, mobile-first design that works across all devices
- **Bilingual Support**: Full English and Mongolian language support
- **Interactive Hero Carousel**: Showcase performances with video integration
- **Dance Styles Gallery**: Explore traditional Mongolian dance forms
- **Performance Schedule**: Upcoming shows and ticket information
- **Cultural Heritage**: Learn about the history and significance of Mongolian dance

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display & Crimson Text

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── performances/      # Performance schedule
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   ├── hero-carousel.tsx  # Hero section carousel
│   └── ...                # Other components
├── contexts/              # React contexts
│   ├── language-context.tsx
│   └── theme-context.tsx
├── data/                  # Static data and content
│   ├── hero.ts           # Hero carousel data
│   ├── performances.ts   # Performance information
│   └── about-images.ts   # About page images
└── lib/                   # Utility functions
    └── utils.ts
```

## Cultural Significance

This project celebrates the rich tradition of Mongolian dance, which includes:

- **Bielgee**: Traditional folk dance with graceful arm movements
- **Tsam Dance**: Sacred ceremonial dance from Buddhist traditions
- **Horse Dance**: Dynamic celebration of the horse-human connection
- **Eagle Dance**: Majestic movements inspired by eagle flight
- **Camel Dance**: Graceful representation of desert travel
- **Throat Singing Dance**: Unique combination of vocal and movement arts

## Contributing

This project is designed to preserve and promote Mongolian cultural heritage. Contributions that enhance the cultural accuracy and educational value are welcome.

## License

© 2025 Mongolian Traditional Dance Ensemble. All rights reserved.

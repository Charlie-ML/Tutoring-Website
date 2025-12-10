# Private Tutoring Business Website

## Overview

This is a professional website for a private tutoring business, designed to build trust with parents and students while making it easy to contact the tutor. The application follows a single-page design with smooth scrolling navigation between sections including Hero, About, Services, Testimonials, and Contact.

The project uses a modern full-stack TypeScript architecture with React on the frontend and Express on the backend, styled with Tailwind CSS and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, built using Vite
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: shadcn/ui (New York style) with Radix UI primitives
- **Design System**: Navy blue primary color (#1e3a5f), gold accent (#d4af37), clean professional typography using Inter/DM Sans fonts

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with support for development (Vite middleware) and production (static file serving)
- **API Pattern**: RESTful routes prefixed with `/api`
- **Storage**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`) - designed for easy database swap

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Validation**: Zod schemas generated from Drizzle schemas using `drizzle-zod`
- **Migrations**: Managed via `drizzle-kit push` command

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Path Aliases**: `@/*` maps to `client/src/*`, `@shared/*` maps to `shared/*`

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── static.ts     # Static file serving
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit for type-safe queries
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Libraries
- **Radix UI**: Headless UI primitives for accessible components
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **react-day-picker**: Date picker component
- **Vaul**: Drawer component
- **cmdk**: Command menu component

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundler for production builds
- **TypeScript**: Type checking across the entire codebase
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS/Autoprefixer**: CSS processing

### Runtime Dependencies
- **TanStack React Query**: Data fetching and caching
- **react-hook-form**: Form handling with Zod resolver
- **wouter**: Lightweight React router
- **date-fns**: Date utility library
- **class-variance-authority**: Component variant styling
- **clsx/tailwind-merge**: Conditional class name utilities